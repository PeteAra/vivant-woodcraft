export const services = [
  {
    slug: "kitchen",
    title: "Kitchen Cabinetry",
    eyebrow: "The heart of the home",
    summary:
      "Bespoke kitchens designed as furniture for living—islands, pantries, and cabinetry tailored to how you cook and gather.",
    description:
      "From quiet transitional kitchens to bold contemporary compositions, we craft cabinetry that anchors the home. Every drawer box, appliance panel, and finish is specified for longevity and beauty.",
    image:
      "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=1600&q=80",
    highlights: [
      "Custom islands & seating",
      "Inset or overlay construction",
      "Integrated pantries & appliance panels",
      "Material & finish consulting",
    ],
  },
  {
    slug: "bathroom",
    title: "Bathroom Vanities",
    eyebrow: "Private retreats",
    summary:
      "Vanities and bath cabinetry with spa-like restraint—precise storage, refined hardware, and finishes that endure moisture and daily ritual.",
    description:
      "Primary suites and powder rooms deserve the same craftsmanship as the kitchen. We design floating or furniture-style vanities, linen towers, and mirrored cabinets that feel serene and intentional.",
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1600&q=80",
    highlights: [
      "Custom vanity proportions",
      "Moisture-conscious materials",
      "Integrated storage solutions",
      "Coordinated hardware & mirrors",
    ],
  },
  {
    slug: "built-ins",
    title: "Custom Built-ins",
    eyebrow: "Architecture that stores",
    summary:
      "Libraries, mudrooms, offices, wine rooms, and media walls—built-ins that disappear into the architecture while elevating daily life.",
    description:
      "Built-ins are where craftsmanship meets lifestyle. We design for sightlines, lighting, and hidden function so every wall works as hard as it looks.",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1600&q=80",
    highlights: [
      "Libraries & dens",
      "Mudrooms & lockers",
      "Wine & bar cabinetry",
      "Home offices & desks",
    ],
  },
  {
    slug: "millwork",
    title: "Architectural Millwork",
    eyebrow: "The finishing language of the home",
    summary:
      "Doors, trim, moldings, and ceiling details executed with consistent profiles and exceptional joinery across the residence.",
    description:
      "Millwork is the quiet grammar of a luxury home. We craft custom doors, casing, base, wainscoting, and specialty trim so every room speaks the same refined dialect.",
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1600&q=80",
    highlights: [
      "Custom interior doors",
      "Crown, casing & base",
      "Wainscoting & paneling",
      "Coffered & specialty ceilings",
    ],
  },
] as const;

export type ServiceSlug = (typeof services)[number]["slug"];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
