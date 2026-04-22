import { SiteHeader } from "@/components/site-header";

export function JoinLabHeroSection() {
  return (
    <section className="bg-[#F7F7F7]">
      <SiteHeader backgroundMode="solid" textMode="dark" overlay={false} />

      <div className="mx-auto flex h-[13.75rem] w-full max-w-screen-xl items-center justify-center px-3 md:px-20">
        <h1 className="bg-[radial-gradient(circle_at_25%_40%,#2D5D90_0%,#0D1B2A_100%)] bg-clip-text text-center text-[2.75rem] leading-[3.25rem] font-normal tracking-[-0.0625rem] text-transparent md:text-[3.5rem] md:leading-[4rem]">
          Join the Adebomi Lab
        </h1>
      </div>
    </section>
  );
}
