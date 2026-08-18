"use client";

import {
  useLayoutEffect,
  useRef,
  useState,
  type MouseEvent,
  type PointerEvent,
} from "react";
import { Icon } from "@/components/icon";
import { HeaderDotGrid } from "@/components/header-dot-grid";
import { caseStudies } from "@/lib/site";
import Link from "next/link";

const projectCtaClass =
  "group inline-flex shrink-0 items-center gap-3 text-white transition-colors duration-500 group-hover/card:text-black group-focus-within/card:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

const projectCtaCircleClass =
  "inline-flex size-12 items-center justify-center rounded-full border border-white bg-transparent transition-colors duration-500 group-hover/card:border-black group-hover/card:bg-black group-hover/card:text-white group-focus-within/card:border-black group-focus-within/card:bg-black group-focus-within/card:text-white";

const arrowClass =
  "absolute top-1/2 z-20 inline-flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-foreground shadow-[0_8px_24px_rgba(15,23,42,0.14)]";

const last = caseStudies.length - 1;

function MacScreenshot({
  image,
  alt,
  className = "",
}: {
  image: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`w-full overflow-hidden rounded-[10px] border border-black/10 bg-[#e8e8e8] shadow-[0_18px_40px_rgba(15,23,42,0.18)] [backface-visibility:hidden] ${className}`}
    >
      <div className="flex h-10 items-center gap-[8px] bg-gradient-to-b from-[#f6f6f6] to-[#e8e8e8] px-3.5" aria-hidden>
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
}

function rubber(delta: number, index: number) {
  if (index <= 0 && delta > 0) return delta * 0.32;
  if (index >= last && delta < 0) return delta * 0.32;
  return delta;
}

const screenshotSlotClass =
  "pointer-events-none absolute top-6 left-6 w-[108%] md:top-8 md:left-8";

function ProjectCardBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[linear-gradient(155deg,var(--sea)_0%,#2498b4_42%,var(--blue)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(80%_70%_at_18%_8%,rgba(255,255,255,0.28),transparent_58%)]" />
      <HeaderDotGrid interactive={false} variant="card" />
    </div>
  );
}

export function Projects() {
  const [index, setIndex] = useState(0);
  const indexRef = useRef(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({
    tracking: false,
    dragging: false,
    pointerId: 0,
    startX: 0,
    startY: 0,
    delta: 0,
  });
  const suppressClickRef = useRef(false);
  indexRef.current = index;

  function applyTransform(nextIndex: number, offsetPx: number, animate: boolean) {
    const track = trackRef.current;
    if (!track) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    track.style.transition =
      animate && !reduceMotion ? "transform 500ms ease-out" : "none";
    track.style.transform = `translateX(calc(-${nextIndex} * (100% + 1.5rem) + ${offsetPx}px))`;
  }

  useLayoutEffect(() => {
    if (dragRef.current.dragging) return;
    applyTransform(index, 0, true);
  }, [index]);

  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    if (event.button !== 0) return;
    if ((event.target as HTMLElement).closest("button")) return;

    event.preventDefault();
    dragRef.current = {
      tracking: true,
      dragging: false,
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      delta: 0,
    };
  }

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    const drag = dragRef.current;
    if (!drag.tracking || event.pointerId !== drag.pointerId) return;

    const dx = event.clientX - drag.startX;
    const dy = event.clientY - drag.startY;

    if (!drag.dragging) {
      if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return;
      if (Math.abs(dy) >= Math.abs(dx)) {
        drag.tracking = false;
        return;
      }
      drag.dragging = true;
      event.currentTarget.setPointerCapture(event.pointerId);
    }

    drag.delta = dx;
    applyTransform(indexRef.current, rubber(dx, indexRef.current), false);
  }

  function endDrag(event: PointerEvent<HTMLDivElement>) {
    const drag = dragRef.current;
    if (!drag.tracking || event.pointerId !== drag.pointerId) return;

    const wasDragging = drag.dragging;
    const delta = drag.delta;
    drag.tracking = false;
    drag.dragging = false;

    if (wasDragging && event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    if (!wasDragging) return;

    const width = viewportRef.current?.clientWidth ?? 0;
    const threshold = Math.min(80, Math.max(48, width * 0.16));
    let next = indexRef.current;
    if (delta < -threshold) next = Math.min(last, next + 1);
    else if (delta > threshold) next = Math.max(0, next - 1);

    suppressClickRef.current = Math.abs(delta) > 8;
    applyTransform(next, 0, true);
    setIndex(next);
  }

  function onClickCapture(event: MouseEvent<HTMLDivElement>) {
    if (!suppressClickRef.current) return;
    event.preventDefault();
    event.stopPropagation();
    suppressClickRef.current = false;
  }

  return (
    <section id="work" className="w-full scroll-mt-6 bg-background pt-[100px]">
      <div className="site-width flex flex-col items-start gap-2.5">
        <p className="font-mono text-[14px] leading-normal tracking-[1.4px] text-muted uppercase">
          Selected Work
        </p>
        <h2 className="heading text-[36px] text-foreground">Projects</h2>
      </div>

      <div className="relative mt-12">
        {index > 0 ? (
          <button
            type="button"
            className={`${arrowClass} left-[max(4px,calc((100%-1400px)/2+8px))] md:left-[max(8px,calc((100%-1400px)/2+8px))]`}
            aria-label="Previous project"
            onClick={() => setIndex((current) => Math.max(0, current - 1))}
          >
            <Icon name="chevron_left" />
          </button>
        ) : null}
        {index < last ? (
          <button
            type="button"
            className={`${arrowClass} right-[max(4px,calc((100%-1400px)/2+8px))] md:right-[max(8px,calc((100%-1400px)/2+8px))]`}
            aria-label="Next project"
            onClick={() => setIndex((current) => Math.min(last, current + 1))}
          >
            <Icon name="chevron_right" />
          </button>
        ) : null}

        <div
          ref={viewportRef}
          className="overflow-hidden px-[max(24px,calc((100%-1400px)/2+24px))] touch-pan-y select-none"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onClickCapture={onClickCapture}
          onDragStart={(event) => event.preventDefault()}
        >
          <div ref={trackRef} className="flex w-full gap-6">
            {caseStudies.map((study, studyIndex) => (
              <article
                key={study.title}
                aria-hidden={studyIndex !== index}
                className={`group/card relative h-[min(80vh,720px)] w-full shrink-0 basis-full overflow-hidden rounded-[4px] border border-[#d6d6d8] bg-blue select-none ${
                  study.locked || !study.href ? "" : "cursor-pointer"
                }`}
                data-cursor={
                  study.locked || !study.href ? undefined : "pointer"
                }
                data-cursor-label={
                  study.locked || !study.href ? undefined : study.cta
                }
              >
                <ProjectCardBackdrop />
                {study.image ? (
                  <div className={screenshotSlotClass}>
                    <MacScreenshot image={study.image} alt="" />
                  </div>
                ) : null}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0">
                  <div
                    aria-hidden
                    className="absolute inset-0 translate-y-full bg-white/50 backdrop-blur-sm transition-transform duration-500 ease-out motion-reduce:transition-none group-hover/card:translate-y-0 group-focus-within/card:translate-y-0"
                  />
                  <div className="relative z-10 flex items-end justify-between gap-8 p-8 md:p-12 [text-shadow:0_2px_16px_rgba(0,0,0,0.35)] transition-[text-shadow,color] duration-500 group-hover/card:[text-shadow:none] group-focus-within/card:[text-shadow:none]">
                    <div className="flex min-w-0 flex-col">
                      <p className="font-mono text-[14px] leading-none tracking-[1.4px] text-white/70 uppercase [text-box:trim-both_cap_alphabetic] transition-colors duration-500 group-hover/card:text-black/55 group-focus-within/card:text-black/55">
                        {study.eyebrow}
                      </p>
                      <h3 className="heading mt-4 max-w-[720px] text-[28px] leading-[1.15] text-pretty text-white [text-box:trim-end_cap_alphabetic] transition-colors duration-500 group-hover/card:text-black md:text-[32px] group-focus-within/card:text-black">
                        {study.title}
                      </h3>
                      <div className="grid max-w-[640px] grid-rows-[0fr] overflow-hidden opacity-0 transition-[grid-template-rows,opacity] duration-500 ease-out motion-reduce:transition-none group-hover/card:grid-rows-[1fr] group-hover/card:opacity-100 group-focus-within/card:grid-rows-[1fr] group-focus-within/card:opacity-100">
                        <p className="min-h-0 overflow-hidden pt-5 font-sans text-base leading-[1.5] text-pretty text-black/75">
                          {study.description}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`${projectCtaClass} pointer-events-none shrink-0 ${
                        study.locked || !study.href ? "opacity-40" : ""
                      }`}
                      aria-hidden
                    >
                      <span className="font-sans text-base font-bold leading-none">
                        {study.cta}
                      </span>
                      <span className={projectCtaCircleClass}>
                        <Icon name={study.locked ? "lock" : "arrow_forward"} />
                      </span>
                    </span>
                  </div>
                </div>
                {study.href && !study.locked ? (
                  <Link
                    href={study.href}
                    tabIndex={studyIndex === index ? 0 : -1}
                    draggable={false}
                    onDragStart={(event) => event.preventDefault()}
                    className="absolute inset-0 z-20 cursor-pointer"
                    aria-label={`${study.cta}: ${study.title}`}
                  />
                ) : null}
              </article>
            ))}
          </div>
        </div>

        <div
          className="mt-6 flex items-center justify-center gap-2"
          role="tablist"
          aria-label="Project slides"
        >
          {caseStudies.map((study, studyIndex) => {
            const selected = studyIndex === index;
            return (
              <button
                key={study.title}
                type="button"
                role="tab"
                aria-label={`Show project ${studyIndex + 1}`}
                aria-selected={selected}
                className={`h-2 rounded-full transition-[width,background-color] duration-300 ease-out motion-reduce:transition-none ${
                  selected ? "w-6 bg-blue" : "w-2 bg-black/20 hover:bg-black/35"
                }`}
                onClick={() => setIndex(studyIndex)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
