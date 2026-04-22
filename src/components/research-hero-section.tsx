import Image from "next/image";

import { SiteHeader } from "@/components/site-header";

export function ResearchHeroSection() {
  return (
    <section className="relative min-h-[30.8125rem] overflow-hidden">
      <Image
        alt=""
        aria-hidden
        className="object-cover"
        fill
        priority
        quality={72}
        sizes="100vw"
        src="/assets/research-hero-background.webp"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10">
        <SiteHeader backgroundMode="solid" textMode="dark" />

        <div className="mx-auto flex min-h-[30.8125rem] w-full max-w-screen-xl flex-col justify-end px-4 pb-8 md:px-20 md:pb-12">
          <div className="flex max-w-[52.3125rem] flex-col gap-2">
            <h1 className="bg-[radial-gradient(circle_at_25%_40%,#FFFFFF_0%,#B5B5B5_100%)] bg-clip-text text-[3.5rem] leading-[4rem] font-normal tracking-[-0.0625rem] text-transparent">
              Research
            </h1>
            <p className="max-w-[34.8125rem] text-[1.25rem] leading-[1.75rem] text-white">
              Advancing biomolecular design through the integration of chemistry, biology, and
              computational methods.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
