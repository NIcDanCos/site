import { useState, useEffect } from 'react';

interface AnimatedRotatingTitleProps {
  titles: string[];
  rotationInterval?: number; // milliseconds
  className?: string;
}

export function AnimatedRotatingTitle({
  titles,
  rotationInterval = 9000,
  className = '',
}: AnimatedRotatingTitleProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationPhase, setAnimationPhase] = useState<'display' | 'fade-out' | 'pause' | 'fade-in'>('display');

  useEffect(() => {
    // Duration breakdown for 9 second cycle:
    // display: 7000ms (7s)
    // fade-out: 1000ms (1s)
    // pause: 300ms
    // fade-in: 1200ms (1.2s) - overlaps with next cycle

    const displayDuration = rotationInterval - 2500; // 7s for 9s interval
    const fadeOutDuration = 1000;
    const pauseDuration = 300;
    const fadeInDuration = 1200;

    let displayTimer: NodeJS.Timeout;
    let fadeOutTimer: NodeJS.Timeout;
    let pauseTimer: NodeJS.Timeout;
    let fadeInTimer: NodeJS.Timeout;
    let nextIndexTimer: NodeJS.Timeout;

    const runCycle = () => {
      // Phase 1: Display
      setAnimationPhase('display');

      displayTimer = setTimeout(() => {
        // Phase 2: Fade out
        setAnimationPhase('fade-out');

        fadeOutTimer = setTimeout(() => {
          // Phase 3: Pause (invisible)
          setAnimationPhase('pause');

          pauseTimer = setTimeout(() => {
            // Switch to next title during pause
            setCurrentIndex((prev) => (prev + 1) % titles.length);

            // Phase 4: Fade in with gradient
            setAnimationPhase('fade-in');

            fadeInTimer = setTimeout(() => {
              // Start next cycle
              runCycle();
            }, fadeInDuration);
          }, pauseDuration);
        }, fadeOutDuration);
      }, displayDuration);
    };

    // Start the animation cycle
    runCycle();

    // Cleanup
    return () => {
      clearTimeout(displayTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(pauseTimer);
      clearTimeout(fadeInTimer);
      clearTimeout(nextIndexTimer);
    };
  }, [titles, rotationInterval]);

  const getAnimationClasses = () => {
    switch (animationPhase) {
      case 'fade-out':
        return 'animate-title-fade-out';
      case 'pause':
        return 'opacity-0';
      case 'fade-in':
        return 'animate-title-fade-in animate-title-gradient-shift';
      case 'display':
      default:
        return 'opacity-100';
    }
  };

  return (
    <span className={`inline-block transition-all ${getAnimationClasses()} ${className}`}>
      {titles[currentIndex]}
    </span>
  );
}
