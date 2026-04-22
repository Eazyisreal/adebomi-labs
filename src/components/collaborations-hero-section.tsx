import Image from "next/image";

import { SiteHeader } from "@/components/site-header";
import { COLLABORATIONS_HERO_SUBTITLE } from "@/lib/collaborations-content";

export function CollaborationsHeroSection() {
  return (
    <section className="relative h-[30.8125rem] overflow-hidden md:h-[30.8125rem]">
      <Image
        alt=""
        aria-hidden
        className="object-cover"
        fill
        priority
        quality={72}
        sizes="100vw"
        src="/assets/collaborations-hero-background.webp"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex h-full flex-col">
        <SiteHeader backgroundMode="solid" textMode="dark" />

        <div className="mx-auto flex w-full max-w-screen-xl flex-1 flex-col justify-end px-4 pb-8 md:px-20 md:pb-12">
          <div className="flex max-w-[52.3125rem] flex-col gap-2">
            <h1 className="bg-[radial-gradient(circle_at_25%_40%,#FFFFFF_0%,#B5B5B5_100%)] bg-clip-text text-[3.5rem] leading-[4rem] font-normal tracking-[-0.0625rem] text-transparent">
              Collaborations
            </h1>
            <p className="max-w-[34.8125rem] text-[1.25rem] leading-[1.75rem] text-white">
              {COLLABORATIONS_HERO_SUBTITLE}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
