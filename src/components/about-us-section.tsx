import Image from "next/image";

export function AboutUsSection() {
  return (
    <section>
      <div className="mx-auto w-full max-w-screen-xl px-4 py-16 md:px-20">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <div className="order-2 flex w-full flex-col gap-3 lg:order-1 lg:max-w-[34.5rem]">
            <div className="flex flex-col gap-1">
              <p className="text-sm leading-5 text-[#333333] uppercase">About us</p>
              <h2 className="text-[2.5rem] leading-[3rem] tracking-[-0.025em] text-[#0D1B2A]">
                Intelligent Biomolecular Engineering
              </h2>
            </div>
            <p className="text-[1.25rem] leading-[1.75rem] font-light tracking-[0rem] text-[#333333]">
              We design biomolecules for therapeutic applications, with a focus on peptide and
              protein binders that enable precise control of biological systems. Our work integrates
              chemistry, biology, and computational approaches to advance molecular design and
              discovery.
            </p>
          </div>

          <div className="order-1 h-72 w-full overflow-hidden rounded-[1.25rem] lg:order-2 lg:h-[36.5rem] lg:max-w-[34.5rem]">
            <Image
              alt="Adebomi lab researchers in discussion"
              className="h-full w-full object-cover"
              height={1080}
              src="/assets/about-us-image-5fb531.png"
              width={1021}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
