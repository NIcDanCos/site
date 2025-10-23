/**
 * SocialIconsSidebar Component
 * Vertical social media icon bar positioned on the right edge of terminal
 *
 * Features:
 * - Vertically stacked social icons
 * - Positioned inside terminal box border on right edge
 * - Vertically centered (self-center) relative to scrollable code content
 * - Only visible on screens ≥680px (tablet-md breakpoint)
 * - Hover effects and accessibility
 *
 * Icons:
 * - GitHub
 * - Email
 * - Twitter/X
 * - Substack
 */

import { Github, Mail, Twitter, BookOpen } from "lucide-react";

interface SocialLink {
  icon: React.ElementType;
  href: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Mail, href: "mailto:contact@example.com", label: "Email" },
  { icon: Twitter, href: "https://twitter.com", label: "X (Twitter)" },
  { icon: BookOpen, href: "https://substack.com", label: "Substack" },
];

export const SocialIconsSidebar = () => {
  return (
    <div
      className="hidden tablet-md:flex flex-col gap-4 items-center py-4 px-3 border-l border-border/30 self-center"
      style={{
        minWidth: '60px',
      }}
    >
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-primary hover:scale-110 transition-all duration-200 p-2 rounded-md hover:bg-primary/5"
            aria-label={social.label}
            title={social.label}
          >
            <Icon className="w-5 h-5" />
          </a>
        );
      })}
    </div>
  );
};
