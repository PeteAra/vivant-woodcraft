import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/Section";
import { JourneyWizard } from "@/components/journey/JourneyWizard";

export const metadata: Metadata = {
  title: "Design Journey",
  description:
    "Configure your dream custom cabinetry project—space, style, materials, and inspiration—then schedule a private consultation with Vivant.",
};

export default function DesignJourneyPage() {
  return (
    <Section className="pt-28 md:pt-32">
      <SectionHeader
        eyebrow="Design Journey"
        title="Compose your vision"
        description="This is not shopping. It is a guided conversation with yourself—and soon, with us—about the space you want to live in."
      />
      <JourneyWizard />
    </Section>
  );
}
