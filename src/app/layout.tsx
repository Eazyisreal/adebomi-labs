import "./globals.css";

import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";

const madeTommySoft = localFont({
  src: [
    { path: "../../public/fonts/made-tommy-soft-light.otf", weight: "300", style: "normal" },
    { path: "../../public/fonts/made-tommy-soft-regular.otf", weight: "400", style: "normal" },
    { path: "../../public/fonts/made-tommy-soft-medium.otf", weight: "500", style: "normal" },
    { path: "../../public/fonts/made-tommy-soft-bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-made-tommy-soft",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://adebomilab.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "The Adebomi Lab",
    template: "%s | The Adebomi Lab",
  },
  description:
    "Designing biomolecules for therapeutic innovation through chemistry, biology, and artificial intelligence.",
  applicationName: "The Adebomi Lab",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "The Adebomi Lab",
    title: "The Adebomi Lab",
    description:
      "Designing biomolecules for therapeutic innovation through chemistry, biology, and artificial intelligence.",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Adebomi Lab",
    description:
      "Designing biomolecules for therapeutic innovation through chemistry, biology, and artificial intelligence.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${madeTommySoft.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
