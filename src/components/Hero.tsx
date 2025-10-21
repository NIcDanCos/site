import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/ContactModal";
import { PackageJson } from "@/components/Hero/PackageJson";
import { TerminalHeader } from "@/components/Hero/TerminalHeader";
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
            <>
              <Button
                variant="default"
                size="lg"
                onClick={handleViewWork}
                className="group relative overflow-hidden w-full sm:flex-1 shadow-none"
                style={{
                  boxShadow: 'none',
                  filter: 'none',
                  transform: 'none'
                }}
              >
                <span className="relative z-10">View Work</span>
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowContactModal(true)}
                className="group relative overflow-hidden border-primary text-primary hover:bg-primary/10 w-full sm:flex-1 shadow-none"
                style={{
                  boxShadow: 'none',
                  filter: 'none',
                  transform: 'none',
                  borderWidth: '0.5px'
                }}
              >
                <span className="relative z-10">Say Hello</span>
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </>
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
