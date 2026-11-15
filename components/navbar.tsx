"use client";

import { useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { placeholders } from "@/data/portfolio-data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

export default function Navbar() {
  const containerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const contactBtnRef = useRef<HTMLAnchorElement>(null);

  const getIsReducedMotion = useCallback(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useGSAP(
    () => {
      if (getIsReducedMotion()) {
        if (logoRef.current) gsap.set(logoRef.current, { clipPath: "none", opacity: 1 });
        gsap.set(".nav-item", { opacity: 1, y: 0 });
        return;
      }

      if (logoRef.current) {
        gsap.fromTo(
          logoRef.current,
          { clipPath: "inset(0 100% 0 0)", opacity: 1 },
          { clipPath: "inset(0 0% 0 0)", duration: 0.7, ease: "power3.out", delay: 0.1 }
        );
      }

      gsap.fromTo(
        ".nav-item",
        { opacity: 0, y: 6 },
        { opacity: 1, y: 0, duration: 0.45, stagger: 0.08, ease: "power2.out", delay: 0.2 }
      );
    },
    { scope: containerRef }
  );

  // Subtle magnetic micro-interaction on Contact button (max +/- 4px)
  useEffect(() => {
    const btn = contactBtnRef.current;
    if (!btn || getIsReducedMotion()) return;

    const maxDelta = 4;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const normX = (e.clientX - centerX) / (rect.width / 2);
      const normY = (e.clientY - centerY) / (rect.height / 2);

      const x = Math.max(-maxDelta, Math.min(maxDelta, normX * maxDelta));
      const y = Math.max(-maxDelta, Math.min(maxDelta, normY * maxDelta));

      gsap.to(btn, { x, y, duration: 0.25, ease: "power2.out", overwrite: "auto" });
    };

    const handleMouseLeave = () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.45, ease: "elastic.out(1, 0.4)", overwrite: "auto" });
    };

    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseleave", handleMouseLeave);
      gsap.killTweensOf(btn);
    };
  }, [getIsReducedMotion]);

  const contactHref = placeholders.email ? `mailto:${placeholders.email}` : "#contact";

  return (
    <header
      ref={containerRef}
      className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-[#09090b]/85 backdrop-blur-md transition-colors"
      role="banner"
    >
      <div className="mx-auto flex h-14 max-w-[1100px] items-center justify-between px-4 sm:px-6">
        {/* Left: Wordmark "Karthik Vangapandu" */}
        <Link
          href="/"
          ref={logoRef}
          className="font-sans text-base font-semibold tracking-tight text-white transition-colors hover:text-lime-400 focus-visible:outline-2 focus-visible:outline-lime-400 focus-visible:outline-offset-2"
          aria-label="Karthik Vangapandu home"
        >
          Karthik Vangapandu
        </Link>

        {/* Right: "Projects" (anchor), "Contact" (button, mailto) */}
        <nav className="flex items-center gap-5 sm:gap-6" aria-label="Main navigation">
          <a
            href="#projects"
            className="nav-item font-mono text-sm text-zinc-400 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-lime-400 focus-visible:outline-offset-2"
          >
            Projects
          </a>

          <a
            href="#notes"
            className="nav-item font-mono text-sm text-zinc-400 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-lime-400 focus-visible:outline-offset-2"
          >
            Notes
          </a>

          <a
            href={contactHref}
            ref={contactBtnRef}
            className="nav-item inline-flex items-center justify-center rounded-[2px] bg-lime-400 px-3.5 py-1.5 font-mono text-xs font-semibold text-black transition-all hover:bg-lime-300 focus-visible:outline-2 focus-visible:outline-lime-400 focus-visible:outline-offset-2 shadow-sm shadow-lime-400/20"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export { Navbar };
