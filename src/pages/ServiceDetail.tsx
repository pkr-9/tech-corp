import { useParams, Navigate } from "react-router-dom";
import {
  CheckCircle2,
  ArrowRight,
  Code2,
  Smartphone,
  Cloud,
  BrainCircuit,
  ShieldCheck,
  Layout,
  Terminal,
} from "lucide-react";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// 1. Data Dictionary: Maps URL slugs to content
// This replaces fetching from a database for this static site.
const SERVICE_DATA: Record<string, any> = {
  "web-development": {
    title: "Web Development",
    subtitle:
      "Scalable, high-performance web applications tailored to your business goals.",
    icon: Code2,
    overview:
      "In today's digital-first world, your website is often the first touchpoint for customers. We build modern, responsive, and accessible web applications using the latest technologies like React, Next.js, and TypeScript. Whether you need a complex enterprise dashboard or a high-converting marketing site, our team delivers code that is clean, secure, and SEO-friendly.",
    features: [
      "Custom Single Page Applications (SPA)",
      "Progressive Web Apps (PWA)",
      "Enterprise Content Management Systems",
      "API Development & Integration",
      "Performance Optimization & SEO",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Vue.js",
      "Angular",
      "GraphQL",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Vercel",
      "Docker",
    ],
  },
  "mobile-development": {
    title: "Mobile Development",
    subtitle:
      "Native and cross-platform mobile experiences that delight users on iOS and Android.",
    icon: Smartphone,
    overview:
      "Reach your customers wherever they are with powerful mobile applications. We specialize in building cross-platform solutions using React Native and Flutter, allowing you to launch on both iOS and Android with a single codebase without compromising on performance or user experience.",
    features: [
      "Cross-platform development (React Native/Flutter)",
      "Native iOS (Swift) & Android (Kotlin) apps",
      "App Store & Play Store deployment",
      "Offline-first architecture",
      "Push notification integration",
    ],
    techStack: [
      "React Native",
      "Flutter",
      "Swift",
      "Kotlin",
      "Firebase",
      "Expo",
      "Dart",
      "SwiftUI",
      "Jetpack Compose",
      "SQLite",
      "Realm",
      "Objective-C",
    ],
  },
  "cloud-solutions": {
    title: "Cloud & DevOps",
    subtitle:
      "Secure, scalable infrastructure automation to accelerate your deployment cycles.",
    icon: Cloud,
    overview:
      "Move fast without breaking things. Our Cloud & DevOps services help you build a resilient infrastructure that scales automatically with your traffic. We automate your CI/CD pipelines, ensure top-tier security compliance, and optimize your cloud costs.",
    features: [
      "Cloud Migration (AWS, Azure, GCP)",
      "CI/CD Pipeline Automation",
      "Infrastructure as Code (Terraform/Ansible)",
      "Docker & Kubernetes Orchestration",
      "24/7 Monitoring & Alerting",
    ],
    techStack: [
      "AWS",
      "Azure",
      "Google Cloud",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Ansible",
      "Jenkins",
      "GitLab CI",
      "Prometheus",
      "Grafana",
      "Linux",
    ],
  },
  "ai-ml": {
    title: "AI & Machine Learning",
    subtitle:
      "Unlock the power of data with custom AI models and intelligent automation.",
    icon: BrainCircuit,
    overview:
      "Transform your business processes with Artificial Intelligence. From Natural Language Processing (NLP) chatbots to predictive analytics engines, we help you leverage your data to make smarter decisions and automate repetitive tasks.",
    features: [
      "Custom LLM & Chatbot Integration",
      "Predictive Analytics & Forecasting",
      "Computer Vision Solutions",
      "Recommendation Engines",
      "Process Automation Agents",
    ],
    techStack: [
      "Python",
      "TensorFlow",
      "OpenAI API",
      "PyTorch",
      "LangChain",
      "Scikit-learn",
      "Pandas",
      "Hugging Face",
      "Keras",
      "Apache Spark",
      "Jupyter",
      "MLOps",
    ],
  },
  "qa-testing": {
    title: "QA & Testing",
    subtitle:
      "Rigorous testing protocols to ensure bug-free and reliable software releases.",
    icon: ShieldCheck,
    overview:
      "Quality is not an afterthought; it's a continuous process. Our QA engineers work alongside developers to implement automated testing suites, ensuring that every release is stable, secure, and performs flawlessly under load.",
    features: [
      "Automated End-to-End Testing",
      "Performance & Load Testing",
      "Security Penetration Testing",
      "Mobile App Compatibility Testing",
      "API Testing Automation",
    ],
    techStack: [
      "Selenium",
      "Cypress",
      "Jest",
      "Postman",
      "JMeter",
      "Playwright",
      "Appium",
      "JUnit",
      "TestRail",
      "SoapUI",
      "Cucumber",
      "K6",
    ],
  },
  "ux-ui-design": {
    title: "UX/UI Design",
    subtitle:
      "User-centric interfaces that combine aesthetics with intuitive functionality.",
    icon: Layout,
    overview:
      "Great software starts with great design. Our design team creates intuitive, accessible, and beautiful interfaces that guide users effortlessly toward their goals. We use data-driven insights to prototype, test, and refine every interaction.",
    features: [
      "User Research & User Journeys",
      "Wireframing & Prototyping",
      "Design Systems & Component Libraries",
      "Interaction Design",
      "Accessibility (WCAG) Audits",
    ],
    techStack: [
      "Figma",
      "Adobe XD",
      "Sketch",
      "Framer",
      "Storybook",
      "InVision",
      "Zeplin",
      "Miro",
      "Principle",
      "Balsamiq",
      "Webflow",
    ],
  },
};

export default function ServiceDetailPage() {
  const { serviceSlug } = useParams();

  // 2. Lookup Content
  const service = serviceSlug ? SERVICE_DATA[serviceSlug] : null;

  // 3. Handle 404: If slug doesn't exist in data, redirect to 404 page
  if (!service) {
    return <Navigate to="/404" replace />;
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Header Section */}
        <PageHeader title={service.title} subtitle={service.subtitle} />

        {/* Main Content */}
        <div className="py-24 relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
              {/* Left Column: Content */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-primary/10 text-primary">
                    <Icon className="w-6 h-6" />
                  </div>
                  Service Overview
                </h2>
                <div className="prose prose-lg text-muted-foreground leading-relaxed mb-12">
                  <p>{service.overview}</p>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Key Capabilities
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                  {service.features.map((feature: string, index: number) => (
                    <Card
                      key={index}
                      className="border border-border/50 hover:border-primary/50 transition-colors shadow-sm"
                    >
                      <CardContent className="p-4 flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground/90 font-medium">
                          {feature}
                        </span>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Tech Stack Section */}
                <div className="bg-muted/30 rounded-2xl p-8 border border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-primary" />
                    Technologies We Use
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {service.techStack.map((tech: string) => (
                      <div
                        key={tech}
                        className="px-4 py-2 rounded-full bg-background border border-border text-sm font-medium text-muted-foreground shadow-sm"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: CTA Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 rounded-3xl border border-border bg-card p-8 shadow-3d">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Ready to Start?
                  </h3>
                  <p className="text-muted-foreground mb-8">
                    Let's discuss how our {service.title} services can help you
                    achieve your business goals.
                  </p>

                  <div className="space-y-4">
                    <Button
                      asChild
                      size="lg"
                      className="w-full bg-gradient-to-r from-primary to-primary-deep hover:from-primary-deep hover:to-primary shadow-lg hover:shadow-glow transition-all duration-300"
                    >
                      <a href="/contact">
                        Get a Free Quote
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    </Button>

                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-2">
                        Or call us directly
                      </p>
                      <a
                        href="tel:+915551234567"
                        className="text-foreground font-semibold hover:text-primary transition-colors"
                      >
                        +91 (555) 123-4567
                      </a>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-border">
                    <h4 className="font-semibold text-foreground mb-4">
                      Why TechCorp?
                    </h4>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span>100% On-Time Delivery</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span>Agile Methodology</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span>24/7 Support</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
