import { Github, Twitter, Mail, BookOpen } from "lucide-react";
import { FOOTER_TOKENS } from "@/types/layout";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com", label: "X" },
    { icon: BookOpen, href: "https://substack.com", label: "Substack" },
    { icon: Mail, href: "mailto:contact@example.com", label: "Email" },
  ];

  return (
    <footer className={`bg-card border-t border-border ${FOOTER_TOKENS.padding.vertical}`}>
      <div className={`container mx-auto ${FOOTER_TOKENS.padding.horizontal} text-center`}>
        <p className={`text-foreground/70 ${FOOTER_TOKENS.footerText} ${FOOTER_TOKENS.copyrightMargin}`}>© 2025 Nic Dan Cos</p>
        <div className={`flex items-center justify-center ${FOOTER_TOKENS.socialIconGap}`}>
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-foreground/60 hover:text-primary transition-colors ${FOOTER_TOKENS.iconSizes.padding}`}
                aria-label={social.label}
              >
                <Icon className={FOOTER_TOKENS.iconSizes.socialFooter} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
