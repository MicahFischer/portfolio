export function HoverFillBar() {
  return (
    <span aria-hidden className="pointer-events-none absolute inset-x-0 top-0">
      <span className="block h-px bg-rule" />
      <span className="absolute top-0 left-0 h-1 w-0 bg-blue transition-[width] duration-500 ease-out group-hover:w-full group-focus-visible:w-full motion-reduce:transition-none" />
    </span>
  );
}
