import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  delay?: number;
}

const StatsCard = ({ icon: Icon, value, label, delay = 0 }: StatsCardProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`text-center opacity-0 ${isVisible ? 'animate-scale-in' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:scale-110">
        <Icon className="h-8 w-8 text-primary" />
      </div>
      <p className="text-3xl md:text-4xl font-bold text-foreground">{value}</p>
      <p className="text-muted-foreground">{label}</p>
    </div>
  );
};

export default StatsCard;
