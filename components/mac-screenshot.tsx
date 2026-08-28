"use client";

import { useEffect, useRef } from "react";

export function MacScreenshot({
  image,
  alt,
  className = "",
  parallax = false,
  animateIn = parallax,
}: {
  image: string;
  alt: string;
  className?: string;
  parallax?: boolean;
  animateIn?: boolean;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!parallax) return;

    const wrapNode = wrapRef.current;
    const layerNode = layerRef.current;
    if (!wrapNode || !layerNode) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const wrap: HTMLDivElement = wrapNode;
    const layer: HTMLDivElement = layerNode;
    let origin: number | null = null;
    let range = 0;
    let raf = 0;

    function update() {
      const rect = wrap.getBoundingClientRect();
      const vh = window.innerHeight;

      if (origin === null) {
        if (rect.bottom <= 0 || rect.top >= vh) {
          layer.style.transform = "translate3d(0, 0, 0)";
          return;
        }
        origin = window.scrollY;
        range = Math.max(rect.top + rect.height, vh);
      }

      const t = Math.min(Math.max((window.scrollY - origin) / range, 0), 1);
      layer.style.transform = `translate3d(0, ${-(t * vh * 0.12)}px, 0)`;
    }

    function onScroll() {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    }

    function onResize() {
      origin = null;
      range = 0;
      onScroll();
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [parallax]);

  const windowFrame = (
    <div
      className={`w-full overflow-hidden rounded-[10px] border border-foreground/10 bg-[#e8e8e8] shadow-[0_18px_40px_rgba(15,23,42,0.18)] [backface-visibility:hidden] ${className}`}
    >
      <div
        className="flex h-10 items-center gap-[8px] bg-gradient-to-b from-[#f6f6f6] to-[#e8e8e8] px-3.5"
        aria-hidden
      >
        <span className="size-3 rounded-full bg-[#ff5f57] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.2)]" />
        <span className="size-3 rounded-full bg-[#febc2e] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.2)]" />
        <span className="size-3 rounded-full bg-[#28c840] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.2)]" />
      </div>
      <img
        src={image}
        alt={alt}
        width={1872}
        height={963}
        draggable={false}
        className="pointer-events-none block h-auto w-full [-webkit-user-drag:none]"
      />
    </div>
  );

  if (!parallax) return windowFrame;

  return (
    <div className={animateIn ? "slide-up" : undefined}>
      <div ref={wrapRef}>
        <div ref={layerRef} className="will-change-transform">
          {windowFrame}
        </div>
      </div>
    </div>
  );
}
