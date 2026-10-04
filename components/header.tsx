"use client";

import Link from "next/link";
import { useLayoutEffect, useState } from "react";
import { CopyEmailButton } from "@/components/copy-email-button";
import { Logo } from "@/components/logo";

const nav = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#resume", label: "Resume" },
];

export function Header({ overlay = false }: { overlay?: boolean }) {
  const [overHero, setOverHero] = useState(overlay);

  useLayoutEffect(() => {
    if (!overlay) return;

    const heroNode = document.querySelector(".hero-gradient");
    if (!(heroNode instanceof HTMLElement)) return;
    const heroEl: HTMLElement = heroNode;

    function update() {
      const header = document.querySelector("header");
      const headerHeight = header?.getBoundingClientRect().height ?? 0;
      const next = heroEl.getBoundingClientRect().bottom > headerHeight;
      setOverHero((current) => (current === next ? current : next));
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [overlay]);

  const onHero = overlay && overHero;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300 motion-reduce:transition-none ${
          onHero
            ? "border-transparent bg-transparent"
            : "border-black/5 bg-white/75 backdrop-blur-xl"
        }`}
      >
        {onHero ? (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-[calc(100%+2.75rem)] backdrop-blur-sm [mask-image:linear-gradient(to_bottom,black_68%,transparent)]"
          />
        ) : null}
        <div className="site-width relative z-10 flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between gap-4">
            <Logo invert={onHero} />
            <div className="md:hidden">
              <CopyEmailButton tone={onHero ? "inverse" : "default"} />
            </div>
          </div>
          <nav className="flex items-center gap-6" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative font-sans text-base font-semibold leading-[1.5] transition-colors duration-300 after:absolute after:right-0 after:bottom-0 after:left-0 after:h-0.5 after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:ease-out after:content-[''] hover:after:scale-x-100 focus-visible:after:scale-x-100 motion-reduce:transition-none motion-reduce:after:transition-none ${
                  onHero
                    ? "text-white after:bg-white"
                    : "text-foreground after:bg-accent"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="hidden md:block">
              <CopyEmailButton tone={onHero ? "inverse" : "default"} />
            </div>
          </nav>
        </div>
      </header>
      <div className="h-[8.25rem] md:h-[5.75rem]" aria-hidden />
    </>
  );
}
