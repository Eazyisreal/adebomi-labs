import Image from "next/image";
import Link from "next/link";

import { PrimaryCtaButton } from "@/components/primary-cta-button";
import { SiteLogo } from "@/components/site-logo";
import { PRIMARY_NAV_ITEMS } from "@/lib/navigation";
import type { MobileMenuProps } from "@/types/component-props";

export function MobileMenu({ onClose, currentPath }: MobileMenuProps) {
  return (
    <div className="fixed inset-0 z-40 bg-[#F7F7F7]">
      <div className="mx-auto flex h-full w-full max-w-4xl flex-col gap-6 xl:max-w-md">
        <div className="px-3 py-3">
          <div className="flex w-full items-center justify-between">
            <Link
              aria-label="The Adebomi Lab homepage"
              className="text-[#0D1B2A] transition-opacity duration-300 ease-out active:opacity-70"
              href="/"
              onClick={onClose}
            >
              <SiteLogo className="text-[#0D1B2A]" />
            </Link>
            <button
              aria-label="Close navigation menu"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full"
              onClick={onClose}
              type="button"
            >
              <Image alt="" aria-hidden height={18} src="/assets/menu-close.svg" width={18} />
            </button>
          </div>
        </div>

        <nav aria-label="Mobile primary navigation" className="flex flex-col gap-5 px-2">
          {PRIMARY_NAV_ITEMS.map((item) => (
            <Link
              className={`inline-flex w-fit items-center px-2 py-2 text-base leading-6 ${
                currentPath !== "/" && item.href === currentPath
                  ? "text-[#1A73E8]"
                  : "text-[#0D1B2A]"
              }`}
              href={item.href}
              key={item.label}
              onClick={onClose}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="px-2">
          <PrimaryCtaButton
            className="shadow-[0_0.25rem_1.25rem_rgba(0,0,0,0.12)]"
            href="/join-lab"
            label="Join the Lab"
          />
        </div>
      </div>
    </div>
  );
}
