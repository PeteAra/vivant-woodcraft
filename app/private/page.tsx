import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site";
import { images } from "@/data/images";
import { getFeaturedProjects } from "@/data/projects";
import { processSteps } from "@/data/testimonials";
import { testimonials } from "@/data/testimonials";
import { materials } from "@/data/materials";
import { categoryLabels } from "@/data/projects";

export const metadata: Metadata = {
  title: "Private Clients",
  description: siteConfig.description,
};

export default function PrivateClientsPage() {
  const featured = getFeaturedProjects().slice(0, 4);
  const woodTeasers = materials.filter((m) => m.kind === "wood").slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[100svh] flex items-end">
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/25 to-ink/20" />
        <div className="relative z-10 w-full mx-auto max-w-7xl px-6 lg:px-8 pb-16 md:pb-24 pt-32">
          <p className="font-display text-3xl md:text-4xl text-bg-elevated mb-4 tracking-tight">
            {siteConfig.name}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-bg-elevated max-w-4xl leading-[1.05] text-balance">
            {siteConfig.tagline}
          </h1>
          <p className="mt-6 max-w-xl text-bg-elevated/85 text-base md:text-lg leading-relaxed">
            Heirloom cabinetry and architectural millwork for private clients who
            expect permanence, precision, and quiet luxury.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact" variant="light">
              Schedule a Design Consultation
            </Button>
            <Button
              href="/portfolio"
              variant="secondary"
              className="!border-bg-elevated/40 !text-bg-elevated hover:!border-bg-elevated"
            >
              Explore Our Craftsmanship
            </Button>
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <Section>
        <Reveal>
          <SectionHeader
            eyebrow="Selected Work"
            title="Spaces crafted to endure"
            description="A glimpse of kitchens, baths, and architectural woodwork designed for distinctive homes across the Twin Cities."
          />
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <Link
                href={`/portfolio/${project.slug}`}
                className="group block relative overflow-hidden aspect-[4/3]"
              >
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="text-xs uppercase tracking-[0.18em] text-bg-elevated/70">
                    {categoryLabels[project.category]}
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl text-bg-elevated mt-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-bg-elevated/80 mt-1">
                    {project.subtitle}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/portfolio" variant="secondary">
            View Full Portfolio
          </Button>
        </div>
      </Section>

      {/* Craftsmanship */}
      <Section className="!pt-0" container={false}>
        <div className="grid lg:grid-cols-2 min-h-[70vh]">
          <div className="relative min-h-[50vh] lg:min-h-full">
            <Image
              src={images.craftsmanship.src}
              alt={images.craftsmanship.alt}
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
          <div className="flex items-center bg-bg-elevated px-8 py-16 md:px-16 lg:px-20">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">
                Craftsmanship
              </p>
              <h2 className="font-display text-4xl md:text-5xl leading-tight text-ink">
                Not cabinets. Heirlooms.
              </h2>
              <p className="mt-6 text-ink-muted leading-relaxed text-lg">
                Vivant Custom Woodcraft exists for private clients investing in
                permanence. Every joint, finish, and reveal is executed with the
                care of fine furniture—because the rooms you live and work in
                deserve nothing less.
              </p>
              <Button href="/about" variant="secondary" className="mt-8">
                Our Story
              </Button>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Why Vivant */}
      <Section>
        <Reveal>
          <SectionHeader
            eyebrow="Why Vivant"
            title="Three promises we keep"
            description="A studio built for discerning residential work—not volume builder packages."
          />
        </Reveal>
        <div className="grid gap-10 md:grid-cols-3">
          {[
            {
              title: "Heirloom Quality",
              body: "Materials and joinery chosen for decades of beauty—not seasons of trends.",
            },
            {
              title: "Bespoke Design",
              body: "Every project begins with your architecture, your light, and how you live.",
            },
            {
              title: "White-Glove Service",
              body: "From private consultation through installation, a calm, precise experience.",
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <p className="text-xs text-accent tracking-[0.2em]">
                0{i + 1}
              </p>
              <h3 className="font-display text-2xl mt-3 text-ink">{item.title}</h3>
              <p className="mt-3 text-ink-muted leading-relaxed">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section className="bg-walnut text-bg-elevated" container>
        <Reveal>
          <SectionHeader
            eyebrow="The Design Process"
            title="A considered journey"
            description="From first conversation to final walkthrough—clarity at every step."
            className="[&_h2]:text-bg-elevated [&_p]:text-bg-elevated/70"
          />
        </Reveal>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.08}>
              <p className="font-display text-4xl text-wood/80">{step.number}</p>
              <h3 className="mt-3 font-display text-xl">{step.title}</h3>
              <p className="mt-2 text-sm text-bg-elevated/70 leading-relaxed">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <Button href="/process" variant="light">
            Explore the Process
          </Button>
          <Button
            href="/design-journey"
            variant="secondary"
            className="!border-bg-elevated/35 !text-bg-elevated hover:!border-bg-elevated"
          >
            Begin Your Design Journey
          </Button>
        </div>
      </Section>

      {/* Materials teaser */}
      <Section>
        <Reveal>
          <SectionHeader
            eyebrow="Materials"
            title="A showroom of possibility"
            description="Wood species, finishes, and hardware selected for beauty that deepens with time."
          />
        </Reveal>
        <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory -mx-6 px-6 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-4 lg:overflow-visible">
          {woodTeasers.map((m, i) => (
            <Reveal key={m.id} delay={i * 0.06} className="min-w-[70%] sm:min-w-[45%] lg:min-w-0 snap-start">
              <Link href="/materials" className="group block">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 1024px) 70vw, 25vw"
                  />
                </div>
                <h3 className="font-display text-2xl mt-4">{m.name}</h3>
                <p className="text-sm text-ink-muted mt-1 line-clamp-2">
                  {m.description}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Design Consultant invite */}
      <Section className="!py-0" container={false}>
        <div className="relative min-h-[60vh] flex items-center">
          <Image
            src={images.consult.src}
            alt={images.consult.alt}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-ink/55" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-24 w-full">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.22em] text-wood mb-4">
                Design Consultant
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-bg-elevated max-w-2xl text-balance">
                Meet your design consultant
              </h2>
              <p className="mt-5 max-w-lg text-bg-elevated/85 leading-relaxed">
                Explore wood species, cabinet styles, and finishes with a
                knowledgeable guide—whenever you&apos;re ready. No pressure. Just
                clarity.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/consult" variant="light">
                  Let&apos;s Design Together
                </Button>
                <Button
                  href="/design-journey"
                  variant="secondary"
                  className="!border-bg-elevated/40 !text-bg-elevated"
                >
                  Start Designing Your Dream Space
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <Reveal>
          <SectionHeader
            eyebrow="Client Stories"
            title="Quiet confidence, lasting homes"
            description="Representative reflections of the experience we strive to deliver. Personal client testimonials will appear here as they are shared."
          />
        </Reveal>
        <div className="grid gap-10 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.08}>
              <blockquote className="border-t border-border pt-8">
                <p className="font-display text-xl md:text-2xl leading-snug text-ink">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-6 text-sm text-ink-muted">
                  <cite className="not-italic font-medium text-ink">
                    {t.attribution}
                  </cite>
                  <span className="block mt-0.5">{t.detail}</span>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <Button href="/testimonials" variant="ghost">
            Read more stories
          </Button>
        </div>
      </Section>

      {/* Closing CTA */}
      <Section className="!pt-0" container={false}>
        <div className="relative min-h-[50vh] flex items-center justify-center text-center">
          <Image
            src={images.cta.src}
            alt={images.cta.alt}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-ink/60" />
          <div className="relative z-10 px-6 py-20 max-w-3xl">
            <Reveal>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-bg-elevated text-balance">
                Let&apos;s design something extraordinary
              </h2>
              <p className="mt-5 text-bg-elevated/85">
                Begin with a private consultation in {siteConfig.location.city},{" "}
                {siteConfig.location.state}.
              </p>
              <Button href="/contact" variant="light" className="mt-8">
                Request a Private Consultation
              </Button>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
