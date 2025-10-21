import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContactModal } from "@/components/ContactModal";
import { PackageJson } from "@/components/Hero/PackageJson";
import { TerminalHeader } from "@/components/Hero/TerminalHeader";
import { TerminalFooter } from "@/components/Hero/TerminalFooter";
import { DotGrid } from "@/components/Hero/DotGrid";

const Hero = () => {
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

  return (
    <div className="relative flex items-center justify-center overflow-hidden flex-grow mt-32 sm:mt-36">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-primary" />
      <div className="absolute inset-0 bg-gradient-glow animate-glow-pulse" />

      {/* Animated dot grid */}
      <DotGrid />

      {/* Content */}
      <div className="relative z-10 w-full mx-auto px-6 animate-fade-in" style={{ maxWidth: '680px' }}>
        <PackageJson
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
                className="h-11 px-8 w-full text-sm font-medium rounded-none transition-all hover:brightness-90"
                style={{
                  border: 'none',
                  outline: 'none',
                  margin: 0,
                  padding: '0 2rem',
                  boxShadow: 'none',
                  textShadow: 'none',
                  backgroundImage: 'none',
                  WebkitTapHighlightColor: 'transparent',
                  WebkitAppearance: 'none',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  background: 'hsl(190 100% 50%)',
                  color: 'hsl(220 30% 4%)',
                }}
              >
                View Work
              </button>

              <button
                onClick={() => setShowContactModal(true)}
                className="h-11 px-8 w-full text-sm font-medium rounded-none transition-all hover:bg-[hsl(190_100%_50%_/_0.1)]"
                style={{
                  border: 'none',
                  outline: 'none',
                  margin: 0,
                  padding: '0 2rem',
                  boxShadow: 'none',
                  textShadow: 'none',
                  backgroundImage: 'none',
                  WebkitTapHighlightColor: 'transparent',
                  WebkitAppearance: 'none',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  background: 'transparent',
                  color: 'hsl(190 100% 50%)',
                }}
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
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255, 255, 255, 0.03) 3px, rgba(255, 255, 255, 0.03) 4px)',
        }}
      />

      {/* Contact Modal */}
      <ContactModal open={showContactModal} onOpenChange={setShowContactModal} />
    </div>
  );
};

export default Hero;
