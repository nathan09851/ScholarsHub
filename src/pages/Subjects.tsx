import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  Atom,
  Calculator,
  BookOpen,
  Languages,
  Globe,
  Landmark,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const subjects = [
  {
    title: 'Science',
    description: 'Explore the wonders of physics, chemistry, and biology with hands-on experiments and interactive learning.',
    icon: Atom,
    color: 'bg-primary',
    topics: ['Physics fundamentals', 'Chemistry experiments', 'Biology concepts', 'Lab practicals'],
    grades: 'Classes 5-12',
  },
  {
    title: 'Mathematics',
    description: 'Master mathematical concepts from basic arithmetic to advanced algebra with step-by-step guidance.',
    icon: Calculator,
    color: 'bg-chart-1',
    topics: ['Algebra & Geometry', 'Trigonometry', 'Statistics', 'Problem solving'],
    grades: 'Classes 1-12',
  },
  {
    title: 'English',
    description: 'Develop strong reading, writing, and communication skills with comprehensive language training.',
    icon: BookOpen,
    color: 'bg-chart-2',
    topics: ['Grammar & Vocabulary', 'Creative writing', 'Literature analysis', 'Speaking skills'],
    grades: 'Classes 1-12',
  },
  {
    title: 'Hindi',
    description: 'Enhance your Hindi language proficiency through grammar, literature, and conversational practice.',
    icon: Languages,
    color: 'bg-chart-3',
    topics: ['Hindi grammar', 'Literature', 'Essay writing', 'Comprehension'],
    grades: 'Classes 1-10',
  },
  {
    title: 'Konkani',
    description: 'Preserve and learn the beautiful Konkani language with our specialized regional curriculum.',
    icon: MessageSquare,
    color: 'bg-chart-4',
    topics: ['Konkani script', 'Local literature', 'Cultural studies', 'Conversational skills'],
    grades: 'Classes 1-10',
  },
  {
    title: 'Geography',
    description: 'Discover the world through maps, climate studies, and understanding of physical landscapes.',
    icon: Globe,
    color: 'bg-secondary',
    topics: ['Physical geography', 'Map reading', 'Climate & Weather', 'World geography'],
    grades: 'Classes 5-12',
  },
  {
    title: 'History',
    description: 'Journey through time exploring civilizations, events, and the stories that shaped our world.',
    icon: Landmark,
    color: 'bg-chart-5',
    topics: ['Ancient civilizations', 'Medieval history', 'Modern India', 'World history'],
    grades: 'Classes 5-12',
  },
];

interface SubjectDetailCardProps {
  subject: typeof subjects[0];
  index: number;
}

const SubjectDetailCard = ({ subject, index }: SubjectDetailCardProps) => {
  const { ref, isVisible } = useScrollAnimation();
  const Icon = subject.icon;

  return (
    <div
      ref={ref}
      className={`opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <Card className="h-full transition-all duration-300 hover:shadow-xl">
        <div className={`h-2 ${subject.color}`} />
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className={`w-16 h-16 rounded-lg ${subject.color} flex items-center justify-center transition-transform duration-300 hover:scale-110`}>
              <Icon className="h-8 w-8 text-primary-foreground" />
            </div>
            <span className="px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full">
              {subject.grades}
            </span>
          </div>
          <CardTitle className="text-2xl mt-4">{subject.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">{subject.description}</p>
          <div className="space-y-2">
            <h4 className="font-semibold text-foreground text-sm">Topics Covered:</h4>
            <ul className="space-y-1">
              {subject.topics.map((topic) => (
                <li key={topic} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  {topic}
                </li>
              ))}
            </ul>
          </div>
          <Button variant="default" className="w-full mt-4" asChild>
            <Link to="/payments">
              Enroll for {subject.title} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

const Subjects = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-card">
        <div className="container px-4">
          <SectionTitle
            title="Our Subjects"
            subtitle="Explore our comprehensive curriculum designed to help students excel in every subject with expert guidance and innovative teaching methods."
          />
        </div>
      </section>

      {/* Subjects Grid */}
      <section className="py-20">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subjects.map((subject, index) => (
              <SubjectDetailCard key={subject.title} subject={subject} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground">
              Need Help Choosing?
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Contact us for a free consultation and we'll help you create a personalized learning plan.
            </p>
            <Button variant="secondary" size="xl" asChild>
              <Link to="/about">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Subjects;
