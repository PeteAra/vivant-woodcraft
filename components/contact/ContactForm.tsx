"use client";

import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import type { ProjectBrief } from "@/lib/ai/types";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const journeySummary = useMemo(() => {
    const space = searchParams.get("space");
    if (!space && !searchParams.get("from")) return null;
    return {
      space: searchParams.get("space") || undefined,
      style: searchParams.get("style") || undefined,
      cabinetry: searchParams.get("cabinetry") || undefined,
      wood: searchParams.get("wood") || undefined,
      finish: searchParams.get("finish") || undefined,
      hardware: searchParams.get("hardware") || undefined,
      favorites: searchParams.get("favorites") || undefined,
    };
  }, [searchParams]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    const brief: ProjectBrief | undefined = journeySummary
      ? {
          room: journeySummary.space,
          designStyle: journeySummary.style,
          cabinetStyle: journeySummary.cabinetry,
          woodSpecies: journeySummary.wood,
          finish: journeySummary.finish,
          hardware: journeySummary.hardware,
          inspirationImageIds: journeySummary.favorites
            ? journeySummary.favorites.split(",").filter(Boolean)
            : [],
          customerNotes: String(data.get("message") || ""),
          generatedAt: new Date().toISOString(),
        }
      : undefined;

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          projectType: data.get("projectType"),
          message: data.get("message"),
          journey: journeySummary,
          brief,
        }),
      });

      if (!res.ok) throw new Error("Unable to submit right now.");

      setStatus("success");
      form.reset();
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "vivant-last-consultation",
          JSON.stringify({ at: Date.now(), journey: journeySummary }),
        );
      }
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-border bg-bg-elevated p-8 md:p-10 shadow-[var(--shadow)]">
        <p className="text-xs uppercase tracking-[0.2em] text-accent">
          Received
        </p>
        <h2 className="font-display text-3xl mt-3">Thank you</h2>
        <p className="mt-4 text-ink-muted leading-relaxed">
          Your consultation request has been saved. We&apos;ll be in touch
          shortly to schedule a private conversation about your project.
        </p>
        <Button
          type="button"
          variant="secondary"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {journeySummary ? (
        <div className="border border-accent/30 bg-bg-elevated p-5 text-sm text-ink-muted">
          <p className="text-xs uppercase tracking-[0.16em] text-accent mb-2">
            Design Journey included
          </p>
          <p>
            {[
              journeySummary.space,
              journeySummary.style,
              journeySummary.cabinetry,
              journeySummary.wood,
              journeySummary.finish,
              journeySummary.hardware,
            ]
              .filter(Boolean)
              .join(" · ")}
          </p>
        </div>
      ) : null}

      <div className="grid sm:grid-cols-2 gap-6">
        <Field label="Name" name="name" required autoComplete="name" />
        <Field
          label="Email"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
        <div>
          <label htmlFor="projectType" className="block text-xs uppercase tracking-[0.14em] text-ink-muted mb-2">
            Project type
          </label>
          <select
            id="projectType"
            name="projectType"
            defaultValue={journeySummary?.space ?? ""}
            className="w-full border border-border bg-bg-elevated px-4 py-3 text-ink focus:outline-none focus:border-accent"
          >
            <option value="">Select…</option>
            <option value="kitchen">Kitchen</option>
            <option value="bathroom">Bathroom</option>
            <option value="built-ins">Built-ins</option>
            <option value="millwork">Architectural Millwork</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-xs uppercase tracking-[0.14em] text-ink-muted mb-2"
        >
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full border border-border bg-bg-elevated px-4 py-3 text-ink focus:outline-none focus:border-accent resize-y"
          placeholder="Timeline, style preferences, or questions…"
        />
      </div>

      {error ? <p className="text-sm text-walnut">{error}</p> : null}

      <Button type="submit" disabled={status === "submitting"}>
        {status === "submitting"
          ? "Sending…"
          : "Request a Private Consultation"}
      </Button>

      <p className="text-xs text-ink-muted">
        Or call{" "}
        <a href={siteConfig.phoneHref} className="underline underline-offset-2">
          {siteConfig.phone}
        </a>
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs uppercase tracking-[0.14em] text-ink-muted mb-2"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full border border-border bg-bg-elevated px-4 py-3 text-ink focus:outline-none focus:border-accent"
      />
    </div>
  );
}
