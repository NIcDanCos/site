/**
 * ScrollableCodeBox Component
 * Reusable scrollable container with gradient fade indicators and custom scrollbar
 *
 * Features:
 * - Dynamic top/bottom gradient fades (only show when needed)
 * - Custom themed scrollbar
 * - Configurable max height
 * - Optional terminal-style header bar
 * - Can wrap any content
 */

import { ReactNode, useRef } from 'react';
import { useScrollIndicators } from '@/hooks/useScrollIndicators';

interface ScrollableCodeBoxProps {
  children: ReactNode;
  header?: ReactNode;
  className?: string;
  maxHeight?: string;
}

export const ScrollableCodeBox = ({
  children,
  header,
  className = '',
  maxHeight = 'max-h-[30vh] sm:max-h-[35vh]'
}: ScrollableCodeBoxProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { showTopGradient, showBottomGradient } = useScrollIndicators(scrollRef);

  return (
    <div className="relative">
      {/* Optional Terminal Header Bar */}
      {header && (
        <div className="bg-card/50 backdrop-blur-sm border border-border border-b-0 rounded-t-lg p-3 sm:p-4 text-left w-full">
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
        className={`scrollable-code bg-card/50 backdrop-blur-sm border border-border ${header ? 'rounded-b-lg border-t-0' : 'rounded-lg'} p-4 sm:p-8 text-left w-full ${maxHeight} overflow-y-auto ${className}`}
      >
        {children}
      </div>

      {/* Bottom gradient fade - appears when more content below */}
      <div
        className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none transition-opacity duration-300 z-10 rounded-b-lg"
        style={{
          background: 'linear-gradient(to top, hsl(220 25% 8%), transparent)',
          opacity: showBottomGradient ? 0.9 : 0
        }}
      />
    </div>
  );
};
