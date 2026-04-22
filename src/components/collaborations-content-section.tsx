import Image from "next/image";

import { PrimaryCtaButton } from "@/components/primary-cta-button";
import { COLLABORATION_INTERESTS, PAST_COLLABORATORS } from "@/lib/collaborations-content";

export function CollaborationsContentSection() {
  return (
    <section>
      <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-20 px-4 py-20 md:px-20">
        <div className="flex flex-col-reverse gap-4 lg:flex-row lg:items-center lg:gap-4">
          <div className="flex flex-col gap-3 lg:w-[34.5rem] lg:gap-3">
            <h2 className="text-[2.5rem] leading-[3rem] tracking-[-0.025em] text-[#0D1B2A]">
              Areas of Interest
            </h2>
            <p className="text-[1.25rem] leading-[1.75rem] font-light text-[#333333]">
              We welcome collaborations that align with our research expertise, particularly in:
            </p>
            <ul className="space-y-1 text-[1.25rem] leading-[1.75rem] text-[#333333]">
              {COLLABORATION_INTERESTS.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>

          <div className="h-[19.5rem] overflow-hidden rounded-[1.3614rem] lg:h-[28.25rem] lg:w-[34.1725rem] lg:shrink-0">
            <Image
              alt="Team discussing collaboration opportunities"
              className="h-full w-full object-cover"
              height={767}
              src="/assets/collaborations-areas-4e9784.webp"
              width={928}
            />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-1 text-center">
            <h2 className="text-[2.5rem] leading-[3rem] tracking-[-0.025em] text-[#0D1B2A]">
              Past Mentors and Collaborators
            </h2>
            <p className="max-w-[50rem] text-[1.25rem] leading-[1.75rem] text-[#333333]">
              Our collaborations span chemical biology, peptide and protein design, and
              computational modeling, reflecting the interdisciplinary nature of our research.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PAST_COLLABORATORS.map((person) => (
              <article
                className="flex flex-col items-center gap-6 rounded-3xl bg-white px-6 py-8 text-center"
                key={person.name}
              >
                <h3 className="max-w-[16rem] text-[2rem] leading-[2.5rem] tracking-[-0.0313em] break-words whitespace-normal text-[#0D1B2A]">
                  {person.name}
                </h3>
                <p className="text-[1rem] leading-[1.5rem] font-light text-[#0D1B2A]">
                  {person.institution}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative h-[27.5625rem] w-full">
          <div className="absolute top-0 right-[calc(50%-50vw)] h-full w-[88vw] overflow-hidden rounded-l-3xl md:w-[64.5313vw]">
            <Image
              alt="Lab setting for collaborations"
              className="h-full w-full object-cover"
              fill
              sizes="(max-width: 768px) 88vw, 64.6vw"
              src="/assets/work-with-us-lab.webp"
            />
          </div>

          <div className="absolute top-[1.4375rem] left-3 h-[25.25rem] w-[min(21.75rem,calc(100%-1.5rem))] rounded-2xl border-l-[0.375rem] border-[#1A73E8] bg-white px-10 py-16 shadow-[0_0.25rem_3.75rem_rgba(26,115,232,0.1)] md:top-[10.5079%] md:left-0 md:h-auto md:w-[47.3333%] md:border-l-0 md:p-16">
            <div className="flex flex-col gap-[0.8125rem] md:gap-6">
              <div className="flex flex-col gap-3">
                <h2 className="text-[1.5rem] leading-[2rem] tracking-[-0.0208em] text-[#0D1B2A]">
                  Interested in Collaborating?
                </h2>
                <p className="text-[1rem] leading-[1.5rem] font-light text-[#0D1B2A]">
                  If you believe there is a strong alignment, we would be happy to discuss potential
                  opportunities.
                </p>
              </div>
              <div className="flex w-fit flex-col gap-4">
                <PrimaryCtaButton href="mailto:admin@adebomilab.com" label="Send an Email" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
