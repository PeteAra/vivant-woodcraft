"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PrivateFooter } from "@/components/layout/PrivateFooter";
import { ConsultAffordance } from "@/components/layout/ConsultAffordance";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isGateway = pathname === "/";
  const isPrivate = pathname === "/private" || pathname.startsWith("/private/");

  if (isGateway) {
    return <main className="flex-1">{children}</main>;
  }

  if (isPrivate) {
    return (
      <div data-theme="private" className="min-h-full flex flex-col flex-1">
        <main className="flex-1">{children}</main>
        <PrivateFooter />
      </div>
    );
  }

  return (
    <div data-theme="trade" className="min-h-full flex flex-col flex-1">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <ConsultAffordance />
    </div>
  );
}
