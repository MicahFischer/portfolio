import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

const pillClass =
  "group relative inline-flex h-12 items-center gap-2.5 overflow-hidden rounded-full bg-blue pr-4 pl-5 font-sans text-[16px] leading-none font-bold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue";

function WipeFill() {
  return (
    <span
      aria-hidden
      className="absolute inset-0 origin-left scale-x-0 bg-[#146298] transition-transform duration-500 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none"
    />
  );
}

export function PillButton({
  className = "",
  children,
  ...props
}: ComponentPropsWithoutRef<"button">) {
  return (
    <button type="button" className={`${pillClass} ${className}`} {...props}>
      <WipeFill />
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
    <Link href={href} className={`${pillClass} ${className}`}>
      <WipeFill />
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
    <span className={`${pillClass} cursor-default ${className}`}>
      <span className="relative z-10 inline-flex items-center gap-2.5">
        {children}
      </span>
    </span>
  );
}
