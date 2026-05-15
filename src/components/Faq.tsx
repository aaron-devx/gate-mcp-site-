import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faq } from "../data/content";
import { Emph } from "./Emph";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 py-24">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            <Emph text={faq.title} word="Asked" />
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <button
                key={item.q}
                onClick={() => setOpen(isOpen ? null : i)}
                className="block w-full px-6 py-5 text-left transition hover:bg-white/[0.04]"
                aria-expanded={isOpen}
              >
                <div className="flex items-start justify-between gap-6">
                  <h3 className="text-base font-semibold text-white sm:text-lg">
                    {item.q}
                  </h3>
                  <span className="mt-0.5 grid h-7 w-7 flex-shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-300">
                    {isOpen ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </span>
                </div>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "mt-3 grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="min-h-0 max-w-prose text-sm text-slate-400">
                    {item.a}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
