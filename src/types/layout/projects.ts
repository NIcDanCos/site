/**
 * PROJECTS PAGE DESIGN TOKENS
 *
 * All design values for the projects terminal page including spacing, colors,
 * typography, and visual effects.
 *
 * HOW TO ADJUST:
 *
 * PROJECTS SECTION:
 * - pageSpacing: Top/bottom padding for projects page
 * - contentPadding: Horizontal padding for content area
 *
 * TERMINAL:
 * - Reuses HERO_TOKENS terminal structure for consistency
 * - header/content/footer.padding: Space inside each section
 * - terminalColors: Reuses hero terminal colors for cohesion
 *
 * PROJECT ENTRIES:
 * - entrySpacing: Gap between project entries
 * - indentation: JSON indentation levels
 * - syntaxColors: JSON syntax highlighting colors
 *
 * ACTIONS:
 * - buttons: Action button styling
 * - layout: Button arrangement (responsive)
 *
 * USAGE:
 * import { PROJECTS_TOKENS } from '@/types/layout/projects';
 * className={PROJECTS_TOKENS.projects.pageSpacing.classes}
 */

import { ExtendedResponsiveValue } from './responsive';

export interface ProjectsTokens {
  // ============================================================================
  // PROJECTS PAGE LAYOUT
  // ============================================================================

  /** Projects page spacing with granular breakpoint control */
  projects: {
    /** Top spacing for projects page - responsive for optimal vertical positioning */
    pageSpacing: ExtendedResponsiveValue<string>;

    /** Horizontal content padding - responsive for optimal spacing across devices */
    contentPadding: ExtendedResponsiveValue<string>;
  };

  // ============================================================================
  // TERMINAL STRUCTURE
  // ============================================================================

  /** Terminal component spacing (reuses hero pattern) */
  terminal: {
    header: {
      /** Header padding - responsive for optimal spacing */
      padding: ExtendedResponsiveValue<string>;
    };
    content: {
      /** Content padding - responsive for reading comfort */
      padding: ExtendedResponsiveValue<string>;
    };
    footer: {
      /** Footer padding - responsive for balanced spacing */
      padding: ExtendedResponsiveValue<string>;
    };
    borderRadius: string;  // Container border radius (static)
    gradientFadeHeight: ExtendedResponsiveValue<string>; // Gradient height for scroll indicators
  };

  /** Terminal colors (reuses hero colors for consistency) */
  terminalColors: {
    headerBackground: string;  // Header gradient background
    contentBackground: string; // Content background (semi-transparent)
    footerBackground: string;  // Footer solid background
    border: string;            // Border color for separators
    borderBottom: string;      // Bottom border color
    gradientFade: string;      // Top scroll fade gradient
  };

  // ============================================================================
  // PROJECT ENTRIES
  // ============================================================================

  /** Project entry spacing and layout */
  projectEntry: {
    /** Gap between individual project entries */
    spacing: ExtendedResponsiveValue<string>;

    /** Indentation levels for JSON structure */
    indentation: {
      base: string;        // Base indentation (0 levels)
      level1: string;      // 1 level deep
      level2: string;      // 2 levels deep
      level3: string;      // 3 levels deep
    };

    /** Padding within each project entry */
    padding: ExtendedResponsiveValue<string>;

    /** Border/separator styling */
    border: {
      width: string;       // Border width
      color: string;       // Border color
      style: string;       // Border style (solid, dashed, etc.)
    };
  };

  /** JSON syntax highlighting colors */
  syntaxColors: {
    bracket: string;       // Braces and brackets { } [ ]
    key: string;           // Object keys
    stringValue: string;   // String values
    numberValue: string;   // Number values
    punctuation: string;   // Commas, colons
    comment: string;       // Comments (if any)
  };

  /** Project-specific text colors */
  projectColors: {
    title: string;         // Project title color
    description: string;   // Description text color
    techStack: string;     // Tech stack badge color
    status: {
      live: string;        // "live" status color
      inProgress: string;  // "in-progress" status color
      archived: string;    // "archived" status color
    };
  };

  // ============================================================================
  // TYPOGRAPHY
  // ============================================================================

  /** Code/JSON text sizes - responsive for code readability */
  codeText: ExtendedResponsiveValue<string>;

  /** Project title text sizes - responsive for hierarchy */
  projectTitle: ExtendedResponsiveValue<string>;

  /** Project description text sizes */
  projectDescription: ExtendedResponsiveValue<string>;

  // ============================================================================
  // ACTIONS/BUTTONS
  // ============================================================================

  /** Action button layout */
  actions: {
    /** Layout mode - responsive */
    layout: ExtendedResponsiveValue<string>;

    /** Gap between buttons */
    gap: ExtendedResponsiveValue<string>;

    /** Button group padding */
    padding: ExtendedResponsiveValue<string>;
  };

  /** Button sizing - responsive for different viewport tap targets */
  buttons: {
    height: ExtendedResponsiveValue<string>;   // Button height
    padding: ExtendedResponsiveValue<string>;  // Button padding
    textSize: ExtendedResponsiveValue<string>; // Button text size
  };

  /** Button colors (consistent with hero) */
  buttonColors: {
    primary: {
      background: string;  // Primary button background
      text: string;        // Primary button text color
    };
    secondary: {
      background: string;  // Secondary button background
      text: string;        // Secondary button text color
      hoverBg: string;     // Secondary button hover background
    };
  };

  // ============================================================================
  // CODEBOX HEIGHT
  // ============================================================================

  /** Codebox heights - responsive for optimal content display */
  codeboxHeight: {
    compact: ExtendedResponsiveValue<string>;  // Compact mode heights
    full: ExtendedResponsiveValue<string>;     // Full mode heights
  };
}

export const PROJECTS_TOKENS: ProjectsTokens = {
  // ============================================================================
  // PROJECTS PAGE LAYOUT
  // ============================================================================
  // Controls the vertical spacing and padding for the projects page
  //
  // PAGE SPACING STRATEGY:
  // - Mobile devices: Smaller top padding for content accessibility
  // - Tablet+: Increased padding for better visual balance
  //
  // CONTENT PADDING STRATEGY:
  // - Mobile: Minimal horizontal padding (screen space is limited)
  // - Tablet+: Increased horizontal padding for comfortable reading

  projects: {
    pageSpacing: {
      // BASE (Required)
      mobile: "pt-8 pb-16",                     // 👈 375px - 32px top, 64px bottom (base)

      // GRANULAR BREAKPOINTS (Optional)
      tablet: "pt-20 pb-24",                    // 👈 640px - 80px top, 96px bottom
      largeTablet: "pt-24 pb-28",               // 👈 768px - 96px top, 112px bottom
      desktop: "pt-32 pb-32",                   // 👈 1280px - 128px top/bottom

      // Auto-generated classes
      classes: "pt-8 pb-16 sm:pt-20 sm:pb-24 md:pt-24 md:pb-28 xl:pt-32 xl:pb-32",
    },
    contentPadding: {
      // BASE (Required)
      mobile: "px-4",                           // 👈 375px - 16px horizontal (base)

      // GRANULAR BREAKPOINTS (Optional)
      tablet: "px-6",                           // 👈 640px - 24px horizontal
      largeTablet: "px-8",                      // 👈 768px - 32px horizontal

      // Auto-generated classes
      classes: "px-4 sm:px-6 md:px-8",
    },
  },

  // ============================================================================
  // TERMINAL STRUCTURE
  // ============================================================================
  // Reuses hero terminal pattern for perfect visual consistency

  terminal: {
    header: {
      padding: {
        // BASE (Required)
        mobile: "p-3",                          // 👈 375px - 12px all sides (base)

        // GRANULAR BREAKPOINTS (Optional)
        tablet: "p-4",                          // 👈 640px - 16px all sides

        // Auto-generated classes
        classes: "p-3 sm:p-4",
      },
    },
    content: {
      padding: {
        // BASE (Required)
        mobile: "p-4",                          // 👈 375px - 16px all sides (base)

        // GRANULAR BREAKPOINTS (Optional)
        tablet: "p-4",                          // 👈 640px - maintain 16px

        // Auto-generated classes
        classes: "p-4",
      },
    },
    footer: {
      padding: {
        // BASE (Required)
        mobile: "p-3",                          // 👈 375px - 12px all sides (base)

        // GRANULAR BREAKPOINTS (Optional)
        tablet: "p-4",                          // 👈 640px - 16px all sides

        // Auto-generated classes
        classes: "p-3 sm:p-4",
      },
    },
    borderRadius: "0.5rem",                     // 👈 8px rounded corners (static)
    gradientFadeHeight: {
      // BASE (Required)
      mobile: "h-10",                           // 👈 375px - 40px gradient (base)

      // GRANULAR BREAKPOINTS (Optional)
      tablet: "h-12",                           // 👈 640px - 48px gradient

      // Auto-generated classes
      classes: "h-10 sm:h-12",
    },
  },

  terminalColors: {
    // Reuse hero terminal colors for perfect consistency
    headerBackground: "linear-gradient(to bottom, hsl(220 25% 10%), hsl(220 25% 8%))",
    contentBackground: "bg-card/50",
    footerBackground: "hsl(220 25% 9%)",
    border: "hsl(220 20% 15%)",
    borderBottom: "hsl(220 20% 15%)",
    gradientFade: "linear-gradient(to bottom, hsl(220 25% 8%), transparent)",
  },

  // ============================================================================
  // PROJECT ENTRIES
  // ============================================================================
  // Spacing and layout for individual project entries in JSON format

  projectEntry: {
    spacing: {
      // BASE (Required)
      mobile: "mb-3",                           // 👈 375px - 12px bottom margin (base)

      // GRANULAR BREAKPOINTS (Optional)
      tablet: "mb-4",                           // 👈 640px - 16px bottom margin

      // Auto-generated classes
      classes: "mb-3 sm:mb-4",
    },
    indentation: {
      base: "pl-0",        // No indentation (root level)
      level1: "pl-4",      // 16px indentation (1st level)
      level2: "pl-8",      // 32px indentation (2nd level)
      level3: "pl-12",     // 48px indentation (3rd level)
    },
    padding: {
      // BASE (Required)
      mobile: "py-1",                           // 👈 375px - 4px vertical padding (base)

      // GRANULAR BREAKPOINTS (Optional)
      tablet: "py-1",                           // 👈 640px - maintain 4px

      // Auto-generated classes
      classes: "py-1",
    },
    border: {
      width: "1px",
      color: "hsl(220 20% 15%)",
      style: "solid",
    },
  },

  // ============================================================================
  // SYNTAX HIGHLIGHTING COLORS
  // ============================================================================
  // Reuses hero terminal syntax colors for consistency

  syntaxColors: {
    bracket: "hsl(220 15% 55%)",               // 👈 Gray - braces/brackets
    key: "hsl(180 100% 50%)",                  // 👈 Cyan - object keys (same as hero)
    stringValue: "hsl(43 100% 60%)",           // 👈 Amber - string values (same as hero)
    numberValue: "hsl(142 70% 60%)",           // 👈 Green - number values
    punctuation: "hsl(220 15% 55%)",           // 👈 Gray - commas, colons
    comment: "hsl(220 15% 40%)",               // 👈 Darker gray - comments
  },

  projectColors: {
    title: "hsl(43 100% 60%)",                 // 👈 Amber - project titles (prominent)
    description: "hsl(220 15% 75%)",           // 👈 Light gray - descriptions
    techStack: "hsl(180 100% 50%)",            // 👈 Cyan - tech stack items
    status: {
      live: "hsl(142 70% 60%)",                // 👈 Green - live status
      inProgress: "hsl(43 100% 60%)",          // 👈 Amber - in-progress status
      archived: "hsl(220 15% 55%)",            // 👈 Gray - archived status
    },
  },

  // ============================================================================
  // TYPOGRAPHY
  // ============================================================================
  // Text sizing for projects content

  codeText: {
    // BASE (Required)
    mobile: "text-xs",                          // 👈 375px - 12px (base)

    // GRANULAR BREAKPOINTS (Optional)
    tablet: "text-sm",                          // 👈 640px - 14px
    largeTablet: "text-sm",                     // 👈 768px - maintain 14px
    desktop: "text-base",                       // 👈 1280px - 16px

    // Auto-generated classes
    classes: "text-xs sm:text-sm xl:text-base",
  },

  projectTitle: {
    // BASE (Required)
    mobile: "text-sm",                          // 👈 375px - 14px (base)

    // GRANULAR BREAKPOINTS (Optional)
    tablet: "text-base",                        // 👈 640px - 16px
    desktop: "text-lg",                         // 👈 1280px - 18px

    // Auto-generated classes
    classes: "text-sm sm:text-base xl:text-lg",
  },

  projectDescription: {
    // BASE (Required)
    mobile: "text-xs",                          // 👈 375px - 12px (base)

    // GRANULAR BREAKPOINTS (Optional)
    tablet: "text-sm",                          // 👈 640px - 14px

    // Auto-generated classes
    classes: "text-xs sm:text-sm",
  },

  // ============================================================================
  // ACTIONS/BUTTONS
  // ============================================================================
  // Bottom action bar layout and button styling

  actions: {
    layout: {
      // BASE (Required)
      mobile: "flex-col",                       // 👈 375px - Stack vertically (base)

      // GRANULAR BREAKPOINTS (Optional)
      tablet: "flex-row",                       // 👈 640px - Horizontal layout

      // Auto-generated classes
      classes: "flex-col sm:flex-row",
    },
    gap: {
      // BASE (Required)
      mobile: "gap-2",                          // 👈 375px - 8px gap (base)

      // GRANULAR BREAKPOINTS (Optional)
      tablet: "gap-3",                          // 👈 640px - 12px gap

      // Auto-generated classes
      classes: "gap-2 sm:gap-3",
    },
    padding: {
      // BASE (Required)
      mobile: "p-3",                            // 👈 375px - 12px padding (base)

      // GRANULAR BREAKPOINTS (Optional)
      tablet: "p-4",                            // 👈 640px - 16px padding

      // Auto-generated classes
      classes: "p-3 sm:p-4",
    },
  },

  buttons: {
    height: {
      // BASE (Required)
      mobile: "h-10",                           // 👈 375px - 40px height (base)

      // GRANULAR BREAKPOINTS (Optional)
      tablet: "h-11",                           // 👈 640px - 44px height

      // Auto-generated classes
      classes: "h-10 sm:h-11",
    },
    padding: {
      // BASE (Required)
      mobile: "px-4",                           // 👈 375px - 16px horizontal (base)

      // GRANULAR BREAKPOINTS (Optional)
      tablet: "px-6",                           // 👈 640px - 24px horizontal

      // Auto-generated classes
      classes: "px-4 sm:px-6",
    },
    textSize: {
      // BASE (Required)
      mobile: "text-sm",                        // 👈 375px - 14px (base)

      // GRANULAR BREAKPOINTS (Optional)
      tablet: "text-base",                      // 👈 640px - 16px

      // Auto-generated classes
      classes: "text-sm sm:text-base",
    },
  },

  buttonColors: {
    // Reuse hero button colors for consistency
    primary: {
      background: "hsl(180 100% 50%)",         // 👈 Cyan - primary action
      text: "hsl(220 25% 5%)",                 // 👈 Dark text for contrast
    },
    secondary: {
      background: "transparent",                // 👈 Transparent - secondary action
      text: "hsl(180 100% 50%)",               // 👈 Cyan text
      hoverBg: "hsl(180 100% 50% / 0.1)",      // 👈 Subtle cyan background on hover
    },
  },

  // ============================================================================
  // CODEBOX HEIGHT
  // ============================================================================
  // Controls the max height of the scrollable projects area

  codeboxHeight: {
    compact: {
      // BASE (Required)
      mobile: "max-h-[50vh]",                   // 👈 375px - 50% viewport (base)

      // GRANULAR BREAKPOINTS (Optional)
      tablet: "max-h-[60vh]",                   // 👈 640px - 60% viewport

      // Auto-generated classes
      classes: "max-h-[50vh] sm:max-h-[60vh]",
    },
    full: {
      // BASE (Required)
      mobile: "max-h-[65vh]",                   // 👈 375px - 65% viewport (base)

      // GRANULAR BREAKPOINTS (Optional)
      tablet: "max-h-[70vh]",                   // 👈 640px - 70% viewport
      desktop: "max-h-[75vh]",                  // 👈 1280px - 75% viewport

      // Auto-generated classes
      classes: "max-h-[65vh] sm:max-h-[70vh] xl:max-h-[75vh]",
    },
  },
};
