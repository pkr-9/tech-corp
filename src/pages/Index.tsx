// import StackingCards from "@/components/StackingCards";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedServices from "@/components/FeaturedServices";
import StickyProjectShowcase from "@/components/StickyProjectShowcase";
import TechStackMarquee from "@/components/TechStackMarquee";
import ProcessTimeline from "@/components/ProcessTimeline";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import LatestInsights from "@/components/LatestInsights";
import Achievements from "@/components/Achievements";
import FAQSection from "@/components/FAQSection";
import Certifications from "@/components/Certifications";
import ImmersiveCTA from "@/components/ImmersiveCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TechStackMarquee />
        <FeaturedServices />
        <StickyProjectShowcase />
        <WhyChooseUs />
        <ProcessTimeline />
        <AboutSection />
        <Achievements />
        <LatestInsights />
        <FAQSection />
        <Certifications />
        <ImmersiveCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
