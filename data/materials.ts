export type MaterialKind =
  | "wood"
  | "finish"
  | "door-style"
  | "profile"
  | "hardware"
  | "molding";

export type Material = {
  id: string;
  kind: MaterialKind;
  name: string;
  description: string;
  bestFor: string[];
  image: string;
};

const u = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

export const materials: Material[] = [
  {
    id: "white-oak",
    kind: "wood",
    name: "White Oak",
    description:
      "A luminous, durable hardwood with refined grain—ideal for kitchens and built-ins that invite natural light.",
    bestFor: ["Kitchens", "Built-ins", "Modern & Transitional"],
    image: u("photo-1615876235086-a7a2f5a4c0e1"),
  },
  {
    id: "walnut",
    kind: "wood",
    name: "Walnut",
    description:
      "Deep, chocolate warmth with elegant figure. A signature choice for statement islands, vanities, and media walls.",
    bestFor: ["Vanities", "Entertainment", "European Modern"],
    image: u("photo-1615874959474-d609969a20ed"),
  },
  {
    id: "maple",
    kind: "wood",
    name: "Maple",
    description:
      "Fine, even grain that accepts paint or clear finishes beautifully—versatile for both classic and contemporary work.",
    bestFor: ["Painted kitchens", "Shaker", "Farmhouse"],
    image: u("photo-1558618666-fcd25c85cd64"),
  },
  {
    id: "cherry",
    kind: "wood",
    name: "Cherry",
    description:
      "Rich color that deepens with age—beloved for traditional libraries, bars, and formal dining cabinetry.",
    bestFor: ["Libraries", "Bars", "Traditional"],
    image: u("photo-1503387762-592deb58ef4e"),
  },
  {
    id: "mahogany",
    kind: "wood",
    name: "Mahogany",
    description:
      "Timeless luxury with a silky texture—reserved for statement millwork and collector-quality interiors.",
    bestFor: ["Wine rooms", "Formal spaces", "European"],
    image: u("photo-1615874959474-d609969a20ed"),
  },
  {
    id: "paint-grade",
    kind: "wood",
    name: "Paint Grade",
    description:
      "Precision-milled substrates prepared for flawless painted finishes—perfect for crisp, architectural cabinetry.",
    bestFor: ["Painted kitchens", "Mudrooms", "Millwork"],
    image: u("photo-1600585154340-be6161a56a0c"),
  },
  {
    id: "natural",
    kind: "finish",
    name: "Natural Oil",
    description:
      "A soft, hand-rubbed finish that reveals the wood’s character while protecting for daily living.",
    bestFor: ["Oak", "Walnut", "Bright rooms"],
    image: u("photo-1616486338812-3dadae4b4ace"),
  },
  {
    id: "stained",
    kind: "finish",
    name: "Custom Stain",
    description:
      "Tuned stain formulas matched to your interior palette—consistent across doors, panels, and trim.",
    bestFor: ["Cherry", "Walnut", "Whole-home harmony"],
    image: u("photo-1565182999561-18d7dc61c393"),
  },
  {
    id: "painted",
    kind: "finish",
    name: "Painted Lacquer",
    description:
      "Smooth, durable painted surfaces in custom hues—from soft chalk whites to deep architectural tones.",
    bestFor: ["Shaker", "Modern farmhouse", "Baths"],
    image: u("photo-1600210492486-724fe5c67fb0"),
  },
  {
    id: "wire-brushed",
    kind: "finish",
    name: "Wire Brushed",
    description:
      "Textural depth that catches light and invites touch—especially striking on oak and walnut.",
    bestFor: ["Contemporary", "Organic modern"],
    image: u("photo-1631679706909-1844bbd07221"),
  },
  {
    id: "distressed",
    kind: "finish",
    name: "Artisan Distressed",
    description:
      "Subtle, intentional wear for spaces that want heritage character without looking artificial.",
    bestFor: ["Farmhouse", "Traditional"],
    image: u("photo-1618221195710-dd6b41faaea6"),
  },
  {
    id: "inset",
    kind: "door-style",
    name: "Inset",
    description:
      "Doors and drawers sit flush within the face frame—a hallmark of fine furniture-grade cabinetry.",
    bestFor: ["Heirloom kitchens", "Traditional & Transitional"],
    image: u("photo-1556912173-3bb406ef7e77"),
  },
  {
    id: "overlay",
    kind: "door-style",
    name: "Overlay",
    description:
      "Doors overlay the frame for a clean, contemporary silhouette with efficient construction.",
    bestFor: ["Modern", "Value-conscious luxury"],
    image: u("photo-1556911220-bff31c812dba"),
  },
  {
    id: "shaker",
    kind: "door-style",
    name: "Shaker",
    description:
      "The timeless five-piece door—quiet, versatile, and endlessly adaptable across styles.",
    bestFor: ["Farmhouse", "Transitional", "Modern"],
    image: u("photo-1600585154526-990dced4db0d"),
  },
  {
    id: "raised-panel",
    kind: "door-style",
    name: "Raised Panel",
    description:
      "Dimensional panels that bring classical depth and formality to cabinetry and millwork.",
    bestFor: ["Traditional", "European"],
    image: u("photo-1600607687644-c7171b42498f"),
  },
  {
    id: "slab",
    kind: "door-style",
    name: "Slab",
    description:
      "Uninterrupted planes for modern interiors—grain-matched or painted for a sculptural effect.",
    bestFor: ["Contemporary", "Minimal"],
    image: u("photo-1618221195710-dd6b41faaea6"),
  },
  {
    id: "brass-hardware",
    kind: "hardware",
    name: "Brass",
    description:
      "Warm metallic accents that age gracefully—chosen for kitchens and baths with lasting presence.",
    bestFor: ["Transitional", "European"],
    image: u("photo-1556910103-1c02745aae4d"),
  },
  {
    id: "bronze-hardware",
    kind: "hardware",
    name: "Bronze",
    description:
      "Soft, dark metal with an intimate glow—pairs beautifully with walnut and stained woods.",
    bestFor: ["Modern", "Traditional"],
    image: u("photo-1600566753190-17f0baa2a6c3"),
  },
  {
    id: "black-hardware",
    kind: "hardware",
    name: "Matte Black",
    description:
      "Graphic contrast for farmhouse and contemporary spaces—clean and intentional.",
    bestFor: ["Farmhouse", "Contemporary"],
    image: u("photo-1565538810643-b5bdb714032a"),
  },
  {
    id: "crown-molding",
    kind: "molding",
    name: "Crown & Casing",
    description:
      "Custom profiles that complete the architecture—from subtle shadow lines to grand classical crowns.",
    bestFor: ["Whole-home millwork", "Traditional"],
    image: u("photo-1600573472592-401b489a3cdc"),
  },
  {
    id: "bevel-profile",
    kind: "profile",
    name: "Bevel & Ogee Profiles",
    description:
      "Door and drawer edge profiles tailored to your style—modern bevels to classical ogees.",
    bestFor: ["Door design", "Detail refinement"],
    image: u("photo-1616486338812-3dadae4b4ace"),
  },
];

export const materialKindLabels: Record<MaterialKind, string> = {
  wood: "Wood Species",
  finish: "Finishes",
  "door-style": "Door Styles",
  profile: "Profiles",
  hardware: "Hardware",
  molding: "Molding",
};

export function getMaterialsByKind(kind: MaterialKind | "all") {
  if (kind === "all") return materials;
  return materials.filter((m) => m.kind === kind);
}
