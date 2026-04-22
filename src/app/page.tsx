import type { Metadata } from "next";

import { AboutUsSection } from "@/components/about-us-section";
import { FeaturedResearchSection } from "@/components/featured-research-section";
import { HeroSection } from "@/components/hero-section";
import { PrincipalInvestigatorSection } from "@/components/principal-investigator-section";
import { ResearchAreasSection } from "@/components/research-areas-section";
import { SiteFooter } from "@/components/site-footer";
import { WorkWithUsSection } from "@/components/work-with-us-section";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Designing biomolecules for therapeutic innovation through the integration of chemistry, biology, and artificial intelligence.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "The Adebomi Lab",
    description:
      "Designing biomolecules for therapeutic innovation through the integration of chemistry, biology, and artificial intelligence.",
    url: "/",
  },
  twitter: {
    title: "The Adebomi Lab",
    description:
      "Designing biomolecules for therapeutic innovation through the integration of chemistry, biology, and artificial intelligence.",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      <HeroSection />

      <main>
        <AboutUsSection />
        <ResearchAreasSection />
        <PrincipalInvestigatorSection />
        <FeaturedResearchSection />
        <WorkWithUsSection />
      </main>

      <SiteFooter />
    </div>
  );
}
