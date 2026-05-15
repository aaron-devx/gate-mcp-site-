import { ArrowRight, ArrowUpRight } from "lucide-react";
import { hero } from "../data/content";
import { Icon } from "./Icon";

type Orbit = {
  id: string;
  label: string;
  value: string;
  iconName: string;
  position: string;
  align: "left" | "right";
};

const orbits: Orbit[] = [
  {
    id: "schema",
    label: "Schema",
    value: "46%",
    iconName: "Filter",
    position: "left-[6%] top-[24%]",
    align: "left",
  },
  {
    id: "navigate",
    label: "Navigate",
    value: "99%",
    iconName: "Network",
    position: "right-[6%] top-[24%]",
    align: "right",
  },
  {
    id: "input",
    label: "Input",
    value: "94%",
    iconName: "Archive",
    position: "left-[9%] bottom-[18%]",
    align: "left",
  },
  {
    id: "response",
    label: "Response",
    value: "81%",
    iconName: "Repeat",
    position: "right-[9%] bottom-[18%]",
    align: "right",
  },
];

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative mx-auto min-h-[760px] w-full max-w-[1320px] px-6 pb-12 pt-10 lg:min-h-[820px] lg:px-12">
        <OrbitCurves />

        <div className="absolute inset-0 hidden lg:block">
          {orbits.map((o) => (
            <OrbitPoint key={o.id} {...o} />
          ))}
        </div>

        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center pt-16 text-center lg:pt-24">
          <a
            href="#use-cases"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-slate-200 backdrop-blur transition hover:bg-white/[0.08]"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-400" />
            </span>
            {hero.eyebrow}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>

          <h1 className="mt-8 text-balance text-4xl font-semibold leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-[68px]">
            <span className="block">{hero.headline[0]}</span>
            <span className="display-serif block bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent">
              {hero.headline[1]}
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base text-slate-400 sm:text-lg">
            {hero.sub}
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={hero.ctaPrimary.href}
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink-950 transition hover:bg-slate-100"
            >
              {hero.ctaPrimary.label}
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={hero.ctaSecondary.href}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-white backdrop-blur transition hover:bg-white/[0.08]"
            >
              {hero.ctaSecondary.label}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 lg:hidden">
            {orbits.map((o) => (
              <div
                key={o.id}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3"
              >
                <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg border border-white/10 bg-white/5 text-accent-400">
                  <Icon name={o.iconName} className="h-4 w-4" />
                </span>
                <div className="text-left">
                  <p className="text-xs uppercase tracking-[0.14em] text-slate-400">
                    {o.label}
                  </p>
                  <p className="text-base font-semibold text-white">{o.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function OrbitPoint({ label, value, iconName, position, align }: Orbit) {
  return (
    <div className={`absolute z-10 ${position}`}>
      <div
        className={`flex items-start gap-3 ${
          align === "right" ? "flex-row-reverse text-right" : "text-left"
        }`}
      >
        <span className="relative grid h-10 w-10 flex-shrink-0 place-items-center rounded-full border border-white/15 bg-ink-950/80 text-accent-400 backdrop-blur">
          <span
            aria-hidden
            className="absolute inset-0 rounded-full bg-accent-500/10 blur-md"
          />
          <Icon name={iconName} className="relative h-4 w-4" />
        </span>
        <div>
          <p className="text-sm font-medium text-white">{label}</p>
          <p className="text-xs font-mono tracking-tight text-slate-400">
            {value} saved
          </p>
        </div>
      </div>
    </div>
  );
}

function OrbitCurves() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1200 700"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 -z-0 hidden h-full w-full lg:block"
    >
      <defs>
        <linearGradient id="orbitFade" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="rgba(255,255,255,0)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.32)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        <linearGradient id="orbitFade2" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.24)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>

      <path
        d="M 120 220 Q 600 60 1080 220"
        fill="none"
        stroke="url(#orbitFade)"
        strokeWidth="1"
        strokeDasharray="2 6"
      />
      <path
        d="M 150 540 Q 600 680 1050 540"
        fill="none"
        stroke="url(#orbitFade2)"
        strokeWidth="1"
        strokeDasharray="2 6"
      />
      <path
        d="M 130 220 Q 60 380 150 540"
        fill="none"
        stroke="rgba(255,255,255,0.14)"
        strokeWidth="1"
        strokeDasharray="2 6"
      />
      <path
        d="M 1070 220 Q 1140 380 1050 540"
        fill="none"
        stroke="rgba(255,255,255,0.14)"
        strokeWidth="1"
        strokeDasharray="2 6"
      />

      <ellipse
        cx="600"
        cy="380"
        rx="280"
        ry="180"
        fill="url(#orbitFade)"
        opacity="0.04"
      />
    </svg>
  );
}

