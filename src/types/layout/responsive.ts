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

/**
 * Extended responsive value interface with granular breakpoint control.
 *
 * USAGE PHILOSOPHY:
 * - Use as many or as few breakpoints as needed
 * - `mobile` is required (mobile-first fallback)
 * - All other breakpoints are optional
 * - Values cascade: mobile value applies until overridden at a larger breakpoint
 *
 * @example
 * // Simple: 3 breakpoints
 * const padding: ExtendedResponsiveValue<string> = {
 *   mobile: 'p-4',
 *   tablet: 'sm:p-6',
 *   desktop: 'lg:p-8',
 * };
 *
 * @example
 * // Granular: All 10 breakpoints for surgical control
 * const alignment: ExtendedResponsiveValue<string> = {
 *   mobile: 'items-start',
 *   smallMobile: 'items-start',
 *   largeMobile: 'items-start',
 *   smallTablet: 'items-center',
 *   tablet: 'items-center',
 *   largeTablet: 'items-center',
 *   smallDesktop: 'items-center',
 *   desktop: 'items-center',
 *   largeDesktop: 'items-center',
 *   xlDesktop: 'items-center',
 * };
 */
export interface ExtendedResponsiveValue<T> {
  /** Base mobile value (REQUIRED) - 375px - Mobile-first fallback */
  mobile: T;

  /** Optional breakpoint overrides - use only what you need */
  smallMobile?: T;    // 360px - Extra small phones (iPhone SE)
  largeMobile?: T;    // 414px - Large phones (iPhone Pro Max)
  smallTablet?: T;    // 540px - Large phones landscape, small tablets
  tablet?: T;         // 640px - Tailwind 'sm' - Small tablets portrait
  largeTablet?: T;    // 768px - Tailwind 'md' - Tablets landscape
  smallDesktop?: T;   // 1024px - Tailwind 'lg' - Small laptops
  desktop?: T;        // 1280px - Tailwind 'xl' - Standard desktops
  largeDesktop?: T;   // 1536px - Tailwind '2xl' - Large desktops
  xlDesktop?: T;      // 1920px - Full HD displays

  /** Combined Tailwind classes (auto-generated or manually provided) */
  classes?: string;
}

/**
 * @deprecated Use ExtendedResponsiveValue instead for full breakpoint control.
 * This type is maintained for backward compatibility only.
 */
export interface ResponsiveValue<T> {
  mobile: T;
  tablet?: T;
  desktop?: T;
}

/**
 * Union type for values that can be static or responsive
 */
export type StaticOrResponsive<T> = T | ExtendedResponsiveValue<T>;

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
 * Build responsive classes from a value object (legacy 3-breakpoint version)
 * @deprecated Use buildResponsiveClasses with ExtendedResponsiveValue instead
 * @param values - Object with mobile, tablet, desktop values
 * @returns Combined responsive class string
 *
 * @example
 * const classes = buildResponsiveClassesLegacy({
 *   mobile: 'text-sm',
 *   tablet: 'sm:text-base',
 *   desktop: 'lg:text-lg'
 * });
 * // Returns: 'text-sm sm:text-base lg:text-lg'
 */
export const buildResponsiveClassesLegacy = (values: ResponsiveValue<string>): string => {
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
// EXTENDED RESPONSIVE VALUE BUILDERS
// ============================================================================

/**
 * Create a responsive value with type safety and optional breakpoints.
 * Use this helper to construct ExtendedResponsiveValue objects.
 *
 * @param values - Responsive values with mobile (required) and optional breakpoint overrides
 * @returns ExtendedResponsiveValue with all provided breakpoints
 *
 * @example
 * const padding = responsive({
 *   mobile: 'p-4',
 *   tablet: 'sm:p-6',
 *   desktop: 'lg:p-8',
 * });
 */
export const responsive = <T>(
  values: ExtendedResponsiveValue<T>
): ExtendedResponsiveValue<T> => {
  return { ...values };
};

/**
 * Create a static value (no responsive behavior).
 * Use for values that don't need breakpoint variations.
 *
 * @param value - Static value
 * @returns The value as-is
 *
 * @example
 * const borderRadius = staticValue('rounded-lg');
 */
export const staticValue = <T>(value: T): T => value;

/**
 * Build Tailwind classes from ExtendedResponsiveValue.
 * Automatically generates responsive classes for all defined breakpoints.
 *
 * @param values - ExtendedResponsiveValue object
 * @param prefix - Optional prefix for each class (e.g., 'text' for font sizes)
 * @param formatter - Optional function to format values before generating classes
 * @returns Combined Tailwind class string
 *
 * @example
 * const classes = buildResponsiveClasses(
 *   { mobile: '16px', tablet: '18px', desktop: '20px' },
 *   'text',
 *   (val) => `[${val}]`
 * );
 * // Returns: 'text-[16px] sm:text-[18px] lg:text-[20px]'
 */
export const buildResponsiveClasses = <T>(
  values: ExtendedResponsiveValue<T>,
  prefix?: string,
  formatter?: (val: T) => string
): string => {
  const classes: string[] = [];

  // Helper to format a value
  const format = (val: T): string => {
    const formatted = formatter ? formatter(val) : String(val);
    return prefix ? `${prefix}-${formatted}` : formatted;
  };

  // Base mobile class (always present)
  classes.push(format(values.mobile));

  // Add optional breakpoint classes only if defined
  if (values.smallMobile !== undefined) {
    classes.push(`min-[360px]:${format(values.smallMobile)}`);
  }
  if (values.largeMobile !== undefined) {
    classes.push(`min-[414px]:${format(values.largeMobile)}`);
  }
  if (values.smallTablet !== undefined) {
    classes.push(`min-[540px]:${format(values.smallTablet)}`);
  }
  if (values.tablet !== undefined) {
    classes.push(`sm:${format(values.tablet)}`);
  }
  if (values.largeTablet !== undefined) {
    classes.push(`md:${format(values.largeTablet)}`);
  }
  if (values.smallDesktop !== undefined) {
    classes.push(`lg:${format(values.smallDesktop)}`);
  }
  if (values.desktop !== undefined) {
    classes.push(`xl:${format(values.desktop)}`);
  }
  if (values.largeDesktop !== undefined) {
    classes.push(`2xl:${format(values.largeDesktop)}`);
  }
  if (values.xlDesktop !== undefined) {
    classes.push(`min-[1920px]:${format(values.xlDesktop)}`);
  }

  return classes.join(' ');
};

/**
 * Combine multiple ExtendedResponsiveValue objects into one.
 * Useful for merging spacing, sizing, and other responsive properties.
 *
 * @param responsiveValues - Array of ExtendedResponsiveValue objects to combine
 * @param separator - Optional separator between values (default: ' ')
 * @returns Combined ExtendedResponsiveValue
 *
 * @example
 * const padding = { mobile: 'p-4', tablet: 'sm:p-6' };
 * const margin = { mobile: 'm-2', tablet: 'sm:m-4' };
 * const combined = combineResponsiveValues([padding, margin]);
 * // mobile: 'p-4 m-2', tablet: 'sm:p-6 sm:m-4'
 */
export const combineResponsiveValues = <T extends string>(
  responsiveValues: ExtendedResponsiveValue<T>[],
  separator: string = ' '
): ExtendedResponsiveValue<T> => {
  const combined: ExtendedResponsiveValue<T> = {
    mobile: responsiveValues.map(v => v.mobile).join(separator) as T,
  };

  // Combine each optional breakpoint if any value defines it
  const breakpoints: (keyof ExtendedResponsiveValue<T>)[] = [
    'smallMobile',
    'largeMobile',
    'smallTablet',
    'tablet',
    'largeTablet',
    'smallDesktop',
    'desktop',
    'largeDesktop',
    'xlDesktop',
  ];

  breakpoints.forEach((bp) => {
    const values = responsiveValues
      .map(v => v[bp])
      .filter((v): v is T => v !== undefined);

    if (values.length > 0) {
      combined[bp] = values.join(separator) as T;
    }
  });

  // Generate combined classes
  combined.classes = buildResponsiveClasses(combined);

  return combined;
};

/**
 * Map a function over all breakpoint values in an ExtendedResponsiveValue.
 *
 * @param values - ExtendedResponsiveValue to transform
 * @param fn - Function to apply to each value
 * @returns New ExtendedResponsiveValue with transformed values
 *
 * @example
 * const sizes = { mobile: 4, tablet: 6, desktop: 8 };
 * const paddings = mapResponsiveValue(sizes, (n) => `p-${n}`);
 * // { mobile: 'p-4', tablet: 'p-6', desktop: 'p-8' }
 */
export const mapResponsiveValue = <T, U>(
  values: ExtendedResponsiveValue<T>,
  fn: (value: T) => U
): ExtendedResponsiveValue<U> => {
  const mapped: ExtendedResponsiveValue<U> = {
    mobile: fn(values.mobile),
  };

  if (values.smallMobile !== undefined) mapped.smallMobile = fn(values.smallMobile);
  if (values.largeMobile !== undefined) mapped.largeMobile = fn(values.largeMobile);
  if (values.smallTablet !== undefined) mapped.smallTablet = fn(values.smallTablet);
  if (values.tablet !== undefined) mapped.tablet = fn(values.tablet);
  if (values.largeTablet !== undefined) mapped.largeTablet = fn(values.largeTablet);
  if (values.smallDesktop !== undefined) mapped.smallDesktop = fn(values.smallDesktop);
  if (values.desktop !== undefined) mapped.desktop = fn(values.desktop);
  if (values.largeDesktop !== undefined) mapped.largeDesktop = fn(values.largeDesktop);
  if (values.xlDesktop !== undefined) mapped.xlDesktop = fn(values.xlDesktop);

  return mapped;
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
