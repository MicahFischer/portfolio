import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="w-full bg-black">
      <div className="site-width flex flex-col items-start justify-between gap-4 py-6 sm:flex-row sm:items-center">
        <Logo invert />
        <p className="font-sans text-base leading-[1.5] text-white sm:text-right">
          Crafted in Nashville, TN ✌🏻 • © 2026 Micah Fischer. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
