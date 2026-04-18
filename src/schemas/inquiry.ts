import { z } from "zod";

const phonePattern = /^[0-9+\s()-]{10,20}$/;

export const inquirySchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter the parent or guardian name.")
    .max(80, "Name must be 80 characters or less."),
  studentName: z
    .string()
    .trim()
    .min(2, "Please enter the student name.")
    .max(80, "Student name must be 80 characters or less."),
  phone: z
    .string()
    .trim()
    .regex(phonePattern, "Enter a valid phone number."),
  email: z
    .string()
    .trim()
    .email("Enter a valid email address.")
    .or(z.literal(""))
    .transform((value) => value.trim()),
  classLevel: z
    .string()
    .trim()
    .min(2, "Please mention the class.")
    .max(30, "Class must be 30 characters or less."),
  preferredCampus: z
    .enum(["Thivim", "Corlim", "Either"])
    .default("Either"),
  intent: z
    .enum(["callback", "fees", "enrollment", "demo"])
    .default("callback"),
  subjectInterest: z
    .string()
    .trim()
    .min(2, "Please tell us which subject help is needed.")
    .max(120, "Subject details must be 120 characters or less."),
  message: z
    .string()
    .trim()
    .max(600, "Message must be 600 characters or less.")
    .optional()
    .transform((value) => value ?? ""),
  sourcePage: z.string().trim().min(1).max(80),
  honeypot: z
    .string()
    .trim()
    .max(0, "Spam detected.")
    .optional()
    .default(""),
});

export type InquiryFormValues = z.infer<typeof inquirySchema>;

export const defaultInquiryValues: InquiryFormValues = {
  fullName: "",
  studentName: "",
  phone: "",
  email: "",
  classLevel: "",
  preferredCampus: "Either",
  intent: "callback",
  subjectInterest: "",
  message: "",
  sourcePage: "website",
  honeypot: "",
};

export const intentLabels: Record<InquiryFormValues["intent"], string> = {
  callback: "Call me back",
  fees: "Share fees",
  enrollment: "Start enrollment",
  demo: "Need guidance",
};
