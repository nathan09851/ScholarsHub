import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Loader2, MessageSquare, PhoneCall, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  "h-12 rounded-2xl border-white/20 bg-white/80 text-slate-900 shadow-sm placeholder:text-slate-500 focus-visible:ring-amber-500";

const textAreaClasses =
  "min-h-28 rounded-2xl border-white/20 bg-white/80 text-slate-900 shadow-sm placeholder:text-slate-500 focus-visible:ring-amber-500";

const InquiryForm = ({
  defaultIntent = "callback",
  sourcePage,
  title = "Request guidance",
  description = "Tell us what you need and we will guide you to the right class, subject, and next step.",
  className,
}: InquiryFormProps) => {
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
        "overflow-hidden rounded-[28px] border-white/15 bg-white/10 shadow-2xl backdrop-blur-xl",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <CardHeader className="space-y-3 border-b border-white/10 bg-slate-950/35">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-amber-100/80">
          <ShieldCheck className="h-3.5 w-3.5" />
          Secure inquiry flow
        </div>
        <CardTitle className="font-serif text-3xl text-white">{title}</CardTitle>
        <p className="max-w-2xl text-sm leading-6 text-white/72">{description}</p>
      </CardHeader>

      <CardContent className="space-y-6 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 sm:p-8">
        {isSubmitted ? (
          <div
            aria-live="polite"
            className="rounded-[24px] border border-emerald-200/40 bg-emerald-100/10 p-6 text-white"
          >
            <div className="mb-4 inline-flex rounded-full bg-emerald-400/20 p-3 text-emerald-100">
              <PhoneCall className="h-5 w-5" />
            </div>
            <h3 className="text-2xl font-semibold">Inquiry received</h3>
            <p className="mt-3 max-w-xl text-sm leading-6 text-white/78">
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
                <Label className="text-white" htmlFor="fullName">
                  Parent or guardian name
                </Label>
                <Input
                  className={inputClasses}
                  id="fullName"
                  placeholder="Enter parent name"
                  {...form.register("fullName")}
                />
                <p className="min-h-5 text-xs text-rose-200">
                  {form.formState.errors.fullName?.message}
                </p>
              </div>

              <div className="space-y-2">
                <Label className="text-white" htmlFor="studentName">
                  Student name
                </Label>
                <Input
                  className={inputClasses}
                  id="studentName"
                  placeholder="Enter student name"
                  {...form.register("studentName")}
                />
                <p className="min-h-5 text-xs text-rose-200">
                  {form.formState.errors.studentName?.message}
                </p>
              </div>

              <div className="space-y-2">
                <Label className="text-white" htmlFor="phone">
                  Phone number
                </Label>
                <Input
                  className={inputClasses}
                  id="phone"
                  inputMode="tel"
                  placeholder="+91 98XXXXXXXX"
                  {...form.register("phone")}
                />
                <p className="min-h-5 text-xs text-rose-200">
                  {form.formState.errors.phone?.message}
                </p>
              </div>

              <div className="space-y-2">
                <Label className="text-white" htmlFor="email">
                  Email address
                </Label>
                <Input
                  className={inputClasses}
                  id="email"
                  placeholder="Optional but helpful"
                  type="email"
                  {...form.register("email")}
                />
                <p className="min-h-5 text-xs text-rose-200">
                  {form.formState.errors.email?.message}
                </p>
              </div>

              <div className="space-y-2">
                <Label className="text-white" htmlFor="classLevel">
                  Student class
                </Label>
                <Input
                  className={inputClasses}
                  id="classLevel"
                  placeholder="Example: Class 8"
                  {...form.register("classLevel")}
                />
                <p className="min-h-5 text-xs text-rose-200">
                  {form.formState.errors.classLevel?.message}
                </p>
              </div>

              <div className="space-y-2">
                <Label className="text-white" htmlFor="subjectInterest">
                  Subject support needed
                </Label>
                <Input
                  className={inputClasses}
                  id="subjectInterest"
                  placeholder="Maths, Science, English..."
                  {...form.register("subjectInterest")}
                />
                <p className="min-h-5 text-xs text-rose-200">
                  {form.formState.errors.subjectInterest?.message}
                </p>
              </div>
            </div>

            <fieldset className="space-y-3">
              <legend className="text-sm font-medium text-white">
                What kind of help do you want first?
              </legend>
              <div className="grid gap-3 sm:grid-cols-2">
                {intentOptions.map((option) => {
                  const checked = form.watch("intent") === option;
                  return (
                    <label
                      className={`cursor-pointer rounded-2xl border px-4 py-3 text-sm transition ${
                        checked
                          ? "border-amber-400 bg-amber-400/18 text-white"
                          : "border-white/15 bg-white/6 text-white/78 hover:border-white/30"
                      }`}
                      key={option}
                    >
                      <input
                        className="sr-only"
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
              <legend className="text-sm font-medium text-white">
                Preferred campus
              </legend>
              <div className="flex flex-wrap gap-3">
                {campusOptions.map((campus) => {
                  const checked = form.watch("preferredCampus") === campus;
                  return (
                    <label
                      className={`cursor-pointer rounded-full border px-4 py-2 text-sm transition ${
                        checked
                          ? "border-cyan-300 bg-cyan-300/18 text-white"
                          : "border-white/15 bg-white/6 text-white/78 hover:border-white/30"
                      }`}
                      key={campus}
                    >
                      <input
                        className="sr-only"
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
              <Label className="text-white" htmlFor="message">
                Message
              </Label>
              <Textarea
                className={textAreaClasses}
                id="message"
                placeholder="Share any goals, exam concerns, or specific scheduling details."
                {...form.register("message")}
              />
              <p className="min-h-5 text-xs text-rose-200">
                {form.formState.errors.message?.message}
              </p>
            </div>

            <div className="flex flex-col gap-4 rounded-[24px] border border-white/10 bg-slate-950/30 p-4 text-sm text-white/75 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="font-medium text-white">Submission snapshot</p>
                <p className="mt-1">
                  {watchedStudentName || "Student"} -{" "}
                  {watchedClassLevel || "Class details pending"}
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-amber-100/75">
                <MessageSquare className="h-4 w-4" />
                Zod validated + edge function ready
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
    </Card>
  );
};

export default InquiryForm;
