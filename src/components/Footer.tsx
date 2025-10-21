import { Github, Twitter, Mail, BookOpen } from "lucide-react";
import { LAYOUT_CONSTANTS } from "@/types/layout";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com", label: "X" },
    { icon: BookOpen, href: "https://substack.com", label: "Substack" },
    { icon: Mail, href: "mailto:contact@example.com", label: "Email" },
  ];

  return (
    <footer className={`bg-card border-t border-border ${LAYOUT_CONSTANTS.footer.padding.vertical}`}>
      <div className={`container mx-auto ${LAYOUT_CONSTANTS.footer.padding.horizontal} text-center`}>
        <p className={`text-foreground/70 ${LAYOUT_CONSTANTS.footerText} ${LAYOUT_CONSTANTS.footer.copyrightMargin}`}>© 2025 Nic Dan Cos</p>
        <div className={`flex items-center justify-center ${LAYOUT_CONSTANTS.footer.socialIconGap}`}>
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-foreground/60 hover:text-primary transition-colors ${LAYOUT_CONSTANTS.iconSizes.padding}`}
                aria-label={social.label}
              >
                <Icon className={LAYOUT_CONSTANTS.iconSizes.socialFooter} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
