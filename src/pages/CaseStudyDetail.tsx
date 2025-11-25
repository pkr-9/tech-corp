import { useParams, Navigate, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, TrendingUp, Layers, Cpu } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// 1. Define the interface for the detailed data
interface CaseStudyDetail {
  id: string;
  title: string;
  client: string;
  category: string;
  date: string;
  heroImage: string;
  challenge: string;
  solution: string;
  results: string[];
  techStack: string[];
}

// 2. The Full Data Dictionary for all 4 Case Studies
const CASE_STUDY_DATA: Record<string, CaseStudyDetail> = {
  "fintech-revolution": {
    id: "fintech-revolution",
    title: "Modernizing a Legacy Banking Platform",
    client: "GlobalFin Bank",
    category: "FinTech",
    date: "Sept 2024",
    heroImage: "/casestudy/case-fintech.jpg",
    challenge:
      "GlobalFin was operating on a 15-year-old monolithic architecture that was prone to downtime during high-volume trading hours. They needed to modernize their stack to support real-time payments and mobile banking features without disrupting existing operations, all while maintaining strict regulatory compliance (PCI-DSS).",
    solution:
      "We implemented a 'strangler-fig' migration pattern to gradually move services to a microservices architecture hosted on AWS. We utilized Docker for containerization and Kubernetes for orchestration. We also built a real-time event streaming pipeline using Apache Kafka to handle millions of transactions per second.",
    results: [
      "40% reduction in monthly server costs via auto-scaling",
      "99.99% system uptime achieved during peak loads",
      "Deployment time reduced from 2 days to 2 hours",
      "Real-time fraud detection latency reduced to <100ms",
    ],
    techStack: [
      "React",
      "Node.js",
      "AWS Lambda",
      "Kafka",
      "Docker",
      "Kubernetes",
    ],
  },
  "telehealth-app": {
    id: "telehealth-app",
    title: "Secure Video Consultation App",
    client: "HealthConnect",
    category: "Healthcare",
    date: "August 2024",
    heroImage: "/casestudy/case-healthcare.jpg",
    challenge:
      "HealthConnect needed a HIPAA-compliant mobile application to allow patients to book appointments and consult doctors remotely. The biggest technical hurdle was ensuring high-quality video streaming over poor cellular connections while maintaining end-to-end encryption for patient privacy.",
    solution:
      "We built a cross-platform mobile app using React Native to ensure code consistency across iOS and Android. For video, we integrated WebRTC with a custom adaptive bitrate algorithm to handle fluctuating network speeds. We secured all data at rest and in transit using AES-256 encryption.",
    results: [
      "100k+ active users acquired in the first year",
      "4.8/5 star rating on App Store and Play Store",
      "Reduced average patient wait times by 60%",
      "Zero security breaches or HIPAA violations",
    ],
    techStack: ["React Native", "WebRTC", "Firebase", "TypeScript", "Node.js"],
  },
  "ecommerce-scale": {
    id: "ecommerce-scale",
    title: "Scaling for Black Friday Traffic",
    client: "ShopMax",
    category: "E-Commerce",
    date: "Nov 2023",
    heroImage: "/casestudy/case-ecommerce.jpg",
    challenge:
      "ShopMax experienced site crashes during previous holiday sales due to traffic spikes of up to 50x normal load. Their database was a bottleneck, and their frontend page load speeds were causing high cart abandonment rates.",
    solution:
      "We implemented a headless commerce architecture using Next.js for the frontend, deployed on Vercel's Edge Network for global caching. We migrated their database to a managed, auto-scaling SQL solution and implemented Redis caching for frequently accessed product data.",
    results: [
      "Zero downtime during Black Friday & Cyber Monday",
      "Page load speed improved by 300% (under 800ms)",
      "Conversion rate increased by 25%",
      "Handling 50k+ concurrent users seamlessly",
    ],
    techStack: ["Next.js", "Vercel", "Shopify API", "Redis", "PostgreSQL"],
  },
  "logistics-ai": {
    id: "logistics-ai",
    title: "AI-Powered Route Optimization",
    client: "SwiftLogistics",
    category: "AI & ML",
    date: "Jan 2025",
    heroImage: "/casestudy/case-logistics.jpg",
    challenge:
      "SwiftLogistics was losing millions annually due to inefficient delivery routes and rising fuel costs. They had vast amounts of historical delivery data but no way to leverage it for predictive planning.",
    solution:
      "We developed a custom Machine Learning model using TensorFlow to analyze traffic patterns, delivery windows, and vehicle capacity. We integrated this model into a dashboard that generates optimal daily routes for drivers in real-time.",
    results: [
      "25% savings in monthly fuel costs",
      "15% increase in daily deliveries per driver",
      "On-time delivery rate improved to 98%",
      "ROI achieved within 6 months of deployment",
    ],
    techStack: ["Python", "TensorFlow", "Google Maps API", "React", "FastAPI"],
  },
};

export default function CaseStudyDetailPage() {
  const { id } = useParams();

  // 3. Lookup the specific case study based on the URL ID
  const study = id ? CASE_STUDY_DATA[id] : null;

  // 4. Handle invalid IDs
  if (!study) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Banner */}
        <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
          <img
            src={study.heroImage}
            alt={study.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
            <Badge className="mb-4 bg-primary text-white hover:bg-primary border-none px-4 py-1 text-base">
              {study.category}
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl mb-6 leading-tight">
              {study.title}
            </h1>
            <div className="flex flex-col sm:flex-row items-center gap-4 text-gray-200 text-lg">
              <span className="font-semibold">{study.client}</span>
              <span className="hidden sm:inline">•</span>
              <span>Completed: {study.date}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-5xl px-6 py-24">
          <Link to="/case-studies">
            <Button
              variant="ghost"
              className="mb-12 -ml-4 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="mr-2 w-4 h-4" /> Back to Case Studies
            </Button>
          </Link>

          <div className="grid gap-16">
            {/* Challenge & Solution Grid */}
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-primary mb-2">
                  <TrendingUp className="w-6 h-6" />
                  <h2 className="text-2xl font-bold text-foreground">
                    The Challenge
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {study.challenge}
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-primary mb-2">
                  <Layers className="w-6 h-6" />
                  <h2 className="text-2xl font-bold text-foreground">
                    The Solution
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {study.solution}
                </p>
              </div>
            </div>

            {/* Results Section */}
            <div className="bg-gradient-to-br from-muted/50 to-background rounded-3xl p-8 md:p-12 border border-border shadow-soft">
              <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
                Key Results
              </h2>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                {study.results.map((result, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border/50 shadow-sm"
                  >
                    <div className="p-2 rounded-full bg-green-500/10 text-green-600 mt-0.5">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <span className="text-lg font-medium text-foreground leading-snug">
                      {result}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Cpu className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">
                  Technologies Used
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {study.techStack.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="px-4 py-2 text-sm text-primary font-medium bg-muted hover:bg-muted-foreground/20 transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-primary/5 border-y border-primary/10 py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Have a similar project in mind?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
              We can help you achieve results like {study.client}. Let's discuss
              your specific requirements and build something great together.
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 h-12 shadow-lg hover:shadow-glow transition-all duration-300"
            >
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
