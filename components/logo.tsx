import Link from "next/link";

type LogoProps = {
  size?: "header" | "footer";
  invert?: boolean;
};

export function Logo({ size = "header", invert = false }: LogoProps) {
  const isHeader = size === "header";
  const nameSrc = invert
    ? "/assets/logo-name-white.svg"
    : isHeader
      ? "/assets/logo-name.svg"
      : "/assets/logo-name-sm.svg";
  const titleSrc = invert
    ? "/assets/logo-title-white.svg"
    : isHeader
      ? "/assets/logo-title.svg"
      : "/assets/logo-title-sm.svg";

  return (
    <Link
      href="/"
      aria-label="Micah Fischer, Product Designer"
      className="relative block shrink-0"
      style={
        isHeader || invert
          ? { width: 180, height: 43 }
          : { width: 152, height: 36 }
      }
    >
      <img
        src={nameSrc}
        alt="Micah Fischer"
        width={invert || isHeader ? 180 : 152}
        height={invert || isHeader ? 27.311 : 23}
        className="absolute top-0 left-0 h-auto max-w-none"
      />
      <img
        src={titleSrc}
        alt=""
        width={invert || isHeader ? 147.221 : 124}
        height={invert || isHeader ? 9.822 : 8}
        className="absolute max-w-none"
        style={
          invert
            ? { top: 32.93, left: 16.38 }
            : isHeader
              ? { top: 33, left: 16 }
              : { top: 28, left: 14 }
        }
      />
    </Link>
  );
}
