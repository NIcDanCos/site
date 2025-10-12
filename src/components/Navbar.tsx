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
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/25 border-b border-border/30">
      <div className="max-w-4xl mx-auto px-6">
        {/* Mobile: Two rows layout */}
        <div className="sm:hidden py-3">
          {/* First row: Logo left, Home icon right */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-primary/20 border border-primary/50 rounded flex items-center justify-center">
                <span className="text-primary text-sm font-bold">LOGO</span>
              </div>
            </div>
            <button
              onClick={() => navigate('/')}
              className="text-foreground/60 hover:text-primary transition-colors p-2"
              aria-label="Home"
            >
              <Home className="w-7 h-7" />
            </button>
          </div>
          
          {/* Second row: Social icons centered */}
          <div className="flex items-center justify-center gap-4">
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
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Desktop: Single row layout */}
        <div className="hidden sm:flex items-center justify-between h-16">
          {/* Logo and Home icon */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-primary/20 border border-primary/50 rounded flex items-center justify-center">
                <span className="text-primary text-sm font-bold">LOGO</span>
              </div>
            </div>
            <button
              onClick={() => navigate('/')}
              className="text-foreground/60 hover:text-primary transition-colors p-2"
              aria-label="Home"
            >
              <Home className="w-6 h-6" />
            </button>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
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
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
