"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { Button } from "@/components/ui/Button";

const SUGGESTIONS = [
  "Which wood species would work best for a bright kitchen?",
  "What's the difference between inset and overlay cabinets?",
  "What cabinet styles fit a modern farmhouse?",
  "Tell me about Vivant's design process.",
  "How long does a custom cabinetry project usually take?",
  "Can you show me projects similar to a walnut media wall?",
];

function getText(message: UIMessage): string {
  return message.parts
    .filter((p): p is { type: "text"; text: string } => p.type === "text")
    .map((p) => p.text)
    .join("");
}

type ProjectResult = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  location: string;
  coverImage: string;
  href: string;
};

function extractProjects(message: UIMessage): ProjectResult[] {
  const found: ProjectResult[] = [];
  for (const part of message.parts) {
    if (
      part.type === "tool-searchProjects" &&
      "state" in part &&
      part.state === "output-available" &&
      "output" in part
    ) {
      const output = part.output as { results?: ProjectResult[] };
      if (output?.results) found.push(...output.results);
    }
  }
  return found;
}

export function ConsultantShell() {
  const [input, setInput] = useState("");
  const [unavailable, setUnavailable] = useState(false);

  const transport = useMemo(
    () =>
      new DefaultChatTransport({
        api: "/api/consult",
      }),
    [],
  );

  const { messages, sendMessage, status, error, clearError } = useChat({
    transport,
    onError: (err) => {
      if (err.message.includes("503") || err.message.includes("unavailable")) {
        setUnavailable(true);
      }
    },
  });

  const busy = status === "submitted" || status === "streaming";

  async function submitText(text: string) {
    const trimmed = text.trim();
    if (!trimmed || busy) return;
    setUnavailable(false);
    clearError();
    setInput("");
    await sendMessage({
      text: trimmed,
    });
  }

  return (
    <div className="grid lg:grid-cols-[1fr_320px] gap-10 min-h-[70vh]">
      <div className="flex flex-col border border-border bg-bg-elevated shadow-[var(--shadow)]">
        <div className="border-b border-border px-6 py-5">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">
            Design Consultant
          </p>
          <h2 className="font-display text-2xl mt-1">
            A conversation about craft
          </h2>
        </div>

        <div
          className="flex-1 overflow-y-auto px-6 py-6 space-y-6 min-h-[420px] max-h-[60vh]"
          aria-live="polite"
        >
          {messages.length === 0 ? (
            <div className="text-ink-muted leading-relaxed max-w-xl">
              <p>
                When you&apos;re ready, ask about wood species, cabinet styles,
                finishes, timelines, or projects that feel close to what you
                imagine.
              </p>
              <p className="mt-4 text-sm">
                This is a design conversation—not a sales chat.
              </p>
            </div>
          ) : null}

          {messages.map((m) => {
            const projects = extractProjects(m);
            return (
              <div
                key={m.id}
                className={
                  m.role === "user" ? "ml-8 md:ml-16" : "mr-4 md:mr-12"
                }
              >
                <p className="text-xs uppercase tracking-[0.14em] text-ink-muted mb-2">
                  {m.role === "user" ? "You" : "Consultant"}
                </p>
                <div className="text-ink leading-relaxed whitespace-pre-wrap">
                  {getText(m)}
                </div>
                {projects.length > 0 ? (
                  <div className="mt-4 grid sm:grid-cols-2 gap-3">
                    {projects.map((p) => (
                      <Link
                        key={p.slug}
                        href={p.href}
                        className="group border border-border overflow-hidden hover:border-ink/30 transition-colors"
                      >
                        <div className="relative aspect-[4/3]">
                          <Image
                            src={p.coverImage}
                            alt={p.title}
                            fill
                            className="object-cover"
                            sizes="240px"
                          />
                        </div>
                        <div className="p-3">
                          <p className="text-xs text-accent uppercase tracking-wider">
                            {p.category}
                          </p>
                          <p className="font-display text-lg">{p.title}</p>
                          <p className="text-xs text-ink-muted">{p.location}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}

          {busy ? (
            <p className="text-sm text-ink-muted italic">Considering…</p>
          ) : null}

          {unavailable || error ? (
            <div className="border border-border p-4 text-sm text-ink-muted">
              <p>
                The Design Consultant is temporarily unavailable
                {process.env.NODE_ENV === "development"
                  ? " (set OPENAI_API_KEY in .env.local)"
                  : ""}
                . You can still{" "}
                <Link href="/contact" className="underline underline-offset-2">
                  request a private consultation
                </Link>{" "}
                or explore the{" "}
                <Link
                  href="/design-journey"
                  className="underline underline-offset-2"
                >
                  Design Journey
                </Link>
                .
              </p>
            </div>
          ) : null}
        </div>

        <form
          className="border-t border-border p-4 flex gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            void submitText(input);
          }}
        >
          <label htmlFor="consult-input" className="sr-only">
            Your question
          </label>
          <input
            id="consult-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about materials, styles, process…"
            className="flex-1 bg-bg border border-border px-4 py-3 text-ink focus:outline-none focus:border-accent"
            disabled={busy}
          />
          <Button type="submit" disabled={busy || !input.trim()}>
            Send
          </Button>
        </form>
      </div>

      <aside className="space-y-8">
        <div>
          <h3 className="text-xs uppercase tracking-[0.18em] text-accent mb-4">
            Explore ideas
          </h3>
          <ul className="space-y-3">
            {SUGGESTIONS.map((s) => (
              <li key={s}>
                <button
                  type="button"
                  onClick={() => void submitText(s)}
                  disabled={busy}
                  className="text-left text-sm text-ink-muted hover:text-ink transition-colors leading-snug underline-offset-4 hover:underline disabled:opacity-50"
                >
                  {s}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t border-border pt-6 space-y-3">
          <Button href="/design-journey" variant="secondary" className="w-full">
            Start Designing Your Dream Space
          </Button>
          <Button href="/contact" variant="ghost" className="w-full">
            Schedule a Design Consultation
          </Button>
        </div>
      </aside>
    </div>
  );
}
