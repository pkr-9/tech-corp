import { useParams, Navigate, Link } from "react-router-dom";
import {
  ShieldCheck,
  TrendingUp,
  Users,
  Zap,
  ArrowRight,
  CheckCircle2,
  Building2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Mock Data for Industries
const INDUSTRY_DATA: Record<string, any> = {
  fintech: {
    title: "FinTech Solutions",
    subtitle:
      "Secure, scalable, and compliant technology for the future of finance.",
    heroImage: "/FinTech.jpg",
    overview:
      "The financial sector demands zero compromise on security and speed. We help FinTech startups and established institutions build robust trading platforms, digital wallets, and banking interfaces that adhere to strict regulatory standards (PCI-DSS, GDPR).",
    challenges: [
      {
        title: "Regulatory Compliance",
        desc: "Navigating complex regulations like KYC, AML, and PSD2.",
      },
      {
        title: "Data Security",
        desc: "Protecting sensitive financial data from sophisticated cyber threats.",
      },
      {
        title: "High-Frequency Trading",
        desc: "Ensuring microsecond latency for trading algorithms.",
      },
    ],
    solutions: [
      { name: "Cloud & DevOps", link: "/services/cloud-solutions" },
      { name: "AI & Machine Learning", link: "/services/ai-ml" },
      { name: "Web Development", link: "/services/web-development" },
    ],
    stats: [
      { label: "Transactions Processed", value: "1B+" },
      { label: "Uptime Guaranteed", value: "99.99%" },
    ],
  },
  healthcare: {
    title: "Healthcare Technology",
    subtitle:
      "Digital health solutions that improve patient outcomes and streamline operations.",
    heroImage: "/Healthcare.jpg",
    overview:
      "We build HIPAA-compliant telehealth platforms, electronic health records (EHR) systems, and patient engagement apps. Our focus is on interoperability and data privacy, ensuring that healthcare providers can focus on what matters most: patient care.",
    challenges: [
      {
        title: "Data Interoperability",
        desc: "Connecting fragmented systems using HL7 and FHIR standards.",
      },
      {
        title: "Telemedicine Security",
        desc: "Encrypted video conferencing and secure messaging channels.",
      },
      {
        title: "IoT Integration",
        desc: "Connecting wearables and medical devices to central dashboards.",
      },
    ],
    solutions: [
      { name: "Mobile Development", link: "/services/mobile-development" },
      { name: "Cloud & DevOps", link: "/services/cloud-solutions" },
      { name: "QA & Testing", link: "/services/qa-testing" },
    ],
    stats: [
      { label: "Patient Records Secured", value: "5M+" },
      { label: "HIPAA Compliant", value: "100%" },
    ],
  },
  saas: {
    title: "SaaS Product Development",
    subtitle:
      "Launch and scale your subscription software with robust multi-tenant architecture.",
    heroImage: "/SaaS.jpg",
    overview:
      "From MVP to IPO, we support SaaS companies through every stage of growth. We design multi-tenant architectures, implement recurring billing systems (Stripe/Paddle), and create onboarding flows that maximize user retention.",
    challenges: [
      {
        title: "Tenant Isolation",
        desc: "Ensuring data separation in multi-tenant environments.",
      },
      {
        title: "Churn Reduction",
        desc: "Using analytics to identify and re-engage at-risk users.",
      },
      {
        title: "Global Scaling",
        desc: "Deploying to edge locations to reduce latency for global users.",
      },
    ],
    solutions: [
      { name: "Web Development", link: "/services/web-development" },
      { name: "UX/UI Design", link: "/services/ux-ui-design" },
      { name: "AI & Machine Learning", link: "/services/ai-ml" },
    ],
    stats: [
      { label: "SaaS Products Launched", value: "50+" },
      { label: "ARR Generated", value: "$100M+" },
    ],
  },
};

export default function IndustryDetailPage() {
  const { industrySlug } = useParams();
  const industry = industrySlug ? INDUSTRY_DATA[industrySlug] : null;

  if (!industry) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden flex items-center justify-center">
        <img
          src={industry.heroImage}
          alt={industry.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />

        <div className="relative z-10 text-center max-w-4xl px-6">
          <Badge className="mb-6 bg-primary/20 hover:bg-primary/30 text-primary border-primary/50 backdrop-blur-md">
            Industry Focus
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            {industry.title}
          </h1>
          <p className="text-xl text-muted-foreground">{industry.subtitle}</p>
        </div>
      </div>

      <main className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-bold mb-6">Overview</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {industry.overview}
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-8">
                  Industry Challenges We Solve
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {industry.challenges.map((challenge: any, idx: number) => (
                    <Card
                      key={idx}
                      className="bg-card border-border hover:border-primary/50 transition-colors"
                    >
                      <CardHeader>
                        <CardTitle className="flex items-start gap-3 text-lg">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                          {challenge.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          {challenge.desc}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Stats Section */}
              <section className="bg-primary/5 rounded-3xl p-8 border border-primary/10">
                <div className="grid grid-cols-2 gap-8 text-center">
                  {industry.stats.map((stat: any, idx: number) => (
                    <div key={idx}>
                      <div className="text-4xl font-bold text-foreground mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Specialized Services Widget */}
              <Card className="shadow-lg border-primary/20">
                <CardHeader className="bg-muted/50 pb-4">
                  <CardTitle className="text-lg">
                    Recommended Services
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <p className="text-sm text-muted-foreground mb-4">
                    Tailored tech stacks for {industry.title}:
                  </p>
                  {industry.solutions.map((sol: any) => (
                    <Link key={sol.name} to={sol.link}>
                      <div className="group flex items-center justify-between p-3 mb-2 rounded-lg hover:bg-primary/5 border border-transparent hover:border-primary/20 transition-all">
                        <span className="font-medium group-hover:text-primary transition-colors">
                          {sol.name}
                        </span>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                    </Link>
                  ))}
                </CardContent>
              </Card>

              {/* CTA Widget */}
              <div className="bg-gradient-to-br from-primary to-primary-deep rounded-2xl p-8 text-primary-foreground shadow-3d">
                <Building2 className="w-10 h-10 mb-4 opacity-80" />
                <h3 className="text-2xl font-bold mb-4">
                  Build for {industry.title}
                </h3>
                <p className="mb-6 opacity-90">
                  Ready to launch a compliant, scalable solution? Let's talk
                  strategy.
                </p>
                <Button
                  variant="secondary"
                  className="w-full font-semibold"
                  asChild
                >
                  <Link to="/contact">Consult an Expert</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
