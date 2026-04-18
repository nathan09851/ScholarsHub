import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import TestimonialCard from '@/components/TestimonialCard';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const testimonials = [
  {
    name: 'Sudesh Rivonkar',
    role: 'Google Review',
    content: 'The environment is friendly, and they give personal attention to each student.',
    rating: 5,
  },
  {
    name: 'Alka Rivonkar',
    role: 'Google Review',
    content: 'The study environment is professional and highly motivating.',
    rating: 5,
  },
  {
    name: 'Gaurish Kudalkar',
    role: 'Google Review',
    content: "It's really good experience here and teachers are really good.",
    rating: 5,
  },
];

const GOOGLE_REVIEWS_URL = 'https://share.google/IQD21xKvKrogKBaU4';

const Testimonials = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-card">
        <div className="container px-4">
          <SectionTitle
            title="Student Testimonials"
            subtitle="Hear from our students and parents about their transformative learning experiences at Schoolars Hub."
          />
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.name}
                {...testimonial}
                delay={index * 100}
              />
            ))}
          </div>

          <div className="mt-12 text-center space-y-4">
            <p className="text-muted-foreground">
              These reviews are from our verified Google Business listing.
            </p>
            <Button asChild variant="outline">
              <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
                Read more on Google
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <p className="text-5xl font-bold text-primary-foreground">5.0/5</p>
              <p className="text-primary-foreground/80">Average Rating</p>
            </div>
            <div className="space-y-2">
              <p className="text-5xl font-bold text-primary-foreground">40+</p>
              <p className="text-primary-foreground/80">Google Reviews</p>
            </div>
            <div className="space-y-2">
              <p className="text-5xl font-bold text-primary-foreground">100%</p>
              <p className="text-primary-foreground/80">Recommend Us</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
