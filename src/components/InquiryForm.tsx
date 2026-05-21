import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Loader2, MessageSquare, PhoneCall, ShieldCheck } from "lucide-react";
import { useId, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  defaultInquiryValues,
  inquirySchema,
  intentLabels,
  type InquiryFormValues,
} from "@/schemas/inquiry";
import { submitInquiry } from "@/services/inquiries";

interface InquiryFormProps {
  defaultIntent?: InquiryFormValues["intent"];
  sourcePage: string;
  title?: string;
  description?: string;
  className?: string;
}

const campusOptions: InquiryFormValues["preferredCampus"][] = [
  "Thivim",
  "Corlim",
  "Either",
];

const intentOptions: InquiryFormValues["intent"][] = [
  "callback",
  "fees",
  "enrollment",
  "demo",
];

const inputClasses =
  "h-12 rounded-2xl border-input bg-background/80 text-foreground shadow-sm placeholder:text-muted-foreground focus-visible:ring-primary dark:border-white/12 dark:bg-slate-950/55 dark:text-white dark:placeholder:text-slate-400";

const textAreaClasses =
  "min-h-28 rounded-2xl border-input bg-background/80 text-foreground shadow-sm placeholder:text-muted-foreground focus-visible:ring-primary dark:border-white/12 dark:bg-slate-950/55 dark:text-white dark:placeholder:text-slate-400";

const labelClasses = "text-sm font-medium text-foreground dark:text-white/92";
const errorClasses = "min-h-5 text-xs text-destructive dark:text-rose-200";
const optionBaseClasses = "cursor-pointer rounded-2xl border px-4 py-3 text-sm transition";
const optionIdleClasses =
  "border-border/70 bg-muted/60 text-muted-foreground hover:border-primary/40 hover:bg-muted dark:border-white/12 dark:bg-white/5 dark:text-white/78 dark:hover:border-white/28";
const optionActiveClasses =
  "border-primary bg-primary/15 text-foreground ring-1 ring-primary/25 dark:text-white";
const campusOptionBaseClasses = "cursor-pointer rounded-full border px-4 py-2 text-sm transition";

const InquiryForm = ({
  defaultIntent = "callback",
  sourcePage,
  title = "Request guidance",
  description = "Tell us what you need and we will guide you to the right class, subject, and next step.",
  className,
}: InquiryFormProps) => {
  // useId generates a unique, stable ID per component instance — fixes the
  // duplicate id="fullName" accessibility violation when the form is mounted twice.
  const uid = useId();
  const fid = (name: string) => `${uid}-${name}`;

  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useForm<InquiryFormValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      ...defaultInquiryValues,
      intent: defaultIntent,
      sourcePage,
    },
  });
  const watchedStudentName = form.watch("studentName");
  const watchedClassLevel = form.watch("classLevel");

  const mutation = useMutation({
    mutationFn: submitInquiry,
    onSuccess: () => {
      setIsSubmitted(true);
      form.reset({
        ...defaultInquiryValues,
        intent: defaultIntent,
        sourcePage,
      });
      toast.success("Your request has been sent. Expect a follow-up soon.");
    },
    onError: (error: Error) => {
      toast.error(error.message || "Unable to send your request right now.");
    },
  });

  const onSubmit = form.handleSubmit(async (values) => {
    await mutation.mutateAsync({
      ...values,
      sourcePage,
    });
  });

  return (
    <Card
      className={[
        "overflow-hidden rounded-[28px] border border-border/60 bg-card/96 text-card-foreground shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/94",
        "flex flex-col lg:flex-row",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="flex-1 border-b border-border/60 bg-muted/70 p-6 sm:p-8 lg:w-1/3 lg:max-w-sm lg:border-b-0 lg:border-r dark:border-white/10 dark:bg-slate-950/36">
        <div className="space-y-3">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/25 bg-primary/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
          <ShieldCheck className="h-3.5 w-3.5" />
          Secure inquiry flow
        </div>
        {/* h2 instead of default h3 — fixes heading hierarchy skip (no parent h2 in hero section) */}
        <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground dark:text-white">{title}</h2>
        <p className="max-w-2xl text-sm leading-6 text-muted-foreground dark:text-white/78">{description}</p>
        </div>
      </div>

      <div className="flex-[2] bg-card/80 p-6 sm:p-8 dark:bg-slate-900/60">
        <CardContent className="space-y-6 h-full p-0">
        {isSubmitted ? (
          <div
            aria-live="polite"
            className="rounded-[24px] border border-emerald-500/30 bg-emerald-500/10 p-6 text-foreground dark:text-white"
          >
            <div className="mb-4 inline-flex rounded-full bg-emerald-500/15 p-3 text-emerald-600 dark:text-emerald-200">
              <PhoneCall className="h-5 w-5" />
            </div>
            <h3 className="text-2xl font-semibold">Inquiry received</h3>
            <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground dark:text-white/78">
              Thanks for sharing your details. Schoolars Hub can now follow up on
              the right class timing, subject fit, or enrollment support.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                type="button"
                variant="secondary"
                onClick={() => setIsSubmitted(false)}
              >
                Send another request
              </Button>
              <Button variant="outline" asChild>
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                    "Hi, I just submitted an inquiry on the Schoolars Hub website and would like to continue the conversation.",
                  )}`}
                  rel="noreferrer"
                  target="_blank"
                >
                  Continue on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        ) : (
          <form className="space-y-6" noValidate onSubmit={onSubmit}>
            <input
              autoComplete="off"
              className="hidden"
              tabIndex={-1}
              type="text"
              {...form.register("honeypot")}
            />

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label className={labelClasses} htmlFor={fid("fullName")}>
                  Parent or guardian name
                </Label>
                <Input
                  className={inputClasses}
                  id={fid("fullName")}
                  placeholder="Enter parent name"
                  {...form.register("fullName")}
                />
                <p className={errorClasses}>
                  {form.formState.errors.fullName?.message}
                </p>
              </div>

              <div className="space-y-2">
                <Label className={labelClasses} htmlFor={fid("studentName")}>
                  Student name
                </Label>
                <Input
                  className={inputClasses}
                  id={fid("studentName")}
                  placeholder="Enter student name"
                  {...form.register("studentName")}
                />
                <p className={errorClasses}>
                  {form.formState.errors.studentName?.message}
                </p>
              </div>

              <div className="space-y-2">
                <Label className={labelClasses} htmlFor={fid("phone")}>
                  Phone number
                </Label>
                <Input
                  className={inputClasses}
                  id={fid("phone")}
                  inputMode="tel"
                  placeholder="+91 98XXXXXXXX"
                  {...form.register("phone")}
                />
                <p className={errorClasses}>
                  {form.formState.errors.phone?.message}
                </p>
              </div>

              <div className="space-y-2">
                <Label className={labelClasses} htmlFor={fid("email")}>
                  Email address
                </Label>
                <Input
                  className={inputClasses}
                  id={fid("email")}
                  placeholder="Optional but helpful"
                  type="email"
                  {...form.register("email")}
                />
                <p className={errorClasses}>
                  {form.formState.errors.email?.message}
                </p>
              </div>

              <div className="space-y-2">
                <Label className={labelClasses} htmlFor={fid("classLevel")}>
                  Student class
                </Label>
                <Input
                  className={inputClasses}
                  id={fid("classLevel")}
                  placeholder="Example: Class 8"
                  {...form.register("classLevel")}
                />
                <p className={errorClasses}>
                  {form.formState.errors.classLevel?.message}
                </p>
              </div>

              <div className="space-y-2">
                <Label className={labelClasses} htmlFor={fid("subjectInterest")}>
                  Subject support needed
                </Label>
                <Input
                  className={inputClasses}
                  id={fid("subjectInterest")}
                  placeholder="Maths, Science, English..."
                  {...form.register("subjectInterest")}
                />
                <p className={errorClasses}>
                  {form.formState.errors.subjectInterest?.message}
                </p>
              </div>
            </div>

            <fieldset className="space-y-3">
              <legend className={labelClasses}>
                What kind of help do you want first?
              </legend>
              <div className="grid gap-3 sm:grid-cols-2">
                {intentOptions.map((option) => {
                  const checked = form.watch("intent") === option;
                  const inputId = fid(`intent-${option}`);
                  return (
                    <label
                      className={`${optionBaseClasses} ${
                        checked ? optionActiveClasses : optionIdleClasses
                      }`}
                      key={option}
                      htmlFor={inputId}
                    >
                      <input
                        className="sr-only"
                        id={inputId}
                        type="radio"
                        value={option}
                        {...form.register("intent")}
                      />
                      {intentLabels[option]}
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <fieldset className="space-y-3">
              <legend className={labelClasses}>
                Preferred campus
              </legend>
              <div className="flex flex-wrap gap-3">
                {campusOptions.map((campus) => {
                  const checked = form.watch("preferredCampus") === campus;
                  const inputId = fid(`campus-${campus}`);
                  return (
                    <label
                      className={`${campusOptionBaseClasses} ${
                        checked ? optionActiveClasses : optionIdleClasses
                      }`}
                      key={campus}
                      htmlFor={inputId}
                    >
                      <input
                        className="sr-only"
                        id={inputId}
                        type="radio"
                        value={campus}
                        {...form.register("preferredCampus")}
                      />
                      {campus}
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <div className="space-y-2">
              <Label className={labelClasses} htmlFor={fid("message")}>
                Message
              </Label>
              <Textarea
                className={textAreaClasses}
                id={fid("message")}
                placeholder="Share any goals, exam concerns, or specific scheduling details."
                {...form.register("message")}
              />
              <p className={errorClasses}>
                {form.formState.errors.message?.message}
              </p>
            </div>

            <div className="flex flex-col gap-4 rounded-[24px] border border-border/60 bg-muted/65 p-4 text-sm text-muted-foreground lg:flex-row lg:items-center lg:justify-between dark:border-white/10 dark:bg-slate-950/32 dark:text-white/78">
              <div>
                <p className="font-medium text-foreground dark:text-white/95">Submission summary</p>
                <p className="mt-1">
                  {watchedStudentName || "Student"} -{" "}
                  {watchedClassLevel || "Class details pending"}
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary">
                <MessageSquare className="h-4 w-4" />
                Preview before sending
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                className="min-h-12 flex-1 rounded-2xl"
                disabled={mutation.isPending}
                size="lg"
                type="submit"
                variant="hero"
              >
                {mutation.isPending ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending request
                  </>
                ) : (
                  "Send inquiry"
                )}
              </Button>
              <Button className="min-h-12 rounded-2xl" size="lg" variant="outline" asChild>
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                    "Hi, I would like to ask about Schoolars Hub classes.",
                  )}`}
                  rel="noreferrer"
                  target="_blank"
                >
                  WhatsApp instead
                </a>
              </Button>
            </div>
          </form>
        )}
        </CardContent>
      </div>
    </Card>
  );
};

export default InquiryForm;
