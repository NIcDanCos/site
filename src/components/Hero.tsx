import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContactModal } from "@/components/ContactModal";
import { PackageJson } from "@/components/Hero/PackageJson";
import { TerminalHeader } from "@/components/Hero/TerminalHeader";
import { TerminalFooter } from "@/components/Hero/TerminalFooter";
import { DotGrid } from "@/components/Hero/DotGrid";
import type { ViewportLayout } from "@/hooks/use-viewport-layout";
import { LAYOUT_CONSTANTS } from "@/types/layout";

interface HeroProps {
  layoutMode?: ViewportLayout;
}

const Hero = ({ layoutMode = "compact" }: HeroProps) => {
  const navigate = useNavigate();
  const [showContactModal, setShowContactModal] = useState(false);

  const rotatingTitles = [
    "Full-Stack Developer",
    "System Architect",
    "Technical Lead",
    "Problem Solver",
  ];

  const handleViewWork = () => {
    navigate('/projects');
  };

  const heightClass =
    layoutMode === "compact" ? "min-h-viewport-minus-nav" : "flex-grow";

  return (
    <div className={`relative flex items-center justify-center overflow-hidden ${heightClass} ${LAYOUT_CONSTANTS.hero.topSpacing.mobile} ${LAYOUT_CONSTANTS.hero.topSpacing.tablet}`}>
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-primary" />
      <div className="absolute inset-0 bg-gradient-glow animate-glow-pulse" />

      {/* Animated dot grid */}
      <DotGrid />

      {/* Content */}
      <div className={`relative z-10 w-full mx-auto ${LAYOUT_CONSTANTS.hero.contentPadding} animate-fade-in`} style={{ maxWidth: LAYOUT_CONSTANTS.maxWidths.heroContent }}>
        <PackageJson
          layoutMode={layoutMode}
          header={
            <TerminalHeader
              name="Nic Dan Cos"
              titles={rotatingTitles}
              rotationInterval={9000}
            />
          }
          actions={
            <TerminalFooter>
              <button
                onClick={handleViewWork}
                className={`${LAYOUT_CONSTANTS.buttons.height} ${LAYOUT_CONSTANTS.buttons.padding} w-full ${LAYOUT_CONSTANTS.buttons.textSize} font-medium rounded-none transition-all hover:brightness-90`}
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
                  background: LAYOUT_CONSTANTS.buttonColors.primary.background,
                  color: LAYOUT_CONSTANTS.buttonColors.primary.text,
                }}
              >
                View Work
              </button>

              <button
                onClick={() => setShowContactModal(true)}
                className={`${LAYOUT_CONSTANTS.buttons.height} ${LAYOUT_CONSTANTS.buttons.padding} w-full ${LAYOUT_CONSTANTS.buttons.textSize} font-medium rounded-none transition-all`}
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
                  background: LAYOUT_CONSTANTS.buttonColors.secondary.background,
                  color: LAYOUT_CONSTANTS.buttonColors.secondary.text,
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = LAYOUT_CONSTANTS.buttonColors.secondary.hoverBg}
                onMouseLeave={(e) => e.currentTarget.style.background = LAYOUT_CONSTANTS.buttonColors.secondary.background}
              >
                Say Hello
              </button>
            </TerminalFooter>
          }
        />
      </div>

      {/* Scanline texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent ${LAYOUT_CONSTANTS.effects.scanline.height}, ${LAYOUT_CONSTANTS.effects.scanline.opacity} ${LAYOUT_CONSTANTS.effects.scanline.height}, ${LAYOUT_CONSTANTS.effects.scanline.opacity} 4px)`,
        }}
      />

      {/* Contact Modal */}
      <ContactModal open={showContactModal} onOpenChange={setShowContactModal} />
    </div>
  );
};

export default Hero;
