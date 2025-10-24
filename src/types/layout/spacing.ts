/**
 * SPACING DESIGN TOKENS
 *
 * Comprehensive spacing system for margins, padding, gaps, and layout spacing
 * with responsive controls. Provides consistent spacing across all components.
 *
 * SPACING SCALE:
 * Based on 0.25rem (4px) increments for precise layout control:
 * 0 → 1 → 2 → 3 → 4 → 5 → 6 → 8 → 10 → 12 → 16 → 20 → 24 → 32 → 40 → 48 → 64
 * (0px → 4px → 8px → 12px → 16px → 20px → 24px → 32px → 40px → 48px → 64px → 80px → 96px → 128px → 160px → 192px → 256px)
 *
 * RESPONSIVE PATTERNS:
 * Each spacing preset includes mobile, tablet, and desktop values for
 * consistent scaling across breakpoints.
 *
 * HOW TO ADJUST:
 * - Modify base spacing scale for application-wide changes
 * - Adjust responsive presets for specific use cases
 * - Add custom spacing patterns for unique components
 *
 * USAGE EXAMPLES:
 * import { SPACING } from '@/types/layout/spacing';
 *
 * // Apply responsive padding:
 * className={`${SPACING.padding.section.mobile} ${SPACING.padding.section.tablet} ${SPACING.padding.section.desktop}`}
 *
 * // Use convenient classes:
 * className={SPACING.padding.section.classes}
 *
 * // Custom spacing:
 * className={SPACING.scale.px['4']}  // 16px padding left+right
 */

import { ExtendedResponsiveValue } from './responsive';

/**
 * Responsive spacing value with optional breakpoint overrides.
 * Uses ExtendedResponsiveValue for maximum flexibility.
 *
 * Most spacing patterns use 3 breakpoints (mobile, tablet, desktop),
 * but you can add more granular control when needed.
 */
export interface ResponsiveSpacing extends ExtendedResponsiveValue<string> {}

export interface SpacingTokens {
  // ============================================================================
  // BASE SPACING SCALE
  // ============================================================================

  /** Base spacing scale (matches Tailwind spacing) */
  scale: {
    // Margin scale (m-, mt-, mr-, mb-, ml-)
    m: {
      '0': string;      // 0px
      '1': string;      // 4px
      '2': string;      // 8px
      '3': string;      // 12px
      '4': string;      // 16px
      '5': string;      // 20px
      '6': string;      // 24px
      '8': string;      // 32px
      '10': string;     // 40px
      '12': string;     // 48px
      '16': string;     // 64px
      '20': string;     // 80px
      '24': string;     // 96px
      '32': string;     // 128px
      '40': string;     // 160px
      '48': string;     // 192px
      '64': string;     // 256px
    };
    // Padding scale (p-, pt-, pr-, pb-, pl-)
    px: {
      '0': string;      // 0px
      '1': string;      // 4px
      '2': string;      // 8px
      '3': string;      // 12px
      '4': string;      // 16px
      '5': string;      // 20px
      '6': string;      // 24px
      '8': string;      // 32px
      '10': string;     // 40px
      '12': string;     // 48px
      '16': string;     // 64px
      '20': string;     // 80px
      '24': string;     // 96px
      '32': string;     // 128px
      '40': string;     // 160px
      '48': string;     // 192px
      '64': string;     // 256px
    };
    // Gap scale (gap-)
    gap: {
      '0': string;      // 0px
      '1': string;      // 4px
      '2': string;      // 8px
      '3': string;      // 12px
      '4': string;      // 16px
      '5': string;      // 20px
      '6': string;      // 24px
      '8': string;      // 32px
      '10': string;     // 40px
      '12': string;     // 48px
      '16': string;     // 64px
      '20': string;     // 80px
      '24': string;     // 96px
    };
    // Space between scale (space-x-, space-y-)
    space: {
      '0': string;      // 0px
      '1': string;      // 4px
      '2': string;      // 8px
      '3': string;      // 12px
      '4': string;      // 16px
      '5': string;      // 20px
      '6': string;      // 24px
      '8': string;      // 32px
      '10': string;     // 40px
      '12': string;     // 48px
    };
  };

  // ============================================================================
  // PADDING PRESETS
  // ============================================================================

  /** Common padding patterns with responsive control */
  padding: {
    /** Section padding (large content areas) */
    section: ResponsiveSpacing;

    /** Container padding (content wrappers) */
    container: ResponsiveSpacing;

    /** Card padding (card components) */
    card: ResponsiveSpacing;

    /** Button padding */
    button: {
      small: ResponsiveSpacing;
      medium: ResponsiveSpacing;
      large: ResponsiveSpacing;
    };

    /** Input padding */
    input: ResponsiveSpacing;

    /** Modal padding */
    modal: ResponsiveSpacing;

    /** Page padding (horizontal page margins) */
    page: ResponsiveSpacing;
  };

  // ============================================================================
  // MARGIN PRESETS
  // ============================================================================

  /** Common margin patterns with responsive control */
  margin: {
    /** Section vertical margin */
    section: ResponsiveSpacing;

    /** Element vertical margin */
    element: ResponsiveSpacing;

    /** Heading bottom margin */
    heading: ResponsiveSpacing;

    /** Paragraph bottom margin */
    paragraph: ResponsiveSpacing;

    /** List item margin */
    listItem: ResponsiveSpacing;
  };

  // ============================================================================
  // GAP PRESETS
  // ============================================================================

  /** Common gap patterns for flexbox/grid layouts */
  gap: {
    /** Tight gap (closely related items) */
    tight: ResponsiveSpacing;

    /** Normal gap (standard spacing) */
    normal: ResponsiveSpacing;

    /** Relaxed gap (spaced out items) */
    relaxed: ResponsiveSpacing;

    /** Loose gap (widely spaced items) */
    loose: ResponsiveSpacing;

    /** Grid gap patterns */
    grid: {
      dense: ResponsiveSpacing;    // Dense grids (cards, thumbnails)
      normal: ResponsiveSpacing;   // Standard grids
      relaxed: ResponsiveSpacing;  // Spacious grids
    };
  };

  // ============================================================================
  // SPACE BETWEEN PRESETS
  // ============================================================================

  /** Space between patterns for child elements */
  spaceBetween: {
    tight: string;     // Tight spacing (4-8px)
    normal: string;    // Normal spacing (12-16px)
    relaxed: string;   // Relaxed spacing (20-24px)
  };
}

export const SPACING: SpacingTokens = {
  // ============================================================================
  // BASE SPACING SCALE
  // ============================================================================

  scale: {
    m: {
      '0': 'm-0',       // 👈 0px
      '1': 'm-1',       // 👈 4px
      '2': 'm-2',       // 👈 8px
      '3': 'm-3',       // 👈 12px
      '4': 'm-4',       // 👈 16px
      '5': 'm-5',       // 👈 20px
      '6': 'm-6',       // 👈 24px
      '8': 'm-8',       // 👈 32px
      '10': 'm-10',     // 👈 40px
      '12': 'm-12',     // 👈 48px
      '16': 'm-16',     // 👈 64px
      '20': 'm-20',     // 👈 80px
      '24': 'm-24',     // 👈 96px
      '32': 'm-32',     // 👈 128px
      '40': 'm-40',     // 👈 160px
      '48': 'm-48',     // 👈 192px
      '64': 'm-64',     // 👈 256px
    },
    px: {
      '0': 'px-0',      // 👈 0px
      '1': 'px-1',      // 👈 4px (left + right)
      '2': 'px-2',      // 👈 8px
      '3': 'px-3',      // 👈 12px
      '4': 'px-4',      // 👈 16px
      '5': 'px-5',      // 👈 20px
      '6': 'px-6',      // 👈 24px
      '8': 'px-8',      // 👈 32px
      '10': 'px-10',    // 👈 40px
      '12': 'px-12',    // 👈 48px
      '16': 'px-16',    // 👈 64px
      '20': 'px-20',    // 👈 80px
      '24': 'px-24',    // 👈 96px
      '32': 'px-32',    // 👈 128px
      '40': 'px-40',    // 👈 160px
      '48': 'px-48',    // 👈 192px
      '64': 'px-64',    // 👈 256px
    },
    gap: {
      '0': 'gap-0',     // 👈 0px
      '1': 'gap-1',     // 👈 4px
      '2': 'gap-2',     // 👈 8px
      '3': 'gap-3',     // 👈 12px
      '4': 'gap-4',     // 👈 16px
      '5': 'gap-5',     // 👈 20px
      '6': 'gap-6',     // 👈 24px
      '8': 'gap-8',     // 👈 32px
      '10': 'gap-10',   // 👈 40px
      '12': 'gap-12',   // 👈 48px
      '16': 'gap-16',   // 👈 64px
      '20': 'gap-20',   // 👈 80px
      '24': 'gap-24',   // 👈 96px
    },
    space: {
      '0': 'space-y-0',  // 👈 0px
      '1': 'space-y-1',  // 👈 4px
      '2': 'space-y-2',  // 👈 8px
      '3': 'space-y-3',  // 👈 12px
      '4': 'space-y-4',  // 👈 16px
      '5': 'space-y-5',  // 👈 20px
      '6': 'space-y-6',  // 👈 24px
      '8': 'space-y-8',  // 👈 32px
      '10': 'space-y-10', // 👈 40px
      '12': 'space-y-12', // 👈 48px
    },
  },

  // ============================================================================
  // PADDING PRESETS
  // ============================================================================

  padding: {
    section: {
      mobile: 'py-12 px-4',              // 👈 48px vertical, 16px horizontal
      tablet: 'sm:py-16 sm:px-6',        // 👈 64px vertical, 24px horizontal
      desktop: 'lg:py-24 lg:px-8',       // 👈 96px vertical, 32px horizontal
      classes: 'py-12 px-4 sm:py-16 sm:px-6 lg:py-24 lg:px-8',
    },
    container: {
      mobile: 'p-4',                     // 👈 16px all sides
      tablet: 'sm:p-6',                  // 👈 24px all sides
      desktop: 'lg:p-8',                 // 👈 32px all sides
      classes: 'p-4 sm:p-6 lg:p-8',
    },
    card: {
      mobile: 'p-4',                     // 👈 16px all sides
      tablet: 'sm:p-5',                  // 👈 20px all sides
      desktop: 'lg:p-6',                 // 👈 24px all sides
      classes: 'p-4 sm:p-5 lg:p-6',
    },
    button: {
      small: {
        mobile: 'px-3 py-1.5',           // 👈 12px horizontal, 6px vertical
        tablet: 'sm:px-3 sm:py-1.5',     // 👈 Same on tablet
        desktop: 'lg:px-4 lg:py-2',      // 👈 16px horizontal, 8px vertical
        classes: 'px-3 py-1.5 lg:px-4 lg:py-2',
      },
      medium: {
        mobile: 'px-4 py-2',             // 👈 16px horizontal, 8px vertical
        tablet: 'sm:px-5 sm:py-2.5',     // 👈 20px horizontal, 10px vertical
        desktop: 'lg:px-6 lg:py-3',      // 👈 24px horizontal, 12px vertical
        classes: 'px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3',
      },
      large: {
        mobile: 'px-6 py-3',             // 👈 24px horizontal, 12px vertical
        tablet: 'sm:px-8 sm:py-4',       // 👈 32px horizontal, 16px vertical
        desktop: 'lg:px-10 lg:py-5',     // 👈 40px horizontal, 20px vertical
        classes: 'px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5',
      },
    },
    input: {
      mobile: 'px-3 py-2',               // 👈 12px horizontal, 8px vertical
      tablet: 'sm:px-4 sm:py-2.5',       // 👈 16px horizontal, 10px vertical
      desktop: 'lg:px-4 lg:py-3',        // 👈 16px horizontal, 12px vertical
      classes: 'px-3 py-2 sm:px-4 sm:py-2.5 lg:px-4 lg:py-3',
    },
    modal: {
      mobile: 'p-6',                     // 👈 24px all sides
      tablet: 'sm:p-8',                  // 👈 32px all sides
      desktop: 'lg:p-10',                // 👈 40px all sides
      classes: 'p-6 sm:p-8 lg:p-10',
    },
    page: {
      mobile: 'px-4',                    // 👈 16px horizontal
      tablet: 'sm:px-6',                 // 👈 24px horizontal
      desktop: 'lg:px-8',                // 👈 32px horizontal
      classes: 'px-4 sm:px-6 lg:px-8',
    },
  },

  // ============================================================================
  // MARGIN PRESETS
  // ============================================================================

  margin: {
    section: {
      mobile: 'my-12',                   // 👈 48px vertical
      tablet: 'sm:my-16',                // 👈 64px vertical
      desktop: 'lg:my-24',               // 👈 96px vertical
      classes: 'my-12 sm:my-16 lg:my-24',
    },
    element: {
      mobile: 'my-4',                    // 👈 16px vertical
      tablet: 'sm:my-5',                 // 👈 20px vertical
      desktop: 'lg:my-6',                // 👈 24px vertical
      classes: 'my-4 sm:my-5 lg:my-6',
    },
    heading: {
      mobile: 'mb-4',                    // 👈 16px bottom
      tablet: 'sm:mb-5',                 // 👈 20px bottom
      desktop: 'lg:mb-6',                // 👈 24px bottom
      classes: 'mb-4 sm:mb-5 lg:mb-6',
    },
    paragraph: {
      mobile: 'mb-4',                    // 👈 16px bottom
      tablet: 'sm:mb-4',                 // 👈 16px bottom
      desktop: 'lg:mb-5',                // 👈 20px bottom
      classes: 'mb-4 lg:mb-5',
    },
    listItem: {
      mobile: 'mb-2',                    // 👈 8px bottom
      tablet: 'sm:mb-2',                 // 👈 8px bottom
      desktop: 'lg:mb-3',                // 👈 12px bottom
      classes: 'mb-2 lg:mb-3',
    },
  },

  // ============================================================================
  // GAP PRESETS
  // ============================================================================

  gap: {
    tight: {
      mobile: 'gap-2',                   // 👈 8px
      tablet: 'sm:gap-2',                // 👈 8px
      desktop: 'lg:gap-3',               // 👈 12px
      classes: 'gap-2 lg:gap-3',
    },
    normal: {
      mobile: 'gap-4',                   // 👈 16px
      tablet: 'sm:gap-5',                // 👈 20px
      desktop: 'lg:gap-6',               // 👈 24px
      classes: 'gap-4 sm:gap-5 lg:gap-6',
    },
    relaxed: {
      mobile: 'gap-6',                   // 👈 24px
      tablet: 'sm:gap-8',                // 👈 32px
      desktop: 'lg:gap-10',              // 👈 40px
      classes: 'gap-6 sm:gap-8 lg:gap-10',
    },
    loose: {
      mobile: 'gap-8',                   // 👈 32px
      tablet: 'sm:gap-12',               // 👈 48px
      desktop: 'lg:gap-16',              // 👈 64px
      classes: 'gap-8 sm:gap-12 lg:gap-16',
    },
    grid: {
      dense: {
        mobile: 'gap-2',                 // 👈 8px for dense grids
        tablet: 'sm:gap-3',              // 👈 12px
        desktop: 'lg:gap-4',             // 👈 16px
        classes: 'gap-2 sm:gap-3 lg:gap-4',
      },
      normal: {
        mobile: 'gap-4',                 // 👈 16px for normal grids
        tablet: 'sm:gap-5',              // 👈 20px
        desktop: 'lg:gap-6',             // 👈 24px
        classes: 'gap-4 sm:gap-5 lg:gap-6',
      },
      relaxed: {
        mobile: 'gap-6',                 // 👈 24px for relaxed grids
        tablet: 'sm:gap-8',              // 👈 32px
        desktop: 'lg:gap-10',            // 👈 40px
        classes: 'gap-6 sm:gap-8 lg:gap-10',
      },
    },
  },

  // ============================================================================
  // SPACE BETWEEN PRESETS
  // ============================================================================

  spaceBetween: {
    tight: 'space-y-2',                  // 👈 8px between children
    normal: 'space-y-4',                 // 👈 16px between children
    relaxed: 'space-y-6',                // 👈 24px between children
  },
};

// ============================================================================
// SPACING UTILITIES
// ============================================================================

/**
 * Helper to create responsive spacing classes
 * @example createResponsiveSpacing('p', [4, 6, 8]) → 'p-4 sm:p-6 lg:p-8'
 */
export const createResponsiveSpacing = (
  property: 'p' | 'px' | 'py' | 'pt' | 'pr' | 'pb' | 'pl' | 'm' | 'mx' | 'my' | 'mt' | 'mr' | 'mb' | 'ml' | 'gap',
  values: [number, number, number]
): string => {
  const [mobile, tablet, desktop] = values;
  return `${property}-${mobile} sm:${property}-${tablet} lg:${property}-${desktop}`;
};

/**
 * Negative margin utilities (for layout overlaps)
 */
export const NEGATIVE_MARGINS = {
  small: '-m-2',      // -8px
  medium: '-m-4',     // -16px
  large: '-m-8',      // -32px
} as const;
