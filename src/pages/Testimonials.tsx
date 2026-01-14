import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import TestimonialCard from '@/components/TestimonialCard';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Parent of Class 10 Student',
    content: 'My daughter\'s grades improved significantly after joining Schoolars Hub. The teachers are dedicated and the learning environment is excellent. I highly recommend this tuition center to all parents.',
    rating: 5,
  },
  {
    name: 'Rahul Naik',
    role: 'Class 12 Student',
    content: 'The science sessions here are amazing! The hands-on experiments really helped me understand complex concepts easily. I scored 95% in my board exams thanks to Schoolars Hub.',
    rating: 5,
  },
  {
    name: 'Anita Fernandes',
    role: 'Parent of Class 8 Student',
    content: 'Schoolars Hub has been a game-changer for my son. The personalized attention and regular feedback have made a huge difference in his academic performance.',
    rating: 5,
  },
  {
    name: 'Vikram Dessai',
    role: 'Class 9 Student',
    content: 'Mathematics was always my weakness, but the teachers at Schoolars Hub made it so easy to understand. Now it\'s my favorite subject! The step-by-step approach really works.',
    rating: 5,
  },
  {
    name: 'Sneha Kamat',
    role: 'Parent of Class 7 Student',
    content: 'What I love about Schoolars Hub is their focus on building strong fundamentals. My child not only gets good grades but also truly understands the concepts.',
    rating: 4,
  },
  {
    name: 'Rohan Prabhu',
    role: 'Class 11 Student',
    content: 'The Konkani classes here are exceptional. It\'s helping me connect with my roots while also excelling academically. The cultural aspect is a nice bonus!',
    rating: 5,
  },
  {
    name: 'Maria D\'Souza',
    role: 'Parent of Class 5 Student',
    content: 'Starting early with Schoolars Hub was the best decision. My daughter has developed a love for learning and is always excited about her classes.',
    rating: 5,
  },
  {
    name: 'Amit Vernekar',
    role: 'Class 10 Student',
    content: 'The history and geography classes are so engaging! The teachers use maps, timelines, and interactive methods that make learning fun and memorable.',
    rating: 5,
  },
  {
    name: 'Kavita Shetty',
    role: 'Parent of Class 12 Student',
    content: 'During the crucial board exam year, Schoolars Hub provided excellent support. The mock tests and revision sessions were incredibly helpful.',
    rating: 5,
  },
];

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.name}
                {...testimonial}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <p className="text-5xl font-bold text-primary-foreground">4.9/5</p>
              <p className="text-primary-foreground/80">Average Rating</p>
            </div>
            <div className="space-y-2">
              <p className="text-5xl font-bold text-primary-foreground">500+</p>
              <p className="text-primary-foreground/80">Happy Students</p>
            </div>
            <div className="space-y-2">
              <p className="text-5xl font-bold text-primary-foreground">98%</p>
              <p className="text-primary-foreground/80">Recommend Us</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
