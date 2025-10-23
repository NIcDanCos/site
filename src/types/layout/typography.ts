/**
 * TYPOGRAPHY DESIGN TOKENS
 *
 * Complete font size scale with responsive controls for all text elements
 * across the application. Provides fine-grained control over typography at
 * different breakpoints.
 *
 * FONT SIZE SCALE:
 * Based on a modular scale for visual harmony:
 * xs → sm → base → lg → xl → 2xl → 3xl → 4xl → 5xl → 6xl → 7xl → 8xl → 9xl
 *
 * RESPONSIVE PATTERNS:
 * Each text style includes mobile, tablet, and desktop sizes for optimal
 * readability across all devices.
 *
 * HOW TO ADJUST:
 * - Modify base sizes to scale all typography proportionally
 * - Adjust responsive multipliers for different screen sizes
 * - Add custom text styles for specific components
 *
 * USAGE EXAMPLES:
 * import { TYPOGRAPHY } from '@/types/layout/typography';
 *
 * // Apply full responsive classes:
 * className={`${TYPOGRAPHY.heading.h1.mobile} ${TYPOGRAPHY.heading.h1.tablet} ${TYPOGRAPHY.heading.h1.desktop}`}
 *
 * // Use in components:
 * <h1 className={TYPOGRAPHY.heading.h1.classes}>Page Title</h1>
 *
 * // Access raw sizes:
 * style={{ fontSize: TYPOGRAPHY.scale.xl }}
 */

export interface ResponsiveTextSize {
  mobile: string;      // Font size for mobile (< 640px)
  tablet: string;      // Font size for tablet (≥ 640px)
  desktop: string;     // Font size for desktop (≥ 1024px)
  classes: string;     // Combined Tailwind classes for convenience
}

export interface TypographyTokens {
  // ============================================================================
  // BASE FONT SIZE SCALE
  // ============================================================================

  /** Base font sizes (matches Tailwind defaults + custom sizes) */
  scale: {
    xs: string;        // 0.75rem (12px)
    sm: string;        // 0.875rem (14px)
    base: string;      // 1rem (16px)
    lg: string;        // 1.125rem (18px)
    xl: string;        // 1.25rem (20px)
    '2xl': string;     // 1.5rem (24px)
    '3xl': string;     // 1.875rem (30px)
    '4xl': string;     // 2.25rem (36px)
    '5xl': string;     // 3rem (48px)
    '6xl': string;     // 3.75rem (60px)
    '7xl': string;     // 4.5rem (72px)
    '8xl': string;     // 6rem (96px)
    '9xl': string;     // 8rem (128px)
    // Custom sizes
    '10': string;      // 0.625rem (10px) - Very small labels
    '13': string;      // 0.8125rem (13px) - Small UI text
    '15': string;      // 0.9375rem (15px) - Adjusted base
    '17': string;      // 1.0625rem (17px) - Slightly larger base
    '23': string;      // 1.4375rem (23px) - Custom mid-size
  };

  // ============================================================================
  // HEADINGS
  // ============================================================================

  /** Heading styles with responsive sizing */
  heading: {
    h1: ResponsiveTextSize;  // Main page titles
    h2: ResponsiveTextSize;  // Section headings
    h3: ResponsiveTextSize;  // Sub-section headings
    h4: ResponsiveTextSize;  // Component headings
    h5: ResponsiveTextSize;  // Small headings
    h6: ResponsiveTextSize;  // Tiny headings
  };

  // ============================================================================
  // BODY TEXT
  // ============================================================================

  /** Body text styles */
  body: {
    large: ResponsiveTextSize;    // Large body text (intro paragraphs)
    default: ResponsiveTextSize;  // Standard body text
    small: ResponsiveTextSize;    // Small body text (captions, footnotes)
    tiny: ResponsiveTextSize;     // Tiny text (legal, fine print)
  };

  // ============================================================================
  // UI TEXT
  // ============================================================================

  /** UI element text sizes */
  ui: {
    button: {
      large: ResponsiveTextSize;   // Large buttons
      default: ResponsiveTextSize; // Standard buttons
      small: ResponsiveTextSize;   // Small buttons
    };
    input: ResponsiveTextSize;     // Form inputs
    label: ResponsiveTextSize;     // Form labels
    badge: ResponsiveTextSize;     // Badges and tags
    tooltip: ResponsiveTextSize;   // Tooltips
  };

  // ============================================================================
  // CODE TEXT
  // ============================================================================

  /** Monospace code text sizes */
  code: {
    large: ResponsiveTextSize;     // Large code blocks
    default: ResponsiveTextSize;   // Standard code
    small: ResponsiveTextSize;     // Inline code
    terminal: ResponsiveTextSize;  // Terminal text
  };

  // ============================================================================
  // DISPLAY TEXT
  // ============================================================================

  /** Extra large display text for heroes and marketing */
  display: {
    xl: ResponsiveTextSize;   // Extra large display
    large: ResponsiveTextSize; // Large display
    medium: ResponsiveTextSize; // Medium display
    small: ResponsiveTextSize;  // Small display
  };
}

export const TYPOGRAPHY: TypographyTokens = {
  // ============================================================================
  // BASE FONT SIZE SCALE
  // ============================================================================

  scale: {
    xs: '0.75rem',      // 👈 12px
    sm: '0.875rem',     // 👈 14px
    base: '1rem',       // 👈 16px
    lg: '1.125rem',     // 👈 18px
    xl: '1.25rem',      // 👈 20px
    '2xl': '1.5rem',    // 👈 24px
    '3xl': '1.875rem',  // 👈 30px
    '4xl': '2.25rem',   // 👈 36px
    '5xl': '3rem',      // 👈 48px
    '6xl': '3.75rem',   // 👈 60px
    '7xl': '4.5rem',    // 👈 72px
    '8xl': '6rem',      // 👈 96px
    '9xl': '8rem',      // 👈 128px
    '10': '0.625rem',   // 👈 10px
    '13': '0.8125rem',  // 👈 13px
    '15': '0.9375rem',  // 👈 15px
    '17': '1.0625rem',  // 👈 17px
    '23': '1.4375rem',  // 👈 23px
  },

  // ============================================================================
  // HEADINGS
  // ============================================================================

  heading: {
    h1: {
      mobile: 'text-3xl',              // 👈 30px on mobile
      tablet: 'sm:text-4xl',           // 👈 36px on tablet
      desktop: 'lg:text-5xl',          // 👈 48px on desktop
      classes: 'text-3xl sm:text-4xl lg:text-5xl',
    },
    h2: {
      mobile: 'text-2xl',              // 👈 24px on mobile
      tablet: 'sm:text-3xl',           // 👈 30px on tablet
      desktop: 'lg:text-4xl',          // 👈 36px on desktop
      classes: 'text-2xl sm:text-3xl lg:text-4xl',
    },
    h3: {
      mobile: 'text-xl',               // 👈 20px on mobile
      tablet: 'sm:text-2xl',           // 👈 24px on tablet
      desktop: 'lg:text-3xl',          // 👈 30px on desktop
      classes: 'text-xl sm:text-2xl lg:text-3xl',
    },
    h4: {
      mobile: 'text-lg',               // 👈 18px on mobile
      tablet: 'sm:text-xl',            // 👈 20px on tablet
      desktop: 'lg:text-2xl',          // 👈 24px on desktop
      classes: 'text-lg sm:text-xl lg:text-2xl',
    },
    h5: {
      mobile: 'text-base',             // 👈 16px on mobile
      tablet: 'sm:text-lg',            // 👈 18px on tablet
      desktop: 'lg:text-xl',           // 👈 20px on desktop
      classes: 'text-base sm:text-lg lg:text-xl',
    },
    h6: {
      mobile: 'text-sm',               // 👈 14px on mobile
      tablet: 'sm:text-base',          // 👈 16px on tablet
      desktop: 'lg:text-lg',           // 👈 18px on desktop
      classes: 'text-sm sm:text-base lg:text-lg',
    },
  },

  // ============================================================================
  // BODY TEXT
  // ============================================================================

  body: {
    large: {
      mobile: 'text-lg',               // 👈 18px on mobile
      tablet: 'sm:text-xl',            // 👈 20px on tablet
      desktop: 'lg:text-2xl',          // 👈 24px on desktop
      classes: 'text-lg sm:text-xl lg:text-2xl',
    },
    default: {
      mobile: 'text-base',             // 👈 16px on mobile
      tablet: 'sm:text-base',          // 👈 16px on tablet
      desktop: 'lg:text-lg',           // 👈 18px on desktop
      classes: 'text-base lg:text-lg',
    },
    small: {
      mobile: 'text-sm',               // 👈 14px on mobile
      tablet: 'sm:text-sm',            // 👈 14px on tablet
      desktop: 'lg:text-base',         // 👈 16px on desktop
      classes: 'text-sm lg:text-base',
    },
    tiny: {
      mobile: 'text-xs',               // 👈 12px on mobile
      tablet: 'sm:text-xs',            // 👈 12px on tablet
      desktop: 'lg:text-sm',           // 👈 14px on desktop
      classes: 'text-xs lg:text-sm',
    },
  },

  // ============================================================================
  // UI TEXT
  // ============================================================================

  ui: {
    button: {
      large: {
        mobile: 'text-base',           // 👈 16px on mobile
        tablet: 'sm:text-lg',          // 👈 18px on tablet
        desktop: 'lg:text-xl',         // 👈 20px on desktop
        classes: 'text-base sm:text-lg lg:text-xl',
      },
      default: {
        mobile: 'text-sm',             // 👈 14px on mobile
        tablet: 'sm:text-base',        // 👈 16px on tablet
        desktop: 'lg:text-base',       // 👈 16px on desktop
        classes: 'text-sm sm:text-base',
      },
      small: {
        mobile: 'text-xs',             // 👈 12px on mobile
        tablet: 'sm:text-sm',          // 👈 14px on tablet
        desktop: 'lg:text-sm',         // 👈 14px on desktop
        classes: 'text-xs sm:text-sm',
      },
    },
    input: {
      mobile: 'text-base',             // 👈 16px (prevents zoom on iOS)
      tablet: 'sm:text-base',          // 👈 16px on tablet
      desktop: 'lg:text-base',         // 👈 16px on desktop
      classes: 'text-base',
    },
    label: {
      mobile: 'text-sm',               // 👈 14px on mobile
      tablet: 'sm:text-sm',            // 👈 14px on tablet
      desktop: 'lg:text-base',         // 👈 16px on desktop
      classes: 'text-sm lg:text-base',
    },
    badge: {
      mobile: 'text-xs',               // 👈 12px on mobile
      tablet: 'sm:text-xs',            // 👈 12px on tablet
      desktop: 'lg:text-sm',           // 👈 14px on desktop
      classes: 'text-xs lg:text-sm',
    },
    tooltip: {
      mobile: 'text-xs',               // 👈 12px on mobile
      tablet: 'sm:text-xs',            // 👈 12px on tablet
      desktop: 'lg:text-sm',           // 👈 14px on desktop
      classes: 'text-xs lg:text-sm',
    },
  },

  // ============================================================================
  // CODE TEXT
  // ============================================================================

  code: {
    large: {
      mobile: 'text-base',             // 👈 16px on mobile
      tablet: 'sm:text-lg',            // 👈 18px on tablet
      desktop: 'lg:text-xl',           // 👈 20px on desktop
      classes: 'text-base sm:text-lg lg:text-xl',
    },
    default: {
      mobile: 'text-sm',               // 👈 14px on mobile
      tablet: 'sm:text-base',          // 👈 16px on tablet
      desktop: 'lg:text-base',         // 👈 16px on desktop
      classes: 'text-sm sm:text-base',
    },
    small: {
      mobile: 'text-xs',               // 👈 12px on mobile
      tablet: 'sm:text-sm',            // 👈 14px on tablet
      desktop: 'lg:text-sm',           // 👈 14px on desktop
      classes: 'text-xs sm:text-sm',
    },
    terminal: {
      mobile: 'text-[13px]',                    // 👈 13px on mobile
      tablet: 'xs:text-base',          // 👈 16px at 375px+
      desktop: 'sm:text-lg',                    // 👈 18px at 640px+
      classes: 'text-[13px] xs:text-base sm:text-lg',
    },
  },

  // ============================================================================
  // DISPLAY TEXT
  // ============================================================================

  display: {
    xl: {
      mobile: 'text-5xl',              // 👈 48px on mobile
      tablet: 'sm:text-6xl',           // 👈 60px on tablet
      desktop: 'lg:text-8xl',          // 👈 96px on desktop
      classes: 'text-5xl sm:text-6xl lg:text-8xl',
    },
    large: {
      mobile: 'text-4xl',              // 👈 36px on mobile
      tablet: 'sm:text-5xl',           // 👈 48px on tablet
      desktop: 'lg:text-7xl',          // 👈 72px on desktop
      classes: 'text-4xl sm:text-5xl lg:text-7xl',
    },
    medium: {
      mobile: 'text-3xl',              // 👈 30px on mobile
      tablet: 'sm:text-4xl',           // 👈 36px on tablet
      desktop: 'lg:text-6xl',          // 👈 60px on desktop
      classes: 'text-3xl sm:text-4xl lg:text-6xl',
    },
    small: {
      mobile: 'text-2xl',              // 👈 24px on mobile
      tablet: 'sm:text-3xl',           // 👈 30px on tablet
      desktop: 'lg:text-5xl',          // 👈 48px on desktop
      classes: 'text-2xl sm:text-3xl lg:text-5xl',
    },
  },
};

// ============================================================================
// TYPOGRAPHY UTILITIES
// ============================================================================

/**
 * Line height presets for different text styles
 */
export const LINE_HEIGHTS = {
  none: 'leading-none',           // 1
  tight: 'leading-tight',         // 1.25
  snug: 'leading-snug',           // 1.375
  normal: 'leading-normal',       // 1.5
  relaxed: 'leading-relaxed',     // 1.625
  loose: 'leading-loose',         // 2
} as const;

/**
 * Font weight presets
 */
export const FONT_WEIGHTS = {
  thin: 'font-thin',              // 100
  extralight: 'font-extralight',  // 200
  light: 'font-light',            // 300
  normal: 'font-normal',          // 400
  medium: 'font-medium',          // 500
  semibold: 'font-semibold',      // 600
  bold: 'font-bold',              // 700
  extrabold: 'font-extrabold',    // 800
  black: 'font-black',            // 900
} as const;

/**
 * Letter spacing presets
 */
export const LETTER_SPACING = {
  tighter: 'tracking-tighter',    // -0.05em
  tight: 'tracking-tight',        // -0.025em
  normal: 'tracking-normal',      // 0
  wide: 'tracking-wide',          // 0.025em
  wider: 'tracking-wider',        // 0.05em
  widest: 'tracking-widest',      // 0.1em
} as const;
