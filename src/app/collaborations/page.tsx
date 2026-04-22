import type { Metadata } from "next";

import { CollaborationsContentSection } from "@/components/collaborations-content-section";
import { CollaborationsHeroSection } from "@/components/collaborations-hero-section";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Collaborations",
  description:
    "Discover collaboration opportunities with The Adebomi Lab across peptide design, AI-driven biomolecular design, and translational therapeutic research.",
  alternates: {
    canonical: "/collaborations",
  },
  openGraph: {
    title: "Collaborations | The Adebomi Lab",
    description:
      "Discover collaboration opportunities with The Adebomi Lab across peptide design, AI-driven biomolecular design, and translational therapeutic research.",
    url: "/collaborations",
  },
  twitter: {
    title: "Collaborations | The Adebomi Lab",
    description:
      "Discover collaboration opportunities with The Adebomi Lab across peptide design, AI-driven biomolecular design, and translational therapeutic research.",
  },
};

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
