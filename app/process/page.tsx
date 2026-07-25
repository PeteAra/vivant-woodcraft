import type { Metadata } from "next";
import Image from "next/image";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/data/testimonials";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "The Design Process",
  description:
    "How Vivant Custom Woodcraft guides homeowners from private consultation to white-glove installation.",
};

export default function ProcessPage() {
  return (
    <>
      <section className="relative min-h-[55vh] flex items-end">
        <Image
          src={images.process.src}
          alt={images.process.alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/50" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pb-14 w-full">
          <p className="text-xs uppercase tracking-[0.22em] text-wood">Process</p>
          <h1 className="font-display text-4xl md:text-6xl text-bg-elevated mt-2 max-w-3xl text-balance">
            A calm path from vision to heirloom
          </h1>
        </div>
      </section>

      <Section>
        <SectionHeader
          title="Designed around trust"
          description="Custom woodwork of this caliber is a collaboration. Our process protects your time, your architecture, and the integrity of every detail."
        />
        <div className="space-y-16">
          {processSteps.map((step, i) => (
            <Reveal key={step.number}>
              <div className="grid md:grid-cols-12 gap-6 border-t border-border pt-10">
                <p className="md:col-span-2 font-display text-5xl text-wood/70">
                  {step.number}
                </p>
                <div className="md:col-span-10 max-w-2xl">
                  <h2 className="font-display text-3xl">{step.title}</h2>
                  <p className="mt-4 text-ink-muted text-lg leading-relaxed">
                    {step.description}
                  </p>
                  {i === 0 ? (
                    <p className="mt-4 text-ink-muted leading-relaxed">
                      Typical projects of this scope unfold over several months.
                      We share a clear timeline once selections are finalized so
                      fabrication and installation align with your renovation or
                      build schedule.
                    </p>
                  ) : null}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-16 flex flex-wrap gap-4">
          <Button href="/design-journey">Begin Your Design Journey</Button>
          <Button href="/consult" variant="secondary">
            Explore Ideas with AI
          </Button>
          <Button href="/contact" variant="ghost">
            Request a Private Consultation
          </Button>
        </div>
      </Section>
    </>
  );
}
