import { CoreResearchAreasSection } from "@/components/core-research-areas-section";
import { ResearchFocusSection } from "@/components/research-focus-section";
import { ResearchHeroSection } from "@/components/research-hero-section";
import { SiteFooter } from "@/components/site-footer";

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
