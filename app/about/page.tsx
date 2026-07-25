import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Vivant Custom Woodcraft—award-winning custom cabinetry and millwork for distinctive homes in Credit River, Minnesota.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-end">
        <Image
          src={images.about.src}
          alt={images.about.alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/45" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pb-14 w-full">
          <p className="text-xs uppercase tracking-[0.22em] text-wood">About</p>
          <h1 className="font-display text-4xl md:text-6xl text-bg-elevated mt-2 max-w-3xl">
            Crafted for homes that will be lived in for generations
          </h1>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-14">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl leading-tight">
              The Vivant standard
            </h2>
            <p className="mt-6 text-ink-muted text-lg leading-relaxed">
              Founded by {siteConfig.owner}, Vivant Custom Woodcraft is a
              residential atelier dedicated to custom cabinetry and architectural
              millwork of uncommon quality. Based in {siteConfig.location.city},{" "}
              {siteConfig.location.state}, we serve discerning homeowners across
              the {siteConfig.location.region} who seek permanence over
              convenience.
            </p>
            <p className="mt-4 text-ink-muted leading-relaxed">
              We do not chase trends. We refine proportion, material, and finish
              until a space feels inevitable—warm, precise, and quietly
              extraordinary.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-xs uppercase tracking-[0.2em] text-accent mb-6">
              Recognition
            </h2>
            <ul className="space-y-5">
              {siteConfig.awards.map((award) => (
                <li
                  key={`${award.year}-${award.title}`}
                  className="border-b border-border pb-5"
                >
                  <p className="font-display text-xl text-ink">
                    {award.year ? `${award.year} — ` : ""}
                    {award.title}
                  </p>
                  <p className="text-sm text-ink-muted mt-1">{award.org}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <div className="mt-16">
          <Button href="/contact">Request a Private Consultation</Button>
        </div>
      </Section>
    </>
  );
}
