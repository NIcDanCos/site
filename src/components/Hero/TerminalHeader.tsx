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
import { LAYOUT_CONSTANTS } from '@/types/layout';

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
      {/* Mobile Layout (< 640px): 2 lines - coherent with codebox styling */}
      <div className="min-[640px]:hidden flex flex-col gap-1">
        {/* Line 1: Identity (Left) + Location Pill (Right) */}
        <div className="flex items-center justify-between gap-2">
          {/* Logo - Commented out for mobile, uncomment to restore */}
          {/* <Logo size="terminal" /> */}

          {/* Left: Identity */}
          <div className="flex items-center gap-2">
            <span className={`text-foreground font-bold ${LAYOUT_CONSTANTS.terminalText.prompt.mobile} ${LAYOUT_CONSTANTS.terminalText.prompt.midMobile}`}>
              {name}
            </span>
            <span className={`text-primary font-bold ${LAYOUT_CONSTANTS.terminalText.prompt.mobile} ${LAYOUT_CONSTANTS.terminalText.prompt.midMobile}`}>
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

        {/* Line 2: Role + Rotating Titles (Codebox value styling - amber-400) */}
        <div className="flex items-center gap-2">
          <span className={`text-primary animate-cursor-blink font-bold ${LAYOUT_CONSTANTS.terminalText.title.mobile} ${LAYOUT_CONSTANTS.terminalText.title.midMobile}`}>
            &gt;
          </span>
          <span className={`text-amber-400 font-normal ${LAYOUT_CONSTANTS.terminalText.title.mobile} ${LAYOUT_CONSTANTS.terminalText.title.midMobile}`}>
            {role}
          </span>
          <span className={`text-muted-foreground font-normal ${LAYOUT_CONSTANTS.terminalText.title.mobile} ${LAYOUT_CONSTANTS.terminalText.title.midMobile}`}>
            /
          </span>
          <AnimatedRotatingTitle
            titles={titles}
            rotationInterval={rotationInterval}
            className={`text-amber-400 font-normal ${LAYOUT_CONSTANTS.terminalText.title.mobile} ${LAYOUT_CONSTANTS.terminalText.title.midMobile} whitespace-nowrap overflow-hidden text-ellipsis`}
          />
        </div>
      </div>

      {/* Tablet/Desktop Layout (>= 640px): 2 lines */}
      <div className="hidden min-[640px]:flex flex-col gap-1">
        {/* Line 1: Logo + Identity (Left) + Location Pill (Right) */}
        <div className="flex items-center justify-between gap-2">
          {/* Left: Logo + Identity */}
          <div className="flex items-center gap-2">
            <Logo size="terminal" />
            <span className={`text-foreground font-bold ${LAYOUT_CONSTANTS.terminalText.prompt.tablet}`}>
              {name}
            </span>
            <span className={`text-primary font-bold ${LAYOUT_CONSTANTS.terminalText.prompt.tablet}`}>
              @portfolio
            </span>
          </div>

          {/* Right: Location Pill */}
          <span className="relative inline-flex items-center px-2.5 py-0.5 rounded-full bg-primary/5 border border-primary/30 animate-pulse-border flex-shrink-0">
            <span className={`text-primary/80 font-bold text-xs tracking-wide`}>
              {location}
            </span>
          </span>
        </div>

        {/* Line 2: Static Role + Rotating Titles (Codebox value styling - amber-400) */}
        <div className="flex items-center gap-2 opacity-90">
          <span className={`text-primary animate-cursor-blink font-bold ${LAYOUT_CONSTANTS.terminalText.title.tablet}`}>
            &gt;
          </span>
          <span className={`text-amber-400 font-normal ${LAYOUT_CONSTANTS.terminalText.title.tablet}`}>
            {role}
          </span>
          <span className={`text-muted-foreground font-normal ${LAYOUT_CONSTANTS.terminalText.title.tablet}`}>
            /
          </span>
          <AnimatedRotatingTitle
            titles={titles}
            rotationInterval={rotationInterval}
            className={`text-amber-400 font-normal ${LAYOUT_CONSTANTS.terminalText.title.tablet} whitespace-nowrap overflow-hidden text-ellipsis`}
          />
        </div>
      </div>
    </div>
  );
};
