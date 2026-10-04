"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type MouseEvent,
  type PointerEvent,
} from "react";
import { FrostButton, frostCircleClass } from "@/components/frost-button";
import { Icon } from "@/components/icon";
import { MacScreenshot } from "@/components/mac-screenshot";
import { caseStudies } from "@/lib/site";
import Link from "next/link";

const projectCtaClass =
  "pointer-events-none absolute right-5 bottom-5 z-10 size-12";

const arrowClass =
  "absolute top-1/2 z-20 size-12 -translate-y-1/2";

const last = caseStudies.length - 1;

function rubber(delta: number, index: number) {
  if (index <= 0 && delta > 0) return delta * 0.32;
  if (index >= last && delta < 0) return delta * 0.32;
  return delta;
}

const screenshotSlotClass =
  "pointer-events-none absolute top-6 left-6 w-[108%] md:top-8 md:left-8";

export function Projects() {
  const [index, setIndex] = useState(0);
  const [imageIn, setImageIn] = useState(false);
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

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setImageIn(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setImageIn(true);
        observer.disconnect();
      },
      { threshold: 0.28 },
    );

    observer.observe(viewport);
    return () => observer.disconnect();
  }, []);

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
    <section id="work" className="w-full scroll-mt-6 bg-background py-[100px]">
      <div className="site-width">
        <div className="flex w-full max-w-[480px] flex-col items-start gap-4">
          <p className="font-mono text-[14px] leading-normal tracking-[1.4px] text-black uppercase">
            Selected Work
          </p>
          <h2 className="heading text-[40px] leading-[48px] text-black">
            Projects
          </h2>
        </div>
      </div>

      <div className="relative mt-8">
        {index > 0 ? (
          <FrostButton
            className={`${arrowClass} left-[max(4px,calc((100%-1400px)/2+8px))] md:left-[max(8px,calc((100%-1400px)/2+8px))]`}
            aria-label="Previous project"
            onClick={() => setIndex((current) => Math.max(0, current - 1))}
          >
            <Icon
              name="chevron_left"
              className="transition-transform duration-300 group-hover:-translate-x-0.5"
            />
          </FrostButton>
        ) : null}
        {index < last ? (
          <FrostButton
            className={`${arrowClass} right-[max(4px,calc((100%-1400px)/2+8px))] md:right-[max(8px,calc((100%-1400px)/2+8px))]`}
            aria-label="Next project"
            onClick={() => setIndex((current) => Math.min(last, current + 1))}
          >
            <Icon
              name="chevron_right"
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </FrostButton>
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
                className={`group/card relative h-[min(80vh,720px)] w-full shrink-0 basis-full overflow-hidden rounded-[16px] border-[1.5px] border-black/15 bg-background select-none ${
                  study.locked || !study.href ? "" : "cursor-pointer"
                }`}
                data-cursor={
                  study.locked || !study.href ? undefined : "pointer"
                }
                data-cursor-label={
                  study.locked || !study.href ? undefined : study.cta
                }
              >
                {study.image ? (
                  <div
                    className={`${screenshotSlotClass} ${imageIn ? "slide-up" : "translate-y-7 opacity-0"}`}
                  >
                    <MacScreenshot image={study.image} alt="" />
                  </div>
                ) : null}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 from-0% via-black/50 via-[34%] to-transparent to-[68%]"
                />
                <div className="absolute inset-x-0 bottom-0">
                  <div
                    aria-hidden
                    className="absolute inset-0 translate-y-full bg-white/85 backdrop-blur-sm transition-transform duration-500 ease-out motion-reduce:transition-none group-hover/card:translate-y-0 group-focus-within/card:translate-y-0"
                  />
                  <div className="relative z-10 flex flex-col items-start p-9 [text-shadow:0_2px_16px_rgba(0,0,0,0.35)] transition-[text-shadow,color] duration-500 group-hover/card:[text-shadow:none] group-focus-within/card:[text-shadow:none]">
                    <div className="flex items-center gap-1">
                      <img
                        src="/assets/icon-rocket-launch.svg"
                        alt=""
                        width={24}
                        height={24}
                        className="size-6 invert transition-[filter] duration-500 group-hover/card:invert-0 group-focus-within/card:invert-0"
                      />
                      <p className="font-mono text-[14px] leading-none tracking-[1.4px] text-white uppercase [text-box:trim-both_cap_alphabetic] transition-colors duration-500 group-hover/card:text-black group-focus-within/card:text-black">
                        {study.status}
                      </p>
                    </div>
                    <h3 className="heading mt-2 max-w-[720px] text-[28px] leading-[38px] text-pretty text-white transition-colors duration-500 group-hover/card:text-black group-focus-within/card:text-black">
                      {study.title}
                    </h3>
                    <div className="grid max-w-[640px] grid-rows-[0fr] overflow-hidden opacity-0 transition-[grid-template-rows,opacity] duration-500 ease-out motion-reduce:transition-none group-hover/card:grid-rows-[1fr] group-hover/card:opacity-100 group-focus-within/card:grid-rows-[1fr] group-focus-within/card:opacity-100">
                      <p className="min-h-0 overflow-hidden pt-2 font-sans text-base leading-[1.5] text-pretty text-black/80">
                        {study.description}
                      </p>
                    </div>
                  </div>
                </div>
                <span
                  className={`${frostCircleClass} ${projectCtaClass} ${
                    study.locked || !study.href ? "opacity-40" : ""
                  }`}
                  aria-hidden
                >
                  <Icon
                    name={study.locked ? "lock" : "arrow_forward"}
                    className={
                      study.locked
                        ? undefined
                        : "transition-transform duration-300 group-hover/card:translate-x-0.5"
                    }
                  />
                </span>
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
                  selected ? "w-6 bg-black" : "w-2 bg-foreground/20 hover:bg-foreground/35"
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
