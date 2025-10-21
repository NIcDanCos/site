/**
 * HOMEPAGE DESIGN TOKEN SYSTEM - MAIN EXPORT
 *
 * This file combines all design tokens from modular files into a single
 * LAYOUT_CONSTANTS export for easy access throughout the application.
 *
 * ORGANIZATION:
 * - layout/general.ts  - Breakpoints, max-widths, component heights
 * - layout/navbar.ts   - All navbar tokens (spacing, icons, colors)
 * - layout/hero.ts     - Hero + terminal tokens (buttons, codebox, effects)
 * - layout/footer.ts   - All footer tokens (spacing, icons, text)
 *
 * HOW TO USE:
 *
 * Option 1 - Import everything (current pattern):
 * import { LAYOUT_CONSTANTS } from '@/types/layout';
 * className={LAYOUT_CONSTANTS.navbar.padding.horizontal}
 *
 * Option 2 - Import specific modules (cleaner for large components):
 * import { NAVBAR_TOKENS } from '@/types/layout/navbar';
 * className={NAVBAR_TOKENS.padding.horizontal}
 *
 * Option 3 - Import just what you need:
 * import { LAYOUT_CONSTANTS } from '@/types/layout';
 * const { navbar, hero } = LAYOUT_CONSTANTS;
 *
 * HOW TO MODIFY:
 * - To change navbar: Edit src/types/layout/navbar.ts
 * - To change hero/terminal: Edit src/types/layout/hero.ts
 * - To change footer: Edit src/types/layout/footer.ts
 * - To change breakpoints: Edit src/types/layout/general.ts
 */

import { GENERAL_TOKENS, type GeneralTokens } from './layout/general';
import { NAVBAR_TOKENS, type NavbarTokens } from './layout/navbar';
import { HERO_TOKENS, type HeroTokens } from './layout/hero';
import { FOOTER_TOKENS, type FooterTokens } from './layout/footer';

// Re-export ViewportLayout type for convenience
export type { ViewportLayout } from './layout/hero';

// Re-export individual token modules for granular imports
export { GENERAL_TOKENS } from './layout/general';
export { NAVBAR_TOKENS } from './layout/navbar';
export { HERO_TOKENS } from './layout/hero';
export { FOOTER_TOKENS } from './layout/footer';

/**
 * Combined interface for all design tokens
 * This maintains backward compatibility with existing component imports
 */
export interface LayoutConfig extends GeneralTokens {
  // ============================================================================
  // NAVBAR
  // ============================================================================
  navbar: {
    padding: NavbarTokens['padding'];
    rowGap: NavbarTokens['rowGap'];
    socialIconGap: NavbarTokens['socialIconGap'];
    border: NavbarTokens['border'];
  };

  navbarColors: NavbarTokens['colors'];
  logoText: NavbarTokens['logoText'];

  // ============================================================================
  // HERO + TERMINAL
  // ============================================================================
  hero: HeroTokens['hero'];
  buttons: HeroTokens['buttons'];
  buttonColors: HeroTokens['buttonColors'];
  terminal: HeroTokens['terminal'];
  terminalColors: HeroTokens['terminalColors'];
  separator: HeroTokens['separator'];
  codeboxHeight: HeroTokens['codeboxHeight'];
  terminalText: HeroTokens['terminalText'];
  codeText: HeroTokens['codeText'];
  effects: HeroTokens['effects'];

  // ============================================================================
  // FOOTER
  // ============================================================================
  footer: {
    padding: FooterTokens['padding'];
    copyrightMargin: FooterTokens['copyrightMargin'];
    socialIconGap: FooterTokens['socialIconGap'];
  };

  footerText: FooterTokens['footerText'];

  // ============================================================================
  // ICON SIZES (combined from navbar and footer)
  // ============================================================================
  iconSizes: NavbarTokens['iconSizes'] & FooterTokens['iconSizes'];
}

/**
 * LAYOUT_CONSTANTS - Combined design token system
 *
 * All design tokens in one place for backward compatibility.
 * Components can import this object to access any design token.
 */
export const LAYOUT_CONSTANTS: LayoutConfig = {
  // ============================================================================
  // GENERAL (from layout/general.ts)
  // ============================================================================
  breakpoint: GENERAL_TOKENS.breakpoint,
  componentHeights: GENERAL_TOKENS.componentHeights,
  maxWidths: GENERAL_TOKENS.maxWidths,

  // ============================================================================
  // NAVBAR (from layout/navbar.ts)
  // ============================================================================
  navbar: {
    padding: NAVBAR_TOKENS.padding,
    rowGap: NAVBAR_TOKENS.rowGap,
    socialIconGap: NAVBAR_TOKENS.socialIconGap,
    border: NAVBAR_TOKENS.border,
  },

  navbarColors: NAVBAR_TOKENS.colors,

  logoText: NAVBAR_TOKENS.logoText,

  // ============================================================================
  // HERO + TERMINAL (from layout/hero.ts)
  // ============================================================================
  hero: HERO_TOKENS.hero,

  buttons: HERO_TOKENS.buttons,
  buttonColors: HERO_TOKENS.buttonColors,

  terminal: HERO_TOKENS.terminal,
  terminalColors: HERO_TOKENS.terminalColors,

  separator: HERO_TOKENS.separator,
  codeboxHeight: HERO_TOKENS.codeboxHeight,

  terminalText: HERO_TOKENS.terminalText,
  codeText: HERO_TOKENS.codeText,

  effects: HERO_TOKENS.effects,

  // ============================================================================
  // FOOTER (from layout/footer.ts)
  // ============================================================================
  footer: {
    padding: FOOTER_TOKENS.padding,
    copyrightMargin: FOOTER_TOKENS.copyrightMargin,
    socialIconGap: FOOTER_TOKENS.socialIconGap,
  },

  footerText: FOOTER_TOKENS.footerText,

  // ============================================================================
  // ICON SIZES (combined from navbar and footer)
  // ============================================================================
  iconSizes: {
    ...NAVBAR_TOKENS.iconSizes,
    ...FOOTER_TOKENS.iconSizes,
  },
};
