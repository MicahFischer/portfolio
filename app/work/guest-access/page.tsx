import type { Metadata } from "next";
import { CaseStudyBackLink, CaseStudyNav } from "@/components/case-study-nav";
import { Header } from "@/components/header";
import { HeaderDotGrid } from "@/components/header-dot-grid";
import { GuestListScreen } from "@/components/guest-list-screen";
import { Reveal } from "@/components/reveal";
import { SlideUp } from "@/components/slide-up";
import { guestAccessProject } from "@/lib/site";

export const metadata: Metadata = {
  title: "Guest Access — Micah Fischer",
  description: guestAccessProject.overview[0],
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

export default function GuestAccessPage() {
  const project = guestAccessProject;

  return (
    <div className="flex min-h-full flex-col bg-background">
      <Header />

      <section className="relative z-0 -mt-[8.25rem] w-full overflow-hidden bg-background pt-[calc(8.25rem+100px)] pb-12 md:-mt-[5.75rem] md:pt-[calc(5.75rem+100px)]">
        <div className="pointer-events-none absolute inset-0">
          <HeaderDotGrid tone="soft" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background" />
        </div>
        <div className="site-width relative z-10 flex flex-col items-start gap-8">
          <div className="flex w-full max-w-[720px] flex-col gap-8">
            <div className="flex flex-col items-start gap-2.5">
              <SlideUp className="flex items-center gap-3">
                <CaseStudyBackLink />
                <p className="font-mono text-[14px] leading-normal tracking-[1.4px] text-muted uppercase">
                  {project.eyebrow}
                </p>
              </SlideUp>
              <SlideUp delay={90}>
                <h1 className="heading max-w-[640px] text-[36px] text-pretty text-foreground">
                  {project.title}
                </h1>
              </SlideUp>
              {project.overview.map((paragraph, index) => (
                <SlideUp key={paragraph.slice(0, 40)} delay={180 + index * 90}>
                  <p className="max-w-[720px] font-sans text-base leading-[1.5] text-muted">
                    {paragraph}
                  </p>
                </SlideUp>
              ))}
            </div>
            <SlideUp delay={180 + project.overview.length * 90}>
              <ProjectMeta items={project.meta} />
            </SlideUp>
          </div>
        </div>
      </section>

      <section className="relative z-10 w-full bg-surface py-[100px]">
        <div className="site-width flex flex-col items-start gap-2.5">
          <Reveal>
            <p className="font-mono text-[14px] leading-normal tracking-[1.4px] text-muted uppercase">
              {project.challenges.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={90}>
            <h2 className="heading max-w-[640px] text-[36px] text-pretty text-foreground">
              {project.challenges.title}
            </h2>
          </Reveal>
          {project.challenges.body.map((paragraph, index) => (
            <Reveal key={paragraph.slice(0, 40)} delay={180 + index * 90}>
              <p className="max-w-[720px] font-sans text-base leading-[1.5] text-pretty text-muted">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="w-full bg-background py-[100px]">
        <div className="site-width flex flex-col items-start gap-2.5">
          <Reveal>
            <p className="font-mono text-[14px] leading-normal tracking-[1.4px] text-muted uppercase">
              {project.solution.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={90}>
            <h2 className="heading max-w-[540px] text-[36px] text-pretty text-foreground">
              {project.solution.title}
            </h2>
          </Reveal>
          {project.solution.body.map((paragraph, index) => (
            <Reveal key={paragraph.slice(0, 40)} delay={180 + index * 90}>
              <p className="max-w-[720px] font-sans text-base leading-[1.5] text-pretty text-muted">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="w-full bg-surface py-[100px]">
        <div className="site-width flex flex-col items-start gap-12 lg:flex-row lg:items-center lg:gap-16">
          <div className="flex min-w-0 w-full max-w-[640px] flex-1 flex-col items-start gap-2.5">
            <Reveal>
              <p className="font-mono text-[14px] leading-normal tracking-[1.4px] text-muted uppercase">
                {project.guestManagement.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="heading max-w-[640px] text-[36px] text-pretty text-foreground">
                {project.guestManagement.title}
              </h2>
            </Reveal>
            {project.guestManagement.body.map((paragraph, index) => (
              <Reveal key={paragraph.slice(0, 40)} delay={180 + index * 90}>
                <p className="max-w-[720px] font-sans text-base leading-[1.5] text-pretty text-muted">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120} className="w-full min-w-0 max-w-[320px] lg:shrink-0">
            <GuestListScreen />
          </Reveal>
        </div>
      </section>

      <CaseStudyNav currentHref="/work/guest-access" />
    </div>
  );
}
