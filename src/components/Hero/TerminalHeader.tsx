/**
 * TerminalHeader Component
 * Terminal-style command bar header with animated rotating subtitle
 *
 * Features:
 * - Displays prompt symbol ($)
 * - Shows name and animated role
 * - Integrates with code block as unified header
 */

import { AnimatedRotatingTitle } from './AnimatedRotatingTitle';

interface TerminalHeaderProps {
  name: string;
  titles: string[];
  rotationInterval?: number;
}

export const TerminalHeader = ({
  name,
  titles,
  rotationInterval = 9000,
}: TerminalHeaderProps) => {
  return (
    <div className="flex items-center gap-2 flex-wrap font-mono">
      {/* Terminal prompt symbol - 35% larger */}
      <span className="text-primary font-bold text-[18px] min-[375px]:text-[22px] sm:text-2xl">$</span>

      {/* Name - 35% larger */}
      <span className="text-foreground font-normal text-[18px] min-[375px]:text-[22px] sm:text-2xl">{name}</span>

      {/* Prompt separator - 35% larger */}
      <span className="text-primary animate-cursor-blink font-bold text-[18px] min-[375px]:text-[22px] sm:text-2xl">&gt;</span>

      {/* Animated rotating subtitle - 30% larger */}
      <AnimatedRotatingTitle
        titles={titles}
        rotationInterval={rotationInterval}
        className="text-foreground font-bold text-[17px] min-[375px]:text-[21px] sm:text-[23px]"
      />
    </div>
  );
};
