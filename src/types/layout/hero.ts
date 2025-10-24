/**
 * HERO SECTION DESIGN TOKENS
 *
 * All design values for the hero section including spacing, buttons, terminal/codebox,
 * typography, and visual effects.
 *
 * HOW TO ADJUST:
 *
 * HERO SECTION:
 * - topSpacing: Space above hero (pushes content down from navbar)
 * - contentPadding: Horizontal padding for hero content
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
 * className={HERO_TOKENS.hero.topSpacing.mobile}
 */

export type ViewportLayout = "compact" | "full";

export interface HeroTokens {
  // ============================================================================
  // HERO SECTION SPACING
  // ============================================================================

  /** Hero section spacing */
  hero: {
    alignment: {
      mobile: string;      // Vertical alignment < 540px (e.g., "items-start")
      tablet: string;      // Vertical alignment ≥ 540px (e.g., "min-[540px]:items-center")
    };
    topSpacing: {
      smallMobile: string; // Top spacing on small mobile < 540px (e.g., "pt-12")
      mobile: string;      // Top spacing on mobile 540px-640px (e.g., "min-[540px]:pt-16")
      tablet: string;      // Top spacing on tablet ≥ 768px (e.g., "md:pt-20")
      desktop: string;     // Top spacing on desktop ≥ 1024px (e.g., "lg:pt-24")
    };
    contentPadding: string; // Horizontal padding (e.g., "px-6")
  };

  // ============================================================================
  // BUTTONS
  // ============================================================================

  /** Button sizing */
  buttons: {
    height: string;        // Button height (e.g., "h-11" = 44px)
    padding: string;       // Horizontal padding (e.g., "px-8")
    textSize: string;      // Text size (e.g., "text-sm")
  };

  /** Button colors */
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
      padding: {
        mobile: string;    // Header padding on mobile (e.g., "p-3")
        tablet: string;    // Header padding on tablet+ (e.g., "sm:p-4")
      };
      elementGap: string;  // Gap between header elements (e.g., "gap-2")
    };
    content: {
      padding: {
        mobile: string;    // Content padding on mobile (e.g., "p-4")
        tablet: string;    // Content padding on tablet+ (e.g., "sm:p-8")
      };
    };
    footer: {
      padding: {
        mobile: string;    // Footer padding on mobile (e.g., "p-3")
        tablet: string;    // Footer padding on tablet+ (e.g., "sm:p-4")
      };
    };
    borderRadius: string;  // Container border radius (e.g., "0.5rem")
    gradientFadeHeight: string; // Top scroll gradient height (e.g., "h-10")
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

  /** Separator sizes */
  separator: {
    vertical: string;      // Vertical separator height (e.g., "h-4")
    horizontal: string;    // Horizontal separator width (e.g., "w-px")
  };

  /** Codebox heights based on layout mode */
  codeboxHeight: {
    compact: {
      mobile: string;      // Compact mode < 640px (e.g., "max-h-[55vh]")
      tablet: string;      // Compact mode ≥ 640px (e.g., "sm:max-h-[55vh]")
    };
    full: string;          // Full mode (> 1024px × 768px) (e.g., "max-h-[40vh]")
  };

  // ============================================================================
  // LOGO
  // ============================================================================

  /** Terminal logo sizing to match text height */
  logo: {
    terminal: {
      container: {
        classes: string;     // Responsive container classes for all breakpoints
      };
      text: {
        classes: string;     // Responsive text classes for all breakpoints (fallback "LOGO")
      };
    };
  };

  // ============================================================================
  // TYPOGRAPHY
  // ============================================================================

  /** Terminal header text sizes (@ symbol, name, prompt) */
  terminalText: {
    prompt: {
      classes: string;     // Responsive classes for all breakpoints
    };
    title: {
      classes: string;     // Responsive classes for all breakpoints
    };
  };

  /** Code block text sizes */
  codeText: {
    mobile: string;        // Code text < 375px (e.g., "text-[13px]")
    midMobile: string;     // Code text ≥ 375px (e.g., "min-[375px]:text-base")
    tablet: string;        // Code text ≥ 640px (e.g., "sm:text-lg")
  };

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
  // Controls the vertical alignment and spacing of hero content
  // < 540px: Top-aligned with minimal spacing for mobile
  // ≥ 540px: Vertically centered for tablet/desktop

  hero: {
    alignment: {
      mobile: "items-start",                  // 👈 Top-aligned on mobile (< 540px)
      tablet: "min-[540px]:items-center",     // 👈 Centered at 540px+
    },
    topSpacing: {
      smallMobile: "pt-10",                   // small mobile (< 540px) - reduced for top-alignment
      mobile: "min-[540px]:pt-28",            // 540px+ (centered layout)
      tablet: "md:pt-32",                     // tablet (≥ 768px)
      desktop: "lg:pt-40",                    // desktop (≥ 1024px)
    },
    contentPadding: "px-6",                   // 👈 24px horizontal padding
  },

  // ============================================================================
  // BUTTONS
  // ============================================================================
  // Control the appearance and colors of hero CTA buttons

  buttons: {
    height: "h-11",            // 👈 44px button height (comfortable tap target)
    padding: "px-8",           // 👈 32px horizontal padding
    textSize: "text-sm",       // 👈 14px text size
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
        mobile: "p-3",         // 👈 12px padding on mobile
        tablet: "sm:p-4",      // 👈 16px padding on tablet+
      },
      elementGap: "gap-2",     // 👈 8px gap between header elements
    },
    content: {
      padding: {
        mobile: "p-4",         // 👈 16px padding on mobile
        tablet: "sm:p-8",      // 👈 32px padding on tablet+
      },
    },
    footer: {
      padding: {
        mobile: "p-3",         // 👈 12px padding on mobile
        tablet: "sm:p-4",      // 👈 16px padding on tablet+
      },
    },
    borderRadius: "0.5rem",    // 👈 8px rounded corners
    gradientFadeHeight: "h-10", // 👈 40px scroll indicator gradient
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
    vertical: "h-4",           // 👈 16px vertical separator height
    horizontal: "w-px",        // 👈 1px horizontal separator width
  },

  codeboxHeight: {
    compact: {
      mobile: "max-h-[40vh]",      // 👈 55% viewport height on mobile compact
      tablet: "sm:max-h-[55vh]",   // 👈 55% viewport height on tablet compact
    },
    full: "max-h-[40vh]",          // 👈 40% viewport height in full mode
  },

  // ============================================================================
  // LOGO
  // ============================================================================
  // Terminal logo sizing - adjust these to scale logo relative to text
  // Tip: Logo should match or be slightly smaller than prompt text height

  logo: {
    terminal: {
      container: {
        // Logo container sizing - scales with terminal text
        classes: "w-8 h-4 xs:w-12 xs:h-7 xsm:w-14 xsm:h-8 sm:w-16 sm:h-10 md:w-20 md:h-12 lg:w-24 lg:h-14",
        // 👈 40×24px → 48×28px → 56×32px → 64×40px → 80×48px → 96×56px
      },
      text: {
        // Fallback "LOGO" text sizing
        classes: "text-[10px] xs:text-xs xsm:text-sm sm:text-base md:text-lg",
        // 👈 10px → 12px → 14px → 16px → 18px
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
      // Identity line (@portfolio, name) - responsive across all breakpoints
      // Increased by ~20% for better visibility
      classes: "text-xl xs:text-xl xsm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
      // 👈 16px → 20px → 20px → 24px → 30px → 36px
    },
    title: {
      // Role and rotating titles - responsive across all breakpoints
      classes: "text-xs xs:text-sm xsm:text-base sm:text-lg md:text-0.5xl lg:text-1.75xl",
      // 👈 14px → 16px → 16px → 18px → 20px → 24px
    },
  },

  codeText: {
    mobile: "text-[12px]",            // 👈 13px code text on small mobile
    midMobile: "xs:text-base", // 👈 16px at 375px+
    tablet: "sm:text-lg",             // 👈 18px at 640px+
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
