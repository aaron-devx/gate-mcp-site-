import {
  MousePointer2,
  Sparkles,
  Wind,
  ArrowUpRightFromCircle,
  CodeXml,
  PanelTopOpen,
  TerminalSquare,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { compatibility } from "../data/content";

const iconByName: Record<string, LucideIcon> = {
  Cursor: MousePointer2,
  "Claude Code": Sparkles,
  "Codex CLI": TerminalSquare,
  Windsurf: Wind,
  Antigravity: ArrowUpRightFromCircle,
  "VS Code Copilot": CodeXml,
  Cline: PanelTopOpen,
};

const installByName: Record<string, string> = {
  Cursor: "https://docs.cursor.com/context/model-context-protocol",
  "Claude Code": "https://docs.anthropic.com/en/docs/claude-code/mcp",
  "Codex CLI": "https://github.com/openai/codex",
  Windsurf: "https://docs.windsurf.com/windsurf/mcp",
  Antigravity: "https://www.antigravity.dev/",
  "VS Code Copilot":
    "https://code.visualstudio.com/docs/copilot/chat/mcp-servers",
  Cline: "https://docs.cline.bot/mcp",
};

export default function CompatibilityStrip() {
  return (
    <section className="border-t border-white/[0.06] bg-ink-950/60 backdrop-blur">
      <div className="container-page py-10">
        <p className="text-center text-[11px] uppercase tracking-[0.28em] text-slate-500">
          {compatibility.title}
        </p>
        <div className="mt-6 grid grid-cols-2 gap-y-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
          {compatibility.logos.map((name) => {
            const LogoIcon = iconByName[name] ?? Sparkles;
            return (
              <a
                key={name}
                href={installByName[name] ?? "#how-it-works"}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center gap-2 text-slate-500 transition hover:text-slate-200"
                title={`Open ${name} setup`}
              >
                <LogoIcon className="h-4 w-4" strokeWidth={1.75} />
                <span className="text-sm font-medium tracking-tight">
                  {name}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
