/**
 * Dependency Component
 * Renders a single dependency line in package.json format with syntax highlighting
 */

import { Dependency as DependencyType } from '@/types/packageJson';

interface DependencyProps {
  dependency: DependencyType;
  isLast: boolean; // For comma handling
  animationDelay?: number; // For staggered animations
}

export const Dependency = ({ dependency, isLast, animationDelay = 0 }: DependencyProps) => {
  return (
    <div
      className="motion-safe:animate-fade-in motion-reduce:opacity-100"
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      {"    "}
      <span className="text-primary max-[374px]:text-sm">&quot;{dependency.name}&quot;</span>
      <span className="text-muted-foreground">: </span>
      <span className="text-amber-400 text-sm max-[374px]:text-xs">&quot;{dependency.version}&quot;</span>
      {!isLast && <span className="text-muted-foreground">,</span>}
    </div>
  );
};
