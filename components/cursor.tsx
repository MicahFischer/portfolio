"use client";

import { useEffect, useRef } from "react";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const orbitTextRef = useRef<SVGTextPathElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;
    if (!finePointer) return;

    document.documentElement.classList.add("has-custom-cursor");

    const dotNode = dotRef.current;
    const circleNode = circleRef.current;
    const orbitNode = orbitRef.current;
    const orbitTextNode = orbitTextRef.current;
    if (!dotNode || !circleNode || !orbitNode || !orbitTextNode) return;

    const dot: HTMLDivElement = dotNode;
    const circle: HTMLDivElement = circleNode;
    const orbit: HTMLDivElement = orbitNode;
    const orbitText: SVGTextPathElement = orbitTextNode;

    let x = 0;
    let y = 0;
    let cx = 0;
    let cy = 0;
    let hovering = false;
    let projectHover = false;
    let visible = false;
    let frame = 0;
    let label = "";

    function setOrbitLabel(next: string) {
      if (next === label) return;
      label = next;
      const phrase = next.trim().toUpperCase();
      orbitText.textContent = phrase
        ? `${phrase} • ${phrase} • ${phrase} • `
        : "";
    }

    function onMove(event: PointerEvent) {
      x = event.clientX;
      y = event.clientY;
      if (!visible) {
        visible = true;
        cx = x;
        cy = y;
        dot.style.opacity = "1";
        circle.style.opacity = "1";
      }
      const target = event.target;
      const project = target instanceof Element
        ? target.closest("[data-cursor-label]")
        : null;
      projectHover = Boolean(project);
      if (project instanceof HTMLElement) {
        setOrbitLabel(project.dataset.cursorLabel ?? "View Project");
      }
      hovering =
        projectHover ||
        (target instanceof Element &&
          Boolean(
            target.closest("a, button, [role='tab'], label, summary, [data-cursor='pointer']"),
          ));
    }

    function draw() {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const ease = reduceMotion ? 1 : hovering ? 0.22 : 0.14;
      cx += (x - cx) * ease;
      cy += (y - cy) * ease;

      const circleScale = hovering ? 1.55 : 1;
      dot.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      circle.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%) scale(${circleScale})`;
      orbit.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
      orbit.style.opacity = projectHover ? "1" : "0";

      frame = window.requestAnimationFrame(draw);
    }

    function onLeave() {
      visible = false;
      projectHover = false;
      dot.style.opacity = "0";
      circle.style.opacity = "0";
      orbit.style.opacity = "0";
    }

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    frame = window.requestAnimationFrame(draw);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[200] mix-blend-difference"
      aria-hidden
    >
      <div
        ref={orbitRef}
        className="absolute top-0 left-0 size-[7rem] opacity-0 transition-opacity duration-300"
      >
        <div className="cursor-orbit-spin size-full">
          <svg viewBox="0 0 112 112" className="size-full overflow-visible">
            <defs>
              <path
                id="cursor-orbit-path"
                d="M 56,56 m -42,0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0"
              />
            </defs>
            <text className="fill-white font-sans text-[12px] font-bold tracking-[0.12em]">
              <textPath
                ref={orbitTextRef}
                href="#cursor-orbit-path"
                startOffset="0%"
                textLength={2 * Math.PI * 42}
                lengthAdjust="spacing"
              />
            </text>
          </svg>
        </div>
      </div>
      <div
        ref={circleRef}
        className="absolute top-0 left-0 size-10 rounded-full border border-white opacity-0"
      />
      <div
        ref={dotRef}
        className="absolute top-0 left-0 size-1.5 rounded-full bg-white opacity-0"
      />
    </div>
  );
}
