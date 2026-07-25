/**
 * Placeholder photography from Unsplash.
 * Replace files under /public/images or swap URLs in this module when
 * client photography arrives. Keep the same `id` / `slug` keys.
 */

export type ImageAsset = {
  src: string;
  alt: string;
  credit?: string;
};

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  hero: {
    src: u("photo-1556912173-3bb406ef7e77", 2400),
    alt: "Sunlit luxury kitchen with custom wood cabinetry",
    credit: "Unsplash",
  },
  craftsmanship: {
    src: u("photo-1616486338812-3dadae4b4ace", 1600),
    alt: "Artisan woodworking detail on custom cabinetry",
    credit: "Unsplash",
  },
  about: {
    src: u("photo-1565182999561-18d7dc61c393", 1600),
    alt: "Warm wood workshop atmosphere",
    credit: "Unsplash",
  },
  consult: {
    src: u("photo-1600585154340-be6161a56a0c", 1600),
    alt: "Elegant custom home interior with wood millwork",
    credit: "Unsplash",
  },
  process: {
    src: u("photo-1631679706909-1844bbd07221", 1600),
    alt: "Design consultation sketches and material samples",
    credit: "Unsplash",
  },
  cta: {
    src: u("photo-1600210492486-724fe5c67fb0", 2000),
    alt: "Refined living space with architectural woodwork",
    credit: "Unsplash",
  },
} as const satisfies Record<string, ImageAsset>;
