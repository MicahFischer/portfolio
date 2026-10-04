import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

const pillClass =
  "group relative inline-flex h-12 items-center gap-2.5 rounded-full border pr-4 pl-5 font-sans text-[16px] leading-none font-bold text-foreground backdrop-blur-md transition-[transform,background-color,border-color,box-shadow] duration-300 hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const pillSurface = {
  default:
    "border-foreground/10 bg-gradient-to-b from-white/55 to-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] hover:border-foreground/20 hover:from-white/80 hover:to-white/35 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_8px_20px_rgba(15,23,42,0.08)]",
  inverse:
    "border-0 backdrop-blur-none bg-gradient-to-b from-white/80 to-white/55 shadow-none hover:from-white/90 hover:to-white/65 hover:shadow-none",
};

export function PillButton({
  className = "",
  tone = "default",
  children,
  ...props
}: ComponentPropsWithoutRef<"button"> & { tone?: keyof typeof pillSurface }) {
  return (
    <button
      type="button"
      className={`${pillClass} ${pillSurface[tone]} ${className}`}
      {...props}
    >
      <span className="relative z-10 inline-flex items-center gap-2.5">
        {children}
      </span>
    </button>
  );
}

export function PillLink({
  href,
  className = "",
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link href={href} className={`${pillClass} ${pillSurface.default} ${className}`}>
      <span className="relative z-10 inline-flex items-center gap-2.5">
        {children}
      </span>
    </Link>
  );
}

export function PillStatic({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <span className={`${pillClass} ${pillSurface.default} cursor-default ${className}`}>
      <span className="relative z-10 inline-flex items-center gap-2.5">
        {children}
      </span>
    </span>
  );
}
