import { brand, footer } from "../data/content";
import { Logo } from "./Logo";

function GithubMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.51-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.44-2.7 5.4-5.27 5.69.41.35.78 1.04.78 2.11 0 1.52-.01 2.75-.01 3.12 0 .31.21.67.8.55C20.21 21.38 23.5 17.07 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedInMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.2 10.2H5.9V18h2.3v-7.8Zm-1.15-3.7a1.35 1.35 0 1 0 0 2.7 1.35 1.35 0 0 0 0-2.7ZM18.1 13.4c0-2.4-1.28-3.52-2.98-3.52-1.37 0-1.99.75-2.34 1.28v-1.09h-2.25V18h2.25v-4.33c0-1.14.22-2.25 1.63-2.25 1.39 0 1.41 1.3 1.41 2.32V18h2.28v-4.6Z" />
    </svg>
  );
}

const footerHrefByLabel: Record<string, string> = {
  "MCP Server": "https://github.com/Dukeabaddon/Gate-MCP",
  "5-Layer Compression":
    "https://github.com/Dukeabaddon/Gate-MCP#how-it-works",
  "Tools & API": "https://github.com/Dukeabaddon/Gate-MCP#tools",
  Benchmarks: "https://github.com/Dukeabaddon/Gate-MCP#benchmarks",
  GitHub: "https://github.com/Dukeabaddon/Gate-MCP",
  Architecture: "https://github.com/Dukeabaddon/Gate-MCP#architecture",
  "Tech Stack": "https://github.com/Dukeabaddon/Gate-MCP#tech-stack",
  Roadmap: "https://github.com/Dukeabaddon/Gate-MCP#roadmap",
  Cursor: "https://docs.cursor.com/context/model-context-protocol",
  "Claude Code": "https://docs.anthropic.com/en/docs/claude-code/mcp",
  Windsurf: "https://docs.windsurf.com/windsurf/mcp",
  "VS Code Copilot":
    "https://code.visualstudio.com/docs/copilot/chat/mcp-servers",
  "MIT License": "https://github.com/Dukeabaddon/Gate-MCP/blob/main/LICENSE",
  Privacy: "#",
  Security: "https://github.com/Dukeabaddon/Gate-MCP#security",
  Credits: "https://github.com/Dukeabaddon/Gate-MCP#license",
};

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950">
      <div className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(4,minmax(0,1fr))]">
          <div>
            <div className="flex items-center gap-2">
              <Logo size={36} />
              <span className="text-lg font-semibold text-white">
                {brand.name}
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-slate-400">
              Local MCP server. Five compression layers. 37–99% fewer input
              tokens before they hit the API.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={brand.github}
                className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition hover:text-white"
                aria-label="GitHub"
              >
                <GithubMark className="h-4 w-4" />
              </a>
              <a
                href={brand.linkedin}
                target="_blank"
                rel="noreferrer"
                className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition hover:text-white"
                aria-label="LinkedIn"
              >
                <LinkedInMark className="h-4 w-4" />
              </a>
            </div>
          </div>

          {footer.columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    {(() => {
                      const href = footerHrefByLabel[link] ?? "#";
                      const isExternal = href.startsWith("http");
                      const isPlaceholder = href === "#";
                      return (
                    <a
                      href={href}
                      {...(isExternal
                        ? { target: "_blank", rel: "noreferrer" }
                        : {})}
                      {...(isPlaceholder ? { "aria-disabled": true } : {})}
                      className="text-sm text-slate-400 transition hover:text-white"
                    >
                      {link}
                    </a>
                      );
                    })()}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>Copyright {new Date().getFullYear()} {brand.name}.</span>
        </div>
      </div>
    </footer>
  );
}
