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
  | "hourglass"
  | "contact_phone"
  | "person"
  | "expand_more"
  | "grid_view"
  | "table"
  | "menu_book"
  | "laptop_mac"
  | "code";

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
        fontVariationSettings: `'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' ${Math.min(48, Math.max(24, size))}`,
      }}
    >
      {name}
    </span>
  );
}
