"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { KitchenLineDrawing } from "@/components/private/KitchenLineDrawing";
import { siteConfig } from "@/data/site";
import { processSteps } from "@/data/testimonials";

type PrivateIntroHeroProps = {
  onBuildVision: () => void;
};

function HandDrawnLabel({
  text,
  reduce,
}: {
  text: string;
  reduce: boolean | null;
}) {
  if (reduce) {
    return <>{text}</>;
  }

  return (
    <>
      <span className="sr-only">{text}</span>
      <span className="hand-drawn-label" aria-hidden="true">
        {text.split("").map((ch, i) => (
          <span
            key={`${ch}-${i}`}
            className="hand-drawn-label__char"
            style={{ ["--i" as string]: i }}
          >
            {ch === " " ? "\u00A0" : ch}
          </span>
        ))}
      </span>
    </>
  );
}

export function PrivateIntroHero({ onBuildVision }: PrivateIntroHeroProps) {
  const reduce = useReducedMotion();

  return (
    <div>
      <section className="relative min-h-[100svh] overflow-hidden">
        {/* Drawing — large composition, intentional crop */}
        <div
          className="pointer-events-none absolute inset-0 text-ink/55"
          aria-hidden
        >
          <div className="absolute inset-0 md:left-[28%] lg:left-[32%]">
            <KitchenLineDrawing className="h-full w-full min-h-[100svh] scale-[1.35] origin-top-right sm:scale-[1.2] md:scale-110 lg:scale-100 md:origin-center" />
          </div>
          {/* Soft scrim so copy stays readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg/88 to-bg/70 md:bg-gradient-to-r md:from-bg md:via-bg/85 md:to-transparent md:w-[58%]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pb-16 pt-28 sm:pb-20 md:justify-center md:px-8 lg:px-10 md:pt-24">
          <div className="max-w-xl lg:max-w-lg">
            <motion.p
              className="font-display text-3xl sm:text-4xl tracking-tight text-ink"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: reduce ? 0 : 2.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {siteConfig.name}
            </motion.p>

            <motion.h1
              className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-ink text-balance"
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: reduce ? 0 : 3.05, ease: [0.22, 1, 0.36, 1] }}
            >
              Crafted for the way you live.
            </motion.h1>

            <motion.p
              className="mt-5 text-base sm:text-lg text-ink-muted leading-relaxed max-w-md"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: reduce ? 0 : 3.25, ease: [0.22, 1, 0.36, 1] }}
            >
              Custom cabinetry, thoughtfully designed and built for your home.
            </motion.p>

            <motion.p
              className="mt-6 text-sm sm:text-base text-ink-muted leading-relaxed max-w-md"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: reduce ? 0 : 3.4, ease: [0.22, 1, 0.36, 1] }}
            >
              This short walkthrough helps us understand a rough idea of what
              you&apos;re looking for—enough to start a thoughtful conversation,
              not a final design. Share what feels right; we&apos;ll turn it into
              a brief for Vivant, and someone will reach out soon.
            </motion.p>

            <motion.div
              className="mt-10"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: reduce ? 0 : 3.55 }}
            >
              <Button
                type="button"
                variant="secondary"
                className="!px-8 !py-4 !text-sm uppercase tracking-[0.14em] justify-center !border-ink !bg-transparent !text-ink !shadow-none transition-[background-color,border-color,color] duration-300 hover:!bg-accent hover:!border-accent hover:!text-bg-elevated"
                onClick={onBuildVision}
              >
                <HandDrawnLabel text="Build Your Vision" reduce={reduce} />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative z-10 border-t border-border bg-bg/80 backdrop-blur-sm">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 py-16 md:py-20">
          <h2 className="text-xs uppercase tracking-[0.18em] text-accent mb-8">
            How it unfolds
          </h2>
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((p) => (
              <li key={p.number}>
                <span className="font-display text-3xl text-wood/80 leading-none">
                  {p.number}
                </span>
                <p className="mt-3 font-display text-xl text-ink">{p.title}</p>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                  {p.description}
                </p>
              </li>
            ))}
          </ol>
          <div className="mt-12">
            <Button
              href="/gallery"
              variant="secondary"
              className="!px-8 !py-4 !text-sm uppercase tracking-[0.14em] justify-center !border-ink !bg-transparent !text-ink !shadow-none transition-[background-color,border-color,color] duration-300 hover:!bg-accent hover:!border-accent hover:!text-bg-elevated"
            >
              Explore Our Work
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
