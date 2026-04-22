import { PublicationsHeroSection } from "@/components/publications-hero-section";
import { PublicationsListSection } from "@/components/publications-list-section";
import { SiteFooter } from "@/components/site-footer";

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
