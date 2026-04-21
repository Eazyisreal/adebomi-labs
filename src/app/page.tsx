import { HeroSection } from "@/components/hero-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      <HeroSection />

      <main className="mx-auto w-full max-w-screen-xl px-4 py-20 md:px-20">
        <div className="rounded-2xl border border-[#E6E6E6] bg-white p-8 text-[#333333] shadow-[0_0.625rem_2.5rem_rgba(0,0,0,0.05)]">
          <p className="text-base leading-7 md:text-lg">
            Homepage sections continue below this point. Header and footer are now implemented from
            the Figma structure, with responsive behavior and a mobile expanded menu pattern.
          </p>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
