"use client";

import { useState } from "react";
import { Icon } from "@/components/icon";
import { EMAIL } from "@/lib/site";

export function EmailCard({
  className,
  tone = "default",
}: {
  className: string;
  tone?: "default" | "inverse";
}) {
  const [copied, setCopied] = useState(false);
  const onInverse = tone === "inverse";

  async function handleCopy() {
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);

    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      window.prompt("Copy email address:", EMAIL);
    }
  }

  return (
    <button type="button" onClick={handleCopy} className={className}>
      <img
        src="/assets/icon-mail.svg"
        alt=""
        width={48}
        height={48}
        className={`size-12 ${onInverse ? "brightness-0 invert" : ""}`}
      />
      <span className="flex w-full max-w-[250px] flex-col items-start gap-1">
        <span
          className={`heading text-2xl ${onInverse ? "text-white" : "text-foreground"}`}
        >
          Send me an email
        </span>
        <span className="inline-flex items-center gap-1">
          <span
            className={`font-sans text-base leading-[1.2] [text-box:trim-both_cap_alphabetic] ${onInverse ? "text-white/80" : "text-muted"}`}
          >
            {copied ? "Copied to clipboard" : EMAIL}
          </span>
          <Icon
            name="content_copy"
            size={24}
            className={onInverse ? "text-white" : "text-foreground"}
          />
        </span>
      </span>
    </button>
  );
}
