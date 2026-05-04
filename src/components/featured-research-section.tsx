import Image from "next/image";
import Link from "next/link";

import { PrimaryCtaButton } from "@/components/primary-cta-button";
import type { Publication } from "@/types/publications";

type FeaturedResearchSectionProps = {
  publications: Publication[];
};

export function FeaturedResearchSection({ publications }: FeaturedResearchSectionProps) {
  return (
    <section>
      <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-6 px-4 py-16 md:px-20">
        <div className="flex flex-col items-center gap-4 text-center md:gap-3">
          <div className="flex flex-col items-center gap-1">
            <h2 className="text-[2.5rem] leading-[3rem] tracking-[-0.025em] text-[#0D1B2A]">
              Featured Research
            </h2>
            <p className="mx-auto max-w-[46.1875rem] text-[1.25rem] leading-[1.75rem] text-[#333333]">
              Selected publications highlighting key contributions in biomolecular design and
              chemical biology.
            </p>
          </div>

          <div className="flex w-full justify-center">
            <PrimaryCtaButton href="/publications" label="View all Publications" />
          </div>
        </div>

        <div className="flex min-w-0 flex-col gap-4" data-gsap-stagger>
          {publications.map((publication) => (
            <article
              className="flex w-full min-w-0 flex-col gap-6 rounded-2xl border-l-[0.375rem] border-[#1A73E8] bg-white px-6 py-8"
              data-gsap-item
              key={publication.title}
            >
              <div className="flex w-full min-w-0 flex-col gap-3">
                <h3 className="min-w-0 text-[1.5rem] leading-[2rem] tracking-[-0.0208em] break-words text-[#0D1B2A]">
                  {publication.title}
                </h3>
                <p className="w-full max-w-full min-w-0 text-[1rem] leading-[1.5rem] font-light text-[#0D1B2A]">
                  {publication.citation}
                </p>
                {publication.url ? (
                  <Link
                    className="block w-full max-w-full min-w-0 text-[1rem] leading-[1.5rem] [overflow-wrap:anywhere] text-[#1A73E8] underline underline-offset-2"
                    href={publication.url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {publication.url}
                  </Link>
                ) : null}
              </div>
              {publication.url ? (
                <Link
                  className="flex max-w-full min-w-0 flex-wrap items-center gap-1.5 text-base leading-6 text-[#1A73E8]"
                  href={publication.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Read Paper
                  <Image
                    alt=""
                    aria-hidden
                    className="h-10 w-auto shrink-0"
                    height={40}
                    src="/assets/read-paper-arrow.svg"
                    width={37}
                  />
                </Link>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
