import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  GraduationCap,
  Target,
  Heart,
  Users,
  Mail,
  Phone,
  MapPin,
  Clock,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for academic excellence through innovative teaching methods and personalized attention.',
  },
  {
    icon: Heart,
    title: 'Care',
    description: 'Every student matters. We create a nurturing environment where students feel valued and supported.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Building a strong learning community where students, parents, and teachers work together.',
  },
  {
    icon: GraduationCap,
    title: 'Growth',
    description: 'Focused on holistic development - academic, personal, and social growth of every student.',
  },
];

const team = [
  {
    name: 'Dr. Ramesh Pai',
    role: 'Founder & Director',
    experience: '15+ years in education',
  },
  {
    name: 'Mrs. Sunita Kamat',
    role: 'Head of Academics',
    experience: '12+ years in education',
  },
  {
    name: 'Mr. Ajay Naik',
    role: 'Science Faculty',
    experience: '8+ years in education',
  },
  {
    name: 'Mrs. Priya Shetty',
    role: 'Mathematics Faculty',
    experience: '10+ years in education',
  },
];

const About = () => {
  const storyRef = useScrollAnimation();
  const valuesRef = useScrollAnimation();

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-card">
        <div className="container px-4">
          <SectionTitle
            title="About Schoolars Hub"
            subtitle="Empowering students since 2021 with quality education and personalized learning experiences."
          />
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              ref={storyRef.ref}
              className={`space-y-6 opacity-0 ${storyRef.isVisible ? 'animate-fade-in-left' : ''}`}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                Our Story
              </h2>
              <div className="w-20 h-1 bg-primary rounded-full" />
              <p className="text-muted-foreground leading-relaxed">
                Founded in 2021, Schoolars Hub began with a simple mission: to provide quality education that transforms students' lives. What started as a small coaching center has grown into a trusted institution serving hundreds of students across Goa.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our founder, Dr. Ramesh Pai, recognized the need for personalized education that goes beyond rote learning. With a team of dedicated educators, we've developed innovative teaching methods that make learning engaging and effective.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we offer comprehensive coaching in Science, Mathematics, English, Hindi, Konkani, Geography, and History - covering classes from 1st to 12th standard. Our success rate speaks for itself, with 95% of our students showing significant improvement in their academic performance.
              </p>
            </div>
            <div
              ref={valuesRef.ref}
              className={`opacity-0 ${valuesRef.isVisible ? 'animate-fade-in-right' : ''}`}
            >
              <div className="bg-primary/10 rounded-2xl p-8 space-y-6">
                <h3 className="text-2xl font-serif font-bold text-foreground">Quick Facts</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-bold">4+</span>
                    </div>
                    <span className="text-muted-foreground">Years of Excellence</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-bold">500+</span>
                    </div>
                    <span className="text-muted-foreground">Students Taught</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-bold">7</span>
                    </div>
                    <span className="text-muted-foreground">Subjects Offered</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-bold">95%</span>
                    </div>
                    <span className="text-muted-foreground">Success Rate</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-card">
        <div className="container px-4">
          <SectionTitle
            title="Our Values"
            subtitle="The principles that guide everything we do at Schoolars Hub."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardContent className="pt-8 space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto transition-transform duration-300 hover:scale-110">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="container px-4">
          <SectionTitle
            title="Our Team"
            subtitle="Meet the dedicated educators behind Schoolars Hub's success."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {team.map((member, index) => (
              <Card key={member.name} className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="pt-8 space-y-4">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-primary">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">{member.name}</h3>
                  <p className="text-primary text-sm font-medium">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-primary">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6 text-primary-foreground">
              <h2 className="text-3xl md:text-4xl font-serif font-bold">Get in Touch</h2>
              <p className="text-primary-foreground/80">
                Have questions or want to learn more about our programs? We'd love to hear from you!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5" />
                  <span>info@schoolarshub.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-0.5" />
                  <span>123 Education Lane, Panaji, Goa - 403001, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5" />
                  <span>Mon - Sat: 9:00 AM - 8:00 PM</span>
                </div>
              </div>
              
              <Button variant="secondary" size="lg" asChild>
                <Link to="/payments">Enroll Now</Link>
              </Button>
            </div>
            
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-primary-foreground mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:border-primary-foreground/50"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:border-primary-foreground/50"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:border-primary-foreground/50 resize-none"
                />
                <Button variant="secondary" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
