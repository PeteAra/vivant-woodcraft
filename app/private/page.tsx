import type { Metadata } from "next";
import { PrivateVisionWizard } from "@/components/private/PrivateVisionWizard";

export const metadata: Metadata = {
  title: "Private Clients",
  description:
    "A guided, jargon-free design walkthrough for custom cabinetry and millwork—build your vision and send it to Vivant for a private consultation.",
};

export default function PrivateClientsPage() {
  return <PrivateVisionWizard />;
}
