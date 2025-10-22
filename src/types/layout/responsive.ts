/**
 * RESPONSIVE DESIGN UTILITIES
 *
 * Helper functions and utilities for working with responsive design tokens,
 * breakpoints, and media queries. Provides a consistent API for responsive
 * design patterns across the application.
 *
 * FEATURES:
 * - Media query generation
 * - Breakpoint detection hooks
 * - Responsive class builders
 * - Viewport utilities
 *
 * HOW TO USE:
 * Import utilities as needed for responsive logic in components:
 *
 * import { useBreakpoint, combineResponsive } from '@/types/layout/responsive';
 *
 * USAGE EXAMPLES:
 * // Detect current breakpoint:
 * const isMobile = useBreakpoint('mobile');
 *
 * // Combine responsive classes:
 * const classes = combineResponsive(
 *   'text-sm',
 *   'sm:text-base',
 *   'lg:text-lg'
 * );
 */

import { BREAKPOINTS } from './breakpoints';

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export type BreakpointKey = 'mobile' | 'tablet' | 'desktop';
export type DeviceType = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';

export interface ResponsiveValue<T> {
  mobile: T;
  tablet?: T;
  desktop?: T;
}

export interface ViewportInfo {
  width: number;
  height: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  deviceType: DeviceType;
}

// ============================================================================
// BREAKPOINT DETECTION
// ============================================================================

/**
 * Check if current viewport matches a breakpoint
 * @param breakpoint - The breakpoint to check against
 * @returns true if viewport matches or exceeds the breakpoint
 *
 * @example
 * if (matchesBreakpoint('tablet')) {
 *   // Tablet or larger
 * }
 */
export const matchesBreakpoint = (breakpoint: BreakpointKey): boolean => {
  if (typeof window === 'undefined') return false;

  const breakpointValues = {
    mobile: 0,
    tablet: BREAKPOINTS.tablet.small,
    desktop: BREAKPOINTS.desktop.small,
  };

  return window.innerWidth >= breakpointValues[breakpoint];
};

/**
 * Get current device type based on viewport width
 * @returns Device type classification
 *
 * @example
 * const device = getCurrentDeviceType();
 * if (device === 'mobile') { ... }
 */
export const getCurrentDeviceType = (): DeviceType => {
  if (typeof window === 'undefined') return 'medium';

  const width = window.innerWidth;

  if (width < BREAKPOINTS.mobile.medium) return 'xsmall';
  if (width < BREAKPOINTS.mobile.large) return 'small';
  if (width < BREAKPOINTS.tablet.small) return 'medium';
  if (width < BREAKPOINTS.desktop.small) return 'large';
  return 'xlarge';
};

/**
 * Get detailed viewport information
 * @returns Object with viewport dimensions and device classification
 *
 * @example
 * const viewport = getViewportInfo();
 * console.log(`Width: ${viewport.width}px, Device: ${viewport.deviceType}`);
 */
export const getViewportInfo = (): ViewportInfo => {
  if (typeof window === 'undefined') {
    return {
      width: 0,
      height: 0,
      isMobile: false,
      isTablet: false,
      isDesktop: false,
      deviceType: 'medium',
    };
  }

  const width = window.innerWidth;
  const height = window.innerHeight;

  return {
    width,
    height,
    isMobile: width < BREAKPOINTS.tablet.small,
    isTablet: width >= BREAKPOINTS.tablet.small && width < BREAKPOINTS.desktop.small,
    isDesktop: width >= BREAKPOINTS.desktop.small,
    deviceType: getCurrentDeviceType(),
  };
};

// ============================================================================
// MEDIA QUERY BUILDERS
// ============================================================================

/**
 * Generate CSS media query string for min-width
 * @param px - Breakpoint in pixels
 * @returns Media query string
 *
 * @example
 * const query = minWidth(768);
 * // Returns: '@media (min-width: 768px)'
 */
export const minWidth = (px: number): string => `@media (min-width: ${px}px)`;

/**
 * Generate CSS media query string for max-width
 * @param px - Breakpoint in pixels
 * @returns Media query string
 *
 * @example
 * const query = maxWidth(639);
 * // Returns: '@media (max-width: 639px)'
 */
export const maxWidth = (px: number): string => `@media (max-width: ${px}px)`;

/**
 * Generate CSS media query string for width range
 * @param min - Minimum width in pixels
 * @param max - Maximum width in pixels
 * @returns Media query string
 *
 * @example
 * const query = widthRange(640, 1023);
 * // Returns: '@media (min-width: 640px) and (max-width: 1023px)'
 */
export const widthRange = (min: number, max: number): string =>
  `@media (min-width: ${min}px) and (max-width: ${max}px)`;

/**
 * Generate CSS media query string for min-height
 * @param px - Breakpoint in pixels
 * @returns Media query string
 *
 * @example
 * const query = minHeight(600);
 * // Returns: '@media (min-height: 600px)'
 */
export const minHeight = (px: number): string => `@media (min-height: ${px}px)`;

/**
 * Generate CSS media query string for max-height
 * @param px - Breakpoint in pixels
 * @returns Media query string
 *
 * @example
 * const query = maxHeight(800);
 * // Returns: '@media (max-height: 800px)'
 */
export const maxHeight = (px: number): string => `@media (max-height: ${px}px)`;

// ============================================================================
// CLASS UTILITIES
// ============================================================================

/**
 * Combine responsive classes into a single string
 * @param classes - Responsive class strings
 * @returns Combined class string
 *
 * @example
 * const classes = combineResponsive(
 *   'text-sm',
 *   'sm:text-base',
 *   'lg:text-lg'
 * );
 * // Returns: 'text-sm sm:text-base lg:text-lg'
 */
export const combineResponsive = (...classes: (string | undefined | false)[]): string =>
  classes.filter(Boolean).join(' ');

/**
 * Build responsive classes from a value object
 * @param values - Object with mobile, tablet, desktop values
 * @returns Combined responsive class string
 *
 * @example
 * const classes = buildResponsiveClasses({
 *   mobile: 'text-sm',
 *   tablet: 'sm:text-base',
 *   desktop: 'lg:text-lg'
 * });
 * // Returns: 'text-sm sm:text-base lg:text-lg'
 */
export const buildResponsiveClasses = (values: ResponsiveValue<string>): string => {
  const { mobile, tablet, desktop } = values;
  return combineResponsive(mobile, tablet, desktop);
};

/**
 * Apply responsive value based on current viewport
 * @param values - Responsive values for different breakpoints
 * @returns Value matching current viewport
 *
 * @example
 * const fontSize = applyResponsiveValue({
 *   mobile: '14px',
 *   tablet: '16px',
 *   desktop: '18px'
 * });
 */
export const applyResponsiveValue = <T>(values: ResponsiveValue<T>): T => {
  const viewport = getViewportInfo();

  if (viewport.isDesktop && values.desktop) {
    return values.desktop;
  }
  if (viewport.isTablet && values.tablet) {
    return values.tablet;
  }
  return values.mobile;
};

// ============================================================================
// TAILWIND HELPERS
// ============================================================================

/**
 * Generate Tailwind arbitrary value class
 * @param property - CSS property (e.g., 'w', 'h', 'text')
 * @param value - CSS value (e.g., '480px', '1.5rem')
 * @returns Tailwind arbitrary value class
 *
 * @example
 * const className = arbitraryValue('w', '480px');
 * // Returns: 'w-[480px]'
 */
export const arbitraryValue = (property: string, value: string): string =>
  `${property}-[${value}]`;

/**
 * Generate responsive arbitrary value classes
 * @param property - CSS property
 * @param values - Responsive values
 * @returns Combined responsive arbitrary value classes
 *
 * @example
 * const classes = responsiveArbitrary('text', {
 *   mobile: '14px',
 *   tablet: '16px',
 *   desktop: '18px'
 * });
 * // Returns: 'text-[14px] sm:text-[16px] lg:text-[18px]'
 */
export const responsiveArbitrary = (
  property: string,
  values: ResponsiveValue<string>
): string => {
  const classes: string[] = [];

  classes.push(arbitraryValue(property, values.mobile));

  if (values.tablet) {
    classes.push(`sm:${arbitraryValue(property, values.tablet)}`);
  }

  if (values.desktop) {
    classes.push(`lg:${arbitraryValue(property, values.desktop)}`);
  }

  return classes.join(' ');
};

// ============================================================================
// VIEWPORT HOOKS (for React components)
// ============================================================================

/**
 * React hook to track viewport breakpoint
 * Usage: const isMobile = useBreakpoint('mobile');
 *
 * NOTE: This is a utility template. Actual implementation requires
 * React hooks (useState, useEffect). Import from a hooks file instead.
 */
export const useBreakpointTemplate = `
import { useState, useEffect } from 'react';
import { matchesBreakpoint } from '@/types/layout/responsive';

export const useBreakpoint = (breakpoint: 'mobile' | 'tablet' | 'desktop') => {
  const [matches, setMatches] = useState(matchesBreakpoint(breakpoint));

  useEffect(() => {
    const handleResize = () => setMatches(matchesBreakpoint(breakpoint));

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return matches;
};
`;

// ============================================================================
// ORIENTATION DETECTION
// ============================================================================

/**
 * Check if device is in portrait orientation
 * @returns true if portrait, false if landscape
 */
export const isPortrait = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerHeight > window.innerWidth;
};

/**
 * Check if device is in landscape orientation
 * @returns true if landscape, false if portrait
 */
export const isLandscape = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth > window.innerHeight;
};

/**
 * Get orientation as string
 * @returns 'portrait' or 'landscape'
 */
export const getOrientation = (): 'portrait' | 'landscape' => {
  return isPortrait() ? 'portrait' : 'landscape';
};

// ============================================================================
// CONTAINER QUERIES (CSS Container Query Support)
// ============================================================================

/**
 * Generate container query class
 * @param size - Container size (e.g., 'sm', 'md', 'lg')
 * @returns Container query class
 *
 * @example
 * const className = containerQuery('md');
 * // Returns: '@container:md'
 */
export const containerQuery = (size: string): string => `@container:${size}`;

// ============================================================================
// TOUCH DEVICE DETECTION
// ============================================================================

/**
 * Check if device supports touch
 * @returns true if touch is supported
 */
export const isTouchDevice = (): boolean => {
  if (typeof window === 'undefined') return false;

  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    // @ts-expect-error - Legacy property
    navigator.msMaxTouchPoints > 0
  );
};

/**
 * Check if device is likely mobile based on touch + viewport
 * @returns true if mobile characteristics detected
 */
export const isMobileDevice = (): boolean => {
  return isTouchDevice() && window.innerWidth < BREAKPOINTS.tablet.small;
};

// ============================================================================
// SAFE AREA (for notched devices like iPhone X+)
// ============================================================================

/**
 * CSS variables for safe area insets
 * Use these in inline styles to respect device notches and rounded corners
 */
export const SAFE_AREA = {
  top: 'env(safe-area-inset-top)',
  right: 'env(safe-area-inset-right)',
  bottom: 'env(safe-area-inset-bottom)',
  left: 'env(safe-area-inset-left)',
} as const;

/**
 * Generate padding classes with safe area insets
 * @param base - Base padding value
 * @returns CSS calc with safe area
 *
 * @example
 * style={{ paddingTop: safeAreaPadding('1rem', 'top') }}
 */
export const safeAreaPadding = (base: string, side: keyof typeof SAFE_AREA): string => {
  return `calc(${base} + ${SAFE_AREA[side]})`;
};
