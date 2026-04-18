import { LucideIcon } from "lucide-react";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface StatsCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  delay?: number;
}

const StatsCard = ({ icon: Icon, value, label, delay = 0 }: StatsCardProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <article
      ref={ref}
      className={`surface-panel mesh-border h-full p-5 text-left opacity-0 transition-transform duration-300 hover:-translate-y-1 ${
        isVisible ? "animate-scale-in" : ""
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-4 inline-flex rounded-2xl bg-amber-100 p-3 text-amber-700 shadow-sm">
        <Icon className="h-5 w-5" />
      </div>
      <p className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
        {value}
      </p>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{label}</p>
    </article>
  );
};

export default StatsCard;
