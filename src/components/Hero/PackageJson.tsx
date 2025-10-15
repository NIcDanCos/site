/**
 * PackageJson Component
 * Main container that orchestrates the package.json CV display
 */

import { PackageHeader } from './PackageHeader';
import { DependencyList } from './DependencyList';
import { ScriptsSection } from './ScriptsSection';
import { ScrollableCodeBox } from './ScrollableCodeBox';
import { packageData } from '@/lib/packageJsonData';

export const PackageJson = () => {
  return (
    <ScrollableCodeBox>
      <pre className="text-[13px] min-[375px]:text-base sm:text-lg break-words whitespace-pre-wrap">
        <code className="break-words">
          <PackageHeader
            name={packageData.name}
            version={packageData.version}
            description={packageData.description}
          />
          <DependencyList type="dependencies" items={packageData.dependencies} />
          {"\n"}
          <DependencyList type="devDependencies" items={packageData.devDependencies} />
          {"\n"}
          <ScriptsSection scripts={packageData.scripts} />
        </code>
      </pre>
    </ScrollableCodeBox>
  );
};
