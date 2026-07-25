import { NextResponse } from "next/server";
import type { ProjectBrief } from "@/lib/ai/types";

/**
 * Consultation intake stub.
 * Persists nothing remotely yet — returns success so the UX is complete.
 * Wire Resend (or similar) here when email delivery is decided.
 *
 * Accepts optional `brief` (Phase 3) so future AI-generated documents
 * attach without reshaping this endpoint.
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message, brief } = body as {
      name?: string;
      email?: string;
      phone?: string;
      projectType?: string;
      message?: string;
      journey?: Record<string, unknown>;
      brief?: ProjectBrief;
    };

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    // TODO: send email via Resend when RESEND_API_KEY + CONTACT_TO are set
    console.info("[consultation]", {
      name,
      email,
      hasJourney: Boolean(body.journey),
      hasBrief: Boolean(brief),
      at: new Date().toISOString(),
    });

    return NextResponse.json({
      ok: true,
      message: "queued locally",
    });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
