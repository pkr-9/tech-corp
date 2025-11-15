import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedServices from "@/components/FeaturedServices";
import AboutSection from "@/components/AboutSection";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <FeaturedServices />
        <AboutSection />
        <Achievements />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
