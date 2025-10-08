import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-primary" />
      <div className="absolute inset-0 bg-gradient-glow animate-glow-pulse" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-fade-in">
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
            className="group relative overflow-hidden"
          >
            <span className="relative z-10">View Work</span>
            <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary/10"
          >
            Say Hello
          </Button>
        </div>
      </div>

      {/* Decorative grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>
    </div>
  );
};

export default Hero;
