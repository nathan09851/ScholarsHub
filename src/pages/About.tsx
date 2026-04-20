import {
  Clock3,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Users,
} from "lucide-react";
import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";

const InquiryForm = lazy(() => import("@/components/InquiryForm"));
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { campusLocations, siteConfig, trustSignals } from "@/content/site";
import { localBusinessJsonLd } from "@/lib/structuredData";

const team = [
  {
    name: "Shamina Shaikh",
    role: "Founder & Director",
    description:
      "Leads the centre with a parent-first approach and deep operational understanding of academic support.",
    image: "/team/shamina.jpg",
  },
  {
    name: "Avita",
    role: "Mathematics Faculty",
    description:
      "Specialises in problem-solving, step-by-step reasoning, and exam preparation strategies.",
    image: "/team/avita.jpg",
  },
  {
    name: "Marina",
    role: "Academic Faculty",
    description:
      "Supports students with concept reinforcement and a calm, structured classroom rhythm.",
    image: "/team/marina.jpg",
  },
  {
    name: "Senha",
    role: "Teaching Faculty",
    description:
      "Helps students stay consistent with daily lessons, revision practice, and academic confidence.",
    image: "/team/senha.jpg",
  },
];

const About = () => {
  return (
    <Layout>
      <SEO
        canonical="/about"
        description="Meet the Schoolars Hub team — experienced educators in Goa providing quality tuition since 2021. Two campuses (Thivim & Corlim), 7 subjects, Classes 5th to 10th only. Contact us today."
        jsonLd={localBusinessJsonLd}
        title="About Us — Our Team, Campus & Mission | Schoolars Hub Goa"
      />

      <section className="section-shell pt-8" aria-labelledby="about-hero-heading">
        <div className="container px-4">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div className="surface-panel mesh-border p-7 md:p-8">
              <SectionTitle
                centered={false}
                eyebrow="Est. 2021 · Goa"
                id="about-hero-heading"
                subtitle="Schoolars Hub was started to give families a more reliable, transparent tuition experience — from clear fee plans to genuine follow-up."
                title="A coaching centre built around families"
              />

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <Card className="rounded-[22px] border-slate-900/8 bg-slate-50/80 shadow-none">
                  <CardContent className="space-y-2 p-5">
                    <ShieldCheck aria-hidden="true" className="h-5 w-5 text-amber-500" />
                    <h3 className="font-semibold text-foreground">
                      Parent confidence
                    </h3>
                    <p className="text-sm leading-7 text-slate-600">
                      Clear timings, transparent fees, and a structured inquiry
                      process so families always know what to expect.
                    </p>
                  </CardContent>
                </Card>
                <Card className="rounded-[22px] border-slate-900/8 bg-slate-50/80 shadow-none">
                  <CardContent className="space-y-2 p-5">
                    <Users aria-hidden="true" className="h-5 w-5 text-cyan-600" />
                    <h3 className="font-semibold text-foreground">
                      Small-group teaching
                    </h3>
                    <p className="text-sm leading-7 text-slate-600">
                      Focused batches so every student gets the attention they
                      need to improve and stay on track.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button className="rounded-full px-7" size="lg" variant="hero" asChild>
                  <Link to="/payments">See fee plans</Link>
                </Button>
                <Button className="rounded-full px-7" size="lg" variant="outline" asChild>
                  <a
                    href={siteConfig.googleReviewsUrl}
                    rel="noreferrer"
                    target="_blank"
                    aria-label="Read Google reviews (opens in new tab)"
                  >
                    Read Google reviews
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
                description="Want to speak with someone directly? Share your details and we'll call you back."
                sourcePage="about-page"
                title="Talk to the team"
              />
            </Suspense>
          </div>
        </div>
      </section>

      <section className="section-shell" aria-labelledby="values-heading">
        <div className="container px-4">
          <SectionTitle
            eyebrow="What we stand for"
            id="values-heading"
            title="Why families choose us"
            subtitle="Three principles that guide everything at Schoolars Hub."
          />

          <div className="mt-10 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {trustSignals.map((signal) => {
              const Icon = signal.icon;
              return (
                <Card
                  className="mesh-border rounded-[24px] border-white/50 bg-white/88 shadow-md"
                  key={signal.title}
                >
                  <CardContent className="space-y-3 p-6">
                    <div
                      aria-hidden="true"
                      className="inline-flex rounded-2xl bg-slate-950 p-3 text-amber-300"
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-foreground">
                      {signal.title}
                    </h3>
                    <p className="text-sm leading-7 text-slate-600">
                      {signal.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell" aria-labelledby="team-heading">
        <div className="container px-4">
          <SectionTitle
            eyebrow="Our team"
            id="team-heading"
            subtitle="The people behind Schoolars Hub who work directly with students and families."
            title="Meet the faculty"
          />

          <div className="mt-10 grid gap-5 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <Card
                className="mesh-border rounded-[24px] border-white/50 bg-white/88 shadow-md"
                key={member.name}
              >
                <CardContent className="space-y-4 p-6 text-center">
                  {member.image ? (
                    <div className="mx-auto h-20 w-20 overflow-hidden rounded-full shadow-sm">
                      <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
                    </div>
                  ) : (
                    <div
                      aria-hidden="true"
                      className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-orange-500 text-2xl font-bold text-slate-950 shadow-sm"
                    >
                      {member.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")}
                    </div>
                  )}
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                      {member.role}
                    </p>
                  </div>
                  <p className="text-sm leading-7 text-slate-600">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell" aria-labelledby="contact-heading">
        <div className="container px-4">
          <Card className="mesh-border rounded-[28px] border-white/50 bg-white/90 shadow-lg">
            <CardContent className="grid gap-8 p-7 md:grid-cols-[0.95fr_1.05fr] md:p-8">
              <div className="space-y-4">
                <div className="section-eyebrow">Contact & hours</div>
                <h2
                  id="contact-heading"
                  className="font-serif text-3xl font-semibold text-foreground"
                >
                  Get in touch
                </h2>
                <p className="text-sm leading-7 text-slate-600">
                  Reach us by phone, email, or visit either campus during class
                  hours. We're always happy to talk with parents.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {siteConfig.phones.map((phone) => (
                  <Card
                    className="rounded-[20px] border-slate-900/8 bg-slate-50/80 shadow-none"
                    key={phone}
                  >
                    <CardContent className="space-y-2 p-5">
                      <Phone aria-hidden="true" className="h-5 w-5 text-amber-500" />
                      <h3 className="font-semibold text-foreground">Phone</h3>
                      <a
                        className="text-sm font-medium text-slate-700 underline-offset-2 hover:underline"
                        href={`tel:${phone}`}
                      >
                        {phone}
                      </a>
                    </CardContent>
                  </Card>
                ))}
                <Card className="rounded-[20px] border-slate-900/8 bg-slate-50/80 shadow-none">
                  <CardContent className="space-y-2 p-5">
                    <Mail aria-hidden="true" className="h-5 w-5 text-cyan-600" />
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <a
                      className="text-sm font-medium text-slate-700 underline-offset-2 hover:underline"
                      href={`mailto:${siteConfig.email}`}
                    >
                      {siteConfig.email}
                    </a>
                  </CardContent>
                </Card>
                <Card className="rounded-[20px] border-slate-900/8 bg-slate-50/80 shadow-none">
                  <CardContent className="space-y-2 p-5">
                    <Clock3 aria-hidden="true" className="h-5 w-5 text-emerald-600" />
                    <h3 className="font-semibold text-foreground">Class hours</h3>
                    <p className="text-sm text-slate-700">
                      Regular: {siteConfig.timings.regular}
                    </p>
                    <p className="text-sm text-slate-700">
                      Exams: {siteConfig.timings.exam}
                    </p>
                  </CardContent>
                </Card>
                <Card className="rounded-[20px] border-slate-900/8 bg-slate-50/80 shadow-none sm:col-span-2">
                  <CardContent className="space-y-2 p-5">
                    <MapPin aria-hidden="true" className="h-5 w-5 text-rose-500" />
                    <h3 className="font-semibold text-foreground">Campus locations</h3>
                    {campusLocations.map((campus) => (
                      <p className="text-sm text-slate-700" key={campus.name}>
                        <strong>{campus.name}</strong> — {campus.area}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default About;
