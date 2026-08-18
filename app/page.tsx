import Image from "next/image";
import { Contact } from "@/components/contact";
import { Icon } from "@/components/icon";
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
    <div className="flex min-w-0 flex-1 flex-col items-start gap-4 border-t border-rule pt-4">
      <h3 className="heading w-full text-2xl text-foreground">{title}</h3>
      <ul className="flex flex-col items-start gap-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <Icon name="check" className="mt-px shrink-0 text-blue" />
            <span className="font-sans text-base leading-[1.5] text-foreground">
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
      <Header />

      <section className="relative bg-background">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <HeaderDotGrid />
        </div>
        <div className="site-width relative z-10 overflow-hidden">
          <div className="flex max-w-[720px] flex-col items-start gap-2.5 border-x border-black/10 bg-gradient-to-b from-[#e8f3fa]/90 to-[#e5f6f2]/90 px-8 py-16 backdrop-blur-2xl md:px-10 md:py-24">
            <p className="font-mono text-[14px] leading-normal tracking-[1.4px] text-muted uppercase">
              Senior Product Designer
            </p>
            <h1 className="heading max-w-[640px] text-[36px] text-pretty text-foreground">
              I turn product complexity into clear systems, thoughtful
              experiences, and products built to scale.
            </h1>
            <p className="font-sans text-base leading-[1.5] text-muted">
              I&apos;m Micah Fischer, an award-winning Senior Product Designer
              based in Nashville, Tennessee. I design complex digital products
              and the systems behind them, spanning product strategy, user
              experience, design systems, web, and brand.
            </p>
            <p className="font-sans text-base leading-[1.5] text-muted">
              Currently, I&apos;m the Founding Product Designer at Kimedics,
              leading design for the next generation of healthcare workforce
              management. I also partner with startups and growing organizations
              to turn complex problems into thoughtful, research-backed products
              built to scale.
            </p>
            <div className="flex items-center pt-3">
              <CopyEmailButton />
            </div>
          </div>
        </div>
      </section>

      <Projects />

      <section id="about" className="w-full scroll-mt-6">
        <div className="bg-background py-[100px]">
          <div className="site-width flex justify-center">
            <div className="flex flex-col items-center gap-6 md:flex-row md:items-center">
            <div className="relative aspect-square w-[300px] shrink-0 overflow-hidden">
              <Image
                src="/assets/portrait.png"
                alt="Illustration of Micah Fischer working at a laptop"
                width={300}
                height={300}
                className="size-full object-contain grayscale"
              />
            </div>
            <div className="flex w-full max-w-[720px] flex-col items-start gap-2.5">
              <p className="font-mono text-[14px] leading-normal tracking-[1.4px] text-muted uppercase">
                About Me
              </p>
              <h2 className="heading text-[36px] text-foreground">
                Hey there! I&apos;m Micah Fischer. 👋🏻
              </h2>
              <p className="font-sans text-base leading-[1.5] text-muted">
                I&apos;m an award-winning Senior Product Designer based in
                Nashville, designing complex digital products from strategy
                through execution.
              </p>
              <p className="font-sans text-base leading-[1.5] text-muted">
                Currently, I&apos;m the Founding Product Designer at Kimedics,
                where I lead design across a healthcare workforce management
                platform built to support the complex relationships between
                healthcare organizations, staffing agencies, and clinicians. My
                work spans product strategy, UX, design systems, and visual
                design, partnering closely with Product and Engineering to turn
                ambiguity into scalable product experiences.
              </p>
              <p className="font-sans text-base leading-[1.5] text-muted">
                Outside of Kimedics, I work with startups and growing
                organizations across product, web, and brand, helping turn early
                ideas and evolving businesses into thoughtful, well-designed
                experiences.
              </p>
            </div>
          </div>
          </div>
        </div>

        <div className="bg-surface py-[100px]">
          <div className="site-width flex flex-col items-start gap-12 lg:flex-row lg:gap-12">
            <SkillColumn title="Expertise" items={expertise} />
            <SkillColumn title="How I Work" items={howIWork} />
            <SkillColumn title="Tools & Technology" items={tools} />
          </div>
        </div>
      </section>

      <section id="resume" className="w-full scroll-mt-6 bg-background py-[100px]">
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
