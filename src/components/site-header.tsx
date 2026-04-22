"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { MobileMenu } from "@/components/mobile-menu";
import { PrimaryCtaButton } from "@/components/primary-cta-button";
import { SiteLogo } from "@/components/site-logo";
import { useLockBodyScroll } from "@/hooks/use-lock-body-scroll";
import { PRIMARY_NAV_ITEMS } from "@/lib/navigation";

type SiteHeaderProps = {
  disableShadow?: boolean;
  textMode?: "light" | "dark";
  backgroundMode?: "transparent" | "solid";
  overlay?: boolean;
};

export function SiteHeader({
  disableShadow = false,
  textMode = "light",
  backgroundMode = "transparent",
  overlay = true,
}: SiteHeaderProps = {}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isDarkText = textMode === "dark";
  const inactiveNavClass = isDarkText ? "text-[#0D1B2A]" : "text-white";
  const logoClass = isDarkText ? "text-[#0D1B2A]" : "text-white";
  const menuIconClass = isDarkText ? "brightness-0" : "";

  useLockBodyScroll(mobileMenuOpen);

  return (
    <>
      <header className={overlay ? "absolute inset-x-0 top-0 z-20" : "relative z-20"}>
        <div
          className={`w-full ${backgroundMode === "solid" ? "bg-white" : "bg-transparent"} ${
            disableShadow ? "" : "shadow-[0_0.125rem_3.25rem_rgba(0,0,0,0.04)]"
          }`.trim()}
        >
          <div className="mx-auto flex min-h-20 w-full max-w-screen-xl items-center justify-between gap-4 px-4 md:px-20">
            <Link
              aria-label="The Adebomi Lab homepage"
              className={`${logoClass} transition-opacity duration-300 ease-out active:opacity-70`}
              href="/"
            >
              <SiteLogo className={logoClass} />
            </Link>

            <nav aria-label="Primary" className="hidden items-center gap-5 xl:flex">
              {PRIMARY_NAV_ITEMS.map((item) => (
                <Link
                  className={`px-2 py-2 text-base leading-6 ${
                    pathname !== "/" && pathname === item.href ? "text-[#1A73E8]" : inactiveNavClass
                  }`}
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
              <Image
                alt=""
                className={menuIconClass}
                height={40}
                priority
                src="/assets/menu-icon.svg"
                width={40}
              />
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <MobileMenu currentPath={pathname} onClose={() => setMobileMenuOpen(false)} />
      )}
    </>
  );
}
