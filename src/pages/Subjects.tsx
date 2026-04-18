import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

import InquiryForm from "@/components/InquiryForm";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import SectionTitle from "@/components/SectionTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { subjects } from "@/content/site";

const Subjects = () => {
  return (
    <Layout>
      <SEO
        canonical="/subjects"
        description="Explore subject support at Schoolars Hub across Science, Maths, English, Hindi, Konkani, Geography, and History."
        title="Subjects at Schoolars Hub | Structured support from Classes 1 to 12"
      />

      <section className="section-shell pt-8">
        <div className="container px-4">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div className="surface-panel mesh-border p-7 md:p-8">
              <SectionTitle
                centered={false}
                eyebrow="Subjects and outcomes"
                subtitle="This page is now structured to help parents compare subjects, class levels, and outcomes without digging through scattered sections."
                title="What students can study with us"
              />
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button className="rounded-full px-7" size="lg" variant="hero" asChild>
                  <Link to="/payments">
                    View fee plans
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button className="rounded-full px-7" size="lg" variant="outline" asChild>
                  <Link to="/about">Talk to the team</Link>
                </Button>
              </div>
            </div>

            <InquiryForm
              defaultIntent="demo"
              description="Use this form if you are unsure which subject to prioritize first. We can guide you based on class level and current academic needs."
              sourcePage="subjects-page"
              title="Need subject guidance?"
            />
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container px-4">
          <div className="grid gap-6 lg:grid-cols-2">
            {subjects.map((subject) => {
              const Icon = subject.icon;

              return (
                <Card
                  className="mesh-border rounded-[30px] border-white/50 bg-white/88 shadow-lg"
                  key={subject.title}
                >
                  <CardHeader className="space-y-5">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div
                        className={`inline-flex rounded-2xl bg-gradient-to-br ${subject.accent} p-3 text-slate-950 shadow-sm`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="rounded-full bg-slate-900/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                        {subject.grades}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <CardTitle className="font-serif text-3xl font-semibold text-foreground">
                        {subject.title}
                      </CardTitle>
                      <p className="text-sm leading-7 text-muted-foreground">
                        {subject.description}
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <div className="rounded-[24px] border border-slate-900/8 bg-slate-50/70 p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                        Outcomes to expect
                      </p>
                      <ul className="mt-4 space-y-3">
                        {subject.outcomes.map((outcome) => (
                          <li
                            className="flex items-center gap-3 text-sm text-slate-700"
                            key={outcome}
                          >
                            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="w-full rounded-2xl" size="lg" variant="outline" asChild>
                      <Link to="/payments">Ask about {subject.title}</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container px-4">
          <Card className="mesh-border rounded-[32px] border-white/50 bg-white/90 shadow-lg">
            <CardContent className="grid gap-8 p-7 md:grid-cols-[0.9fr_1.1fr] md:p-8">
              <div className="space-y-4">
                <div className="section-eyebrow">Selection help</div>
                <h2 className="font-serif text-4xl font-semibold text-foreground">
                  How to choose the right subject focus
                </h2>
                <p className="text-sm leading-7 text-muted-foreground">
                  Many parents are not deciding between all subjects. They are
                  deciding what needs help first. This section now supports that
                  exact decision.
                </p>
              </div>

              <Accordion className="w-full" collapsible type="single">
                <AccordionItem value="foundations">
                  <AccordionTrigger>
                    My child is struggling with foundations. Where do we start?
                  </AccordionTrigger>
                  <AccordionContent>
                    Start with the subject that is causing the most day-to-day
                    classroom friction, usually Maths, Science, or English. We can
                    help map the first priority through the inquiry form.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="boards">
                  <AccordionTrigger>
                    What if the student is preparing for board years?
                  </AccordionTrigger>
                  <AccordionContent>
                    Use the Board Prep plan on the Payments page and mention the
                    class plus board focus in the inquiry form so the follow-up is
                    more targeted.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="multi">
                  <AccordionTrigger>
                    Can families ask about more than one subject?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. Mention all priority subjects in the form and we will help
                    you decide whether to begin with one core gap or a broader
                    study-support approach.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Subjects;
