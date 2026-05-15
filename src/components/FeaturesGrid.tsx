import { features } from "../data/content";
import { Icon } from "./Icon";
import { Emph } from "./Emph";

export default function FeaturesGrid() {
  return (
    <section id="features" className="scroll-mt-24 py-24">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            <Emph text={features.title} word="Tools" />
          </h2>
          <p className="mt-4 text-base text-slate-400 sm:text-lg">
            {features.subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {features.items.map((f) => (
            <div
              key={f.title}
              className="group relative bg-ink-950 p-7 transition hover:bg-ink-900"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-accent-400 transition group-hover:border-accent-500/30 group-hover:text-accent-400">
                <Icon name={f.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-base font-semibold text-white">
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-slate-400">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
