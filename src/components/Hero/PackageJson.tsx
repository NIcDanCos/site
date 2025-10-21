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
import type { ViewportLayout } from '@/hooks/use-viewport-layout';
import { LAYOUT_CONSTANTS } from '@/types/layout';

interface PackageJsonProps {
  header?: ReactNode;
  actions?: ReactNode;
  layoutMode?: ViewportLayout;
}

export const PackageJson = ({ header, actions, layoutMode = "compact" }: PackageJsonProps) => {
  return (
    <ScrollableCodeBox
      header={header}
      footer={actions}
      layoutMode={layoutMode}
    >
      <pre className={`${LAYOUT_CONSTANTS.codeText.mobile} ${LAYOUT_CONSTANTS.codeText.midMobile} ${LAYOUT_CONSTANTS.codeText.tablet} break-words whitespace-pre-wrap`}>
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
