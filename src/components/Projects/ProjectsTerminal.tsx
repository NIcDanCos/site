/**
 * ProjectsTerminal Component
 * Main terminal container for projects page
 *
 * Structure (mirrors UnifiedTerminal):
 * ┌─────────────────────────────────────────┐
 * │ UnifiedTerminalHeader                   │ ← Logo + Identity
 * ├─────────────────────────────────────────┤
 * │ Content Area                            │ ← Projects JSON
 * ├─────────────────────────────────────────┤
 * │ ProjectActions                          │ ← Navigation buttons
 * ├─────────────────────────────────────────┤
 * │ Footer                                  │ ← Copyright
 * └─────────────────────────────────────────┘
 *
 * Features:
 * - Fully self-contained terminal unit
 * - Reuses UnifiedTerminalHeader for consistency
 * - Scrollable projects content area
 * - Terminal-themed throughout
 * - Responsive design
 */

import { useRef } from 'react';
import { UnifiedTerminalHeader } from '../Hero/UnifiedTerminalHeader';
import { ProjectsTerminalContent } from './ProjectsTerminalContent';
import { ProjectActions } from './ProjectActions';
import { useScrollIndicators } from '@/hooks/useScrollIndicators';
import type { ViewportLayout } from '@/hooks/use-viewport-layout';
import { PROJECTS_TOKENS } from '@/types/layout/projects';

interface ProjectsTerminalProps {
  name?: string;
  location?: string;
  onHomeClick?: () => void;
  onBackHome: () => void;
  onLaunchDemo?: (demoUrl: string) => void;
  githubUrl?: string;
  layoutMode?: ViewportLayout;
}

export const ProjectsTerminal = ({
  name = "NicDanCos",
  location = "Dubai",
  onHomeClick,
  onBackHome,
  onLaunchDemo,
  githubUrl = "https://github.com",
  layoutMode = "compact",
}: ProjectsTerminalProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { showTopGradient, showBottomGradient } = useScrollIndicators(scrollRef);

  // Determine max height based on layout mode
  const computedMaxHeight =
    layoutMode === "full"
      ? PROJECTS_TOKENS.codeboxHeight.full.classes
      : PROJECTS_TOKENS.codeboxHeight.compact.classes;

  return (
    <div
      className="relative terminal-box-3d"
      style={{
        borderRadius: PROJECTS_TOKENS.terminal.borderRadius,
      }}
    >
      {/* Terminal Header */}
      <div
        className="backdrop-blur-sm border border-border border-b rounded-t-lg"
        style={{
          background: PROJECTS_TOKENS.terminalColors.headerBackground,
          borderBottomColor: PROJECTS_TOKENS.terminalColors.borderBottom,
        }}
      >
        <UnifiedTerminalHeader
          name={name}
          location={location}
          role="" // Not used in projects mode
          titles={[]} // Not used in projects mode
          onHomeClick={onHomeClick}
          showProjectsMode={true}
        />
      </div>

      {/* Content Area */}
      <div className="flex relative">
        {/* Top gradient fade - appears when scrolled down from top */}
        <div
          className={`absolute left-0 right-0 ${PROJECTS_TOKENS.terminal.gradientFadeHeight.classes} pointer-events-none transition-opacity duration-300 z-10`}
          style={{
            top: 0,
            background: PROJECTS_TOKENS.terminalColors.gradientFade,
            opacity: showTopGradient ? 0.95 : 0,
          }}
        />

        {/* Bottom gradient fade - appears when there's more content below */}
        <div
          className={`absolute left-0 right-0 ${PROJECTS_TOKENS.terminal.gradientFadeHeight.classes} pointer-events-none transition-opacity duration-300 z-10`}
          style={{
            bottom: 0,
            background: 'linear-gradient(to top, hsl(220 25% 8%), transparent)',
            opacity: showBottomGradient ? 0.95 : 0,
          }}
        />

        {/* Main Scrollable Content */}
        <div
          ref={scrollRef}
          className={`
            scrollable-code terminal-content-inset backdrop-blur-sm
            border-l border-r border-border
            ${PROJECTS_TOKENS.terminal.content.padding.classes}
            text-left w-full ${computedMaxHeight} overflow-y-auto flex-1
          `}
          style={{
            background: PROJECTS_TOKENS.terminalColors.contentBackground,
          }}
        >
          <ProjectsTerminalContent
            animated={true}
            onLaunchDemo={onLaunchDemo}
          />
        </div>
      </div>

      {/* Actions Footer */}
      <div
        className="backdrop-blur-sm border border-border border-t"
        style={{
          background: PROJECTS_TOKENS.terminalColors.footerBackground,
          borderTopColor: PROJECTS_TOKENS.terminalColors.borderBottom,
        }}
      >
        <ProjectActions onBackHome={onBackHome} githubUrl={githubUrl} />
      </div>

      {/* Copyright Footer */}
      <div
        className="backdrop-blur-sm border border-border border-t rounded-b-lg p-4 text-center"
        style={{
          background: PROJECTS_TOKENS.terminalColors.footerBackground,
          borderTopColor: PROJECTS_TOKENS.terminalColors.borderBottom,
        }}
      >
        <p className="text-foreground/70 text-sm">© 2025 Nic Dan Cos</p>
      </div>
    </div>
  );
};
