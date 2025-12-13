import { useParams, Navigate, Link } from "react-router-dom";
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
  HelpCircle,
  Briefcase,
} from "lucide-react";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// 1. Expanded Data Dictionary with Images
const SERVICE_DATA: Record<string, any> = {
  "web-development": {
    title: "Web Development",
    subtitle:
      "Scalable, high-performance web applications tailored to your business goals.",
    icon: Code2,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
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
    process: [
      {
        title: "Discovery",
        desc: "We analyze your requirements and define the technical architecture.",
      },
      {
        title: "Design",
        desc: "Creating wireframes and high-fidelity UI mockups.",
      },
      {
        title: "Development",
        desc: "Agile sprints with bi-weekly deliverables.",
      },
      {
        title: "Testing",
        desc: "Automated QA, security audits, and performance tuning.",
      },
      { title: "Deployment", desc: "CI/CD setup and go-live support." },
    ],
    faqs: [
      {
        q: "Do you use templates or build from scratch?",
        a: "We primarily build custom solutions from scratch to ensure scalability and performance, but we can utilize headless CMS templates if speed is the priority.",
      },
      {
        q: "How do you handle SEO?",
        a: "All our web apps are built with SEO best practices in mind, utilizing Server-Side Rendering (SSR) via Next.js for optimal indexing.",
      },
      {
        q: "Can you take over an existing project?",
        a: "Yes, we start with a code audit to assess the current state and then propose a roadmap for refactoring or feature development.",
      },
    ],
    relatedProject: "ecommerce-scale",
  },
  "mobile-development": {
    title: "Mobile Development",
    subtitle:
      "Native and cross-platform mobile experiences that delight users on iOS and Android.",
    icon: Smartphone,
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
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
    process: [
      {
        title: "Strategy",
        desc: "Platform selection (Native vs Cross-platform) and feature mapping.",
      },
      {
        title: "UI/UX",
        desc: "Mobile-first design ensuring touch-friendly interfaces.",
      },
      {
        title: "Development",
        desc: "Building the app with offline capabilities and API integration.",
      },
      {
        title: "Testing",
        desc: "Device lab testing across various screen sizes and OS versions.",
      },
      {
        title: "Launch",
        desc: "Handling the complex App Store and Play Store submission process.",
      },
    ],
    faqs: [
      {
        q: "Flutter vs React Native - which is better?",
        a: "It depends. React Native is great if you have a web team (JS/React skills). Flutter offers slightly better performance for complex animations. We help you choose based on your specific needs.",
      },
      {
        q: "How long does it take to build an app?",
        a: "A tailored MVP typically takes 3-4 months, while a full-featured enterprise app can take 6-12 months.",
      },
    ],
    relatedProject: "telehealth-app",
  },
  "cloud-solutions": {
    title: "Cloud & DevOps",
    subtitle:
      "Secure, scalable infrastructure automation to accelerate your deployment cycles.",
    icon: Cloud,
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
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
    process: [
      {
        title: "Audit",
        desc: "Analyzing current infrastructure for bottlenecks and security gaps.",
      },
      {
        title: "Architect",
        desc: "Designing a cloud-native topology using microservices.",
      },
      {
        title: "Migrate",
        desc: "Zero-downtime migration of data and services.",
      },
      {
        title: "Automate",
        desc: "Setting up CI/CD pipelines for one-click deployments.",
      },
      {
        title: "Optimize",
        desc: "Continuous monitoring and cost optimization.",
      },
    ],
    faqs: [
      {
        q: "How can you reduce our AWS bill?",
        a: "We implement auto-scaling, spot instances, and rightsizing of resources. We also audit unattached storage and idle load balancers.",
      },
      {
        q: "What is Infrastructure as Code?",
        a: "It means managing your servers via code (Terraform) rather than manual clicking. This prevents drift and allows you to recreate your entire environment in minutes.",
      },
    ],
    relatedProject: "fintech-revolution",
  },
  "ai-ml": {
    title: "AI & Machine Learning",
    subtitle:
      "Unlock the power of data with custom AI models and intelligent automation.",
    icon: BrainCircuit,
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
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
    process: [
      {
        title: "Data Prep",
        desc: "Cleaning and labeling data for model training.",
      },
      {
        title: "Modeling",
        desc: "Selecting and training the right algorithms (LLMs, CNNs, etc.).",
      },
      { title: "Evaluation", desc: "Testing model accuracy and bias." },
      {
        title: "Deployment",
        desc: "Containerizing models for production inference API.",
      },
      {
        title: "Tuning",
        desc: "Feedback loops to improve model performance over time.",
      },
    ],
    faqs: [
      {
        q: "Do we need a lot of data?",
        a: "Not necessarily. With pre-trained models (like GPT-4) and transfer learning, we can build powerful applications with smaller datasets.",
      },
      {
        q: "Is my data secure?",
        a: "Yes. We can deploy local LLMs (like Llama 3) on your own private cloud so sensitive data never leaves your infrastructure.",
      },
    ],
    relatedProject: "logistics-ai",
  },
  "qa-testing": {
    title: "QA & Testing",
    subtitle:
      "Rigorous testing protocols to ensure bug-free and reliable software releases.",
    icon: ShieldCheck,
    image: "/services/testing.jpg",
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
    process: [
      { title: "Plan", desc: "Defining test cases and acceptance criteria." },
      {
        title: "Setup",
        desc: "Configuring test environments and CI pipelines.",
      },
      {
        title: "Execute",
        desc: "Running automated scripts and manual exploratory testing.",
      },
      {
        title: "Report",
        desc: "Detailed bug reports with reproduction steps.",
      },
      {
        title: "Verify",
        desc: "Retesting fixes to ensure regression-free releases.",
      },
    ],
    faqs: [
      {
        q: "Do you do manual testing?",
        a: "Yes, while we prioritize automation, manual testing is crucial for UX/UI verification and complex edge cases.",
      },
      {
        q: "Can you test for security?",
        a: "Absolutely. We perform vulnerability scanning and penetration testing to identify potential security risks.",
      },
    ],
    relatedProject: "telehealth-app",
  },
  "ux-ui-design": {
    title: "UX/UI Design",
    subtitle:
      "User-centric interfaces that combine aesthetics with intuitive functionality.",
    icon: Layout,
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200&auto=format&fit=crop",
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
    process: [
      { title: "Research", desc: "Competitor analysis and user personas." },
      {
        title: "Wireframe",
        desc: "Low-fidelity layouts to establish structure.",
      },
      { title: "Prototype", desc: "Interactive high-fidelity mockups." },
      { title: "Test", desc: "User testing to validate assumptions." },
      { title: "Handoff", desc: "Design specs and assets for developers." },
    ],
    faqs: [
      {
        q: "Do you create the logo and branding?",
        a: "Yes, we can help with full brand identity, including logos, color palettes, and typography.",
      },
      {
        q: "What tools do you use?",
        a: "We primarily use Figma for collaboration, but we are flexible with Adobe XD or Sketch if required.",
      },
    ],
    relatedProject: "ecommerce-scale",
  },
};

export default function ServiceDetailPage() {
  const { serviceSlug } = useParams();
  const service = serviceSlug ? SERVICE_DATA[serviceSlug] : null;

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <PageHeader title={service.title} subtitle={service.subtitle} />

        {/* New Hero Image Section */}
        <div className="w-full h-[400px] overflow-hidden relative">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="py-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
              {/* Left Column: Content */}
              <div className="lg:col-span-2 space-y-16">
                {/* Overview */}
                <section>
                  <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-primary/10 text-primary">
                      <Icon className="w-6 h-6" />
                    </div>
                    Service Overview
                  </h2>
                  <div className="prose prose-lg text-muted-foreground leading-relaxed mb-8">
                    <p>{service.overview}</p>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-6">
                    Key Capabilities
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                </section>

                {/* Tech Stack */}
                <section className="bg-muted/30 rounded-2xl p-8 border border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-primary" />
                    Technologies We Use
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.techStack.map((tech: string) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-md bg-background border border-border text-sm font-medium text-muted-foreground shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>

                {/* Process Timeline (New Section) */}
                {service.process && (
                  <section>
                    <h3 className="text-2xl font-bold text-foreground mb-8">
                      Our Process
                    </h3>
                    <div className="relative border-l border-primary/20 ml-3 space-y-8 pb-4">
                      {service.process.map((step: any, idx: number) => (
                        <div key={idx} className="relative pl-8">
                          <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />
                          <h4 className="text-lg font-bold text-foreground">
                            {step.title}
                          </h4>
                          <p className="text-muted-foreground mt-1">
                            {step.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* FAQ Section (New Section) */}
                {service.faqs && (
                  <section>
                    <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                      <HelpCircle className="w-6 h-6 text-primary" />
                      Frequently Asked Questions
                    </h3>
                    <Accordion type="single" collapsible className="w-full">
                      {service.faqs.map((faq: any, idx: number) => (
                        <AccordionItem key={idx} value={`item-${idx}`}>
                          <AccordionTrigger className="text-left font-medium">
                            {faq.q}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            {faq.a}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </section>
                )}
              </div>

              {/* Right Column: Sticky Sidebar */}
              <div className="lg:col-span-1 space-y-8">
                {/* CTA Card */}
                <div className="sticky top-24 rounded-3xl border border-border bg-card p-8 shadow-3d">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Ready to Start?
                  </h3>
                  <p className="text-muted-foreground mb-8">
                    Let's discuss how our {service.title} services can help you
                    achieve your business goals.
                  </p>

                  <div className="space-y-4">
                    <Link to="/contact">
                      <Button
                        size="lg"
                        className="w-full bg-gradient-to-r from-primary to-primary-deep hover:from-primary-deep hover:to-primary shadow-lg hover:shadow-glow transition-all duration-300"
                      >
                        Get a Free Quote
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>

                    <div className="text-center pt-4 border-t border-border">
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
                </div>

                {/* Related Project Mini-Card */}
                {service.relatedProject && (
                  <div className="rounded-2xl border border-border bg-muted/20 p-6">
                    <div className="flex items-center gap-2 text-primary mb-4 text-sm font-bold uppercase tracking-wider">
                      <Briefcase className="w-4 h-4" />
                      Success Story
                    </div>
                    <h4 className="font-bold text-foreground mb-2">
                      See it in action
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Check out how we applied these skills for a real client.
                    </p>
                    <Link to={`/case-studies/${service.relatedProject}`}>
                      <Button variant="outline" size="sm" className="w-full">
                        View Case Study
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
