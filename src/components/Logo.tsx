/**
 * Logo Component
 * Shared logo component used across the application
 *
 * Features:
 * - Supports PNG, JPEG, and SVG image formats
 * - Consistent logo appearance across Navbar and TerminalHeader
 * - Responsive sizing based on context
 * - Configurable rounded corners (centralized)
 * - Configurable image fit behavior (contain, cover, etc.)
 * - Configurable background color for transparent images
 * - Uses centralized design tokens for easy customization
 * - Graceful fallback to placeholder if no image provided
 *
 * Usage:
 * - Place your logo image in /public/assets/logo/ directory
 * - Pass the path via imageSrc prop: imageSrc="/assets/logo/your-logo.svg"
 * - Customize border radius: rounded="md" (sm, md, lg, xl, 2xl, full, none)
 * - Customize image fit: objectFit="contain" (contain, cover, fill, scale-down, none)
 * - For transparent images: backgroundColor="bg-card/80" to match parent background
 *
 * Customization:
 * - To adjust terminal logo size: Edit src/types/layout/hero.ts -> logo.terminal.container
 * - To adjust logo text size: Edit src/types/layout/hero.ts -> logo.terminal.text
 * - To adjust navbar logo: Edit src/types/layout/navbar.ts -> iconSizes.logo
 * - To adjust border radius globally: Change the default rounded value below
 * - To adjust image fit globally: Change the default objectFit value below
 */

import { LAYOUT_CONSTANTS } from "@/types/layout";

type LogoSize = "navbar" | "terminal";
type RoundedSize = "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
type ObjectFit = "contain" | "cover" | "fill" | "scale-down" | "none";

interface LogoProps {
  size?: LogoSize;
  className?: string;
  imageSrc?: string;
  alt?: string;
  rounded?: RoundedSize;
  objectFit?: ObjectFit;
  /**
   * Background color for the logo container
   * Useful when image has transparency and should match parent background
   * Pass Tailwind background classes (e.g., "bg-card/80", "bg-transparent")
   */
  backgroundColor?: string;
}

export const Logo = ({
  size = "navbar",
  className = "",
  imageSrc,
  alt = "Logo",
  rounded = "md",
  objectFit = "contain",
  backgroundColor
}: LogoProps) => {
  const getSizeClasses = () => {
    switch (size) {
      case "navbar":
        return `${LAYOUT_CONSTANTS.iconSizes.logo.mobile} ${LAYOUT_CONSTANTS.iconSizes.logo.tablet}`;
      case "terminal":
        // Use centralized tokens for terminal logo sizing
        return LAYOUT_CONSTANTS.logo.terminal.container.classes;
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
        return LAYOUT_CONSTANTS.logo.terminal.text.classes;
      default:
        return `${LAYOUT_CONSTANTS.logoText.mobile} ${LAYOUT_CONSTANTS.logoText.tablet}`;
    }
  };

  const getRoundedClasses = () => {
    switch (rounded) {
      case "none":
        return "";
      case "sm":
        return "rounded-sm";
      case "md":
        return "rounded-md";
      case "lg":
        return "rounded-lg";
      case "xl":
        return "rounded-xl";
      case "2xl":
        return "rounded-2xl";
      case "full":
        return "rounded-full";
      default:
        return "rounded-md";
    }
  };

  const getObjectFitClasses = () => {
    switch (objectFit) {
      case "contain":
        return "object-contain";
      case "cover":
        return "object-cover";
      case "fill":
        return "object-fill";
      case "scale-down":
        return "object-scale-down";
      case "none":
        return "object-none";
      default:
        return "object-contain";
    }
  };

  // If image source is provided, render the image
  if (imageSrc) {
    return (
      <div className={`${getSizeClasses()} ${getRoundedClasses()} overflow-hidden flex-shrink-0 ${backgroundColor || ''} ${className}`}>
        <img
          src={imageSrc}
          alt={alt}
          className={`w-full h-full ${getObjectFitClasses()}`}
        />
      </div>
    );
  }

  // Fallback to placeholder if no image provided
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
