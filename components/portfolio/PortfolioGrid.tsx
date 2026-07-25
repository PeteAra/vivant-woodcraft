"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  categoryLabels,
  projects,
  type ProjectCategory,
} from "@/data/projects";

const filters: Array<ProjectCategory | "all"> = [
  "all",
  "kitchen",
  "bathroom",
  "built-ins",
  "millwork",
  "entertainment",
  "library",
  "bar",
];

export function PortfolioGrid() {
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");

  const list = useMemo(
    () =>
      filter === "all"
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter],
  );

  return (
    <div>
      <div
        className="flex flex-wrap gap-2 mb-10"
        role="tablist"
        aria-label="Filter portfolio"
      >
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            role="tab"
            aria-selected={filter === f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 text-xs uppercase tracking-[0.14em] border transition-colors ${
              filter === f
                ? "border-ink bg-ink text-bg-elevated"
                : "border-border text-ink-muted hover:border-ink/40 hover:text-ink"
            }`}
          >
            {f === "all" ? "All" : categoryLabels[f]}
          </button>
        ))}
      </div>

      <div className="columns-1 md:columns-2 gap-6 space-y-6">
        {list.map((project) => (
          <Link
            key={project.slug}
            href={`/portfolio/${project.slug}`}
            className="group break-inside-avoid block relative overflow-hidden"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent opacity-90" />
              <div className="absolute bottom-0 p-6">
                <p className="text-xs uppercase tracking-[0.16em] text-bg-elevated/70">
                  {categoryLabels[project.category]}
                </p>
                <h2 className="font-display text-2xl text-bg-elevated mt-1">
                  {project.title}
                </h2>
                <p className="text-sm text-bg-elevated/80 mt-1">
                  {project.location}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
