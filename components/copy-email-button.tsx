"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/icon";
import { PillButton } from "@/components/pill-button";
import { RollingText } from "@/components/rolling-text";
import { EMAIL } from "@/lib/site";

type CopyEmailButtonProps = {
  className?: string;
};

export function CopyEmailButton({ className = "" }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number>(0);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  async function handleCopy() {
    setCopied(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), 2200);

    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      window.prompt("Copy email address:", EMAIL);
    }
  }

  return (
    <PillButton
      onClick={handleCopy}
      className={className}
      aria-label={copied ? "Copied!" : "Copy Email"}
    >
      <span className="sr-only" aria-live="polite">
        {copied ? "Copied!" : "Copy Email"}
      </span>
      <RollingText from="Copy Email" to="Copied!" active={copied} />
      <Icon name="mail" size={20} />
    </PillButton>
  );
}
