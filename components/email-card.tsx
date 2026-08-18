"use client";

import { useState } from "react";
import { HoverFillBar } from "@/components/hover-fill-bar";
import { Icon } from "@/components/icon";
import { EMAIL } from "@/lib/site";

export function EmailCard() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy email address:", EMAIL);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="group relative flex w-full cursor-pointer items-start gap-4 pt-6 pb-12 text-left"
    >
      <HoverFillBar />
      <Icon name="mail" size={32} className="shrink-0 text-foreground" />
      <span className="flex flex-col items-start gap-1">
        <span className="heading text-2xl text-foreground">Send me an email</span>
        <span className="inline-flex items-center gap-1">
          <span className="font-sans text-base leading-[1.2] font-medium text-blue">
            {copied ? "Copied to clipboard" : EMAIL}
          </span>
          <Icon name="content_copy" className="text-blue" />
        </span>
      </span>
    </button>
  );
}
