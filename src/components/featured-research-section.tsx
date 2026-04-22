import Image from "next/image";
import Link from "next/link";

import { PrimaryCtaButton } from "@/components/primary-cta-button";
import type { PublicationCardProps, ReadPaperLinkProps } from "@/types/component-props";

const publicationUrlLinkClass =
  "text-[#1A73E8] underline underline-offset-2 max-w-full min-w-0 [overflow-wrap:anywhere]";

function ReadPaperLink({ href }: ReadPaperLinkProps) {
  return (
    <Link
      className="flex max-w-full min-w-0 flex-wrap items-center gap-1.5 text-base leading-6 text-[#1A73E8]"
      href={href}
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
  );
}

function PublicationCard({ title, paperUrl, children }: PublicationCardProps) {
  return (
    <article className="flex w-full min-w-0 flex-col gap-6 rounded-2xl border-l-[0.375rem] border-[#1A73E8] bg-white px-6 py-8">
      <div className="flex w-full min-w-0 flex-col gap-3">
        <h3 className="min-w-0 text-[1.5rem] leading-[2rem] tracking-[-0.0208em] break-words text-[#0D1B2A]">
          {title}
        </h3>
        <div className="w-full max-w-full min-w-0 text-[1rem] leading-[1.5rem] font-light text-[#0D1B2A] [&_a]:block [&_a]:w-full">
          {children}
        </div>
      </div>
      <ReadPaperLink href={paperUrl} />
    </article>
  );
}

export function FeaturedResearchSection() {
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

        <div className="flex min-w-0 flex-col gap-4">
          <PublicationCard
            paperUrl="https://onlinelibrary.wiley.com/doi/abs/10.1002/anie.201911900"
            title="CyClick Chemistry for the Synthesis of Cyclic Peptides"
          >
            <p>
              <strong className="font-medium">Adebomi, V.</strong>*; Cohen, R. D.*; Wills, R.;
              Chavers, H. A. H.; Martin, G. E.; Raj, M. CyClick Chemistry for the Synthesis of
              Cyclic Peptides. <em>Angew. Chem. Int. Ed.</em> 2019, 58, 1907319080.
            </p>
            <p className="mt-3 min-w-0">
              <a
                className={publicationUrlLinkClass}
                href="https://onlinelibrary.wiley.com/doi/abs/10.1002/anie.201911900"
                rel="noopener noreferrer"
                target="_blank"
              >
                https://onlinelibrary.wiley.com/doi/abs/10.1002/anie.201911900
              </a>
            </p>
            <p className="mt-3">*Equal contributions</p>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              <li>
                Selected as <strong className="font-medium">Hot Paper</strong> for an upcoming issue
                of <em>Angew. Chem. Int. Ed.</em>
              </li>
              <li>Highlighted in ChemViews</li>
              <li>Highlighted in SynPacts by Hisashi Yamamoto</li>
              <li>F1000 prime Recommended</li>
            </ul>
          </PublicationCard>

          <PublicationCard
            paperUrl="https://pubmed.ncbi.nlm.nih.gov/40542165/"
            title="Accurate de novo design of high-affinity protein-binding macrocycles using deep learning"
          >
            <p>
              Rettie, S.*; Juergens, D.*; <strong className="font-medium">Adebomi, V.</strong>*;
              Lindenauer, K.; Gocke, G.; Palmer, J.; Baker, D.; Bhardwaj, G. Accurate de novo design
              of high-affinity protein-binding macrocycles using deep learning.{" "}
              <em>Nat. Chem. Biol.</em> 2025, 21, 1948–1956.
            </p>
            <p className="mt-3 min-w-0">
              <a
                className={publicationUrlLinkClass}
                href="https://pubmed.ncbi.nlm.nih.gov/40542165/"
                rel="noopener noreferrer"
                target="_blank"
              >
                https://pubmed.ncbi.nlm.nih.gov/40542165/
              </a>
            </p>
            <p className="mt-3">*Equal contributions</p>
            <ul className="mt-3 list-disc pl-5">
              <li>
                Selected as the cover of <em>Nat. Chem. Biol.</em> November,{" "}
                <strong className="font-medium">2025</strong>.
              </li>
            </ul>
          </PublicationCard>

          <PublicationCard
            paperUrl="https://pubs.acs.org/doi/10.1021/acs.orglett.1c01622"
            title="Metal-Free Selective Modification of Secondary Amides: Application in Late-Stage Diversification of Peptides"
          >
            <p>
              <strong className="font-medium">Adebomi V.</strong>; Sriram M.; Streety, X.; Raj, M.
              Metal-free Selective Modification of Secondary Amides: Application in Late-Stage
              Diversification of Peptides. <em>Org. Lett.</em>{" "}
              <strong className="font-medium">2021</strong>, 23, 6189-6193.
            </p>
            <p className="mt-3 min-w-0">
              <a
                className={publicationUrlLinkClass}
                href="https://pubs.acs.org/doi/10.1021/acs.orglett.1c01622"
                rel="noopener noreferrer"
                target="_blank"
              >
                https://pubs.acs.org/doi/10.1021/acs.orglett.1c01622
              </a>
            </p>
            <ul className="mt-3 list-disc pl-5">
              <li>
                Selected as the cover of <em>Org. Lett.</em> August,{" "}
                <strong className="font-medium">2021</strong>.
              </li>
            </ul>
          </PublicationCard>

          <PublicationCard
            paperUrl="https://onlinelibrary.wiley.com/doi/abs/10.1002/anie.202320045"
            title="A Tag-Free Platform for Synthesis and Screening of Cyclic Peptide Libraries"
          >
            <p>
              <strong className="font-medium">Adebomi, V.</strong>*; Bruce, A.*; Czabala, P.; Palmer
              J.; McFadden, W. M.; Lorson, Z. C.; Slack, R. L.; Bhardwaj, G.; Sarafianos, S. G.;
              Raj, M. A Tag-Free Cyclic Peptide Exploration Platform. <em>Angew. Chem. Int. Ed.</em>{" "}
              2024, 63, e202320045.
            </p>
            <p className="mt-3 min-w-0">
              <a
                className={publicationUrlLinkClass}
                href="https://onlinelibrary.wiley.com/doi/abs/10.1002/anie.202320045"
                rel="noopener noreferrer"
                target="_blank"
              >
                https://onlinelibrary.wiley.com/doi/abs/10.1002/anie.202320045
              </a>
            </p>
            <p className="mt-3">*Equal contributions</p>
          </PublicationCard>
        </div>
      </div>
    </section>
  );
}
