/**
 * ProjectActions Component
 * Responsive action bar for projects terminal footer
 *
 * Features:
 * - Desktop (≥640px): Shows [Back Home] and [View All on GitHub] buttons
 * - Mobile (<640px): Shows [Back Home] button
 * - Consistent styling with terminal theme
 * - Smooth transitions between layouts
 *
 * Design Philosophy:
 * - Follows UnifiedTerminalActions pattern for consistency
 * - Uses PROJECTS_TOKENS for styling
 * - Provides navigation and GitHub links
 */

import { Home, Github } from "lucide-react";
import { PROJECTS_TOKENS } from '@/types/layout/projects';

interface ProjectActionsProps {
  onBackHome: () => void;
  githubUrl?: string; // Optional: Link to GitHub profile/org
}

export const ProjectActions = ({
  onBackHome,
  githubUrl = "https://github.com"
}: ProjectActionsProps) => {
  const handleGitHubClick = () => {
    if (githubUrl) {
      window.open(githubUrl, '_blank');
    }
  };

  return (
    <div
      className={`flex ${PROJECTS_TOKENS.actions.layout.classes} justify-center items-stretch w-full ${PROJECTS_TOKENS.actions.gap.classes}`}
      style={{
        padding: PROJECTS_TOKENS.terminal.footer.padding.mobile,
        borderTop: `1px solid ${PROJECTS_TOKENS.terminalColors.border}`,
        background: PROJECTS_TOKENS.terminalColors.footerBackground,
      }}
    >
      {/* Back Home Button - Always visible */}
      <div className="flex-1 flex items-stretch">
        <button
          onClick={onBackHome}
          className={`
            ${PROJECTS_TOKENS.buttons.height.classes}
            ${PROJECTS_TOKENS.buttons.padding.classes}
            ${PROJECTS_TOKENS.buttons.textSize.classes}
            w-full font-medium rounded-none transition-all
            flex items-center justify-center gap-2
          `}
          style={{
            border: 'none',
            outline: 'none',
            margin: 0,
            boxShadow: 'none',
            textShadow: 'none',
            backgroundImage: 'none',
            WebkitTapHighlightColor: 'transparent',
            WebkitAppearance: 'none',
            cursor: 'pointer',
            fontFamily: 'inherit',
            background: PROJECTS_TOKENS.buttonColors.primary.background,
            color: PROJECTS_TOKENS.buttonColors.primary.text,
          }}
        >
          <Home className="w-4 h-4" />
          <span>Back Home</span>
        </button>
      </div>

      {/* Desktop: View on GitHub Button (≥640px) */}
      <div className="hidden sm:flex flex-1 items-stretch">
        <button
          onClick={handleGitHubClick}
          className={`
            ${PROJECTS_TOKENS.buttons.height.classes}
            ${PROJECTS_TOKENS.buttons.padding.classes}
            ${PROJECTS_TOKENS.buttons.textSize.classes}
            w-full font-medium rounded-none transition-all
            flex items-center justify-center gap-2
          `}
          style={{
            border: 'none',
            outline: 'none',
            margin: 0,
            boxShadow: 'none',
            textShadow: 'none',
            backgroundImage: 'none',
            WebkitTapHighlightColor: 'transparent',
            WebkitAppearance: 'none',
            cursor: 'pointer',
            fontFamily: 'inherit',
            background: PROJECTS_TOKENS.buttonColors.secondary.background,
            color: PROJECTS_TOKENS.buttonColors.secondary.text,
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = PROJECTS_TOKENS.buttonColors.secondary.hoverBg}
          onMouseLeave={(e) => e.currentTarget.style.background = PROJECTS_TOKENS.buttonColors.secondary.background}
        >
          <Github className="w-4 h-4" />
          <span>View on GitHub</span>
        </button>
      </div>
    </div>
  );
};
