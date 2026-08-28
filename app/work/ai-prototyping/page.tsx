import type { Metadata } from "next";
import { CoverageMatrix } from "@/components/coverage-matrix";
import { FrostLink } from "@/components/frost-button";
import { Header } from "@/components/header";
import { HeaderDotGrid } from "@/components/header-dot-grid";
import { Icon } from "@/components/icon";
import { MacScreenshot } from "@/components/mac-screenshot";
import { Reveal } from "@/components/reveal";
import { SlideUp } from "@/components/slide-up";
import { SystemExtensionDiagram } from "@/components/system-extension-diagram";
import { CaseStudyNav } from "@/components/case-study-nav";
import { aiPrototypingProject } from "@/lib/site";

type IconPoint = {
  icon?: string;
  title: string;
  body: string;
};

function IconPointGrid({ points }: { points: IconPoint[] }) {
  return (
    <ul className="grid w-full grid-cols-1 gap-8 md:grid-cols-3">
      {points.map((point, index) => (
        <li key={point.title}>
          <Reveal
            delay={index * 90}
            className="flex flex-col items-start gap-2 border-t border-foreground pt-5"
          >
            {point.icon ? (
              <img
                src={point.icon}
                alt=""
                width={48}
                height={48}
                className="block size-12"
              />
            ) : null}
            <h3 className="heading text-2xl text-balance text-foreground">
              {point.title}
            </h3>
            <p className="font-sans text-base leading-[1.5] text-pretty text-muted">
              {point.body}
            </p>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}

export const metadata: Metadata = {
  title: "AI Prototyping System — Micah Fischer",
  description: aiPrototypingProject.lead,
};

export default function AiPrototypingPage() {
  const project = aiPrototypingProject;

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
          <div className="flex w-full max-w-[720px] flex-col gap-8">
            <div className="flex flex-col items-start gap-2.5">
              <SlideUp className="flex items-center gap-3">
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
              </SlideUp>
              <SlideUp delay={90}>
                <h1 className="heading max-w-[640px] text-[36px] text-pretty text-foreground">
                  {project.title}
                </h1>
              </SlideUp>
              <SlideUp delay={180}>
                <p className="max-w-[720px] font-sans text-[20px] leading-[1.5] text-ink">
                  {project.lead}
                </p>
              </SlideUp>
              {project.overview.map((paragraph, index) => (
                <SlideUp key={paragraph.slice(0, 40)} delay={270 + index * 90}>
                  <p className="max-w-[720px] font-sans text-base leading-[1.5] text-muted">
                    {paragraph}
                  </p>
                </SlideUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-[1] w-full bg-background">
        <div className="mx-auto w-full max-w-[1600px] px-6">
          <MacScreenshot
            parallax
            image={project.image}
            alt="Kimedics design system Colors page showing semantic brand and text tokens."
          />
        </div>
      </section>

      <section className="relative z-10 -mt-32 w-full bg-surface md:-mt-48">
        <div className="site-width py-[100px]">
          <div className="flex max-w-[720px] flex-col items-start gap-2.5">
            <Reveal>
              <p className="font-mono text-[14px] leading-normal tracking-[1.4px] text-muted uppercase">
                {project.role.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="heading max-w-[540px] text-[36px] text-pretty text-foreground">
                {project.role.title}
              </h2>
            </Reveal>
            <Reveal delay={180}>
              <p className="font-sans text-base leading-[1.5] text-muted">
                {project.role.intro}
              </p>
            </Reveal>
            <Reveal delay={270}>
              <ul className="list-disc space-y-1 pl-6 font-sans text-base leading-[1.5] text-muted marker:text-muted">
                {project.role.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={360}>
              <p className="font-sans text-base leading-[1.5] text-muted">
                {project.role.closing}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="w-full bg-background py-[100px]">
        <div className="site-width flex flex-col items-start gap-2.5">
          <Reveal>
            <p className="font-mono text-[14px] leading-normal tracking-[1.4px] text-muted uppercase">
              {project.challenges.eyebrow}
            </p>
          </Reveal>
          <IconPointGrid points={project.challenges.points} />
        </div>
      </section>

      <section className="w-full bg-surface pt-[100px] pb-12">
        <div className="site-width flex flex-col items-start gap-8">
          <div className="flex max-w-[640px] flex-col items-start gap-2.5">
            <Reveal>
              <p className="font-mono text-[14px] leading-normal tracking-[1.4px] text-muted uppercase">
                {project.solution.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="heading max-w-[640px] text-[36px] text-pretty text-foreground">
                {project.solution.title}
              </h2>
            </Reveal>
            {project.solution.body.map((paragraph, index) => (
              <Reveal key={paragraph.slice(0, 40)} delay={180 + index * 90}>
                <p
                  className={`font-sans text-base leading-[1.5] text-muted ${
                    index === project.solution.body.length - 1 ? "font-bold" : ""
                  }`}
                >
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
          <IconPointGrid points={project.solution.points} />
        </div>
      </section>

      <section className="relative z-[1] w-full bg-surface">
        <div className="mx-auto w-full max-w-[1600px] px-6">
          <MacScreenshot
            parallax
            animateIn={false}
            image="/assets/project-ai-jobs.jpg"
            alt="Kimedics Jobs, Staff Applicants, and Assignments records for a hospitalist posting, with status badges and workflow steppers."
          />
        </div>
      </section>

      <section className="relative z-10 -mt-32 w-full bg-background py-[100px] md:-mt-48">
        <div className="site-width flex flex-col items-start gap-16 lg:flex-row lg:items-center">
          <div className="flex min-w-0 w-full max-w-[640px] flex-1 flex-col items-start gap-2">
            <Reveal>
              <p className="font-mono text-[14px] leading-normal tracking-[1.4px] text-muted uppercase">
                {project.process.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="heading text-[36px] text-pretty text-foreground">
                {project.process.title}
              </h2>
            </Reveal>
            <Reveal delay={180}>
              <ol className="list-decimal space-y-1 pl-6 font-sans text-base leading-[1.5] text-pretty text-muted marker:text-muted">
                {project.process.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </Reveal>
            <Reveal delay={270}>
              <p className="font-sans text-base leading-[1.5] text-pretty text-muted">
                {project.process.closing}
              </p>
            </Reveal>
          </div>
          <div className="flex w-full max-w-[520px] flex-col gap-4 lg:shrink-0">
            {project.process.outcomes.map((outcome, index) => (
              <Reveal
                key={outcome.title}
                delay={index * 90}
                className="flex flex-col items-start gap-2 border-l border-foreground py-2 pl-5"
              >
                <h3 className="heading text-2xl text-balance text-foreground">
                  {outcome.title}
                </h3>
                <p className="font-sans text-base leading-[1.5] text-pretty text-muted">
                  {outcome.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-surface pt-[100px] pb-12">
        <div className="site-width flex flex-col items-start gap-12 lg:flex-row lg:items-center">
          <div className="flex min-w-0 w-full max-w-[720px] flex-1 flex-col items-start gap-2.5">
            <Reveal>
              <p className="font-mono text-[14px] leading-normal tracking-[1.4px] text-muted uppercase">
                {project.example.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="heading max-w-[640px] text-[36px] text-pretty text-foreground">
                {project.example.title}
              </h2>
            </Reveal>
            {project.example.opening.map((paragraph, index) => (
              <Reveal key={paragraph.slice(0, 40)} delay={180 + index * 90}>
                <p className="font-sans text-base leading-[1.5] text-pretty text-muted">
                  {paragraph}
                </p>
              </Reveal>
            ))}
            <Reveal delay={360}>
              <ul className="list-disc space-y-1 pl-6 font-sans text-base leading-[1.5] text-muted marker:text-muted">
                {project.example.options.map((option) => (
                  <li key={option}>{option}</li>
                ))}
              </ul>
            </Reveal>
            {project.example.closing.map((paragraph, index) => (
              <Reveal key={paragraph.slice(0, 40)} delay={450 + index * 90}>
                <p className="font-sans text-base leading-[1.5] text-pretty text-muted">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120} className="w-full min-w-0 max-w-[640px] lg:shrink-0">
            <CoverageMatrix />
          </Reveal>
        </div>
      </section>

      <section className="relative z-[1] w-full bg-surface">
        <div className="mx-auto w-full max-w-[1600px] px-6">
          <MacScreenshot
            parallax
            animateIn={false}
            image="/assets/project-ai-planning.jpg"
            alt="Kimedics Planning coverage matrix grouped by labor category and specialty, with applicant headcount mix and monthly coverage-gap hours."
          />
        </div>
      </section>

      <section className="relative z-10 -mt-32 w-full bg-background py-[100px] md:-mt-48">
        <div className="site-width">
          <div className="flex max-w-[640px] flex-col items-start gap-2.5">
            <Reveal>
              <p className="font-mono text-[14px] leading-normal tracking-[1.4px] text-muted uppercase">
                {project.results.eyebrow}
              </p>
            </Reveal>
            <Reveal
              delay={90}
              className="flex w-full flex-col items-start gap-2 border-t border-foreground pt-5"
            >
              <h2 className="heading text-2xl text-balance text-foreground">
                {project.results.title}
              </h2>
              <p className="font-sans text-base leading-[1.5] text-pretty text-muted">
                {project.results.intro}
              </p>
              <p className="font-sans text-base leading-[1.5] text-pretty text-muted">
                {project.results.represented}
              </p>
              <ul className="list-disc space-y-1 pl-6 font-sans text-base leading-[1.5] text-muted marker:text-muted">
                {project.results.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <p className="font-sans text-base leading-[1.5] text-pretty text-muted">
                {project.results.closing}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="w-full bg-surface py-[100px]">
        <div className="site-width flex flex-col items-start gap-2.5">
          <Reveal>
            <p className="font-mono text-[14px] leading-normal tracking-[1.4px] text-muted uppercase">
              {project.impact.eyebrow}
            </p>
          </Reveal>
          <IconPointGrid points={project.impact.points} />
        </div>
      </section>

      <section className="w-full bg-background py-[100px]">
        <div className="site-width flex flex-col items-start gap-12 lg:flex-row lg:items-center">
          <div className="flex min-w-0 w-full max-w-[640px] flex-col items-start gap-2.5 lg:shrink-0">
            <Reveal>
              <p className="font-mono text-[14px] leading-normal tracking-[1.4px] text-muted uppercase">
                {project.extension.eyebrow}
              </p>
            </Reveal>
            <Reveal
              delay={90}
              className="flex w-full flex-col items-start gap-2 border-t border-foreground pt-5"
            >
              {project.extension.body.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="font-sans text-base leading-[1.5] text-pretty text-muted"
                >
                  {paragraph}
                </p>
              ))}
            </Reveal>
          </div>
          <Reveal delay={160} className="w-full min-w-0 flex-1">
            <SystemExtensionDiagram />
          </Reveal>
        </div>
      </section>

      <CaseStudyNav currentHref="/work/ai-prototyping" />
    </div>
  );
}
