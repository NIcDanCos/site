/**
 * UnifiedTerminalActions Component
 * Responsive action bar for terminal footer
 *
 * Features:
 * - Desktop (≥680px): Shows [View Work] and [Say Hello] buttons
 * - Mobile (<680px): Shows [View Work] button and social icons (Mail, Substack)
 * - Consistent styling with terminal theme
 * - Smooth transitions between layouts
 *
 * Design Philosophy:
 * - On mobile, prioritize essential actions (View Work) + quick contact (icons)
 * - On desktop, show full text buttons for better UX
 * - Social icons on desktop move to sidebar, so only show on mobile
 */

import { Mail, BookOpen } from "lucide-react";
import { HERO_TOKENS } from '@/types/layout/hero';

interface UnifiedTerminalActionsProps {
  onViewWork: () => void;
  onSayHello: () => void;
}

export const UnifiedTerminalActions = ({
  onViewWork,
  onSayHello,
}: UnifiedTerminalActionsProps) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-stretch w-full">
      {/* View Work Button - Always visible */}
      <div className="flex-1 flex items-stretch">
        <button
          onClick={onViewWork}
          className={`${HERO_TOKENS.buttons.height} ${HERO_TOKENS.buttons.padding} w-full ${HERO_TOKENS.buttons.textSize} font-medium rounded-none transition-all`}
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
            background: HERO_TOKENS.buttonColors.primary.background,
            color: HERO_TOKENS.buttonColors.primary.text,
          }}
        >
          View Work
        </button>
      </div>

      {/* Separator */}
      <div
        className="h-px sm:h-auto sm:w-px"
        style={{
          backgroundColor: HERO_TOKENS.terminalColors.border
        }}
      />

      {/* Desktop: Say Hello Button (≥680px) */}
      <div className="hidden tablet-md:flex flex-1 items-stretch">
        <button
          onClick={onSayHello}
          className={`${HERO_TOKENS.buttons.height} ${HERO_TOKENS.buttons.padding} w-full ${HERO_TOKENS.buttons.textSize} font-medium rounded-none transition-all`}
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
            background: HERO_TOKENS.buttonColors.secondary.background,
            color: HERO_TOKENS.buttonColors.secondary.text,
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = HERO_TOKENS.buttonColors.secondary.hoverBg}
          onMouseLeave={(e) => e.currentTarget.style.background = HERO_TOKENS.buttonColors.secondary.background}
        >
          Say Hello
        </button>
      </div>

      {/* Mobile: Social Icons (<680px) */}
      <div className="flex tablet-md:hidden">
        {/* Mail Icon */}
        <a
          href="mailto:contact@example.com"
          className={`${HERO_TOKENS.buttons.height} ${HERO_TOKENS.buttons.padding} flex items-center justify-center transition-all`}
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
            background: HERO_TOKENS.buttonColors.secondary.background,
            color: HERO_TOKENS.buttonColors.secondary.text,
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = HERO_TOKENS.buttonColors.secondary.hoverBg}
          onMouseLeave={(e) => e.currentTarget.style.background = HERO_TOKENS.buttonColors.secondary.background}
          aria-label="Email"
        >
          <Mail className="w-5 h-5" />
        </a>

        {/* Separator */}
        <div
          className="w-px"
          style={{
            backgroundColor: HERO_TOKENS.terminalColors.border
          }}
        />

        {/* Substack Icon */}
        <a
          href="https://substack.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`${HERO_TOKENS.buttons.height} ${HERO_TOKENS.buttons.padding} flex items-center justify-center transition-all`}
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
            background: HERO_TOKENS.buttonColors.secondary.background,
            color: HERO_TOKENS.buttonColors.secondary.text,
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = HERO_TOKENS.buttonColors.secondary.hoverBg}
          onMouseLeave={(e) => e.currentTarget.style.background = HERO_TOKENS.buttonColors.secondary.background}
          aria-label="Substack"
        >
          <BookOpen className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};
