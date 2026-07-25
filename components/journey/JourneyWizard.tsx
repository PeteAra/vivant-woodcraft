"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import {
  emptyJourneySelections,
  inspirationGallery,
  journeyCabinetry,
  journeyFinishes,
  journeyHardware,
  journeySpaces,
  journeySteps,
  journeyStyles,
  journeyWoods,
  type JourneyOption,
  type JourneySelections,
} from "@/data/journey";

const STORAGE_KEY = "vivant-dream-project";

function OptionCard({
  option,
  selected,
  onSelect,
}: {
  option: JourneyOption;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={`group text-left overflow-hidden border transition-all duration-300 ${
        selected
          ? "border-ink shadow-[var(--shadow)]"
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
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        </div>
      ) : null}
      <div className="p-4">
        <p className="font-display text-xl">{option.label}</p>
        {option.description ? (
          <p className="mt-1 text-sm text-ink-muted">{option.description}</p>
        ) : null}
      </div>
    </button>
  );
}

function labelFor(
  options: JourneyOption[],
  id?: string,
): string {
  if (!id) return "—";
  return options.find((o) => o.id === id)?.label ?? id;
}

export function JourneyWizard() {
  const router = useRouter();
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);
  const [selections, setSelections] = useState<JourneySelections>(
    emptyJourneySelections,
  );

  const current = journeySteps[step];
  const isSummary = current.id === "summary";
  const isInspiration = current.id === "inspiration";

  const options = useMemo(() => {
    switch (current.id) {
      case "space":
        return journeySpaces;
      case "style":
        return journeyStyles;
      case "cabinetry":
        return journeyCabinetry;
      case "wood":
        return journeyWoods;
      case "finish":
        return journeyFinishes;
      case "hardware":
        return journeyHardware;
      default:
        return [];
    }
  }, [current.id]);

  const selectedId = useMemo(() => {
    switch (current.key) {
      case "space":
        return selections.space;
      case "style":
        return selections.style;
      case "cabinetry":
        return selections.cabinetry;
      case "wood":
        return selections.wood;
      case "finish":
        return selections.finish;
      case "hardware":
        return selections.hardware;
      default:
        return undefined;
    }
  }, [current.key, selections]);

  function selectOption(id: string) {
    const key = current.key;
    if (key === "favorites" || key === "summary") return;
    setSelections((prev) => ({ ...prev, [key]: id }));
  }

  function toggleFavorite(id: string) {
    setSelections((prev) => ({
      ...prev,
      favorites: prev.favorites.includes(id)
        ? prev.favorites.filter((f) => f !== id)
        : [...prev.favorites, id],
    }));
  }

  function canContinue() {
    if (isSummary) return true;
    if (isInspiration) return true;
    return Boolean(selectedId);
  }

  function persistAndConsult() {
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(selections));
    }
    const params = new URLSearchParams({
      from: "design-journey",
      space: selections.space ?? "",
      style: selections.style ?? "",
      cabinetry: selections.cabinetry ?? "",
      wood: selections.wood ?? "",
      finish: selections.finish ?? "",
      hardware: selections.hardware ?? "",
      favorites: selections.favorites.join(","),
    });
    router.push(`/contact?${params.toString()}`);
  }

  const progress = ((step + 1) / journeySteps.length) * 100;

  return (
    <div>
      <div className="mb-10">
        <div className="flex justify-between text-xs uppercase tracking-[0.16em] text-ink-muted mb-3">
          <span>
            Step {step + 1} of {journeySteps.length}
          </span>
          <span>{current.title}</span>
        </div>
        <div className="h-px bg-border overflow-hidden">
          <div
            className="h-full bg-accent transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: -12 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="font-display text-3xl md:text-4xl mb-8">
            {current.title}
          </h2>

          {!isSummary && !isInspiration ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {options.map((option) => (
                <OptionCard
                  key={option.id}
                  option={option}
                  selected={selectedId === option.id}
                  onSelect={() => selectOption(option.id)}
                />
              ))}
            </div>
          ) : null}

          {isInspiration ? (
            <div>
              <p className="text-ink-muted mb-6">
                Favorite the spaces that speak to you. These help us understand
                your taste before we meet.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {inspirationGallery.map((img) => {
                  const fav = selections.favorites.includes(img.id);
                  return (
                    <button
                      key={img.id}
                      type="button"
                      onClick={() => toggleFavorite(img.id)}
                      aria-pressed={fav}
                      className={`relative aspect-[4/3] overflow-hidden border ${
                        fav ? "border-ink ring-1 ring-ink" : "border-transparent"
                      }`}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 50vw, 33vw"
                      />
                      <span className="absolute bottom-3 left-3 text-xs uppercase tracking-wider bg-bg-elevated/90 px-2 py-1">
                        {fav ? "Favorited" : "Favorite"}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : null}

          {isSummary ? (
            <div className="bg-bg-elevated border border-border p-8 md:p-12 shadow-[var(--shadow)]">
              <p className="text-xs uppercase tracking-[0.2em] text-accent">
                My Dream Project
              </p>
              <h3 className="font-display text-3xl md:text-4xl mt-3">
                A vision ready for conversation
              </h3>
              <dl className="mt-10 grid sm:grid-cols-2 gap-6">
                {[
                  ["Space", labelFor(journeySpaces, selections.space)],
                  ["Style", labelFor(journeyStyles, selections.style)],
                  [
                    "Cabinetry",
                    labelFor(journeyCabinetry, selections.cabinetry),
                  ],
                  ["Wood", labelFor(journeyWoods, selections.wood)],
                  ["Finish", labelFor(journeyFinishes, selections.finish)],
                  [
                    "Hardware",
                    labelFor(journeyHardware, selections.hardware),
                  ],
                  [
                    "Inspiration favorites",
                    selections.favorites.length
                      ? `${selections.favorites.length} selected`
                      : "None yet",
                  ],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-xs uppercase tracking-[0.14em] text-ink-muted">
                      {label}
                    </dt>
                    <dd className="mt-1 font-display text-2xl">{value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button type="button" onClick={persistAndConsult}>
                  Schedule My Design Consultation
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={persistAndConsult}
                >
                  Request My Custom Estimate
                </Button>
              </div>
            </div>
          ) : null}
        </motion.div>
      </AnimatePresence>

      <div className="mt-12 flex items-center justify-between gap-4">
        <Button
          type="button"
          variant="ghost"
          disabled={step === 0}
          onClick={() => setStep((s) => Math.max(0, s - 1))}
        >
          Back
        </Button>
        {!isSummary ? (
          <Button
            type="button"
            disabled={!canContinue()}
            onClick={() =>
              setStep((s) => Math.min(journeySteps.length - 1, s + 1))
            }
          >
            Continue
          </Button>
        ) : null}
      </div>
    </div>
  );
}

export { STORAGE_KEY as JOURNEY_STORAGE_KEY };
