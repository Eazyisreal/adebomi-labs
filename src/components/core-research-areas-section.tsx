import Image from "next/image";

import { RESEARCH_AREAS, RESEARCH_AREAS_SUMMARY } from "@/lib/research-content";

export function CoreResearchAreasSection() {
  return (
    <section>
      <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-6 px-4 pb-20 md:px-20">
        <div className="flex flex-col gap-1 md:items-center md:text-center">
          <h2 className="text-[2.5rem] leading-[3rem] tracking-[-0.025em] text-[#0D1B2A]">
            Core Research <span className="text-[#0D1B2A]">Areas</span>
          </h2>
          <p className="max-w-[46.1875rem] text-[1.25rem] leading-[1.75rem] text-[#333333]">
            {RESEARCH_AREAS_SUMMARY}
          </p>
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
