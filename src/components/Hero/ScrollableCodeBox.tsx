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
 * - 3D depth effects with shadows and lighting
 * - Can wrap any content
 */

import { ReactNode, useRef } from 'react';
import { useScrollIndicators } from '@/hooks/useScrollIndicators';

interface ScrollableCodeBoxProps {
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  className?: string;
  maxHeight?: string;
}

export const ScrollableCodeBox = ({
  children,
  header,
  footer,
  className = '',
  maxHeight = 'max-h-[30vh] sm:max-h-[35vh]'
}: ScrollableCodeBoxProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { showTopGradient, showBottomGradient } = useScrollIndicators(scrollRef);

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
      className="relative"
      style={{
        // 3D depth effect: Multi-layer shadows for depth
        boxShadow: `
          0 4px 6px -1px rgba(0, 0, 0, 0.3),
          0 10px 15px -3px rgba(0, 0, 0, 0.4),
          0 20px 25px -5px rgba(0, 0, 0, 0.3),
          0 1px 0 0 rgba(190, 255, 255, 0.1) inset,
          1px 0 0 0 rgba(190, 255, 255, 0.05) inset
        `,
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
        className={`scrollable-code bg-card/50 backdrop-blur-sm border border-border ${getContentBorderRadius()} ${getContentBorderClasses()} p-4 sm:p-8 text-left w-full ${maxHeight} overflow-y-auto ${className}`}
        style={{
          // Inset shadow for recessed/sunken appearance
          boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.3), inset 0 -1px 2px rgba(0, 0, 0, 0.2)'
        }}
      >
        {children}
      </div>

      {/* Bottom gradient fade - appears when more content below */}
      <div
        className={`absolute left-0 right-0 h-10 pointer-events-none transition-opacity duration-300 z-10 ${footer ? 'bottom-[60px] min-[640px]:bottom-[68px]' : 'bottom-0 rounded-b-lg'}`}
        style={{
          background: 'linear-gradient(to top, hsl(220 25% 8%), transparent)',
          opacity: showBottomGradient ? 0.9 : 0
        }}
      />

      {/* Optional Footer Section */}
      {footer && (
        <div className="bg-card/30 backdrop-blur-sm border border-border border-t-0 rounded-b-lg p-3 sm:p-4 text-left w-full">
          {footer}
        </div>
      )}
    </div>
  );
};
