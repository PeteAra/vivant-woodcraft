export type ProjectCategory =
  | "kitchen"
  | "bathroom"
  | "built-ins"
  | "millwork"
  | "entertainment"
  | "library"
  | "bar";

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  location: string;
  description: string;
  materials: string[];
  finishes: string[];
  styles: string[];
  featured: boolean;
  coverImage: string;
  gallery: string[];
  year?: string;
};

const u = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const projects: Project[] = [
  {
    slug: "lake-minnetonka-kitchen",
    title: "Lake Minnetonka Kitchen",
    subtitle: "A serene white oak sanctuary for gathering",
    category: "kitchen",
    location: "Lake Minnetonka, MN",
    description:
      "Floor-to-ceiling white oak cabinetry with inset doors, a sculptural island, and quiet brass hardware—crafted for a lakeside home that values light, texture, and permanence.",
    materials: ["White Oak", "Brass Hardware", "Calacatta Stone"],
    finishes: ["Natural Oil", "Soft Matte"],
    styles: ["Transitional", "Contemporary"],
    featured: true,
    coverImage: u("photo-1556912173-46c336c7fd55"),
    gallery: [
      u("photo-1556912173-46c336c7fd55"),
      u("photo-1556911220-bff31c812dba"),
      u("photo-1600489000022-c2086d79f9d4"),
    ],
    year: "2024",
  },
  {
    slug: "edina-primary-bath",
    title: "Edina Primary Bath",
    subtitle: "Walnut vanity with spa-like restraint",
    category: "bathroom",
    location: "Edina, MN",
    description:
      "A floating walnut vanity with custom drawers, mirrored cabinets, and precise reveal lines—designed as a private retreat within a renovated primary suite.",
    materials: ["Walnut", "Honed Marble", "Bronze Hardware"],
    finishes: ["Stained", "Hand-Rubbed Oil"],
    styles: ["Modern", "European"],
    featured: true,
    coverImage: u("photo-1552321554-5fefe8c9ef14"),
    gallery: [
      u("photo-1552321554-5fefe8c9ef14"),
      u("photo-1600566753190-17f0baa2a6c3"),
      u("photo-1584622650111-993a426fbf0a"),
    ],
    year: "2023",
  },
  {
    slug: "wayzata-library-wall",
    title: "Wayzata Library Wall",
    subtitle: "Floor-to-ceiling shelving with hidden storage",
    category: "library",
    location: "Wayzata, MN",
    description:
      "A full-height library in cherry and paint-grade millwork, with ladder rail, integrated lighting, and concealed cabinetry for media and archives.",
    materials: ["Cherry", "Paint Grade", "Brass Ladder Rail"],
    finishes: ["Stained Cherry", "Custom Paint"],
    styles: ["Traditional", "Transitional"],
    featured: true,
    coverImage: u("photo-1507842217343-583bb7270b66"),
    gallery: [
      u("photo-1507842217343-583bb7270b66"),
      u("photo-1481627834876-b7833e8f6540"),
      u("photo-1524995997946-a1c2e315a42f"),
    ],
    year: "2023",
  },
  {
    slug: "north-oaks-entertainment",
    title: "North Oaks Media Wall",
    subtitle: "Architectural entertainment cabinetry",
    category: "entertainment",
    location: "North Oaks, MN",
    description:
      "A seamless media wall with slab doors, integrated speakers, and fireplace surround millwork—engineered for clean sightlines and effortless living.",
    materials: ["Walnut", "Paint Grade", "Stone Surround"],
    finishes: ["Wire Brushed", "Matte Lacquer"],
    styles: ["Modern", "Contemporary"],
    featured: true,
    coverImage: u("photo-1618221195710-dd6b41faaea6"),
    gallery: [
      u("photo-1618221195710-dd6b41faaea6"),
      u("photo-1616486338812-3dadae4b4ace"),
      u("photo-1600210492493-0946911123ea"),
    ],
    year: "2024",
  },
  {
    slug: "bloomington-farmhouse-kitchen",
    title: "Bloomington Farmhouse Kitchen",
    subtitle: "Shaker cabinetry with modern warmth",
    category: "kitchen",
    location: "Bloomington, MN",
    description:
      "Classic shaker forms in painted maple and natural oak accents—bridging modern farmhouse comfort with refined millwork details.",
    materials: ["Maple", "White Oak", "Black Hardware"],
    finishes: ["Painted", "Natural"],
    styles: ["Farmhouse", "Transitional"],
    featured: false,
    coverImage: u("photo-1600585154526-990dced4db0d"),
    gallery: [
      u("photo-1600585154526-990dced4db0d"),
      u("photo-1556910103-1c02745aae4d"),
      u("photo-1565538810643-b5bdb714032a"),
    ],
    year: "2022",
  },
  {
    slug: "minneapolis-wine-room",
    title: "Minneapolis Wine Room",
    subtitle: "Mahogany millwork for collectors",
    category: "built-ins",
    location: "Minneapolis, MN",
    description:
      "Climate-conscious wine storage with mahogany framing, glass-front cabinets, and custom moldings for a downtown residence.",
    materials: ["Mahogany", "Glass", "Bronze"],
    finishes: ["Stained", "Satin"],
    styles: ["Traditional", "European"],
    featured: false,
    coverImage: u("photo-1510812431401-41d2bd2722f3"),
    gallery: [
      u("photo-1510812431401-41d2bd2722f3"),
      u("photo-1474722883778-792e7990302f"),
      u("photo-1506377247758-2c0c6c5a0b0a"),
    ],
    year: "2022",
  },
  {
    slug: "excelsior-bar",
    title: "Excelsior Home Bar",
    subtitle: "A private hospitality experience at home",
    category: "bar",
    location: "Excelsior, MN",
    description:
      "Custom bar cabinetry with raised-panel doors, mirrored backs, and integrated refrigeration—built for entertaining with quiet luxury.",
    materials: ["Cherry", "Mirror", "Brass"],
    finishes: ["Stained", "Distressed Accent"],
    styles: ["Traditional", "Transitional"],
    featured: false,
    coverImage: u("photo-1514933651103-005eec06c04b"),
    gallery: [
      u("photo-1514933651103-005eec06c04b"),
      u("photo-1470337458703-46ad1756a187"),
      u("photo-1551024709-8cd1db062b0d"),
    ],
    year: "2021",
  },
  {
    slug: "credit-river-mudroom",
    title: "Credit River Mudroom",
    subtitle: "Built-ins that honor everyday rituals",
    category: "built-ins",
    location: "Credit River, MN",
    description:
      "Cubbies, lockers, and bench seating in durable paint-grade and oak—designed for a busy household that still wants beauty at the threshold.",
    materials: ["Paint Grade", "White Oak", "Hooks & Hardware"],
    finishes: ["Painted", "Natural"],
    styles: ["Transitional", "Farmhouse"],
    featured: false,
    coverImage: u("photo-1600566753086-00f18fb6b3ea"),
    gallery: [
      u("photo-1600566753086-00f18fb6b3ea"),
      u("photo-1600047509807-ba8f99d36b5a"),
      u("photo-1600607687939-ce8a6c25118c"),
    ],
    year: "2024",
  },
  {
    slug: "plymouth-millwork",
    title: "Plymouth Architectural Millwork",
    subtitle: "Doors, trim, and ceiling details in harmony",
    category: "millwork",
    location: "Plymouth, MN",
    description:
      "Whole-home millwork package—custom doors, casing, base, and coffered ceiling elements—executed with consistent profiles and exceptional joinery.",
    materials: ["Paint Grade", "Oak", "Custom Moldings"],
    finishes: ["Painted", "Stained"],
    styles: ["Traditional", "Transitional"],
    featured: false,
    coverImage: u("photo-1600607687644-c7171b42498f"),
    gallery: [
      u("photo-1600607687644-c7171b42498f"),
      u("photo-1600573472592-401b489a3cdc"),
      u("photo-1600585154340-be6161a56a0c"),
    ],
    year: "2023",
  },
];

export const categoryLabels: Record<ProjectCategory, string> = {
  kitchen: "Kitchen",
  bathroom: "Bathroom",
  "built-ins": "Built-ins",
  millwork: "Millwork",
  entertainment: "Entertainment",
  library: "Library",
  bar: "Bar",
};

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}

export function getProjectsByCategory(category: ProjectCategory | "all") {
  if (category === "all") return projects;
  return projects.filter((p) => p.category === category);
}
