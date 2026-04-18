import { createClient } from "npm:@supabase/supabase-js@2.90.1";
import { z } from "https://esm.sh/zod@3.25.76";

import { corsHeaders } from "../_shared/cors.ts";

const inquirySchema = z.object({
  fullName: z.string().trim().min(2).max(80),
  studentName: z.string().trim().min(2).max(80),
  phone: z.string().trim().min(10).max(20),
  email: z.string().trim().email().or(z.literal("")),
  classLevel: z.string().trim().min(2).max(30),
  preferredCampus: z.enum(["Thivim", "Corlim", "Either"]),
  intent: z.enum(["callback", "fees", "enrollment", "demo"]),
  subjectInterest: z.string().trim().min(2).max(120),
  message: z.string().trim().max(600).optional().default(""),
  sourcePage: z.string().trim().min(1).max(80),
});

const WINDOW_MINUTES = 15;
const MAX_REQUESTS_PER_WINDOW = 5;

function buildHeaders(origin: string | null) {
  return {
    ...corsHeaders,
    "Access-Control-Allow-Origin": origin ?? "*",
    "Content-Type": "application/json",
  };
}

function parseAllowedOrigins() {
  const raw = Deno.env.get("ALLOWED_ORIGINS") ?? "";
  return raw
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
}

async function sha256(value: string) {
  const data = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

Deno.serve(async (request) => {
  const origin = request.headers.get("origin");
  const headers = buildHeaders(origin);

  if (request.method === "OPTIONS") {
    return new Response("ok", { headers });
  }

  if (request.method !== "POST") {
    return new Response(
      JSON.stringify({ success: false, message: "Method not allowed." }),
      { headers, status: 405 },
    );
  }

  const allowedOrigins = parseAllowedOrigins();
  if (allowedOrigins.length > 0 && origin && !allowedOrigins.includes(origin)) {
    return new Response(
      JSON.stringify({ success: false, message: "Origin not allowed." }),
      { headers, status: 403 },
    );
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

  if (!supabaseUrl || !serviceRoleKey) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Server configuration is incomplete.",
      }),
      { headers, status: 500 },
    );
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });

  const payload = inquirySchema.safeParse(await request.json());
  if (!payload.success) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Please check the form fields and try again.",
        issues: payload.error.flatten(),
      }),
      { headers, status: 400 },
    );
  }

  const userAgent = request.headers.get("user-agent") ?? "";
  const forwardedFor = request.headers.get("x-forwarded-for") ?? "";
  const clientIp = forwardedFor.split(",")[0]?.trim() ?? "unknown";
  const fingerprint = await sha256(`${clientIp}|${userAgent}`);

  const windowStart = new Date(
    Date.now() - WINDOW_MINUTES * 60 * 1000,
  ).toISOString();

  const { count, error: rateError } = await supabase
    .from("inquiry_requests")
    .select("id", {
      count: "exact",
      head: true,
    })
    .eq("ip_fingerprint", fingerprint)
    .gte("created_at", windowStart);

  if (rateError) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Could not validate request limits.",
      }),
      { headers, status: 500 },
    );
  }

  if ((count ?? 0) >= MAX_REQUESTS_PER_WINDOW) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Too many requests. Please wait a bit and try again.",
      }),
      { headers, status: 429 },
    );
  }

  const { data, error } = await supabase
    .from("inquiry_requests")
    .insert({
      full_name: payload.data.fullName,
      student_name: payload.data.studentName,
      phone: payload.data.phone,
      email: payload.data.email || null,
      class_level: payload.data.classLevel,
      preferred_campus: payload.data.preferredCampus,
      intent: payload.data.intent,
      subject_interest: payload.data.subjectInterest,
      message: payload.data.message || null,
      source_page: payload.data.sourcePage,
      user_agent: userAgent || null,
      request_origin: origin || null,
      ip_fingerprint: fingerprint,
    })
    .select("id")
    .single();

  if (error) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Could not save your inquiry right now.",
      }),
      { headers, status: 500 },
    );
  }

  return new Response(
    JSON.stringify({
      success: true,
      requestId: data.id,
      message: "Inquiry recorded successfully.",
    }),
    { headers, status: 200 },
  );
});
