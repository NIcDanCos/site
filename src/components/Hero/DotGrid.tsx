/**
 * DotGrid Component
 * Subtle animated dot pattern background for technical aesthetic
 *
 * Features:
 * - Pure CSS radial-gradient dot pattern
 * - Gentle pulse/glow animation
 * - Scales perfectly across all viewports
 * - Terminal/blueprint inspired design
 */

interface DotGridProps {
  className?: string;
}

export const DotGrid = ({ className = "" }: DotGridProps) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: `
          radial-gradient(circle, hsl(var(--primary) / 0.15) 1px, transparent 1px),
          radial-gradient(circle, hsl(var(--accent) / 0.08) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px, 60px 60px',
        backgroundPosition: '0 0, 30px 30px',
      }}
    >
      {/* Animated glow overlay */}
      <div
        className="absolute inset-0 animate-dot-pulse"
        style={{
          backgroundImage: `
            radial-gradient(circle, hsl(var(--primary) / 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0',
        }}
      />
    </div>
  );
};
