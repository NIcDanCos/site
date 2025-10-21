/**
 * PackageJson Component
 * Main container that orchestrates the package.json CV display
 */

import { ReactNode } from 'react';
import { PackageHeader } from './PackageHeader';
import { DependencyList } from './DependencyList';
import { ScriptsSection } from './ScriptsSection';
import { ScrollableCodeBox } from './ScrollableCodeBox';
import { packageData } from '@/lib/packageJsonData';

interface PackageJsonProps {
  header?: ReactNode;
  actions?: ReactNode;
}

export const PackageJson = ({ header, actions }: PackageJsonProps) => {
  return (
    <>
      <ScrollableCodeBox header={header}>
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

      {actions && (
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center w-full mt-4 sm:mt-6">
          {actions}
        </div>
      )}
    </>
  );
};
