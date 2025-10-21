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
    <div className="flex items-center gap-2 flex-nowrap overflow-hidden font-mono">
      {/* Terminal prompt symbol @ - 15% smaller below 480px, then 35% larger */}
      <span className="text-primary font-bold text-[15px] min-[480px]:text-[18px] min-[640px]:text-2xl flex-shrink-0">@</span>

      {/* Name - No spaces below 480px, 15% smaller, then 35% larger */}
      <span className="text-foreground font-normal text-[15px] min-[480px]:text-[18px] min-[640px]:text-2xl flex-shrink-0">
        <span className="max-[479px]:hidden">{name}</span>
        <span className="min-[480px]:hidden">{name.replace(/\s+/g, '')}</span>
      </span>

      {/* Prompt separator - 15% smaller below 480px, then 35% larger */}
      <span className="text-primary animate-cursor-blink font-bold text-[15px] min-[480px]:text-[18px] min-[640px]:text-2xl flex-shrink-0">&gt;</span>

      {/* Animated rotating subtitle - 15% smaller below 480px, then 30% larger */}
      <AnimatedRotatingTitle
        titles={titles}
        rotationInterval={rotationInterval}
        className="text-foreground font-bold text-[14px] min-[480px]:text-[17px] min-[640px]:text-[23px] whitespace-nowrap overflow-hidden text-ellipsis"
      />
    </div>
  );
};
