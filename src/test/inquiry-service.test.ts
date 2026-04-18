import { describe, expect, it, vi } from "vitest";

import { submitInquiry } from "@/services/inquiries";

describe("submitInquiry", () => {
  it("invokes the configured edge function with validated data", async () => {
    const invoke = vi.fn().mockResolvedValue({
      data: { success: true, requestId: "abc-123" },
      error: null,
    });

    const mockClient = {
      functions: {
        invoke,
      },
    } as never;

    const result = await submitInquiry(
      {
        fullName: "Asha Naik",
        studentName: "Riya Naik",
        phone: "+91 9876543210",
        email: "asha@example.com",
        classLevel: "Class 8",
        preferredCampus: "Either",
        intent: "fees",
        subjectInterest: "Mathematics",
        message: "Need fee details.",
        sourcePage: "payments-page",
        honeypot: "",
      },
      mockClient,
    );

    expect(invoke).toHaveBeenCalledWith("submit-inquiry", {
      body: expect.objectContaining({
        fullName: "Asha Naik",
        sourcePage: "payments-page",
      }),
    });
    expect(result.requestId).toBe("abc-123");
  });
});
