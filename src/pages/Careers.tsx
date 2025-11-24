import { useState } from "react";
import {
  Heart,
  MonitorSmartphone,
  Zap,
  Globe,
  Coffee,
  GraduationCap,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import JobListingCard, { JobProps } from "@/components/JobListingCard";
import ApplicationForm from "@/components/ApplicationForm";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"; // Uses component from [cite: 501]

const BENEFITS = [
  {
    icon: MonitorSmartphone,
    title: "Remote First",
    desc: "Work from anywhere in the world. We focus on output, not hours.",
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    desc: "Comprehensive health insurance and monthly wellness stipend.",
  },
  {
    icon: GraduationCap,
    title: "Learning Budget",
    desc: "$2,000 annual allowance for courses, books, and conferences.",
  },
  {
    icon: Zap,
    title: "Latest Tech",
    desc: "We provide the latest MacBook Pros and budget for your home office.",
  },
  {
    icon: Globe,
    title: "Company Retreats",
    desc: "Annual all-expenses-paid team retreats to exotic locations.",
  },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    desc: "Unlimited PTO and mandatory minimum vacation days.",
  },
];

const OPEN_POSITIONS: JobProps[] = [
  {
    id: "1",
    title: "Senior React Developer",
    department: "Engineering",
    location: "Remote (Global)",
    type: "Full-time",
    description:
      "We're looking for an experienced frontend developer to lead our core product team. You'll be architecting scalable UIs using React, TypeScript, and Tailwind.",
  },
  {
    id: "2",
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote (US/EU)",
    type: "Full-time",
    description:
      "Help us build robust CI/CD pipelines and manage our AWS infrastructure. Experience with Kubernetes, Terraform, and Docker is a must.",
  },
  {
    id: "3",
    title: "Product Designer",
    department: "Design",
    location: "Remote (Global)",
    type: "Full-time",
    description:
      "Join our design team to craft beautiful, intuitive user experiences. You'll work closely with PMs and engineers to turn complex problems into simple flows.",
  },
  {
    id: "4",
    title: "Technical Content Writer",
    department: "Marketing",
    location: "Remote (Global)",
    type: "Contract",
    description:
      "We need someone who can explain complex technical concepts in simple terms. You'll be writing blog posts, documentation, and white papers.",
  },
];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<JobProps | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        title="Join the Team"
        subtitle="Help us build the future of software. We're looking for passionate individuals to solve hard problems."
      />

      <main>
        {/* Benefits Section */}
        <section className="py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">Why Work With Us?</h2>
              <p className="text-muted-foreground">
                We believe in taking care of our people. Here are just a few of
                the perks you'll enjoy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {BENEFITS.map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center p-6 bg-card rounded-2xl border border-border shadow-sm"
                >
                  <div className="p-3 bg-primary/10 rounded-full text-primary mb-4">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Listings */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div>
                <h2 className="text-3xl font-bold mb-2">Open Positions</h2>
                <p className="text-muted-foreground">
                  Find the role that fits you best.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {OPEN_POSITIONS.map((job) => (
                <JobListingCard
                  key={job.id}
                  job={job}
                  onApply={setSelectedJob}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Application Modal */}
      <Dialog
        open={!!selectedJob}
        onOpenChange={(open) => !open && setSelectedJob(null)}
      >
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Apply for {selectedJob?.title}</DialogTitle>
            <DialogDescription>
              {selectedJob?.department} • {selectedJob?.location}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-4">
            {selectedJob && (
              <ApplicationForm
                jobTitle={selectedJob.title}
                onSuccess={() => setSelectedJob(null)}
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
