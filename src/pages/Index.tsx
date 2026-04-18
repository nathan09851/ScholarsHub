import {
  ArrowRight,
  BadgeCheck,
  BookMarked,
  Clock3,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

import heroImage from "@/assets/schoolars-group.jpg";
import InquiryForm from "@/components/InquiryForm";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import SectionTitle from "@/components/SectionTitle";
import StatsCard from "@/components/StatsCard";
import SubjectCard from "@/components/SubjectCard";
import TestimonialCard from "@/components/TestimonialCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  campusLocations,
  faqs,
  heroHighlights,
  learningApproach,
  proofStats,
  siteConfig,
  subjects,
  testimonials,
  trustSignals,
} from "@/content/site";
import { localBusinessJsonLd } from "@/lib/structuredData";

const Index = () => {
  return (
    <Layout>
      <SEO
        canonical="/"
        description="Schoolars Hub offers structured tuition support in Goa with a stronger parent experience, transparent fees, and secure inquiry flow."
        jsonLd={localBusinessJsonLd}
        title="Schoolars Hub | Tuition support in Goa with stronger parent trust"
      />

      <section className="section-shell overflow-hidden pt-6 md:pt-10">
        <div className="container px-4">
          <div className="hero-glow relative overflow-hidden rounded-[36px] border border-white/12 px-6 py-8 text-white shadow-2xl sm:px-8 lg:px-10 lg:py-10">
            <div className="absolute inset-y-0 right-0 hidden w-[42%] lg:block">
              <img
                alt="Students learning together at Schoolars Hub"
                className="h-full w-full object-cover opacity-30"
                height={1080}
                loading="eager"
                src={heroImage}
                width={1080}
              />
            </div>

            <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div className="max-w-3xl space-y-8">
                <div className="section-eyebrow border-white/15 bg-white/10 text-white/78">
                  Since {siteConfig.foundedYear}
                </div>

                <div className="space-y-5">
                  <h1 className="font-serif text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                    Tuition support that feels clear, credible, and parent-ready.
                  </h1>
                  <p className="max-w-2xl text-base leading-7 text-white/76 md:text-lg">
                    {siteConfig.brandName} helps students across Goa stay on top of
                    schoolwork with focused subject guidance, cleaner enrollment
                    steps, and a stronger experience for families from first visit
                    to follow-up.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {heroHighlights.map((highlight) => (
                    <div
                      className="flex items-start gap-3 rounded-[22px] border border-white/12 bg-white/8 px-4 py-4"
                      key={highlight}
                    >
                      <BadgeCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-300" />
                      <p className="text-sm leading-6 text-white/82">{highlight}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button className="min-h-12 rounded-full px-7" size="xl" variant="hero" asChild>
                    <Link to="/payments">
                      View fees and enroll
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    className="min-h-12 rounded-full border-white/20 bg-white/8 px-7 text-white hover:bg-white/14 hover:text-white"
                    size="xl"
                    variant="outline"
                    asChild
                  >
                    <Link to="/subjects">Explore subjects</Link>
                  </Button>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <Card className="border-white/12 bg-white/10 text-white shadow-none">
                    <CardContent className="flex items-center gap-3 p-4">
                      <ShieldCheck className="h-5 w-5 text-amber-300" />
                      <div>
                        <p className="text-sm font-semibold">Secure inquiry path</p>
                        <p className="text-xs text-white/65">
                          Validated form flow for parent requests
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-white/12 bg-white/10 text-white shadow-none">
                    <CardContent className="flex items-center gap-3 p-4">
                      <Clock3 className="h-5 w-5 text-cyan-300" />
                      <div>
                        <p className="text-sm font-semibold">Clear timings</p>
                        <p className="text-xs text-white/65">
                          Regular and exam-time schedules explained
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-white/12 bg-white/10 text-white shadow-none">
                    <CardContent className="flex items-center gap-3 p-4">
                      <MapPin className="h-5 w-5 text-emerald-300" />
                      <div>
                        <p className="text-sm font-semibold">Two Goa centres</p>
                        <p className="text-xs text-white/65">
                          Thivim and Corlim campus access
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <InquiryForm
                defaultIntent="callback"
                description="Ask about class fit, fee details, timings, or subject support. The form is designed to be clearer for parents and safer for the backend."
                sourcePage="home-hero"
                title="Request a callback"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pt-8">
        <div className="container px-4">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {proofStats.map((stat, index) => (
              <StatsCard
                delay={index * 100}
                icon={stat.icon}
                key={stat.label}
                label={stat.label}
                value={stat.value}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container px-4">
          <SectionTitle
            eyebrow="Why this redesign matters"
            subtitle="The site now does a better job of reducing parent uncertainty, showing proof, and guiding families toward the right next step."
            title="A calmer and more trustworthy journey for families"
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {trustSignals.map((signal) => {
              const Icon = signal.icon;
              return (
                <Card
                  className="mesh-border rounded-[28px] border-white/50 bg-white/85 shadow-lg"
                  key={signal.title}
                >
                  <CardContent className="space-y-5 p-6">
                    <div className="inline-flex rounded-2xl bg-slate-950 p-3 text-amber-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-serif text-2xl font-semibold text-foreground">
                        {signal.title}
                      </h3>
                      <p className="text-sm leading-7 text-muted-foreground">
                        {signal.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container px-4">
          <SectionTitle
            eyebrow="Subject coverage"
            subtitle="Every subject card now explains grade fit and expected outcomes, which makes the offer much clearer for both parents and students."
            title="Subjects presented with more clarity"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {subjects.map((subject, index) => (
              <SubjectCard
                accent={subject.accent}
                delay={index * 70}
                description={subject.description}
                grades={subject.grades}
                icon={subject.icon}
                key={subject.title}
                outcomes={subject.outcomes}
                title={subject.title}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container px-4">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="surface-panel mesh-border p-7 md:p-8">
              <SectionTitle
                centered={false}
                eyebrow="Learning flow"
                subtitle="This part of the experience has been rewritten to explain the operational side of the tuition centre in a more structured way."
                title="How families move from inquiry to enrollment"
              />

              <div className="mt-10 space-y-5">
                {learningApproach.map((item) => (
                  <div
                    className="rounded-[24px] border border-slate-900/8 bg-slate-50/70 p-5"
                    key={item.step}
                  >
                    <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                      Step {item.step}
                    </div>
                    <h3 className="mt-2 font-serif text-2xl font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              <div className="surface-panel mesh-border overflow-hidden">
                <div className="grid gap-0 md:grid-cols-[1.1fr_0.9fr]">
                  <div className="p-7 md:p-8">
                    <div className="section-eyebrow">Campus access</div>
                    <h3 className="mt-5 font-serif text-3xl font-semibold text-foreground">
                      Better location clarity for parents
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">
                      The site now treats locations as a decision aid rather than a
                      footnote, helping families quickly judge convenience and fit.
                    </p>

                    <div className="mt-8 grid gap-4">
                      {campusLocations.map((location) => (
                        <div
                          className="rounded-[22px] border border-slate-900/8 bg-slate-50/70 p-5"
                          key={location.name}
                        >
                          <h4 className="font-semibold text-foreground">
                            {location.name}
                          </h4>
                          <p className="mt-1 text-sm font-medium text-secondary">
                            {location.area}
                          </p>
                          <p className="mt-3 text-sm leading-6 text-muted-foreground">
                            {location.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative min-h-[320px] bg-slate-950">
                    <img
                      alt="Schoolars Hub students standing together at the campus"
                      className="h-full w-full object-cover opacity-80"
                      height={900}
                      loading="lazy"
                      src={heroImage}
                      width={900}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/78">
                        <BookMarked className="h-3.5 w-3.5" />
                        Structured after-school support
                      </div>
                      <p className="mt-4 text-sm leading-6 text-white/76">
                        A stronger visual hierarchy now keeps the school identity,
                        human warmth, and enrollment path in one place.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <InquiryForm
                defaultIntent="fees"
                description="Parents often need fee details and campus guidance together. This version of the form is tuned for that use case."
                sourcePage="home-mid"
                title="Ask for fee details"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container px-4">
          <SectionTitle
            eyebrow="Proof and reassurance"
            subtitle="Instead of making users hunt for trust signals, the reviews are now placed where families are deciding whether to reach out."
            title="What families say about the learning environment"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                delay={index * 100}
                key={`${testimonial.name}-${index}`}
                {...testimonial}
              />
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button className="rounded-full px-7" size="lg" variant="outline" asChild>
              <Link to="/testimonials">Read all testimonials</Link>
            </Button>
            <Button className="rounded-full px-7" size="lg" variant="hero" asChild>
              <a href={siteConfig.googleReviewsUrl} rel="noreferrer" target="_blank">
                View Google reviews
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container px-4">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="ink-panel mesh-border p-7 md:p-8">
              <SectionTitle
                centered={false}
                eyebrow="Frequently asked"
                subtitle="FAQs are now written for decision-making, not just SEO. That means fewer vague statements and more direct answers."
                title="Common parent questions"
              />
            </div>

            <Card className="mesh-border rounded-[32px] border-white/50 bg-white/88 shadow-lg">
              <CardContent className="p-3 sm:p-5">
                <Accordion className="w-full" collapsible type="single">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={faq.question} value={`faq-${index}`}>
                      <AccordionTrigger className="px-3 text-left text-base font-semibold text-foreground">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-3 pb-5 text-sm leading-7 text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
