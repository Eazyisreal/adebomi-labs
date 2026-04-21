import { AboutUsSection } from "@/components/about-us-section";
import { HeroSection } from "@/components/hero-section";
import { PrincipalInvestigatorSection } from "@/components/principal-investigator-section";
import { ResearchAreasSection } from "@/components/research-areas-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      <HeroSection />

      <main>
        <AboutUsSection />
        <ResearchAreasSection />
        <PrincipalInvestigatorSection />
      </main>

      <SiteFooter />
    </div>
  );
}
