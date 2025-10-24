/**
 * LAYOUT SYSTEM DESIGN TOKENS
 *
 * Enhanced layout system with comprehensive controls for container widths,
 * viewport management, z-index layering, and component sizing. This extends
 * general.ts with more granular control over layout behavior.
 *
 * WHAT THIS CONTROLS:
 * - Container max-widths at all breakpoints
 * - Viewport calculations for full-height layouts
 * - Z-index layering system
 * - Component sizing standards (static values)
 * - Grid and column systems (responsive with ExtendedResponsiveValue)
 *
 * HOW TO ADJUST:
 * - maxWidths: Control content container widths (static)
 * - zIndex: Manage stacking order of overlapping elements (static)
 * - componentSizes: Standard sizes for UI components (static)
 * - grid.columns: Configure responsive column counts (uses ExtendedResponsiveValue)
 * - grid.gap: Configure gap sizes (static)
 *
 * USAGE EXAMPLES:
 * import { LAYOUT_SYSTEM } from '@/types/layout/layout-system';
 *
 * // Max width containers:
 * style={{ maxWidth: LAYOUT_SYSTEM.maxWidths.content.lg }}
 *
 * // Z-index layering:
 * style={{ zIndex: LAYOUT_SYSTEM.zIndex.modal }}
 *
 * // Component sizes:
 * className={LAYOUT_SYSTEM.componentSizes.button.height.md}
 *
 * // Responsive grid columns:
 * style={{ gridTemplateColumns: `repeat(${LAYOUT_SYSTEM.grid.columns.mobile}, 1fr)` }}
 */

import { ExtendedResponsiveValue } from './responsive';

export interface LayoutSystemTokens {
  // ============================================================================
  // CONTAINER MAX WIDTHS
  // ============================================================================

  /** Maximum widths for content containers at different scales */
  maxWidths: {
    /** Full width containers */
    full: string;      // 100% - Full viewport width

    /** Content containers (reading width, optimal line length) */
    content: {
      xs: string;      // Extra small content (e.g., 448px - ~40ch)
      sm: string;      // Small content (e.g., 640px - ~60ch)
      md: string;      // Medium content (e.g., 768px - ~70ch)
      lg: string;      // Large content (e.g., 1024px)
      xl: string;      // Extra large content (e.g., 1280px)
      '2xl': string;   // 2X large content (e.g., 1536px)
    };

    /** Page containers (full page layouts) */
    page: {
      sm: string;      // Small page (e.g., 640px)
      md: string;      // Medium page (e.g., 768px)
      lg: string;      // Large page (e.g., 1024px)
      xl: string;      // Extra large page (e.g., 1280px)
      '2xl': string;   // 2X large page (e.g., 1536px)
    };

    /** Special use cases */
    hero: string;      // Hero section content max-width
    navbar: string;    // Navbar content max-width
    footer: string;    // Footer content max-width
    prose: string;     // Optimal reading width (65ch = ~65 characters)
  };

  // ============================================================================
  // VIEWPORT HEIGHT SYSTEM
  // ============================================================================

  /** Viewport height calculations for full-screen layouts */
  viewportHeight: {
    /** Full viewport height */
    full: string;              // 100vh

    /** Height minus fixed header */
    minusHeader: string;       // calc(100vh - 64px)

    /** Height minus header and footer */
    minusHeaderFooter: string; // calc(100vh - 184px)

    /** Dynamic viewport height (mobile-safe, excludes browser UI) */
    dynamic: string;           // 100dvh
  };

  // ============================================================================
  // Z-INDEX LAYERING
  // ============================================================================

  /** Z-index scale for consistent layering */
  zIndex: {
    base: number;              // 0 - Base layer
    dropdown: number;          // 10 - Dropdowns, popovers
    sticky: number;            // 20 - Sticky headers/footers
    fixed: number;             // 30 - Fixed position elements
    overlay: number;           // 40 - Overlays, backdrops
    modal: number;             // 50 - Modals, dialogs
    popover: number;           // 60 - Popovers over modals
    tooltip: number;           // 70 - Tooltips (always on top)
    notification: number;      // 80 - Toast notifications
    max: number;               // 9999 - Emergency maximum
  };

  // ============================================================================
  // COMPONENT SIZES
  // ============================================================================

  /** Standard component sizing */
  componentSizes: {
    /** Button heights */
    button: {
      height: {
        xs: string;            // Extra small (e.g., h-6 = 24px)
        sm: string;            // Small (e.g., h-8 = 32px)
        md: string;            // Medium (e.g., h-10 = 40px)
        lg: string;            // Large (e.g., h-12 = 48px)
        xl: string;            // Extra large (e.g., h-14 = 56px)
      };
    };

    /** Input heights */
    input: {
      height: {
        sm: string;            // Small (e.g., h-8 = 32px)
        md: string;            // Medium (e.g., h-10 = 40px)
        lg: string;            // Large (e.g., h-12 = 48px)
      };
    };

    /** Icon sizes */
    icon: {
      xs: string;              // Extra small (e.g., 12px)
      sm: string;              // Small (e.g., 16px)
      md: string;              // Medium (e.g., 20px)
      lg: string;              // Large (e.g., 24px)
      xl: string;              // Extra large (e.g., 32px)
      '2xl': string;           // 2X large (e.g., 48px)
    };

    /** Avatar sizes */
    avatar: {
      xs: string;              // Extra small (e.g., 24px)
      sm: string;              // Small (e.g., 32px)
      md: string;              // Medium (e.g., 40px)
      lg: string;              // Large (e.g., 48px)
      xl: string;              // Extra large (e.g., 64px)
      '2xl': string;           // 2X large (e.g., 96px)
    };
  };

  // ============================================================================
  // GRID SYSTEM
  // ============================================================================

  /** Grid layout configurations */
  grid: {
    /**
     * Responsive column counts using ExtendedResponsiveValue
     * Typically uses 3 breakpoints (mobile/tablet/desktop), but can add more if needed
     */
    columns: ExtendedResponsiveValue<number>;

    /** Grid gap sizes (static - no responsive behavior needed) */
    gap: {
      tight: string;           // Tight gap (e.g., gap-2)
      normal: string;          // Normal gap (e.g., gap-4)
      relaxed: string;         // Relaxed gap (e.g., gap-6)
      loose: string;           // Loose gap (e.g., gap-8)
    };
  };

  // ============================================================================
  // BORDER RADIUS
  // ============================================================================

  /** Border radius scale */
  borderRadius: {
    none: string;              // 0px - No radius
    sm: string;                // Small radius (e.g., 0.125rem)
    base: string;              // Base radius (e.g., 0.25rem)
    md: string;                // Medium radius (e.g., 0.375rem)
    lg: string;                // Large radius (e.g., 0.5rem)
    xl: string;                // Extra large radius (e.g., 0.75rem)
    '2xl': string;             // 2X large radius (e.g., 1rem)
    '3xl': string;             // 3X large radius (e.g., 1.5rem)
    full: string;              // Full radius (e.g., 9999px - perfect circle)
  };

  // ============================================================================
  // ASPECT RATIOS
  // ============================================================================

  /** Common aspect ratios */
  aspectRatio: {
    square: string;            // 1:1 (e.g., aspect-square)
    video: string;             // 16:9 (e.g., aspect-video)
    portrait: string;          // 3:4 (e.g., aspect-[3/4])
    landscape: string;         // 4:3 (e.g., aspect-[4/3])
    wide: string;              // 21:9 (e.g., aspect-[21/9])
    ultrawide: string;         // 32:9 (e.g., aspect-[32/9])
  };
}

export const LAYOUT_SYSTEM: LayoutSystemTokens = {
  // ============================================================================
  // CONTAINER MAX WIDTHS
  // ============================================================================

  maxWidths: {
    full: '100%',                       // 👈 Full width

    content: {
      xs: '28rem',                      // 👈 448px
      sm: '40rem',                      // 👈 640px
      md: '48rem',                      // 👈 768px
      lg: '64rem',                      // 👈 1024px
      xl: '80rem',                      // 👈 1280px
      '2xl': '96rem',                   // 👈 1536px
    },

    page: {
      sm: '640px',                      // 👈 Small page width
      md: '768px',                      // 👈 Medium page width
      lg: '1024px',                     // 👈 Large page width
      xl: '1280px',                     // 👈 Extra large page width
      '2xl': '1536px',                  // 👈 2X large page width
    },

    hero: '680px',                      // 👈 Hero content container
    navbar: '680px',                    // 👈 Navbar content (matches hero)
    footer: '1280px',                   // 👈 Footer content (wider)
    prose: '65ch',                      // 👈 Optimal reading width (~65 characters)
  },

  // ============================================================================
  // VIEWPORT HEIGHT SYSTEM
  // ============================================================================

  viewportHeight: {
    full: '100vh',                              // 👈 Full viewport height
    minusHeader: 'calc(100vh - 4rem)',          // 👈 Minus 64px navbar
    minusHeaderFooter: 'calc(100vh - 11.5rem)', // 👈 Minus 64px nav + 120px footer
    dynamic: '100dvh',                          // 👈 Dynamic viewport (mobile-safe)
  },

  // ============================================================================
  // Z-INDEX LAYERING
  // ============================================================================
  // Consistent stacking order prevents z-index conflicts
  // Tip: Always use these values instead of arbitrary z-index numbers

  zIndex: {
    base: 0,           // 👈 Default layer
    dropdown: 10,      // 👈 Dropdowns, select menus
    sticky: 20,        // 👈 Sticky headers
    fixed: 30,         // 👈 Fixed navigation, FABs
    overlay: 40,       // 👈 Modal backdrops
    modal: 50,         // 👈 Modal dialogs
    popover: 60,       // 👈 Popovers that appear over modals
    tooltip: 70,       // 👈 Tooltips (always visible)
    notification: 80,  // 👈 Toast notifications
    max: 9999,         // 👈 Emergency maximum (use sparingly!)
  },

  // ============================================================================
  // COMPONENT SIZES
  // ============================================================================

  componentSizes: {
    button: {
      height: {
        xs: 'h-6',       // 👈 24px height
        sm: 'h-8',       // 👈 32px height
        md: 'h-10',      // 👈 40px height
        lg: 'h-12',      // 👈 48px height
        xl: 'h-14',      // 👈 56px height
      },
    },

    input: {
      height: {
        sm: 'h-8',       // 👈 32px height
        md: 'h-10',      // 👈 40px height
        lg: 'h-12',      // 👈 48px height
      },
    },

    icon: {
      xs: '0.75rem',   // 👈 12px
      sm: '1rem',      // 👈 16px
      md: '1.25rem',   // 👈 20px
      lg: '1.5rem',    // 👈 24px
      xl: '2rem',      // 👈 32px
      '2xl': '3rem',   // 👈 48px
    },

    avatar: {
      xs: '1.5rem',    // 👈 24px
      sm: '2rem',      // 👈 32px
      md: '2.5rem',    // 👈 40px
      lg: '3rem',      // 👈 48px
      xl: '4rem',      // 👈 64px
      '2xl': '6rem',   // 👈 96px
    },
  },

  // ============================================================================
  // GRID SYSTEM
  // ============================================================================

  grid: {
    columns: {
      // BASE (Required)
      mobile: 4,                     // 👈 375px - 4 columns (base)

      // OPTIONAL BREAKPOINTS (use 3-breakpoint pattern for grid)
      tablet: 8,                     // 👈 640px - 8 columns
      smallDesktop: 12,              // 👈 1024px - 12 columns
      desktop: 12,                   // 👈 1280px - 12 columns (maintain)

      // Auto-generated classes for grid-cols
      classes: 'grid-cols-4 sm:grid-cols-8 lg:grid-cols-12',
    },

    gap: {
      tight: 'gap-2',                // 👈 8px gap (static)
      normal: 'gap-4',               // 👈 16px gap (static)
      relaxed: 'gap-6',              // 👈 24px gap (static)
      loose: 'gap-8',                // 👈 32px gap (static)
    },
  },

  // ============================================================================
  // BORDER RADIUS
  // ============================================================================

  borderRadius: {
    none: 'rounded-none',        // 👈 0px
    sm: 'rounded-sm',            // 👈 0.125rem (2px)
    base: 'rounded',             // 👈 0.25rem (4px)
    md: 'rounded-md',            // 👈 0.375rem (6px)
    lg: 'rounded-lg',            // 👈 0.5rem (8px)
    xl: 'rounded-xl',            // 👈 0.75rem (12px)
    '2xl': 'rounded-2xl',        // 👈 1rem (16px)
    '3xl': 'rounded-3xl',        // 👈 1.5rem (24px)
    full: 'rounded-full',        // 👈 9999px (perfect circle)
  },

  // ============================================================================
  // ASPECT RATIOS
  // ============================================================================

  aspectRatio: {
    square: 'aspect-square',      // 👈 1:1
    video: 'aspect-video',        // 👈 16:9
    portrait: 'aspect-[3/4]',     // 👈 3:4
    landscape: 'aspect-[4/3]',    // 👈 4:3
    wide: 'aspect-[21/9]',        // 👈 21:9 ultra-wide
    ultrawide: 'aspect-[32/9]',   // 👈 32:9 super ultra-wide
  },
};

// ============================================================================
// LAYOUT UTILITIES
// ============================================================================

/**
 * Center content horizontally with max-width
 * @returns Class string for centered container
 *
 * @example
 * const classes = centerContainer();
 * // Returns: 'mx-auto'
 * // Then apply maxWidth via inline style or Tailwind max-w-* classes
 */
export const centerContainer = (): string => 'mx-auto';

/**
 * Create a flex center layout
 * @returns Flex center classes
 */
export const flexCenter = (): string => 'flex items-center justify-center';

/**
 * Create a flex column center layout
 * @returns Flex column center classes
 */
export const flexColumnCenter = (): string => 'flex flex-col items-center justify-center';

/**
 * Create an absolute center layout (position absolute)
 * @returns Absolute center classes
 */
export const absoluteCenter = (): string => 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2';

/**
 * Create a full screen overlay
 * @returns Full screen overlay classes
 */
export const fullScreenOverlay = (): string => 'fixed inset-0';

/**
 * Create responsive grid columns
 * @param mobile - Columns on mobile
 * @param tablet - Columns on tablet
 * @param desktop - Columns on desktop
 * @returns Grid column classes
 *
 * @example
 * const classes = responsiveGrid(1, 2, 3);
 * // Returns: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
 */
export const responsiveGrid = (mobile: number, tablet: number, desktop: number): string =>
  `grid grid-cols-${mobile} sm:grid-cols-${tablet} lg:grid-cols-${desktop}`;
