import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        title="Privacy Policy"
        subtitle="Last updated: November 24, 2025"
      />

      <main className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="space-y-12 text-foreground">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                At TechCorp ("we," "our," or "us"), we respect your privacy and
                are committed to protecting your personal data. This privacy
                policy will inform you as to how we look after your personal
                data when you visit our website (regardless of where you visit
                it from) and tell you about your privacy rights and how the law
                protects you.
              </p>
            </section>

            {/* Data We Collect */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                2. The Data We Collect
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may collect, use, store, and transfer different kinds of
                personal data about you which we have grouped together follows:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong>Identity Data:</strong> includes first name, last
                  name, username or similar identifier.
                </li>
                <li>
                  <strong>Contact Data:</strong> includes billing address,
                  delivery address, email address, and telephone numbers.
                </li>
                <li>
                  <strong>Technical Data:</strong> includes internet protocol
                  (IP) address, your login data, browser type and version, time
                  zone setting and location, browser plug-in types and versions,
                  operating system and platform, and other technology on the
                  devices you use to access this website.
                </li>
                <li>
                  <strong>Usage Data:</strong> includes information about how
                  you use our website, products, and services.
                </li>
              </ul>
            </section>

            {/* How We Use Data */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                3. How We Use Your Data
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We will only use your personal data when the law allows us to.
                Most commonly, we will use your personal data in the following
                circumstances:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                <li>
                  Where we need to perform the contract we are about to enter
                  into or have entered into with you.
                </li>
                <li>
                  Where it is necessary for our legitimate interests (or those
                  of a third party) and your interests and fundamental rights do
                  not override those interests.
                </li>
                <li>Where we need to comply with a legal obligation.</li>
              </ul>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We have put in place appropriate security measures to prevent
                your personal data from being accidentally lost, used, or
                accessed in an unauthorized way, altered, or disclosed. In
                addition, we limit access to your personal data to those
                employees, agents, contractors, and other third parties who have
                a business need to know.
              </p>
            </section>

            {/* Contact Details */}
            <section className="bg-muted/30 p-8 rounded-2xl border border-border">
              <h2 className="text-2xl font-bold mb-4">5. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about this privacy policy or our
                privacy practices, please contact us at:
              </p>
              <div className="space-y-1 text-foreground font-medium">
                <p>TechCorp Inc.</p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:privacy@techcorp.com"
                    className="text-primary hover:underline"
                  >
                    privacy@techcorp.com
                  </a>
                </p>
                <p>Address: 123 TechCorp Plaza, GIGA SPACE, Pune, India</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
