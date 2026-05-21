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
      <Card className="mesh-border card-hover h-full rounded-[24px] border-border/50 bg-card/85 shadow-md">
        <CardContent className="flex flex-col sm:flex-row gap-5 lg:gap-8 p-6 md:p-7">
          {/* Avatar / Icon & Attribution side */}
          <div className="flex min-w-[200px] shrink-0 flex-col gap-3 border-b border-border/60 pb-4 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-4">
            <div
              aria-hidden="true"
              className="theme-icon w-fit p-2.5 transition-transform duration-200 hover:scale-[1.02]"
            >
              <Quote className="h-6 w-6" />
            </div>
            
            <div className="mt-1">
              <p className="text-sm font-semibold text-foreground">{name}</p>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{role}</p>
            </div>
          </div>

          {/* Quote & Rating side */}
          <div className="flex flex-1 flex-col gap-3 justify-center">
            <div
              className="flex gap-0.5"
              role="img"
              aria-label={`${rating} out of 5 stars`}
            >
              {[...Array(5)].map((_, index) => (
                <Star
                  key={`${name}-${index}`}
                  aria-hidden="true"
                  className={`h-4 w-4 transition-transform duration-150 ${
                    index < rating
                      ? "fill-amber-400 text-amber-400"
                      : "text-muted-foreground/35"
                  }`}
                  style={{ transitionDelay: `${index * 40}ms` }}
                />
              ))}
            </div>

            <p className="text-sm sm:text-base leading-7 text-muted-foreground font-serif italic">
              "{content}"
            </p>
          </div>
        </CardContent>
      </Card>
    </AnimatedSection>
  );
};

export default TestimonialCard;
