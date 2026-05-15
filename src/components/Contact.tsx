import { useState } from "react";
import { ArrowRight, Mail, Check } from "lucide-react";
import { contact } from "../data/content";
import { Emph } from "./Emph";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const valid = /.+@.+\..+/.test(email);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 2800);
  };

  return (
    <section id="contact" className="scroll-mt-24 py-24">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] via-ink-900 to-white/[0.04] p-10 lg:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-12 h-72 w-72 rounded-full bg-white/10 blur-3xl"
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                <Emph text={contact.title} word="Start" />
              </h2>
              <p className="mt-4 max-w-xl text-base text-slate-300 sm:text-lg">
                {contact.subtitle}
              </p>

              <form
                onSubmit={onSubmit}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <div className="relative flex-1">
                  <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={contact.placeholder}
                    className="w-full rounded-full border border-white/10 bg-white/[0.04] py-3 pl-10 pr-4 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-accent-500/50 focus:bg-white/[0.06]"
                  />
                </div>
                <button
                  type="submit"
                  disabled={!valid || submitted}
                  className="btn-primary justify-center disabled:opacity-60"
                >
                  {submitted ? (
                    <>
                      <Check className="h-4 w-4" /> Sent
                    </>
                  ) : (
                    <>
                      {contact.button}
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
              {submitted && (
                <p className="mt-3 text-sm text-accent-400">{contact.thanks}</p>
              )}
            </div>

            <div className="grid gap-3">
              {contact.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-white transition hover:border-accent-500/30 hover:bg-white/[0.07]"
                >
                  <span>{l.label}</span>
                  <ArrowRight className="h-4 w-4 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-accent-400" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
