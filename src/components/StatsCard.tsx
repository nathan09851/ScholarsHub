import { LucideIcon } from "lucide-react";

import { AnimatedCounter, AnimatedSection } from "@/components/AnimatedSection";

interface StatsCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  delay?: number;
}

const StatsCard = ({ icon: Icon, value, label, delay = 0 }: StatsCardProps) => {
  return (
    <AnimatedSection
      as="article"
      className="surface-panel mesh-border card-hover h-full p-5 text-left"
      variant="scale-in"
      delay={delay}
    >
      <div
        aria-hidden="true"
        className="mb-3 inline-flex rounded-xl bg-amber-100 p-2.5 text-amber-700 shadow-sm transition-transform duration-200 group-hover:scale-110"
      >
        <Icon className="h-5 w-5" />
      </div>
      <p className="font-serif text-3xl font-bold text-foreground">
        <AnimatedCounter value={value} delay={delay + 100} />
      </p>
      <p className="mt-1.5 text-sm leading-6 text-muted-foreground">{label}</p>
    </AnimatedSection>
  );
};

export default StatsCard;
