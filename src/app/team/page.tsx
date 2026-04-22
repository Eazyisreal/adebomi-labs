import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { TeamHeroSection } from "@/components/team-hero-section";
import { TeamProfileSection } from "@/components/team-profile-section";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the team at The Adebomi Lab, including the principal investigator and opportunities for prospective lab members.",
  alternates: {
    canonical: "/team",
  },
  openGraph: {
    title: "Team | The Adebomi Lab",
    description:
      "Meet the team at The Adebomi Lab, including the principal investigator and opportunities for prospective lab members.",
    url: "/team",
  },
  twitter: {
    title: "Team | The Adebomi Lab",
    description:
      "Meet the team at The Adebomi Lab, including the principal investigator and opportunities for prospective lab members.",
  },
};

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
