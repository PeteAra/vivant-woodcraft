import {
  convertToModelMessages,
  stepCountIs,
  streamText,
  type UIMessage,
} from "ai";
import { openai } from "@ai-sdk/openai";
import { buildSystemPrompt } from "@/lib/ai/system-prompt";
import { consultTools } from "@/lib/ai/tools";
import type { DesignPreferences } from "@/lib/ai/types";

export const maxDuration = 30;

export async function POST(req: Request) {
  if (!process.env.OPENAI_API_KEY) {
    return Response.json(
      {
        error:
          "The Design Consultant is temporarily unavailable. Please try again later or request a private consultation.",
      },
      { status: 503 },
    );
  }

  const body = await req.json();
  const messages = body.messages as UIMessage[];
  const preferences = body.preferences as DesignPreferences | undefined;

  const preferenceNote = preferences
    ? `\n\nVisitor preferences (Phase 2 hook): ${JSON.stringify(preferences)}`
    : "";

  const result = streamText({
    model: openai("gpt-4o"),
    system: buildSystemPrompt() + preferenceNote,
    messages: await convertToModelMessages(messages),
    tools: consultTools,
    stopWhen: stepCountIs(5),
  });

  return result.toUIMessageStreamResponse();
}
