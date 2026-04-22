import { JoinLabFormSection } from "@/components/join-lab-form-section";
import { JoinLabHeroSection } from "@/components/join-lab-hero-section";
import { SiteFooter } from "@/components/site-footer";

export default function JoinLabPage() {
  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      <JoinLabHeroSection />

      <main>
        <JoinLabFormSection />
      </main>

      <SiteFooter />
    </div>
  );
}
