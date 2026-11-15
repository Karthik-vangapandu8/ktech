"use client";

import { useRef, useCallback } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { placeholders, projects } from "@/data/portfolio-data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

export default function HeroArchitecture() {
  const containerRef = useRef<HTMLDivElement>(null);

  const getIsReducedMotion = useCallback(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useGSAP(
    () => {
      if (getIsReducedMotion()) {
        gsap.set(".hero-fade-in", { opacity: 1, y: 0 });
        gsap.set(".hero-word", { opacity: 1, y: 0, rotateX: 0 });
        return;
      }

      gsap.fromTo(
        ".hero-fade-in",
        { opacity: 0, y: 12 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
        }
      );

      gsap.fromTo(
        ".hero-word",
        { opacity: 0, y: 24, rotateX: -24, transformOrigin: "50% 100%" },
        { opacity: 1, y: 0, rotateX: 0, duration: 0.65, stagger: 0.075, ease: "power3.out", delay: 0.12 }
      );
    },
    { scope: containerRef }
  );

  const [featuredProject, ...remainingProjects] = projects;

  return (
    <div
      ref={containerRef}
      className="relative w-full border-b border-zinc-800/80 bg-[#09090b] pt-8 pb-16 text-white"
    >
      {/* Subtle midnight dot grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] opacity-40"
      />

      <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
        {/* HERO SECTION */}
        <section aria-label="Introduction" className="pt-2 pb-12 sm:pb-16">
          {/* H1 Headline */}
          <h1
            aria-label="I build AI agent systems where the model proposes and deterministic code decides."
            className="mt-2 max-w-4xl [perspective:700px] font-sans text-2xl font-bold tracking-tight text-white sm:text-4xl sm:leading-tight"
          >
            {"I build AI agent systems where the model proposes and deterministic code decides.".split(" ").map((word, index, words) => (
              <span aria-hidden="true" className="hero-word inline-block" key={`${word}-${index}`}>
                {word}{index < words.length - 1 ? "\u00a0" : ""}
              </span>
            ))}
          </h1>

          {/* Actions & Links */}
          <div className="hero-fade-in mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex h-9 items-center justify-center rounded-[2px] bg-lime-400 px-4 font-mono text-xs font-semibold text-black transition-all hover:bg-lime-300 focus-visible:outline-2 focus-visible:outline-lime-400 focus-visible:outline-offset-2 shadow-sm shadow-lime-400/20"
            >
              View projects
            </a>

            {placeholders.resumePath && (
              <a
                href={placeholders.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 items-center justify-center rounded-[2px] border border-zinc-700 bg-zinc-900 px-4 font-mono text-xs font-medium text-white transition-colors hover:border-zinc-500 hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-lime-400 focus-visible:outline-offset-2"
              >
                Resume
              </a>
            )}

            <div className="flex items-center gap-3 pl-1 font-mono text-xs text-zinc-400 sm:border-l sm:border-zinc-800 sm:pl-3">
              <a
                href="https://github.com/Karthik-vangapandu8"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-zinc-700 underline-offset-4 transition-colors hover:text-lime-400 hover:decoration-lime-400 focus-visible:outline-2 focus-visible:outline-lime-400 focus-visible:outline-offset-2"
              >
                GitHub
              </a>
              <span aria-hidden="true" className="text-zinc-700">
                ·
              </span>
              <a
                href="https://www.linkedin.com/in/vangapandu-karthik/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-zinc-700 underline-offset-4 transition-colors hover:text-lime-400 hover:decoration-lime-400 focus-visible:outline-2 focus-visible:outline-lime-400 focus-visible:outline-offset-2"
              >
                LinkedIn
              </a>

              {placeholders.email && (
                <>
                  <span aria-hidden="true" className="text-zinc-700">
                    ·
                  </span>
                  <a
                    href={`mailto:${placeholders.email}`}
                    className="underline decoration-zinc-700 underline-offset-4 transition-colors hover:text-lime-400 hover:decoration-lime-400 focus-visible:outline-2 focus-visible:outline-lime-400 focus-visible:outline-offset-2"
                  >
                    Email
                  </a>
                </>
              )}
            </div>
          </div>
        </section>

        {/* SELECTED WORK SECTION */}
        <section id="projects" aria-label="Selected work" className="border-t border-zinc-800/80 pt-10">
          <div className="hero-fade-in flex items-baseline justify-between border-b border-zinc-800/80 pb-3">
            <h2 className="font-sans text-xl font-bold tracking-tight text-white sm:text-2xl">
              Selected work
            </h2>
            <span className="font-mono text-xs text-zinc-500">
              {projects.length} projects
            </span>
          </div>

          <div className="mt-6 space-y-6">
            {/* Card 1: Featured Project (Full width on lg) */}
            {featuredProject && (
              <article className="hero-fade-in rounded-[2px] border border-zinc-800/90 bg-[#121215] p-6 shadow-sm transition-colors hover:border-zinc-700 sm:p-7">
                <div className={featuredProject.mediaPath ? "grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-start" : "flex flex-col"}>
                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-sans text-xl font-semibold text-white">
                        {featuredProject.title}
                      </h3>
                      {featuredProject.badge && (
                        <span className="rounded-[2px] border border-lime-500/30 bg-lime-950/40 px-2 py-0.5 font-mono text-xs text-lime-400">
                          {featuredProject.badge}
                        </span>
                      )}
                    </div>
                    <p className="mt-0.5 font-mono text-xs text-zinc-500">
                      {featuredProject.slug}
                    </p>

                    <p className="mt-3 text-base leading-relaxed text-zinc-200">
                      {featuredProject.summary}
                    </p>

                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                      <span className="text-zinc-500">Decision: </span>
                      {featuredProject.decision}
                    </p>

                    {/* Proof Chips */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {featuredProject.chips.map((chip) => (
                        <span
                          key={chip}
                          className="rounded-[2px] border border-zinc-700/80 bg-zinc-800/60 px-2 py-0.5 font-mono text-xs font-medium text-zinc-300"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>

                    {/* Stack Tags */}
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {featuredProject.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-[2px] border border-zinc-800 bg-[#09090b] px-2 py-0.5 font-mono text-xs text-zinc-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links (Small outline buttons) */}
                    <div className="mt-5 flex flex-wrap items-center gap-2">
                      {featuredProject.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target={link.isExternal ? "_blank" : undefined}
                          rel={link.isExternal ? "noopener noreferrer" : undefined}
                          className="inline-flex items-center justify-center rounded-[2px] border border-zinc-700 bg-zinc-900/90 px-3 py-1 font-mono text-xs font-medium text-zinc-200 transition-colors hover:border-lime-400 hover:text-lime-400 hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-lime-400 focus-visible:outline-offset-2"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>

                    {/* Footnote */}
                    {featuredProject.footnote && (
                      <p className="mt-4 border-t border-zinc-800/80 pt-3 font-mono text-xs text-zinc-500">
                        {featuredProject.footnote}
                      </p>
                    )}
                  </div>

                  {/* Media column (rendered ONLY if real mediaPath exists) */}
                  {featuredProject.mediaPath && (
                    <div className="relative aspect-video w-full overflow-hidden rounded-[2px] border border-zinc-800 bg-zinc-900">
                      <Image
                        src={featuredProject.mediaPath}
                        alt={featuredProject.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
              </article>
            )}

            {/* Cards 2 & 3: Side by side on lg, stacked on mobile */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {remainingProjects.map((project) => (
                <article
                  key={project.id}
                  className="hero-fade-in flex flex-col justify-between rounded-[2px] border border-zinc-800/90 bg-[#121215] p-6 shadow-sm transition-colors hover:border-zinc-700 sm:p-7"
                >
                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-sans text-xl font-semibold text-white">
                        {project.title}
                      </h3>
                      {project.badge && (
                        <span className="rounded-[2px] border border-lime-500/30 bg-lime-950/40 px-2 py-0.5 font-mono text-xs text-lime-400">
                          {project.badge}
                        </span>
                      )}
                    </div>
                    <p className="mt-0.5 font-mono text-xs text-zinc-500">
                      {project.slug}
                    </p>

                    <p className="mt-3 text-base leading-relaxed text-zinc-200">
                      {project.summary}
                    </p>

                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                      <span className="text-zinc-500">Decision: </span>
                      {project.decision}
                    </p>

                    {/* Proof Chips */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.chips.map((chip) => (
                        <span
                          key={chip}
                          className="rounded-[2px] border border-zinc-700/80 bg-zinc-800/60 px-2 py-0.5 font-mono text-xs font-medium text-zinc-300"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>

                    {/* Stack Tags */}
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-[2px] border border-zinc-800 bg-[#09090b] px-2 py-0.5 font-mono text-xs text-zinc-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Media slot (rendered ONLY if real mediaPath exists) */}
                    {project.mediaPath && (
                      <div className="relative mt-4 aspect-video w-full overflow-hidden rounded-[2px] border border-zinc-800 bg-zinc-900">
                        <Image
                          src={project.mediaPath}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                  </div>

                  {/* Links at bottom (Small outline buttons) */}
                  <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-zinc-800/80 pt-4">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.isExternal ? "_blank" : undefined}
                        rel={link.isExternal ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center justify-center rounded-[2px] border border-zinc-700 bg-zinc-900/90 px-3 py-1 font-mono text-xs font-medium text-zinc-200 transition-colors hover:border-lime-400 hover:text-lime-400 hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-lime-400 focus-visible:outline-offset-2"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export { HeroArchitecture };
