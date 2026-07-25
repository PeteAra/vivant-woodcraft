import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { getService, services } from "@/data/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service" };
  return {
    title: service.title,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <section className="relative min-h-[65vh] flex items-end">
        <Image
          src={service.image}
          alt={service.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/25 to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pb-14 w-full">
          <p className="text-xs uppercase tracking-[0.2em] text-wood">
            {service.eyebrow}
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-bg-elevated mt-2">
            {service.title}
          </h1>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <p className="text-xl text-ink-muted leading-relaxed">
              {service.description}
            </p>
            <p className="mt-8 text-ink-muted leading-relaxed">
              Every commission begins with listening—how light enters the room,
              how you move through your day, and what permanence means in your
              home. From there, we design and craft pieces that feel inevitable:
              refined, enduring, and unmistakably yours.
            </p>
          </div>
          <aside>
            <h2 className="text-xs uppercase tracking-[0.18em] text-accent mb-4">
              Included considerations
            </h2>
            <ul className="space-y-3">
              {service.highlights.map((h) => (
                <li
                  key={h}
                  className="border-b border-border pb-3 text-ink-muted"
                >
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-10 space-y-3">
              <Button href="/contact" className="w-full">
                Schedule a Design Consultation
              </Button>
              <Button href="/design-journey" variant="secondary" className="w-full">
                Begin Your Design Journey
              </Button>
              <Button href="/process" variant="ghost" className="w-full">
                See Our Process
              </Button>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
