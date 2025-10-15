/**
 * useScrollIndicators Hook
 * Detects scroll position to determine when to show top/bottom gradient indicators
 *
 * @param ref - Reference to the scrollable container element
 * @returns Object with showTopGradient and showBottomGradient booleans
 */

import { useEffect, useState, RefObject } from 'react';

interface ScrollIndicators {
  showTopGradient: boolean;
  showBottomGradient: boolean;
}

export const useScrollIndicators = (
  ref: RefObject<HTMLElement>
): ScrollIndicators => {
  const [showTopGradient, setShowTopGradient] = useState(false);
  const [showBottomGradient, setShowBottomGradient] = useState(true);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;

      // Show top gradient when scrolled down
      setShowTopGradient(scrollTop > 0);

      // Show bottom gradient when there's more content below
      setShowBottomGradient(scrollTop < scrollHeight - clientHeight - 1);
    };

    // Run initial check
    handleScroll();

    // Add scroll event listener
    container.addEventListener('scroll', handleScroll);

    // Cleanup on unmount
    return () => container.removeEventListener('scroll', handleScroll);
  }, [ref]);

  return { showTopGradient, showBottomGradient };
};
