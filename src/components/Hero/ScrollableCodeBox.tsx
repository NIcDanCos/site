/**
 * ScrollableCodeBox Component
 * Reusable scrollable container with gradient fade indicators and custom scrollbar
 *
 * Features:
 * - Dynamic top/bottom gradient fades (only show when needed)
 * - Custom themed scrollbar
 * - Configurable max height
 * - Can wrap any content
 */

import { ReactNode, useRef } from 'react';
import { useScrollIndicators } from '@/hooks/useScrollIndicators';

interface ScrollableCodeBoxProps {
  children: ReactNode;
  className?: string;
  maxHeight?: string;
}

export const ScrollableCodeBox = ({
  children,
  className = '',
  maxHeight = 'max-h-[30vh] sm:max-h-[35vh]'
}: ScrollableCodeBoxProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { showTopGradient, showBottomGradient } = useScrollIndicators(scrollRef);

  return (
    <div className="relative">
      {/* Top gradient fade - appears when scrolled down */}
      <div
        className="absolute top-0 left-0 right-0 h-10 pointer-events-none transition-opacity duration-300 z-10 rounded-t-lg"
        style={{
          background: 'linear-gradient(to bottom, hsl(220 25% 8%), transparent)',
          opacity: showTopGradient ? 0.9 : 0
        }}
      />

      {/* Scrollable content with custom scrollbar */}
      <div
        ref={scrollRef}
        className={`scrollable-code bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 sm:p-8 mb-6 sm:mb-10 md:mb-12 text-left w-full ${maxHeight} overflow-y-auto ${className}`}
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
