import { tool } from "ai";
import { z } from "zod";
import { projects, categoryLabels } from "@/data/projects";
import { materials, materialKindLabels } from "@/data/materials";
import { services } from "@/data/services";
import { processSteps, faqs } from "@/data/testimonials";

export const consultTools = {
  searchProjects: tool({
    description:
      "Search Vivant portfolio projects by keywords such as kitchen, walnut, farmhouse, library, bath, modern, etc.",
    inputSchema: z.object({
      query: z.string().describe("Search keywords from the visitor"),
      limit: z.number().min(1).max(6).optional(),
    }),
    execute: async ({ query, limit = 3 }) => {
      const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
      const scored = projects
        .map((p) => {
          const hay = [
            p.title,
            p.subtitle,
            p.description,
            p.category,
            p.location,
            ...p.materials,
            ...p.finishes,
            ...p.styles,
          ]
            .join(" ")
            .toLowerCase();
          const score = terms.reduce(
            (acc, t) => acc + (hay.includes(t) ? 1 : 0),
            0,
          );
          return { p, score };
        })
        .filter((x) => x.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, limit);

      const results =
        scored.length > 0
          ? scored.map(({ p }) => p)
          : projects.filter((p) => p.featured).slice(0, limit);

      return {
        results: results.map((p) => ({
          slug: p.slug,
          title: p.title,
          subtitle: p.subtitle,
          category: categoryLabels[p.category],
          location: p.location,
          materials: p.materials,
          styles: p.styles,
          coverImage: p.coverImage,
          href: `/portfolio/${p.slug}`,
        })),
      };
    },
  }),

  getMaterialGuidance: tool({
    description:
      "Get guidance on wood species, finishes, door styles, hardware, or moldings from Vivant's materials catalog.",
    inputSchema: z.object({
      topic: z
        .string()
        .describe(
          "e.g. white oak, inset, painted finish, brass, shaker, bright kitchen",
        ),
    }),
    execute: async ({ topic }) => {
      const q = topic.toLowerCase();
      const matches = materials.filter((m) => {
        const hay = [m.name, m.description, m.kind, ...m.bestFor]
          .join(" ")
          .toLowerCase();
        return q.split(/\s+/).some((t) => hay.includes(t));
      });

      return {
        matches: (matches.length ? matches : materials.slice(0, 4)).map(
          (m) => ({
            id: m.id,
            kind: materialKindLabels[m.kind],
            name: m.name,
            description: m.description,
            bestFor: m.bestFor,
            image: m.image,
          }),
        ),
      };
    },
  }),

  getProcessInfo: tool({
    description:
      "Retrieve Vivant's design process steps, typical timelines, and related FAQs.",
    inputSchema: z.object({
      focus: z
        .enum(["process", "timeline", "faq", "all"])
        .optional()
        .describe("Which aspect to emphasize"),
    }),
    execute: async ({ focus = "all" }) => {
      return {
        process: processSteps,
        timeline:
          "Design and selections typically 4–8 weeks; fabrication often 8–14 weeks depending on scope; installation aligned with the home's schedule.",
        faqs: focus === "process" ? [] : faqs,
      };
    },
  }),

  getServices: tool({
    description: "List Vivant Custom Woodcraft services and summaries.",
    inputSchema: z.object({}),
    execute: async () => ({
      services: services.map((s) => ({
        slug: s.slug,
        title: s.title,
        summary: s.summary,
        href: `/services/${s.slug}`,
        highlights: s.highlights,
      })),
    }),
  }),

  /**
   * Phase 2 stub — personalized combination recommendations.
   * Not wired into rich UI yet; safe no-op style response for future use.
   */
  // recommendCombinations — add in Phase 2
};

export type ConsultTools = typeof consultTools;
