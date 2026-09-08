"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { images } from "@/data/images";

type Audience = "private" | "trade" | null;

const panels = [
  {
    id: "private" as const,
    href: "/private",
    label: "Private Clients",
    description:
      "Heirloom cabinetry and millwork for distinctive homes, studios, and personal spaces.",
    cta: "Enter",
    image: images.hero,
  },
  {
    id: "trade" as const,
    href: "/trade",
    label: "Trade Partners",
    description:
      "Builders, remodelers, architects, and designers—partnership built on precision and reliability.",
    cta: "Enter",
    image: images.trade,
  },
] as const;

export function AudienceGateway() {
  const reduce = useReducedMotion();
  const [hovered, setHovered] = useState<Audience>(null);

  return (
    <div className="relative min-h-[100svh] bg-ink overflow-hidden">
      {/* Brand lockup */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 top-0 z-30 flex flex-col items-center pt-8 md:pt-12 px-6 text-center"
        initial={reduce ? false : { opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      >
        <p className="font-display text-2xl md:text-3xl text-bg-elevated tracking-tight">
          {siteConfig.name}
        </p>
        <p className="mt-2 text-xs uppercase tracking-[0.22em] text-bg-elevated/60">
          Custom woodcraft for distinctive spaces
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row min-h-[100svh]">
        {panels.map((panel, index) => {
          const isHovered = hovered === panel.id;
          const otherHovered = hovered !== null && hovered !== panel.id;
          const flexGrow =
            hovered === null ? 1 : isHovered ? 1.45 : 0.7;

          return (
            <motion.div
              key={panel.id}
              className="relative min-h-[50svh] md:min-h-[100svh] overflow-hidden"
              style={{ flexBasis: 0 }}
              initial={
                reduce
                  ? false
                  : {
                      opacity: 0,
                      x: index === 0 ? -48 : 48,
                      flexGrow: 1,
                    }
              }
              animate={{
                opacity: 1,
                x: 0,
                flexGrow,
              }}
              transition={{
                opacity: {
                  duration: 0.85,
                  ease: [0.22, 1, 0.36, 1],
                  delay: hovered === null ? 0.2 + index * 0.1 : 0,
                },
                x: {
                  duration: 0.95,
                  ease: [0.22, 1, 0.36, 1],
                  delay: hovered === null ? 0.2 + index * 0.1 : 0,
                },
                flexGrow: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
              }}
              onMouseEnter={() => setHovered(panel.id)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(panel.id)}
              onBlur={() => setHovered(null)}
            >
              <Link
                href={panel.href}
                className="absolute inset-0 z-10 flex flex-col justify-end p-8 md:p-12 lg:p-16 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-bg-elevated"
                aria-label={`${panel.label} — ${panel.description}`}
              >
                <motion.div
                  animate={{
                    y: reduce ? 0 : isHovered ? -6 : 0,
                    opacity: otherHovered ? 0.55 : 1,
                  }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="text-xs uppercase tracking-[0.22em] text-wood mb-3">
                    {panel.id === "private" ? "For owners" : "For the trade"}
                  </p>
                  <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-bg-elevated leading-[1.05]">
                    {panel.label}
                  </h1>
                  <p className="mt-4 max-w-md text-bg-elevated/80 text-sm md:text-base leading-relaxed">
                    {panel.description}
                  </p>
                  <span
                    className={`mt-8 inline-flex text-xs uppercase tracking-[0.18em] text-bg-elevated border-b pb-1 transition-colors duration-400 ${
                      isHovered
                        ? "border-bg-elevated"
                        : "border-bg-elevated/35"
                    }`}
                  >
                    {panel.cta}
                  </span>
                </motion.div>
              </Link>

              <motion.div
                className="absolute inset-0"
                animate={{
                  scale: reduce ? 1 : isHovered ? 1.06 : 1,
                }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={panel.image.src}
                  alt={panel.image.alt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
              </motion.div>

              <motion.div
                className="absolute inset-0 bg-ink"
                animate={{
                  opacity: reduce
                    ? 0.45
                    : isHovered
                      ? 0.28
                      : otherHovered
                        ? 0.62
                        : 0.45,
                }}
                transition={{ duration: 0.5 }}
              />

              {/* Divider hint on desktop */}
              {index === 0 ? (
                <div className="hidden md:block absolute right-0 top-[20%] bottom-[20%] w-px bg-bg-elevated/15 z-20" />
              ) : null}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
