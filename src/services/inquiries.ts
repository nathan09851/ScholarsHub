import { SupabaseClient } from "@supabase/supabase-js";

import { inquirySchema, type InquiryFormValues } from "@/schemas/inquiry";

import { supabase } from "@/integrations/supabase/client";

interface InquiryResponse {
  success: boolean;
  requestId?: string;
  message?: string;
}

const FUNCTION_NAME =
  import.meta.env.VITE_SUPABASE_INQUIRY_FUNCTION ?? "submit-inquiry";

function getErrorMessage(error: unknown) {
  if (error instanceof Error) {
    return error.message;
  }

  return "We could not send your request right now.";
}

export async function submitInquiry(
  payload: InquiryFormValues,
  client: SupabaseClient = supabase,
): Promise<InquiryResponse> {
  const validated = inquirySchema.parse(payload);
  const { honeypot: _honeypot, ...body } = validated;

  const { data, error } = await client.functions.invoke<InquiryResponse>(
    FUNCTION_NAME,
    {
      body,
    },
  );

  if (error) {
    throw new Error(getErrorMessage(error));
  }

  if (!data?.success) {
    throw new Error(
      data?.message ?? "We could not record your inquiry. Please try again.",
    );
  }

  return data;
}
