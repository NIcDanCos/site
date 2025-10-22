/**
 * ScriptsSection Component
 * Renders the scripts section with interactive commands
 */

import { ScriptCommand } from '@/types/packageJson';

interface ScriptsSectionProps {
  scripts: ScriptCommand[];
}

export const ScriptsSection = ({ scripts }: ScriptsSectionProps) => {
  if (scripts.length === 0) return null;

  return (
    <>
      {"  "}
      <span className="text-primary">&quot;scripts&quot;</span>
      <span className="text-muted-foreground">: {"{"}</span>
      {"\n"}
      {scripts.map((script, index) => (
        <div key={script.name}>
          {"    "}
          <span className="text-primary">&quot;{script.name}&quot;</span>
          <span className="text-muted-foreground">: </span>
          <span className="text-amber-400">&quot;{script.command}&quot;</span>
          {index < scripts.length - 1 && (
            <span className="text-muted-foreground">,</span>
          )}
        </div>
      ))}
      {"\n"}
      {"  "}
      <span className="text-muted-foreground">{"}"}</span>
      {"\n"}
      <span className="text-muted-foreground">{"}"}</span>
    </>
  );
};
