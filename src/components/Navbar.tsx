import { useState } from "react";
import { Menu, X, ArrowUpRight, Download } from "lucide-react";
import { brand, navLinks } from "../data/content";
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

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-30 px-4 pt-5 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between gap-3">
        <a href="#top" className="flex items-center gap-2.5">
          <Logo size={36} />
          <span className="font-semibold text-white">{brand.name}</span>
        </a>

        <nav className="pointer-events-auto hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-2 py-1.5 backdrop-blur-xl lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-1.5 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href={brand.github}
            target="_blank"
            rel="noreferrer"
            className="ml-1 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-sm text-slate-200 transition hover:bg-white/[0.08] hover:text-white"
          >
            <GithubMark className="h-3.5 w-3.5" />
            GitHub
            <ArrowUpRight className="h-3.5 w-3.5 opacity-70" />
          </a>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white transition hover:bg-white/[0.08]"
          >
            <Download className="h-4 w-4 text-slate-300" />
            Install Gate
          </a>
        </div>

        <button
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-white lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="mt-3 rounded-2xl border border-white/10 bg-ink-900/90 p-4 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-base text-slate-200 hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href={brand.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white"
            >
              <span className="inline-flex items-center gap-2">
                <GithubMark className="h-4 w-4" />
                GitHub
              </span>
              <ArrowUpRight className="h-4 w-4 opacity-70" />
            </a>
            <a
              href="#how-it-works"
              onClick={() => setOpen(false)}
              className="btn-primary mt-1 w-full justify-center"
            >
              Install Gate
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
