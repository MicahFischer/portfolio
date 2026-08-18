import { EmailCard } from "@/components/email-card";
import { HeaderDotGrid } from "@/components/header-dot-grid";
import { HoverFillBar } from "@/components/hover-fill-bar";
import { Icon } from "@/components/icon";
import { LINKEDIN_LABEL, LINKEDIN_URL } from "@/lib/site";

export function Contact() {
  return (
    <section className="relative w-full bg-background">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <HeaderDotGrid />
      </div>
      <div className="site-width relative z-10">
        <div className="flex max-w-[720px] flex-col items-start gap-2.5 border-x border-black/10 bg-gradient-to-b from-[#e8f3fa]/90 to-[#e5f6f2]/90 px-8 pt-16 pb-12 backdrop-blur-2xl md:px-10 md:pt-24 md:pb-16">
          <div className="flex w-full flex-col items-start gap-2.5">
            <p className="font-mono text-[14px] leading-normal tracking-[1.4px] text-muted uppercase">
              About Me
            </p>
            <h2 className="heading text-[36px] text-foreground">Say hello! 👋🏻</h2>
            <p className="max-w-[32rem] font-sans text-base leading-[1.5] text-pretty text-ink">
              I’m always on the lookout for new projects and opportunities - or
              to connect with other creatives, builders and makers.
            </p>
          </div>

          <div className="mt-6 flex w-[320px] max-w-full flex-col">
            <EmailCard />

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex w-full cursor-pointer items-start gap-4 pt-6"
            >
              <HoverFillBar />
              <Icon name="open_in_new" size={32} className="shrink-0 text-foreground" />
              <span className="flex min-w-0 flex-col items-start gap-1">
                <span className="heading text-2xl text-foreground">
                  Connect on Linkedin
                </span>
                <span className="inline-flex items-center gap-1">
                  <span className="font-sans text-base leading-[1.2] font-medium text-blue">
                    {LINKEDIN_LABEL}
                  </span>
                  <Icon name="open_in_new" className="text-blue" />
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
