import Link from "next/link";
import { Footer } from "@/components/footer";
import { HeaderDotGrid } from "@/components/header-dot-grid";
import { Icon } from "@/components/icon";
import {
  getAdjacentCaseStudies,
  type CaseStudy,
} from "@/lib/site";

function projectHref(study: CaseStudy) {
  return study.href.startsWith("/work/") ? study.href : "/#work";
}

function NavCard({
  study,
  direction,
}: {
  study: CaseStudy;
  direction: "previous" | "next";
}) {
  const isNext = direction === "next";
  const label = isNext ? "Next project" : "Previous project";

  return (
    <Link
      href={projectHref(study)}
      className={`group flex min-w-0 items-center gap-4 rounded-[12px] border border-foreground/10 bg-gradient-to-b from-white/55 to-white/15 px-5 py-5 text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-xl transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-foreground/20 hover:from-white/80 hover:to-white/35 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_8px_20px_rgba(15,23,42,0.08)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${
        isNext ? "flex-row-reverse text-right" : "text-left"
      }`}
    >
      <span
        className="flex size-10 shrink-0 items-center justify-center rounded-full border border-foreground/10 bg-white/40 text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-md"
        aria-hidden
      >
        <Icon
          name={isNext ? "arrow_forward" : "arrow_back"}
          size={20}
          className={
            isNext
              ? "transition-transform duration-200 group-hover:translate-x-0.5"
              : "transition-transform duration-200 group-hover:-translate-x-0.5"
          }
        />
      </span>
      <div className="min-w-0">
        <p className="font-mono text-[14px] leading-normal tracking-[1.4px] text-muted uppercase">
          {label}
        </p>
        <p className="heading mt-1 text-xl text-balance text-foreground">
          {study.title}
        </p>
      </div>
    </Link>
  );
}

export function CaseStudyNav({ currentHref }: { currentHref: string }) {
  const { previous, next } = getAdjacentCaseStudies(currentHref);

  return (
    <section className="relative w-full overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-(--wash-from) via-(--wash-via)/80 to-transparent" />
        <HeaderDotGrid />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-background/80 to-background" />
      </div>
      <nav
        aria-label="Other case studies"
        className="site-width relative z-10 grid grid-cols-1 gap-6 pt-[100px] pb-[100px] md:grid-cols-2"
      >
        <NavCard study={previous} direction="previous" />
        <NavCard study={next} direction="next" />
      </nav>
      <div className="relative z-10">
        <Footer overlay />
      </div>
    </section>
  );
}
