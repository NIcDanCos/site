# Logo Assets

This directory contains logo images used throughout the portfolio site.

## Current Logo Files

### `logo.svg`
**Used in:** TerminalHeader (Hero section)
**Dimensions:** Square (optimized for 48×32px)
**Description:** Square logo with hexagonal border and terminal prompt symbol

### `logo-terminal.svg`
**Used in:** (Available for use)
**Dimensions:** Rectangular (optimized for 48×32px)
**Description:** Horizontal logo variant with terminal prompt and animated cursor

### `logo-mobile.svg` 🆕
**Used in:** Navbar (Mobile only, < 768px)
**Dimensions:** Square (optimized for 40×40px)
**Description:** Compact circular logo for mobile navbar - shows on small screens only

### `logo-desktop.svg` 🆕
**Used in:** Navbar (Tablet/Desktop, >= 768px)
**Dimensions:** Square (optimized for 48×48px)
**Description:** Full hexagonal logo for desktop navbar - shows on larger screens only

## Responsive Logo System

The Navbar now uses **different logos for different screen sizes**:

- **Mobile (< 768px):** Uses `logo-mobile.svg` - compact design
- **Tablet/Desktop (>= 768px):** Uses `logo-desktop.svg` - full design

This allows you to optimize logo appearance for each screen size!

## How to Replace Logos

### Option 1: Replace Existing Files (Easiest)
Simply replace these files with your own logos:
- `logo-mobile.svg` - Your mobile navbar logo
- `logo-desktop.svg` - Your desktop/tablet navbar logo
- `logo.svg` - Your terminal header logo
- Keep the same filenames = No code changes needed!

### Option 2: Use Different Files
If you want to use different filenames or formats:

1. Add your logo files to this directory
2. Update the references in the components:

**For Navbar Mobile logo:**
```tsx
// File: src/components/Navbar.tsx (around line 28)
<Logo
  size="navbar"
  imageSrc="/assets/logo/YOUR-MOBILE-LOGO.png"  // ← Change this
  alt="Site Logo"
  className="md:hidden"
/>
```

**For Navbar Desktop/Tablet logo:**
```tsx
// File: src/components/Navbar.tsx (around line 36)
<Logo
  size="navbar"
  imageSrc="/assets/logo/YOUR-DESKTOP-LOGO.png"  // ← Change this
  alt="Site Logo"
  className="hidden md:block"
/>
```

**For Terminal logo:**
```tsx
// File: src/components/Hero/TerminalHeader.tsx (around line 90)
<Logo
  size="terminal"
  imageSrc="/assets/logo/YOUR-TERMINAL-LOGO.svg"  // ← Change this
  alt="Site Logo"
/>
```

## Logo Specifications

### Navbar Mobile Logo (`logo-mobile.svg`)
- **Aspect Ratio:** Square (1:1)
- **Recommended Size:** 40×40px minimum
- **Display Size:** 40×40px
- **Screen Size:** < 768px (mobile only)
- **Best Format:** SVG (scales perfectly) or PNG with transparent background
- **Design Tip:** Keep it simple and compact for small screens

### Navbar Desktop Logo (`logo-desktop.svg`)
- **Aspect Ratio:** Square (1:1)
- **Recommended Size:** 48×48px or higher
- **Display Size:** 48×48px
- **Screen Size:** >= 768px (tablet and desktop)
- **Best Format:** SVG (scales perfectly) or PNG with transparent background
- **Design Tip:** Can include more detail since it's displayed larger

### Terminal Logo (`logo.svg`)
- **Aspect Ratio:** Rectangular (~3:2 ratio) or Square
- **Recommended Size:** 150×100px viewBox or higher
- **Display Size:** 48×32px
- **Best Format:** SVG (scales perfectly) or PNG with transparent background
- **Note:** Wider, horizontal logos work best in this context

## Supported Formats

- **SVG** (recommended) - Scales perfectly at all sizes
- **PNG** - Use transparent background for best results
- **JPEG** - Works, but may not blend as well with dark theme

## Design Tips

1. **Color Palette:** Use cyan (#00D9FF) or white for visibility on dark background
2. **Transparency:** Use transparent backgrounds for best integration
3. **Style:** Match the terminal/cyberpunk aesthetic of the site
4. **Test:** View logos at different screen sizes to ensure they look good

## Current Theme Colors

- **Primary (Cyan):** `hsl(190, 100%, 50%)` / `#00D9FF`
- **Accent (Purple):** `hsl(258, 90%, 66%)` / `#8B5CF6`
- **Background:** `hsl(220, 30%, 4%)`
- **Foreground:** `hsl(0, 0%, 88%)`

## Customizing Responsive Behavior

### Changing the Breakpoint

The responsive logo switches at **768px** by default (Tailwind's `md` breakpoint).

To change this breakpoint, edit the className in `src/components/Navbar.tsx`:

**Available Tailwind Breakpoints:**
- `sm:` - 640px
- `md:` - 768px (current)
- `lg:` - 1024px
- `xl:` - 1280px
- `2xl:` - 1536px

**Example - Switch at 640px instead:**
```tsx
{/* Mobile Logo */}
<Logo
  imageSrc="/assets/logo/logo-mobile.svg"
  className="sm:hidden"  // ← Change md to sm
/>

{/* Desktop Logo */}
<Logo
  imageSrc="/assets/logo/logo-desktop.svg"
  className="hidden sm:block"  // ← Change md to sm
/>
```

### Using the Same Logo for All Sizes

If you want the same logo everywhere, simply remove one of the Logo components and remove the responsive className from the other:

```tsx
<Logo
  size="navbar"
  imageSrc="/assets/logo/logo.svg"
  alt="Site Logo"
  // No className = shows on all screen sizes
/>
```

## Mobile Logo (Terminal)

The terminal logo is currently hidden on mobile devices (< 640px) to save space.
To enable it, uncomment lines 39-43 in `src/components/Hero/TerminalHeader.tsx`.
