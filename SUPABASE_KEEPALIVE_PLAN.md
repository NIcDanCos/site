# Supabase Keep-Alive Implementation Plan
## GitHub Actions Scheduled Workflow

---

## 📋 Executive Summary

**Objective:** Prevent Supabase free-tier project from pausing due to 7-day inactivity by implementing an automated GitHub Actions workflow that queries the database every 2 days (4 times per week).

**Solution:** GitHub Actions scheduled workflow using cron expressions
**Estimated Implementation Time:** 15-20 minutes
**Maintenance:** Zero ongoing maintenance required
**Cost:** Free (uses ~8 minutes of GitHub's 2,000 free minutes/month)

---

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                     GitHub Actions                          │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐  │
│  │  Scheduled Workflow (Every 2 Days - 4x Weekly)      │  │
│  │  • Sundays @ 09:00 UTC                              │  │
│  │  • Mondays @ 09:00 UTC                              │  │
│  │  • Wednesdays @ 09:00 UTC                           │  │
│  │  • Fridays @ 09:00 UTC                              │  │
│  │  • Manual trigger available                         │  │
│  └─────────────────┬───────────────────────────────────┘  │
│                    │                                        │
│  ┌─────────────────▼───────────────────────────────────┐  │
│  │  Node.js Runtime (ubuntu-latest)                    │  │
│  │  • Install @supabase/supabase-js                    │  │
│  │  • Initialize client with secrets                   │  │
│  │  • Execute health check query                       │  │
│  └─────────────────┬───────────────────────────────────┘  │
│                    │                                        │
└────────────────────┼────────────────────────────────────────┘
                     │
                     │ HTTPS Request
                     │
┌────────────────────▼────────────────────────────────────────┐
│              Supabase Project                               │
│  https://jictdrtbdksjemetydfo.supabase.co                  │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐  │
│  │  PostgREST API Layer                                │  │
│  │  • Receives REST query                              │  │
│  │  • Authenticates with anon key                      │  │
│  │  • Routes to connection pooler                      │  │
│  └─────────────────┬───────────────────────────────────┘  │
│                    │                                        │
│  ┌─────────────────▼───────────────────────────────────┐  │
│  │  Supavisor (Connection Pooler)                      │  │
│  │  • Transaction mode for short-lived connections    │  │
│  │  • Manages connection pool efficiently             │  │
│  └─────────────────┬───────────────────────────────────┘  │
│                    │                                        │
│  ┌─────────────────▼───────────────────────────────────┐  │
│  │  PostgreSQL Database                                │  │
│  │  • Query: SELECT COUNT(*) FROM contact_messages    │  │
│  │  • Logs activity to prevent pausing                │  │
│  │  • Returns result                                   │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Key Design Decisions:**

1. **Query Target:** `contact_messages` table
   - Already exists in your schema
   - Minimal data footprint
   - Uses `COUNT(*)` aggregation (faster than SELECT *)
   - No data exposure risk

2. **Frequency:** Every 2 days (4 times weekly: Sunday, Monday, Wednesday, Friday)
   - Safety margin: 2-day maximum gap vs 7-day threshold (71% buffer)
   - Minimal GitHub Actions minutes consumption (~8 mins/month)
   - Non-intrusive scheduling (9 AM UTC = off-peak for most time zones)
   - Resilient to failed runs (next attempt within 2 days)

3. **Authentication:** Anon key (already public in codebase)
   - Sufficient for SELECT operations
   - No elevated permissions needed
   - Follows principle of least privilege

---

## 🔒 Security Best Practices (2025 Standards)

### 1. Secrets Management

**✅ Use GitHub Repository Secrets**
- Never hardcode credentials in workflow files
- Rotate secrets every 90 days
- Use environment-scoped secrets for production

**✅ Minimal Permissions**
- Use `GITHUB_TOKEN` with read-only default permissions
- Anon key (not service role key) for database queries
- Restrict workflow to specific branches if needed

### 2. Action Pinning

**✅ Pin Actions to Commit SHA**
```yaml
# ❌ Bad: Mutable tag
uses: actions/checkout@v4

# ✅ Good: Immutable commit SHA + comment
uses: actions/checkout@b4ffde65f46336ab88eb53be808477a3936bae11 # v4.1.1
```

**Why:** Prevents supply chain attacks via modified action code

### 3. Dependency Security

**✅ Use NPM Force Flag with Caution**
```bash
npm install @supabase/supabase-js --force
```
- Only used to bypass peer dependency warnings in CI
- Production dependencies managed via package.json + lock file
- Workflow dependencies ephemeral (discarded after run)

### 4. Least Privilege Execution

**✅ Read-Only Token Permissions**
```yaml
permissions:
  contents: read  # No write access to repository
```

### 5. Audit Trail

**✅ Verbose Logging**
- Log query execution time
- Log row count or success indicator
- Capture errors with full context
- Enable GitHub Actions logs retention

---

## 📝 Detailed Implementation Steps

### Step 1: Create Workflow Directory Structure

**Location:** `.github/workflows/`
**File:** `supabase-keepalive.yml`

**Why this structure:**
- GitHub Actions standard convention
- Auto-discovered by GitHub
- Supports multiple workflows in same directory

**Commands:**
```bash
mkdir -p .github/workflows
touch .github/workflows/supabase-keepalive.yml
```

---

### Step 2: Configure GitHub Repository Secrets

**Navigate to:** Repository → Settings → Secrets and variables → Actions → New repository secret

**Secrets to Create:**

| Secret Name | Value | Source |
|-------------|-------|--------|
| `SUPABASE_URL` | `https://jictdrtbdksjemetydfo.supabase.co` | `src/lib/supabase.ts:3` |
| `SUPABASE_ANON_KEY` | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` | `src/lib/supabase.ts:4` |

**⚠️ Important Notes:**
- Anon key is already public in your codebase (this is intentional by Supabase)
- Using secrets is still best practice for workflows
- Enables easy rotation without code changes
- Secrets are encrypted at rest and in transit

**Security Considerations:**
- Anon key has Row Level Security (RLS) restrictions
- Only grants permissions defined in Supabase RLS policies
- Cannot perform admin operations
- Safe for public client-side use

---

### Step 3: Write the GitHub Actions Workflow

**File:** `.github/workflows/supabase-keepalive.yml`

**Workflow Breakdown:**

#### 3.1 Workflow Metadata
```yaml
name: Supabase Keep-Alive

# Purpose: Prevent free-tier project pausing due to inactivity
# Frequency: Every 2 days (Sun, Mon, Wed, Fri)
# Estimated runtime: ~2 minutes per execution
# Monthly cost: ~8 minutes of GitHub Actions quota
```

#### 3.2 Trigger Configuration
```yaml
on:
  schedule:
    # Cron: "minute hour day month weekday"
    # Runs at 09:00 UTC every Sun (0), Mon (1), Wed (3), Fri (5)
    # Ensures maximum 2-day gap between runs
    - cron: '0 9 * * 0,1,3,5'

  workflow_dispatch:
    # Enables manual triggering from GitHub UI
    # Useful for testing or emergency pings
```

**Cron Expression Explained:**
- `0` - Minute 0 (top of the hour)
- `9` - Hour 9 (9:00 AM UTC)
- `*` - Any day of the month
- `*` - Any month
- `0,1,3,5` - Sunday (0), Monday (1), Wednesday (3), Friday (5)

**Why these days?**
- Maximum gap: 2 days (between any consecutive runs)
- Well below 7-day threshold (71% safety buffer)
- Pattern: Sun→Mon (1d), Mon→Wed (2d), Wed→Fri (2d), Fri→Sun (2d)
- Resilient: If one run fails, next attempt within 1-2 days

#### 3.3 Security Permissions
```yaml
permissions:
  contents: read  # Read-only access to repository
  # No write, issues, or pull-requests permissions
```

#### 3.4 Job Definition
```yaml
jobs:
  ping-database:
    name: Query Database to Prevent Pausing
    runs-on: ubuntu-latest
    timeout-minutes: 5  # Fail-safe: kill job if hangs
```

#### 3.5 Execution Steps

**Step 1: Checkout Repository**
```yaml
- name: Checkout repository
  uses: actions/checkout@b4ffde65f46336ab88eb53be808477a3936bae11 # v4.1.1
  with:
    sparse-checkout: |
      package.json
    sparse-checkout-cone-mode: false
```
- **Why checkout?** Enables future extensibility (e.g., shared scripts)
- **Sparse checkout:** Only fetch minimal files (faster, more secure)
- **Current usage:** Not strictly required but follows best practice

**Step 2: Setup Node.js Runtime**
```yaml
- name: Setup Node.js
  uses: actions/setup-node@60edb5dd545a775178f52524783378180af0d1f8 # v4.0.2
  with:
    node-version: '20'  # LTS version, matches your dev environment
    cache: 'npm'        # Cache npm packages for faster runs
```

**Step 3: Install Supabase Client**
```yaml
- name: Install Supabase Client
  run: npm install @supabase/supabase-js
  env:
    NODE_ENV: production  # Skip devDependencies
```
- Installs only required dependency
- Ephemeral: discarded after workflow completes
- Uses latest stable version (npm default)

**Step 4: Execute Health Check Query**
```yaml
- name: Ping Supabase Database
  env:
    SUPABASE_URL: ${{ secrets.SUPABASE_URL }}
    SUPABASE_ANON_KEY: ${{ secrets.SUPABASE_ANON_KEY }}
  run: |
    node --no-warnings << 'SCRIPT'
    const { createClient } = require('@supabase/supabase-js');

    (async () => {
      const startTime = Date.now();

      try {
        // Initialize client
        const supabase = createClient(
          process.env.SUPABASE_URL,
          process.env.SUPABASE_ANON_KEY
        );

        console.log('🔗 Connecting to Supabase...');

        // Health check query: COUNT is faster than SELECT *
        const { data, error, count } = await supabase
          .from('contact_messages')
          .select('*', { count: 'exact', head: true });

        if (error) throw error;

        const duration = Date.now() - startTime;

        console.log('✅ Supabase ping successful!');
        console.log(`📊 Contact messages in database: ${count}`);
        console.log(`⏱️  Query execution time: ${duration}ms`);
        console.log(`📅 Last activity: ${new Date().toISOString()}`);

        process.exit(0);
      } catch (error) {
        const duration = Date.now() - startTime;

        console.error('❌ Supabase ping failed!');
        console.error(`⏱️  Failed after: ${duration}ms`);
        console.error(`🔴 Error: ${error.message}`);
        console.error(`📋 Full error:`, error);

        process.exit(1);
      }
    })();
    SCRIPT
```

**Query Breakdown:**

1. **`select('*', { count: 'exact', head: true })`**
   - `head: true` - Don't return row data, only count
   - `count: 'exact'` - Get accurate row count
   - **Result:** Minimal network payload, faster execution
   - **Activity logged:** Same as full SELECT query

2. **Error Handling**
   - Descriptive error logging
   - Exit code 1 on failure (triggers GitHub Actions failure alert)
   - Execution time tracking for performance monitoring

3. **Success Metrics**
   - Row count (validates table accessibility)
   - Execution time (monitors API performance degradation)
   - ISO timestamp (audit trail)

---

### Step 4: Test the Workflow

**4.1 Initial Test (Manual Trigger)**
1. Navigate to: Repository → Actions → "Supabase Keep-Alive"
2. Click "Run workflow" → Select branch `main` → "Run workflow"
3. Monitor execution in real-time
4. Verify output logs show:
   - ✅ Connection successful
   - 📊 Row count displayed
   - ⏱️ Execution time < 5 seconds

**4.2 Verify in Supabase Dashboard**
1. Login to Supabase dashboard
2. Navigate to: Project → Database → Logs
3. Confirm query appears in logs
4. Check timestamp matches GitHub Actions execution time

**4.3 Schedule Verification**
- First scheduled run: Next Monday or Thursday at 09:00 UTC
- Check: Actions tab will show scheduled run in "Workflow runs" list
- GitHub displays next scheduled run time in UI

---

### Step 5: Monitoring & Alerts Setup

**5.1 Enable GitHub Actions Notifications**
- Repository → Settings → Notifications
- Enable: "Workflows - Failed workflow run"
- Configure delivery: Email, Slack, or Discord webhook

**5.2 Create Status Badge (Optional)**
Add to `README.md`:
```markdown
[![Supabase Keep-Alive](https://github.com/YOUR_USERNAME/portfolio-site/actions/workflows/supabase-keepalive.yml/badge.svg)](https://github.com/YOUR_USERNAME/portfolio-site/actions/workflows/supabase-keepalive.yml)
```
- Shows real-time workflow status
- Green badge = last run succeeded
- Red badge = workflow failing (investigate immediately)

**5.3 Set Up Monitoring Dashboard**
Track these metrics:
- Workflow success rate (target: 100%)
- Average execution time (baseline: 2-3 seconds)
- GitHub Actions quota usage (target: <1% of 2,000 minutes)

---

## 🧪 Testing Strategy

### Test Case 1: Successful Execution
**Objective:** Verify happy path works correctly

**Steps:**
1. Trigger workflow manually
2. Expect: Exit code 0, success logs

**Expected Output:**
```
🔗 Connecting to Supabase...
✅ Supabase ping successful!
📊 Contact messages in database: 12
⏱️  Query execution time: 1847ms
📅 Last activity: 2025-10-20T14:32:15.123Z
```

**Pass Criteria:**
- No errors thrown
- Row count matches database state
- Execution time < 5 seconds

---

### Test Case 2: Invalid Credentials
**Objective:** Verify error handling

**Steps:**
1. Temporarily corrupt `SUPABASE_ANON_KEY` secret
2. Trigger workflow manually
3. Expect: Exit code 1, error logs

**Expected Output:**
```
❌ Supabase ping failed!
⏱️  Failed after: 245ms
🔴 Error: Invalid API key
```

**Pass Criteria:**
- Workflow marked as failed
- Error message is descriptive
- GitHub sends failure notification

**Cleanup:** Restore correct secret value

---

### Test Case 3: Network Failure Simulation
**Objective:** Verify timeout handling

**Steps:**
1. If Supabase is temporarily down, workflow should fail gracefully
2. Retry on next scheduled run

**Expected Behavior:**
- Timeout after 5 minutes (job-level timeout)
- Clear error message
- Auto-recovery on next run

---

### Test Case 4: Schedule Validation
**Objective:** Confirm cron timing

**Method:**
1. Monitor Actions tab after deployment
2. Verify runs occur at expected times
3. Check timezone handling (UTC)

**Tool:** [Cron Expression Parser](https://crontab.guru/#0_9_*_*_0,1,3,5)

---

## 📈 Scalability Considerations

### Current Implementation: Single Project

**Architecture:**
```yaml
jobs:
  ping-database:
    runs-on: ubuntu-latest
    steps:
      - name: Ping Supabase
        run: [Query single database]
```

**Capacity:**
- 1 Supabase project
- 4 executions/week (every 2 days)
- ~8 minutes/month GitHub Actions quota

---

### Future Enhancement: Multi-Project Support

**Scenario:** Managing multiple Supabase projects (e.g., staging, client projects)

**Approach 1: Matrix Strategy (Parallel Execution)**
```yaml
jobs:
  ping-database:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        project:
          - name: portfolio-production
            url: SUPABASE_PROD_URL
            key: SUPABASE_PROD_KEY
            table: contact_messages
          - name: client-staging
            url: SUPABASE_STAGING_URL
            key: SUPABASE_STAGING_KEY
            table: users
    steps:
      - name: Ping ${{ matrix.project.name }}
        env:
          SUPABASE_URL: ${{ secrets[matrix.project.url] }}
          SUPABASE_ANON_KEY: ${{ secrets[matrix.project.key] }}
        run: [Query with matrix.project.table]
```

**Benefits:**
- Runs in parallel (faster total execution)
- Centralized configuration
- Easy to add/remove projects

**Cost:** Linear increase in GitHub Actions minutes

---

**Approach 2: External Configuration File**
```yaml
# projects.json
[
  {
    "name": "Portfolio Production",
    "url_secret": "SUPABASE_PROD_URL",
    "key_secret": "SUPABASE_PROD_KEY",
    "table": "contact_messages"
  },
  {
    "name": "Client Staging",
    "url_secret": "SUPABASE_CLIENT_URL",
    "key_secret": "SUPABASE_CLIENT_KEY",
    "table": "activity_log"
  }
]
```

```yaml
# Workflow reads projects.json and iterates
- name: Ping Multiple Projects
  run: |
    node scripts/ping-all-projects.js
```

**Benefits:**
- No workflow file changes when adding projects
- Can use shared script in `scripts/` directory
- Better code organization

---

### Future Enhancement: Health Monitoring

**Add Observability:**
```yaml
- name: Report to Monitoring Service
  if: failure()
  run: |
    curl -X POST https://monitoring.example.com/webhook \
      -H "Content-Type: application/json" \
      -d '{
        "service": "supabase-keepalive",
        "status": "failed",
        "timestamp": "'$(date -u +%Y-%m-%dT%H:%M:%SZ)'"
      }'
```

**Integration Options:**
- Slack webhook for team alerts
- Datadog/Sentry for centralized monitoring
- Custom dashboard via GitHub Actions API

---

### Future Enhancement: Dynamic Scheduling

**Use Case:** Adjust frequency based on project tier

```yaml
on:
  schedule:
    # Free tier: Twice weekly
    - cron: '0 9 * * 1,4'
    # Pro tier (if ever pausing): Once weekly
    # - cron: '0 9 * * 1'
```

**Configuration-driven schedule:**
```yaml
# Read from repository variable
- name: Determine schedule
  run: |
    TIER="${{ vars.SUPABASE_TIER }}"
    if [ "$TIER" = "free" ]; then
      echo "Running in free tier mode (twice weekly)"
    fi
```

---

## 🔄 Rollback Plan

### If Workflow Causes Issues

**Scenario 1: Excessive GitHub Actions Usage**
- **Solution:** Reduce frequency to twice weekly (change cron to `'0 9 * * 1,4'`)
- **Implementation time:** 2 minutes

**Scenario 2: Database Performance Impact**
- **Symptom:** Query execution time > 10 seconds consistently
- **Solution:** Switch to lighter query (e.g., `SELECT 1`)
- **Implementation:** Modify query in workflow file

**Scenario 3: Authentication Errors**
- **Symptom:** Anon key permissions insufficient
- **Solution:**
  1. Verify RLS policies in Supabase
  2. Ensure `contact_messages` table allows public SELECT
  3. Fallback: Query `auth.users` table (system table, always accessible)

**Emergency Disable:**
1. Navigate to: Repository → Settings → Actions → Disable Actions
2. Or: Delete `.github/workflows/supabase-keepalive.yml`
3. Or: Add `if: false` to job definition

---

## 📊 Success Metrics

### Key Performance Indicators (KPIs)

| Metric | Target | Measurement |
|--------|--------|-------------|
| **Uptime** | 100% workflow success rate | GitHub Actions dashboard |
| **Response Time** | < 5 seconds avg | Workflow logs |
| **Reliability** | Zero failed runs/month | GitHub notifications |
| **Cost** | < 5 minutes/month | GitHub Actions quota |
| **Supabase Status** | Never paused | Supabase dashboard |

### Monitoring Checklist (Monthly)

- [ ] Review workflow execution history (Actions tab)
- [ ] Check average execution time (trending up = investigate)
- [ ] Verify Supabase project status (not paused)
- [ ] Confirm secrets have not expired
- [ ] Review GitHub Actions quota usage
- [ ] Test manual workflow trigger

---

## 🛠️ Maintenance Schedule

### Weekly
- **None required** - Workflow is fully automated

### Monthly
- Review execution logs for anomalies
- Verify Supabase project remains active

### Quarterly (Every 90 Days)
- **Rotate secrets** (best practice)
  1. Generate new anon key in Supabase (if rotating)
  2. Update GitHub secrets
  3. Test workflow with new credentials
- Update pinned action versions if security patches released
- Review cron schedule effectiveness

### Annually
- Review Node.js version in workflow (update to latest LTS)
- Audit workflow permissions
- Evaluate alternative solutions (e.g., Supabase Pro tier)

---

## 📚 Codebase Integration

### Follows Existing Patterns

**1. TypeScript-First Approach**
- Workflow uses Node.js (consistent with Vite/React stack)
- Could migrate to TypeScript script if extracted to `scripts/` directory
- Future enhancement: `scripts/supabase-keepalive.ts`

**2. Environment-Based Configuration**
- Uses secrets (similar to `VITE_*` environment variables)
- Separates config from code
- Enables different environments (prod/staging)

**3. Error Handling**
- Descriptive console logs (matches React error boundaries)
- Try-catch pattern (consistent with async operations in codebase)
- Exit codes for automation (follows Node.js conventions)

**4. Modularity**
- Single-purpose workflow file
- Can extract query logic to shared script later
- Composable with other workflows

---

## 🔗 Related Files

### Existing Files to Reference

| File | Relevance |
|------|-----------|
| `src/lib/supabase.ts` | Source of Supabase credentials |
| `src/hooks/useProjectAccess.ts` | Reference for query patterns |
| `src/components/ContactModal.tsx` | Reference for `contact_messages` schema |
| `package.json` | Node.js version alignment |
| `.gitignore` | Already excludes `.env` (secrets safe) |

### New Files to Create

| File | Purpose |
|------|---------|
| `.github/workflows/supabase-keepalive.yml` | **Primary workflow file** |
| `scripts/supabase-keepalive.ts` | *(Future)* Extracted TypeScript script |
| `.github/workflows/README.md` | *(Optional)* Workflow documentation |

---

## 🚀 Migration Path: Environment Variables

### Current State: Hardcoded Credentials
```typescript
// src/lib/supabase.ts
const supabaseUrl = 'https://jictdrtbdksjemetydfo.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';
```

### Recommended Future State: Environment Variables
```typescript
// src/lib/supabase.ts
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}
```

**Benefits:**
1. Secrets not committed to git (even though anon key is safe)
2. Easy to switch between dev/staging/prod environments
3. Consistent with Vite best practices
4. Workflow already uses this pattern

**Implementation:**
1. Create `.env` file (already in `.gitignore`)
2. Add variables:
   ```env
   VITE_SUPABASE_URL=https://jictdrtbdksjemetydfo.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJhbG...
   ```
3. Update `src/lib/supabase.ts`
4. Commit only code changes (not `.env`)

**Timeline:** Can be done alongside workflow implementation or after

---

## 🎯 Implementation Checklist

### Pre-Implementation
- [ ] Read this entire plan document
- [ ] Understand cron syntax and scheduling
- [ ] Review GitHub Actions pricing (confirm free tier sufficient)
- [ ] Backup current Supabase project (export schema)

### Implementation Phase
- [ ] Create `.github/workflows/` directory
- [ ] Create `supabase-keepalive.yml` workflow file
- [ ] Add `SUPABASE_URL` secret to GitHub repository
- [ ] Add `SUPABASE_ANON_KEY` secret to GitHub repository
- [ ] Pin action versions to commit SHAs
- [ ] Review security permissions in workflow

### Testing Phase
- [ ] Manually trigger workflow (first test)
- [ ] Verify success in GitHub Actions UI
- [ ] Check Supabase logs for query execution
- [ ] Test error handling (invalid credentials)
- [ ] Verify scheduled run appears in Actions tab
- [ ] Set up failure notifications

### Post-Implementation
- [ ] Monitor first 2 scheduled runs
- [ ] Add status badge to README (optional)
- [ ] Document in project wiki/README
- [ ] Schedule 90-day secret rotation reminder
- [ ] Archive this plan document for future reference

---

## 📖 Additional Resources

### Official Documentation
- [GitHub Actions: Scheduled Events](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#schedule)
- [GitHub Actions: Security Hardening](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions)
- [Supabase: Connection Management](https://supabase.com/docs/guides/database/connection-management)
- [Supabase JavaScript Client v2 Docs](https://supabase.com/docs/reference/javascript/introduction)

### Community Resources
- [Crontab Guru](https://crontab.guru/) - Cron expression validator
- [GitHub Actions Status](https://www.githubstatus.com/) - Check GitHub uptime
- [Supabase Status](https://status.supabase.com/) - Check Supabase uptime

### Related Articles
- [How to Prevent Your Supabase Project from Being Paused](https://dev.to/jps27cse/how-to-prevent-your-supabase-project-database-from-being-paused-using-github-actions-3hel)
- [GitHub Actions Security Best Practices](https://blog.gitguardian.com/github-actions-security-cheat-sheet/)

---

## ❓ FAQ

**Q: Why not use Vercel Cron instead?**
A: Vercel free tier limits to 1 cron job. GitHub Actions allows unlimited workflows and is deployment-platform-agnostic.

**Q: Can I use service role key instead of anon key?**
A: Not recommended. Anon key follows principle of least privilege. Service role bypasses RLS and has elevated permissions.

**Q: What if GitHub Actions is down?**
A: Extremely rare (99.9% uptime). If down during scheduled run, workflow will fail but recover on next run. 3.5-day gap provides buffer.

**Q: Will this impact my GitHub Actions quota?**
A: Minimal. ~8 minutes/month out of 2,000 free minutes (0.4% usage).

**Q: Can I change the query to SELECT 1 instead?**
A: Yes, but querying actual table provides better validation that database is healthy. `SELECT 1` doesn't touch any tables.

**Q: Does this increase Supabase API usage?**
A: Yes, by 4 requests/week (16-18/month). Negligible impact on free tier limits (500,000 requests/month).

**Q: What if I upgrade to Supabase Pro?**
A: Pro tier doesn't pause, making this workflow optional. Keep it as monitoring health check if desired.

**Q: Can I add more complex logic later?**
A: Absolutely. This workflow can evolve to:
- Clean up old `project_access` records
- Send email notifications on contact form submissions
- Generate weekly activity reports
- Monitor database size

---

## 📝 Changelog Template

Use this format when updating the workflow:

```markdown
## [1.1.0] - 2025-11-15
### Added
- Multi-project support via matrix strategy

### Changed
- Increased timeout from 5 to 10 minutes

### Fixed
- Error handling for network timeouts

### Security
- Updated actions/checkout to v4.2.0 (SHA: abc123...)
```

---

## 🎓 Learning Outcomes

By implementing this workflow, you'll gain experience with:

1. **GitHub Actions Fundamentals**
   - Workflow syntax and structure
   - Scheduled triggers (cron expressions)
   - Secret management
   - Job execution environment

2. **CI/CD Best Practices**
   - Infrastructure as Code (IaC)
   - Automated testing strategies
   - Monitoring and alerting
   - Security hardening

3. **Supabase Operations**
   - PostgREST API patterns
   - Connection pooling concepts
   - Database health monitoring
   - Free tier limitations

4. **DevOps Principles**
   - Automation over manual processes
   - Fail-safe design (timeouts, retries)
   - Observability (logging, metrics)
   - Documentation as code

---

## 📞 Support & Troubleshooting

### Common Issues

**Issue 1: Workflow not appearing in Actions tab**
- **Cause:** YAML syntax error
- **Solution:** Validate YAML at [yamllint.com](http://www.yamllint.com/)
- **Check:** Workflow file must be in `.github/workflows/` directory

**Issue 2: "Invalid API key" error**
- **Cause:** Incorrect secret value or typo in secret name
- **Solution:**
  1. Verify secret name matches workflow exactly (`SUPABASE_ANON_KEY`)
  2. Re-copy key from `src/lib/supabase.ts`
  3. Ensure no extra whitespace in secret value

**Issue 3: "Table not found" error**
- **Cause:** RLS policy blocks anon key access
- **Solution:**
  1. Go to Supabase Dashboard → Authentication → Policies
  2. Add policy for `contact_messages`:
     ```sql
     CREATE POLICY "Enable read access for all users" ON "public"."contact_messages"
     FOR SELECT
     USING (true);
     ```

**Issue 4: Workflow runs but no logs**
- **Cause:** Asynchronous log streaming delay
- **Solution:** Wait 10-15 seconds and refresh page

**Issue 5: Schedule not triggering**
- **Cause:** Repository is private and owner has no GitHub Actions quota
- **Solution:** Public repos get unlimited Actions minutes

### Getting Help

1. **Check GitHub Actions logs** (most verbose information)
2. **Review Supabase logs** (Database → Query Performance)
3. **Test locally:**
   ```bash
   export SUPABASE_URL="https://..."
   export SUPABASE_ANON_KEY="eyJ..."
   node -e "[Paste workflow script here]"
   ```
4. **GitHub Community Forum:** [https://github.com/orgs/community/discussions](https://github.com/orgs/community/discussions)
5. **Supabase Discord:** [https://discord.supabase.com](https://discord.supabase.com)

---

## 🏁 Next Steps

After reading this plan:

1. **Review and approve** - Confirm approach aligns with your goals
2. **Ask clarifying questions** - Any concerns or modifications needed?
3. **Begin implementation** - Follow Step 1 (create directory structure)
4. **Collaborate on testing** - Verify workflow works before first scheduled run

**Estimated Total Time:** 15-20 minutes from start to finish

---

**Document Version:** 1.0.0
**Last Updated:** 2025-10-20
**Author:** AI Assistant (Claude)
**Reviewed By:** [Pending your review]
**Status:** ✅ Ready for Implementation
