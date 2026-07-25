import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/Section";
import { GalleryMasonry } from "@/components/portfolio/GalleryMasonry";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A visual collection of Vivant Custom Woodcraft kitchens, baths, built-ins, and millwork.",
};

export default function GalleryPage() {
  return (
    <Section className="pt-28 md:pt-32">
      <SectionHeader
        eyebrow="Gallery"
        title="A study in light, grain, and form"
        description="Browse our craftsmanship. Select an image to view it larger."
      />
      <GalleryMasonry />
    </Section>
  );
}
