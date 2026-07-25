import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import {
  categoryLabels,
  getProject,
  projects,
} from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <section className="relative min-h-[70vh] flex items-end">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/20 to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pb-14 w-full">
          <p className="text-xs uppercase tracking-[0.2em] text-bg-elevated/70">
            {categoryLabels[project.category]}
            {project.year ? ` · ${project.year}` : ""}
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-bg-elevated mt-2">
            {project.title}
          </h1>
          <p className="mt-3 text-lg text-bg-elevated/85">{project.subtitle}</p>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <p className="text-lg text-ink-muted leading-relaxed">
              {project.description}
            </p>
            <div className="mt-12 grid sm:grid-cols-2 gap-4">
              {project.gallery.map((src, i) => (
                <div
                  key={src}
                  className={`relative overflow-hidden ${i === 0 ? "sm:col-span-2 aspect-[16/10]" : "aspect-[4/3]"}`}
                >
                  <Image
                    src={src}
                    alt={`${project.title} detail ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                  />
                </div>
              ))}
            </div>
          </div>
          <aside className="space-y-8 lg:pl-4">
            <div>
              <h2 className="text-xs uppercase tracking-[0.18em] text-accent">
                Location
              </h2>
              <p className="mt-2 text-ink">{project.location}</p>
            </div>
            <div>
              <h2 className="text-xs uppercase tracking-[0.18em] text-accent">
                Materials
              </h2>
              <ul className="mt-2 space-y-1 text-ink-muted">
                {project.materials.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xs uppercase tracking-[0.18em] text-accent">
                Finishes
              </h2>
              <ul className="mt-2 space-y-1 text-ink-muted">
                {project.finishes.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xs uppercase tracking-[0.18em] text-accent">
                Style
              </h2>
              <ul className="mt-2 space-y-1 text-ink-muted">
                {project.styles.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </div>
            <Button href="/contact">Schedule a Design Consultation</Button>
            <Link
              href="/portfolio"
              className="block text-sm text-ink-muted hover:text-ink"
            >
              ← Back to portfolio
            </Link>
          </aside>
        </div>
      </Section>
    </>
  );
}
