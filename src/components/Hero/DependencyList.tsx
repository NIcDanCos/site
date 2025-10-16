/**
 * DependencyList Component
 * Renders a group of dependencies (either "dependencies" or "devDependencies")
 */

import { Dependency as DependencyComponent } from './Dependency';
import { Dependency } from '@/types/packageJson';

interface DependencyListProps {
  type: 'dependencies' | 'devDependencies';
  items: Dependency[];
  animated?: boolean;
}

export const DependencyList = ({ type, items, animated = true }: DependencyListProps) => {
  if (items.length === 0) return null;

  return (
    <>
      {"  "}
      <span className="text-primary max-[374px]:text-sm">&quot;{type}&quot;</span>
      <span className="text-muted-foreground">: {"{"}</span>
      {"\n"}
      {items.map((dependency, index) => (
        <DependencyComponent
          key={dependency.name}
          dependency={dependency}
          isLast={index === items.length - 1}
          animationDelay={animated ? index * 100 : 0}
        />
      ))}
      {"\n"}
      {"  "}
      <span className="text-muted-foreground">{"}"}</span>
      <span className="text-muted-foreground">,</span>
    </>
  );
};
