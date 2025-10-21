/**
 * GENERAL DESIGN TOKENS
 *
 * Shared values used across multiple components including breakpoints,
 * layout constraints, and global sizing values.
 *
 * HOW TO ADJUST:
 * - breakpoint: Controls when layout switches from compact to full mode
 * - componentHeights: Fixed heights used for viewport calculations
 * - maxWidths: Maximum content widths for responsive containers
 *
 * USAGE:
 * import { GENERAL_TOKENS } from '@/types/layout/general';
 * style={{ maxWidth: GENERAL_TOKENS.maxWidths.heroContent }}
 */

export interface GeneralTokens {
  // ============================================================================
  // BREAKPOINTS
  // ============================================================================

  /** Main viewport breakpoint for layout mode switching */
  breakpoint: {
    width: number;         // Breakpoint width (px) - when viewport switches to full mode
    height: number;        // Breakpoint height (px) - minimum height for full mode
  };

  // ============================================================================
  // COMPONENT HEIGHTS
  // ============================================================================

  /** Fixed heights for layout calculations (used in viewport height math) */
  componentHeights: {
    navbar: number;        // Navbar fixed height (px) - used in calc() for hero height
    footer: number;        // Footer approximate height (px) - for spacing calculations
  };

  // ============================================================================
  // MAX WIDTHS
  // ============================================================================

  /** Maximum content widths for responsive containers */
  maxWidths: {
    heroContent: string;   // Hero section content container (e.g., "680px")
    navbarContent: string; // Navbar content container (e.g., "680px")
  };
}

export const GENERAL_TOKENS: GeneralTokens = {
  // ============================================================================
  // BREAKPOINTS
  // ============================================================================
  // Adjust these to change when the layout switches from compact to full mode
  // Current: 1024×768 (iPad landscape and larger)

  breakpoint: {
    width: 1024,   // 👈 Change to adjust width breakpoint (e.g., 1280 for larger screens)
    height: 768,   // 👈 Change to adjust height breakpoint (e.g., 900 for taller screens)
  },

  // ============================================================================
  // COMPONENT HEIGHTS
  // ============================================================================
  // These are used in CSS calculations for viewport-relative sizing

  componentHeights: {
    navbar: 64,    // 👈 Must match actual navbar height (affects hero positioning)
    footer: 120,   // 👈 Approximate footer height (used for spacing calculations)
  },

  // ============================================================================
  // MAX WIDTHS
  // ============================================================================
  // Controls the maximum width of centered content containers
  // Tip: Keep these values consistent for visual alignment

  maxWidths: {
    heroContent: "680px",     // 👈 Max width of hero content (terminal + buttons)
    navbarContent: "680px",   // 👈 Max width of navbar content (logo + social icons)
  },
};
