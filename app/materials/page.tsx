import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { MaterialsShowroom } from "@/components/materials/MaterialsShowroom";

export const metadata: Metadata = {
  title: "Materials",
  description:
    "Explore wood species, finishes, door styles, hardware, and moldings for your custom Vivant project.",
};

export default function MaterialsPage() {
  return (
    <Section className="pt-28 md:pt-32">
      <SectionHeader
        eyebrow="Materials"
        title="A private showroom, open to imagination"
        description="Touch the grain. Study the finish. Choose the hardware that completes the composition. Every selection is curated for beauty that lasts."
      />
      <MaterialsShowroom />
      <div className="mt-16 text-center">
        <Button href="/consult">Explore Ideas with AI</Button>
        <Button href="/contact" variant="secondary" className="ml-3 mt-3 sm:mt-0">
          Schedule a Design Consultation
        </Button>
      </div>
    </Section>
  );
}
