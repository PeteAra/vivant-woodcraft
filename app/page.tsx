import type { Metadata } from "next";
import { AudienceGateway } from "@/components/home/AudienceGateway";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: {
    absolute: `${siteConfig.name} | Private Clients & Trade Partners`,
  },
  description:
    "Custom cabinetry and architectural millwork for private clients and trade partners across the Twin Cities.",
};

export default function GatewayPage() {
  return <AudienceGateway />;
}
