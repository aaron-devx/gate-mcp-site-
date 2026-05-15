import { ArrowRight, AlertTriangle, ShieldCheck } from "lucide-react";
import { useCases } from "../data/content";
import { useCountUp } from "../hooks/useCountUp";
import { Emph } from "./Emph";

export default function UseCases() {
  const tokensSaved = useCases.before.tokens - useCases.after.tokens;
  const costSaved = useCases.before.cost - useCases.after.cost;
  const highlight = useCountUp({ to: useCases.highlight.value });

  return (
    <section id="use-cases" className="scroll-mt-24 py-24">
      <div className="container-page">
        <SectionHeader title={useCases.title} subtitle={useCases.subtitle} />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <BeforeAfterCard
            kind="before"
            label={useCases.before.label}
            tokens={useCases.before.tokens}
            cost={useCases.before.cost}
            latencyMs={useCases.before.latencyMs}
            contextPct={useCases.before.contextPct}
            note={useCases.before.note}
          />
          <BeforeAfterCard
            kind="after"
            label={useCases.after.label}
            tokens={useCases.after.tokens}
            cost={useCases.after.cost}
            latencyMs={useCases.after.latencyMs}
            contextPct={useCases.after.contextPct}
            note={useCases.after.note}
          />
        </div>

        <div className="mt-10 rounded-2xl border border-white/15 bg-gradient-to-r from-white/[0.06] via-transparent to-white/[0.06] p-6 lg:p-8">
          <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Net result
              </p>
              <p
                ref={highlight.ref as React.RefObject<HTMLParagraphElement>}
                className="mt-2 text-5xl font-bold tracking-tight text-white lg:text-6xl"
              >
                <span className="gradient-text">{highlight.display}</span>
                <span className="gradient-text">
                  {useCases.highlight.suffix}
                </span>
              </p>
              <p className="mt-2 max-w-md text-sm text-slate-400">
                {useCases.highlight.label}
              </p>
            </div>
            <div className="grid w-full grid-cols-2 gap-4 text-left sm:max-w-md">
              <MiniStat
                label="Tokens saved / prompt"
                value={tokensSaved.toLocaleString()}
              />
              <MiniStat
                label="Cost saved / prompt"
                value={`$${costSaved.toFixed(2)}`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({
  title,
  subtitle,
  align = "center",
  eyebrow,
}: {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  eyebrow?: string;
}) {
  return (
    <div
      className={`mx-auto max-w-3xl ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
        <Emph text={title} word="actually" />
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-slate-400 sm:text-lg">{subtitle}</p>
      )}
    </div>
  );
}

function BeforeAfterCard({
  kind,
  label,
  tokens,
  cost,
  latencyMs,
  contextPct,
  note,
}: {
  kind: "before" | "after";
  label: string;
  tokens: number;
  cost: number;
  latencyMs: number;
  contextPct: number;
  note: string;
}) {
  const isAfter = kind === "after";
  const Icon = isAfter ? ShieldCheck : AlertTriangle;
  const tokensCounter = useCountUp({ to: tokens, duration: 1600 });
  const costCounter = useCountUp({ to: cost, duration: 1600, decimals: 2 });
  const latencyCounter = useCountUp({ to: latencyMs, duration: 1600 });

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border p-6 lg:p-8 ${
        isAfter
          ? "border-accent-500/30 bg-gradient-to-b from-accent-500/[0.08] to-transparent"
          : "border-white/10 bg-white/[0.03]"
      }`}
    >
      <div className="flex items-center justify-between">
        <span
          className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${
            isAfter
              ? "border-accent-500/30 bg-accent-500/10 text-accent-400"
              : "border-white/10 bg-white/5 text-slate-300"
          }`}
        >
          <Icon className="h-3.5 w-3.5" />
          {label}
        </span>
        {isAfter && (
          <ArrowRight className="h-5 w-5 text-accent-400" />
        )}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4">
        <Metric
          label="Tokens in"
          value={tokensCounter.display}
          subtle={"of "+(isAfter? "context" : "context window")}
          counterRef={tokensCounter.ref as React.RefObject<HTMLParagraphElement>}
          formatter={(v) => Number(v).toLocaleString()}
          accent={isAfter}
        />
        <Metric
          label="Cost / prompt"
          value={`$${costCounter.display}`}
          subtle="at $0.05 / 1K"
          counterRef={costCounter.ref as React.RefObject<HTMLParagraphElement>}
          accent={isAfter}
        />
        <Metric
          label="Latency"
          value={`${(Number(latencyCounter.display) / 1000).toFixed(1)}s`}
          subtle="time to first token"
          counterRef={latencyCounter.ref as React.RefObject<HTMLParagraphElement>}
          accent={isAfter}
        />
        <Metric
          label="Context window used"
          value={`${contextPct}%`}
          subtle="of model limit"
          accent={isAfter}
        />
      </div>

      <div className="mt-6 h-2 w-full overflow-hidden rounded-full bg-white/5">
        <div
          className={`h-full rounded-full ${
            isAfter
              ? "bg-white"
              : "bg-neutral-500/60"
          }`}
          style={{ width: `${contextPct}%` }}
        />
      </div>

      <p className="mt-6 text-sm text-slate-400">{note}</p>
    </div>
  );
}

function Metric({
  label,
  value,
  subtle,
  counterRef,
  formatter,
  accent,
}: {
  label: string;
  value: string;
  subtle?: string;
  counterRef?: React.RefObject<HTMLParagraphElement>;
  formatter?: (v: string) => string;
  accent?: boolean;
}) {
  const display = formatter ? formatter(value) : value;
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
        {label}
      </p>
      <p
        ref={counterRef}
        className={`mt-1 text-2xl font-semibold tracking-tight ${
          accent ? "text-white" : "text-slate-100"
        }`}
      >
        {display}
      </p>
      {subtle && <p className="text-xs text-slate-500">{subtle}</p>}
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
      <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
        {label}
      </p>
      <p className="mt-1 text-xl font-semibold text-white">{value}</p>
    </div>
  );
}
