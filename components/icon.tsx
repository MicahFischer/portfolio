type IconName =
  | "arrow_forward"
  | "lock"
  | "mail"
  | "open_in_new"
  | "content_copy"
  | "check"
  | "chevron_left"
  | "chevron_right";

export function Icon({
  name,
  size = 24,
  className = "",
}: {
  name: IconName;
  size?: 20 | 24 | 32;
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
