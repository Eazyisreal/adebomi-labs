import Image from "next/image";

import { PrimaryCtaButton } from "@/components/primary-cta-button";

export function PrincipalInvestigatorSection() {
  return (
    <section>
      <div className="mx-auto w-full max-w-screen-xl px-4 py-16 md:px-20">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <div className="order-2 flex w-full flex-col gap-3 lg:order-1 lg:max-w-[34.5rem]">
            <div className="flex flex-col gap-1">
              <p className="text-sm leading-5 text-[#333333] uppercase">Principal Investigator</p>
              <h2 className="text-[2.5rem] leading-[3rem] tracking-[-0.025em] text-[#0D1B2A]">
                Meet the <span className="text-[#2BC48A]">Principal</span> Investigator
              </h2>
            </div>

            <p className="text-[1.25rem] leading-[1.75rem] font-light tracking-[0rem] text-[#333333]">
              Victor Adebomi, PhD, is an Assistant Professor at Worcester Polytechnic Institute,
              specializing in bioorganic chemistry and AI-driven biomolecular design. His research
              focuses on developing innovative approaches to peptide and protein engineering for
              applications in medicine and biotechnology.
            </p>

            <PrimaryCtaButton href="/team" label="View Full Profile" />
          </div>

          <div className="order-1 h-72 w-full overflow-hidden rounded-[1.25rem] lg:order-2 lg:h-[36.5rem] lg:max-w-[34.5rem]">
            <Image
              alt="Principal investigator portrait"
              className="h-full w-full object-cover"
              height={720}
              src="/assets/principal-investigator.webp"
              width={1080}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
