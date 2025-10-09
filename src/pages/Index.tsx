import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-mono flex flex-col">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default Index;
