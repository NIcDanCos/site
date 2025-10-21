/**
 * NAVBAR DESIGN TOKENS
 *
 * All design values for the navigation bar including spacing, icon sizes,
 * and visual styling.
 *
 * HOW TO ADJUST:
 * - padding: Controls space inside navbar (vertical and horizontal)
 * - rowGap: Space between logo row and social icons row
 * - socialIconGap: Space between individual social icons
 * - iconSizes: Size of logo, home button, and social icons
 * - border: Bottom border styling
 *
 * USAGE:
 * import { NAVBAR_TOKENS } from '@/types/layout/navbar';
 * className={NAVBAR_TOKENS.padding.horizontal}
 */

export interface NavbarTokens {
  // ============================================================================
  // SPACING
  // ============================================================================

  /** Navbar padding (space inside the navbar container) */
  padding: {
    vertical: {
      mobile: string;      // Vertical padding on mobile (e.g., "py-4")
      tablet: string;      // Vertical padding on tablet+ (e.g., "sm:py-5")
    };
    horizontal: string;    // Horizontal padding all sizes (e.g., "px-6")
  };

  /** Gap between navbar rows (logo row and social icons row) */
  rowGap: string;          // Bottom margin of first row (e.g., "mb-4")

  /** Gap between social icons */
  socialIconGap: {
    mobile: string;        // Gap on mobile (e.g., "gap-4")
    tablet: string;        // Gap on tablet+ (e.g., "sm:gap-6")
  };

  // ============================================================================
  // SIZING
  // ============================================================================

  /** Icon sizes in navbar */
  iconSizes: {
    logo: {
      mobile: string;      // Logo size on mobile (e.g., "w-10 h-10")
      tablet: string;      // Logo size on tablet+ (e.g., "sm:w-12 sm:h-12")
    };
    homeButton: {
      mobile: string;      // Home icon size on mobile (e.g., "w-7 h-7")
      tablet: string;      // Home icon size on tablet+ (e.g., "sm:w-8 sm:h-8")
    };
    socialNav: {
      mobile: string;      // Social icon size on mobile (e.g., "w-6 h-6")
      tablet: string;      // Social icon size on tablet+ (e.g., "sm:w-7 sm:h-7")
    };
    padding: string;       // Padding around clickable icons (e.g., "p-2")
  };

  /** Logo text size */
  logoText: {
    mobile: string;        // Logo text on mobile (e.g., "text-sm")
    tablet: string;        // Logo text on tablet+ (e.g., "sm:text-base")
  };

  // ============================================================================
  // COLORS & BORDERS
  // ============================================================================

  /** Border styling */
  border: string;          // Bottom border width (e.g., "border-b-[3px]")

  /** Colors */
  colors: {
    borderBottom: string;  // Border color with opacity (e.g., "border-primary/30")
  };
}

export const NAVBAR_TOKENS: NavbarTokens = {
  // ============================================================================
  // SPACING
  // ============================================================================
  // Adjust these to control space inside and around navbar elements

  padding: {
    vertical: {
      mobile: "py-4",      // 👈 Mobile vertical padding (16px top + bottom)
      tablet: "sm:py-5",   // 👈 Tablet+ vertical padding (20px top + bottom)
    },
    horizontal: "px-6",    // 👈 Horizontal padding all sizes (24px left + right)
  },

  rowGap: "mb-4",          // 👈 Space between logo row and social icons (16px)

  socialIconGap: {
    mobile: "gap-4",       // 👈 Mobile gap between social icons (16px)
    tablet: "sm:gap-6",    // 👈 Tablet+ gap between social icons (24px)
  },

  // ============================================================================
  // SIZING
  // ============================================================================
  // Control the size of icons and text in the navbar

  iconSizes: {
    logo: {
      mobile: "w-10 h-10",        // 👈 Logo 40×40px on mobile
      tablet: "sm:w-12 sm:h-12",  // 👈 Logo 48×48px on tablet+
    },
    homeButton: {
      mobile: "w-7 h-7",          // 👈 Home icon 28×28px on mobile
      tablet: "sm:w-8 sm:h-8",    // 👈 Home icon 32×32px on tablet+
    },
    socialNav: {
      mobile: "w-6 h-6",          // 👈 Social icons 24×24px on mobile
      tablet: "sm:w-7 sm:h-7",    // 👈 Social icons 28×28px on tablet+
    },
    padding: "p-2",               // 👈 Clickable padding around icons (8px)
  },

  logoText: {
    mobile: "text-sm",            // 👈 Logo text 14px on mobile
    tablet: "sm:text-base",       // 👈 Logo text 16px on tablet+
  },

  // ============================================================================
  // COLORS & BORDERS
  // ============================================================================
  // Visual styling for borders and separators

  border: "border-b-[3px]",                // 👈 3px bottom border
  colors: {
    borderBottom: "border-primary/30",     // 👈 Primary color at 30% opacity
  },
};
