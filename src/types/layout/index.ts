/**
 * DESIGN TOKEN SYSTEM - MAIN EXPORT INDEX
 *
 * Central export point for all design tokens. Import from this file to access
 * any design token in the system.
 *
 * AVAILABLE TOKEN MODULES:
 * - BREAKPOINTS     - Responsive breakpoint definitions
 * - TYPOGRAPHY      - Font sizes, weights, line heights
 * - SPACING         - Margins, padding, gaps
 * - LAYOUT_SYSTEM   - Containers, z-index, grid
 * - GENERAL_TOKENS  - Legacy general tokens
 * - NAVBAR_TOKENS   - Navbar-specific tokens
 * - HERO_TOKENS     - Hero section tokens
 * - FOOTER_TOKENS   - Footer tokens
 * - Responsive      - Responsive utilities and helpers
 *
 * IMPORT PATTERNS:
 *
 * 1. Import everything:
 * import * as Tokens from '@/types/layout';
 *
 * 2. Import specific modules:
 * import { TYPOGRAPHY, SPACING, BREAKPOINTS } from '@/types/layout';
 *
 * 3. Import from specific files (tree-shaking friendly):
 * import { TYPOGRAPHY } from '@/types/layout/typography';
 * import { SPACING } from '@/types/layout/spacing';
 *
 * 4. Import utilities:
 * import { combineResponsive, matchesBreakpoint } from '@/types/layout/responsive';
 *
 * BACKWARD COMPATIBILITY:
 * The legacy LAYOUT_CONSTANTS export is still available from '@/types/layout'
 * for existing components. New code should use the specific token modules.
 */

// ============================================================================
// IMPORTS (for re-export and convenience objects)
// ============================================================================

import { BREAKPOINTS, getMinClass, getMaxClass } from './breakpoints';
import { TYPOGRAPHY } from './typography';
import { SPACING, createResponsiveSpacing } from './spacing';
import { LAYOUT_SYSTEM, flexCenter, flexColumnCenter, absoluteCenter, responsiveGrid } from './layout-system';
import {
  matchesBreakpoint,
  combineResponsive,
  buildResponsiveClasses,
  isTouchDevice,
  isMobileDevice,
  isPortrait,
  isLandscape,
} from './responsive';
import { GENERAL_TOKENS } from './general';
import { NAVBAR_TOKENS } from './navbar';
import { HERO_TOKENS } from './hero';
import { FOOTER_TOKENS } from './footer';
import { PROJECTS_TOKENS } from './projects';

// ============================================================================
// CORE TOKEN EXPORTS
// ============================================================================

// Breakpoints
export {
  BREAKPOINTS,
  BREAKPOINT_RANGES,
  getMinClass,
  getMaxClass,
  getMediaQuery,
  getHeightQuery,
  type BreakpointTokens,
} from './breakpoints';

// Typography
export {
  TYPOGRAPHY,
  LINE_HEIGHTS,
  FONT_WEIGHTS,
  LETTER_SPACING,
  type TypographyTokens,
  type ResponsiveTextSize,
} from './typography';

// Spacing
export {
  SPACING,
  createResponsiveSpacing,
  NEGATIVE_MARGINS,
  type SpacingTokens,
  type ResponsiveSpacing,
} from './spacing';

// Layout System
export {
  LAYOUT_SYSTEM,
  centerContainer,
  flexCenter,
  flexColumnCenter,
  absoluteCenter,
  fullScreenOverlay,
  responsiveGrid,
  type LayoutSystemTokens,
} from './layout-system';

// Responsive Utilities
export {
  matchesBreakpoint,
  getCurrentDeviceType,
  getViewportInfo,
  minWidth,
  maxWidth,
  widthRange,
  minHeight,
  maxHeight,
  combineResponsive,
  buildResponsiveClasses,
  applyResponsiveValue,
  arbitraryValue,
  responsiveArbitrary,
  isPortrait,
  isLandscape,
  getOrientation,
  containerQuery,
  isTouchDevice,
  isMobileDevice,
  SAFE_AREA,
  safeAreaPadding,
  type BreakpointKey,
  type DeviceType,
  type ResponsiveValue,
  type ViewportInfo,
} from './responsive';

// ============================================================================
// COMPONENT-SPECIFIC TOKEN EXPORTS
// ============================================================================

// General tokens (backward compatibility)
export {
  GENERAL_TOKENS,
  type GeneralTokens,
} from './general';

// Navbar tokens
export {
  NAVBAR_TOKENS,
  type NavbarTokens,
} from './navbar';

// Hero tokens
export {
  HERO_TOKENS,
  type HeroTokens,
  type ViewportLayout,
} from './hero';

// Footer tokens
export {
  FOOTER_TOKENS,
  type FooterTokens,
} from './footer';

// Projects tokens
export {
  PROJECTS_TOKENS,
  type ProjectsTokens,
} from './projects';

// ============================================================================
// LEGACY EXPORTS (Backward Compatibility)
// ============================================================================

/**
 * LAYOUT_CONSTANTS - Legacy combined token system
 *
 * This export maintains backward compatibility with existing components.
 * For new code, prefer importing specific token modules (TYPOGRAPHY, SPACING, etc.)
 * for better tree-shaking and clearer dependencies.
 *
 * @deprecated Use specific token modules instead
 */
export { LAYOUT_CONSTANTS, type LayoutConfig } from '../layout';

// ============================================================================
// TYPE-ONLY EXPORTS
// ============================================================================

/**
 * Convenience type for components that need responsive props
 */
export type ResponsiveSize = 'mobile' | 'tablet' | 'desktop';

/**
 * Union type for all available spacing scale values
 */
export type SpacingScale = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '8' | '10' | '12' | '16' | '20' | '24' | '32' | '40' | '48' | '64';

/**
 * Union type for all typography scale values
 */
export type TypographyScale = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';

// ============================================================================
// CONVENIENCE EXPORTS
// ============================================================================

/**
 * Quick access object for most commonly used tokens
 * Use this for simpler imports in frequently-used components
 */
export const TOKENS = {
  breakpoints: BREAKPOINTS,
  typography: TYPOGRAPHY,
  spacing: SPACING,
  layout: LAYOUT_SYSTEM,
  // Component-specific
  navbar: NAVBAR_TOKENS,
  hero: HERO_TOKENS,
  footer: FOOTER_TOKENS,
  projects: PROJECTS_TOKENS,
  general: GENERAL_TOKENS,
} as const;

/**
 * Quick access to utility functions
 */
export const UTILS = {
  // Breakpoint utilities
  matchesBreakpoint,
  getMinClass,
  getMaxClass,

  // Responsive utilities
  combineResponsive,
  buildResponsiveClasses,

  // Layout utilities
  flexCenter,
  flexColumnCenter,
  absoluteCenter,
  responsiveGrid,

  // Spacing utilities
  createResponsiveSpacing,

  // Device detection
  isTouchDevice,
  isMobileDevice,
  isPortrait,
  isLandscape,
} as const;
