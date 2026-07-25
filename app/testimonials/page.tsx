import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Client experiences with Vivant Custom Woodcraft—craftsmanship, process, and lasting beauty.",
};

export default function TestimonialsPage() {
  return (
    <Section className="pt-28 md:pt-32">
      <SectionHeader
        eyebrow="Testimonials"
        title="Words that mirror the work"
        description="These reflections represent the experience we aspire to deliver. As clients share their stories, this page will grow with their voices."
      />
      <div className="space-y-12 max-w-3xl">
        {testimonials.map((t, i) => (
          <Reveal key={t.id} delay={i * 0.08}>
            <blockquote className="border-l-2 border-accent/40 pl-8">
              <p className="font-display text-2xl md:text-3xl leading-snug text-ink">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-6 text-sm text-ink-muted">
                <cite className="not-italic text-ink font-medium">
                  {t.attribution}
                </cite>
                <span className="block">{t.detail}</span>
                {t.placeholder ? (
                  <span className="block mt-2 text-xs uppercase tracking-[0.14em] text-stone">
                    Representative
                  </span>
                ) : null}
              </footer>
            </blockquote>
          </Reveal>
        ))}
      </div>
      <div className="mt-16">
        <Button href="/contact">Begin Your Custom Project</Button>
      </div>
    </Section>
  );
}
