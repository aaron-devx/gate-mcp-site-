import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { howItWorks } from "../data/content";
import { Emph } from "./Emph";

export default function HowItWorks() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(howItWorks.installSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="how-it-works" className="scroll-mt-24 py-24">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            <Emph text={howItWorks.title} word="Compresses" />
          </h2>
          <p className="mt-4 text-base text-slate-400 sm:text-lg">
            {howItWorks.subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-4">
            {howItWorks.steps.map((s, i) => (
              <div
                key={s.tag}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-accent-500/30"
              >
                <div className="flex items-start gap-5">
                  <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl border border-accent-500/30 bg-accent-500/10 text-sm font-semibold text-accent-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                      {s.tag}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-white">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-400">{s.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-ink-900 to-ink-950 p-1 shadow-card">
            <div className="rounded-[14px] border border-white/5 bg-ink-950">
              <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  <span className="ml-3 text-xs text-neutral-400">
                    ~/.cursor/mcp.json
                  </span>
                </div>
                <button
                  onClick={copy}
                  className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300 transition hover:text-white"
                  aria-label="Copy install snippet"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-accent-400" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" /> Copy
                    </>
                  )}
                </button>
              </div>
              <pre className="overflow-x-auto px-5 py-5 font-mono text-[13px] leading-relaxed text-slate-200">
                <code>{colorJson(howItWorks.installSnippet)}</code>
              </pre>
            </div>
            <p className="px-5 py-3 text-xs text-slate-500">
              Paste this into your agent's MCP config, restart, and Gate starts
              working immediately.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function colorJson(src: string) {
  const lines = src.split("\n");
  return lines.map((line, idx) => {
    const keyMatch = line.match(/^(\s*)"([^"]+)":(.*)$/);
    if (keyMatch) {
      const [, indent, key, rest] = keyMatch;
      return (
        <span key={idx}>
          {indent}
          <span className="text-sky-300">"{key}"</span>
          <span className="text-slate-300">:</span>
          {colorValue(rest)}
          {"\n"}
        </span>
      );
    }
    return <span key={idx}>{line}{"\n"}</span>;
  });
}

function colorValue(rest: string) {
  const parts: React.ReactNode[] = [];
  let remaining = rest;
  let key = 0;
  while (remaining.length > 0) {
    const str = remaining.match(/^(\s*)("[^"]*")(.*)$/);
    if (str) {
      parts.push(<span key={key++}>{str[1]}</span>);
      parts.push(
        <span key={key++} className="text-amber-200">
          {str[2]}
        </span>
      );
      remaining = str[3];
      continue;
    }
    parts.push(<span key={key++}>{remaining[0]}</span>);
    remaining = remaining.slice(1);
  }
  return parts;
}
