"use client";

import React from "react";

interface TechItem {
  name: string;
  category?: string;
  icon: (props: { className?: string }) => React.JSX.Element;
}

const Icons = {
  Python: ({ className = "h-4 w-4" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.006 2.75h5.813v.825H3.88s-3.88.44-3.88 6.094c0 5.65 3.39 5.46 3.39 5.46h2.025v-2.844c0-3.256 2.8-3.075 2.8-3.075h5.775s2.706.044 2.706-2.65V3.33s.39-3.33-4.78-3.33zm-1.65 1.706a1.006 1.006 0 1 1 0 2.013 1.006 1.006 0 0 1 0-2.013zM12.086 24c6.094 0 5.713-2.656 5.713-2.656l-.006-2.75H11.98v-.825h8.138s3.88-.44 3.88-6.094c0-5.65-3.39-5.46-3.39-5.46h-2.025v2.844c0 3.256-2.8 3.075-2.8 3.075H9.998s-2.706-.044-2.706 2.65v5.925s-.39 3.33 4.794 3.33zm1.65-1.706a1.006 1.006 0 1 1 0-2.013 1.006 1.006 0 0 1 0 2.013z" />
    </svg>
  ),
  Ollama: ({ className = "h-4 w-4" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M12 3c-4.4 0-8 3.6-8 8v7c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-7c0-4.4-3.6-8-8-8z" />
      <circle cx="9" cy="11" r="1.5" fill="currentColor" />
      <circle cx="15" cy="11" r="1.5" fill="currentColor" />
      <path d="M8 3.5V2m8 1.5V2M10 16h4" />
    </svg>
  ),
  LangChain: ({ className = "h-4 w-4" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M9 3H4v5l7 7 5-5-7-7z" />
      <circle cx="17.5" cy="17.5" r="3.5" />
      <path d="M15 15l-3-3" />
    </svg>
  ),
  LangGraph: ({ className = "h-4 w-4" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <circle cx="5" cy="12" r="2.5" />
      <circle cx="19" cy="6" r="2.5" />
      <circle cx="19" cy="18" r="2.5" />
      <path d="M7.5 11l9-4M7.5 13l9 4M19 8.5v7" />
    </svg>
  ),
  HuggingFace: ({ className = "h-4 w-4" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="9" cy="10" r="1" fill="currentColor" />
      <circle cx="15" cy="10" r="1" fill="currentColor" />
      <path d="M8.5 14.5a4.5 4.5 0 0 0 7 0" />
      <path d="M3 13c1 2 3 3 4 2M21 13c-1 2-3 3-4 2" />
    </svg>
  ),
  FastAPI: ({ className = "h-4 w-4" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M13 6l-5 7h4l-1 5 6-7h-4l1-5z" fill="currentColor" />
    </svg>
  ),
  Pydantic: ({ className = "h-4 w-4" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M4 4h10a4 4 0 0 1 4 4v0a4 4 0 0 1-4 4H4z" />
      <path d="M4 12h12a4 4 0 0 1 4 4v0a4 4 0 0 1-4 4H4z" />
    </svg>
  ),
  ElevenLabs: ({ className = "h-4 w-4" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <rect x="7" y="4" width="3" height="16" rx="1.5" />
      <rect x="14" y="4" width="3" height="16" rx="1.5" />
    </svg>
  ),
  Groq: ({ className = "h-4 w-4" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <circle cx="12" cy="12" r="8" />
      <path d="M15 15l4 4M12 8v4l3 2" />
    </svg>
  ),
  Streamlit: ({ className = "h-4 w-4" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M12 3l9 16H3L12 3z" />
      <path d="M12 9l4 7H8l4-7z" fill="currentColor" />
    </svg>
  ),
  SQLite: ({ className = "h-4 w-4" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <ellipse cx="12" cy="6" rx="8" ry="3" />
      <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
      <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
    </svg>
  ),
  Telegram: ({ className = "h-4 w-4" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
    </svg>
  ),
};

const STACK_ITEMS: TechItem[] = [
  { name: "Python", icon: Icons.Python },
  { name: "Ollama", icon: Icons.Ollama },
  { name: "LangChain", icon: Icons.LangChain },
  { name: "LangGraph", icon: Icons.LangGraph },
  { name: "Hugging Face", icon: Icons.HuggingFace },
  { name: "FastAPI", icon: Icons.FastAPI },
  { name: "Pydantic", icon: Icons.Pydantic },
  { name: "ElevenLabs", icon: Icons.ElevenLabs },
  { name: "Groq", icon: Icons.Groq },
  { name: "Streamlit", icon: Icons.Streamlit },
  { name: "SQLite", icon: Icons.SQLite },
  { name: "Telegram Bot API", icon: Icons.Telegram },
];

export default function TechTicker() {
  // Duplicate list to achieve continuous infinite marquee loop without blank breaks
  const duplicatedItems = [...STACK_ITEMS, ...STACK_ITEMS];

  return (
    <aside
      aria-label="Technology Stack Billboard"
      className="relative w-full border-b border-zinc-800/80 bg-[#09090b] overflow-hidden"
    >
      <div className="mx-auto flex h-11 max-w-[1100px] items-center px-4 sm:px-6">
        {/* Static Left Label */}
        <div className="flex shrink-0 items-center gap-2 border-r border-zinc-800/80 pr-4 font-mono text-xs text-zinc-400">
          <span className="h-1.5 w-1.5 bg-lime-400 rounded-none animate-pulse" />
          <span className="font-semibold text-white tracking-wider">
            STACK
          </span>
          <span className="hidden sm:inline text-zinc-500">{"//"}</span>
        </div>

        {/* Marquee Viewport with Edge Fade Masks */}
        <div
          className="relative flex flex-1 items-center overflow-hidden pl-4 [mask-image:linear-gradient(to_right,transparent,black_24px,black_calc(100%-24px),transparent)]"
        >
          <div className="animate-marquee flex items-center gap-2.5 py-1">
            {duplicatedItems.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div
                  key={`${tech.name}-${index}`}
                  className="group flex items-center gap-2 rounded-[2px] border border-zinc-800/90 bg-[#121215] px-2.5 py-1 transition-colors hover:border-lime-400 hover:bg-lime-950/20"
                >
                  <span className="text-zinc-400 transition-colors group-hover:text-lime-400">
                    <IconComponent className="h-3.5 w-3.5" />
                  </span>
                  <span className="font-mono text-xs font-medium text-zinc-300 group-hover:text-white whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </aside>
  );
}

export { TechTicker };

