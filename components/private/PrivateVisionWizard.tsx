"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { PrivateIntroHero } from "@/components/private/PrivateIntroHero";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import {
  VISION_STORAGE_KEY,
  emptyVisionSelections,
  labelFrom,
  layoutsForSpace,
  visionDoorStyles,
  visionHardware,
  visionMaterials,
  visionMoldings,
  visionSpaces,
  visionSteps,
  visionStyles,
  visionSummaryLines,
  visionToBrief,
  type VisionOption,
  type VisionSelections,
  type VisionStepId,
} from "@/data/private-vision";

function LearnNote({ children }: { children: React.ReactNode }) {
  return (
    <aside className="mb-8 max-w-2xl border-l-2 border-accent/40 pl-5 py-1 text-sm md:text-base text-ink-muted leading-relaxed">
      {children}
    </aside>
  );
}

function OptionCard({
  option,
  selected,
  onSelect,
  multi,
}: {
  option: VisionOption;
  selected: boolean;
  onSelect: () => void;
  multi?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={`group text-left overflow-hidden border transition-all duration-300 ${
        selected
          ? "border-ink shadow-[var(--shadow)] ring-1 ring-ink/10"
          : "border-border hover:border-ink/30"
      }`}
    >
      {option.image ? (
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={option.image}
            alt=""
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
        </div>
      ) : null}
      <div className="p-4 md:p-5">
        <div className="flex items-start justify-between gap-3">
          <p className="font-display text-xl md:text-2xl leading-tight">
            {option.label}
          </p>
          {multi ? (
            <span
              className={`mt-1 h-4 w-4 shrink-0 border ${
                selected ? "bg-ink border-ink" : "border-ink/30"
              }`}
              aria-hidden
            />
          ) : null}
        </div>
        {option.description ? (
          <p className="mt-2 text-sm text-ink-muted leading-relaxed">
            {option.description}
          </p>
        ) : null}
      </div>
    </button>
  );
}

type Status = "idle" | "submitting" | "success" | "error";

export function PrivateVisionWizard() {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);
  const [started, setStarted] = useState(false);
  const [selections, setSelections] = useState<VisionSelections>(
    emptyVisionSelections,
  );
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const current = visionSteps[step];
  const progress = ((step + 1) / visionSteps.length) * 100;

  useEffect(() => {
    try {
      const raw = localStorage.getItem(VISION_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as VisionSelections;
        setSelections({ ...emptyVisionSelections(), ...parsed, layouts: parsed.layouts ?? [] });
      }
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(VISION_STORAGE_KEY, JSON.stringify(selections));
  }, [selections]);

  const layoutOptions = useMemo(
    () => layoutsForSpace(selections.space),
    [selections.space],
  );

  function setSingle<K extends keyof VisionSelections>(
    key: K,
    value: VisionSelections[K],
  ) {
    setSelections((prev) => ({ ...prev, [key]: value }));
  }

  function toggleLayout(id: string) {
    setSelections((prev) => {
      const has = prev.layouts.includes(id);
      if (id === "not-sure") {
        return { ...prev, layouts: has ? [] : ["not-sure"] };
      }
      const without = prev.layouts.filter((x) => x !== "not-sure" && x !== id);
      return {
        ...prev,
        layouts: has ? without : [...without, id],
      };
    });
  }

  function canContinue(): boolean {
    switch (current.id as VisionStepId) {
      case "space":
        return Boolean(selections.space);
      case "layout":
        return selections.layouts.length > 0;
      case "style":
        return Boolean(selections.style);
      case "doors":
        return Boolean(selections.doorStyle);
      case "molding":
        return Boolean(selections.molding);
      case "material":
        return Boolean(selections.material);
      case "hardware":
        return Boolean(selections.hardware);
      case "notes":
        return true;
      case "summary":
        return true;
      default:
        return false;
    }
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);
    const data = new FormData(e.currentTarget);
    const brief = visionToBrief(selections);
    const summaryText = visionSummaryLines(selections)
      .map((l) => `${l.label}: ${l.value}`)
      .join("\n");

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          projectType: selections.space ?? "private-vision",
          message:
            String(data.get("message") || selections.notes || "").trim() ||
            "Private client vision brief submitted.",
          journey: selections,
          brief: {
            ...brief,
            summaryNarrative: summaryText,
          },
          source: "private-vision",
        }),
      });
      if (!res.ok) throw new Error("Unable to send your vision right now.");
      setStatus("success");
      localStorage.setItem(
        "vivant-last-consultation",
        JSON.stringify({ at: Date.now(), selections }),
      );
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  const gridClass =
    "grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5";

  return (
    <div className="min-h-[100svh]">
      {started ? (
        <div className="sticky top-0 z-20 bg-bg/92 backdrop-blur-md border-b border-border">
          <div className="mx-auto max-w-5xl px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
            <Link
              href="/"
              className="font-display text-xl tracking-tight text-ink hover:opacity-80"
            >
              {siteConfig.shortName}
            </Link>
            <p className="text-xs uppercase tracking-[0.16em] text-ink-muted">
              Step {step + 1} of {visionSteps.length}
            </p>
          </div>
          <div className="h-px bg-border">
            <div
              className="h-full bg-accent transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      ) : null}

      {!started ? (
        <PrivateIntroHero
          onBuildVision={() => {
            setStarted(true);
            setStep(0);
          }}
        />
      ) : (
        <div className="mx-auto max-w-5xl px-6 lg:px-8 py-12 md:py-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="font-display text-3xl md:text-5xl leading-tight text-balance">
                {current.title}
              </h2>
              <p className="mt-4 text-ink-muted text-base md:text-lg max-w-2xl leading-relaxed">
                {current.subtitle}
              </p>

              <div className="mt-10">
                {current.id === "space" ? (
                  <>
                    <LearnNote>
                      Vivant crafts custom woodwork for many kinds of spaces—anywhere
                      cabinetry and millwork become part of the architecture.
                    </LearnNote>
                    <div className={gridClass}>
                      {visionSpaces.map((o) => (
                        <OptionCard
                          key={o.id}
                          option={o}
                          selected={selections.space === o.id}
                          onSelect={() => {
                            setSingle("space", o.id);
                            setSingle("layouts", []);
                          }}
                        />
                      ))}
                    </div>
                  </>
                ) : null}

                {current.id === "layout" ? (
                  <>
                    <LearnNote>
                      Layout is how cabinetry meets the room—floor to ceiling,
                      islands, runs above windows. Pick what you imagine; we
                      refine it together in design.
                    </LearnNote>
                    <div className={gridClass}>
                      {layoutOptions.map((o) => (
                        <OptionCard
                          key={o.id}
                          option={o}
                          multi
                          selected={selections.layouts.includes(o.id)}
                          onSelect={() => toggleLayout(o.id)}
                        />
                      ))}
                    </div>
                  </>
                ) : null}

                {current.id === "style" ? (
                  <>
                    <LearnNote>
                      Mood guides every later choice—door profiles, hardware,
                      and wood tone. There&apos;s no wrong answer; we&apos;ll
                      tune the details in consultation.
                    </LearnNote>
                    <div className={gridClass}>
                      {visionStyles.map((o) => (
                        <OptionCard
                          key={o.id}
                          option={o}
                          selected={selections.style === o.id}
                          onSelect={() => setSingle("style", o.id)}
                        />
                      ))}
                    </div>
                  </>
                ) : null}

                {current.id === "doors" ? (
                  <>
                    <LearnNote>
                      Door style is the face of your cabinetry. Framed doors
                      feel classic; flat doors feel modern; inset doors read
                      like fine furniture. Samples make the choice easy in person.
                    </LearnNote>
                    <div className={gridClass}>
                      {visionDoorStyles.map((o) => (
                        <OptionCard
                          key={o.id}
                          option={o}
                          selected={selections.doorStyle === o.id}
                          onSelect={() => setSingle("doorStyle", o.id)}
                        />
                      ))}
                    </div>
                  </>
                ) : null}

                {current.id === "molding" ? (
                  <>
                    <LearnNote>
                      Molding and edges finish how cabinetry meets ceilings and
                      walls—from almost invisible contemporary lines to soft
                      classic crowns.
                    </LearnNote>
                    <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                      {visionMoldings.map((o) => (
                        <OptionCard
                          key={o.id}
                          option={o}
                          selected={selections.molding === o.id}
                          onSelect={() => setSingle("molding", o.id)}
                        />
                      ))}
                    </div>
                  </>
                ) : null}

                {current.id === "material" ? (
                  <>
                    <LearnNote>
                      Materials set the soul of the room. Light oak keeps spaces
                      airy; walnut adds depth; painted finishes offer custom
                      color. Texture (like wire-brushing) adds quiet richness
                      you can feel.
                    </LearnNote>
                    <div className={gridClass}>
                      {visionMaterials.map((o) => (
                        <OptionCard
                          key={o.id}
                          option={o}
                          selected={selections.material === o.id}
                          onSelect={() => setSingle("material", o.id)}
                        />
                      ))}
                    </div>
                  </>
                ) : null}

                {current.id === "hardware" ? (
                  <>
                    <LearnNote>
                      Hardware is jewelry for cabinetry—warm metals, matte black,
                      or nearly hidden. It can reinforce your mood or softly
                      contrast it.
                    </LearnNote>
                    <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                      {visionHardware.map((o) => (
                        <OptionCard
                          key={o.id}
                          option={o}
                          selected={selections.hardware === o.id}
                          onSelect={() => setSingle("hardware", o.id)}
                        />
                      ))}
                    </div>
                  </>
                ) : null}

                {current.id === "notes" ? (
                  <>
                    <LearnNote>
                      After this brief, Vivant&apos;s process is consultation →
                      bespoke design → craft in the shop → white-glove install.
                      Anything you share here helps that first meeting.
                    </LearnNote>
                    <textarea
                      value={selections.notes ?? ""}
                      onChange={(e) => setSingle("notes", e.target.value)}
                      rows={6}
                      placeholder="e.g. We love light wood, need more pantry storage, hoping to start this fall…"
                      className="w-full max-w-2xl border border-border bg-bg-elevated px-4 py-3 text-ink focus:outline-none focus:border-accent resize-y"
                    />
                  </>
                ) : null}

                {current.id === "summary" ? (
                  <div className="max-w-2xl">
                    {status === "success" ? (
                      <div className="border border-border bg-bg-elevated p-8 shadow-[var(--shadow)]">
                        <p className="text-xs uppercase tracking-[0.2em] text-accent">
                          Sent
                        </p>
                        <h3 className="font-display text-3xl mt-3">
                          Your vision is with Vivant
                        </h3>
                        <p className="mt-4 text-ink-muted leading-relaxed">
                          Thank you. We&apos;ll review your brief and be in touch
                          to schedule a private consultation.
                        </p>
                        <Button
                          type="button"
                          variant="secondary"
                          className="mt-8"
                          onClick={() => {
                            setStatus("idle");
                            setStarted(false);
                            setStep(0);
                            setSelections(emptyVisionSelections());
                            localStorage.removeItem(VISION_STORAGE_KEY);
                          }}
                        >
                          Start another vision
                        </Button>
                      </div>
                    ) : (
                      <>
                        <div className="border border-border bg-bg-elevated p-6 md:p-8 shadow-[var(--shadow)]">
                          <p className="text-xs uppercase tracking-[0.18em] text-accent">
                            Vision brief
                          </p>
                          <dl className="mt-6 space-y-4">
                            {visionSummaryLines(selections).map((row) => (
                              <div
                                key={row.label}
                                className="grid sm:grid-cols-[140px_1fr] gap-1 sm:gap-4 border-b border-border pb-3"
                              >
                                <dt className="text-xs uppercase tracking-[0.12em] text-ink-muted">
                                  {row.label}
                                </dt>
                                <dd className="font-display text-xl text-ink">
                                  {row.value}
                                </dd>
                              </div>
                            ))}
                          </dl>
                        </div>

                        <form onSubmit={onSubmit} className="mt-10 space-y-5">
                          <p className="text-sm text-ink-muted">
                            Share how we can reach you—we&apos;ll use this brief
                            to prepare for your consultation.
                          </p>
                          <div className="grid sm:grid-cols-2 gap-5">
                            <Field label="Name" name="name" required />
                            <Field
                              label="Email"
                              name="email"
                              type="email"
                              required
                            />
                          </div>
                          <Field label="Phone" name="phone" type="tel" />
                          <div>
                            <label
                              htmlFor="message"
                              className="block text-xs uppercase tracking-[0.14em] text-ink-muted mb-2"
                            >
                              Message (optional)
                            </label>
                            <textarea
                              id="message"
                              name="message"
                              rows={3}
                              defaultValue={selections.notes ?? ""}
                              className="w-full border border-border bg-bg-elevated px-4 py-3 text-ink focus:outline-none focus:border-accent resize-y"
                            />
                          </div>
                          {error ? (
                            <p className="text-sm text-walnut">{error}</p>
                          ) : null}
                          <Button
                            type="submit"
                            disabled={status === "submitting"}
                          >
                            {status === "submitting"
                              ? "Sending…"
                              : "Send My Vision to Vivant"}
                          </Button>
                        </form>
                      </>
                    )}
                  </div>
                ) : null}
              </div>

              {current.id !== "summary" || status !== "success" ? (
                <div className="mt-12 flex items-center justify-between gap-4">
                  <Button
                    type="button"
                    variant="ghost"
                    disabled={step === 0}
                    onClick={() => setStep((s) => Math.max(0, s - 1))}
                  >
                    Back
                  </Button>
                  {current.id !== "summary" ? (
                    <Button
                      type="button"
                      disabled={!canContinue()}
                      onClick={() =>
                        setStep((s) =>
                          Math.min(visionSteps.length - 1, s + 1),
                        )
                      }
                    >
                      Continue
                    </Button>
                  ) : null}
                </div>
              ) : null}
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
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
        className="w-full border border-border bg-bg-elevated px-4 py-3 text-ink focus:outline-none focus:border-accent"
      />
    </div>
  );
}
