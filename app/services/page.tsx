import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom kitchen cabinetry, bathroom vanities, built-ins, and architectural millwork by Vivant Custom Woodcraft.",
};

export default function ServicesPage() {
  return (
    <Section className="pt-28 md:pt-32">
      <SectionHeader
        eyebrow="Services"
        title="Craftsmanship for every room that matters"
        description="From the kitchen to the quietest powder room, we create custom woodwork that elevates how you live."
      />
      <div className="space-y-16 md:space-y-24">
        {services.map((service, i) => (
          <Reveal key={service.slug}>
            <article
              className={`grid lg:grid-cols-2 gap-8 lg:gap-14 items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Link
                href={`/services/${service.slug}`}
                className="relative aspect-[4/3] overflow-hidden group block"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </Link>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-accent">
                  {service.eyebrow}
                </p>
                <h2 className="font-display text-3xl md:text-4xl mt-3">
                  <Link href={`/services/${service.slug}`} className="hover:text-walnut transition-colors">
                    {service.title}
                  </Link>
                </h2>
                <p className="mt-4 text-ink-muted leading-relaxed text-lg">
                  {service.summary}
                </p>
                <Button
                  href={`/services/${service.slug}`}
                  variant="secondary"
                  className="mt-6"
                >
                  Explore {service.title}
                </Button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <div className="mt-20 text-center">
        <Button href="/contact">Begin Your Custom Project</Button>
      </div>
    </Section>
  );
}
