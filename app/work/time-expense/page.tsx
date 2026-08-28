import { Fragment } from "react";
import type { Metadata } from "next";
import { FrostLink } from "@/components/frost-button";
import { Header } from "@/components/header";
import { HeaderDotGrid } from "@/components/header-dot-grid";
import { Icon } from "@/components/icon";
import { MacScreenshot } from "@/components/mac-screenshot";
import { ProblemGrid } from "@/components/problem-grid";
import { SlideUp } from "@/components/slide-up";
import { TimesheetMarquee } from "@/components/timesheet-marquee";
import { TimesheetShiftCard } from "@/components/timesheet-shift-card";
import { TimesheetViewSwitcher } from "@/components/timesheet-view-switcher";
import { CaseStudyNav } from "@/components/case-study-nav";
import { timeExpenseProject } from "@/lib/site";

export const metadata: Metadata = {
  title: "Time & Expense Entry — Micah Fischer",
  description: timeExpenseProject.overview[0],
};

function ProjectMeta({
  items,
}: {
  items: { label: string; value: string }[];
}) {
  return (
    <dl className="flex w-full max-w-[640px] flex-col gap-2">
      <div className="h-px w-full bg-foreground/20" aria-hidden />
      {items.map((item, index) => (
        <div key={item.label} className="contents">
          {index > 0 ? (
            <div
              aria-hidden
              className="h-px w-full"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to right, rgb(0 0 0 / 0.18) 0 2px, transparent 2px 4px)",
              }}
            />
          ) : null}
          <div className="flex h-6 items-center gap-1">
            <dt className="w-[100px] shrink-0 font-mono text-[14px] leading-normal tracking-[1.4px] text-muted uppercase">
              {item.label}
            </dt>
            <dd className="min-w-0 flex-1 font-sans text-base leading-[1.2] text-ink">
              {item.value}
            </dd>
          </div>
        </div>
      ))}
    </dl>
  );
}

export default function TimeExpensePage() {
  const project = timeExpenseProject;

  return (
    <div className="flex min-h-full flex-col bg-background">
      <Header />

      <section className="relative z-0 -mt-[8.25rem] w-full overflow-hidden bg-background pt-[calc(8.25rem+100px)] pb-12 md:-mt-[5.75rem] md:pt-[calc(5.75rem+100px)]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-(--wash-from) via-(--wash-via)/80 to-transparent" />
          <HeaderDotGrid />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background" />
        </div>
        <div className="site-width relative z-10 flex flex-col items-start gap-8">
          <SlideUp className="flex w-full max-w-[720px] flex-col gap-8">
            <div className="flex flex-col items-start gap-2.5">
              <div className="flex items-center gap-3">
                <FrostLink
                  href="/#work"
                  aria-label="Back to projects"
                  className="size-10"
                >
                  <Icon
                    name="arrow_back"
                    className="transition-transform duration-300 group-hover:-translate-x-0.5"
                  />
                </FrostLink>
                <p className="font-mono text-[14px] leading-normal tracking-[1.4px] text-muted uppercase">
                  {project.eyebrow}
                </p>
              </div>
              <h1 className="heading max-w-[640px] text-[36px] text-pretty text-foreground">
                {project.title}
              </h1>
              {project.overview.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="max-w-[720px] font-sans text-base leading-[1.5] text-muted"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <ProjectMeta items={project.meta} />
          </SlideUp>
        </div>
      </section>

      <section className="relative z-[1] w-full bg-background">
        <div className="mx-auto w-full max-w-[1600px] px-6">
          <MacScreenshot
            parallax
            image={project.image}
            alt="Timesheet overview showing shift counts, hours, expenses, and approval status."
          />
        </div>
      </section>

      <section className="relative z-10 -mt-32 w-full bg-surface md:-mt-48">
        <ProblemGrid
          eyebrow={project.problem.eyebrow}
          title={project.problem.title}
          points={project.problem.points}
        />
      </section>

      {project.solutions.map((solution, index) => (
        <Fragment key={solution.eyebrow}>
          <section className="w-full bg-background py-[100px]">
            <div className="site-width flex flex-col gap-12 lg:flex-row lg:items-center">
              <div className="flex min-w-0 flex-1 flex-col items-start gap-2.5">
                <p className="font-mono text-[14px] leading-normal tracking-[1.4px] text-muted uppercase">
                  {solution.eyebrow}
                </p>
                <h2 className="heading max-w-[540px] text-[36px] text-balance text-foreground">
                  {solution.title}
                </h2>
                {solution.body.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="max-w-[720px] font-sans text-base leading-[1.5] text-muted"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              {index === 0 ? <TimesheetMarquee /> : null}
              {index === 1 ? (
                <div className="w-full min-w-0 max-w-[480px] lg:shrink-0">
                  <TimesheetShiftCard />
                </div>
              ) : null}
            </div>
          </section>
          {index === 0 ? (
            <section className="w-full bg-surface py-[100px]">
              <div className="site-width">
                <TimesheetViewSwitcher
                  eyebrow={project.views.eyebrow}
                  title={project.views.title}
                  details={project.views.details}
                  descriptions={project.views.descriptions}
                />
              </div>
            </section>
          ) : null}
        </Fragment>
      ))}

      <CaseStudyNav currentHref="/work/time-expense" />
    </div>
  );
}
