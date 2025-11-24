import { useState } from "react";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import CaseStudyCard, { CaseStudyProps } from "@/components/CaseStudyCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Dummy Data
const CASE_STUDIES: CaseStudyProps[] = [
  {
    id: "fintech-revolution",
    title: "Modernizing a Legacy Banking Platform",
    client: "GlobalFin Bank",
    category: "FinTech",
    description:
      "We migrated a monolithic banking system to a microservices architecture, enabling real-time transactions and 99.99% uptime.",
    imageUrl: "/casestudy/case-fintech.jpg",
    result: "40% reduction in server costs",
    tags: ["React", "Node.js", "AWS", "Docker"],
  },
  {
    id: "telehealth-app",
    title: "Secure Video Consultation App",
    client: "HealthConnect",
    category: "Healthcare",
    description:
      "A HIPAA-compliant mobile application allowing patients to book appointments and consult doctors via encrypted video calls.",
    imageUrl: "/casestudy/case-healthcare.jpg",
    result: "100k+ active users in year one",
    tags: ["React Native", "WebRTC", "Firebase", "TypeScript"],
  },
  {
    id: "ecommerce-scale",
    title: "Scaling for Black Friday Traffic",
    client: "ShopMax",
    category: "E-Commerce",
    description:
      "Optimization of a high-traffic e-commerce store to handle 50x traffic spikes during holiday sales events.",
    imageUrl: "/casestudy/case-ecommerce.jpg",
    result: "Zero downtime during peak sales",
    tags: ["Next.js", "Vercel", "Shopify API", "Redis"],
  },
  {
    id: "logistics-ai",
    title: "AI-Powered Route Optimization",
    client: "SwiftLogistics",
    category: "AI & ML",
    description:
      "Implementation of a machine learning model to optimize delivery routes, saving fuel and reducing delivery times.",
    imageUrl: "/casestudy/case-logistics.jpg",
    result: "25% savings in fuel costs",
    tags: ["Python", "TensorFlow", "Google Maps API"],
  },
];

const CATEGORIES = ["All", "FinTech", "Healthcare", "E-Commerce", "AI & ML"];

export default function CaseStudiesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredStudies =
    activeCategory === "All"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((study) => study.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        title="Case Studies"
        subtitle="Explore how we've helped businesses transform challenges into success stories through technology."
      />

      <main className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex justify-center mb-12">
            <Tabs
              defaultValue="All"
              className="w-full max-w-md"
              onValueChange={setActiveCategory}
            >
              <TabsList className="w-full grid grid-cols-3 sm:grid-cols-5 h-auto p-1">
                {CATEGORIES.map((cat) => (
                  <TabsTrigger
                    key={cat}
                    value={cat}
                    className="text-xs sm:text-sm px-2 py-2"
                  >
                    {cat}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study, index) => (
              <div
                key={study.id}
                /* CHANGED: Renamed class to avoid conflict */
                className="animate-card-entry"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                  animationFillMode: "forwards",
                }}
              >
                <CaseStudyCard {...study} />
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredStudies.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-xl font-semibold text-muted-foreground">
                No case studies found in this category.
              </h3>
            </div>
          )}
        </div>
      </main>

      <Footer />

      <style>{`
        /* CHANGED: Renamed keyframes to avoid conflict */
        @keyframes card-entry {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        /* CHANGED: Renamed class to match the div above */
        .animate-card-entry {
          animation: card-entry 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
