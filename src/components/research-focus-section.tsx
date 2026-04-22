export function ResearchFocusSection() {
  return (
    <section>
      <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-2 px-4 py-12 md:px-20 md:py-20">
        <h2 className="text-[2.5rem] leading-[3rem] tracking-[-0.025em] text-[#0D1B2A]">
          Our Research <span className="text-[#2BC48A]">Focus</span>
        </h2>
        <div className="space-y-6 text-[1rem] leading-[1.5rem] font-light text-[#333333]">
          <p>
            Our research focuses on the design of biomolecules for applications in medicine. We are
            particularly interested in developing new ways to design{" "}
            <strong className="font-medium">peptide binders to protein targets</strong>, with the
            goal of expanding how we can precisely control and study biological systems. By
            improving our ability to engineer molecular recognition, we aim to enable new approaches
            for therapeutics and biological discovery.
          </p>
          <p>
            We are also interested in <strong className="font-medium">de novo enzyme design</strong>
            , with the long-term goal of creating new catalytic functions that do not exist in
            nature.
          </p>
          <p>
            Our work is inherently interdisciplinary and integrates concepts from chemistry,
            biology, and computation. Our lab combines{" "}
            <strong className="font-medium">
              Organic Synthesis, Biochemistry, and Computational Biology
            </strong>{" "}
            to design next-generation biomolecules for medicine. We welcome students with interests
            in any of these areas, whether they enjoy hands-on experimental work, studying
            biological systems, or applying computational tools to solve complex problems.
          </p>
          <p>
            Overall, our goal is to build a collaborative and inclusive research environment where
            students can gain diverse skill sets while contributing to projects with meaningful
            impact in biotechnology and human health.
          </p>
        </div>
      </div>
    </section>
  );
}
