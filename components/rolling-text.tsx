export function RollingText({
  from,
  to,
  active,
}: {
  from: string;
  to: string;
  active: boolean;
}) {
  return (
    <span className="rolling-text" aria-hidden="true">
      <span className={`rolling-line${active ? " rolling-line-out" : ""}`}>
        {from}
      </span>
      <span
        className={`rolling-line rolling-line-enter${active ? " rolling-line-in" : ""}`}
      >
        {to}
      </span>
    </span>
  );
}
