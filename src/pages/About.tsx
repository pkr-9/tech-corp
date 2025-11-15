import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Here is the new component in action */}
        <PageHeader
          title="About Us"
          subtitle="We are a team of passionate engineers, designers, and strategists dedicated to delivering world-class software solutions."
        />

        {/* You can now reuse the components from your homepage.
          For a real 'About' page, you might create new, more
          detailed components, but reusing is efficient.
        */}
        <div className="py-24">
          {/* This is a placeholder for your main page content.
            For example, you could put a "Our Mission" section here.
          */}
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Mission & Values
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
              (Your detailed "About Us" content would go here, perhaps in its
              own component. For now, we can just reuse the sections from the
              homepage below.)
            </p>
          </div>
        </div>

        {/* You can reuse other homepage sections as needed */}
        <Achievements />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}
