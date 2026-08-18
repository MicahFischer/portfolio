"use client";

import { useState } from "react";
import { Icon } from "@/components/icon";
import { PillButton } from "@/components/pill-button";
import { EMAIL } from "@/lib/site";

type CopyEmailButtonProps = {
  className?: string;
};

export function CopyEmailButton({ className = "" }: CopyEmailButtonProps) {
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
    <PillButton onClick={handleCopy} className={className}>
      <span className="btn-label">{copied ? "Copied" : "Copy Email"}</span>
      <Icon name="mail" size={20} />
    </PillButton>
  );
}
