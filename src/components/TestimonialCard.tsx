import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  delay?: number;
}

const TestimonialCard = ({ name, role, content, rating, delay = 0 }: TestimonialCardProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
        <CardContent className="pt-6 space-y-4">
          <Quote className="h-10 w-10 text-primary/30" />
          <p className="text-muted-foreground leading-relaxed italic">
            "{content}"
          </p>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < rating ? 'text-accent-foreground fill-accent-foreground' : 'text-muted'
                }`}
              />
            ))}
          </div>
          <div className="border-t border-border pt-4">
            <p className="font-semibold text-foreground">{name}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TestimonialCard;
