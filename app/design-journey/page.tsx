import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Design Journey",
  description: "Begin your private client vision walkthrough with Vivant.",
};

/** Design Journey now lives in the Private Clients experience */
export default function DesignJourneyRedirect() {
  redirect("/private");
}
