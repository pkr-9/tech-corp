import {
  ShieldCheck,
  Clock,
  Banknote,
  HeartHandshake,
  Lock,
  Globe,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const reasons = [
  {
    icon: Clock,
    title: "Rapid Time-to-Market",
    desc: "We use pre-built modules and CI/CD automation to reduce development time by up to 40%, getting you to revenue faster.",
  },
  {
    icon: Banknote,
    title: "Transparent Pricing",
    desc: "No hidden fees. Whether it's fixed-bid or time-and-materials, you get a detailed breakdown of every hour spent.",
  },
  {
    icon: ShieldCheck,
    title: "IP Protection",
    desc: "100% of the code and intellectual property belongs to you. We sign strict NDAs and transfer ownership upon delivery.",
  },
  {
    icon: HeartHandshake,
    title: "Client-Centric Approach",
    desc: "We don't just write code; we solve business problems. We act as your strategic partner, challenging assumptions to build better products.",
  },
  {
    icon: Lock,
    title: "Enterprise-Grade Security",
    desc: "Security is baked in, not bolted on. We follow OWASP best practices and GDPR/HIPAA compliance standards by default.",
  },
  {
    icon: Globe,
    title: "Timezone Alignment",
    desc: "Our team overlaps with major global timezones (EST, PST, GMT), ensuring real-time collaboration and smooth communication.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Why Global Brands Trust Us
          </h2>
          <p className="text-muted-foreground">
            We combine technical excellence with business acumen to deliver
            software that drives real growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item) => (
            <Card
              key={item.title}
              className="hover:border-primary/50 transition-colors duration-300"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
