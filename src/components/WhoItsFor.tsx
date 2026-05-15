import { personas } from "../data/content";
import { Icon } from "./Icon";
import { Emph } from "./Emph";

export default function WhoItsFor() {
  return (
    <section id="who" className="scroll-mt-24 py-24">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            <Emph text={personas.title} word="It's" />
          </h2>
          <p className="mt-4 text-base text-slate-400 sm:text-lg">
            {personas.subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {personas.items.map((p) => (
            <div
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-accent-500/30 hover:bg-white/[0.05]"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-white">
                <Icon name={p.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-slate-400">
                <span className="display-serif text-base italic text-neutral-400">Pain.</span> {p.pain}
              </p>
              <p className="mt-2 text-sm text-neutral-200">
                <span className="display-serif text-base italic text-white">Relief.</span> {p.relief}
              </p>
              <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-accent-500/40 to-transparent opacity-0 transition group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
