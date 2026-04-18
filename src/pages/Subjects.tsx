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
        description="Explore tuition subjects at Schoolars Hub in Goa — Science, Maths, English, Hindi, Konkani, Geography & History. Classes 5th to 10th only with clear grade levels, learning outcomes, and expert guidance."
        title="Subjects Offered — Science, Maths, English & More | Schoolars Hub Goa"
      />

      <section className="section-shell pt-8" aria-labelledby="subjects-hero-heading">
        <div className="container px-4">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div className="surface-panel mesh-border p-7 md:p-8">
              <SectionTitle
                centered={false}
                eyebrow="7 subjects, Classes 5th to 10th only"
                id="subjects-hero-heading"
                subtitle="Compare subjects, see which class levels are covered, and understand what your child will learn — all in one place."
                title="What subjects we teach"
              />
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button className="rounded-full px-7" size="lg" variant="hero" asChild>
                  <Link to="/payments">
                    View fee plans
                    <ArrowRight aria-hidden="true" className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
                <Button className="rounded-full px-7" size="lg" variant="outline" asChild>
                  <Link to="/about">Talk to the team</Link>
                </Button>
              </div>

              {/* Subject Briefings */}
              <div className="mt-10 overflow-hidden rounded-[20px] border border-slate-900/10 bg-slate-50/50 p-5">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.1em] text-slate-800">
                  Why these subjects matter
                </h3>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {subjects.map((subject) => (
                    <li key={subject.title} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <div>
                        <strong className="font-semibold text-slate-800">{subject.title}:</strong>{" "}
                        <span className="leading-snug">{subject.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <InquiryForm
              defaultIntent="demo"
              description="Not sure which subject to start with? Tell us the class level and we'll guide you."
              sourcePage="subjects-page"
              title="Need subject guidance?"
            />
          </div>
        </div>
      </section>

      <section className="section-shell" aria-labelledby="subject-list-heading">
        <div className="container px-4">
          <SectionTitle
            eyebrow="All subjects"
            id="subject-list-heading"
            title="Explore every subject we cover"
            subtitle="Each card shows the grade range, description, and expected learning outcomes."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {subjects.map((subject) => {
              const Icon = subject.icon;

              return (
                <Card
                  className="mesh-border rounded-[28px] border-white/50 bg-white/88 shadow-md"
                  key={subject.title}
                >
                  <CardHeader className="space-y-4">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div
                        aria-hidden="true"
                        className={`inline-flex rounded-2xl bg-gradient-to-br ${subject.accent} p-3 text-slate-950 shadow-sm`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="rounded-full bg-slate-900/6 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                        {subject.grades}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <CardTitle className="font-serif text-2xl font-semibold text-foreground">
                        {subject.title}
                      </CardTitle>
                      <p className="text-sm leading-7 text-slate-600">
                        {subject.description}
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <div className="rounded-[20px] border border-slate-900/8 bg-slate-50/80 p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                        Learning outcomes
                      </p>
                      <ul className="mt-4 space-y-3">
                        {subject.outcomes.map((outcome) => (
                          <li
                            className="flex items-center gap-3 text-sm text-slate-700"
                            key={outcome}
                          >
                            <CheckCircle2 aria-hidden="true" className="h-4 w-4 flex-shrink-0 text-emerald-500" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="w-full rounded-2xl" size="lg" variant="outline" asChild>
                      <Link to="/payments">Enroll for {subject.title}</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell" aria-labelledby="subject-help-heading">
        <div className="container px-4">
          <Card className="mesh-border rounded-[28px] border-white/50 bg-white/90 shadow-lg">
            <CardContent className="grid gap-8 p-7 md:grid-cols-[0.9fr_1.1fr] md:p-8">
              <div className="space-y-4">
                <div className="section-eyebrow">Choosing a subject</div>
                <h2 id="subject-help-heading" className="font-serif text-3xl font-semibold text-foreground">
                  Not sure where to start?
                </h2>
                <p className="text-sm leading-7 text-slate-600">
                  Many parents don't need all subjects — they need to know which one to
                  focus on first. These questions can help you decide.
                </p>
              </div>

              <Accordion className="w-full" collapsible type="single">
                <AccordionItem value="foundations">
                  <AccordionTrigger className="text-left text-base font-semibold text-foreground">
                    My child is struggling with basics. Where do we start?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-7 text-slate-600">
                    Start with the subject causing the most difficulty in class — usually
                    Maths, Science, or English. We can help prioritise through the inquiry form.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="boards">
                  <AccordionTrigger className="text-left text-base font-semibold text-foreground">
                    What if my child is preparing for board exams?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-7 text-slate-600">
                    Choose the Board Prep plan on the Payments page and mention
                    the class plus board focus in the inquiry form for targeted guidance.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="multi">
                  <AccordionTrigger className="text-left text-base font-semibold text-foreground">
                    Can we ask about more than one subject?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-7 text-slate-600">
                    Absolutely. Mention all priority subjects in the form and we'll help decide
                    whether to begin with one core gap or a wider study-support approach.
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
