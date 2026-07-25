import type { Metadata } from "next";
import { Suspense } from "react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a private design consultation with Vivant Custom Woodcraft in Credit River, Minnesota.",
};

export default function ContactPage() {
  return (
    <Section className="pt-28 md:pt-32">
      <div className="grid lg:grid-cols-2 gap-14">
        <div>
          <SectionHeader
            eyebrow="Contact"
            title="Request a private consultation"
            description="Share a few details about your project. If you completed the Design Journey, your selections are included automatically."
            className="mb-0"
          />
          <div className="mt-10 space-y-3 text-ink-muted">
            <p>
              {siteConfig.location.city}, {siteConfig.location.state}
            </p>
            <p>
              <a href={siteConfig.phoneHref} className="hover:text-ink">
                {siteConfig.phone}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${siteConfig.emails.cabinets}`}
                className="hover:text-ink break-all"
              >
                {siteConfig.emails.cabinets}
              </a>
            </p>
            <p className="text-sm pt-4">
              Cabinetry · {siteConfig.emails.cabinets}
              <br />
              Millwork · {siteConfig.emails.millwork}
            </p>
          </div>
        </div>
        <Suspense fallback={<p className="text-ink-muted">Loading form…</p>}>
          <ContactForm />
        </Suspense>
      </div>
    </Section>
  );
}
