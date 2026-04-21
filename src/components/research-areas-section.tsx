import Image from "next/image";

import { PrimaryCtaButton } from "@/components/primary-cta-button";

const RESEARCH_AREAS = [
  {
    title: "Computational Peptide Design of Binders",
    description:
      "We develop computational and AI-driven approaches to design peptide binders that selectively interact with biological targets. This enables precise molecular recognition and expands the toolkit for studying and modulating biological systems.",
    image: "/assets/research-area-1.png",
  },
  {
    title: "High- to Medium-Throughput Peptide Screening",
    description:
      "We build and apply screening platforms to rapidly evaluate peptide libraries against diverse targets. These methods allow us to identify high-affinity binders and optimize their performance for therapeutic and research applications.",
    image: "/assets/research-area-2.png",
  },
  {
    title: "De Novo Design of Mini Binders",
    description:
      "We design small, stable protein-like molecules from scratch with the ability to bind specific targets. These mini binders offer a compact and efficient alternative to larger biomolecules for diagnostics and therapeutics.",
    image: "/assets/research-area-3.png",
  },
  {
    title: "Nucleic Acid Binder Design",
    description:
      "Our work explores the design of molecules that selectively bind to nucleic acids such as RNA and DNA. This opens new possibilities for targeting genetic material in disease contexts and regulating biological processes at the molecular level.",
    image: "/assets/research-area-4.png",
  },
  {
    title: "De Novo Enzyme Design",
    description:
      "We aim to create entirely new enzymes with catalytic functions not found in nature. By combining computational modeling with experimental validation, we work toward expanding the boundaries of what enzymes can do in medicine and biotechnology.",
    image: "/assets/research-area-5.png",
  },
] as const;

export function ResearchAreasSection() {
  return (
    <section>
      <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-6 px-4 py-16 md:px-20">
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="flex flex-col items-center gap-1">
            <h2 className="text-[2.5rem] leading-[3rem] tracking-[-0.025em] text-[#0D1B2A]">
              Our Research <span className="text-[#2BC48A]">Areas</span>
            </h2>
            <p className="max-w-[46.1875rem] text-[1.25rem] leading-[1.75rem] text-[#333333]">
              Our work spans computational design, experimental validation, and the development of
              next-generation biomolecules.
            </p>
          </div>

          <PrimaryCtaButton href="/research" label="Learn More" />
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {RESEARCH_AREAS.map((area, index) => (
            <article
              className={`flex flex-col gap-[0.8125rem] rounded-2xl bg-white p-3 pb-12 ${
                index === RESEARCH_AREAS.length - 1 ? "lg:col-span-2" : ""
              }`}
              key={area.title}
            >
              <div className="h-[15rem] overflow-hidden rounded-2xl bg-[#FAFAFA]">
                <Image
                  alt={area.title}
                  className="h-full w-full object-cover"
                  height={816}
                  src={area.image}
                  width={1224}
                />
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-[1.5rem] leading-[2rem] tracking-[-0.0208em] text-[#0D1B2A]">
                  {area.title}
                </h3>
                <p className="text-[1rem] leading-[1.5rem] font-light text-[#0D1B2A]">
                  {area.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
