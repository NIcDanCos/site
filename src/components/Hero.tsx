import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContactModal } from "@/components/ContactModal";
import { UnifiedTerminal } from "@/components/Hero/UnifiedTerminal";
import { PackageHeader } from "@/components/Hero/PackageHeader";
import { DependencyList } from "@/components/Hero/DependencyList";
import { ScriptsSection } from "@/components/Hero/ScriptsSection";
import { DotGrid } from "@/components/Hero/DotGrid";
import { packageData } from "@/lib/packageJsonData";
import type { ViewportLayout } from "@/hooks/use-viewport-layout";
import { HERO_TOKENS, GENERAL_TOKENS } from "@/types/layout";

interface HeroProps {
  layoutMode?: ViewportLayout;
}

const Hero = ({ layoutMode = "compact" }: HeroProps) => {
  const navigate = useNavigate();
  const [showContactModal, setShowContactModal] = useState(false);

  const rotatingTitles = [
    "NextJS",
    "Supabase",
    "FastAPI",
    "n8n",
  ];

  const handleViewWork = () => {
    navigate('/projects');
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  const heightClass =
    layoutMode === "compact" ? "min-h-screen" : "h-screen";

  return (
    <div className={`relative flex items-center justify-center overflow-hidden ${heightClass} pt-16 md:pt-20 lg:pt-24 pb-8`}>
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-primary" />
      <div className="absolute inset-0 bg-gradient-glow animate-glow-pulse" />

      {/* Animated dot grid */}
      <DotGrid />

      {/* Unified Terminal Content */}
      <div className={`relative z-10 w-full mx-auto ${HERO_TOKENS.hero.contentPadding} animate-fade-in`} style={{ maxWidth: GENERAL_TOKENS.maxWidths.heroContent }}>
        <UnifiedTerminal
          name="NicDanCos"
          location="Dubai"
          role="AI Facilitator"
          titles={rotatingTitles}
          rotationInterval={9000}
          onHomeClick={handleHomeClick}
          onViewWork={handleViewWork}
          onSayHello={() => setShowContactModal(true)}
          layoutMode={layoutMode}
        >
          <pre className={`${HERO_TOKENS.codeText.mobile} ${HERO_TOKENS.codeText.midMobile} ${HERO_TOKENS.codeText.tablet} break-words whitespace-pre-wrap`}>
            <code className="break-words">
              <PackageHeader
                name={packageData.name}
                version={packageData.version}
                description={packageData.description}
              />
              <DependencyList type="dependencies" items={packageData.dependencies} />
              {"\n"}
              <DependencyList type="devDependencies" items={packageData.devDependencies} />
              {"\n"}
              <ScriptsSection scripts={packageData.scripts} />
            </code>
          </pre>
        </UnifiedTerminal>
      </div>

      {/* Scanline texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent ${HERO_TOKENS.effects.scanline.height}, ${HERO_TOKENS.effects.scanline.opacity} ${HERO_TOKENS.effects.scanline.height}, ${HERO_TOKENS.effects.scanline.opacity} 4px)`,
        }}
      />

      {/* Contact Modal */}
      <ContactModal open={showContactModal} onOpenChange={setShowContactModal} />
    </div>
  );
};

export default Hero;
