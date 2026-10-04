import { Contact } from "@/components/contact";
import { CopyEmailButton } from "@/components/copy-email-button";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeaderDotGrid } from "@/components/header-dot-grid";
import { Projects } from "@/components/projects";
import {
  education,
  experience,
  expertise,
  howIWork,
  tools,
} from "@/lib/site";

function SkillColumn({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="flex min-w-0 flex-1 flex-col items-start gap-4 border-t border-foreground pt-4">
      <h3 className="heading w-full text-2xl text-foreground">{title}</h3>
      <ul className="flex flex-col items-start gap-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <img
              src="/assets/icon-check.svg"
              alt=""
              width={24}
              height={24}
              className="mt-px size-6 shrink-0"
            />
            <span className="font-sans text-base leading-[1.5] text-muted">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-background">
      <Header overlay />

      <section className="hero-gradient relative -mt-[8.25rem] w-full overflow-hidden pt-[calc(8.25rem+100px)] pb-[100px] md:-mt-[5.75rem] md:pt-[calc(5.75rem+100px)]">
        <div className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]">
          <HeaderDotGrid tone="inverse" mode="grid" />
        </div>
        <div className="site-width relative z-10">
          <div className="flex w-full max-w-[720px] flex-col items-start gap-4">
            <p className="font-mono text-[14px] leading-normal tracking-[1.4px] text-white uppercase">
              Senior Product Designer
            </p>
            <h1 className="heading w-full text-[40px] leading-[48px] text-pretty text-white">
              I turn product complexity into clear systems, thoughtful
              experiences, and products built to scale.
            </h1>
            <p className="w-full font-sans text-base leading-[1.5] text-white/80">
              I&apos;m Micah Fischer, a Senior Product Designer specializing in
              0→1 product design, complex B2B software, and design systems.
            </p>
            <p className="w-full font-sans text-base leading-[1.5] text-white/80">
              Currently, I&apos;m the Founding Product Designer at Kimedics,
              where I lead design for a healthcare workforce management
              platform, working across product strategy, UX, and design systems
              to turn complex workflows into products built to scale.
            </p>
            <p className="w-full font-sans text-base leading-[1.5] text-white/80">
              I also partner with startups and growing organizations on product,
              web, and brand.
            </p>
            <div className="flex items-center pt-3">
              <CopyEmailButton tone="inverse" />
            </div>
          </div>
        </div>
      </section>

      <Projects />

      <section
        id="about"
        className="w-full scroll-mt-6 bg-surface py-[100px]"
      >
        <div className="site-width flex flex-col items-start gap-8">
          <div className="flex w-full max-w-[720px] flex-col items-start gap-4">
            <p className="font-mono text-[14px] leading-normal tracking-[1.4px] text-muted uppercase">
              About Me
            </p>
            <h2 className="heading text-[40px] leading-[48px] text-foreground">
              Hey there! I&apos;m Micah Fischer. 👋🏻
            </h2>
            <p className="w-full font-sans text-base leading-[1.5] text-muted">
              I&apos;m an award-winning Senior Product Designer based in
              Nashville, designing complex digital products from strategy
              through execution.
            </p>
            <p className="w-full font-sans text-base leading-[1.5] text-muted">
              Currently, I&apos;m the Founding Product Designer at Kimedics,
              where I lead design across a healthcare workforce management
              platform built to support the complex relationships between
              healthcare organizations, staffing agencies, and clinicians. My
              work spans product strategy, UX, design systems, and visual
              design, partnering closely with Product and Engineering to turn
              ambiguity into scalable product experiences.
            </p>
            <p className="w-full font-sans text-base leading-[1.5] text-muted">
              Outside of Kimedics, I work with startups and growing
              organizations across product, web, and brand, helping turn early
              ideas and evolving businesses into thoughtful, well-designed
              experiences.
            </p>
          </div>

          <div className="flex w-full flex-col items-start gap-12 lg:flex-row lg:gap-12">
            <SkillColumn title="Expertise" items={expertise} />
            <SkillColumn title="How I Work" items={howIWork} />
            <SkillColumn title="Tools & Technology" items={tools} />
          </div>
        </div>
      </section>

      <section
        id="resume"
        className="w-full scroll-mt-6 bg-background py-[100px]"
      >
        <div className="site-width flex flex-col items-start gap-8">
        <div className="flex max-w-[640px] flex-col items-start gap-2.5">
          <p className="font-mono text-[14px] leading-normal tracking-[1.4px] text-muted uppercase">
            Career
          </p>
          <h2 className="heading text-[36px] text-foreground">
            Resume
          </h2>
          <p className="font-sans text-base leading-[1.5] text-muted">
            With over six years of experience crafting websites and digital
            products across various industries, I have the expertise to build
            solutions that enhance your brand experience.
          </p>
        </div>

        <div className="flex w-full flex-col items-start gap-6">
          <h3 className="heading w-full text-2xl text-foreground">
            Experience
          </h3>
          {experience.map((job) => (
            <article
              key={job.titles[0].role}
              className="flex w-full flex-col items-start gap-6 border-t border-rule pt-4 lg:flex-row lg:gap-12"
            >
              <div className="flex w-full shrink-0 flex-col items-start gap-2 lg:w-[360px]">
                {job.titles.map((title) => (
                  <div key={title.role} className="flex w-full flex-col gap-2">
                    <h4 className="heading text-lg text-foreground">
                      {title.role}
                    </h4>
                    <p className="font-sans text-base leading-[1.5] whitespace-pre-line text-muted">
                      {title.detail}
                    </p>
                  </div>
                ))}
              </div>
              {Array.isArray(job.description) ? (
                <div className="max-w-[800px] font-sans text-base leading-[1.5] text-muted">
                  {job.description.map((paragraph) => (
                    <p key={paragraph} className="mb-2 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ) : job.description ? (
                <p className="max-w-[800px] font-sans text-base leading-[1.5] text-muted">
                  {job.description}
                </p>
              ) : null}
            </article>
          ))}

          <h3 className="heading w-full text-2xl text-foreground">
            Education
          </h3>
          <article className="flex w-full flex-col items-start gap-6 border-t border-rule pt-4 lg:flex-row lg:gap-12">
            <div className="flex w-full shrink-0 flex-col items-start gap-2 lg:w-[360px]">
              <h4 className="heading text-lg text-foreground">
                {education.role}
              </h4>
              <p className="font-sans text-base leading-[1.5] whitespace-pre-line text-muted">
                {education.detail}
              </p>
            </div>
            <p className="max-w-[800px] font-sans text-base leading-[1.5] text-muted">
              {education.description}
            </p>
          </article>
        </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
}
