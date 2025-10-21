/**
 * TerminalHeader Component
 * Terminal-style command bar header with animated rotating subtitle
 *
 * Features:
 * - macOS-style window controls (red, yellow, green dots)
 * - Displays prompt symbol (@)
 * - Shows name and animated role
 * - Integrates with code block as unified header
 */

import { AnimatedRotatingTitle } from './AnimatedRotatingTitle';
import { WindowControls } from './WindowControls';
import { LAYOUT_CONSTANTS } from '@/types/layout';

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
    <div className={`flex items-center ${LAYOUT_CONSTANTS.terminal.header.elementGap} flex-nowrap overflow-hidden font-mono`}>
      {/* macOS-style window controls */}
      <WindowControls />

      {/* Separator between controls and terminal prompt */}
      <div className={`${LAYOUT_CONSTANTS.separator.horizontal} ${LAYOUT_CONSTANTS.separator.vertical} bg-border/50 flex-shrink-0 hidden min-[480px]:block`} />

      {/* Terminal prompt symbol @ */}
      <span className={`text-primary font-bold ${LAYOUT_CONSTANTS.terminalText.prompt.mobile} ${LAYOUT_CONSTANTS.terminalText.prompt.midMobile} ${LAYOUT_CONSTANTS.terminalText.prompt.tablet} flex-shrink-0`}>@</span>

      {/* Name */}
      <span className={`text-foreground font-normal ${LAYOUT_CONSTANTS.terminalText.prompt.mobile} ${LAYOUT_CONSTANTS.terminalText.prompt.midMobile} ${LAYOUT_CONSTANTS.terminalText.prompt.tablet} flex-shrink-0`}>
        <span className="max-[479px]:hidden">{name}</span>
        <span className="min-[480px]:hidden">{name.replace(/\s+/g, '')}</span>
      </span>

      {/* Prompt separator */}
      <span className={`text-primary animate-cursor-blink font-bold ${LAYOUT_CONSTANTS.terminalText.prompt.mobile} ${LAYOUT_CONSTANTS.terminalText.prompt.midMobile} ${LAYOUT_CONSTANTS.terminalText.prompt.tablet} flex-shrink-0`}>&gt;</span>

      {/* Animated rotating subtitle */}
      <AnimatedRotatingTitle
        titles={titles}
        rotationInterval={rotationInterval}
        className={`text-foreground font-bold ${LAYOUT_CONSTANTS.terminalText.title.mobile} ${LAYOUT_CONSTANTS.terminalText.title.midMobile} ${LAYOUT_CONSTANTS.terminalText.title.tablet} whitespace-nowrap overflow-hidden text-ellipsis`}
      />
    </div>
  );
};
