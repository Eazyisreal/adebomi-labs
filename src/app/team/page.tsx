import { SiteFooter } from "@/components/site-footer";
import { TeamHeroSection } from "@/components/team-hero-section";
import { TeamProfileSection } from "@/components/team-profile-section";

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      <TeamHeroSection />

      <main>
        <TeamProfileSection />
      </main>

      <SiteFooter />
    </div>
  );
}
