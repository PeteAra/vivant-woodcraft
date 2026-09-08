"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/** Subtle opt-in affordance — never auto-opens a chat */
export function ConsultAffordance() {
  const pathname = usePathname();
  if (
    pathname === "/" ||
    pathname === "/consult" ||
    pathname === "/trade" ||
    pathname === "/private" ||
    pathname.startsWith("/private/")
  ) {
    return null;
  }

  return (
    <Link
      href="/consult"
      className="fixed bottom-6 right-6 z-40 hidden md:inline-flex items-center gap-2 border border-border bg-bg-elevated/95 backdrop-blur-sm px-4 py-2.5 text-xs uppercase tracking-[0.14em] text-ink shadow-[var(--shadow)] hover:border-ink/30 transition-colors"
    >
      Design Consultant
    </Link>
  );
}
