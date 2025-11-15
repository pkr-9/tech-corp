import { ArrowRight, type LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Define the properties for the featured service
export interface FeaturedServiceProps {
  title: string;
  href: string;
  Icon: LucideIcon;
}

export default function FeaturedServiceCard({
  title,
  href,
  Icon,
}: FeaturedServiceProps) {
  return (
    <Card className="group relative flex flex-col h-full overflow-hidden rounded-2xl shadow-soft border border-border transition-all duration-300 hover:shadow-3d hover:-translate-y-2">
      <a href={href} className="block">
        <CardContent className="p-6">
          {/* Icon */}
          <div className="mb-4">
            <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-primary to-primary-deep shadow-lg transition-all duration-500 group-hover:scale-110">
              <Icon className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-foreground mb-3 transition-colors duration-300 group-hover:text-primary">
            {title}
          </h3>

          {/* Learn More Link */}
          <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all duration-300">
            <span>Learn more</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </CardContent>
      </a>
    </Card>
  );
}
