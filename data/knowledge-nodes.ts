export interface KnowledgeNode {
  id: string;
  name: string;
  tool: string;
  week: "w1" | "w2" | "w3";
  coreConcept: string;
  whyItMatters: string;
  prototypeExample: string;
}

export interface CohortWeek {
  id: string;
  label: string;
  title: string;
  focus: string;
}

export interface CohortCapstone {
  num: string;
  title: string;
  week: string;
  desc: string;
  tags: string[];
}

export const KNOWLEDGE_NODES: KnowledgeNode[] = [
  // Week 1: Prompts, Tools & Retrieval
  {
    id: "jinja",
    name: "Prompt Assembly",
    tool: "Jinja2 Templates",
    week: "w1",
    coreConcept: "Deterministic Context & Few-Shot Injection",
    whyItMatters: "Treats prompts as versioned code with strict variable substitution to prevent prompt drift and formatting errors.",
    prototypeExample: "Fact-Checking Agentic System",
  },
  {
    id: "pydantic",
    name: "Tool Schema Design",
    tool: "Pydantic Schemas",
    week: "w1",
    coreConcept: "Structured Outputs & JSON Schema Validation",
    whyItMatters: "Ensures the LLM produces valid arguments for API tools and prevents runtime validation crashes.",
    prototypeExample: "Automated Tool Calling Pipeline",
  },
  {
    id: "hybrid-rag",
    name: "Hybrid Search",
    tool: "BM25 + Dense Vectors",
    week: "w1",
    coreConcept: "Keyword Precision + Semantic Proximity",
    whyItMatters: "Dense embeddings often miss exact keywords or IDs. Combining sparse BM25 with dense vectors catches both.",
    prototypeExample: "RAG Architecture over Large Document Sets",
  },
  {
    id: "reranking",
    name: "Two-Stage Re-ranking",
    tool: "Cross-Encoders",
    week: "w1",
    coreConcept: "Bi-Encoder Retrieval -> Cross-Encoder Scoring",
    whyItMatters: "Bi-encoders retrieve top candidates fast; cross-encoders compute full attention between query and text to eliminate false positives.",
    prototypeExample: "Document Grounding & Query Rewriter",
  },

  // Week 2: Single & Multi-Agent Loops
  {
    id: "react",
    name: "ReAct Execution Loop",
    tool: "Observe-Think-Act",
    week: "w2",
    coreConcept: "Single-Agent Reasoning with Tool Feedback",
    whyItMatters: "Agents need to inspect tool responses, update their internal state, and adjust plans rather than executing blindly.",
    prototypeExample: "Paper-to-Code Autonomous Agent",
  },
  {
    id: "langgraph",
    name: "Cyclic State Machines",
    tool: "LangGraph",
    week: "w2",
    coreConcept: "State Persistence, Checkpoint & Resume",
    whyItMatters: "Production agents require pause/resume states for human-in-the-loop approvals and safe error recovery.",
    prototypeExample: "Incident Auto-Remediation System",
  },

  // Week 3: Local Serving & Evaluation Harnesses
  {
    id: "ollama",
    name: "Local Model Serving",
    tool: "Ollama (Open-Weights)",
    week: "w3",
    coreConcept: "Quantized Local Inference (Llama 3 / Mistral)",
    whyItMatters: "Enables offline testing, zero-cost rapid experimentation, and privacy-preserving local evaluation loops.",
    prototypeExample: "Offline Multi-Agent Sandbox",
  },
  {
    id: "ragas",
    name: "Metric-Driven Evals",
    tool: "RAGAS Framework",
    week: "w3",
    coreConcept: "Faithfulness, Answer Relevance & Context Recall",
    whyItMatters: "Replaces subjective 'vibe checks' with quantified benchmark scores to catch regressions before shipping.",
    prototypeExample: "AI Code Reviewer & Eval Harness",
  },
];

export const COHORT_WEEKS: CohortWeek[] = [
  {
    id: "w1",
    label: "WEEK 01",
    title: "PROMPTS, TOOLS & HYBRID RAG",
    focus: "Chain-of-thought, structured schemas, tool infrastructure, hybrid search & cross-encoder rerankers.",
  },
  {
    id: "w2",
    label: "WEEK 02",
    title: "AGENT LOOPS & MULTI-AGENT MEMORY",
    focus: "ReAct cycles, state checkpoint/resume, orchestrator-specialist topologies & memory budgeting.",
  },
  {
    id: "w3",
    label: "WEEK 03",
    title: "EVALUATION, RUNTIMES & PRODUCTION",
    focus: "RAGAS evaluation metrics, local Ollama serving, prompt caching & observability.",
  },
];

export const COHORT_CAPSTONES: CohortCapstone[] = [
  {
    num: "01",
    title: "Fact-Checking Agentic System",
    week: "Week 1",
    desc: "Deterministic verification pipeline using structured outputs and tool schema contracts to cross-reference claims against authoritative sources.",
    tags: ["Pydantic", "Tool Schemas", "Few-shot Prompting"],
  },
  {
    num: "02",
    title: "Hybrid RAG Pipeline",
    week: "Week 1",
    desc: "Search system combining BM25 keyword matching with dense vector embeddings and a cross-encoder reranker to improve context precision.",
    tags: ["BM25", "Cross-Encoders", "Query Rewriting"],
  },
  {
    num: "03",
    title: "Paper-to-Code Autonomous Agent",
    week: "Week 2",
    desc: "Single-agent ReAct loop executing an Observe-Think-Act cycle with checkpoint/resume persistence and human-in-the-loop validation.",
    tags: ["ReAct Loop", "Checkpoint/Resume", "HITL"],
  },
  {
    num: "04",
    title: "Incident Auto-Remediation System",
    week: "Week 2",
    desc: "Multi-agent architecture using orchestrator + specialist patterns, hierarchical memory read/write paths, and deadlock prevention.",
    tags: ["LangGraph", "Multi-Agent", "Memory Budgeting"],
  },
  {
    num: "05",
    title: "AI Code Reviewer & Eval Suite",
    week: "Week 3",
    desc: "Systematic evaluation pipeline testing model reviews using adversarial evaluation datasets and RAGAS metric baselines.",
    tags: ["RAGAS", "Adversarial Evals", "Scoring Pitfalls"],
  },
  {
    num: "06",
    title: "Natural Language Workflow Engine",
    week: "Week 3",
    desc: "Workflow orchestrator with prompt caching, latency profiling, and execution observability for recurring multi-step tasks.",
    tags: ["Prompt Caching", "Observability", "Self-Evolving"],
  },
];

