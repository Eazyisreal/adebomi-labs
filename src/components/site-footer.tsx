"use client";

import Image from "next/image";
import Link from "next/link";

import { SiteLogo } from "@/components/site-logo";
import { PRIMARY_NAV_ITEMS } from "@/lib/navigation";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#0D1B2A] px-5 py-6 md:px-20 md:py-4">
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 z-0 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-[12.5rem]"
        style={{ background: "radial-gradient(circle, #1A73E8 0%, transparent 95%)" }}
      />

      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className="flex w-full flex-col items-center justify-center gap-6">
          <div className="flex flex-col items-center gap-6">
            <SiteLogo className="text-center text-[1.625rem] leading-[2.4094rem] text-white" />
            <div className="flex items-center gap-5 px-2">
              <Link aria-label="LinkedIn" href="#">
                <Image alt="" aria-hidden height={24} src="/assets/icon-linkedin.svg" width={24} />
              </Link>
              <Link aria-label="Publications" href="#">
                <Image
                  alt=""
                  aria-hidden
                  height={24}
                  src="/assets/icon-publications.svg"
                  width={27}
                />
              </Link>
            </div>
          </div>

          <nav aria-label="Footer navigation" className="hidden items-center gap-5 md:flex">
            {PRIMARY_NAV_ITEMS.map((item) => (
              <Link
                className="px-2 py-2 text-base leading-6 text-white"
                href={item.href}
                key={item.label}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="w-full border-t border-white/15 pt-3">
          <p className="text-center text-xs leading-4 text-white/80">
            &#169; {currentYear}. Copyright
          </p>
        </div>
      </div>
    </footer>
  );
}
