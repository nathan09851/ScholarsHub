import { ArrowRight, CheckCircle2 } from "lucide-react";
import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";

const InquiryForm = lazy(() => import("@/components/InquiryForm"));
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
          <div className="flex flex-col gap-10">
            <div className="surface-panel mesh-border p-7 md:p-8">
              <SectionTitle
                centered={false}
                eyebrow="7 subjects, Classes 5th to 10th only"
                id="subjects-hero-heading"
                subtitle="Compare subjects, see which class levels are covered, and understand what your child will learn — all in one place."
                title="What subjects we teach"
              />
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                <Button className="rounded-full px-7" size="lg" variant="outline" asChild>
                  <Link to="/about">Talk to the team</Link>
                </Button>
              </div>

              {/* Subject Briefings */}
              <div className="mt-10 overflow-hidden rounded-[20px] border border-border/50 bg-muted/50 p-5">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.1em] text-foreground">
                  Why these subjects matter
                </h3>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {subjects.map((subject) => (
                    <li key={subject.title} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <div>
                        <strong className="font-semibold text-foreground">{subject.title}:</strong>{" "}
                        <span className="leading-snug">{subject.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Suspense
              fallback={
                <div className="h-[520px] animate-pulse rounded-[28px] bg-slate-900/40 border border-slate-800/60" aria-label="Loading inquiry form…" />
              }
            >
              <InquiryForm
                defaultIntent="demo"
                description="Not sure which subject to start with? Tell us the class level and we'll guide you."
                sourcePage="subjects-page"
                title="Need subject guidance?"
              />
            </Suspense>
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

          <div className="mt-10 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {subjects.map((subject) => {
              const Icon = subject.icon;

              return (
                <Card
                  className="mesh-border rounded-[28px] border-border/50 bg-card/88 shadow-md"
                  key={subject.title}
                >
                  <CardHeader className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div
                        aria-hidden="true"
                        className={`inline-flex rounded-2xl bg-gradient-to-br ${subject.accent} p-3 text-foreground shadow-sm`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="rounded-full bg-foreground/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        {subject.grades}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <CardTitle className="font-serif text-2xl font-semibold text-foreground">
                        {subject.title}
                      </CardTitle>
                      <p className="text-sm leading-7 text-muted-foreground">
                        {subject.description}
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <div className="rounded-[20px] border border-border/50 bg-muted/80 p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                        Learning outcomes
                      </p>
                      <ul className="mt-4 space-y-3">
                        {subject.outcomes.map((outcome) => (
                          <li
                            className="flex items-center gap-3 text-sm text-muted-foreground"
                            key={outcome}
                          >
                            <CheckCircle2 aria-hidden="true" className="h-4 w-4 flex-shrink-0 text-emerald-500" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="w-full rounded-2xl" size="lg" variant="outline" asChild>
                      <Link to="/about">Enroll for {subject.title}</Link>
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
          <Card className="mesh-border rounded-[28px] border-border/50 bg-card/90 shadow-lg">
            <CardContent className="grid gap-8 p-7 md:grid-cols-[0.9fr_1.1fr] md:p-8">
              <div className="space-y-4">
                <div className="section-eyebrow">Choosing a subject</div>
                <h2 id="subject-help-heading" className="font-serif text-3xl font-semibold text-foreground">
                  Not sure where to start?
                </h2>
                <p className="text-sm leading-7 text-muted-foreground">
                  Many parents don't need all subjects — they need to know which one to
                  focus on first. These questions can help you decide.
                </p>
              </div>

              <Accordion className="w-full" collapsible type="single">
                <AccordionItem value="foundations">
                  <AccordionTrigger className="text-left text-base font-semibold text-foreground">
                    My child is struggling with basics. Where do we start?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-7 text-muted-foreground">
                    Start with the subject causing the most difficulty in class — usually
                    Maths, Science, or English. We can help prioritise through the inquiry form.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="boards">
                  <AccordionTrigger className="text-left text-base font-semibold text-foreground">
                    What if my child is preparing for board exams?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-7 text-muted-foreground">
                    Choose the Board Prep plan in your inquiry form and mention
                    the class plus board focus for targeted guidance.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="multi">
                  <AccordionTrigger className="text-left text-base font-semibold text-foreground">
                    Can we ask about more than one subject?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-7 text-muted-foreground">
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
