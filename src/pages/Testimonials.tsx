import { ExternalLink, ShieldCheck, Star } from "lucide-react";
import { lazy, Suspense } from "react";

const InquiryForm = lazy(() => import("@/components/InquiryForm"));
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
        description="Read real reviews from parents and students at Schoolars Hub Goa. 5.0★ Google rating with 40+ verified reviews. See why families trust us for tuition support."
        jsonLd={reviewsJsonLd}
        title="Reviews & Testimonials — 5.0★ Google Rating | Schoolars Hub Goa"
      />

      <section className="section-shell pt-8" aria-labelledby="reviews-hero-heading">
        <div className="container px-4">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div className="surface-panel mesh-border p-7 md:p-8">
              <SectionTitle
                centered={false}
                eyebrow="Verified reviews"
                id="reviews-hero-heading"
                subtitle="See what real parents and students say about their experience. All reviews are from our verified Google listing."
                title="Trusted by families across Goa"
              />

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <Card className="rounded-[22px] border-slate-900/8 bg-slate-50/80 shadow-none">
                  <CardContent className="space-y-2 p-5">
                    <Star aria-hidden="true" className="h-5 w-5 text-amber-500" />
                    <p className="font-serif text-3xl font-bold text-foreground">
                      5.0/5
                    </p>
                    <p className="text-sm text-slate-600">
                      Average review rating
                    </p>
                  </CardContent>
                </Card>
                <Card className="rounded-[22px] border-slate-900/8 bg-slate-50/80 shadow-none">
                  <CardContent className="space-y-2 p-5">
                    <ShieldCheck aria-hidden="true" className="h-5 w-5 text-cyan-600" />
                    <p className="font-serif text-3xl font-bold text-foreground">
                      40+
                    </p>
                    <p className="text-sm text-slate-600">Google reviews</p>
                  </CardContent>
                </Card>
                <Card className="rounded-[22px] border-slate-900/8 bg-slate-50/80 shadow-none">
                  <CardContent className="space-y-2 p-5">
                    <ExternalLink aria-hidden="true" className="h-5 w-5 text-emerald-600" />
                    <p className="font-serif text-3xl font-bold text-foreground">
                      Live
                    </p>
                    <p className="text-sm text-slate-600">
                      Verified on Google
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8">
                <Button className="rounded-full px-7" size="lg" variant="hero" asChild>
                  <a
                    href={siteConfig.googleReviewsUrl}
                    rel="noreferrer"
                    target="_blank"
                    aria-label="View Schoolars Hub Google reviews (opens in new tab)"
                  >
                    View Google listing
                    <ExternalLink aria-hidden="true" className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            <Suspense
              fallback={
                <div className="h-[520px] animate-pulse rounded-[28px] bg-slate-900/40 border border-slate-800/60" aria-label="Loading inquiry form…" />
              }
            >
              <InquiryForm
                defaultIntent="callback"
                description="Liked what you've read? Ask us about timings, subjects, or availability directly."
                sourcePage="testimonials-page"
                title="Ready to ask a question?"
              />
            </Suspense>
          </div>
        </div>
      </section>

      <section className="section-shell" aria-labelledby="testimonials-grid-heading">
        <div className="container px-4">
          <SectionTitle
            eyebrow="What families say"
            id="testimonials-grid-heading"
            subtitle="Real feedback from parents and students who choose Schoolars Hub for tuition support."
            title="Parent and student reviews"
          />

          <div className="mt-10 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                delay={index * 80}
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
