import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import ContactDetailsMap from "@/components/ContactDetailsMap";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Reusable Page Header */}
        <PageHeader
          title="Get in Touch"
          subtitle="We'd love to hear from you. Whether you have a question about our services or just want to say hi, reach out and we'll get back to you soon."
        />

        {/* Main Content Section */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* 2-Column Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Column 1: Contact Form */}
              <div className="bg-card p-8 rounded-2xl shadow-soft border border-border">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Send us a Message
                </h2>
                <ContactForm />
              </div>

              {/* Column 2: Details & Map */}
              <div className="lg:mt-10">
                <ContactDetailsMap />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
