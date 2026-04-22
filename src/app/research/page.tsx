import type { Metadata } from "next";

import { CoreResearchAreasSection } from "@/components/core-research-areas-section";
import { ResearchFocusSection } from "@/components/research-focus-section";
import { ResearchHeroSection } from "@/components/research-hero-section";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Explore The Adebomi Lab research focus across peptide and protein binder design, AI-driven biomolecular design, and screening technologies.",
  alternates: {
    canonical: "/research",
  },
  openGraph: {
    title: "Research | The Adebomi Lab",
    description:
      "Explore The Adebomi Lab research focus across peptide and protein binder design, AI-driven biomolecular design, and screening technologies.",
    url: "/research",
  },
  twitter: {
    title: "Research | The Adebomi Lab",
    description:
      "Explore The Adebomi Lab research focus across peptide and protein binder design, AI-driven biomolecular design, and screening technologies.",
  },
};

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      <ResearchHeroSection />

      <main>
        <ResearchFocusSection />
        <CoreResearchAreasSection />
      </main>

      <SiteFooter />
    </div>
  );
}
