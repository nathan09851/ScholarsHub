import { supabase } from "@/integrations/supabase/client";

export interface Message {
  role: "user" | "assistant" | "system";
  content: string;
}

export interface ChatResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Array<{
    index: number;
    message: {
      role: string;
      content: string;
    };
    finish_reason: string;
  }>;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

/**
 * Sends a list of messages to the secure backend Supabase Edge Function 'ask-ai'
 * which securely proxies the request to OpenRouter.
 *
 * @param messages Array of messages representing the conversation history.
 * @param model Optional model identifier. Defaults to Llama 3 8B (free model).
 * @returns The parsed chat completion response from OpenRouter.
 */
export async function askAI(
  messages: Message[],
  model?: string
): Promise<ChatResponse> {
  const { data, error } = await supabase.functions.invoke<ChatResponse>("ask-ai", {
    body: { messages, model },
  });

  if (error) {
    console.error("Supabase function execution failed:", error);
    throw new Error(error.message || "Failed to communicate with AI service.");
  }

  if (!data) {
    throw new Error("No response returned from the AI service.");
  }

  return data;
}
