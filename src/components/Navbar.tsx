import { Github, Twitter, Mail, BookOpen, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Logo } from "@/components/Logo";
import { NAVBAR_TOKENS, GENERAL_TOKENS } from "@/types/layout";

const Navbar = () => {
  const navigate = useNavigate();
  
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com", label: "X" },
    { icon: BookOpen, href: "https://substack.com", label: "Substack" },
    { icon: Mail, href: "mailto:contact@example.com", label: "Email" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/25 ${NAVBAR_TOKENS.border} ${NAVBAR_TOKENS.colors.borderBottom}`}>
      <div className={`${NAVBAR_TOKENS.padding.horizontal} ${NAVBAR_TOKENS.padding.vertical.mobile} ${NAVBAR_TOKENS.padding.vertical.tablet}`}>
        {/* Two rows layout - ALL SIZES */}

        {/* First row: Logo left, Home icon right - 680px on desktop/tablet, full width on mobile */}
        <div className={`mx-auto ${NAVBAR_TOKENS.rowGap}`} style={{ maxWidth: GENERAL_TOKENS.maxWidths.navbarContent }}>
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              {/* Mobile Logo - Hidden on tablet/desktop (>= 768px) */}
              <Logo
                size="navbar"
                imageSrc="/assets/logo/nic-mob.png"
                alt="Site Logo"
                className="md:hidden"
              />

              {/* Tablet/Desktop Logo - Hidden on mobile (< 768px) */}
              <Logo
                size="navbar"
                imageSrc="/assets/logo/logo-desktop.svg"
                alt="Site Logo"
                className="hidden md:block"
                rounded="sm"
              />
            </div>
            <button
              onClick={() => navigate('/')}
              className={`text-foreground/60 hover:text-primary transition-colors ${NAVBAR_TOKENS.iconSizes.padding}`}
              aria-label="Home"
            >
              <Home className={`${NAVBAR_TOKENS.iconSizes.homeButton.mobile} ${NAVBAR_TOKENS.iconSizes.homeButton.tablet}`} />
            </button>
          </div>
        </div>

        {/* Second row: Social icons centered */}
        <div className={`flex items-center justify-center ${NAVBAR_TOKENS.socialIconGap.mobile} ${NAVBAR_TOKENS.socialIconGap.tablet}`}>
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-foreground/60 hover:text-primary transition-colors ${NAVBAR_TOKENS.iconSizes.padding}`}
                aria-label={social.label}
              >
                <Icon className={`${NAVBAR_TOKENS.iconSizes.socialNav.mobile} ${NAVBAR_TOKENS.iconSizes.socialNav.tablet}`} />
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
