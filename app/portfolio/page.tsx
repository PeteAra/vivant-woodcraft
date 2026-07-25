import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/Section";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore custom kitchens, baths, built-ins, and architectural millwork by Vivant Custom Woodcraft.",
};

export default function PortfolioPage() {
  return (
    <Section className="pt-28 md:pt-32">
      <SectionHeader
        eyebrow="Portfolio"
        title="Work that defines a home"
        description="Each project is a collaboration with homeowners who value craftsmanship, permanence, and quiet luxury."
      />
      <PortfolioGrid />
    </Section>
  );
}
