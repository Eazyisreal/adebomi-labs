import { SiteHeader } from "@/components/site-header";

export function PublicationsHeroSection() {
  return (
    <section className="flex h-[13.75rem] flex-col md:h-[13.75rem]">
      <SiteHeader backgroundMode="solid" overlay={false} textMode="dark" />

      <div className="mx-auto flex w-full max-w-screen-xl flex-1 flex-col items-center justify-center px-4 md:px-20">
        <h1 className="bg-[radial-gradient(circle_at_25%_40%,#2D5D90_0%,#0D1B2A_100%)] bg-clip-text text-center text-[3.5rem] leading-[4rem] font-normal tracking-[-0.0625rem] text-transparent">
          Publications
        </h1>
      </div>
    </section>
  );
}
