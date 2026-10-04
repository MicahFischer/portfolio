import Link from "next/link";
import { Footer } from "@/components/footer";
import { FrostLink, frostCircleClass } from "@/components/frost-button";
import { HeaderDotGrid } from "@/components/header-dot-grid";
import { Icon } from "@/components/icon";
import {
  getAdjacentCaseStudies,
  type CaseStudy,
} from "@/lib/site";

const projectsHref = "/#work";

const cardClass =
  "group/card flex min-w-0 items-center gap-4 rounded-[12px] border border-foreground/10 bg-gradient-to-b from-white/55 to-white/15 px-5 py-5 text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-xl transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-foreground/20 hover:from-white/80 hover:to-white/35 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_8px_20px_rgba(15,23,42,0.08)] motion-reduce:transition-none motion-reduce:hover:translate-y-0";

function projectHref(study: CaseStudy) {
  return study.href.startsWith("/work/") ? study.href : projectsHref;
}

export function CaseStudyBackLink() {
  return (
    <FrostLink
      href={projectsHref}
      aria-label="Back to projects"
      className="size-12"
    >
      <Icon
        name="arrow_back"
        className="transition-transform duration-300 group-hover:-translate-x-0.5"
      />
    </FrostLink>
  );
}

function NavCard({
  href,
  label,
  title,
  direction,
}: {
  href: string;
  label: string;
  title: string;
  direction: "previous" | "next";
}) {
  const isNext = direction === "next";

  return (
    <Link
      href={href}
      className={`${cardClass} ${isNext ? "flex-row-reverse text-right" : "text-left"}`}
    >
      <span className={`${frostCircleClass} size-12`} aria-hidden>
        <Icon
          name={isNext ? "arrow_forward" : "arrow_back"}
          className={
            isNext
              ? "transition-transform duration-200 group-hover/card:translate-x-0.5"
              : "transition-transform duration-200 group-hover/card:-translate-x-0.5"
          }
        />
      </span>
      <div className="min-w-0">
        <p className="font-mono text-[14px] leading-normal tracking-[1.4px] text-muted uppercase">
          {label}
        </p>
        <p className="heading mt-1 text-xl text-balance text-foreground">
          {title}
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
        <HeaderDotGrid tone="soft" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-background/80 to-background" />
      </div>
      <nav
        aria-label="Other case studies"
        className="site-width relative z-10 grid grid-cols-1 gap-6 pt-[100px] pb-[100px] md:grid-cols-2"
      >
        {previous ? (
          <NavCard
            href={projectHref(previous)}
            label="Previous project"
            title={previous.title}
            direction="previous"
          />
        ) : (
          <NavCard
            href={projectsHref}
            label="Back to projects"
            title="Selected Work"
            direction="previous"
          />
        )}
        {next ? (
          <NavCard
            href={projectHref(next)}
            label="Next project"
            title={next.title}
            direction="next"
          />
        ) : (
          <NavCard
            href={projectsHref}
            label="Back to projects"
            title="Selected Work"
            direction="next"
          />
        )}
      </nav>
      <div className="relative z-10">
        <Footer />
      </div>
    </section>
  );
}
