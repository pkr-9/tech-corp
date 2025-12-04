import { useState } from "react";
import {
  Heart,
  MonitorSmartphone,
  Zap,
  Globe,
  Coffee,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import type { JobProps } from "@/components/JobListingCard";
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

// OPEN_POSITIONS removed — the list was unused in the current page (job listing UI is commented out)

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<JobProps | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />
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

        {/* Open Positions - NO OPENINGS STATE */}
        <div className="mb-16">
          <h2
            className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            Open <span className="gradient-text">Positions</span>
          </h2>
          <div
            className="flex justify-center animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="glass-card p-10 max-w-2xl w-full text-center">
              <div className="mb-6 inline-flex p-4 rounded-full bg-muted/50">
                <Briefcase className="h-10 w-10 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">
                No Current Openings
              </h3>
              <p className="text-muted-foreground mb-6">
                We don't have any open roles at the moment, but things change
                fast here! Check back soon.
              </p>
            </div>
          </div>
        </div>
      </main>
      {/* Job Listings */}
      {/* <div
          className="text-center animate-slide-up"
          style={{ animationDelay: "0.5s" }}
        >
          <h3 className="text-2xl font-heading font-semibold mb-4">
            Want to be considered for future roles?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            We're always looking for talented people. Send your resume to us and
            we'll keep it on file.
          </p>
          <Button asChild size="lg" variant="outline" className="border-2">
            <a href="mailto:info@tenderlink.tech?subject=General Career Inquiry">
              <Mail className="h-4 w-4 mr-2" />
              Email Your Resume
            </a>
          </Button>
        </div> */}

      {/* ------------------------------------------------------------------ */}
      {/* Open Positions */}
      {/* <div className="mb-16">
          <h2
            className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            Open <span className="gradient-text">Positions</span>
          </h2>
          <div className="space-y-4">
            {jobOpenings.map((job, index) => (
              <Card
                key={index}
                className="glass-card p-4 md:p-6 flex flex-col md:flex-row justify-between md:items-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
              >
                <div>
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    {job.location} • {job.type}
                  </p>
                </div>
                <Button asChild className="mt-4 md:mt-0 md:w-auto w-full">
                  <a href={job.link}>Apply Now</a>
                </Button>
              </Card>
            ))}
          </div>
        </div> */}

      {/* No suitable position? */}
      {/* <div
          className="text-center animate-slide-up"
          style={{ animationDelay: "0.8s" }}
        >
          <h3 className="text-2xl font-heading font-semibold mb-4">
            Don't see a role that fits?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            We're always looking for talented people. Send your resume to us and
            we'll keep it on file.
          </p>
          <Button asChild size="lg" variant="outline" className="border-2">
            <a href="mailto:info@tenderlink.tech?subject=General Career Inquiry">
              <Mail className="h-4 w-4 mr-2" />
              Email Your Resume
            </a>
          </Button>
        </div> */}
      <Footer />
    </div>
  );
}
