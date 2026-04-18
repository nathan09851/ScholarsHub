import { describe, expect, it } from "vitest";

import { inquirySchema } from "@/schemas/inquiry";

describe("inquiry schema", () => {
  it("accepts a valid inquiry payload", () => {
    const result = inquirySchema.safeParse({
      fullName: "Asha Naik",
      studentName: "Riya Naik",
      phone: "+91 9876543210",
      email: "asha@example.com",
      classLevel: "Class 8",
      preferredCampus: "Thivim",
      intent: "callback",
      subjectInterest: "Mathematics and Science",
      message: "Need support before final exams.",
      sourcePage: "home-hero",
      honeypot: "",
    });

    expect(result.success).toBe(true);
  });

  it("rejects spammy honeypot submissions", () => {
    const result = inquirySchema.safeParse({
      fullName: "Asha Naik",
      studentName: "Riya Naik",
      phone: "+91 9876543210",
      email: "asha@example.com",
      classLevel: "Class 8",
      preferredCampus: "Thivim",
      intent: "callback",
      subjectInterest: "Mathematics",
      message: "",
      sourcePage: "home-hero",
      honeypot: "bot",
    });

    expect(result.success).toBe(false);
  });
});
