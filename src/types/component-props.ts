import type { ReactNode } from "react";

export type PrimaryCtaButtonProps = {
  href?: string;
  label: string;
  className?: string;
  arrowClassName?: string;
};

export type MobileMenuProps = {
  onClose: () => void;
};

export type SiteLogoProps = {
  className?: string;
  labelClassName?: string;
  subLabelClassName?: string;
};

export type ReadPaperLinkProps = {
  href: string;
};

export type PublicationCardProps = {
  title: string;
  paperUrl: string;
  children: ReactNode;
};
