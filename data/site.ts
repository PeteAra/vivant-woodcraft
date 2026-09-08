export const siteConfig = {
  name: "Vivant Custom Woodcraft",
  shortName: "Vivant",
  tagline: "Premium Custom Woodcraft for Distinctive Homes",
  description:
    "Heirloom-quality custom cabinetry and architectural millwork for private clients and trade partners in Credit River, Minnesota and the Twin Cities.",
  location: {
    city: "Credit River",
    state: "Minnesota",
    region: "Twin Cities",
    // Exact street address TBD — update when provided
    addressLine: null as string | null,
  },
  phone: "612-282-8259",
  phoneHref: "tel:+16122828259",
  emails: {
    cabinets: "rvivant@vivantwoodcraft.com",
    millwork: "jvivant@vivantwoodcraft.com",
  },
  owner: "Rodney Vivant",
  awards: [
    {
      year: "2002",
      title: "Trillium Award — Best Cabinetry",
      org: "Builders Association of the Twin Cities",
    },
    {
      year: "2003",
      title: "Trillium Award — Best Cabinetry",
      org: "Builders Association of the Twin Cities",
    },
    {
      year: "2004",
      title: "Trillium Award — Best Bath",
      org: "Builders Association of the Twin Cities",
    },
    {
      year: "2005",
      title: "Trillium Award — Best Bath",
      org: "Builders Association of the Twin Cities",
    },
    {
      year: null,
      title: "Partners in Excellence",
      org: "On The Level — outstanding workmanship, service & integrity",
    },
  ],
  nav: [
    { label: "Portfolio", href: "/portfolio" },
    { label: "Services", href: "/services" },
    { label: "Process", href: "/process" },
    { label: "Materials", href: "/materials" },
    { label: "Contact", href: "/contact" },
  ],
  footerLinks: [
    { label: "Private Clients", href: "/private" },
    { label: "Trade Partners", href: "/trade" },
    { label: "Design Journey", href: "/design-journey" },
    { label: "Design Consultant", href: "/consult" },
    { label: "Gallery", href: "/gallery" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "About", href: "/about" },
  ],
  socialProof:
    "Award-winning craftsmanship recognized by the Builders Association of the Twin Cities.",
} as const;

export type SiteConfig = typeof siteConfig;
