"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-bg/95 backdrop-blur-md border-b border-border shadow-[var(--shadow)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8 h-16 md:h-20">
        <Link
          href="/"
          className="font-display text-2xl md:text-[1.65rem] tracking-tight text-ink"
          onClick={() => setOpen(false)}
        >
          {siteConfig.shortName}
          <span className="hidden sm:inline font-sans text-[0.65rem] uppercase tracking-[0.2em] text-ink-muted ml-2 align-middle">
            Custom Woodcraft
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-ink-muted hover:text-ink transition-colors tracking-wide"
            >
              {item.label}
            </Link>
          ))}
          <Button href="/contact" className="!py-2.5 !px-5 text-xs uppercase tracking-[0.14em]">
            Consultation
          </Button>
        </nav>

        <button
          type="button"
          className="lg:hidden text-sm tracking-wide text-ink"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="lg:hidden border-t border-border bg-bg px-6 pb-8 pt-4"
        >
          <nav className="flex flex-col gap-4" aria-label="Mobile">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-display text-3xl text-ink"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/design-journey"
              className="text-ink-muted pt-2"
              onClick={() => setOpen(false)}
            >
              Design Journey
            </Link>
            <Link
              href="/consult"
              className="text-ink-muted"
              onClick={() => setOpen(false)}
            >
              Design Consultant
            </Link>
            <Button href="/contact" className="mt-4">
              Schedule a Consultation
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
