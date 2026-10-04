import { EmailCard } from "@/components/email-card";
import { HeaderDotGrid } from "@/components/header-dot-grid";
import { Icon } from "@/components/icon";
import { LINKEDIN_LABEL, LINKEDIN_URL } from "@/lib/site";

const contactCardClass =
  "flex w-full min-w-0 flex-1 cursor-pointer flex-col items-start gap-4 border-t border-white/40 p-4 text-left text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

export function Contact() {
  return (
    <section className="hero-gradient relative w-full overflow-hidden py-[100px]">
      <div className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]">
        <HeaderDotGrid tone="inverse" mode="grid" />
      </div>
      <div className="site-width relative z-10 flex flex-col items-start gap-12 lg:flex-row">
        <div className="flex w-full max-w-[480px] shrink-0 flex-col items-start gap-4">
          <p className="font-mono text-[14px] leading-normal tracking-[1.4px] text-white uppercase">
            Contact Me
          </p>
          <h2 className="heading text-[40px] leading-[48px] text-white">
            Say hello! 👋🏻
          </h2>
          <p className="w-full font-sans text-base leading-[1.5] text-white/80">
            I&apos;m always on the lookout for new projects and opportunities -
            or to connect with other creatives, builders and makers.
          </p>
        </div>

        <EmailCard className={contactCardClass} tone="inverse" />

        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={contactCardClass}
        >
          <img
            src="/assets/icon-open-in-new.svg"
            alt=""
            width={48}
            height={48}
            className="size-12 brightness-0 invert"
          />
          <span className="flex w-full max-w-[250px] flex-col items-start gap-1">
            <span className="heading text-2xl text-white">
              Connect on Linkedin
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="font-sans text-base leading-[1.2] text-white/80 [text-box:trim-both_cap_alphabetic]">
                {LINKEDIN_LABEL}
              </span>
              <Icon name="open_in_new" size={24} className="text-white" />
            </span>
          </span>
        </a>
      </div>
    </section>
  );
}
