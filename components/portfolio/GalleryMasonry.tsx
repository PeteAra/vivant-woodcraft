"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  categoryLabels,
  projects,
  type ProjectCategory,
} from "@/data/projects";
import { Lightbox, useLightbox } from "@/components/ui/Lightbox";

export function GalleryMasonry() {
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");
  const lightbox = useLightbox();

  const images = useMemo(() => {
    const list =
      filter === "all"
        ? projects
        : projects.filter((p) => p.category === filter);
    return list.flatMap((p) =>
      p.gallery.map((src, i) => ({
        src,
        alt: `${p.title} — image ${i + 1}`,
        category: p.category,
      })),
    );
  }, [filter]);

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

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`px-4 py-2 text-xs uppercase tracking-[0.14em] border transition-colors ${
              filter === f
                ? "border-ink bg-ink text-bg-elevated"
                : "border-border text-ink-muted hover:border-ink/40"
            }`}
          >
            {f === "all" ? "All" : categoryLabels[f]}
          </button>
        ))}
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((img, i) => (
          <button
            key={`${img.src}-${i}`}
            type="button"
            className="break-inside-avoid block w-full relative overflow-hidden group"
            onClick={() => lightbox.open(i)}
          >
            <div className="relative aspect-[3/4]">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </button>
        ))}
      </div>

      <Lightbox
        images={images}
        index={lightbox.index}
        onClose={lightbox.close}
        onNavigate={lightbox.navigate}
      />
    </div>
  );
}
