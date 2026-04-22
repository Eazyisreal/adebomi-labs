import type { SiteLogoProps } from "@/types/component-props";

export function SiteLogo({
  className = "",
  labelClassName = "",
  subLabelClassName = "",
}: SiteLogoProps) {
  return (
    <span className={`inline-flex items-baseline whitespace-nowrap ${className}`.trim()}>
      <span className={`text-[1.5rem] leading-[1.5rem] font-normal ${labelClassName}`.trim()}>
        The Adebomi
      </span>
      <span className={`text-[0.75rem] leading-[1.5rem] font-normal ${subLabelClassName}`.trim()}>
        Lab
      </span>
    </span>
  );
}
