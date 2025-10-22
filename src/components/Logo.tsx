/**
 * Logo Component
 * Shared logo component used across the application
 *
 * Features:
 * - Consistent logo appearance across Navbar and TerminalHeader
 * - Responsive sizing based on context
 * - Uses centralized design tokens for easy customization
 *
 * Customization:
 * - To adjust terminal logo size: Edit src/types/layout/hero.ts -> logo.terminal.container
 * - To adjust logo text size: Edit src/types/layout/hero.ts -> logo.terminal.text
 * - To adjust navbar logo: Edit src/types/layout/navbar.ts -> iconSizes.logo
 */

import { LAYOUT_CONSTANTS } from "@/types/layout";

type LogoSize = "navbar" | "terminal";

interface LogoProps {
  size?: LogoSize;
  className?: string;
}

export const Logo = ({ size = "navbar", className = "" }: LogoProps) => {
  const getSizeClasses = () => {
    switch (size) {
      case "navbar":
        return `${LAYOUT_CONSTANTS.iconSizes.logo.mobile} ${LAYOUT_CONSTANTS.iconSizes.logo.tablet}`;
      case "terminal":
        // Use centralized tokens for terminal logo sizing
        return `${LAYOUT_CONSTANTS.logo.terminal.container.mobile} ${LAYOUT_CONSTANTS.logo.terminal.container.midMobile} ${LAYOUT_CONSTANTS.logo.terminal.container.tablet}`;
      default:
        return `${LAYOUT_CONSTANTS.iconSizes.logo.mobile} ${LAYOUT_CONSTANTS.iconSizes.logo.tablet}`;
    }
  };

  const getTextSizeClasses = () => {
    switch (size) {
      case "navbar":
        return `${LAYOUT_CONSTANTS.logoText.mobile} ${LAYOUT_CONSTANTS.logoText.tablet}`;
      case "terminal":
        // Use centralized tokens for terminal logo text
        return `${LAYOUT_CONSTANTS.logo.terminal.text.mobile} ${LAYOUT_CONSTANTS.logo.terminal.text.midMobile} ${LAYOUT_CONSTANTS.logo.terminal.text.tablet}`;
      default:
        return `${LAYOUT_CONSTANTS.logoText.mobile} ${LAYOUT_CONSTANTS.logoText.tablet}`;
    }
  };

  return (
    <div
      className={`${getSizeClasses()} bg-primary/20 border border-primary/50 rounded flex items-center justify-center flex-shrink-0 ${className}`}
    >
      <span className={`text-primary ${getTextSizeClasses()} font-bold`}>
        LOGO
      </span>
    </div>
  );
};
