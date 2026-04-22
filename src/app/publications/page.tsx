import type { Metadata } from "next";

import { PublicationsHeroSection } from "@/components/publications-hero-section";
import { PublicationsListSection } from "@/components/publications-list-section";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Browse selected publications from The Adebomi Lab spanning peptide chemistry, cyclic peptide design, and biomolecular innovation.",
  alternates: {
    canonical: "/publications",
  },
  openGraph: {
    title: "Publications | The Adebomi Lab",
    description:
      "Browse selected publications from The Adebomi Lab spanning peptide chemistry, cyclic peptide design, and biomolecular innovation.",
    url: "/publications",
  },
  twitter: {
    title: "Publications | The Adebomi Lab",
    description:
      "Browse selected publications from The Adebomi Lab spanning peptide chemistry, cyclic peptide design, and biomolecular innovation.",
  },
};

export default function PublicationsPage() {
  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      <PublicationsHeroSection />

      <main>
        <PublicationsListSection />
      </main>

      <SiteFooter />
    </div>
  );
}
