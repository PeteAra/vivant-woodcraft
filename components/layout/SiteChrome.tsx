"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ConsultAffordance } from "@/components/layout/ConsultAffordance";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isGateway = pathname === "/";

  if (isGateway) {
    return <main className="flex-1">{children}</main>;
  }

  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <ConsultAffordance />
    </>
  );
}
