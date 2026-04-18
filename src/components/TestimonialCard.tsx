import { Quote, Star } from "lucide-react";

import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  delay?: number;
}

const TestimonialCard = ({
  name,
  role,
  content,
  rating,
  delay = 0,
}: TestimonialCardProps) => {
  return (
    <AnimatedSection variant="fade-up" delay={delay}>
      <Card className="mesh-border card-hover flex h-full flex-col rounded-[24px] border-white/50 bg-white/85 shadow-md">
        <CardContent className="flex flex-1 flex-col gap-4 p-5">
          {/* Icon + stars */}
          <div className="flex items-center justify-between gap-3">
            <div
              aria-hidden="true"
              className="inline-flex rounded-xl bg-amber-100 p-2.5 text-amber-700 transition-transform duration-200 hover:scale-110"
            >
              <Quote className="h-4 w-4" />
            </div>
            <div
              className="flex gap-0.5"
              role="img"
              aria-label={`${rating} out of 5 stars`}
            >
              {[...Array(5)].map((_, index) => (
                <Star
                  key={`${name}-${index}`}
                  aria-hidden="true"
                  className={`h-3.5 w-3.5 transition-transform duration-150 ${
                    index < rating
                      ? "fill-amber-400 text-amber-400"
                      : "text-slate-300"
                  }`}
                  style={{ transitionDelay: `${index * 40}ms` }}
                />
              ))}
            </div>
          </div>

          {/* Quote */}
          <p className="flex-1 text-sm leading-7 text-slate-700">
            "{content}"
          </p>

          {/* Attribution */}
          <div className="border-t border-slate-200 pt-3">
            <p className="text-sm font-semibold text-foreground">{name}</p>
            <p className="text-xs text-muted-foreground">{role}</p>
          </div>
        </CardContent>
      </Card>
    </AnimatedSection>
  );
};

export default TestimonialCard;
