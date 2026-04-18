import {
  ArrowRight,
  CheckCircle2,
  CreditCard,
  Phone,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

import InquiryForm from "@/components/InquiryForm";
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
        description="Review Schoolars Hub fee plans, payment steps, and safer enrollment follow-up details."
        title="Fees and Payments | Schoolars Hub"
      />

      <section className="section-shell pt-8">
        <div className="container px-4">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div className="surface-panel mesh-border p-7 md:p-8">
              <SectionTitle
                centered={false}
                eyebrow="Fees and payment"
                subtitle="This page is now designed to remove friction: clear plans, direct payment flow, and a stronger post-payment confirmation path."
                title="Transparent monthly plans with simpler payment guidance"
              />

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <Card className="rounded-[24px] border-slate-900/8 bg-slate-50/70 shadow-none">
                  <CardContent className="space-y-3 p-5">
                    <ShieldCheck className="h-5 w-5 text-amber-500" />
                    <p className="font-semibold text-foreground">Safer intake</p>
                    <p className="text-sm text-muted-foreground">
                      Parents can ask before they pay.
                    </p>
                  </CardContent>
                </Card>
                <Card className="rounded-[24px] border-slate-900/8 bg-slate-50/70 shadow-none">
                  <CardContent className="space-y-3 p-5">
                    <Smartphone className="h-5 w-5 text-cyan-600" />
                    <p className="font-semibold text-foreground">UPI ready</p>
                    <p className="text-sm text-muted-foreground">
                      Quick mobile payment support.
                    </p>
                  </CardContent>
                </Card>
                <Card className="rounded-[24px] border-slate-900/8 bg-slate-50/70 shadow-none">
                  <CardContent className="space-y-3 p-5">
                    <Phone className="h-5 w-5 text-emerald-600" />
                    <p className="font-semibold text-foreground">Human follow-up</p>
                    <p className="text-sm text-muted-foreground">
                      WhatsApp confirmation stays available.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <InquiryForm
              defaultIntent="fees"
              description="Use this form if you want fee details, class guidance, or help choosing the right plan before making payment."
              sourcePage="payments-page"
              title="Ask before paying"
            />
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container px-4">
          <SectionTitle
            eyebrow="Plans"
            subtitle="The plans are now easier to compare, more explicit about who they are for, and less likely to create confusion on mobile."
            title="Monthly fee plans"
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {feePlans.map((plan) => {
              const amount = plan.monthlyFee.replace("INR ", "").replace(",", "");
              const paymentUrl = `upi://pay?pa=${siteConfig.upiId}&pn=${encodeURIComponent(
                siteConfig.brandName,
              )}&am=${amount}&cu=INR&tn=${encodeURIComponent(
                `${plan.name} monthly fee`,
              )}`;

              return (
                <Card
                  className={`mesh-border rounded-[30px] border-white/50 bg-white/88 shadow-lg ${
                    plan.popular ? "ring-2 ring-amber-300/60" : ""
                  }`}
                  key={plan.name}
                >
                  <CardHeader className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                          {plan.studentRange}
                        </div>
                        <CardTitle className="mt-2 font-serif text-3xl font-semibold text-foreground">
                          {plan.name}
                        </CardTitle>
                      </div>
                      {plan.popular ? (
                        <div className="rounded-full bg-amber-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-800">
                          Most popular
                        </div>
                      ) : null}
                    </div>
                    <div>
                      <p className="font-serif text-5xl font-semibold text-foreground">
                        {plan.monthlyFee}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">
                        {plan.description}
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {plan.highlights.map((highlight) => (
                        <li
                          className="flex items-center gap-3 text-sm text-slate-700"
                          key={highlight}
                        >
                          <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <Button className="rounded-2xl" size="lg" variant="hero" asChild>
                        <a href={paymentUrl}>
                          <Smartphone className="h-4 w-4" />
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

      <section className="section-shell">
        <div className="container px-4">
          <Card className="mesh-border rounded-[32px] border-white/50 bg-white/90 shadow-lg">
            <CardContent className="grid gap-8 p-7 md:grid-cols-[0.95fr_1.05fr] md:p-8">
              <div className="space-y-4">
                <div className="section-eyebrow">After payment</div>
                <h2 className="font-serif text-4xl font-semibold text-foreground">
                  A clearer confirmation path
                </h2>
                <p className="text-sm leading-7 text-muted-foreground">
                  One of the practical experience fixes is that payment does not
                  become a dead end. The next steps are now explicit and easier to
                  follow from a phone.
                </p>
              </div>

              <div className="grid gap-4">
                {[
                  "Complete the UPI payment for the selected plan.",
                  "Save the payment confirmation screenshot.",
                  "Send the screenshot on WhatsApp with the student's name and class.",
                  "Use the inquiry form if you want fee help before payment.",
                ].map((step, index) => (
                  <div
                    className="flex items-start gap-4 rounded-[24px] border border-slate-900/8 bg-slate-50/70 p-5"
                    key={step}
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
                      {index + 1}
                    </div>
                    <p className="text-sm leading-7 text-slate-700">{step}</p>
                  </div>
                ))}
              </div>
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
              >
                <Phone className="h-4 w-4" />
                Send payment screenshot
              </a>
            </Button>
            <Button className="rounded-full px-7" size="lg" variant="outline" asChild>
              <a href={`tel:${siteConfig.phones[0]}`}>
                <CreditCard className="h-4 w-4" />
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
