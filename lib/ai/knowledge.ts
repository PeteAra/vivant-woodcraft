import { siteConfig } from "@/data/site";
import { projects } from "@/data/projects";
import { materials } from "@/data/materials";
import { services } from "@/data/services";
import { processSteps, faqs } from "@/data/testimonials";
import {
  journeyCabinetry,
  journeyFinishes,
  journeyHardware,
  journeySpaces,
  journeyStyles,
  journeyWoods,
} from "@/data/journey";

/** Curated knowledge pack injected into the Design Consultant system prompt */
export function buildKnowledgePack(): string {
  const projectLines = projects
    .map(
      (p) =>
        `- ${p.title} (${p.category}, ${p.location}): ${p.subtitle}. Materials: ${p.materials.join(", ")}. Styles: ${p.styles.join(", ")}. Slug: ${p.slug}`,
    )
    .join("\n");

  const materialLines = materials
    .map(
      (m) =>
        `- [${m.kind}] ${m.name}: ${m.description} Best for: ${m.bestFor.join(", ")}.`,
    )
    .join("\n");

  const serviceLines = services
    .map((s) => `- ${s.title}: ${s.summary}`)
    .join("\n");

  const processLines = processSteps
    .map((s) => `${s.number} ${s.title}: ${s.description}`)
    .join("\n");

  const faqLines = faqs
    .map((f) => `Q: ${f.question}\nA: ${f.answer}`)
    .join("\n\n");

  return `
COMPANY
Name: ${siteConfig.name}
Owner: ${siteConfig.owner}
Location: ${siteConfig.location.city}, ${siteConfig.location.state} (${siteConfig.location.region})
Phone: ${siteConfig.phone}
Email (cabinets): ${siteConfig.emails.cabinets}
Email (millwork): ${siteConfig.emails.millwork}
Tagline: ${siteConfig.tagline}
Awards: ${siteConfig.awards.map((a) => `${a.year ?? ""} ${a.title}`).join("; ")}

SERVICES
${serviceLines}

DESIGN PROCESS
${processLines}
Typical timeline: design/selections 4–8 weeks; fabrication 8–14 weeks depending on scope; installation scheduled with the home's renovation/build.

SPACES WE DESIGN FOR
${journeySpaces.map((s) => s.label).join(", ")}

DESIGN STYLES
${journeyStyles.map((s) => s.label).join(", ")}

CABINETRY STYLES
${journeyCabinetry.map((s) => `${s.label}: ${s.description ?? ""}`).join("\n")}

WOOD SPECIES OPTIONS
${journeyWoods.map((s) => s.label).join(", ")}

FINISH OPTIONS
${journeyFinishes.map((s) => s.label).join(", ")}

HARDWARE STYLES
${journeyHardware.map((s) => s.label).join(", ")}

MATERIALS DETAIL
${materialLines}

PORTFOLIO PROJECTS
${projectLines}

FAQs
${faqLines}

WEBSITE PATHS (suggest when relevant)
/portfolio, /portfolio/[slug], /materials, /process, /design-journey, /services, /contact, /consult
`.trim();
}
