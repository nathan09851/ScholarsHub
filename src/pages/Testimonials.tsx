import { ExternalLink, ShieldCheck, Star } from "lucide-react";

import InquiryForm from "@/components/InquiryForm";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import SectionTitle from "@/components/SectionTitle";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig, testimonials } from "@/content/site";

const Testimonials = () => {
  const reviewsJsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Schoolars Hub",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "40",
      bestRating: "5",
    },
    review: testimonials.map((testimonial) => ({
      "@type": "Review",
      author: { "@type": "Person", name: testimonial.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: testimonial.rating,
        bestRating: 5,
      },
      reviewBody: testimonial.content,
    })),
  };

  return (
    <Layout>
      <SEO
        canonical="/testimonials"
        description="Read parent and student reviews about the Schoolars Hub learning experience in Goa."
        jsonLd={reviewsJsonLd}
        title="Schoolars Hub Reviews | Parent and student feedback"
      />

      <section className="section-shell pt-8">
        <div className="container px-4">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div className="surface-panel mesh-border p-7 md:p-8">
              <SectionTitle
                centered={false}
                eyebrow="Review proof"
                subtitle="This page now treats social proof as a decision driver, not a decorative section. Families can review feedback and still move directly into contact."
                title="Social proof presented where it helps most"
              />

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <Card className="rounded-[24px] border-slate-900/8 bg-slate-50/70 shadow-none">
                  <CardContent className="space-y-3 p-5">
                    <Star className="h-5 w-5 text-amber-500" />
                    <p className="font-serif text-3xl font-semibold text-foreground">
                      5.0/5
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Average review rating
                    </p>
                  </CardContent>
                </Card>
                <Card className="rounded-[24px] border-slate-900/8 bg-slate-50/70 shadow-none">
                  <CardContent className="space-y-3 p-5">
                    <ShieldCheck className="h-5 w-5 text-cyan-600" />
                    <p className="font-serif text-3xl font-semibold text-foreground">
                      40+
                    </p>
                    <p className="text-sm text-muted-foreground">Google reviews</p>
                  </CardContent>
                </Card>
                <Card className="rounded-[24px] border-slate-900/8 bg-slate-50/70 shadow-none">
                  <CardContent className="space-y-3 p-5">
                    <ExternalLink className="h-5 w-5 text-emerald-600" />
                    <p className="font-serif text-3xl font-semibold text-foreground">
                      Live
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Proof on Google listing
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8">
                <Button className="rounded-full px-7" size="lg" variant="hero" asChild>
                  <a href={siteConfig.googleReviewsUrl} rel="noreferrer" target="_blank">
                    View Google listing
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            <InquiryForm
              defaultIntent="callback"
              description="If the reviews are helpful and you want to ask about timings, subjects, or availability, use the form here."
              sourcePage="testimonials-page"
              title="Ready to ask a question?"
            />
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container px-4">
          <SectionTitle
            eyebrow="Testimonials"
            subtitle="These cards are now easier to scan, better spaced on mobile, and visually closer to the rest of the site."
            title="Feedback from parents and students"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                delay={index * 90}
                key={`${testimonial.name}-${index}`}
                {...testimonial}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
