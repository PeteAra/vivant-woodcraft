import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.vivantwoodcraft.com";
  const staticRoutes = [
    "",
    "/about",
    "/portfolio",
    "/services",
    "/process",
    "/design-journey",
    "/materials",
    "/gallery",
    "/testimonials",
    "/consult",
    "/contact",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${base}/portfolio/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes, ...serviceRoutes];
}
