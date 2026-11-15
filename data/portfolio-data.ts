const isDev = process.env.NODE_ENV !== "production";

export const placeholders = {
  email: isDev ? "TODO: address on my own domain" : null,
  resumePath: isDev ? "TODO: path to /resume.pdf" : null,
  demo: isDev ? "TODO: demo link" : null,
  award: isDev ? "TODO: exact award name and year from my certificate" : null,
};

export interface ProjectLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  slug: string;
  summary: string;
  decision: string;
  chips: string[];
  stack: string[];
  footnote?: string;
  badge?: string;
  mediaPath?: string; // Render <Image> or video thumbnail ONLY if a real file path is provided
  links: ProjectLink[];
}

export const projects: ProjectItem[] = [
  {
    id: "razorpay-agentic-voice-commerce",
    title: "Agentic voice commerce",
    slug: "razorpay-agentic-voice-commerce",
    summary:
      "A Hindi, Telugu and English voice shopping agent that pays with a wallet and a Razorpay link.",
    decision:
      "The model never calculates prices. A deterministic engine and an order state machine do.",
    chips: ["7/7 failure tests", "Idempotent webhook", "Spend limits"],
    stack: [
      "Python",
      "FastAPI",
      "Pydantic",
      "Sarvam AI",
      "Razorpay (test mode)",
    ],
    footnote:
      "Unofficial demo using Razorpay test mode. Not affiliated with MuscleBlaze or Razorpay.",
    links: [
      {
        label: "GitHub repo",
        href: "https://github.com/Karthik-vangapandu8/razorpay-agentic-voice-commerce",
        isExternal: true,
      },
      ...(placeholders.demo
        ? [
            {
              label: "Demo (TODO)",
              href: placeholders.demo,
              isExternal: true,
            },
          ]
        : []),
    ],
  },
  {
    id: "standin",
    title: "StandIn",
    slug: "standln",
    summary:
      "A Telegram assistant that answers my classmates' requests for notes and deadlines.",
    decision:
      "Facts come from code and notices I approved. The model only drafts, and I confirm before anything is sent.",
    chips: [
      "Typo-tolerant search",
      "Approval step",
      "Tested with 2 classmates",
    ],
    stack: [
      "Node.js",
      "Telegram Bot API",
      "Ollama (Gemma 3 4B)",
      "ElevenLabs",
    ],
    links: [
      {
        label: "GitHub repo",
        href: "https://github.com/Karthik-vangapandu8/standln",
        isExternal: true,
      },
      {
        label: "Dev.to article",
        href: "https://dev.to/karthik_1057/standin-the-lazy-crs-ai-assistant-that-answers-class-notes-and-deadlines-in-my-cloned-voice-p07",
        isExternal: true,
      },
      {
        label: "Demo video",
        href: "https://www.youtube.com/watch?v=NeEhMSqT1Jo",
        isExternal: true,
      },
    ],
  },
  {
    id: "langchain-resume-tailor",
    title: "Resume tailor",
    slug: "langchain-resume-tailor",
    summary:
      "Scores a resume against a job description and rewrites weak bullets, all on my laptop.",
    decision: "Runs on Ollama so the resume never leaves the machine.",
    chips: ["Two-stage pipeline", "Local only"],
    badge: "In progress: validated outputs and an eval suite",
    stack: ["LangChain", "Ollama", "Streamlit", "PyPDF", "ReportLab"],
    links: [
      {
        label: "GitHub repo",
        href: "https://github.com/Karthik-vangapandu8/langchain-resume-tailor",
        isExternal: true,
      },
    ],
  },
];

export const proofItems: string[] = [
  "Hacktoberfest 2026 finisher",
  "GSSoC contributor",
  "Technical Lead, Coding Ninjas (ANITS)",
  ...(placeholders.award && !placeholders.award.startsWith("TODO")
    ? [placeholders.award]
    : []),
];

