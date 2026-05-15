import { useEffect, useMemo, useState } from "react";
import { ArrowDown } from "lucide-react";

export default function SectionProgress() {
  const [current, setCurrent] = useState(1);
  const [total, setTotal] = useState(1);
  const [atBottom, setAtBottom] = useState(false);

  const getTrackedSections = () =>
    Array.from(
      document.querySelectorAll("main section:not([data-progress='false'])")
    ) as HTMLElement[];

  useEffect(() => {
    let raf = 0;

    const update = () => {
      const sections = getTrackedSections();
      if (sections.length === 0) return;

      const marker = window.scrollY + 1;
      let idx = 0;
      for (let i = 0; i < sections.length; i += 1) {
        const top = (sections[i] as HTMLElement).offsetTop;
        if (top <= marker) idx = i;
      }

      setTotal(sections.length);
      setCurrent(Math.min(sections.length, idx + 1));
      const scrolledBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 4;
      setAtBottom(scrolledBottom);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const bars = useMemo(
    () => Array.from({ length: Math.min(total, 7) }, (_, i) => i),
    [total]
  );
  const filled = Math.max(1, Math.round((current / Math.max(total, 1)) * bars.length));

  const handleScrollAction = () => {
    const sections = getTrackedSections();
    if (sections.length === 0) return;

    const marker = window.scrollY + 1;
    let idx = 0;
    for (let i = 0; i < sections.length; i += 1) {
      if (sections[i].offsetTop <= marker) idx = i;
    }

    if (atBottom) {
      const prev = Math.max(0, idx - 1);
      sections[prev]?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    const next = Math.min(sections.length - 1, idx + 1);
    sections[next]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="pointer-events-none fixed bottom-6 left-1/2 z-40 hidden w-[min(1320px,calc(100vw-2rem))] -translate-x-1/2 items-end justify-between px-6 lg:flex">
      <button
        type="button"
        onClick={handleScrollAction}
        className="pointer-events-auto flex items-center gap-3 text-xs text-slate-400 transition hover:text-slate-200"
        aria-label={atBottom ? "Scroll up to previous section" : "Scroll down to next section"}
      >
        <span className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] backdrop-blur transition-colors hover:bg-white/[0.08]">
          <ArrowDown
            className={`h-3.5 w-3.5 text-slate-300 transition-transform duration-300 ${
              atBottom ? "rotate-180" : "rotate-0"
            }`}
          />
        </span>
        <span className="font-mono tracking-tight">
          {String(current).padStart(2, "0")} / {String(total).padStart(2, "0")} ·{" "}
          <span className="text-slate-300 transition-all duration-300">
            {atBottom ? "Scroll up" : "Scroll down"}
          </span>
        </span>
      </button>

      <div className="pointer-events-auto text-right">
        <p className="text-xs text-slate-400">Page progress</p>
        <div className="mt-2 flex items-center gap-1.5">
          {bars.map((i) => (
            <span
              key={i}
              className={`h-1 w-8 rounded-full ${
                i < filled
                  ? "bg-gradient-to-r from-white to-neutral-400"
                  : "bg-white/10"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
