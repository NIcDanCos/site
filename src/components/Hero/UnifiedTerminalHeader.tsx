/**
 * UnifiedTerminalHeader Component
 * Next-generation terminal header that replaces traditional navbar
 *
 * Features:
 * - Smaller circular logo spanning both text lines (3rem for better balance)
 * - Identity line with username and portfolio path
 * - Static role and location
 * - Animated rotating value propositions
 * - Compact location badge with pin icon (tight spacing at ≥540px)
 * - Responsive layout adapting to screen size
 * - Margins for breathing room
 * - Designed for sticky behavior on mobile/tablet
 *
 * Layout:
 * Desktop/Tablet (≥540px):
 * [Logo] [Text Lines]          [📍 Dubai]  (compact badge)
 *        > AI Facilitator/...
 *
 * Mobile (<540px):
 * [Logo] [Text Lines]
 *        > AI Facilitator/...
 * [📍 Dubai - Full Width]     (standard rounded pill)
 *
 * Breakpoint Strategy:
 * - Mobile (<540px): Dubai pill below header, full width, MapPin icon
 * - Small Tablet (≥540px): Compact pin badge on right side - tight spacing
 * - Tablet (≥640px): Enhanced spacing with compact badge
 * - Desktop (≥680px): Full layout with optimal spacing and compact badge
 */

import { MapPin } from "lucide-react";
import { AnimatedRotatingTitle } from './AnimatedRotatingTitle';
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
    <div className="font-mono overflow-hidden mt-4 mb-4 ml-4 mr-4">
      {/* Main Header Row */}
      <div className="flex items-stretch gap-3">
        {/* Circular Logo - Smaller, spans both lines */}
        <div className="flex items-center flex-shrink-0">
          <div
            className="rounded-full overflow-hidden border-2 border-primary/30 bg-card flex items-center justify-center"
            style={{
              // 3rem for better balance
              width: '3rem',
              height: '3rem',
              minWidth: '3rem',
              minHeight: '3rem'
            }}
          >
            <img
              src="/assets/logo/nic-mob-gradient.png"
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Content - Two lines */}
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

        {/* Right Side: Location Badge - Compact pin badge at ≥540px, hidden below */}
        <div className="hidden tablet-xs:flex items-center flex-shrink-0">
          <div className="flex items-center justify-center gap-1.5 px-3 py-1.5 bg-primary/5 border border-primary/30 animate-pulse-border rounded-md">
            <MapPin className="w-4 h-4 text-primary/70" />
            <span className="text-primary/80 font-bold text-sm tracking-wide">
              {location}
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Location Pill - Full width below header on screens <540px */}
      <div className="flex tablet-xs:hidden mt-3">
        <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-primary/5 border border-primary/30 animate-pulse-border w-full">
          <MapPin className="w-4 h-4 text-primary/70" />
          <span className="text-primary/80 font-bold text-sm tracking-wide">
            {location}
          </span>
        </div>
      </div>
    </div>
  );
};
