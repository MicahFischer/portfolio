import Link from "next/link";
import { CopyEmailButton } from "@/components/copy-email-button";
import { Logo } from "@/components/logo";

const nav = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#resume", label: "Resume" },
];

export function Header() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-header backdrop-blur-lg">
        <div className="site-width flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between gap-4">
            <Logo />
            <div className="md:hidden">
              <CopyEmailButton />
            </div>
          </div>
          <nav className="flex items-center gap-6" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative font-sans text-base font-bold leading-[1.5] text-ink after:absolute after:right-0 after:bottom-0 after:left-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-blue after:transition-transform after:duration-300 after:ease-out after:content-[''] hover:after:scale-x-100 focus-visible:after:scale-x-100 motion-reduce:after:transition-none"
              >
                {item.label}
              </Link>
            ))}
            <div className="hidden md:block">
              <CopyEmailButton />
            </div>
          </nav>
        </div>
      </header>
      <div className="h-[8.25rem] md:h-[5.75rem]" aria-hidden />
    </>
  );
}
