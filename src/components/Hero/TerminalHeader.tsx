/**
 * TerminalHeader Component
 * Terminal-style command bar header with animated rotating subtitle
 *
 * Features:
 * - Logo from navbar (platform-agnostic design)
 * - Identity line with username and portfolio path
 * - Static role and location
 * - Animated rotating value propositions
 * - Responsive: 3-line on mobile, 2-line on tablet/desktop
 */

import { AnimatedRotatingTitle } from './AnimatedRotatingTitle';
import { Logo } from '../Logo';
import { HERO_TOKENS } from '@/types/layout';

interface TerminalHeaderProps {
  name: string;
  location: string;
  role: string;
  titles: string[];
  rotationInterval?: number;
}

export const TerminalHeader = ({
  name,
  location,
  role,
  titles,
  rotationInterval = 9000,
}: TerminalHeaderProps) => {
  return (
    <div className="flex flex-col gap-1 font-mono overflow-hidden">
      {/* Mobile Layout (< 640px): 2 lines - no logo */}
      <div className="sm:hidden flex flex-col gap-1">
        {/* Line 1: Identity (Left) + Location Pill (Right) */}
        <div className="flex items-center justify-between gap-2">
          {/* Left: Identity */}
          <div className="flex items-center gap-1.5">
            <span className={`text-foreground font-bold ${HERO_TOKENS.terminalText.prompt.classes}`}>
              {name}
            </span>
            <span className={`text-primary font-bold ${HERO_TOKENS.terminalText.prompt.classes}`}>
              @portfolio
            </span>
          </div>

          {/* Right: Location Pill */}
          <span className="relative inline-flex items-center px-2.5 py-0.5 rounded-full bg-primary/5 border border-primary/30 animate-pulse-border flex-shrink-0">
            <span className="text-primary/80 font-bold text-xs tracking-wide">
              {location}
            </span>
          </span>
        </div>

        {/* Line 2: Role + Rotating Titles */}
        <div className="flex items-center">
          <span className={`text-primary animate-cursor-blink font-bold ${HERO_TOKENS.terminalText.title.classes} mr-2`}>
            &gt;
          </span>
          <span className={`text-amber-400 font-bold ${HERO_TOKENS.terminalText.title.classes}`}>
            {role}
          </span>
          <span className={`text-muted-foreground font-normal ${HERO_TOKENS.terminalText.title.classes}`}>
            /
          </span>
          <AnimatedRotatingTitle
            titles={titles}
            rotationInterval={rotationInterval}
            className={`text-amber-400 font-normal ${HERO_TOKENS.terminalText.title.classes} whitespace-nowrap overflow-hidden text-ellipsis`}
          />
        </div>
      </div>

      {/* Tablet/Desktop Layout (>= 640px): 2 lines with logo */}
      <div className="hidden sm:flex flex-col gap-1">
        {/* Line 1: Logo + Identity (Left) + Location Pill (Right) */}
        <div className="flex items-center justify-between gap-2">
          {/* Left: Logo + Identity */}
          <div className="flex items-center gap-2">
            <Logo
              size="terminal"
              imageSrc="/assets/logo/nic-mob-gradient.png"
              objectFit="cover"
              rounded="sm"
              alt="Site Logo"
              className="border border-primary/20"
            />
            <span className={`text-foreground font-bold ${HERO_TOKENS.terminalText.prompt.classes}`}>
              {name}
            </span>
            <span className={`text-primary font-bold ${HERO_TOKENS.terminalText.prompt.classes}`}>
              @portfolio
            </span>
          </div>

          {/* Right: Location Pill */}
          <span className="relative inline-flex items-center px-2.5 py-0.5 rounded-full bg-primary/5 border border-primary/30 animate-pulse-border flex-shrink-0">
            <span className="text-primary/80 font-bold text-xs md:text-sm tracking-wide">
              {location}
            </span>
          </span>
        </div>

        {/* Line 2: Static Role + Rotating Titles */}
        <div className="flex items-center opacity-90">
          <span className={`text-primary animate-cursor-blink font-bold ${HERO_TOKENS.terminalText.title.classes} mr-2`}>
            &gt;
          </span>
          <span className={`text-amber-400 font-bold ${HERO_TOKENS.terminalText.title.classes}`}>
            {role}
          </span>
          <span className={`text-muted-foreground font-normal ${HERO_TOKENS.terminalText.title.classes}`}>
            /
          </span>
          <AnimatedRotatingTitle
            titles={titles}
            rotationInterval={rotationInterval}
            className={`text-amber-400 font-normal ${HERO_TOKENS.terminalText.title.classes} whitespace-nowrap overflow-hidden text-ellipsis`}
          />
        </div>
      </div>
    </div>
  );
};
