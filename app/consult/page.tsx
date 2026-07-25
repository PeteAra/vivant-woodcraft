import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ConsultantShell } from "@/components/consult/ConsultantShell";

export const metadata: Metadata = {
  title: "Design Consultant",
  description:
    "Meet your AI Luxury Design Consultant from Vivant Custom Woodcraft—explore species, styles, finishes, and process with a knowledgeable guide.",
};

export default function ConsultPage() {
  return (
    <Section className="pt-28 md:pt-32">
      <SectionHeader
        eyebrow="Meet Your Design Consultant"
        title="Let's design together"
        description="A refined space to explore ideas with a knowledgeable design guide. Engage when you wish—there is no interruption, only invitation."
      />
      <ConsultantShell />
    </Section>
  );
}
