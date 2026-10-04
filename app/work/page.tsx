import type { Metadata } from "next";
import Link from "next/link";
import { Contact } from "@/components/contact";
import { CopyEmailButton } from "@/components/copy-email-button";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeaderDotGrid } from "@/components/header-dot-grid";
import { Icon } from "@/components/icon";
import { caseStudies } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work — Micah Fischer",
  description:
    "Case studies and selected product design work by Micah Fischer.",
};

export default function WorkPage() {
  return (
    <div className="flex min-h-full flex-col bg-background">
      <Header />

      <section className="under-header relative bg-background">
        <div className="pointer-events-none absolute inset-0 overflow-hidden [mask-image:linear-gradient(to_bottom,black,black_72%,transparent)]">
          <HeaderDotGrid tone="soft" />
        </div>
        <div className="site-width relative z-10 overflow-hidden">
          <div className="flex max-w-[680px] flex-col items-start gap-2.5 px-8 py-16 md:px-10 md:py-24">
            <p className="font-mono text-[14px] leading-normal tracking-[1.4px] text-muted uppercase">
              Micah Fischer
            </p>
            <h1 className="heading max-w-[640px] text-[36px] text-foreground">
              I’m Micah Fischer, a senior product designer in Nashville,
              Tennessee specializing healthcare UX.
            </h1>
            <p className="max-w-[680px] font-sans text-base leading-[1.5] text-muted">
              Nashville based winning senior product designer with over 6 years
              of experience in healthcare, smart home technology, and education.
              I help startups and growing businesses transform ideas into
              thoughtfully designed, research-backed product solutions.
            </p>
            <div className="flex items-center pt-3">
              <CopyEmailButton />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-background pb-[100px]">
        <div className="site-width flex flex-col gap-10">
          <div className="flex max-w-[460px] flex-col items-start gap-2.5">
            <h2 className="heading text-[36px] text-foreground">
              Case Studies
            </h2>
            <p className="font-sans text-base leading-[1.5] text-muted">
              Explore case studies and learn how I delivered successful design
              solutions for a variety of startups and growing businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2">
            {caseStudies.map((study) => (
              <article key={study.title} className="flex max-w-[680px] flex-col">
                <p className="font-mono text-[14px] leading-normal tracking-[1.4px] text-muted uppercase">
                  {study.eyebrow}
                </p>
                <h3 className="heading mt-2.5 max-w-[480px] text-2xl text-foreground">
                  {study.title}
                </h3>
                <p className="mt-2.5 max-w-[480px] font-sans text-base leading-[1.5] text-muted">
                  {study.description}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-4">
                  {study.locked || !study.href ? (
                    <span className="inline-flex h-9 items-center rounded-[4px] bg-black px-3 font-sans text-sm leading-none font-bold text-white">
                      {study.cta}
                    </span>
                  ) : (
                    <Link
                      href={study.href}
                      className="inline-flex h-9 items-center rounded-[4px] bg-black px-4 font-sans text-sm leading-none font-bold text-white"
                    >
                      {study.cta}
                    </Link>
                  )}
                  <span className="inline-flex items-center gap-2 font-mono text-[14px] leading-normal tracking-[1.4px] text-muted uppercase">
                    <Icon name="check" className="text-foreground" />
                    {study.status}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
}
