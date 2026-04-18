import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SubjectCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  grades: string;
  outcomes?: string[];
  delay?: number;
}

const SubjectCard = ({
  title,
  description,
  icon: Icon,
  accent,
  grades,
  outcomes = [],
  delay = 0,
}: SubjectCardProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`opacity-0 ${isVisible ? "animate-fade-in" : ""}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <Card className="mesh-border group h-full overflow-hidden rounded-[28px] border-white/50 bg-white/85 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div className={`h-1.5 bg-gradient-to-r ${accent}`} />
        <CardHeader className="space-y-5 pb-4">
          <div className="flex items-start justify-between gap-4">
            <div
              className={`inline-flex rounded-2xl bg-gradient-to-br ${accent} p-3 text-slate-950 shadow-sm`}
            >
              <Icon className="h-6 w-6" />
            </div>
            <span className="rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
              {grades}
            </span>
          </div>
          <div>
            <CardTitle className="font-serif text-2xl font-semibold text-foreground transition-colors group-hover:text-secondary">
              {title}
            </CardTitle>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {description}
            </p>
          </div>
        </CardHeader>
        <CardContent className="space-y-5">
          {outcomes.length > 0 ? (
            <ul className="flex flex-wrap gap-2">
              {outcomes.map((item) => (
                <li
                  className="rounded-full bg-slate-900/5 px-3 py-1 text-xs font-medium text-slate-600"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
          <Button className="w-full rounded-2xl" size="lg" variant="outline" asChild>
            <Link to="/subjects">See subject details</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SubjectCard;
