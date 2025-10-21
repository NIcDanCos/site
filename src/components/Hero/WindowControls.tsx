/**
 * WindowControls Component
 * macOS-style window control dots (red, yellow, green)
 *
 * Features:
 * - Three colored dots mimicking macOS window controls
 * - Subtle hover effects
 * - Responsive sizing
 * - Pure visual element (non-interactive for portfolio context)
 */

interface WindowControlsProps {
  className?: string;
}

export const WindowControls = ({ className = '' }: WindowControlsProps) => {
  return (
    <div className={`flex items-center gap-1.5 sm:gap-2 flex-shrink-0 ${className}`}>
      {/* Red dot - Close */}
      <div
        className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-opacity hover:opacity-80"
        style={{ backgroundColor: '#ff5f56' }}
        aria-label="Close"
      />

      {/* Yellow dot - Minimize */}
      <div
        className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-opacity hover:opacity-80"
        style={{ backgroundColor: '#ffbd2e' }}
        aria-label="Minimize"
      />

      {/* Green dot - Maximize */}
      <div
        className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-opacity hover:opacity-80"
        style={{ backgroundColor: '#27c93f' }}
        aria-label="Maximize"
      />
    </div>
  );
};
