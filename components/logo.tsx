import Link from "next/link";

type LogoProps = {
  size?: "header" | "footer";
};

export function Logo({ size = "header" }: LogoProps) {
  const isHeader = size === "header";

  return (
    <Link
      href="/"
      aria-label="Micah Fischer, Product Designer"
      className="relative block shrink-0"
      style={
        isHeader
          ? { width: 180, height: 43 }
          : { width: 152, height: 36 }
      }
    >
      <img
        src={isHeader ? "/assets/logo-name.svg" : "/assets/logo-name-sm.svg"}
        alt="Micah Fischer"
        width={isHeader ? 180 : 152}
        height={isHeader ? 27 : 23}
        className="absolute top-0 left-0 h-auto max-w-none"
      />
      <img
        src={isHeader ? "/assets/logo-title.svg" : "/assets/logo-title-sm.svg"}
        alt=""
        width={isHeader ? 147 : 124}
        height={isHeader ? 10 : 8}
        className="absolute max-w-none"
        style={
          isHeader
            ? { top: 33, left: 16 }
            : { top: 28, left: 14 }
        }
      />
    </Link>
  );
}
