/**
 * UnifiedTerminal Component
 * Single cohesive terminal unit that replaces navbar + hero + footer
 *
 * Structure:
 * ┌─────────────────────────────────────────┐
 * │ UnifiedTerminalHeader                   │ ← Logo + Identity + Home
 * ├─────────────────────────────────────────┤
 * │ Content Area     │ SocialIconsSidebar   │ ← Code + Icons (desktop)
 * ├─────────────────────────────────────────┤
 * │ UnifiedTerminalActions                  │ ← Buttons / Icons
 * ├─────────────────────────────────────────┤
 * │ Footer                                  │ ← Copyright
 * └─────────────────────────────────────────┘
 *
 * Features:
 * - Fully self-contained terminal unit
 * - Responsive social icon placement (sidebar on desktop, actions on mobile)
 * - Sticky header behavior on mobile/tablet (optional)
 * - Terminal-themed throughout
 * - Space-efficient above-the-fold design
 */

import { ReactNode, useRef } from 'react';
import { UnifiedTerminalHeader } from './UnifiedTerminalHeader';
import { SocialIconsSidebar } from './SocialIconsSidebar';
import { UnifiedTerminalActions } from './UnifiedTerminalActions';
import { useScrollIndicators } from '@/hooks/useScrollIndicators';
import type { ViewportLayout } from '@/hooks/use-viewport-layout';
import { HERO_TOKENS } from '@/types/layout';

interface UnifiedTerminalProps {
  children: ReactNode;
  name: string;
  location: string;
  role: string;
  titles: string[];
  rotationInterval?: number;
  onHomeClick?: () => void;
  onViewWork: () => void;
  onSayHello: () => void;
  layoutMode?: ViewportLayout;
}

export const UnifiedTerminal = ({
  children,
  name,
  location,
  role,
  titles,
  rotationInterval = 9000,
  onHomeClick,
  onViewWork,
  onSayHello,
  layoutMode = "compact",
}: UnifiedTerminalProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { showTopGradient, showBottomGradient } = useScrollIndicators(scrollRef);

  // Determine max height based on layout mode
  const computedMaxHeight =
    layoutMode === "full"
      ? HERO_TOKENS.codeboxHeight.full
      : `${HERO_TOKENS.codeboxHeight.compact.mobile} ${HERO_TOKENS.codeboxHeight.compact.tablet}`;

  return (
    <div
      className="relative terminal-box-3d"
      style={{
        borderRadius: '0.5rem',
      }}
    >
      {/* Unified Terminal Header */}
      <div
        className="backdrop-blur-sm border border-border border-b rounded-t-lg"
        style={{
          background: HERO_TOKENS.terminalColors.headerBackground,
          borderBottomColor: HERO_TOKENS.terminalColors.borderBottom,
        }}
      >
        <UnifiedTerminalHeader
          name={name}
          location={location}
          role={role}
          titles={titles}
          rotationInterval={rotationInterval}
          onHomeClick={onHomeClick}
        />
      </div>

      {/* Content Area with Social Sidebar */}
      <div className="flex relative">
        {/* Top gradient fade - appears when scrolled down from top */}
        <div
          className="absolute left-0 right-0 h-12 pointer-events-none transition-opacity duration-300 z-10"
          style={{
            top: 0,
            background: HERO_TOKENS.terminalColors.gradientFade,
            opacity: showTopGradient ? 0.95 : 0,
          }}
        />

        {/* Bottom gradient fade - appears when there's more content below */}
        <div
          className="absolute left-0 right-0 h-12 pointer-events-none transition-opacity duration-300 z-10"
          style={{
            bottom: 0,
            background: 'linear-gradient(to top, hsl(220 25% 8%), transparent)',
            opacity: showBottomGradient ? 0.95 : 0,
          }}
        />

        {/* Main Scrollable Content */}
        <div
          ref={scrollRef}
          className={`scrollable-code terminal-content-inset bg-card/50 backdrop-blur-sm border-l border-r border-border py-8 sm:py-12 px-4 sm:px-8 text-left w-full ${computedMaxHeight} overflow-y-auto flex-1`}
        >
          {children}
        </div>

        {/* Social Icons Sidebar - Desktop only (≥680px) */}
        <SocialIconsSidebar />
      </div>

      {/* Actions Footer */}
      <div
        className="backdrop-blur-sm border border-border border-t"
        style={{
          background: HERO_TOKENS.terminalColors.footerBackground,
          borderTopColor: HERO_TOKENS.terminalColors.borderBottom,
        }}
      >
        <UnifiedTerminalActions onViewWork={onViewWork} onSayHello={onSayHello} />
      </div>

      {/* Copyright Footer */}
      <div
        className="backdrop-blur-sm border border-border border-t rounded-b-lg p-4 text-center"
        style={{
          background: HERO_TOKENS.terminalColors.footerBackground,
          borderTopColor: HERO_TOKENS.terminalColors.borderBottom,
        }}
      >
        <p className="text-foreground/70 text-sm">© 2025 Nic Dan Cos</p>
      </div>
    </div>
  );
};
