import Image from "next/image";
import Link from "next/link";

import { PrimaryCtaButton } from "@/components/primary-cta-button";

export function WorkWithUsSection() {
  return (
    <section>
      <div className="mx-auto w-full max-w-screen-xl px-4 py-16 md:px-20">
        <div className="relative h-[27.5625rem] w-full">
          <div className="absolute top-0 right-[calc(50%-50vw)] h-full w-[91.5633vw] overflow-hidden rounded-l-3xl md:w-[64.5313vw]">
            <Image
              alt="Researchers collaborating in the lab"
              className="h-full w-full object-cover"
              fill
              sizes="(max-width: 768px) 91.6vw, 64.6vw"
              src="/assets/work-with-us-lab.webp"
            />
          </div>

          <div className="absolute top-[5.215%] left-[2.978%] w-[86.352%] rounded-2xl bg-white px-10 py-16 shadow-[0_0.25rem_3.75rem_rgba(26,115,232,0.1)] md:top-[14.2857%] md:left-0 md:w-[47.3333%] md:p-16">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <h2 className="text-[1.5rem] leading-[2rem] tracking-[-0.0208em] text-[#0D1B2A]">
                  Work With Us
                </h2>
                <p className="text-[1rem] leading-[1.5rem] font-light text-[#0D1B2A]">
                  We welcome students and collaborators interested in advancing biomolecular design
                  through interdisciplinary research.
                </p>
              </div>

              <div className="flex w-fit flex-col gap-4 xl:flex-row xl:gap-2">
                <PrimaryCtaButton href="/join-lab" label="Join the Lab" />
                <Link
                  className="inline-flex w-fit items-center gap-1.5 text-base leading-6 text-[#1A73E8]"
                  href="/collaborations"
                >
                  Collaborate With Us
                  <Image
                    alt=""
                    aria-hidden
                    className="h-10 w-auto shrink-0"
                    height={40}
                    src="/assets/read-paper-arrow.svg"
                    width={37}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
