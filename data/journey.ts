export type JourneyOption = {
  id: string;
  label: string;
  description?: string;
  image?: string;
};

const u = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`;

export const journeySpaces: JourneyOption[] = [
  { id: "kitchen", label: "Kitchen", image: u("photo-1556912173-3bb406ef7e77") },
  { id: "bathroom", label: "Bathroom", image: u("photo-1552321554-5fefe8c9ef14") },
  { id: "office", label: "Office", image: u("photo-1497366216548-37526070297c") },
  {
    id: "entertainment",
    label: "Entertainment",
    image: u("photo-1618221195710-dd6b41faaea6"),
  },
  { id: "library", label: "Library", image: u("photo-1507842217343-583bb7270b66") },
  { id: "wine-room", label: "Wine Room", image: u("photo-1510812431401-41d2bd2722f3") },
  { id: "mudroom", label: "Mudroom", image: u("photo-1600566753086-00f18fb6b3ea") },
  { id: "laundry", label: "Laundry", image: u("photo-1584622650111-993a426fbf0a") },
  { id: "custom", label: "Custom", description: "A unique space we design together" },
];

export const journeyStyles: JourneyOption[] = [
  { id: "traditional", label: "Traditional", image: u("photo-1600607687644-c7171b42498f") },
  { id: "transitional", label: "Transitional", image: u("photo-1556912173-46c336c7fd55") },
  { id: "modern", label: "Modern", image: u("photo-1618221195710-dd6b41faaea6") },
  { id: "farmhouse", label: "Farmhouse", image: u("photo-1600585154526-990dced4db0d") },
  { id: "european", label: "European", image: u("photo-1600210492493-0946911123ea") },
  { id: "contemporary", label: "Contemporary", image: u("photo-1600585154340-be6161a56a0c") },
];

export const journeyCabinetry: JourneyOption[] = [
  {
    id: "inset",
    label: "Inset",
    description: "Furniture-grade flush doors within the frame",
  },
  {
    id: "overlay",
    label: "Overlay",
    description: "Clean doors that overlay the cabinet frame",
  },
  { id: "shaker", label: "Shaker", description: "Timeless five-piece simplicity" },
  {
    id: "raised-panel",
    label: "Raised Panel",
    description: "Classical depth and formal presence",
  },
  { id: "slab", label: "Slab", description: "Uninterrupted modern planes" },
  { id: "custom", label: "Custom", description: "A profile designed uniquely for you" },
];

export const journeyWoods: JourneyOption[] = [
  { id: "white-oak", label: "White Oak" },
  { id: "walnut", label: "Walnut" },
  { id: "maple", label: "Maple" },
  { id: "cherry", label: "Cherry" },
  { id: "mahogany", label: "Mahogany" },
  { id: "paint-grade", label: "Paint Grade" },
];

export const journeyFinishes: JourneyOption[] = [
  { id: "natural", label: "Natural" },
  { id: "stained", label: "Stained" },
  { id: "painted", label: "Painted" },
  { id: "wire-brushed", label: "Wire Brushed" },
  { id: "distressed", label: "Distressed" },
  { id: "custom-finish", label: "Custom Finish" },
];

export const journeyHardware: JourneyOption[] = [
  { id: "modern", label: "Modern" },
  { id: "traditional", label: "Traditional" },
  { id: "minimal", label: "Minimal" },
  { id: "hidden", label: "Hidden" },
  { id: "brass", label: "Brass" },
  { id: "bronze", label: "Bronze" },
  { id: "black", label: "Black" },
];

export const inspirationGallery = [
  {
    id: "insp-1",
    src: u("photo-1556912173-3bb406ef7e77"),
    alt: "Luxury kitchen inspiration",
    tags: ["kitchen", "oak"],
  },
  {
    id: "insp-2",
    src: u("photo-1552321554-5fefe8c9ef14"),
    alt: "Bathroom vanity inspiration",
    tags: ["bathroom", "walnut"],
  },
  {
    id: "insp-3",
    src: u("photo-1507842217343-583bb7270b66"),
    alt: "Library inspiration",
    tags: ["library"],
  },
  {
    id: "insp-4",
    src: u("photo-1618221195710-dd6b41faaea6"),
    alt: "Modern living inspiration",
    tags: ["modern", "entertainment"],
  },
  {
    id: "insp-5",
    src: u("photo-1600585154526-990dced4db0d"),
    alt: "Farmhouse kitchen inspiration",
    tags: ["farmhouse", "kitchen"],
  },
  {
    id: "insp-6",
    src: u("photo-1600210492486-724fe5c67fb0"),
    alt: "Architectural interior inspiration",
    tags: ["millwork"],
  },
];

export type JourneySelections = {
  space?: string;
  style?: string;
  cabinetry?: string;
  wood?: string;
  finish?: string;
  hardware?: string;
  favorites: string[];
};

export const emptyJourneySelections = (): JourneySelections => ({
  favorites: [],
});

export const journeySteps = [
  { id: "space", title: "Choose your space", key: "space" as const },
  { id: "style", title: "Choose a design style", key: "style" as const },
  { id: "cabinetry", title: "Choose cabinetry style", key: "cabinetry" as const },
  { id: "wood", title: "Choose wood species", key: "wood" as const },
  { id: "finish", title: "Choose finish", key: "finish" as const },
  { id: "hardware", title: "Choose hardware style", key: "hardware" as const },
  { id: "inspiration", title: "Favorite inspiration", key: "favorites" as const },
  { id: "summary", title: "My Dream Project", key: "summary" as const },
];
