/**
 * HERO SECTION DESIGN TOKENS
 *
 * All design values for the hero section including spacing, buttons, terminal/codebox,
 * typography, and visual effects.
 *
 * HOW TO ADJUST:
 *
 * HERO SECTION:
 * - alignment: Vertical alignment with 10 granular breakpoints for surgical control
 * - topSpacing: Space above hero with 10 granular breakpoints
 * - contentPadding: Horizontal padding (can be static or responsive)
 *
 * BUTTONS:
 * - height, padding, textSize: Control button appearance
 * - colors: Primary (View Work) and Secondary (Say Hello) styling
 *
 * TERMINAL/CODEBOX:
 * - header/content/footer.padding: Space inside each section
 * - borderRadius: Rounded corners of terminal
 * - gradientFadeHeight: Scroll indicator fade height
 * - codeboxHeight: Max height based on layout mode
 *
 * TYPOGRAPHY:
 * - terminalText: Font sizes for prompt (@, name, >) and rotating title
 * - codeText: Font sizes for code block content
 *
 * EFFECTS:
 * - scanline: CRT monitor scanline texture
 * - terminalColors: Background, border, and gradient colors
 *
 * USAGE:
 * import { HERO_TOKENS } from '@/types/layout/hero';
 * className={HERO_TOKENS.hero.alignment.classes}
 */

import { ExtendedResponsiveValue } from './responsive';

export type ViewportLayout = "compact" | "full";

export interface HeroTokens {
  // ============================================================================
  // HERO SECTION SPACING
  // ============================================================================

  /** Hero section spacing with granular breakpoint control */
  hero: {
    /** Vertical alignment across all 10 breakpoints for precise control */
    alignment: ExtendedResponsiveValue<string>;

    /** Top spacing across all 10 breakpoints for precise vertical positioning */
    topSpacing: ExtendedResponsiveValue<string>;

    /** Horizontal content padding - responsive for optimal spacing across devices */
    contentPadding: ExtendedResponsiveValue<string>;
  };

  // ============================================================================
  // BUTTONS
  // ============================================================================

  /** Button sizing - responsive for different viewport tap targets */
  buttons: {
    height: ExtendedResponsiveValue<string>;   // Button height - responsive for optimal tap targets
    padding: ExtendedResponsiveValue<string>;  // Button padding - responsive for comfortable spacing
    textSize: ExtendedResponsiveValue<string>; // Button text size - responsive for readability
  };

  /** Button colors (static - consistent across viewports) */
  buttonColors: {
    primary: {
      background: string;  // Primary button background (View Work)
      text: string;        // Primary button text color
    };
    secondary: {
      background: string;  // Secondary button background (Say Hello)
      text: string;        // Secondary button text color
      hoverBg: string;     // Secondary button hover background
    };
  };

  // ============================================================================
  // TERMINAL/CODEBOX
  // ============================================================================

  /** Terminal component spacing */
  terminal: {
    header: {
      /** Header padding - responsive for optimal spacing */
      padding: ExtendedResponsiveValue<string>;

      /** Gap between header elements - responsive for different screen densities */
      elementGap: ExtendedResponsiveValue<string>;
    };
    content: {
      /** Content padding - responsive for reading comfort */
      padding: ExtendedResponsiveValue<string>;
    };
    footer: {
      /** Footer padding - responsive for balanced spacing */
      padding: ExtendedResponsiveValue<string>;
    };
    borderRadius: string;  // Container border radius (static - consistent across viewports)
    gradientFadeHeight: ExtendedResponsiveValue<string>; // Gradient height - responsive for scroll indicators
  };

  /** Terminal colors */
  terminalColors: {
    headerBackground: string;  // Header gradient background
    contentBackground: string; // Content background (semi-transparent)
    footerBackground: string;  // Footer solid background
    border: string;            // Border color for separators
    borderBottom: string;      // Bottom border color (header/footer)
    gradientFade: string;      // Top scroll fade gradient
  };

  /** Separator sizes - responsive for visual density */
  separator: {
    vertical: ExtendedResponsiveValue<string>;     // Vertical separator height
    horizontal: ExtendedResponsiveValue<string>;   // Horizontal separator width
  };

  /** Codebox heights - responsive for optimal content display */
  codeboxHeight: {
    compact: ExtendedResponsiveValue<string>;  // Compact mode heights
    full: ExtendedResponsiveValue<string>;     // Full mode heights
  };

  // ============================================================================
  // LOGO
  // ============================================================================

  /** Terminal logo sizing - responsive to match text height */
  logo: {
    terminal: {
      /** Logo container sizing - responsive across all viewports */
      container: ExtendedResponsiveValue<string>;

      /** Logo fallback text sizing - responsive for consistency */
      text: ExtendedResponsiveValue<string>;
    };
  };

  // ============================================================================
  // TYPOGRAPHY
  // ============================================================================

  /** Terminal header text sizes - responsive for readability */
  terminalText: {
    /** Prompt text (@ symbol, name) - responsive across all breakpoints */
    prompt: ExtendedResponsiveValue<string>;

    /** Title text (role, rotating titles) - responsive for hierarchy */
    title: ExtendedResponsiveValue<string>;
  };

  /** Code block text sizes - responsive for code readability */
  codeText: ExtendedResponsiveValue<string>;

  // ============================================================================
  // EFFECTS
  // ============================================================================

  /** Visual effects */
  effects: {
    scanline: {
      height: string;      // Scanline texture repeat height (e.g., "3px")
      opacity: string;     // Scanline color with opacity (e.g., "rgba(255, 255, 255, 0.03)")
    };
  };
}

export const HERO_TOKENS: HeroTokens = {
  // ============================================================================
  // HERO SECTION SPACING
  // ============================================================================
  // Controls the vertical alignment and spacing of hero content across all 10 breakpoints
  //
  // ALIGNMENT STRATEGY:
  // - Mobile devices (≤ 414px): Top-aligned for better content accessibility
  // - Small tablet+ (≥ 540px): Vertically centered for better visual balance
  //
  // TOP SPACING STRATEGY:
  // - Progressively increases with viewport size
  // - Accounts for navbar height and comfortable viewing distance

  hero: {
    alignment: {
      // BASE (Required)
      mobile: "items-start",                    // 👈 375px - Top-aligned (base)

      // GRANULAR BREAKPOINTS (Optional)
      smallMobile: "items-start",               // 👈 360px - Top-aligned (small phones)
      largeMobile: "items-start",               // 👈 414px - Top-aligned (large phones)
      smallTablet: "items-center",              // 👈 540px - Switch to centered
      tablet: "items-center",                   // 👈 640px - Centered
      largeTablet: "items-center",              // 👈 768px - Centered
      smallDesktop: "items-center",             // 👈 1024px - Centered
      desktop: "items-center",                  // 👈 1280px - Centered
      largeDesktop: "items-center",             // 👈 1536px - Centered
      xlDesktop: "items-center",                // 👈 1920px - Centered

      // Auto-generated classes combining all breakpoints
      classes: "items-start min-[540px]:items-center",
    },

    topSpacing: {
      // BASE (Required)
      mobile: "pt-10",                          // 👈 375px - 40px top spacing (base)

      // GRANULAR BREAKPOINTS (Optional)
      smallMobile: "pt-8",                      // 👈 360px - 32px (compact for small screens)
      largeMobile: "pt-12",                     // 👈 414px - 48px (slightly more space)
      smallTablet: "pt-28",                     // 👈 540px - 112px (centered layout starts)
      tablet: "pt-28",                          // 👈 640px - 112px (maintain centering)
      largeTablet: "pt-32",                     // 👈 768px - 128px (more vertical space)
      smallDesktop: "pt-40",                    // 👈 1024px - 160px (desktop spacing)
      desktop: "pt-40",                         // 👈 1280px - 160px (maintain spacing)
      largeDesktop: "pt-44",                    // 👈 1536px - 176px (large screen spacing)
      xlDesktop: "pt-48",                       // 👈 1920px - 192px (maximum spacing)

      // Auto-generated classes combining all breakpoints
      classes: "pt-10 min-[360px]:pt-8 min-[414px]:pt-12 min-[540px]:pt-28 sm:pt-28 md:pt-32 lg:pt-40 xl:pt-40 2xl:pt-44 min-[1920px]:pt-48",
    },

    contentPadding: {
      // BASE (Required)
      mobile: "px-4",                           // 👈 375px - 16px horizontal (base)

      // GRANULAR BREAKPOINTS (Optional - using 3-breakpoint pattern)
      tablet: "px-6",                           // 👈 640px - 24px horizontal
      desktop: "px-8",                          // 👈 1280px - 32px horizontal

      // Auto-generated classes
      classes: "px-4 sm:px-6 xl:px-8",
    },
  },

  // ============================================================================
  // BUTTONS
  // ============================================================================
  // Control the appearance and colors of hero CTA buttons

  buttons: {
    height: {
      // BASE (Required)
      mobile: "h-11",                           // 👈 375px - 44px height (base)

      // GRANULAR BREAKPOINTS (Optional - using single breakpoint)
      desktop: "h-12",                          // 👈 1280px - 48px height (larger buttons)

      // Auto-generated classes
      classes: "h-11 xl:h-12",
    },
    padding: {
      // BASE (Required)
      mobile: "px-6",                           // 👈 375px - 24px horizontal (base)

      // GRANULAR BREAKPOINTS (Optional)
      tablet: "px-8",                           // 👈 640px - 32px horizontal

      // Auto-generated classes
      classes: "px-6 sm:px-8",
    },
    textSize: {
      // BASE (Required)
      mobile: "text-sm",                        // 👈 375px - 14px text (base)

      // GRANULAR BREAKPOINTS (Optional)
      desktop: "text-base",                     // 👈 1280px - 16px text

      // Auto-generated classes
      classes: "text-sm xl:text-base",
    },
  },

  buttonColors: {
    primary: {
      background: "hsl(190 100% 50%)",  // 👈 Cyan background (View Work)
      text: "hsl(220 30% 4%)",          // 👈 Dark text for contrast
    },
    secondary: {
      background: "transparent",                // 👈 Transparent background (Say Hello)
      text: "hsl(190 100% 50%)",                // 👈 Cyan text
      hoverBg: "hsl(190 100% 50% / 0.1)",       // 👈 Cyan at 10% opacity on hover
    },
  },

  // ============================================================================
  // TERMINAL/CODEBOX
  // ============================================================================
  // Controls the terminal-style code display container

  terminal: {
    header: {
      padding: {
        // BASE (Required)
        mobile: "p-0",                          // 👈 375px - 12px all sides (base)

        // GRANULAR BREAKPOINTS (Optional - using 2-breakpoint pattern)
        tablet: "p-4",                          // 👈 640px - 16px all sides

        // Auto-generated classes
        classes: "p-3 sm:p-4",
      },
      elementGap: {
        // BASE (Required)
        mobile: "gap-2",                        // 👈 375px - 8px gap (base)

        // GRANULAR BREAKPOINTS (Optional - using 2-breakpoint pattern)
        tablet: "gap-2",                        // 👈 640px - maintain 8px gap

        // Auto-generated classes
        classes: "gap-2",
      },
    },
    content: {
      padding: {
        // BASE (Required)
        mobile: "p-4",                          // 👈 375px - 16px all sides (base)

        // GRANULAR BREAKPOINTS (Optional - using 2-breakpoint pattern)
        tablet: "p-4",                          // 👈 640px - maintain 16px

        // Auto-generated classes
        classes: "p-4",
      },
    },
    footer: {
      padding: {
        // BASE (Required)
        mobile: "p-3",                          // 👈 375px - 12px all sides (base)

        // GRANULAR BREAKPOINTS (Optional - using 2-breakpoint pattern)
        tablet: "p-4",                          // 👈 640px - 16px all sides

        // Auto-generated classes
        classes: "p-3 sm:p-4",
      },
    },
    borderRadius: "0.5rem",                     // 👈 8px rounded corners (static)
    gradientFadeHeight: {
      // BASE (Required)
      mobile: "h-10",                           // 👈 375px - 40px gradient (base)

      // GRANULAR BREAKPOINTS (Optional - single breakpoint)
      tablet: "h-12",                           // 👈 640px - 48px gradient

      // Auto-generated classes
      classes: "h-10 sm:h-12",
    },
  },

  terminalColors: {
    headerBackground: "linear-gradient(to bottom, hsl(220 25% 10%), hsl(220 25% 8%))",
    contentBackground: "bg-card/50",           // 👈 Semi-transparent card background
    footerBackground: "hsl(220 25% 9%)",       // 👈 Solid dark background
    border: "hsl(220 20% 15%)",                // 👈 Border color for separators
    borderBottom: "hsl(220 20% 15%)",          // 👈 Bottom border color
    gradientFade: "linear-gradient(to bottom, hsl(220 25% 8%), transparent)",
  },

  separator: {
    vertical: {
      // BASE (Required)
      mobile: "h-4",                            // 👈 375px - 16px height (base)

      // GRANULAR BREAKPOINTS (Optional - static across viewports)
      // Auto-generated classes
      classes: "h-4",
    },
    horizontal: {
      // BASE (Required)
      mobile: "w-px",                           // 👈 375px - 1px width (base)

      // GRANULAR BREAKPOINTS (Optional - static across viewports)
      // Auto-generated classes
      classes: "w-px",
    },
  },

  codeboxHeight: {
    compact: {
      // BASE (Required)
      mobile: "max-h-[40vh]",                   // 👈 375px - 40vh (base)

      // GRANULAR BREAKPOINTS (Optional)
      tablet: "max-h-[55vh]",                   // 👈 640px - 55vh (more space)

      // Auto-generated classes
      classes: "max-h-[40vh] sm:max-h-[55vh]",
    },
    full: {
      // BASE (Required)
      mobile: "max-h-[40vh]",                   // 👈 375px - 40vh (base)

      // GRANULAR BREAKPOINTS (Optional - static in full mode)
      // Auto-generated classes
      classes: "max-h-[40vh]",
    },
  },

  // ============================================================================
  // LOGO
  // ============================================================================
  // Terminal logo sizing - adjust these to scale logo relative to text
  // Tip: Logo should match or be slightly smaller than prompt text height

  logo: {
    terminal: {
      container: {
        // BASE (Required)
        mobile: "w-8 h-4",                      // 👈 375px - 32×16px (base)

        // GRANULAR BREAKPOINTS (Optional - granular sizing)
        smallMobile: "w-8 h-4",                 // 👈 360px - 32×16px
        largeMobile: "w-12 h-7",                // 👈 414px - 48×28px
        smallTablet: "w-14 h-8",                // 👈 540px - 56×32px
        tablet: "w-16 h-10",                    // 👈 640px - 64×40px
        largeTablet: "w-20 h-12",               // 👈 768px - 80×48px
        smallDesktop: "w-24 h-14",              // 👈 1024px - 96×56px

        // Auto-generated classes
        classes: "w-8 h-4 min-[414px]:w-12 min-[414px]:h-7 min-[540px]:w-14 min-[540px]:h-8 sm:w-16 sm:h-10 md:w-20 md:h-12 lg:w-24 lg:h-14",
      },
      text: {
        // BASE (Required)
        mobile: "text-[10px]",                  // 👈 375px - 10px (base)

        // GRANULAR BREAKPOINTS (Optional - granular sizing)
        largeMobile: "text-xs",                 // 👈 414px - 12px
        smallTablet: "text-sm",                 // 👈 540px - 14px
        tablet: "text-base",                    // 👈 640px - 16px
        largeTablet: "text-lg",                 // 👈 768px - 18px

        // Auto-generated classes
        classes: "text-[10px] min-[414px]:text-xs min-[540px]:text-sm sm:text-base md:text-lg",
      },
    },
  },

  // ============================================================================
  // TYPOGRAPHY
  // ============================================================================
  // Font sizes for terminal text and code content
  // Tip: Maintain consistent ratios across breakpoints for visual harmony

  terminalText: {
    prompt: {
      // BASE (Required)
      mobile: "text-xl",                        // 👈 375px - 20px (base)

      // GRANULAR BREAKPOINTS (Optional - granular for identity line)
      smallMobile: "text-xl",                   // 👈 360px - 20px
      largeMobile: "text-xl",                   // 👈 414px - 20px
      smallTablet: "text-2xl",                  // 👈 540px - 24px
      tablet: "text-3xl",                       // 👈 640px - 30px
      largeTablet: "text-4xl",                  // 👈 768px - 36px
      smallDesktop: "text-5xl",                 // 👈 1024px - 48px

      // Auto-generated classes
      classes: "text-xl min-[540px]:text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
    },
    title: {
      // BASE (Required)
      mobile: "text-xs",                        // 👈 375px - 12px (base)

      // GRANULAR BREAKPOINTS (Optional - granular for title)
      smallMobile: "text-xs",                   // 👈 360px - 12px
      largeMobile: "text-sm",                   // 👈 414px - 14px
      smallTablet: "text-base",                 // 👈 540px - 16px
      tablet: "text-lg",                        // 👈 640px - 18px
      largeTablet: "text-xl",                   // 👈 768px - 20px
      smallDesktop: "text-2xl",                 // 👈 1024px - 24px

      // Auto-generated classes
      classes: "text-xs min-[414px]:text-sm min-[540px]:text-base sm:text-lg md:text-xl lg:text-2xl",
    },
  },

  codeText: {
    // BASE (Required)
    mobile: "text-[12px]",                      // 👈 375px - 12px (base)

    // GRANULAR BREAKPOINTS (Optional)
    largeMobile: "text-sm",                     // 👈 414px - 14px
    tablet: "text-base",                        // 👈 640px - 16px

    // Auto-generated classes
    classes: "text-[12px] min-[414px]:text-sm sm:text-base",
  },

  // ============================================================================
  // EFFECTS
  // ============================================================================
  // Visual effects for retro/terminal aesthetic

  effects: {
    scanline: {
      height: "3px",                           // 👈 3px scanline repeat pattern
      opacity: "rgba(255, 255, 255, 0.03)",    // 👈 3% white overlay
    },
  },
};
