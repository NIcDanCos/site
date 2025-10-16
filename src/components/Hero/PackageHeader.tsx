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
      <span className="text-primary max-[374px]:text-sm">&quot;name&quot;</span>
      <span className="text-muted-foreground">: </span>
      <span className="text-amber-400 text-sm max-[374px]:text-xs">&quot;{name}&quot;</span>
      <span className="text-muted-foreground">,</span>
      {"\n"}
      {"  "}
      <span className="text-primary max-[374px]:text-sm">&quot;version&quot;</span>
      <span className="text-muted-foreground">: </span>
      <span className="text-amber-400 text-sm max-[374px]:text-xs">&quot;{version}&quot;</span>
      <span className="text-muted-foreground">,</span>
      {"\n"}
      {"  "}
      <span className="text-primary max-[374px]:text-sm">&quot;description&quot;</span>
      <span className="text-muted-foreground">: </span>
      <span className="text-amber-400 text-sm max-[374px]:text-xs">&quot;{description}&quot;</span>
      <span className="text-muted-foreground">,</span>
      {"\n"}
    </>
  );
};
