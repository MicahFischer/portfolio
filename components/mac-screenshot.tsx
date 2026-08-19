"use client";

import { useEffect, useRef, useState, type AnimationEvent } from "react";

export function MacScreenshot({
  image,
  alt,
  className = "",
  parallax = false,
}: {
  image: string;
  alt: string;
  className?: string;
  parallax?: boolean;
}) {
  const layerRef = useRef<HTMLDivElement>(null);
  const [canParallax, setCanParallax] = useState(!parallax);

  useEffect(() => {
    if (!parallax) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCanParallax(true);
      return;
    }

    const timeout = window.setTimeout(() => setCanParallax(true), 1100);
    return () => window.clearTimeout(timeout);
  }, [parallax]);

  useEffect(() => {
    if (!parallax || !canParallax) return;

    const layer = layerRef.current;
    if (!layer) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const origin = window.scrollY;
    let raf = 0;

    function update() {
      const lift = Math.min(Math.max(0, window.scrollY - origin) * 0.16, 140);
      layer.style.transform = `translate3d(0, ${-lift}px, 0)`;
    }

    function onScroll() {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [parallax, canParallax]);

  function onEnterEnd(event: AnimationEvent<HTMLDivElement>) {
    if (event.target !== event.currentTarget) return;
    if (event.animationName !== "slide-up") return;
    setCanParallax(true);
  }

  const windowFrame = (
    <div
      className={`w-full overflow-hidden rounded-[10px] border border-black/10 bg-[#e8e8e8] shadow-[0_18px_40px_rgba(15,23,42,0.18)] [backface-visibility:hidden] ${className}`}
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
    <div className="slide-up" onAnimationEnd={onEnterEnd}>
      <div ref={layerRef} className="will-change-transform">
        {windowFrame}
      </div>
    </div>
  );
}
