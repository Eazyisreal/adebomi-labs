import "./globals.css";

import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";

const madeTommySoft = localFont({
  src: [
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

export const metadata: Metadata = {
  title: "The Adebomi Lab",
  description: "Designing biomolecules for therapeutic innovation.",
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
