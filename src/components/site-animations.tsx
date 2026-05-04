"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function SiteAnimations() {
  const pathname = usePathname();

  useGSAP(
    () => {
      if (pathname.startsWith("/studio")) {
        return;
      }

      const mm = gsap.matchMedia();
      const targets = [
        "[data-gsap-hero]",
        "[data-gsap-reveal]",
        "[data-gsap-footer]",
        "[data-gsap-item]",
        "[data-gsap-hero-bg]",
        "[data-gsap-hero-overlay]",
      ].join(", ");

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(targets, {
          clearProps: "all",
          opacity: 1,
          y: 0,
          yPercent: 0,
          scale: 1,
        });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-gsap-hero]", {
          y: 24,
          opacity: 0,
          duration: 0.75,
          stagger: 0.12,
          ease: "power2.out",
        });

        gsap.fromTo(
          "[data-gsap-hero-bg]",
          { scale: 1.08, yPercent: -4 },
          {
            scale: 1,
            yPercent: 6,
            ease: "none",
            scrollTrigger: {
              trigger: "[data-gsap-hero-section]",
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          }
        );

        gsap.fromTo(
          "[data-gsap-hero-overlay]",
          { opacity: 0.35 },
          {
            opacity: 0.55,
            ease: "none",
            scrollTrigger: {
              trigger: "[data-gsap-hero-section]",
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          }
        );

        gsap.utils.toArray<HTMLElement>("[data-gsap-reveal]").forEach((section) => {
          gsap.from(section, {
            y: 36,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-gsap-footer]").forEach((footer) => {
          gsap.from(footer, {
            y: 28,
            opacity: 0,
            duration: 0.95,
            ease: "power3.out",
            scrollTrigger: {
              trigger: footer,
              start: "top bottom-=80",
              once: true,
            },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-gsap-stagger]").forEach((container) => {
          const items = container.querySelectorAll<HTMLElement>("[data-gsap-item]");
          if (items.length === 0) {
            return;
          }

          gsap.from(items, {
            y: 28,
            opacity: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: container,
              start: "top 84%",
              toggleActions: "play none none reverse",
            },
          });
        });
      });

      return () => mm.revert();
    },
    { dependencies: [pathname], revertOnUpdate: true }
  );

  return null;
}
