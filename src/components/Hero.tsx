import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/ContactModal";
import { PackageJson } from "@/components/Hero/PackageJson";
import { TerminalHeader } from "@/components/Hero/TerminalHeader";

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
    <div className="relative flex items-center justify-center overflow-hidden pt-32 sm:pt-40 md:pt-32 flex-grow" style={{ minHeight: 'calc(100vh - 240px)' }}>
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-primary" />
      <div className="absolute inset-0 bg-gradient-glow animate-glow-pulse" />
      
      {/* Content */}
      <div className="relative z-10 w-full mx-auto px-6 animate-fade-in py-4 sm:py-8 md:py-8" style={{ maxWidth: '680px' }}>
        {/* Unified Terminal Code Block with Header */}
        <PackageJson
          header={
            <TerminalHeader
              name="Nic Dan Cos"
              titles={rotatingTitles}
              rotationInterval={9000}
            />
          }
        />

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center w-full">
          <Button 
            variant="default" 
            size="lg"
            onClick={handleViewWork}
            className="group relative overflow-hidden w-full sm:flex-1"
          >
            <span className="relative z-10">View Work</span>
            <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => setShowContactModal(true)}
            className="group relative overflow-hidden border-primary text-primary hover:bg-primary/10 w-full sm:flex-1"
          >
            <span className="relative z-10">Say Hello</span>
            <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
        </div>
      </div>

      {/* Scanline texture */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255, 255, 255, 0.03) 3px, rgba(255, 255, 255, 0.03) 4px)',
        }}
      />

      {/* Wave animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(0, 217, 255, 0.25)" />
              <stop offset="50%" stopColor="rgba(139, 92, 246, 0.2)" />
              <stop offset="100%" stopColor="rgba(0, 217, 255, 0.25)" />
            </linearGradient>
          </defs>
          <path
            d="M0,100 C150,120 350,80 500,100 C650,120 850,80 1000,100 C1150,120 1350,80 1500,100 C1650,120 1850,80 2000,100 L2000,0 L0,0 Z"
            fill="url(#wave-gradient)"
            opacity="0.3"
            className="animate-wave-slow"
          />
          <path
            d="M0,80 C200,100 400,60 600,80 C800,100 1000,60 1200,80 C1400,100 1600,60 1800,80 C2000,100 2200,60 2400,80 L2400,0 L0,0 Z"
            fill="url(#wave-gradient)"
            opacity="0.2"
            className="animate-wave-slower"
          />
        </svg>
      </div>

      {/* Contact Modal */}
      <ContactModal open={showContactModal} onOpenChange={setShowContactModal} />
    </div>
  );
};

export default Hero;
