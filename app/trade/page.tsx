import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Trade Partners",
  description:
    "Partner with Vivant Custom Woodcraft for custom cabinetry and architectural millwork—precision, communication, and reliable delivery for builders, remodelers, architects, and designers.",
};

export default function TradePage() {
  return (
    <>
      <section className="relative min-h-[70vh] flex items-end">
        <Image
          src={images.trade.src}
          alt={images.trade.alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/30 to-ink/15" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pb-14 w-full pt-32">
          <p className="text-xs uppercase tracking-[0.22em] text-wood">
            Trade Partners
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-bg-elevated mt-3 max-w-3xl text-balance">
            Craftsmanship your clients will thank you for
          </h1>
          <p className="mt-5 max-w-xl text-bg-elevated/85 text-lg leading-relaxed">
            Reliable custom cabinetry and architectural millwork for builders,
            remodelers, architects, and interior designers across the Twin Cities.
          </p>
        </div>
      </section>

      <Section>
        <Reveal>
          <SectionHeader
            eyebrow="Partnership"
            title="Built for professionals who demand precision"
            description="This trade experience is expanding. Reach out to discuss project scope, timelines, and how we collaborate on high-end residential and light commercial woodwork."
          />
        </Reveal>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Clear communication",
              body: "Shop drawings, schedules, and updates that keep your job site moving.",
            },
            {
              title: "Furniture-grade execution",
              body: "Joinery and finishes that protect your reputation on every walkthrough.",
            },
            {
              title: "Dependable install",
              body: "White-glove installation coordinated with your construction timeline.",
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <p className="text-xs text-accent tracking-[0.2em]">0{i + 1}</p>
              <h2 className="font-display text-2xl mt-3">{item.title}</h2>
              <p className="mt-3 text-ink-muted leading-relaxed">{item.body}</p>
            </Reveal>
          ))}
        </div>
        <div className="mt-14 flex flex-wrap gap-4">
          <Button href="/contact">Contact Vivant for Trade Projects</Button>
          <Button href="/portfolio" variant="secondary">
            View Portfolio
          </Button>
          <Button href="/private" variant="ghost">
            Private Clients
          </Button>
        </div>
        <p className="mt-10 text-sm text-ink-muted">
          {siteConfig.location.city}, {siteConfig.location.state} ·{" "}
          <a href={siteConfig.phoneHref} className="underline underline-offset-2">
            {siteConfig.phone}
          </a>
        </p>
        <p className="mt-6 text-sm text-ink-muted">
          Looking for the owner experience?{" "}
          <Link href="/private" className="underline underline-offset-2 hover:text-ink">
            Visit Private Clients
          </Link>
          .
        </p>
      </Section>
    </>
  );
}
