import Image from "next/image";

import { PrimaryCtaButton } from "@/components/primary-cta-button";
import { LAB_MEMBERS_BLURB, TEAM_PROFILE } from "@/lib/team-content";

export function TeamProfileSection() {
  return (
    <section>
      <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-6 px-4 py-16 md:px-20 md:py-20">
        <div className="flex flex-col items-stretch md:flex-row md:items-center">
          <div className="flex h-[43.8125rem] w-full flex-col items-center gap-[1.4375rem] rounded-3xl bg-white px-4 py-6 md:h-[43.8125rem] md:max-w-[28.5625rem]">
            <div className="h-[29.25rem] w-full overflow-hidden rounded-[1.25rem]">
              <Image
                alt={TEAM_PROFILE.name}
                className="h-full w-full object-cover"
                height={900}
                src="/assets/team-principal-investigator.webp"
                width={720}
              />
            </div>
            <h2 className="w-full text-center text-[2rem] leading-[2.5rem] tracking-[-0.0313em] text-[#0D1B2A]">
              {TEAM_PROFILE.name}
            </h2>
            <p className="w-full text-center text-[1rem] leading-[1.5rem] text-[#0D1B2A]">
              <span className="font-medium">Current position and institution:</span>
              <br />
              <span className="font-light">{TEAM_PROFILE.currentPosition}</span>
            </p>
          </div>

          <div className="flex w-full px-8 py-6 md:w-[40.4375rem] md:px-8 md:py-12">
            <div className="text-[1.25rem] leading-[1.75rem] font-light text-[#333333]">
              <p>
                <strong className="font-medium">Bio:</strong>
              </p>
              <p className="mt-2">{TEAM_PROFILE.bio[0]}</p>
              <p className="mt-7">{TEAM_PROFILE.bio[1]}</p>
              <p className="mt-7">{TEAM_PROFILE.bio[2]}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3">
          <h3 className="text-center text-[2.5rem] leading-[3rem] tracking-[-0.025em] text-[#0D1B2A]">
            Lab Members
          </h3>
          <p className="max-w-[50rem] text-center text-[1.25rem] leading-[1.75rem] text-[#333333]">
            {LAB_MEMBERS_BLURB}
          </p>
          <PrimaryCtaButton href="/join-lab" label="Join the Lab" />
        </div>
      </div>
    </section>
  );
}
