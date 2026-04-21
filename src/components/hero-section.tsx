import { PrimaryCtaButton } from "@/components/primary-cta-button";
import { SiteHeader } from "@/components/site-header";

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.50), rgba(0,0,0,0.50)), url('/assets/hero-background.webp')",
      }}
    >
      <SiteHeader />

      <div className="mx-auto flex min-h-screen w-full max-w-screen-xl flex-col justify-center px-4 pb-16 md:px-20 md:pb-20 lg:justify-end">
        <div className="flex max-w-4xl flex-col gap-2">
          <h1 className="bg-[radial-gradient(circle_at_25%_40%,#FFFFFF_0%,#B5B5B5_100%)] bg-clip-text text-[3.5rem] leading-[4rem] font-normal tracking-[-0.0625rem] text-transparent">
            Designing Biomolecules for Therapeutic Innovation
          </h1>
          <p className="max-w-2xl text-lg leading-7 text-white md:text-xl">
            Engineering peptides and proteins for therapeutic applications through the integration
            of chemistry, biology, and artificial intelligence.
          </p>
          <div className="pt-2 md:hidden">
            <PrimaryCtaButton
              arrowClassName="h-11"
              className="shadow-[0_0.25rem_1.25rem_rgba(0,0,0,0.12)]"
              href="/join-lab"
              label="Join the Lab"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
