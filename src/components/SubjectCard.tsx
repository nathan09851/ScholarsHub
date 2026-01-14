import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface SubjectCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  delay?: number;
}

const SubjectCard = ({ title, description, icon: Icon, color, delay = 0 }: SubjectCardProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <Card className="group h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer overflow-hidden">
        <div className={`h-2 ${color}`} />
        <CardHeader className="pb-2">
          <div className={`w-14 h-14 rounded-lg ${color} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
            <Icon className="h-7 w-7 text-primary-foreground" />
          </div>
          <CardTitle className="text-xl group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
          <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all" asChild>
            <Link to="/subjects">Learn More</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SubjectCard;
