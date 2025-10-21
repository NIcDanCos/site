/**
 * TerminalFooter Component
 * Terminal-style footer action bar for buttons and actions
 *
 * Features:
 * - Consistent styling with TerminalHeader
 * - Responsive layout: vertical (< 640px) / horizontal (≥ 640px)
 * - Elegant separators between action items
 * - No window controls (footer-specific)
 * - Integrates with code block as unified footer
 */

import { ReactNode, Children } from 'react';
import { LAYOUT_CONSTANTS } from '@/types/layout';

interface TerminalFooterProps {
  children: ReactNode;
}

export const TerminalFooter = ({ children }: TerminalFooterProps) => {
  const childrenArray = Children.toArray(children);

  return (
    <div className="flex flex-col sm:flex-row justify-center items-stretch w-full">
      {childrenArray.map((child, index) => (
        <div key={index} className="flex flex-col sm:flex-row sm:flex-1">
          {child}
          {/* Add separator after each item except the last */}
          {index < childrenArray.length - 1 && (
            <div
              className="h-px sm:h-auto sm:w-px my-0 sm:my-0 mx-0 sm:mx-0"
              style={{
                backgroundColor: LAYOUT_CONSTANTS.terminalColors.border
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};
