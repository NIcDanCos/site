/**
 * UnifiedTerminalHeader Component
 * Next-generation terminal header that replaces traditional navbar
 *
 * Features:
 * - Single unified pill with minimal border containing logo, location text, and pin icon
 * - Identity line with username and portfolio path
 * - Static logo, static Dubai text, animated pin icon
 * - Pin has combined pulse + grow effect (fades and scales simultaneously)
 * - Animated rotating value propositions
 * - All elements stacked vertically in one container
 * - Responsive layout adapting to screen size
 * - Designed for sticky behavior on mobile/tablet
 *
 * Layout (All Screen Sizes):
 * [Text Lines]                ┌─────────┐
 * > AI Facilitator/...        │  [Logo] │
 *                              │  ─────  │  ← Divider
 *                              │ 📍Dubai │  ← Pin: Pulse + Grow
 *                              └─────────┘
 *
 * Layout Elements:
 * - Left: Name and rotating titles (text lines)
 * - Right: Unified pill containing:
 *   - Logo (rectangular)
 *   - Thin divider line
 *   - Pin icon (pulse + grow animation) + Dubai text (same line)
 *
 * Responsive Adjustments:
 * - Logo size scales from w-8 h-6 (mobile) to w-14 h-8 (tablet+)
 * - Consistent pill layout across all screen sizes
 */

import { MapPin } from "lucide-react";
import { AnimatedRotatingTitle } from './AnimatedRotatingTitle';
import { Logo } from '../Logo';
import { HERO_TOKENS } from '@/types/layout/hero';

interface UnifiedTerminalHeaderProps {
  name: string;
  location: string;
  role: string;
  titles: string[];
  rotationInterval?: number;
  onHomeClick?: () => void;
}

export const UnifiedTerminalHeader = ({
  name,
  location,
  role,
  titles,
  rotationInterval = 9000,
}: UnifiedTerminalHeaderProps) => {
  return (
    <div className={`font-mono overflow-hidden ${HERO_TOKENS.terminal.header.padding.mobile} ${HERO_TOKENS.terminal.header.padding.tablet}`}>
      {/* Main Header Row */}
      <div className={`flex items-start justify-between ${HERO_TOKENS.terminal.header.elementGap}`}>

        {/* Left: Text Content - Two lines */}
        <div className="flex-1 flex flex-col gap-1 min-w-0">
          {/* Line 1: Identity */}
          <div className="flex items-center gap-1.5 min-w-0">
            <span className={`text-foreground font-bold ${HERO_TOKENS.terminalText.prompt.classes} truncate`}>
              {name}
            </span>
          </div>

          {/* Line 2: Role + Rotating Titles */}
          <div className="flex items-center min-w-0">
            <span className={`text-primary animate-cursor-blink font-bold ${HERO_TOKENS.terminalText.title.classes} mr-2 flex-shrink-0`}>
              &gt;
            </span>
            <span className={`text-primary font-bold ${HERO_TOKENS.terminalText.title.classes} flex-shrink-0`}>
              {role}
            </span>
            <span className={`text-muted-foreground font-normal ${HERO_TOKENS.terminalText.title.classes} flex-shrink-0`}>
              /
            </span>
            <AnimatedRotatingTitle
              titles={titles}
              rotationInterval={rotationInterval}
              className={`text-amber-400 font-normal ${HERO_TOKENS.terminalText.title.classes} whitespace-nowrap overflow-hidden text-ellipsis min-w-0`}
            />
          </div>
        </div>

        {/* Right: Unified Pill - Logo, Dubai, Pin all stacked - All screen sizes */}
        <div className="flex flex-col items-center justify-center gap-1 px-1 py-1 rounded-md border border-primary/15 bg-card/80 flex-shrink-0">
          {/* Logo */}
          <Logo
            size="terminal"
            imageSrc="/assets/logo/nic-pic.png"
            alt="Logo"
            objectFit="contain"
            rounded="none"
            backgroundColor="bg-card/80"
            className="w-8 h-6 sm:w-14 sm:h-8 md:w-14 md:h-8"
          />

          {/* Thin Divider Line */}
          <div className="w-full h-px bg-primary/10" />

          {/* Dubai Text + Pin - Same Line */}
          <div className="flex items-center justify-center gap-1">
            <MapPin
              className="w-3 h-3 text-primary animate-pulse"
              style={{
                animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite, pinGrow 2s ease-in-out infinite',
                transformOrigin: 'center'
              }}
            />
            <span className="text-primary font-bold text-xs tracking-wide">
              {location}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
