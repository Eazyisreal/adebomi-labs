import { CollaborationsContentSection } from "@/components/collaborations-content-section";
import { CollaborationsHeroSection } from "@/components/collaborations-hero-section";
import { SiteFooter } from "@/components/site-footer";

export default function CollaborationsPage() {
  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      <CollaborationsHeroSection />

      <main>
        <CollaborationsContentSection />
      </main>

      <SiteFooter />
    </div>
  );
}
