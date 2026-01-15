import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { CheckCircle2, CreditCard, Phone, Building2 } from 'lucide-react';

const plans = [
  {
    name: 'Class 5th to 8th',
    price: '₹700',
    period: '/month',
    description: 'Perfect for middle school students',
    features: [
      'All subjects included',
      'Regular classes: 3 PM - 6:30 PM',
      'Exam time: 3 PM - 8 PM',
      'Study materials included',
      'Doubt clearing sessions',
      'Progress reports',
    ],
    popular: false,
  },
  {
    name: 'Class 9th to 10th',
    price: '₹1,000',
    period: '/month',
    description: 'Comprehensive coaching for board preparation',
    features: [
      'All subjects included',
      'Regular classes: 3 PM - 6:30 PM',
      'Exam time: 3 PM - 8 PM',
      'All study materials',
      'Weekly doubt sessions',
      'Monthly progress reports',
      'Board exam preparation',
    ],
    popular: true,
  },
];

interface PricingCardProps {
  plan: typeof plans[0];
  index: number;
}

const PricingCard = ({ plan, index }: PricingCardProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <Card className={`h-full transition-all duration-300 hover:shadow-xl relative ${plan.popular ? 'border-primary border-2 scale-105' : ''}`}>
        {plan.popular && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <span className="bg-primary text-primary-foreground text-sm font-medium px-4 py-1 rounded-full">
              Most Popular
            </span>
          </div>
        )}
        <CardHeader className={`text-center ${plan.popular ? 'pt-8' : ''}`}>
          <CardTitle className="text-2xl">{plan.name}</CardTitle>
          <div className="mt-4">
            <span className="text-4xl font-bold text-foreground">{plan.price}</span>
            <span className="text-muted-foreground">{plan.period}</span>
          </div>
          <p className="text-muted-foreground text-sm mt-2">{plan.description}</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <ul className="space-y-3">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
          <Button
            variant={plan.popular ? 'hero' : 'default'}
            size="lg"
            className="w-full"
          >
            Enroll Now
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

const paymentMethods = [
  {
    icon: CreditCard,
    title: 'Online Payment',
    description: 'Pay securely using credit/debit cards, UPI, or net banking.',
  },
  {
    icon: Phone,
    title: 'UPI Payment',
    description: 'Quick payment via Google Pay, PhonePe, or Paytm.',
  },
  {
    icon: Building2,
    title: 'Bank Transfer',
    description: 'Direct bank transfer to our account. Details provided on request.',
  },
];

const Payments = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-card">
        <div className="container px-4">
          <SectionTitle
            title="Pricing & Payments"
            subtitle="Affordable plans designed to provide quality education. Choose the plan that best fits your needs."
          />
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan, index) => (
              <PricingCard key={plan.name} plan={plan} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20 bg-card">
        <div className="container px-4">
          <SectionTitle
            title="Payment Methods"
            subtitle="We offer multiple convenient payment options for your ease."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
            {paymentMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card key={method.title} className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardContent className="pt-8 space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground">{method.title}</h3>
                    <p className="text-muted-foreground text-sm">{method.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact for Custom Plans */}
      <section className="py-20 bg-primary">
        <div className="container px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground">
              Need a Custom Plan?
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Contact us for special group discounts, sibling packages, or custom learning plans tailored to your specific requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="secondary" size="xl">
                <Phone className="mr-2 h-5 w-5" />
                Call Us: +91 88303 68198
              </Button>
              <Button variant="secondary" size="xl">
                <Phone className="mr-2 h-5 w-5" />
                Call Us: +91 95793 39227
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Payments;
