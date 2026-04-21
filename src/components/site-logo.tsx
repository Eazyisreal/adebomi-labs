type SiteLogoProps = {
  className?: string;
};

export function SiteLogo({ className = "" }: SiteLogoProps) {
  return (
    <span className={className}>
      <span className="font-medium">The Adebomi</span> Lab
    </span>
  );
}
