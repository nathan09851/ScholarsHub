import { Quote, Star } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`opacity-0 ${isVisible ? "animate-fade-in" : ""}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <Card className="mesh-border h-full rounded-[28px] border-white/50 bg-white/85 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
        <CardContent className="space-y-5 p-6">
          <div className="flex items-center justify-between gap-3">
            <div className="inline-flex rounded-2xl bg-amber-100 p-3 text-amber-700">
              <Quote className="h-5 w-5" />
            </div>
            <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
              {[...Array(5)].map((_, index) => (
                <Star
                  key={`${name}-${index}`}
                  className={`h-4 w-4 ${
                    index < rating
                      ? "fill-amber-400 text-amber-400"
                      : "text-slate-300"
                  }`}
                />
              ))}
            </div>
          </div>
          <p className="text-base leading-7 text-slate-700">"{content}"</p>
          <div className="border-t border-slate-200 pt-4">
            <p className="font-semibold text-foreground">{name}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TestimonialCard;
