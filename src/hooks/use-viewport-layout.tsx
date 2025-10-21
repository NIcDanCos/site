import * as React from "react";

const VIEWPORT_BREAKPOINT_WIDTH = 1024;
const VIEWPORT_BREAKPOINT_HEIGHT = 768;

export type ViewportLayout = "compact" | "full";

export function useViewportLayout() {
  const [layout, setLayout] = React.useState<ViewportLayout | undefined>(undefined);

  React.useEffect(() => {
    const mql = window.matchMedia(
      `(min-width: ${VIEWPORT_BREAKPOINT_WIDTH + 1}px) and (min-height: ${VIEWPORT_BREAKPOINT_HEIGHT + 1}px)`
    );
    const onChange = () => {
      const isFull =
        window.innerWidth > VIEWPORT_BREAKPOINT_WIDTH &&
        window.innerHeight > VIEWPORT_BREAKPOINT_HEIGHT;
      setLayout(isFull ? "full" : "compact");
    };
    mql.addEventListener("change", onChange);
    onChange();
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return layout || "compact";
}
