import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  MapPin,
  ShieldCheck,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";

import heroImage from "@/assets/schoolars-group.jpg";
import BrandMark from "@/components/BrandMark";
import InquiryForm from "@/components/InquiryForm";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import SectionTitle from "@/components/SectionTitle";
import StatsCard from "@/components/StatsCard";
import SubjectCard from "@/components/SubjectCard";
import TestimonialCard from "@/components/TestimonialCard";
import { AnimatedSection } from "@/components/AnimatedSection";
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
        description="Schoolars Hub offers structured tuition support in Goa with transparent fees, expert teachers, and a secure inquiry flow for parents."
        jsonLd={localBusinessJsonLd}
        title="Schoolars Hub | Quality Tuition Coaching in Goa since 2021"
      />

      {/* ── Hero ── */}
      <section
        className="section-shell overflow-hidden pt-6 md:pt-10"
        aria-label="Hero section"
      >
        <div className="container px-4">
          <div className="hero-glow relative overflow-hidden rounded-[36px] border border-white/12 shadow-2xl">
            {/* Full-bleed hero image — clearly visible */}
            <div className="absolute inset-0">
              <img
                alt="Schoolars Hub students and teachers at the coaching centre in Goa"
                className="h-full w-full object-cover object-center"
                height={1080}
                loading="eager"
                src={heroImage}
                width={1920}
              />
              {/* dark overlay so text stays readable */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/30" />
              {/* Ambient floating orbs */}
              <div className="hero-orb hero-orb-amber" style={{ width: 340, height: 340, top: '10%', left: '-5%' }} />
              <div className="hero-orb hero-orb-cyan" style={{ width: 280, height: 280, top: '-10%', right: '10%' }} />
            </div>

            {/* Content grid */}
            <div className="relative grid gap-8 px-6 py-10 text-white sm:px-8 lg:grid-cols-[1fr_420px] lg:items-start lg:px-10 lg:py-12">
              {/* Left column — headline + CTAs */}
              <div className="max-w-2xl space-y-7">
                {/* eyebrow */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="section-eyebrow border-white/15 bg-white/10 text-white/80">
                    Since {siteConfig.foundedYear} · Goa
                  </div>
                  <div className="hidden rounded-[22px] border border-white/12 bg-white/8 px-4 py-2.5 sm:block">
                    <BrandMark dark showSubtitle={false} compact />
                  </div>
                </div>

                {/* headline */}
                <AnimatedSection variant="fade-up" delay={0} duration={700}>
                  <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                    Tuition that's clear,
                    <br />
                    <span className="text-amber-300">trusted by families.</span>
                  </h1>
                </AnimatedSection>

                <p className="max-w-xl text-base leading-7 text-white/78 md:text-lg">
                  {siteConfig.brandDisplayName} helps students across Goa stay
                  on top of schoolwork with focused subject guidance and
                  transparent enrollment — so parents always know what to expect.
                </p>

                {/* highlights */}
                <ul className="grid gap-2.5 sm:grid-cols-2" role="list">
                  {heroHighlights.map((highlight) => (
                    <li
                      className="flex items-start gap-2.5 rounded-2xl border border-white/12 bg-white/8 px-4 py-3"
                      key={highlight}
                    >
                      <BadgeCheck
                        aria-hidden="true"
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-300"
                      />
                      <span className="text-sm leading-6 text-white/82">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTAs */}
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    className="btn-shine min-h-12 rounded-full px-7"
                    size="xl"
                    variant="hero"
                    asChild
                  >
                    <Link to="/payments">
                      View fees and enroll
                      <ArrowRight aria-hidden="true" className="ml-1 h-4 w-4" />
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

                {/* quick trust badges */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/8 px-3 py-2.5">
                    <ShieldCheck
                      aria-hidden="true"
                      className="h-4 w-4 flex-shrink-0 text-amber-300"
                    />
                    <p className="text-xs font-medium leading-tight text-white/82">
                      Secure inquiry
                    </p>
                  </div>
                  <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/8 px-3 py-2.5">
                    <Clock3
                      aria-hidden="true"
                      className="h-4 w-4 flex-shrink-0 text-cyan-300"
                    />
                    <p className="text-xs font-medium leading-tight text-white/82">
                      Clear timings
                    </p>
                  </div>
                  <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/8 px-3 py-2.5">
                    <MapPin
                      aria-hidden="true"
                      className="h-4 w-4 flex-shrink-0 text-emerald-300"
                    />
                    <p className="text-xs font-medium leading-tight text-white/82">
                      2 Goa centres
                    </p>
                  </div>
                </div>

                {/* Google rating strip */}
                <a
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm text-white/80 transition hover:bg-white/14"
                  href={siteConfig.googleReviewsUrl}
                  rel="noreferrer"
                  target="_blank"
                  aria-label="View our Google reviews — 5 stars from 40+ reviews"
                >
                  <span
                    className="flex gap-0.5"
                    aria-hidden="true"
                  >
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </span>
                  <span className="font-semibold">5.0</span>
                  <span className="text-white/60">· 40+ Google reviews</span>
                </a>
              </div>

              {/* Right column — inquiry form */}
              <InquiryForm
                defaultIntent="callback"
                description="Ask about class fit, fee details, timings, or subject support."
                sourcePage="home-hero"
                title="Request a callback"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Proof Stats ── */}
      <section className="section-shell pt-8" aria-label="Key statistics">
        <div className="container px-4">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
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

      {/* ── Trust signals ── */}
      <section className="section-shell" aria-labelledby="trust-heading">
        <div className="container px-4">
          <SectionTitle
            eyebrow="Why families choose us"
            id="trust-heading"
            subtitle="Transparent fees, regular parent updates, and focused teaching across 7 subjects — designed to reduce guesswork for families."
            title="A calmer, more trustworthy experience"
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {trustSignals.map((signal, index) => {
              const Icon = signal.icon;
              return (
                <AnimatedSection
                  key={signal.title}
                  variant="fade-up"
                  delay={index * 80}
                >
                  <Card className="mesh-border card-hover rounded-[24px] border-white/50 bg-white/85 shadow-md">
                    <CardContent className="space-y-4 p-6">
                      <div
                        aria-hidden="true"
                        className="inline-flex rounded-2xl bg-slate-950 p-3 text-amber-300 transition-transform duration-200 hover:scale-110"
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-serif text-xl font-semibold text-foreground">
                          {signal.title}
                        </h3>
                        <p className="text-sm leading-7 text-muted-foreground">
                          {signal.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Subjects ── */}
      <section className="section-shell" aria-labelledby="subjects-heading">
        <div className="container px-4">
          <SectionTitle
            eyebrow="Subject coverage"
            id="subjects-heading"
            subtitle="Comprehensive tuition across 7 subjects, from Classes 1 to 12. Each subject card explains grade fit and expected learning outcomes."
            title="Subjects taught with clarity"
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {subjects.map((subject, index) => (
              <SubjectCard
                accent={subject.accent}
                delay={index * 60}
                description={subject.description}
                grades={subject.grades}
                icon={subject.icon}
                key={subject.title}
                outcomes={subject.outcomes}
                title={subject.title}
              />
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Button className="btn-shine rounded-full px-7" size="lg" variant="outline" asChild>
              <Link to="/subjects">
                See all subject details
                <ArrowRight aria-hidden="true" className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── How it works + Campus + Inquiry ── */}
      <section className="section-shell" aria-labelledby="process-heading">
        <div className="container px-4">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Learning flow */}
            <div className="surface-panel mesh-border space-y-6 p-7 md:p-8">
              <SectionTitle
                centered={false}
                eyebrow="How it works"
                id="process-heading"
                subtitle="From your first inquiry to your child's first class — the journey is designed to be straightforward."
                title="Three simple steps to enrollment"
              />

              <ol className="space-y-3" aria-label="Enrollment steps">
                {learningApproach.map((item, index) => (
                  <AnimatedSection
                    as="li"
                    className="rounded-[20px] border border-slate-900/8 bg-slate-50/80 p-5"
                    key={item.step}
                    variant="fade-left"
                    delay={index * 100}
                  >
                    <div className="text-xs font-bold uppercase tracking-[0.24em] text-amber-600">
                      Step {item.step}
                    </div>
                    <h3 className="mt-2 font-serif text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                  </AnimatedSection>
                ))}
              </ol>
            </div>

            {/* Campus info + mid-page form */}
            <div className="flex flex-col gap-5">
              {/* Campus locations */}
              <div className="surface-panel mesh-border overflow-hidden rounded-[28px]">
                <div className="grid md:grid-cols-2">
                  <div className="p-6 md:p-7">
                    <div className="section-eyebrow mb-4">Campus access</div>
                    <h3 className="font-serif text-2xl font-semibold text-foreground">
                      Two Goa locations
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      Choose the centre closest to you. Both campuses run the same
                      structured curriculum with the same teacher team.
                    </p>

                    <div className="mt-5 space-y-3">
                      {campusLocations.map((location) => (
                        <div
                          className="rounded-[18px] border border-slate-900/8 bg-slate-50/80 p-4"
                          key={location.name}
                        >
                          <h4 className="font-semibold text-foreground">
                            {location.name}
                          </h4>
                          <p className="mt-0.5 text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                            {location.area}
                          </p>
                          <p className="mt-2 text-sm leading-6 text-muted-foreground">
                            {location.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Photo panel */}
                  <div className="relative min-h-[260px] bg-slate-950">
                    <img
                      alt="Schoolars Hub students and teachers at the Goa campus"
                      className="h-full w-full object-cover object-center opacity-85"
                      height={900}
                      loading="lazy"
                      src={heroImage}
                      width={900}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                      <p className="text-sm font-medium">
                        After-school support, 3 PM – 6:30 PM
                      </p>
                      <p className="text-xs text-white/65">
                        Extended to 8 PM during exam periods
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fee inquiry form */}
              <InquiryForm
                defaultIntent="fees"
                description="Parents often need fee details and campus guidance together. Ask us directly."
                sourcePage="home-mid"
                title="Ask for fee details"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section-shell" aria-labelledby="reviews-heading">
        <div className="container px-4">
          <SectionTitle
            eyebrow="Google reviews"
            id="reviews-heading"
            subtitle="Real feedback from students and parents who have experienced learning at Schoolars Hub."
            title="What families say"
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                delay={index * 80}
                key={`${testimonial.name}-${index}`}
                {...testimonial}
              />
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button
              className="rounded-full px-7"
              size="lg"
              variant="outline"
              asChild
            >
              <Link to="/testimonials">Read all testimonials</Link>
            </Button>
            <Button
              className="rounded-full px-7"
              size="lg"
              variant="hero"
              asChild
            >
              <a
                href={siteConfig.googleReviewsUrl}
                rel="noreferrer"
                target="_blank"
                aria-label="View Google reviews for Schoolars Hub (opens in new tab)"
              >
                View Google reviews
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="section-shell" aria-labelledby="faq-heading">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl">
            <SectionTitle
              eyebrow="Common questions"
              id="faq-heading"
              subtitle="Written to reduce friction and help parents make a confident decision quickly."
              title="Frequently asked by parents"
            />

            <Card className="mesh-border mt-10 rounded-[28px] border-white/50 bg-white/88 shadow-lg">
              <CardContent className="p-3 sm:p-5">
                <Accordion
                  className="w-full"
                  collapsible
                  type="single"
                >
                  {faqs.map((faq, index) => (
                    <AccordionItem key={faq.question} value={`faq-${index}`}>
                      <AccordionTrigger className="px-3 text-left text-base font-semibold text-foreground hover:text-primary">
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
