import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="w-full bg-background">
      <div className="site-width flex flex-col items-start justify-between gap-4 py-6 sm:flex-row sm:items-center">
        <Logo size="footer" />
        <p className="font-sans text-base leading-[1.5] text-ink sm:text-right">
          Crafted in Nashville, TN ✌🏻 • © 2026 Micah Fischer. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
