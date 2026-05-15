import { builtWithCursor } from "../data/content";
import { Icon } from "./Icon";
import { Emph } from "./Emph";

export default function BuiltWithCursor() {
  return (
    <section className="py-24">
      <div className="container-page">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 p-8 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
            <div>
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.6)]" />
                {builtWithCursor.eyebrow}
              </span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                <Emph text={builtWithCursor.title} word="changed how we built it." />
              </h2>
              <p className="mt-4 max-w-xl text-base text-slate-400 sm:text-lg">
                {builtWithCursor.subtitle}
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4">
                {builtWithCursor.stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center"
                  >
                    <p className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      <span className="gradient-text">{s.value}</span>
                    </p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-slate-400">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              {builtWithCursor.items.map((it) => (
                <div
                  key={it.title}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-accent-500/30 hover:bg-white/[0.05]"
                >
                  <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-white">
                    <Icon name={it.icon} className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      {it.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">{it.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
