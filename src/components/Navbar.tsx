import { Github, Twitter, Mail, BookOpen, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com", label: "X" },
    { icon: BookOpen, href: "https://substack.com", label: "Substack" },
    { icon: Mail, href: "mailto:contact@example.com", label: "Email" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/25 border-b-[3px] border-primary/30">
      <div className="px-6 py-4 sm:py-5">
        {/* Two rows layout - ALL SIZES */}
        
        {/* First row: Logo left, Home icon right - 680px on desktop/tablet, full width on mobile */}
        <div className="mx-auto mb-4" style={{ maxWidth: '680px' }}>
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 border border-primary/50 rounded flex items-center justify-center">
                <span className="text-primary text-sm sm:text-base font-bold">LOGO</span>
              </div>
            </div>
            <button
              onClick={() => navigate('/')}
              className="text-foreground/60 hover:text-primary transition-colors p-2"
              aria-label="Home"
            >
              <Home className="w-7 h-7 sm:w-8 sm:h-8" />
            </button>
          </div>
        </div>
        
        {/* Second row: Social icons centered */}
        <div className="flex items-center justify-center gap-4 sm:gap-6">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors p-2"
                aria-label={social.label}
              >
                <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
