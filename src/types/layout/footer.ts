/**
 * FOOTER DESIGN TOKENS
 *
 * All design values for the footer including spacing, typography, and icon sizing.
 *
 * HOW TO ADJUST:
 * - padding: Controls space inside footer (vertical and horizontal)
 * - copyrightMargin: Space below copyright text before social icons
 * - socialIconGap: Space between individual social icons
 * - iconSizes: Size of social icons and their clickable padding
 * - footerText: Copyright text size
 *
 * USAGE:
 * import { FOOTER_TOKENS } from '@/types/layout/footer';
 * className={FOOTER_TOKENS.padding.vertical}
 */

export interface FooterTokens {
  // ============================================================================
  // SPACING
  // ============================================================================

  /** Footer padding (space inside the footer container) */
  padding: {
    vertical: string;      // Vertical padding (e.g., "py-8")
    horizontal: string;    // Horizontal padding (e.g., "px-4")
  };

  /** Copyright text margin */
  copyrightMargin: string; // Margin below copyright text (e.g., "mb-4")

  /** Gap between social icons */
  socialIconGap: string;   // Space between icons (e.g., "gap-4")

  // ============================================================================
  // SIZING
  // ============================================================================

  /** Social icon sizing */
  iconSizes: {
    socialFooter: string;  // Social icon size (e.g., "w-5 h-5")
    padding: string;       // Padding around clickable icons (e.g., "p-2")
  };

  // ============================================================================
  // TYPOGRAPHY
  // ============================================================================

  /** Footer text size */
  footerText: string;      // Copyright text size (e.g., "text-sm")
}

export const FOOTER_TOKENS: FooterTokens = {
  // ============================================================================
  // SPACING
  // ============================================================================
  // Control the space inside and around footer elements
  // Tip: Maintain consistent padding with other major sections

  padding: {
    vertical: "py-8",        // 👈 32px vertical padding (top + bottom)
    horizontal: "px-4",      // 👈 16px horizontal padding (left + right)
  },

  copyrightMargin: "mb-4",   // 👈 16px space below copyright before social icons

  socialIconGap: "gap-4",    // 👈 16px gap between social icons

  // ============================================================================
  // SIZING
  // ============================================================================
  // Control the size of icons in the footer
  // Tip: Footer icons are typically smaller than navbar icons

  iconSizes: {
    socialFooter: "w-5 h-5", // 👈 20×20px social icons (smaller than navbar)
    padding: "p-2",          // 👈 8px padding around clickable icons
  },

  // ============================================================================
  // TYPOGRAPHY
  // ============================================================================
  // Font size for footer text

  footerText: "text-sm",     // 👈 14px copyright text size
};
