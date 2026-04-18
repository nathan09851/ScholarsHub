import {
  Clock3,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

import InquiryForm from "@/components/InquiryForm";
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
    role: "Founder and Director",
    description:
      "Leads the centre with a parent-facing, operations-aware approach to academic support.",
  },
  {
    name: "Avita",
    role: "Mathematics Faculty",
    description:
      "Focuses on strengthening problem solving, step-by-step reasoning, and exam preparation.",
  },
  {
    name: "Marina",
    role: "Academic Faculty",
    description:
      "Supports students with concept reinforcement and a calm classroom rhythm.",
  },
  {
    name: "Senha",
    role: "Teaching Faculty",
    description:
      "Helps students stay consistent with lessons, revisions, and day-to-day academic confidence.",
  },
];

const About = () => {
  return (
    <Layout>
      <SEO
        canonical="/about"
        description="Learn how Schoolars Hub supports students and families across Goa with clearer operations, stronger trust signals, and a more secure inquiry flow."
        jsonLd={localBusinessJsonLd}
        title="About Schoolars Hub | Built for stronger parent trust and student support"
      />

      <section className="section-shell pt-8">
        <div className="container px-4">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div className="surface-panel mesh-border p-7 md:p-8">
              <SectionTitle
                centered={false}
                eyebrow="About the centre"
                subtitle="This page now explains how the centre works, what families can expect, and why the experience feels more mature and trustworthy."
                title="A tuition centre that is growing in maturity, not just visibility"
              />

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <Card className="rounded-[24px] border-slate-900/8 bg-slate-50/70 shadow-none">
                  <CardContent className="space-y-3 p-5">
                    <ShieldCheck className="h-5 w-5 text-amber-500" />
                    <h3 className="font-semibold text-foreground">
                      Better parent confidence
                    </h3>
                    <p className="text-sm leading-7 text-muted-foreground">
                      The digital experience is now clearer about timings, fees,
                      subjects, and the first contact path.
                    </p>
                  </CardContent>
                </Card>
                <Card className="rounded-[24px] border-slate-900/8 bg-slate-50/70 shadow-none">
                  <CardContent className="space-y-3 p-5">
                    <Users className="h-5 w-5 text-cyan-600" />
                    <h3 className="font-semibold text-foreground">
                      More operational clarity
                    </h3>
                    <p className="text-sm leading-7 text-muted-foreground">
                      Families can now understand what happens after inquiry,
                      enrollment, and payment without confusion.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button className="rounded-full px-7" size="lg" variant="hero" asChild>
                  <Link to="/payments">See fee plans</Link>
                </Button>
                <Button className="rounded-full px-7" size="lg" variant="outline" asChild>
                  <a href={siteConfig.googleReviewsUrl} rel="noreferrer" target="_blank">
                    Read Google reviews
                  </a>
                </Button>
              </div>
            </div>

            <InquiryForm
              defaultIntent="callback"
              description="Use this form if you want to speak directly with the team about class fit, campus preference, or enrollment questions."
              sourcePage="about-page"
              title="Talk to the team"
            />
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container px-4">
          <div className="grid gap-6 lg:grid-cols-3">
            {trustSignals.map((signal) => {
              const Icon = signal.icon;
              return (
                <Card
                  className="mesh-border rounded-[28px] border-white/50 bg-white/88 shadow-lg"
                  key={signal.title}
                >
                  <CardContent className="space-y-4 p-6">
                    <div className="inline-flex rounded-2xl bg-slate-950 p-3 text-amber-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-foreground">
                      {signal.title}
                    </h3>
                    <p className="text-sm leading-7 text-muted-foreground">
                      {signal.description}
                    </p>
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
            eyebrow="Team"
            subtitle="The page now keeps leadership and faculty presentation consistent, which builds more trust than vague team listings."
            title="The people families meet behind the brand"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {team.map((member) => (
              <Card
                className="mesh-border rounded-[28px] border-white/50 bg-white/88 shadow-lg"
                key={member.name}
              >
                <CardContent className="space-y-5 p-6 text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-orange-500 text-2xl font-bold text-slate-950 shadow-sm">
                    {member.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-foreground">
                      {member.name}
                    </h3>
                    <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
                      {member.role}
                    </p>
                  </div>
                  <p className="text-sm leading-7 text-muted-foreground">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container px-4">
          <Card className="mesh-border rounded-[32px] border-white/50 bg-white/90 shadow-lg">
            <CardContent className="grid gap-8 p-7 md:grid-cols-[0.95fr_1.05fr] md:p-8">
              <div className="space-y-5">
                <div className="section-eyebrow">Operational details</div>
                <h2 className="font-serif text-4xl font-semibold text-foreground">
                  Clear contact details and schedules matter
                </h2>
                <p className="text-sm leading-7 text-muted-foreground">
                  One of the practical UX fixes was to make key operating details
                  easier to scan on mobile and desktop without burying them in a
                  paragraph.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {siteConfig.phones.map((phone) => (
                  <Card className="rounded-[24px] border-slate-900/8 bg-slate-50/70 shadow-none" key={phone}>
                    <CardContent className="space-y-3 p-5">
                      <Phone className="h-5 w-5 text-amber-500" />
                      <h3 className="font-semibold text-foreground">Phone</h3>
                      <a className="text-sm text-muted-foreground" href={`tel:${phone}`}>
                        {phone}
                      </a>
                    </CardContent>
                  </Card>
                ))}
                <Card className="rounded-[24px] border-slate-900/8 bg-slate-50/70 shadow-none">
                  <CardContent className="space-y-3 p-5">
                    <Mail className="h-5 w-5 text-cyan-600" />
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <a
                      className="text-sm text-muted-foreground"
                      href={`mailto:${siteConfig.email}`}
                    >
                      {siteConfig.email}
                    </a>
                  </CardContent>
                </Card>
                <Card className="rounded-[24px] border-slate-900/8 bg-slate-50/70 shadow-none">
                  <CardContent className="space-y-3 p-5">
                    <Clock3 className="h-5 w-5 text-emerald-600" />
                    <h3 className="font-semibold text-foreground">Class hours</h3>
                    <p className="text-sm text-muted-foreground">
                      Regular: {siteConfig.timings.regular}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Exam time: {siteConfig.timings.exam}
                    </p>
                  </CardContent>
                </Card>
                <Card className="rounded-[24px] border-slate-900/8 bg-slate-50/70 shadow-none">
                  <CardContent className="space-y-3 p-5">
                    <MapPin className="h-5 w-5 text-rose-500" />
                    <h3 className="font-semibold text-foreground">Locations</h3>
                    {campusLocations.map((campus) => (
                      <p className="text-sm text-muted-foreground" key={campus.name}>
                        {campus.name}, {campus.area}
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
