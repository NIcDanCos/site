/**
 * PackageHeader Component
 * Renders the package.json header with name, version, and description
 */

interface PackageHeaderProps {
  name: string;
  version: string;
  description: string;
}

export const PackageHeader = ({ name, version, description }: PackageHeaderProps) => {
  return (
    <>
      <span className="text-muted-foreground">{"{"}</span>
      {"\n"}
      {"  "}
      <span className="text-primary">&quot;name&quot;</span>
      <span className="text-muted-foreground">: </span>
      <span className="text-amber-400">&quot;{name}&quot;</span>
      <span className="text-muted-foreground">,</span>
      {"\n"}
      {"  "}
      <span className="text-primary">&quot;version&quot;</span>
      <span className="text-muted-foreground">: </span>
      <span className="text-amber-400">&quot;{version}&quot;</span>
      <span className="text-muted-foreground">,</span>
      {"\n"}
      {"  "}
      <span className="text-primary">&quot;description&quot;</span>
      <span className="text-muted-foreground">: </span>
      <span className="text-amber-400">&quot;{description}&quot;</span>
      <span className="text-muted-foreground">,</span>
      {"\n"}
    </>
  );
};
