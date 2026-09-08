/**
 * Private Clients vision walkthrough — plain-language options for non-trade visitors.
 * Selections build a consultation brief for Vivant.
 */

export type VisionOption = {
  id: string;
  label: string;
  description?: string;
  image?: string;
};

const u = (id: string, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const visionSpaces: VisionOption[] = [
  {
    id: "kitchen",
    label: "Kitchen",
    description: "The heart of gathering and daily rituals",
    image: u("photo-1556912173-3bb406ef7e77"),
  },
  {
    id: "bathroom",
    label: "Bathroom",
    description: "Vanities and storage for a private retreat",
    image: u("photo-1552321554-5fefe8c9ef14"),
  },
  {
    id: "closet",
    label: "Closet / Dressing",
    description: "Wardrobe systems that feel like furniture",
    image: u("photo-1558618666-fcd25c85cd64"),
  },
  {
    id: "office",
    label: "Office / Studio",
    description: "Built-ins for focused work at home",
    image: u("photo-1497366216548-37526070297c"),
  },
  {
    id: "entertainment",
    label: "Living / Media",
    description: "Walls that hold media, display, and calm",
    image: u("photo-1618221195710-dd6b41faaea6"),
  },
  {
    id: "library",
    label: "Library / Study",
    description: "Shelving and millwork with presence",
    image: u("photo-1507842217343-583bb7270b66"),
  },
  {
    id: "wine-bar",
    label: "Wine / Bar",
    description: "Hospitality moments at home",
    image: u("photo-1510812431401-41d2bd2722f3"),
  },
  {
    id: "mudroom",
    label: "Mudroom / Entry",
    description: "Beautiful organization at the threshold",
    image: u("photo-1600566753086-00f18fb6b3ea"),
  },
  {
    id: "laundry",
    label: "Laundry",
    description: "Utility spaces worthy of careful design",
    image: u("photo-1584622650111-993a426fbf0a"),
  },
  {
    id: "other",
    label: "Something else",
    description: "Tell us about a unique space",
  },
];

/** Layout features — filtered by space where relevant */
export const visionLayouts: (VisionOption & { spaces?: string[] })[] = [
  {
    id: "floor-to-ceiling",
    label: "Floor to ceiling",
    description: "Full-height storage that reads as architecture",
    spaces: ["kitchen", "closet", "office", "library", "entertainment", "mudroom", "laundry", "other"],
    image: u("photo-1600585154340-be6161a56a0c"),
  },
  {
    id: "island",
    label: "Island",
    description: "A central gathering and prep piece",
    spaces: ["kitchen"],
    image: u("photo-1556911220-bff31c812dba"),
  },
  {
    id: "above-window",
    label: "Above windows / openings",
    description: "Cabinetry that frames light and views",
    spaces: ["kitchen", "bathroom", "office", "library", "other"],
    image: u("photo-1600210492486-724fe5c67fb0"),
  },
  {
    id: "wall-run",
    label: "Along a wall",
    description: "A continuous run of cabinetry",
    spaces: ["kitchen", "bathroom", "office", "laundry", "mudroom", "entertainment", "other"],
    image: u("photo-1600585154526-990dced4db0d"),
  },
  {
    id: "pantry",
    label: "Walk-in / tall pantry",
    description: "Concealed storage with room to organize",
    spaces: ["kitchen"],
    image: u("photo-1600566753190-17f0baa2a6c3"),
  },
  {
    id: "floating-vanity",
    label: "Floating vanity",
    description: "Light, sculptural bath furniture",
    spaces: ["bathroom"],
    image: u("photo-1552321554-5fefe8c9ef14"),
  },
  {
    id: "double-vanity",
    label: "Double vanity",
    description: "Shared space with generous storage",
    spaces: ["bathroom"],
  },
  {
    id: "island-seating",
    label: "Seating at the island",
    description: "Room for morning coffee and conversation",
    spaces: ["kitchen"],
  },
  {
    id: "open-shelving",
    label: "Open shelving moments",
    description: "Display mixed with closed storage",
    spaces: ["kitchen", "office", "library", "entertainment", "wine-bar", "other"],
  },
  {
    id: "corner-solution",
    label: "Corner solutions",
    description: "Thoughtful use of every inch",
    spaces: ["kitchen", "closet", "office", "laundry", "other"],
  },
  {
    id: "not-sure",
    label: "Not sure yet",
    description: "We'll help you discover what fits",
  },
];

export const visionStyles: VisionOption[] = [
  {
    id: "warm-classic",
    label: "Warm & classic",
    description: "Timeless details, soft formality",
    image: u("photo-1600607687644-c7171b42498f"),
  },
  {
    id: "soft-modern",
    label: "Soft modern",
    description: "Clean lines with inviting warmth",
    image: u("photo-1556912173-46c336c7fd55"),
  },
  {
    id: "minimal",
    label: "Minimal & calm",
    description: "Quiet planes, little visual noise",
    image: u("photo-1618221195710-dd6b41faaea6"),
  },
  {
    id: "organic",
    label: "Organic / natural",
    description: "Texture, grain, and grounded materials",
    image: u("photo-1600585154526-990dced4db0d"),
  },
  {
    id: "european",
    label: "Refined European",
    description: "Elegant restraint and fine proportion",
    image: u("photo-1600210492493-0946911123ea"),
  },
  {
    id: "exploring",
    label: "Still exploring",
    description: "Show us a few directions you love",
  },
];

export const visionDoorStyles: VisionOption[] = [
  {
    id: "shaker",
    label: "Simple framed doors",
    description: "The classic five-piece look—versatile and timeless",
    image: u("photo-1600585154526-990dced4db0d"),
  },
  {
    id: "slab",
    label: "Flat / seamless doors",
    description: "Smooth faces for a modern silhouette",
    image: u("photo-1618221195710-dd6b41faaea6"),
  },
  {
    id: "raised",
    label: "Raised panel",
    description: "Dimensional doors with traditional depth",
    image: u("photo-1600607687644-c7171b42498f"),
  },
  {
    id: "inset-look",
    label: "Furniture-style inset",
    description: "Doors that sit flush in the frame—heirloom feel",
    image: u("photo-1556912173-3bb406ef7e77"),
  },
  {
    id: "glass",
    label: "Glass fronts (in places)",
    description: "Light and display mixed with solid doors",
  },
  {
    id: "unsure-door",
    label: "Help me decide",
    description: "We'll guide you with samples in person",
  },
];

export const visionMoldings: VisionOption[] = [
  {
    id: "clean-edges",
    label: "Clean, simple edges",
    description: "Minimal crown and trim—architecture first",
  },
  {
    id: "soft-crown",
    label: "Soft crown & trim",
    description: "Gentle moldings that finish the room",
  },
  {
    id: "classic-molding",
    label: "Classic moldings",
    description: "More traditional profiles and presence",
  },
  {
    id: "no-molding",
    label: "Almost no molding",
    description: "A contemporary, gallery-like finish",
  },
  {
    id: "unsure-molding",
    label: "Open to suggestions",
  },
];

export const visionMaterials: VisionOption[] = [
  {
    id: "light-oak",
    label: "Light oak",
    description: "Bright, natural grain that keeps rooms airy",
    image: u("photo-1558618666-fcd25c85cd64"),
  },
  {
    id: "walnut",
    label: "Rich walnut",
    description: "Deep chocolate warmth and elegance",
    image: u("photo-1615874959474-d609969a20ed"),
  },
  {
    id: "painted-soft",
    label: "Soft painted color",
    description: "Custom whites, greiges, or quiet hues",
    image: u("photo-1600210492486-724fe5c67fb0"),
  },
  {
    id: "painted-bold",
    label: "Deeper painted tone",
    description: "Statement color with lasting finish",
  },
  {
    id: "mixed",
    label: "Mix of wood & paint",
    description: "e.g. painted walls of cabinets + wood island",
    image: u("photo-1556910103-1c02745aae4d"),
  },
  {
    id: "textured",
    label: "Textured / wire-brushed",
    description: "Grain you can feel—organic modern",
    image: u("photo-1616486338812-3dadae4b4ace"),
  },
  {
    id: "unsure-material",
    label: "Show me options",
    description: "We'll explore samples together",
  },
];

export const visionHardware: VisionOption[] = [
  {
    id: "warm-metal",
    label: "Warm metal",
    description: "Brass or bronze that ages gracefully",
  },
  {
    id: "black",
    label: "Matte black",
    description: "Graphic contrast, modern or farmhouse",
  },
  {
    id: "minimal-pulls",
    label: "Minimal / slender pulls",
    description: "Quiet hardware that doesn't compete",
  },
  {
    id: "hidden",
    label: "Hidden / push-to-open",
    description: "Almost invisible—pure cabinetry lines",
  },
  {
    id: "classic-knobs",
    label: "Classic knobs & cups",
    description: "Traditional hardware moments",
  },
  {
    id: "unsure-hardware",
    label: "Decide later",
  },
];

export type VisionSelections = {
  space?: string;
  layouts: string[];
  style?: string;
  doorStyle?: string;
  molding?: string;
  material?: string;
  hardware?: string;
  notes?: string;
};

export const emptyVisionSelections = (): VisionSelections => ({
  layouts: [],
});

export type VisionStepId =
  | "space"
  | "layout"
  | "style"
  | "doors"
  | "molding"
  | "material"
  | "hardware"
  | "notes"
  | "summary";

export const visionSteps: {
  id: VisionStepId;
  title: string;
  subtitle: string;
}[] = [
  {
    id: "space",
    title: "Where will this live?",
    subtitle: "Choose the space you're dreaming about first.",
  },
  {
    id: "layout",
    title: "How should it feel in the room?",
    subtitle: "Select everything that appeals—you can choose more than one.",
  },
  {
    id: "style",
    title: "What mood are you drawn to?",
    subtitle: "Think atmosphere, not jargon.",
  },
  {
    id: "doors",
    title: "Door & panel look",
    subtitle: "The face of your cabinetry—shown simply.",
  },
  {
    id: "molding",
    title: "Edges & finishing details",
    subtitle: "How the cabinetry meets the ceiling and walls.",
  },
  {
    id: "material",
    title: "Wood, color & texture",
    subtitle: "The material story your space will tell.",
  },
  {
    id: "hardware",
    title: "Handles & hardware feel",
    subtitle: "Small details that change the whole character.",
  },
  {
    id: "notes",
    title: "Anything else on your mind?",
    subtitle: "Timeline, must-haves, inspiration—optional but helpful.",
  },
  {
    id: "summary",
    title: "Your vision",
    subtitle: "Review your brief, then send it to Vivant for a private consultation.",
  },
];

export function layoutsForSpace(spaceId?: string) {
  if (!spaceId) return visionLayouts;
  return visionLayouts.filter(
    (l) => !l.spaces || l.spaces.includes(spaceId) || l.id === "not-sure",
  );
}

export function labelFrom(
  options: VisionOption[],
  id?: string,
): string {
  if (!id) return "—";
  return options.find((o) => o.id === id)?.label ?? id;
}

export const VISION_STORAGE_KEY = "vivant-private-vision";

export function visionToBrief(selections: VisionSelections) {
  return {
    room: selections.space,
    designStyle: selections.style,
    cabinetStyle: selections.doorStyle,
    woodSpecies: selections.material,
    finish: selections.material,
    hardware: selections.hardware,
    molding: selections.molding,
    layouts: selections.layouts,
    customerNotes: selections.notes,
    generatedAt: new Date().toISOString(),
    projectType: "private-client-vision",
  };
}

export function visionSummaryLines(selections: VisionSelections): {
  label: string;
  value: string;
}[] {
  const layoutLabels = selections.layouts
    .map((id) => labelFrom(visionLayouts, id))
    .filter(Boolean)
    .join(", ");

  return [
    { label: "Space", value: labelFrom(visionSpaces, selections.space) },
    { label: "Layout ideas", value: layoutLabels || "—" },
    { label: "Mood", value: labelFrom(visionStyles, selections.style) },
    { label: "Door look", value: labelFrom(visionDoorStyles, selections.doorStyle) },
    { label: "Details", value: labelFrom(visionMoldings, selections.molding) },
    { label: "Material", value: labelFrom(visionMaterials, selections.material) },
    { label: "Hardware", value: labelFrom(visionHardware, selections.hardware) },
    { label: "Notes", value: selections.notes?.trim() || "—" },
  ];
}
