"use client";

import { useEffect, useRef, useState } from "react";
import { HeaderDotGrid } from "@/components/header-dot-grid";
import { Icon, type IconName } from "@/components/icon";

const problemIcons: IconName[] = [
  "slab_serif",
  "calculate",
  "text_compare",
  "hourglass",
  "warning",
];

export function ProblemCard({
  index,
  heading,
  point,
}: {
  index: number;
  heading: string;
  point: string;
}) {
  const cardRef = useRef<HTMLLIElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setInView(true);
        observer.disconnect();
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  function onPointerMove(event: React.PointerEvent<HTMLLIElement>) {
    const card = cardRef.current;
    if (!card) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = card.getBoundingClientRect();
    const dx = event.clientX - (rect.left + rect.width / 2);
    const dy = event.clientY - (rect.top + rect.height / 2);
    const cssAngle = (Math.atan2(dy, dx) * 180) / Math.PI + 90;
    card.style.setProperty("--shine-angle", `${cssAngle}deg`);
  }

  return (
    <li
      ref={cardRef}
      onPointerMove={onPointerMove}
      className={`group/shine relative flex rounded-[10px] border border-[#d6d6d8] transition-[opacity,transform] duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none [--shine-angle:0deg] ${
        inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: inView ? `${index * 90}ms` : "0ms" }}
    >
      <div className="relative flex h-full w-full overflow-hidden rounded-[10px]">
        <div className="pointer-events-none absolute inset-0">
          <HeaderDotGrid tone="scarlet" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent" />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[10px] opacity-0 transition-opacity duration-300 group-hover/shine:opacity-100 motion-reduce:hidden"
          style={{
            padding: "2.5px",
            background:
              "conic-gradient(from var(--shine-angle), rgba(255,255,255,0.95) 0deg, rgba(255,255,255,0.45) 28deg, transparent 70deg, transparent 290deg, rgba(255,255,255,0.45) 332deg, rgba(255,255,255,0.95) 360deg)",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
          }}
        />
        <Icon
          name={problemIcons[index] ?? "warning"}
          size={96}
          className="pointer-events-none absolute top-2 right-2 z-[1] text-black/10 transition-transform duration-300 ease-out group-hover/shine:rotate-12 motion-reduce:transition-none motion-reduce:group-hover/shine:rotate-0"
        />
        <div className="relative z-10 flex h-full w-full flex-col p-8">
          <p className="font-sans text-[64px] leading-none font-black tracking-tight text-black/20">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-3 font-sans text-lg leading-snug font-semibold text-foreground">
            {heading}
          </h3>
          <p className="mt-2 font-sans text-base leading-[1.5] text-muted">
            {point}
          </p>
        </div>
      </div>
    </li>
  );
}
