import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-walnut text-bg-elevated">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-display text-3xl tracking-tight">
              {siteConfig.name}
            </p>
            <p className="mt-4 text-sm text-bg-elevated/70 leading-relaxed max-w-sm">
              Heirloom-quality custom cabinetry and architectural millwork for
              distinctive homes in {siteConfig.location.city},{" "}
              {siteConfig.location.state}.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-bg-elevated/50 mb-4">
              Explore
            </p>
            <ul className="space-y-2.5">
              {siteConfig.footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-bg-elevated/85 hover:text-bg-elevated transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-bg-elevated/50 mb-4">
              Visit & Contact
            </p>
            <p className="text-sm text-bg-elevated/85">
              {siteConfig.location.city}, {siteConfig.location.state}
            </p>
            <a
              href={siteConfig.phoneHref}
              className="mt-2 block text-sm text-bg-elevated/85 hover:text-bg-elevated"
            >
              {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.emails.cabinets}`}
              className="mt-2 block text-sm text-bg-elevated/85 hover:text-bg-elevated break-all"
            >
              {siteConfig.emails.cabinets}
            </a>
            <Link
              href="/contact"
              className="mt-6 inline-block text-sm border-b border-bg-elevated/40 pb-0.5 hover:border-bg-elevated"
            >
              Request a Private Consultation
            </Link>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-bg-elevated/15 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-bg-elevated/45">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>{siteConfig.socialProof}</p>
        </div>
      </div>
    </footer>
  );
}
