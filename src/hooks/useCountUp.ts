import { useEffect, useRef, useState } from "react";

type Options = {
  to: number;
  duration?: number;
  decimals?: number;
  startOnView?: boolean;
};

export function useCountUp({
  to,
  duration = 1400,
  decimals = 0,
  startOnView = true,
}: Options) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLElement | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const begin = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      const start = performance.now();
      const tick = (now: number) => {
        const elapsed = now - start;
        const t = Math.min(1, elapsed / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        setValue(to * eased);
        if (t < 1) requestAnimationFrame(tick);
        else setValue(to);
      };
      requestAnimationFrame(tick);
    };

    if (!startOnView) {
      begin();
      return;
    }

    const el = ref.current;
    if (!el) {
      begin();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            begin();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [to, duration, startOnView]);

  const factor = Math.pow(10, decimals);
  const display = (Math.round(value * factor) / factor).toFixed(decimals);

  return { value, display, ref };
}
