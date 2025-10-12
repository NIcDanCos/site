import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/ContactModal";

const Hero = () => {
  const navigate = useNavigate();
  const [showContactModal, setShowContactModal] = useState(false);

  const handleViewWork = () => {
    navigate('/projects');
  };

  return (
    <div className="relative flex items-center justify-center overflow-hidden pt-14 sm:pt-16" style={{ minHeight: 'calc(100vh - 160px)' }}>
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-primary" />
      <div className="absolute inset-0 bg-gradient-glow animate-glow-pulse" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-fade-in py-8">
        {/* Name with cursor */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-2">
            <span className="text-foreground">Nic Dan Cos</span>
            <span className="text-primary animate-cursor-blink">_</span>
          </h1>
        </div>

        {/* Code-style role definition */}
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 mb-12 text-left max-w-2xl mx-auto">
          <pre className="text-base md:text-lg">
            <code>
              <span className="text-accent">const</span>{" "}
              <span className="text-foreground">role</span>{" "}
              <span className="text-muted-foreground">=</span>{" "}
              <span className="text-muted-foreground">{"{"}</span>
              {"\n"}
              {"  "}
              <span className="text-primary">title</span>
              <span className="text-muted-foreground">:</span>{" "}
              <span className="text-amber-400">"Full Stack Developer"</span>
              <span className="text-muted-foreground">,</span>
              {"\n"}
              {"  "}
              <span className="text-primary">focus</span>
              <span className="text-muted-foreground">:</span>{" "}
              <span className="text-muted-foreground">{"["}</span>
              <span className="text-amber-400">"React"</span>
              <span className="text-muted-foreground">,</span>{" "}
              <span className="text-amber-400">"APIs"</span>
              <span className="text-muted-foreground">{"]"}</span>
              {"\n"}
              <span className="text-muted-foreground">{"}"}</span>
            </code>
          </pre>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="default" 
            size="lg"
            onClick={handleViewWork}
            className="group relative overflow-hidden"
          >
            <span className="relative z-10">View Work</span>
            <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => setShowContactModal(true)}
            className="group relative overflow-hidden border-primary text-primary hover:bg-primary/10"
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
