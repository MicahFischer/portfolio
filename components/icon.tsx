export type IconName =
  | "arrow_back"
  | "arrow_forward"
  | "lock"
  | "mail"
  | "open_in_new"
  | "content_copy"
  | "check"
  | "chevron_left"
  | "chevron_right"
  | "warning"
  | "slab_serif"
  | "calculate"
  | "text_compare"
  | "hourglass";

export function Icon({
  name,
  size = 24,
  className = "",
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={`material-symbols-sharp ${className}`}
      style={{
        fontSize: size,
        width: size,
        height: size,
        lineHeight: 1,
        fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
      }}
    >
      {name}
    </span>
  );
}
