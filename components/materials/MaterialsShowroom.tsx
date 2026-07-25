"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  getMaterialsByKind,
  materialKindLabels,
  type MaterialKind,
} from "@/data/materials";

const kinds: Array<MaterialKind | "all"> = [
  "all",
  "wood",
  "finish",
  "door-style",
  "profile",
  "hardware",
  "molding",
];

export function MaterialsShowroom() {
  const [kind, setKind] = useState<MaterialKind | "all">("all");
  const list = useMemo(() => getMaterialsByKind(kind), [kind]);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-12">
        {kinds.map((k) => (
          <button
            key={k}
            type="button"
            onClick={() => setKind(k)}
            className={`px-4 py-2 text-xs uppercase tracking-[0.14em] border transition-colors ${
              kind === k
                ? "border-ink bg-ink text-bg-elevated"
                : "border-border text-ink-muted hover:border-ink/40"
            }`}
          >
            {k === "all" ? "All" : materialKindLabels[k]}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {list.map((m) => (
          <article key={m.id} className="group">
            <div className="relative aspect-[4/5] overflow-hidden shadow-[var(--shadow)]">
              <Image
                src={m.image}
                alt={m.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                sizes="(max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.16em] text-accent">
              {materialKindLabels[m.kind]}
            </p>
            <h2 className="font-display text-2xl mt-1">{m.name}</h2>
            <p className="mt-2 text-sm text-ink-muted leading-relaxed">
              {m.description}
            </p>
            <p className="mt-3 text-xs text-ink-muted/80">
              Best for: {m.bestFor.join(" · ")}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
