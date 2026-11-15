import { proofItems } from "@/data/portfolio-data";

export default function PortfolioFooter() {
  return (
    <footer id="contact" className="border-t border-zinc-800/80 bg-[#09090b] py-8 sm:py-12">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
        <p className="border-b border-zinc-800/80 pb-6 font-mono text-sm leading-7 text-zinc-300 sm:text-base">
          {proofItems.join(" · ")}
        </p>

        <div className="relative mt-6 overflow-hidden border border-zinc-800 bg-[#111114] p-6 sm:p-9">
          <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-20 h-64 w-64 rounded-full bg-lime-400/[0.07] blur-3xl" />
          <div className="relative flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-lime-400">Contact · Open to full-time roles</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Have something worth building?</h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-400 sm:text-base">
                I’m looking for full-time SDE and AI roles. If you’re working on agents, voice, or backend systems, I’d like to hear about it.
              </p>
            </div>
            <nav aria-label="Contact links" className="flex flex-wrap gap-3 font-mono text-sm sm:shrink-0">
              <a
                href="https://github.com/Karthik-vangapandu8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 border border-zinc-700 bg-[#09090b] px-4 text-zinc-200 transition-colors hover:border-lime-400/70 hover:text-lime-300 focus-visible:outline-2 focus-visible:outline-lime-400 focus-visible:outline-offset-2"
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>
              <a
                href="https://www.linkedin.com/in/vangapandu-karthik/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 bg-lime-400 px-4 font-semibold text-black transition-colors hover:bg-lime-300 focus-visible:outline-2 focus-visible:outline-lime-400 focus-visible:outline-offset-2"
              >
                Connect on LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
