# Design Token System Documentation

Complete centralized design token system for controlling all visual aspects of the portfolio site. This system provides fine-grained control over typography, spacing, breakpoints, and layout across all devices.

## 📚 Table of Contents

- [Overview](#overview)
- [File Structure](#file-structure)
- [Quick Start](#quick-start)
- [Token Modules](#token-modules)
- [Usage Examples](#usage-examples)
- [Migration Guide](#migration-guide)
- [Best Practices](#best-practices)

---

## Overview

The design token system centralizes all design decisions into typed TypeScript constants. This provides:

- **Type Safety**: Full TypeScript support with autocomplete
- **Consistency**: Reusable values across all components
- **Maintainability**: Single source of truth for design values
- **Responsiveness**: Built-in mobile/tablet/desktop breakpoints
- **Scalability**: Easy to extend and modify

### Design Philosophy

- **Separation of Concerns**: Each file handles a specific design domain
- **Composability**: Tokens can be combined and reused
- **Progressive Enhancement**: Mobile-first responsive design
- **Developer Experience**: Clear naming, extensive documentation

---

## File Structure

```
src/types/layout/
├── index.ts              # Main export (import from here)
├── README.md             # This file
│
├── breakpoints.ts        # 📱 Responsive breakpoints
├── typography.ts         # 🔤 Font sizes, weights, line heights
├── spacing.ts            # 📏 Margins, padding, gaps
├── layout-system.ts      # 📐 Containers, z-index, grid
├── responsive.ts         # 🔄 Responsive utilities & helpers
│
└── Component-specific:
    ├── general.ts        # General layout settings (legacy)
    ├── navbar.ts         # Navbar design tokens
    ├── hero.ts           # Hero section design tokens
    └── footer.ts         # Footer design tokens
```

---

## Quick Start

### Basic Import

```typescript
// Import everything from the main index
import { TYPOGRAPHY, SPACING, BREAKPOINTS } from '@/types/layout';

// Use in your component
<h1 className={TYPOGRAPHY.heading.h1.classes}>
  My Heading
</h1>

<div className={SPACING.padding.section.classes}>
  Content with responsive padding
</div>
```

### Direct File Import (Tree-shaking Friendly)

```typescript
// Import only what you need
import { TYPOGRAPHY } from '@/types/layout/typography';
import { SPACING } from '@/types/layout/spacing';
```

### Utility Functions

```typescript
import { combineResponsive, matchesBreakpoint } from '@/types/layout';

// Combine responsive classes
const classes = combineResponsive(
  'text-sm',
  'sm:text-base',
  'lg:text-lg'
);

// Check current breakpoint
if (matchesBreakpoint('tablet')) {
  // Tablet or larger logic
}
```

---

## Token Modules

### 1. Breakpoints (`breakpoints.ts`)

Custom responsive breakpoints for precise control over responsive behavior.

```typescript
import { BREAKPOINTS } from '@/types/layout/breakpoints';

// Breakpoint values
BREAKPOINTS.mobile.medium     // 375px (iPhone standard)
BREAKPOINTS.tablet.small      // 640px (Tailwind 'sm')
BREAKPOINTS.desktop.small     // 1024px (Tailwind 'lg')

// Helpers
getMinClass(480)              // 'min-[480px]'
getMediaQuery(768)            // '@media (min-width: 768px)'
```

**Categories:**
- **Mobile**: `xsmall` (320px) to `xlarge` (480px)
- **Tablet**: `small` (640px) to `large` (900px)
- **Desktop**: `small` (1024px) to `xlarge` (1920px)
- **Height**: `short` (600px) to `xtall` (1080px)
- **Special**: `foldable`, `fullHD`, `ultraWide`

### 2. Typography (`typography.ts`)

Complete font size scale with responsive controls.

```typescript
import { TYPOGRAPHY } from '@/types/layout/typography';

// Headings with responsive sizes
TYPOGRAPHY.heading.h1.classes    // 'text-3xl sm:text-4xl lg:text-5xl'
TYPOGRAPHY.heading.h2.classes    // 'text-2xl sm:text-3xl lg:text-4xl'

// Body text
TYPOGRAPHY.body.default.classes  // Responsive body text
TYPOGRAPHY.body.small.classes    // Smaller body text

// Code text
TYPOGRAPHY.code.terminal.classes // Terminal/monospace text

// UI elements
TYPOGRAPHY.ui.button.default.classes
TYPOGRAPHY.ui.label.classes

// Font utilities
FONT_WEIGHTS.semibold           // 'font-semibold'
LINE_HEIGHTS.relaxed            // 'leading-relaxed'
LETTER_SPACING.wide             // 'tracking-wide'
```

### 3. Spacing (`spacing.ts`)

Comprehensive spacing system for margins, padding, and gaps.

```typescript
import { SPACING } from '@/types/layout/spacing';

// Padding presets
SPACING.padding.section.classes     // Section padding
SPACING.padding.card.classes        // Card padding
SPACING.padding.button.medium.classes

// Margin presets
SPACING.margin.section.classes      // Section margins
SPACING.margin.heading.classes      // Heading bottom margin

// Gap presets
SPACING.gap.normal.classes          // Standard gap
SPACING.gap.grid.dense.classes      // Dense grid gap

// Base scales
SPACING.scale.px['4']              // 'px-4' (16px horizontal)
SPACING.scale.m['8']               // 'm-8' (32px all sides)
SPACING.scale.gap['6']             // 'gap-6' (24px gap)
```

### 4. Layout System (`layout-system.ts`)

Container widths, z-index, grid, and component sizing.

```typescript
import { LAYOUT_SYSTEM } from '@/types/layout/layout-system';

// Max widths
LAYOUT_SYSTEM.maxWidths.content.lg    // '64rem' (1024px)
LAYOUT_SYSTEM.maxWidths.hero          // '680px'
LAYOUT_SYSTEM.maxWidths.prose         // '65ch' (reading width)

// Z-index layering
LAYOUT_SYSTEM.zIndex.modal            // 50
LAYOUT_SYSTEM.zIndex.tooltip          // 70

// Component sizes
LAYOUT_SYSTEM.componentSizes.button.height.md  // 'h-10'
LAYOUT_SYSTEM.componentSizes.icon.lg           // '1.5rem'

// Grid system
LAYOUT_SYSTEM.grid.columns.desktop    // 12
LAYOUT_SYSTEM.grid.gap.normal         // 'gap-4'

// Utilities
flexCenter()                          // 'flex items-center justify-center'
responsiveGrid(1, 2, 3)               // Grid with responsive columns
```

### 5. Responsive Utilities (`responsive.ts`)

Helper functions for responsive design patterns.

```typescript
import {
  matchesBreakpoint,
  getViewportInfo,
  combineResponsive,
  isTouchDevice,
  isMobileDevice
} from '@/types/layout/responsive';

// Breakpoint detection
const isMobile = matchesBreakpoint('mobile');
const isTablet = matchesBreakpoint('tablet');

// Viewport info
const viewport = getViewportInfo();
console.log(viewport.width, viewport.deviceType);

// Combine classes
const classes = combineResponsive(
  'text-sm',
  'sm:text-base',
  'lg:text-lg'
);

// Device detection
if (isTouchDevice()) { /* Touch-specific logic */ }
if (isMobileDevice()) { /* Mobile-specific logic */ }

// Media queries
minWidth(768)    // '@media (min-width: 768px)'
maxHeight(600)   // '@media (max-height: 600px)'
```

---

## Usage Examples

### Example 1: Responsive Heading

```typescript
import { TYPOGRAPHY, SPACING } from '@/types/layout';

function PageTitle() {
  return (
    <h1 className={`
      ${TYPOGRAPHY.heading.h1.classes}
      ${SPACING.margin.heading.classes}
    `}>
      Welcome to My Site
    </h1>
  );
}
```

### Example 2: Card Component

```typescript
import { SPACING, LAYOUT_SYSTEM, TYPOGRAPHY } from '@/types/layout';

function Card({ children }) {
  return (
    <div
      className={`
        ${SPACING.padding.card.classes}
        ${LAYOUT_SYSTEM.borderRadius.lg}
      `}
      style={{ maxWidth: LAYOUT_SYSTEM.maxWidths.content.md }}
    >
      <h3 className={TYPOGRAPHY.heading.h3.classes}>
        Card Title
      </h3>
      <p className={TYPOGRAPHY.body.default.classes}>
        {children}
      </p>
    </div>
  );
}
```

### Example 3: Responsive Grid

```typescript
import { SPACING, responsiveGrid } from '@/types/layout';

function Gallery() {
  return (
    <div className={`
      ${responsiveGrid(1, 2, 3)}
      ${SPACING.gap.grid.normal.classes}
    `}>
      {/* Grid items */}
    </div>
  );
}
```

### Example 4: Custom Breakpoint

```typescript
import { BREAKPOINTS, getMinClass } from '@/types/layout';

function CustomComponent() {
  return (
    <div className={`
      text-sm
      ${getMinClass(BREAKPOINTS.mobile.large)}:text-base
      sm:text-lg
    `}>
      Responsive text with custom breakpoint
    </div>
  );
}
```

### Example 5: Modal with Z-Index

```typescript
import { LAYOUT_SYSTEM, SPACING } from '@/types/layout';

function Modal() {
  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50"
        style={{ zIndex: LAYOUT_SYSTEM.zIndex.overlay }}
      />

      {/* Modal */}
      <div
        className={SPACING.padding.modal.classes}
        style={{
          zIndex: LAYOUT_SYSTEM.zIndex.modal,
          maxWidth: LAYOUT_SYSTEM.maxWidths.content.sm
        }}
      >
        Modal content
      </div>
    </>
  );
}
```

---

## Migration Guide

### From Hardcoded Values

**Before:**
```typescript
<h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-5 lg:mb-6">
```

**After:**
```typescript
import { TYPOGRAPHY, SPACING } from '@/types/layout';

<h1 className={`
  ${TYPOGRAPHY.heading.h1.classes}
  ${SPACING.margin.heading.classes}
`}>
```

### From LAYOUT_CONSTANTS (Legacy)

**Before:**
```typescript
import { LAYOUT_CONSTANTS } from '@/types/layout';

className={LAYOUT_CONSTANTS.buttons.textSize}
```

**After:**
```typescript
import { HERO_TOKENS } from '@/types/layout';

className={HERO_TOKENS.buttons.textSize}
```

Or use the new typography system:
```typescript
import { TYPOGRAPHY } from '@/types/layout';

className={TYPOGRAPHY.ui.button.default.classes}
```

---

## Best Practices

### 1. Use Specific Imports for Tree-Shaking

```typescript
// ✅ Good - only imports what you need
import { TYPOGRAPHY } from '@/types/layout/typography';

// ⚠️ Less ideal - imports everything
import { TYPOGRAPHY } from '@/types/layout';
```

### 2. Prefer Token Classes Over Arbitrary Values

```typescript
// ✅ Good - uses design token
className={SPACING.padding.card.classes}

// ❌ Bad - hardcoded, not consistent
className="p-4 sm:p-5 lg:p-6"
```

### 3. Combine Tokens for Complex Styles

```typescript
// ✅ Good - composable
const cardClasses = combineResponsive(
  SPACING.padding.card.classes,
  LAYOUT_SYSTEM.borderRadius.lg,
  'bg-card'
);
```

### 4. Use Semantic Names

```typescript
// ✅ Good - semantic
const headingSize = TYPOGRAPHY.heading.h2.classes;

// ❌ Bad - non-semantic
const bigText = 'text-2xl sm:text-3xl';
```

### 5. Document Custom Breakpoints

```typescript
// ✅ Good - documented custom breakpoint
// At 480px, switch to larger font for better readability on phablets
className={`text-sm ${getMinClass(480)}:text-base`}
```

### 6. Keep Component Tokens in Component Files

For component-specific tokens (navbar, hero, footer), import from those specific files:

```typescript
// ✅ Good - clear dependencies
import { NAVBAR_TOKENS } from '@/types/layout/navbar';

// ⚠️ Less clear
import { NAVBAR_TOKENS } from '@/types/layout';
```

---

## Quick Reference

### Most Common Tokens

```typescript
// Typography
TYPOGRAPHY.heading.h1.classes
TYPOGRAPHY.body.default.classes
TYPOGRAPHY.ui.button.default.classes

// Spacing
SPACING.padding.section.classes
SPACING.margin.section.classes
SPACING.gap.normal.classes

// Layout
LAYOUT_SYSTEM.maxWidths.content.lg
LAYOUT_SYSTEM.zIndex.modal
LAYOUT_SYSTEM.borderRadius.lg

// Breakpoints
BREAKPOINTS.mobile.medium    // 375px
BREAKPOINTS.tablet.small     // 640px
BREAKPOINTS.desktop.small    // 1024px
```

### Most Common Utilities

```typescript
combineResponsive(...classes)    // Combine responsive classes
matchesBreakpoint('tablet')      // Check breakpoint
getMinClass(480)                 // Generate min-width class
flexCenter()                     // Flex center layout
responsiveGrid(1, 2, 3)         // Responsive grid
```

---

## Troubleshooting

### Types Not Working?

Ensure you're importing from the correct path:
```typescript
import { TYPOGRAPHY } from '@/types/layout';
```

### Styles Not Applying?

Check that Tailwind is configured to scan the token files:
```javascript
// tailwind.config.ts
content: [
  "./src/**/*.{ts,tsx}",
]
```

### Need More Control?

You can always extend the tokens in their respective files. Each token file has clear instructions at the top.

---

## Contributing

When adding new tokens:

1. Choose the appropriate file based on the token category
2. Follow the existing naming patterns
3. Add TypeScript types
4. Document with JSDoc comments
5. Include example values with 👈 emoji for quick scanning
6. Export from the main `index.ts` if publicly used

---

## Support

For questions or issues with the design token system:

1. Check this README first
2. Look at the JSDoc comments in token files
3. Review existing usage in components
4. Open an issue if you find a bug or have a suggestion

---

**Last Updated**: 2024-10-22
**Version**: 1.0.0
