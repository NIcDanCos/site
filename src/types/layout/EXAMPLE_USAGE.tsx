/**
 * EXAMPLE COMPONENT - Design Token System Usage
 *
 * This file demonstrates how to use the new design token system in your components.
 * Copy and adapt these patterns to your own components.
 */

import React from 'react';
import {
  TYPOGRAPHY,
  SPACING,
  BREAKPOINTS,
  LAYOUT_SYSTEM,
  combineResponsive,
  getMinClass,
  flexCenter,
} from '@/types/layout';

// ============================================================================
// EXAMPLE 1: Simple Card Component
// ============================================================================

export function SimpleCard() {
  return (
    <div
      className={combineResponsive(
        SPACING.padding.card.classes,
        LAYOUT_SYSTEM.borderRadius.lg,
        'bg-card'
      )}
      style={{ maxWidth: LAYOUT_SYSTEM.maxWidths.content.md }}
    >
      <h3 className={TYPOGRAPHY.heading.h3.classes}>
        Card Title
      </h3>
      <p className={TYPOGRAPHY.body.default.classes}>
        This card uses design tokens for consistent spacing and typography.
      </p>
    </div>
  );
}

// ============================================================================
// EXAMPLE 2: Responsive Hero Section
// ============================================================================

export function ResponsiveHero() {
  return (
    <section className={SPACING.padding.section.classes}>
      <div
        className={flexCenter()}
        style={{ minHeight: LAYOUT_SYSTEM.viewportHeight.minusHeader }}
      >
        <div style={{ maxWidth: LAYOUT_SYSTEM.maxWidths.hero }}>
          <h1 className={TYPOGRAPHY.display.large.classes}>
            Welcome to My Site
          </h1>
          <p className={combineResponsive(
            TYPOGRAPHY.body.large.classes,
            SPACING.margin.paragraph.classes
          )}>
            This is a responsive hero section using the design token system.
          </p>
          <button
            className={combineResponsive(
              LAYOUT_SYSTEM.componentSizes.button.height.lg,
              SPACING.padding.button.large.classes,
              TYPOGRAPHY.ui.button.large.classes,
              'bg-primary text-primary-foreground',
              LAYOUT_SYSTEM.borderRadius.base
            )}
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// EXAMPLE 3: Custom Breakpoint Usage
// ============================================================================

export function CustomBreakpointText() {
  return (
    <p className={combineResponsive(
      // Base mobile size
      'text-sm',
      // Custom breakpoint at 480px (large phones)
      `${getMinClass(BREAKPOINTS.mobile.large)}:text-base`,
      // Tablet size
      'sm:text-lg',
      // Desktop size
      'lg:text-xl'
    )}>
      This text changes size at custom breakpoints for optimal readability.
    </p>
  );
}

// ============================================================================
// EXAMPLE 4: Grid Layout
// ============================================================================

export function ResponsiveGrid() {
  return (
    <div
      className={combineResponsive(
        'grid',
        // 1 column on mobile
        'grid-cols-1',
        // 2 columns on tablet
        'sm:grid-cols-2',
        // 3 columns on desktop
        'lg:grid-cols-3',
        // Gap between items
        SPACING.gap.grid.normal.classes
      )}
    >
      {/* Grid items */}
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div
          key={i}
          className={combineResponsive(
            SPACING.padding.card.classes,
            LAYOUT_SYSTEM.borderRadius.lg,
            'bg-card'
          )}
        >
          <h4 className={TYPOGRAPHY.heading.h4.classes}>
            Item {i}
          </h4>
          <p className={TYPOGRAPHY.body.small.classes}>
            Grid item content
          </p>
        </div>
      ))}
    </div>
  );
}

// ============================================================================
// EXAMPLE 5: Modal with Z-Index
// ============================================================================

export function Modal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50"
        style={{ zIndex: LAYOUT_SYSTEM.zIndex.overlay }}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={combineResponsive(
          'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
          'bg-background',
          SPACING.padding.modal.classes,
          LAYOUT_SYSTEM.borderRadius.xl
        )}
        style={{
          zIndex: LAYOUT_SYSTEM.zIndex.modal,
          maxWidth: LAYOUT_SYSTEM.maxWidths.content.sm,
        }}
      >
        <h2 className={combineResponsive(
          TYPOGRAPHY.heading.h2.classes,
          SPACING.margin.heading.classes
        )}>
          Modal Title
        </h2>
        <p className={TYPOGRAPHY.body.default.classes}>
          This modal uses the z-index system to ensure proper layering.
        </p>
        <button
          onClick={onClose}
          className={combineResponsive(
            LAYOUT_SYSTEM.componentSizes.button.height.md,
            SPACING.padding.button.medium.classes,
            TYPOGRAPHY.ui.button.default.classes,
            'bg-primary text-primary-foreground',
            LAYOUT_SYSTEM.borderRadius.base
          )}
        >
          Close
        </button>
      </div>
    </>
  );
}

// ============================================================================
// EXAMPLE 6: Navigation with Spacing
// ============================================================================

export function Navigation() {
  return (
    <nav
      className={combineResponsive(
        SPACING.padding.page.classes,
        'border-b'
      )}
    >
      <div
        className={flexCenter()}
        style={{ maxWidth: LAYOUT_SYSTEM.maxWidths.page.xl }}
      >
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className={TYPOGRAPHY.heading.h5.classes}>
            Logo
          </div>

          {/* Navigation Links */}
          <div className={combineResponsive(
            'flex items-center',
            SPACING.gap.normal.classes
          )}>
            <a
              href="#"
              className={combineResponsive(
                TYPOGRAPHY.ui.button.default.classes,
                SPACING.padding.button.small.classes
              )}
            >
              Home
            </a>
            <a
              href="#"
              className={combineResponsive(
                TYPOGRAPHY.ui.button.default.classes,
                SPACING.padding.button.small.classes
              )}
            >
              About
            </a>
            <a
              href="#"
              className={combineResponsive(
                TYPOGRAPHY.ui.button.default.classes,
                SPACING.padding.button.small.classes
              )}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

// ============================================================================
// EXAMPLE 7: Article with Typography Hierarchy
// ============================================================================

export function Article() {
  return (
    <article
      className={SPACING.padding.section.classes}
      style={{ maxWidth: LAYOUT_SYSTEM.maxWidths.prose }}
    >
      <h1 className={combineResponsive(
        TYPOGRAPHY.heading.h1.classes,
        SPACING.margin.heading.classes
      )}>
        Article Title
      </h1>

      <p className={combineResponsive(
        TYPOGRAPHY.body.large.classes,
        SPACING.margin.paragraph.classes
      )}>
        This is the introduction paragraph with larger text.
      </p>

      <h2 className={combineResponsive(
        TYPOGRAPHY.heading.h2.classes,
        SPACING.margin.heading.classes
      )}>
        Section Heading
      </h2>

      <p className={combineResponsive(
        TYPOGRAPHY.body.default.classes,
        SPACING.margin.paragraph.classes
      )}>
        Regular body text paragraph. The prose max-width ensures optimal
        reading line length (~65 characters).
      </p>

      <code className={combineResponsive(
        TYPOGRAPHY.code.default.classes,
        'bg-muted',
        SPACING.padding.button.small.classes,
        LAYOUT_SYSTEM.borderRadius.base
      )}>
        const example = 'code snippet';
      </code>
    </article>
  );
}

// ============================================================================
// EXAMPLE 8: Button Variants
// ============================================================================

export function ButtonExamples() {
  return (
    <div className={combineResponsive(
      'flex flex-col',
      SPACING.gap.normal.classes
    )}>
      {/* Small Button */}
      <button
        className={combineResponsive(
          LAYOUT_SYSTEM.componentSizes.button.height.sm,
          SPACING.padding.button.small.classes,
          TYPOGRAPHY.ui.button.small.classes,
          'bg-primary text-primary-foreground',
          LAYOUT_SYSTEM.borderRadius.base
        )}
      >
        Small Button
      </button>

      {/* Medium Button */}
      <button
        className={combineResponsive(
          LAYOUT_SYSTEM.componentSizes.button.height.md,
          SPACING.padding.button.medium.classes,
          TYPOGRAPHY.ui.button.default.classes,
          'bg-primary text-primary-foreground',
          LAYOUT_SYSTEM.borderRadius.base
        )}
      >
        Medium Button
      </button>

      {/* Large Button */}
      <button
        className={combineResponsive(
          LAYOUT_SYSTEM.componentSizes.button.height.lg,
          SPACING.padding.button.large.classes,
          TYPOGRAPHY.ui.button.large.classes,
          'bg-primary text-primary-foreground',
          LAYOUT_SYSTEM.borderRadius.base
        )}
      >
        Large Button
      </button>
    </div>
  );
}

// ============================================================================
// EXAMPLE 9: Responsive Container
// ============================================================================

export function ResponsiveContainer({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={combineResponsive(
        SPACING.padding.container.classes,
        'mx-auto'
      )}
      style={{ maxWidth: LAYOUT_SYSTEM.maxWidths.content.lg }}
    >
      {children}
    </div>
  );
}

// ============================================================================
// TIPS FOR USING THESE EXAMPLES
// ============================================================================

/*
1. Import what you need:
   import { TYPOGRAPHY, SPACING, LAYOUT_SYSTEM } from '@/types/layout';

2. Use combineResponsive for cleaner code:
   const classes = combineResponsive(
     TYPOGRAPHY.heading.h1.classes,
     SPACING.margin.heading.classes,
     'text-primary'
   );

3. Use .classes for convenience:
   className={TYPOGRAPHY.heading.h1.classes}
   // instead of:
   className={`${TYPOGRAPHY.heading.h1.mobile} ${TYPOGRAPHY.heading.h1.tablet} ${TYPOGRAPHY.heading.h1.desktop}`}

4. Mix with Tailwind utilities:
   combineResponsive(
     TYPOGRAPHY.body.default.classes,
     'text-primary',
     'hover:underline'
   )

5. Use style prop for values:
   style={{ maxWidth: LAYOUT_SYSTEM.maxWidths.hero }}

6. Check breakpoints in code:
   if (matchesBreakpoint('tablet')) { ... }

7. Create custom breakpoints:
   getMinClass(480) // 'min-[480px]'
*/
