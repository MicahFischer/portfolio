import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

export const frostCircleClass =
  "group inline-flex shrink-0 items-center justify-center rounded-full border border-foreground/10 bg-gradient-to-b from-white/55 to-white/15 text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-md transition-[transform,background-color,border-color,box-shadow] duration-300 hover:scale-105 hover:border-foreground/20 hover:from-white/80 hover:to-white/35 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_8px_20px_rgba(15,23,42,0.08)] group-hover/card:border-foreground/20 group-hover/card:from-white/80 group-hover/card:to-white/35 group-hover/card:shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_8px_20px_rgba(15,23,42,0.08)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue";

export function FrostButton({
  className = "",
  children,
  ...props
}: ComponentPropsWithoutRef<"button">) {
  return (
    <button type="button" className={`${frostCircleClass} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function FrostLink({
  href,
  className = "",
  children,
  ...props
}: {
  href: string;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className" | "children">) {
  return (
    <Link href={href} className={`${frostCircleClass} ${className}`} {...props}>
      {children}
    </Link>
  );
}
