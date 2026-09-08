"use client";

import Link from "next/link";
import { siteConfig } from "@/data/site";

/** Minimal footer for the Private Clients experience — no main nav */
export function PrivateFooter() {
  return (
    <footer className="border-t border-border bg-walnut text-bg-elevated mt-auto">
      <div className="mx-auto max-w-5xl px-6 lg:px-8 py-12 md:py-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <Link
              href="/"
              className="font-display text-2xl tracking-tight hover:opacity-90"
            >
              {siteConfig.shortName}
            </Link>
            <p className="mt-2 text-sm text-bg-elevated/65 max-w-sm leading-relaxed">
              Private client design experience — custom cabinetry & millwork in{" "}
              {siteConfig.location.city}, {siteConfig.location.state}.
            </p>
          </div>
          <div className="text-sm space-y-2">
            <p className="text-xs uppercase tracking-[0.18em] text-bg-elevated/45 mb-3">
              Contact
            </p>
            <a
              href={siteConfig.phoneHref}
              className="block text-bg-elevated/90 hover:text-bg-elevated"
            >
              {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.emails.cabinets}`}
              className="block text-bg-elevated/90 hover:text-bg-elevated break-all"
            >
              {siteConfig.emails.cabinets}
            </a>
            <Link
              href="/contact"
              className="inline-block mt-3 border-b border-bg-elevated/35 pb-0.5 hover:border-bg-elevated"
            >
              Request a consultation
            </Link>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-bg-elevated/15 flex flex-col sm:flex-row sm:justify-between gap-3 text-xs text-bg-elevated/40">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
          <Link href="/trade" className="hover:text-bg-elevated/70">
            Trade Partners
          </Link>
        </div>
      </div>
    </footer>
  );
}
