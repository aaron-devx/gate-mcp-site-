export const brand = {
  name: "Gate-MCP",
  tagline: "Context compression gateway for AI coding assistants",
  email: "hello@gate-mcp.dev",
  github: "https://github.com/Dukeabaddon/Gate-MCP",
  linkedin: "https://www.linkedin.com/in/aaronmecate",
  docs: "#how-it-works",
  discord: "#",
} as const;

export const navLinks = [
  { label: "Use Cases", href: "#use-cases" },
  { label: "Who It's For", href: "#who" },
  { label: "Tools", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

export const hero = {
  eyebrow: "Local MCP Server · 5-Layer Compression",
  headline: ["Save 37–99% of input tokens", "before they hit the API."],
  sub: "Gate-MCP is a single local MCP server that compresses context at 5 layers of the pipeline — tool schemas, code navigation, file reads, JSON responses, and images — so your AI assistant sees the signal, not the bloat.",
  stat: { value: 89, suffix: "%", label: "Tokens saved on a typical coding turn" },
  ctaPrimary: { label: "Install with npx", href: "#how-it-works" },
  ctaSecondary: { label: "See the savings", href: "#use-cases" },
} as const;

export const compatibility = {
  title: "Works in every MCP-aware coding assistant",
  logos: [
    "Cursor",
    "Claude Code",
    "Codex CLI",
    "Windsurf",
    "Antigravity",
    "VS Code Copilot",
    "Cline",
  ],
} as const;

export const useCases = {
  title: "Where the tokens actually go",
  subtitle:
    "AI coding assistants burn 80–90% of their context on bloat: bloated tool schemas, re-reading the same files, raw JSON, and full-resolution screenshots. Gate-MCP fixes all of it in one server.",
  before: {
    label: "Without Gate-MCP",
    tokens: 45000,
    cost: 2.25,
    latencyMs: 9200,
    contextPct: 92,
    note: "Tool schemas (30k) + 5 file reads (10k) + raw JSON (5k). Burned before the model thinks.",
  },
  after: {
    label: "With Gate-MCP",
    tokens: 5100,
    cost: 0.26,
    latencyMs: 2300,
    contextPct: 18,
    note: "Lazy schemas (3k) + AST signatures (600) + TOON tables (1.5k). Same task, ~89% less context.",
  },
  highlight: {
    value: 89,
    suffix: "%",
    label: "Average per-turn token reduction in the validated benchmark",
  },
} as const;

export const personas = {
  title: "Who It's For",
  subtitle:
    "Built for developers tired of hitting rate limits in 2026. If your AI assistant is throttling you by Wednesday, Gate-MCP is for you.",
  items: [
    {
      icon: "User",
      title: "Indie devs hitting rate limits",
      pain: "Pro plans throttle you by mid-week; daily token caps cut sessions short.",
      relief: "Send 5x less context per turn, so the same plan lasts the full week.",
    },
    {
      icon: "Users",
      title: "Teams paying per-token bills",
      pain: "AI spend climbs faster than headcount as agents balloon tool schemas.",
      relief: "One local server compresses every agent's input — schema, code, JSON, images.",
    },
    {
      icon: "Cpu",
      title: "Power users with 10+ MCP servers",
      pain: "GitHub + Jira + Confluence + Postgres MCPs eat 30k+ tokens before you type.",
      relief: "Lazy schema loading expands tool docs on demand, not on every turn.",
    },
  ],
} as const;

export const whyItMatters = {
  title: "Why Input Compression Matters",
  items: [
    {
      icon: "Wallet",
      title: "Input dominates the bill",
      body: "Most teams burn 40–50% of context on tool schemas alone. Output compression only touches the cheapest tokens.",
    },
    {
      icon: "Zap",
      title: "Smaller prompts respond faster",
      body: "Less context in = faster time-to-first-token and fewer rate-limit hits. Your agent feels instant again.",
    },
    {
      icon: "Maximize2",
      title: "Quality stays intact",
      body: "100% API surface retention after AST compression. 100% TOON round-trip fidelity. Verified, not claimed.",
    },
  ],
} as const;

export const features = {
  title: "The 6 Tools, One Server",
  subtitle:
    "Every tool returns originalTokens, optimizedTokens, and savingsPercent. No vague claims — measured savings on every call.",
  items: [
    {
      icon: "Filter",
      title: "gate_compress_file",
      body: "Reads a file and returns AST signatures, imports, and class definitions via tree-sitter. 46–94% saved.",
    },
    {
      icon: "Network",
      title: "gate_graph_query",
      body: "Queries a local symbol dependency graph with BFS traversal instead of reading files. 93–99% saved.",
    },
    {
      icon: "Image",
      title: "gate_optimize_image",
      body: "OCR text extraction or smart downscaling for screenshots and PDFs. 76–97% saved on visual inputs.",
    },
    {
      icon: "Archive",
      title: "gate_clean_response",
      body: "Converts JSON to TOON — pipe-delimited tables that LLMs parse perfectly. 37–81% saved.",
    },
    {
      icon: "Repeat",
      title: "gate_dedup_context",
      body: "SHA-256 content cache prevents re-sending unchanged files across turns. ~93% saved on rereads.",
    },
    {
      icon: "ShieldCheck",
      title: "gate_memory + gate_help",
      body: "Cross-session key-value persistence plus on-demand schema docs (46% schema overhead saved).",
    },
  ],
} as const;

export const howItWorks = {
  title: "How Gate-MCP Compresses",
  subtitle:
    "Five compression layers, one local MCP server. Drop it into your agent's config and the savings start on the next turn.",
  steps: [
    {
      tag: "L0 · Schema",
      title: "Lazy tool schemas (46% saved)",
      body: "Tool descriptions ship as terse one-liners. Full docs load on demand via gate_help, not on every turn.",
    },
    {
      tag: "L1 · Navigate",
      title: "Graph queries beat file reads (93–99%)",
      body: "Ask 'what depends on handleX' and get a 200-token subgraph back instead of dumping 15 files.",
    },
    {
      tag: "L2 · Input",
      title: "AST signatures + dedup cache (46–94%)",
      body: "Files compressed to imports + signatures via tree-sitter. SHA-256 cache stops repeated reads.",
    },
    {
      tag: "L3 · Response",
      title: "TOON tables replace raw JSON (37–81%)",
      body: "JSON responses become pipe-delimited tables. LLMs read them perfectly, tokenizers love them.",
    },
  ],
  installSnippet: `{
  "mcpServers": {
    "gate": {
      "command": "npx",
      "args": ["-y", "gate-mcp"]
    }
  }
}`,
} as const;

export const builtWithCursor = {
  eyebrow: "Built for real workflows",
  title: "Designed for the way modern dev teams actually ship with AI.",
  subtitle:
    "Gate-MCP is built around day-to-day shipping reality: fewer token bottlenecks, cleaner context, and faster iteration from first prompt to merged PR.",
  stats: [
    { value: "1,620", label: "Lines of code in the MCP server" },
    { value: "63 / 63", label: "Tests passing on the validated benchmark" },
    { value: "8 ms", label: "Graph query on VSCode's 6,115 TS files" },
  ],
  items: [
    {
      icon: "Bot",
      title: "Built for multi-tool teams",
      body: "Works across MCP-aware IDEs and CLIs, so teams can keep their preferred workflow without losing shared gains.",
    },
    {
      icon: "Sparkles",
      title: "Fast by design",
      body: "Compression-first defaults reduce token load and latency, so answers arrive faster when context pressure is high.",
    },
    {
      icon: "Network",
      title: "Transparent and measurable",
      body: "Every tool reports original vs optimized tokens and savings percent, making impact visible instead of hand-wavy.",
    },
    {
      icon: "TerminalSquare",
      title: "Ready for production pace",
      body: "From local setup to large-repo usage, the workflow stays practical for real engineering teams shipping continuously.",
    },
  ],
} as const;

export const faq = {
  title: "Frequently Asked Questions",
  items: [
    {
      q: "What is Gate-MCP?",
      a: "Gate-MCP is a local MCP (Model Context Protocol) server that sits between your AI coding assistant and the model. It compresses context at 5 layers simultaneously — tool schemas, code navigation, file reads, JSON responses, and images — so you spend 37–99% fewer input tokens for the same answers.",
    },
    {
      q: "How does it actually save tokens?",
      a: "Five layers: (L0) lazy schemas serve terse one-liners up front and full docs on demand; (L1) graph queries replace file dumps with 200-token subgraphs; (L2) tree-sitter AST extraction compresses files to imports + signatures, with SHA-256 dedup on rereads; (L3) JSON responses become TOON pipe-delimited tables; (L4) output compression can be enabled as an optional final pass.",
    },
    {
      q: "Which IDEs and agents does it support?",
      a: "Anything that speaks MCP. Today that includes Cursor, Claude Code, Windsurf, Antigravity, VS Code Copilot, Cline, Zed, and Continue.dev. One server, every IDE, just a config file change.",
    },
    {
      q: "Will compression hurt my output quality?",
      a: "No. The validated benchmark on real codebases shows 100% API surface retention after AST compression (21/21 exports, 49/49 imports preserved) and 100% TOON round-trip fidelity (17/17 fields, 15/15 values). Every tool response returns originalTokens, optimizedTokens, and savingsPercent so you can verify yourself.",
    },
    {
      q: "Is my code private?",
      a: "Yes. Gate-MCP runs locally on your machine. Zero cloud, zero ML models, 10 dependencies total. Your code never leaves your laptop unless your agent itself sends it to its provider — and Gate-MCP makes that payload dramatically smaller.",
    },
    {
      q: "How do I install it?",
      a: "Add it to your agent's MCP config with command 'npx' and args ['-y', 'gate-mcp']. Or install globally with 'npm install -g gate-mcp'. Restart your agent and the next turn is gated. The repo is MIT licensed at github.com/Dukeabaddon/Gate-MCP.",
    },
  ],
} as const;

export const contact = {
  title: "Stop burning tokens. Start gating them.",
  subtitle:
    "Drop your email for install notes and benchmark updates. Or just clone the repo — it's MIT licensed and ready to run.",
  placeholder: "you@yourcompany.com",
  button: "Get install link",
  thanks: "Thanks! We'll be in touch with install notes.",
  links: [
    { label: "GitHub repo", href: "https://github.com/Dukeabaddon/Gate-MCP" },
    { label: "Issues", href: "https://github.com/Dukeabaddon/Gate-MCP/issues" },
    { label: "Install command", href: "#how-it-works" },
    { label: "Email us", href: "mailto:hello@gate-mcp.dev" },
  ],
} as const;

export const footer = {
  columns: [
    {
      title: "Product",
      links: [
        "MCP Server",
        "5-Layer Compression",
        "Tools & API",
        "Benchmarks",
      ],
    },
    {
      title: "Resources",
      links: ["GitHub", "Architecture", "Tech Stack", "Roadmap"],
    },
    {
      title: "Compatibility",
      links: [
        "Cursor",
        "Claude Code",
        "Windsurf",
        "VS Code Copilot",
      ],
    },
    {
      title: "Legal",
      links: ["MIT License", "Privacy", "Security", "Credits"],
    },
  ],
} as const;
