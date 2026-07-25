"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type LightboxProps = {
  images: { src: string; alt: string }[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const reduce = useReducedMotion();
  const open = index !== null;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && index !== null)
        onNavigate((index + 1) % images.length);
      if (e.key === "ArrowLeft" && index !== null)
        onNavigate((index - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, index, images.length, onClose, onNavigate]);

  return (
    <AnimatePresence>
      {open && index !== null ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button
            type="button"
            className="absolute top-6 right-6 text-bg-elevated/80 hover:text-bg-elevated text-sm tracking-wide"
            onClick={onClose}
          >
            Close
          </button>
          <div
            className="relative w-full max-w-5xl aspect-[4/3]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[index].src}
              alt={images[index].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
          {images.length > 1 ? (
            <>
              <button
                type="button"
                className="absolute left-4 md:left-8 text-bg-elevated/80 hover:text-bg-elevated"
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate((index - 1 + images.length) % images.length);
                }}
              >
                Previous
              </button>
              <button
                type="button"
                className="absolute right-4 md:right-8 text-bg-elevated/80 hover:text-bg-elevated"
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate((index + 1) % images.length);
                }}
              >
                Next
              </button>
            </>
          ) : null}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export function useLightbox() {
  const [index, setIndex] = useState<number | null>(null);
  return {
    index,
    open: (i: number) => setIndex(i),
    close: () => setIndex(null),
    navigate: (i: number) => setIndex(i),
  };
}
