"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { MobileMenu } from "@/components/mobile-menu";
import { PrimaryCtaButton } from "@/components/primary-cta-button";
import { SiteLogo } from "@/components/site-logo";
import { useLockBodyScroll } from "@/hooks/use-lock-body-scroll";
import { PRIMARY_NAV_ITEMS } from "@/lib/navigation";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useLockBodyScroll(mobileMenuOpen);

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-20 pt-2 md:pt-3">
        <div className="mx-auto flex min-h-20 w-full max-w-screen-xl items-center justify-between gap-4 bg-transparent px-4 shadow-[0_0.125rem_3.25rem_rgba(0,0,0,0.04)] md:px-20">
          <Link
            aria-label="The Adebomi Lab homepage"
            className="text-lg leading-6 text-white"
            href="/"
          >
            <SiteLogo className="text-2xl" />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-5 xl:flex">
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

          <div className="hidden xl:flex">
            <PrimaryCtaButton href="/join-lab" label="Join the Lab" />
          </div>

          <button
            aria-expanded={mobileMenuOpen}
            aria-label="Open navigation menu"
            className="rounded-md p-1 xl:hidden"
            onClick={() => setMobileMenuOpen(true)}
            type="button"
          >
            <Image alt="" height={40} priority src="/assets/menu-icon.svg" width={40} />
          </button>
        </div>
      </header>

      {mobileMenuOpen && <MobileMenu onClose={() => setMobileMenuOpen(false)} />}
    </>
  );
}
