import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageHeader
        title="Terms of Service"
        subtitle="Last updated: November 24, 2025"
      />

      <main className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="space-y-12 text-foreground">
            {/* Agreement */}
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service constitute a legally binding agreement
                made between you, whether personally or on behalf of an entity
                ("you") and TechCorp ("we," "us," or "our"), concerning your
                access to and use of the TechCorp website as well as any other
                media form, media channel, mobile website or mobile application
                related, linked, or otherwise connected thereto (collectively,
                the "Site").
              </p>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                2. Intellectual Property Rights
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Unless otherwise indicated, the Site is our proprietary property
                and all source code, databases, functionality, software, website
                designs, audio, video, text, photographs, and graphics on the
                Site (collectively, the "Content") and the trademarks, service
                marks, and logos contained therein (the "Marks") are owned or
                controlled by us or licensed to us, and are protected by
                copyright and trademark laws.
              </p>
            </section>

            {/* User Representations */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                3. User Representations
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By using the Site, you represent and warrant that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  All registration information you submit will be true,
                  accurate, current, and complete.
                </li>
                <li>
                  You have the legal capacity and you agree to comply with these
                  Terms of Service.
                </li>
                <li>
                  You are not a minor in the jurisdiction in which you reside.
                </li>
                <li>
                  You will not access the Site through automated or non-human
                  means, whether through a bot, script or otherwise.
                </li>
                <li>
                  You will not use the Site for any illegal or unauthorized
                  purpose.
                </li>
              </ul>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                4. Limitation of Liability
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event will we or our directors, employees, or agents be
                liable to you or any third party for any direct, indirect,
                consequential, exemplary, incidental, special, or punitive
                damages, including lost profit, lost revenue, loss of data, or
                other damages arising from your use of the site, even if we have
                been advised of the possibility of such damages.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-bold mb-4">5. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and defined following the laws
                of India. TechCorp and yourself irrevocably consent that the
                courts of Pune, India shall have exclusive jurisdiction to
                resolve any dispute which may arise in connection with these
                terms.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
