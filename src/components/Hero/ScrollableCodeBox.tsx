/**
 * ScrollableCodeBox Component
 * Reusable scrollable container with gradient fade indicators and custom scrollbar
 *
 * Features:
 * - Dynamic top/bottom gradient fades (only show when needed)
 * - Custom themed scrollbar
 * - Configurable max height
 * - Optional terminal-style header bar
 * - Optional footer section for actions/buttons
 * - 3D depth effects with shadows and lighting (≥640px only, flat on mobile)
 * - Can wrap any content
 */

import { ReactNode, useRef } from 'react';
import { useScrollIndicators } from '@/hooks/useScrollIndicators';
import type { ViewportLayout } from '@/hooks/use-viewport-layout';
import { LAYOUT_CONSTANTS } from '@/types/layout';

interface ScrollableCodeBoxProps {
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  className?: string;
  maxHeight?: string;
  layoutMode?: ViewportLayout;
}

export const ScrollableCodeBox = ({
  children,
  header,
  footer,
  className = '',
  maxHeight,
  layoutMode = "compact"
}: ScrollableCodeBoxProps) => {
  // Determine max height based on layout mode
  const computedMaxHeight = maxHeight || (
    layoutMode === "full"
      ? LAYOUT_CONSTANTS.codeboxHeight.full
      : `${LAYOUT_CONSTANTS.codeboxHeight.compact.mobile} ${LAYOUT_CONSTANTS.codeboxHeight.compact.tablet}`
  );
  const scrollRef = useRef<HTMLDivElement>(null);
  const { showTopGradient } = useScrollIndicators(scrollRef);

  // Determine border radius for content section based on header/footer presence
  const getContentBorderRadius = () => {
    if (header && footer) return ''; // No rounding, sandwiched between header and footer
    if (header) return 'rounded-b-lg'; // Only round bottom
    if (footer) return 'rounded-t-lg'; // Only round top
    return 'rounded-lg'; // Round all corners
  };

  // Determine border classes for content section
  const getContentBorderClasses = () => {
    if (header && footer) return 'border-t-0 border-b-0';
    if (header) return 'border-t-0';
    if (footer) return 'border-b-0';
    return '';
  };

  return (
    <div
      className="relative terminal-box-3d"
      style={{
        // Rounded corners to match internal elements
        borderRadius: '0.5rem'
      }}
    >
      {/* Optional Terminal Header Bar */}
      {header && (
        <div
          className="backdrop-blur-sm border border-border border-b rounded-t-lg p-3 sm:p-4 text-left w-full"
          style={{
            // Darker background for header bar to create visual hierarchy
            background: 'linear-gradient(to bottom, hsl(220 25% 10%), hsl(220 25% 8%))',
            borderBottomColor: 'hsl(220 20% 15%)'
          }}
        >
          {header}
        </div>
      )}

      {/* Top gradient fade - appears when scrolled down */}
      <div
        className={`absolute left-0 right-0 h-10 pointer-events-none transition-opacity duration-300 z-10 ${header ? 'top-[46px] min-[480px]:top-[52px] sm:top-[60px]' : 'top-0 rounded-t-lg'}`}
        style={{
          background: 'linear-gradient(to bottom, hsl(220 25% 8%), transparent)',
          opacity: showTopGradient ? 0.9 : 0
        }}
      />

      {/* Scrollable content with custom scrollbar */}
      <div
        ref={scrollRef}
        className={`scrollable-code terminal-content-inset bg-card/50 backdrop-blur-sm border border-border ${getContentBorderRadius()} ${getContentBorderClasses()} p-4 sm:p-8 text-left w-full ${computedMaxHeight} overflow-y-auto ${className}`}
      >
        {children}
      </div>

      {/* Optional Footer Section */}
      {footer && (
        <div
          className="backdrop-blur-sm border border-border border-t rounded-b-lg p-3 sm:p-4 text-left w-full"
          style={{
            // Solid background for footer bar - no gradients
            background: 'hsl(220 25% 9%)',
            borderTopColor: 'hsl(220 20% 15%)'
          }}
        >
          {footer}
        </div>
      )}
    </div>
  );
};
