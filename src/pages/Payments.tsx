import {
  ArrowRight,
  CheckCircle2,
  CreditCard,
  Phone,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { lazy, Suspense } from "react";

const InquiryForm = lazy(() => import("@/components/InquiryForm"));
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { feePlans, siteConfig } from "@/content/site";

const Payments = () => {
  return (
    <Layout>
      <SEO
        canonical="/payments"
        description="View Schoolars Hub monthly tuition fees — Foundation Plan (₹700/month, Class 5–8) and Board Prep Plan (₹1,000/month, Class 9–10). Pay via UPI. Transparent pricing, no hidden charges."
        title="Tuition Fees & Payment — ₹700/month Onwards | Schoolars Hub Goa"
      />

      <section className="section-shell pt-8" aria-labelledby="fees-hero-heading">
        <div className="container px-4">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div className="surface-panel mesh-border p-7 md:p-8">
              <SectionTitle
                centered={false}
                eyebrow="Transparent pricing"
                id="fees-hero-heading"
                subtitle="Clear monthly plans with no hidden charges. Review fees, pay via UPI, and confirm enrollment — all in a few simple steps."
                title="Fee plans and payment"
              />

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <Card className="rounded-[22px] border-slate-900/8 bg-slate-50/80 shadow-none">
                  <CardContent className="space-y-2 p-5">
                    <ShieldCheck aria-hidden="true" className="h-5 w-5 text-amber-500" />
                    <p className="font-semibold text-foreground">Ask first</p>
                    <p className="text-sm text-slate-600">
                      Parents can inquire before paying.
                    </p>
                  </CardContent>
                </Card>
                <Card className="rounded-[22px] border-slate-900/8 bg-slate-50/80 shadow-none">
                  <CardContent className="space-y-2 p-5">
                    <Smartphone aria-hidden="true" className="h-5 w-5 text-cyan-600" />
                    <p className="font-semibold text-foreground">UPI ready</p>
                    <p className="text-sm text-slate-600">
                      Quick mobile payment support.
                    </p>
                  </CardContent>
                </Card>
                <Card className="rounded-[22px] border-slate-900/8 bg-slate-50/80 shadow-none">
                  <CardContent className="space-y-2 p-5">
                    <Phone aria-hidden="true" className="h-5 w-5 text-emerald-600" />
                    <p className="font-semibold text-foreground">Human follow-up</p>
                    <p className="text-sm text-slate-600">
                      WhatsApp confirmation after payment.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Suspense
              fallback={
                <div className="h-[520px] animate-pulse rounded-[28px] bg-slate-900/40 border border-slate-800/60" aria-label="Loading inquiry form…" />
              }
            >
              <InquiryForm
                defaultIntent="fees"
                description="Want fee details or help choosing the right plan? Ask us before paying."
                sourcePage="payments-page"
                title="Ask about fees"
              />
            </Suspense>
          </div>
        </div>
      </section>

      <section className="section-shell" aria-labelledby="plans-heading">
        <div className="container px-4">
          <SectionTitle
            eyebrow="Monthly plans"
            id="plans-heading"
            subtitle="Two straightforward plans based on class level. No registration fee, no hidden charges."
            title="Choose your plan"
          />

          <div className="mt-10 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2">
            {feePlans.map((plan) => {
              const amount = plan.monthlyFee.replace("INR ", "").replace(",", "");
              const paymentUrl = `upi://pay?pa=${siteConfig.upiId}&pn=${encodeURIComponent(
                siteConfig.brandName,
              )}&am=${amount}&cu=INR&tn=${encodeURIComponent(
                `${plan.name} monthly fee`,
              )}`;

              return (
                <Card
                  className={`mesh-border rounded-[28px] border-white/50 bg-white/88 shadow-md ${
                    plan.popular ? "ring-2 ring-amber-300/60" : ""
                  }`}
                  key={plan.name}
                >
                  <CardHeader className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">
                          {plan.studentRange}
                        </div>
                        <CardTitle className="mt-2 font-serif text-3xl font-semibold text-foreground">
                          {plan.name}
                        </CardTitle>
                      </div>
                      {plan.popular ? (
                        <div className="rounded-full bg-amber-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-800">
                          Most popular
                        </div>
                      ) : null}
                    </div>
                    <div>
                      <p className="font-serif text-5xl font-bold text-foreground">
                        {plan.monthlyFee}
                      </p>
                      <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500">
                        per month
                      </p>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {plan.description}
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-3" aria-label={`${plan.name} features`}>
                      {plan.highlights.map((highlight) => (
                        <li
                          className="flex items-center gap-3 text-sm text-slate-700"
                          key={highlight}
                        >
                          <CheckCircle2 aria-hidden="true" className="h-4 w-4 flex-shrink-0 text-emerald-500" />
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <Button className="rounded-2xl" size="lg" variant="hero" asChild>
                        <a href={paymentUrl}>
                          <Smartphone aria-hidden="true" className="mr-1 h-4 w-4" />
                          Pay via UPI
                        </a>
                      </Button>
                      <Button className="rounded-2xl" size="lg" variant="outline" asChild>
                        <a
                          href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                            `Hi, I would like help with the ${plan.name} fee plan.`,
                          )}`}
                          rel="noreferrer"
                          target="_blank"
                        >
                          Ask on WhatsApp
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell" aria-labelledby="after-payment-heading">
        <div className="container px-4">
          <Card className="mesh-border rounded-[28px] border-white/50 bg-white/90 shadow-lg">
            <CardContent className="grid gap-8 p-7 md:grid-cols-[0.95fr_1.05fr] md:p-8">
              <div className="space-y-4">
                <div className="section-eyebrow">After payment</div>
                <h2 id="after-payment-heading" className="font-serif text-3xl font-semibold text-foreground">
                  What happens next?
                </h2>
                <p className="text-sm leading-7 text-slate-600">
                  After paying, follow these simple steps to confirm your child's
                  enrollment. The process takes just a few minutes.
                </p>
              </div>

              <ol className="grid gap-3" aria-label="Post-payment steps">
                {[
                  "Complete UPI payment for your selected plan.",
                  "Save the payment confirmation screenshot.",
                  "Send the screenshot on WhatsApp with student's name and class.",
                  "Receive confirmation and class schedule from our team.",
                ].map((step, index) => (
                  <li
                    className="flex items-start gap-4 rounded-[20px] border border-slate-900/8 bg-slate-50/80 p-5"
                    key={step}
                  >
                    <div
                      aria-hidden="true"
                      className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-white"
                    >
                      {index + 1}
                    </div>
                    <p className="text-sm leading-7 text-slate-700">{step}</p>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button className="rounded-full px-7" size="lg" variant="hero" asChild>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                  "Hi, I have completed the payment. Student name: ___ Class: ___",
                )}`}
                rel="noreferrer"
                target="_blank"
                aria-label="Send payment screenshot via WhatsApp (opens in new tab)"
              >
                <Phone aria-hidden="true" className="mr-1 h-4 w-4" />
                Send payment screenshot
              </a>
            </Button>
            <Button className="rounded-full px-7" size="lg" variant="outline" asChild>
              <a href={`tel:${siteConfig.phones[0]}`}>
                <CreditCard aria-hidden="true" className="mr-1 h-4 w-4" />
                Call for payment help
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Payments;
