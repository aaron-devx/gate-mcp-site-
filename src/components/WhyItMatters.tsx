import { whyItMatters } from "../data/content";
import { Icon } from "./Icon";
import { Emph } from "./Emph";

export default function WhyItMatters() {
  return (
    <section className="py-16">
      <div className="container-page">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-8 lg:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              <Emph text={whyItMatters.title} word="Input" />
            </h2>
          </div>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {whyItMatters.items.map((it) => (
              <div key={it.title} className="text-center">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/5 text-accent-400">
                  <Icon name={it.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">
                  {it.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400">{it.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
