import Image from "next/image";
import Link from "next/link";

type PrimaryCtaButtonProps = {
  href?: string;
  label: string;
  className?: string;
  arrowClassName?: string;
};

export function PrimaryCtaButton({
  href = "#",
  label,
  className = "",
  arrowClassName = "",
}: PrimaryCtaButtonProps) {
  return (
    <Link
      className={`inline-flex w-fit items-center gap-1.5 rounded-3xl bg-[#1A73E8] p-1 text-white ${className}`.trim()}
      href={href}
    >
      <span className="px-2 py-2 text-base leading-6">{label}</span>
      <Image
        alt=""
        aria-hidden
        className={`h-10 w-auto ${arrowClassName}`.trim()}
        height={40}
        src="/assets/button-arrow.svg"
        width={37}
      />
    </Link>
  );
}
