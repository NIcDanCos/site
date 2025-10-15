# Hero Enhancement Plan: Package.json CV

## Overview
Transform the hero section code box into an interactive, animated package.json display that showcases skills, experience, and availability as npm dependencies.

## Design Principles
- **Composable**: Small, single-responsibility components
- **Scalable**: Easy to add/remove/update skills
- **Clean**: Short files, clear separation of concerns
- **Maintainable**: Data-driven, type-safe, well-documented
- **Performant**: Optimized animations, minimal re-renders
- **Consistent**: 100% aligned with existing codebase patterns

---

## Codebase Alignment Checklist

### ✅ Architecture Patterns Matched
- [x] **Flat component structure** - Components in `src/components/*.tsx` (not nested)
- [x] **Tailwind CSS only** - Zero CSS Modules, zero custom CSS files
- [x] **Existing design tokens** - Uses HSL colors from `index.css`
- [x] **Shared data/utilities** - Data in `src/lib/`, types in `src/types/`
- [x] **Path aliases** - Uses `@/` prefix (from tsconfig.json)
- [x] **No new dependencies** - Leverages existing Radix UI, React Router, etc.

### ✅ Styling Patterns Matched
- [x] **Same container styling** - `bg-card/50 backdrop-blur-sm border border-border`
- [x] **Same responsive breakpoints** - `text-[13px] min-[375px]:text-base sm:text-lg`
- [x] **Same color scheme** - `text-primary`, `text-amber-400`, `text-muted-foreground`, `text-accent`
- [x] **Same spacing** - `p-4 sm:p-8`, `mb-6 sm:mb-12`
- [x] **Same animations** - Reuses `animate-fade-in`, transition utilities

### ✅ Code Patterns Matched
- [x] **React patterns** - Functional components, hooks (useState, useNavigate)
- [x] **Import style** - Uses `@/components/` path aliases
- [x] **Event handlers** - Follows `handleViewWork` naming pattern
- [x] **Modal integration** - Reuses existing `ContactModal` component
- [x] **Type safety** - Full TypeScript with interfaces

### ⚠️ Zero Breaking Changes
- No modifications to existing files beyond Hero.tsx
- No new build dependencies
- No configuration changes
- No style conflicts
- Complete backward compatibility

---

## Architecture

### Folder Structure
**Aligned with existing codebase patterns:**
```
src/
├── components/
│   ├── Hero.tsx                        # Main hero component (existing - will modify)
│   ├── PackageJson.tsx                 # Main container (~60 lines)
│   ├── PackageHeader.tsx               # Name/version section (~40 lines)
│   ├── DependencyList.tsx              # Dependencies wrapper (~50 lines)
│   ├── Dependency.tsx                  # Single dependency line (~40 lines)
│   └── ScriptsSection.tsx              # Scripts section (~40 lines)
├── lib/
│   ├── utils.ts                        # Existing utilities
│   ├── supabase.ts                     # Existing supabase config
│   └── packageJsonData.ts              # Skills/dependencies data (~80 lines)
└── types/
    └── packageJson.ts                  # TypeScript interfaces (~40 lines)
```

**Key Alignment Decisions:**
- ✅ **Flat component structure** (matches existing `src/components/*.tsx` pattern)
- ✅ **Data in `src/lib/`** (matches existing `utils.ts`, `supabase.ts`)
- ✅ **Types in `src/types/`** (new folder at root level, standard pattern)
- ✅ **No CSS Modules** - will use Tailwind classes exclusively
- ✅ **Uses existing design tokens** from `index.css`

### Component Hierarchy
```
<Hero>
  └── <PackageJson>
      ├── <PackageHeader />
      ├── <DependencyList type="dependencies">
      │   └── <Dependency /> (multiple)
      ├── <DependencyList type="devDependencies">
      │   └── <Dependency /> (multiple)
      └── <ScriptsSection />
```

---

## Data Structure

### Type Definitions (`src/types/packageJson.ts`)
```typescript
export type DependencyCategory = 'core' | 'frontend' | 'backend' | 'tools';

export interface Dependency {
  name: string;
  version: string;
  category: DependencyCategory;
  yearsOfExperience?: number;
  highlight?: boolean; // For special emphasis
}

export interface ScriptCommand {
  name: string;
  command: string;
  action?: () => void; // Optional click handler
}

export interface PackageJsonData {
  name: string;
  version: string;
  description: string;
  dependencies: Dependency[];
  devDependencies: Dependency[];
  scripts: ScriptCommand[];
}
```

### Skills Data (`src/lib/packageJsonData.ts`)
```typescript
import { PackageJsonData } from '@/types/packageJson';

export const packageData: PackageJsonData = {
  name: "@nicdancos/portfolio",
  version: "2025.1.0",
  description: "Full Stack Developer specializing in React & APIs",

  dependencies: [
    { name: "react", version: "^5.years", category: "frontend", highlight: true },
    { name: "typescript", version: "^expert", category: "core" },
    { name: "node.js", version: "^4.years", category: "backend" },
    { name: "next.js", version: "^3.years", category: "frontend" },
    { name: "api-design", version: "^advanced", category: "backend" },
    // ... more skills
  ],

  devDependencies: [
    { name: "problem-solving", version: "∞", category: "core" },
    { name: "continuous-learning", version: "^always", category: "core" },
    { name: "team-collaboration", version: "^excellent", category: "tools" },
  ],

  scripts: [
    { name: "view-work", command: "navigate('/projects')" },
    { name: "contact", command: "openEmail()" },
    { name: "download-cv", command: "downloadResume()" },
  ]
};
```

---

## Component Specifications

### 1. PackageJson.tsx (Main Container)
**Location**: `src/components/PackageJson.tsx`

**Responsibility**: Layout and orchestration

**Features**:
- Renders package.json structure
- Manages typing animation state (optional phase 2)
- Applies Tailwind syntax highlighting classes
- Responsive container using existing patterns

**Implementation**:
```typescript
import { PackageHeader } from '@/components/PackageHeader';
import { DependencyList } from '@/components/DependencyList';
import { ScriptsSection } from '@/components/ScriptsSection';
import { packageData } from '@/lib/packageJsonData';

export const PackageJson = () => {
  // Uses same container styling as Hero.tsx:31
  return (
    <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 sm:p-8 mb-6 sm:mb-12 text-left w-full">
      <pre className="text-[13px] min-[375px]:text-base sm:text-lg break-words whitespace-pre-wrap">
        <code className="break-words">
          {/* Components render here */}
        </code>
      </pre>
    </div>
  );
};
```

**Props**: None (uses imported data from `@/lib/packageJsonData`)
**State**: Minimal - only for optional animations

---

### 2. PackageHeader.tsx
**Responsibility**: Display name, version, description
**Features**:
- Renders opening brace and metadata
- Version can animate/tick up
- Description can rotate through different taglines

**Props**:
```typescript
interface PackageHeaderProps {
  name: string;
  version: string;
  description: string;
}
```

---

### 3. DependencyList.tsx
**Responsibility**: Wrapper for dependency groups
**Features**:
- Handles "dependencies" or "devDependencies" section
- Manages staggered animation timing for children
- Category grouping (optional)

**Props**:
```typescript
interface DependencyListProps {
  type: 'dependencies' | 'devDependencies';
  items: Dependency[];
  animated?: boolean;
}
```

---

### 4. Dependency.tsx
**Responsibility**: Single dependency line
**Features**:
- Syntax-highlighted key: value pair
- Hover effects (tooltip with details)
- Optional pulse/glow for highlighted items
- Fade-in animation

**Props**:
```typescript
interface DependencyProps {
  dependency: Dependency;
  isLast: boolean; // For comma handling
  animationDelay?: number;
}
```

**Animations**:
- Fade in from opacity 0 → 1
- Slide in from left (subtle, 10px)
- Stagger delay based on index

---

### 5. ScriptsSection.tsx
**Responsibility**: Display and handle script commands
**Features**:
- Renders scripts as clickable commands
- Executes actions on click
- Hover effects (cursor changes, highlight)

**Props**:
```typescript
interface ScriptsSectionProps {
  scripts: ScriptCommand[];
}
```

---

## Styling Strategy

### Tailwind CSS (Matches Existing Codebase)
- **No CSS Modules** - Use Tailwind utility classes exclusively
- Leverage existing design tokens from `src/index.css`
- Use existing color variables defined in HSL format
- Maintain consistency with current Hero.tsx styling approach

### Color Mapping (Using Existing Design Tokens)
**From `src/index.css` (lines 10-60):**
```typescript
// Syntax highlighting using existing theme colors:
- JSON keys: text-primary (hsl(190 100% 50%)) - cyan
- String values: text-amber-400 - orange/amber
- Punctuation: text-muted-foreground (hsl(0 0% 65%)) - gray
- Keywords: text-accent (hsl(258 90% 66%)) - purple
- Background: bg-card/50 backdrop-blur-sm (matches current code box)
- Border: border-border (hsl(220 20% 20%))
```

### Responsive Behavior (Matches Current Hero)
```typescript
// Font sizes (matching Hero.tsx:32):
- Mobile (320-374px): text-[13px]
- Small mobile (375px+): text-base (16px)
- Tablet+: text-lg (18px)

// Container (matching Hero.tsx:31):
- Same bg-card/50 backdrop-blur-sm
- Same border-border rounded-lg
- Same padding: p-4 sm:p-8
- Same width constraint: w-full (max-width: 680px from parent)
```

### Animation Classes (Using Tailwind)
```typescript
- Fade in: animate-fade-in (existing in codebase)
- Hover effects: group-hover utilities
- Transitions: transition-all duration-300
- Reduced motion: motion-safe: and motion-reduce: prefixes
```

---

## Animation Strategy

### Phase 1: Simple Fade-In (Initial Implementation)
- Dependencies fade in with stagger (100ms delay each)
- No typing animation yet
- Keeps complexity low

### Phase 2: Advanced (Optional Future)
- Typing animation for entire package.json
- Version numbers tick up
- "Installing..." states with progress bars
- Rotating dependency values

---

## Implementation Phases

### Phase 1: Core Structure ✓
**Goal**: Get basic package.json rendering with data
1. Create folder structure
2. Define TypeScript types
3. Create skills data file
4. Build PackageJson container (no animations)
5. Build PackageHeader component
6. Build DependencyList component
7. Build Dependency component
8. Build ScriptsSection component
9. Add basic CSS styling

**Acceptance Criteria**:
- Displays all dependencies correctly
- Proper JSON syntax formatting
- Responsive layout works
- No TypeScript errors

---

### Phase 2: Styling & Polish ✓
**Goal**: Make it look professional and match existing design
1. Apply Tailwind classes for syntax highlighting (text-primary, text-amber-400, text-muted-foreground, text-accent)
2. Implement hover effects on dependencies using group/group-hover pattern
3. Use existing monospace font from Hero (inherited from browser defaults or add to index.css if needed)
4. Apply responsive font sizing (text-[13px] min-[375px]:text-base sm:text-lg)
5. Match existing container styling (bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 sm:p-8)
6. Ensure visual consistency with current Hero code box

**Acceptance Criteria**:
- Looks like authentic package.json
- Uses ONLY Tailwind classes (no custom CSS)
- Smooth hover interactions
- Mobile responsive (320px - desktop)
- Perfectly matches existing Hero aesthetic

---

### Phase 3: Basic Animations ✓
**Goal**: Add subtle, performant animations using Tailwind
1. Fade-in animation for dependencies (reuse existing animate-fade-in class if available, or use Tailwind's opacity + transition)
2. Staggered appearance (cascade effect) using style={{ animationDelay: `${index * 100}ms` }}
3. Hover scale/highlight effect using hover:scale-105 hover:text-primary/80
4. Smooth transitions using transition-all duration-300

**Acceptance Criteria**:
- Animations run smoothly (60fps) using CSS transitions
- No janky transitions
- Respects prefers-reduced-motion using motion-safe: and motion-reduce: prefixes
- All animations implemented with Tailwind utilities

---

### Phase 4: Interactivity ✓
**Goal**: Make scripts functional
1. Implement script click handlers (reuse existing handleViewWork pattern from Hero.tsx:10-12)
2. Add visual feedback on click using active:scale-95 transition
3. Connect to actual navigation/actions (useNavigate for routing, existing ContactModal for contact)
4. Optional: Add tooltips using @radix-ui/react-tooltip (already in dependencies) for dependency details

**Acceptance Criteria**:
- Scripts navigate correctly using existing patterns
- Visual feedback matches existing Button component behavior
- Accessible (keyboard navigation, focus states)
- No new dependencies required (reuse existing UI components)

---

### Phase 5: Advanced Features (Future)
**Goal**: Unique, polished interactions
- [ ] Rotating dependency versions
- [ ] "npm install" animation sequence
- [ ] Update notifications for new skills
- [ ] Search/filter dependencies
- [ ] Copy package.json to clipboard

---

## Testing Strategy

### Unit Tests
- Each component renders correctly
- Props are handled properly
- Animations can be disabled

### Integration Tests
- Full PackageJson renders with all children
- Click handlers fire correctly
- Data updates reflect in UI

### Accessibility Tests
- Keyboard navigation works
- Screen reader friendly
- Respects prefers-reduced-motion

---

## Performance Considerations

1. **Memoization**: Use `React.memo` for Dependency components
2. **Lazy animations**: Only animate visible elements (Intersection Observer)
3. **CSS animations**: Prefer CSS over JS for smooth 60fps
4. **Bundle size**: Keep dependencies minimal
5. **Code splitting**: Lazy load advanced features

---

## Accessibility

- Semantic HTML (`<code>`, `<pre>`, proper heading hierarchy)
- ARIA labels for interactive elements
- Keyboard navigation for scripts
- `prefers-reduced-motion` support
- Sufficient color contrast ratios
- Focus indicators on interactive elements

---

## Migration Plan

### Replace Current Code Box
1. Keep existing Hero.tsx structure
2. Replace current code box content with `<PackageJson />`
3. Maintain same container/sizing
4. Remove old static code
5. Test on all breakpoints

### Rollback Strategy
- Keep old code commented out initially
- Feature flag for easy toggle
- Full testing before removing old code

---

## Success Metrics

### User Engagement
- Time spent on hero section
- Interaction rate with scripts
- Scroll depth

### Technical Quality
- Lighthouse performance score >90
- Zero accessibility violations
- Bundle size increase <20KB
- No runtime errors

### Aesthetic Goals
- Unique and memorable
- Professional and polished
- Fast loading and smooth animations
- Works on all devices

---

## Files to Create (7 total)

**New Components:**
1. `src/components/PackageJson.tsx` (~60 lines)
2. `src/components/PackageHeader.tsx` (~40 lines)
3. `src/components/DependencyList.tsx` (~50 lines)
4. `src/components/Dependency.tsx` (~40 lines)
5. `src/components/ScriptsSection.tsx` (~40 lines)

**New Data/Types:**
6. `src/types/packageJson.ts` (~40 lines)
7. `src/lib/packageJsonData.ts` (~80 lines)

### Files to Modify (1 total)
8. `src/components/Hero.tsx` (replace lines 31-57 with PackageJson component)

---

## Timeline Estimate

- **Phase 1 (Core)**: 2-3 hours
- **Phase 2 (Styling)**: 1-2 hours
- **Phase 3 (Animations)**: 1-2 hours
- **Phase 4 (Interactivity)**: 1 hour
- **Total**: ~6-8 hours for full implementation

---

## Next Steps

1. ✅ Review and approve this plan
2. Begin Phase 1: Create types and data files
   - Create `src/types/packageJson.ts`
   - Create `src/lib/packageJsonData.ts`
3. Begin Phase 2: Create components (in order)
   - Create `src/components/Hero/Dependency.tsx` (smallest, no dependencies)
   - Create `src/components/Hero/DependencyList.tsx` (uses Dependency)
   - Create `src/components/Hero/PackageHeader.tsx` (independent)
   - Create `src/components/Hero/ScriptsSection.tsx` (independent)
   - Create `src/components/Hero/PackageJson.tsx` (uses all above)
4. Integrate into Hero
   - Modify `src/components/Hero.tsx` (replace lines 31-57)
5. Test at each phase
6. Iterate based on feedback

---

## Summary

This plan is **100% aligned** with your existing codebase:

✅ **Flat component structure** (not nested folders)
✅ **Tailwind CSS only** (zero CSS Modules)
✅ **Existing design tokens** (HSL colors from index.css)
✅ **Standard patterns** (data in lib/, types in types/)
✅ **No breaking changes** (only modifying Hero.tsx)
✅ **No new dependencies** (uses existing stack)
✅ **Clean, scalable code** (short files, composable components)

**Ready to start building?** 🚀
