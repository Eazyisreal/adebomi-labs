import type { Metadata } from "next";

import { JoinLabFormSection } from "@/components/join-lab-form-section";
import { JoinLabHeroSection } from "@/components/join-lab-hero-section";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Join the Lab",
  description:
    "Apply to join The Adebomi Lab. Submit your details, interests, and background for undergraduate, master's, PhD, or postdoctoral opportunities.",
  alternates: {
    canonical: "/join-lab",
  },
  openGraph: {
    title: "Join the Lab | The Adebomi Lab",
    description:
      "Apply to join The Adebomi Lab. Submit your details, interests, and background for undergraduate, master's, PhD, or postdoctoral opportunities.",
    url: "/join-lab",
  },
  twitter: {
    title: "Join the Lab | The Adebomi Lab",
    description:
      "Apply to join The Adebomi Lab. Submit your details, interests, and background for undergraduate, master's, PhD, or postdoctoral opportunities.",
  },
};

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
