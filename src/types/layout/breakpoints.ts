/**
 * BREAKPOINT DESIGN TOKENS
 *
 * Centralized breakpoint system with custom responsive breakpoints for precise
 * control over responsive behavior at all screen sizes.
 *
 * TAILWIND DEFAULT BREAKPOINTS (for reference):
 * - sm: 640px   (tablet portrait)
 * - md: 768px   (tablet landscape)
 * - lg: 1024px  (laptop)
 * - xl: 1280px  (desktop)
 * - 2xl: 1536px (large desktop)
 *
 * CUSTOM BREAKPOINTS:
 * Use these when Tailwind defaults don't provide enough control.
 * Apply via Tailwind arbitrary values: min-[480px]:text-lg
 *
 * HOW TO ADJUST:
 * - Add new breakpoints for specific device targeting
 * - Modify existing breakpoints to match your design requirements
 * - Use with Tailwind's min-[Xpx]: and max-[Xpx]: syntax
 *
 * USAGE EXAMPLES:
 * import { BREAKPOINTS } from '@/types/layout/breakpoints';
 *
 * // In Tailwind classes:
 * className={`text-sm min-[${BREAKPOINTS.mobile.large}px]:text-base`}
 *
 * // In JavaScript:
 * if (window.innerWidth >= BREAKPOINTS.tablet.small) { ... }
 *
 * // In media queries:
 * @media (min-width: ${BREAKPOINTS.desktop.small}px) { ... }
 */

export interface BreakpointTokens {
  // ============================================================================
  // MOBILE BREAKPOINTS (320px - 639px)
  // ============================================================================

  mobile: {
    xsmall: number;    // Extra small phones (e.g., iPhone SE)
    small: number;     // Standard small phones
    medium: number;    // Medium phones (e.g., iPhone 12/13/14)
    large: number;     // Large phones (e.g., iPhone Pro Max, Pixel 7)
    xlarge: number;    // Extra large phones & small tablets
  };

  // ============================================================================
  // TABLET BREAKPOINTS (540px - 1023px)
  // ============================================================================

  tablet: {
    xsmall: number;    // Extra small tablets / large phones landscape
    small: number;     // Small tablets portrait (e.g., iPad mini) - same as Tailwind 'sm'
    medium: number;    // Medium tablets landscape - same as Tailwind 'md'
    large: number;     // Large tablets (e.g., iPad Pro 11")
  };

  // ============================================================================
  // DESKTOP BREAKPOINTS (1024px+)
  // ============================================================================

  desktop: {
    small: number;     // Small laptops - same as Tailwind 'lg'
    medium: number;    // Standard desktops - same as Tailwind 'xl'
    large: number;     // Large desktops - same as Tailwind '2xl'
    xlarge: number;    // Extra large displays (4K, ultra-wide)
  };

  // ============================================================================
  // VIEWPORT HEIGHT BREAKPOINTS
  // ============================================================================

  /** Height breakpoints for vertical space management */
  height: {
    short: number;     // Short viewports (e.g., landscape phones)
    medium: number;    // Medium height screens
    tall: number;      // Tall viewports (e.g., portrait tablets)
    xtall: number;     // Extra tall viewports
  };

  // ============================================================================
  // SPECIAL BREAKPOINTS
  // ============================================================================

  /** Special use-case breakpoints */
  special: {
    foldable: number;  // Foldable phones unfolded
    watch: number;     // Smart watches (if supporting)
    fullHD: number;    // 1920px - Full HD displays
    quadHD: number;    // 2560px - Quad HD displays
    ultraWide: number; // 3440px - Ultra-wide monitors
  };
}

export const BREAKPOINTS: BreakpointTokens = {
  // ============================================================================
  // MOBILE BREAKPOINTS
  // ============================================================================
  // Fine-grained control for different phone sizes
  // Tip: Use these for typography and spacing adjustments on phones

  mobile: {
    xsmall: 320,   // 👈 iPhone SE, Galaxy Fold (portrait)
    small: 360,    // 👈 Standard small Android phones
    medium: 375,   // 👈 iPhone 12/13/14 standard
    large: 414,    // 👈 iPhone Pro Max models
    xlarge: 480,   // 👈 Large phones & phablets
  },

  // ============================================================================
  // TABLET BREAKPOINTS
  // ============================================================================
  // Control layout transitions for tablet devices
  // Tip: Use for switching between compact and expanded layouts

  tablet: {
    xsmall: 540,   // 👈 Large phones landscape, very small tablets
    small: 640,    // 👈 Tailwind 'sm' - iPad mini portrait
    medium: 768,   // 👈 Tailwind 'md' - iPad portrait, tablets landscape
    large: 900,    // 👈 iPad Pro 11" portrait
  },

  // ============================================================================
  // DESKTOP BREAKPOINTS
  // ============================================================================
  // Manage desktop and laptop layouts
  // Tip: Use for multi-column layouts and expanded navigation

  desktop: {
    small: 1024,   // 👈 Tailwind 'lg' - Small laptops, iPad Pro landscape
    medium: 1280,  // 👈 Tailwind 'xl' - Standard desktop displays
    large: 1536,   // 👈 Tailwind '2xl' - Large desktop displays
    xlarge: 1920,  // 👈 Full HD displays
  },

  // ============================================================================
  // VIEWPORT HEIGHT BREAKPOINTS
  // ============================================================================
  // Control vertical spacing based on available height
  // Usage: @media (min-height: 600px) or Tailwind min-h-[600px]

  height: {
    short: 600,    // 👈 Landscape phones, short laptop screens
    medium: 768,   // 👈 Standard laptop height
    tall: 900,     // 👈 Tall monitors, portrait tablets
    xtall: 1080,   // 👈 Full HD height
  },

  // ============================================================================
  // SPECIAL BREAKPOINTS
  // ============================================================================
  // Edge cases and specific device targeting

  special: {
    foldable: 712,  // 👈 Samsung Galaxy Z Fold (unfolded inner display)
    watch: 280,     // 👈 Smart watch screens (if supporting)
    fullHD: 1920,   // 👈 1920×1080 Full HD displays
    quadHD: 2560,   // 👈 2560×1440 Quad HD displays
    ultraWide: 3440, // 👈 3440×1440 ultra-wide monitors (21:9)
  },
};

// ============================================================================
// BREAKPOINT UTILITIES
// ============================================================================

/**
 * Helper to generate Tailwind min-width breakpoint class
 * @example getMinClass(480) → 'min-[480px]'
 */
export const getMinClass = (px: number): string => `min-[${px}px]`;

/**
 * Helper to generate Tailwind max-width breakpoint class
 * @example getMaxClass(639) → 'max-[639px]'
 */
export const getMaxClass = (px: number): string => `max-[${px}px]`;

/**
 * Helper to generate CSS media query string
 * @example getMediaQuery(768) → '@media (min-width: 768px)'
 */
export const getMediaQuery = (px: number): string => `@media (min-width: ${px}px)`;

/**
 * Helper to generate height-based media query
 * @example getHeightQuery(600) → '@media (min-height: 600px)'
 */
export const getHeightQuery = (px: number): string => `@media (min-height: ${px}px)`;

// ============================================================================
// BREAKPOINT RANGES
// ============================================================================

/**
 * Breakpoint ranges for targeting specific device categories
 * Usage: Apply styles only within a specific range
 */
export const BREAKPOINT_RANGES = {
  /** Mobile only (< 640px) */
  mobileOnly: {
    min: 0,
    max: BREAKPOINTS.tablet.small - 1,
  },

  /** Tablet only (640px - 1023px) */
  tabletOnly: {
    min: BREAKPOINTS.tablet.small,
    max: BREAKPOINTS.desktop.small - 1,
  },

  /** Desktop only (≥ 1024px) */
  desktopOnly: {
    min: BREAKPOINTS.desktop.small,
    max: Infinity,
  },

  /** Mobile and tablet (< 1024px) */
  mobileAndTablet: {
    min: 0,
    max: BREAKPOINTS.desktop.small - 1,
  },

  /** Tablet and desktop (≥ 640px) */
  tabletAndDesktop: {
    min: BREAKPOINTS.tablet.small,
    max: Infinity,
  },
} as const;
