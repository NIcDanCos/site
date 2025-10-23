import Hero from "@/components/Hero";
import { useViewportLayout } from "@/hooks/use-viewport-layout";

const Index = () => {
  const layout = useViewportLayout();
  const containerHeight = layout === "full" ? "h-screen" : "min-h-screen";

  return (
    <div className={`${containerHeight} bg-background font-mono flex flex-col`}>
      <Hero layoutMode={layout} />
    </div>
  );
};

export default Index;
