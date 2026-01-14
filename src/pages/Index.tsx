import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import SubjectCard from '@/components/SubjectCard';
import TestimonialCard from '@/components/TestimonialCard';
import SectionTitle from '@/components/SectionTitle';
import StatsCard from '@/components/StatsCard';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import heroImage from '@/assets/hero-education.jpg';
import {
  Atom,
  Calculator,
  BookOpen,
  Languages,
  Globe,
  Landmark,
  MessageSquare,
  Users,
  Award,
  Clock,
  ArrowRight,
} from 'lucide-react';

const subjects = [
  {
    title: 'Science',
    description: 'Explore the wonders of physics, chemistry, and biology with hands-on experiments and interactive learning.',
    icon: Atom,
    color: 'bg-primary',
  },
  {
    title: 'Mathematics',
    description: 'Master mathematical concepts from basic arithmetic to advanced algebra with step-by-step guidance.',
    icon: Calculator,
    color: 'bg-chart-1',
  },
  {
    title: 'English',
    description: 'Develop strong reading, writing, and communication skills with comprehensive language training.',
    icon: BookOpen,
    color: 'bg-chart-2',
  },
  {
    title: 'Hindi',
    description: 'Enhance your Hindi language proficiency through grammar, literature, and conversational practice.',
    icon: Languages,
    color: 'bg-chart-3',
  },
  {
    title: 'Konkani',
    description: 'Preserve and learn the beautiful Konkani language with our specialized regional curriculum.',
    icon: MessageSquare,
    color: 'bg-chart-4',
  },
  {
    title: 'Geography',
    description: 'Discover the world through maps, climate studies, and understanding of physical landscapes.',
    icon: Globe,
    color: 'bg-secondary',
  },
  {
    title: 'History',
    description: 'Journey through time exploring civilizations, events, and the stories that shaped our world.',
    icon: Landmark,
    color: 'bg-chart-5',
  },
];

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Parent of Class 10 Student',
    content: 'My daughter\'s grades improved significantly after joining Schoolars Hub. The teachers are dedicated and the learning environment is excellent.',
    rating: 5,
  },
  {
    name: 'Rahul Naik',
    role: 'Class 12 Student',
    content: 'The science sessions here are amazing! The hands-on experiments really helped me understand complex concepts easily.',
    rating: 5,
  },
  {
    name: 'Anita Fernandes',
    role: 'Parent of Class 8 Student',
    content: 'Schoolars Hub has been a game-changer for my son. The personalized attention and regular feedback have made a huge difference.',
    rating: 5,
  },
];

const Index = () => {
  const heroRef = useScrollAnimation();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
        
        <div className="container relative z-10 px-4 py-20">
          <div className="max-w-2xl space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30">
              <span className="text-primary-foreground text-sm font-medium">Since 2021</span>
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary-foreground leading-tight">
              Welcome to <span className="text-primary">Schoolars Hub</span>
            </h1>
            
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Empowering students with quality education and personalized learning experiences. 
              Join us on a journey of academic excellence and holistic development.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/payments">
                  Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/subjects">Explore Subjects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatsCard icon={Users} value="500+" label="Students" delay={0} />
            <StatsCard icon={Award} value="95%" label="Success Rate" delay={100} />
            <StatsCard icon={Clock} value="4+" label="Years Experience" delay={200} />
            <StatsCard icon={BookOpen} value="7" label="Subjects Offered" delay={300} />
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-20">
        <div className="container px-4">
          <SectionTitle
            title="Our Subjects"
            subtitle="Comprehensive curriculum covering all essential subjects with expert guidance and innovative teaching methods."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
            {subjects.map((subject, index) => (
              <SubjectCard
                key={subject.title}
                {...subject}
                delay={index * 100}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="default" size="lg" asChild>
              <Link to="/subjects">
                View All Subjects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-card">
        <div className="container px-4">
          <SectionTitle
            title="What Our Students Say"
            subtitle="Hear from our students and parents about their experience with Schoolars Hub."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.name}
                {...testimonial}
                delay={index * 100}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/testimonials">
                Read More Reviews <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Join Schoolars Hub today and unlock your full potential with our expert guidance and comprehensive curriculum.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button variant="secondary" size="xl" asChild>
                <Link to="/payments">Enroll Now</Link>
              </Button>
              <Button variant="heroOutline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
