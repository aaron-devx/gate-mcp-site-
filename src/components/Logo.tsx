import { useState } from "react";

type Props = {
  size?: number;
  className?: string;
};

export function Logo({ size = 36, className = "" }: Props) {
  const sources = [
    "/logo.png",
    "/logo.jpg",
    "/logo.jpeg",
    "/logo.webp",
    "/logo.svg",
    "/favicon.svg",
  ];
  const [index, setIndex] = useState(0);
  const exhausted = index >= sources.length;

  if (exhausted) {
    return (
      <span
        aria-label="Gate-MCP"
        style={{ width: size, height: size }}
        className={`grid place-items-center rounded-lg bg-gradient-to-br from-neutral-200 via-neutral-400 to-neutral-700 font-serif text-black shadow-glow ring-1 ring-white/10 ${className}`}
      >
        <span
          className="display-serif font-normal leading-none"
          style={{ fontSize: size * 0.58 }}
        >
          G
        </span>
      </span>
    );
  }

  return (
    <img
      src={sources[index]}
      alt="Gate-MCP"
      width={size}
      height={size}
      onError={() => setIndex((i) => i + 1)}
      className={`object-contain ${className}`}
      draggable={false}
    />
  );
}
