import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useViewportLayout } from "@/hooks/use-viewport-layout";

const Index = () => {
  const layout = useViewportLayout();
  const containerHeight = layout === "full" ? "h-screen" : "min-h-screen";

  return (
    <div className={`${containerHeight} bg-background font-mono flex flex-col`}>
      <Navbar />
      <Hero layoutMode={layout} />
      <Footer />
    </div>
  );
};

export default Index;
