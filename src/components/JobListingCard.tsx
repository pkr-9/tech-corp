import { MapPin, Clock, Briefcase, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export interface JobProps {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

interface JobListingCardProps {
  job: JobProps;
  onApply: (job: JobProps) => void;
}

export default function JobListingCard({ job, onApply }: JobListingCardProps) {
  return (
    <Card className="flex flex-col h-full border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge variant="secondary" className="mb-2">
            {job.department}
          </Badge>
        </div>
        <h3 className="text-xl font-bold text-foreground">{job.title}</h3>
      </CardHeader>

      <CardContent className="flex-1 space-y-4">
        <p className="text-muted-foreground text-sm line-clamp-3">
          {job.description}
        </p>

        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4 text-primary" />
            {job.location}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-primary" />
            {job.type}
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <Button
          onClick={() => onApply(job)}
          className="w-full group bg-muted hover:bg-primary hover:text-white text-foreground transition-all duration-300"
          variant="ghost"
        >
          Apply Now
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardFooter>
    </Card>
  );
}
