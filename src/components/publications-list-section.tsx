import Image from "next/image";
import Link from "next/link";

import type { Publication } from "@/types/publications";

type PublicationsListSectionProps = {
  publications: Publication[];
};

export function PublicationsListSection({ publications }: PublicationsListSectionProps) {
  return (
    <section>
      <div
        className="mx-auto flex w-full max-w-screen-xl flex-col gap-4 px-4 py-20 md:px-20"
        data-gsap-stagger
      >
        {publications.map((publication) => (
          <article
            className="flex min-w-0 flex-col gap-6 rounded-2xl border-l-[0.375rem] border-[#1A73E8] bg-white px-6 py-8"
            data-gsap-item
            key={publication.title}
          >
            <div className="flex min-w-0 flex-col gap-3">
              <h2 className="min-w-0 text-[1.5rem] leading-[2rem] tracking-[-0.0208em] break-words text-[#0D1B2A]">
                {publication.title}
              </h2>
              <p className="min-w-0 text-[1rem] leading-[1.5rem] font-light text-[#0D1B2A]">
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
                className="inline-flex w-fit items-center gap-1.5 text-base leading-6 text-[#1A73E8]"
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
    </section>
  );
}
