import { Icon, type IconName } from "@/components/icon";

const cardClass =
  "relative z-10 flex h-full flex-col items-center justify-center gap-2 rounded-[12px] border border-foreground/15 bg-background px-5 py-4 text-center shadow-[0_6px_20px_rgba(15,23,42,0.06)]";

type DiagramNode = {
  title: string;
  body?: string;
  icon: IconName;
};

function DiagramCard({
  node,
  className = "",
}: {
  node: DiagramNode;
  className?: string;
}) {
  return (
    <div className={`${cardClass} ${className}`}>
      <Icon name={node.icon} size={32} className="text-foreground" />
      <p className="heading text-xl text-balance text-foreground">{node.title}</p>
      {node.body ? (
        <p className="font-sans text-sm leading-[1.5] text-pretty text-muted">
          {node.body}
        </p>
      ) : null}
    </div>
  );
}

function Chevron({
  direction = "down",
}: {
  direction?: "down" | "across";
}) {
  const across = direction === "across";

  return (
    <svg
      aria-hidden
      viewBox={across ? "0 0 14 24" : "0 0 24 14"}
      className={`block shrink-0 ${across ? "h-6 w-3.5" : "h-3.5 w-6"}`}
    >
      <path
        d={across ? "M2 2 L11 12 L2 22" : "M2 2 L12 11 L22 2"}
        fill="none"
        stroke="#4675e3"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRow({
  direction,
  copy,
}: {
  direction: "down" | "across";
  copy: string;
}) {
  return (
    <div
      className={`flex ${
        direction === "down"
          ? "flex-col items-center gap-1 py-0.5"
          : "flex-row items-center gap-1 px-0.5"
      }`}
    >
      {Array.from({ length: 4 }, (_, index) => (
        <Chevron key={`${copy}-${index}`} direction={direction} />
      ))}
    </div>
  );
}

function FlowChevrons({
  direction,
}: {
  direction: "down" | "across";
}) {
  const isDown = direction === "down";

  return (
    <div
      aria-hidden
      className={`relative z-0 overflow-hidden ${
        isDown ? "h-14 w-6" : "h-6 w-14"
      }`}
      style={{
        maskImage: isDown
          ? "linear-gradient(to bottom, transparent, #000 22%, #000 78%, transparent)"
          : "linear-gradient(to right, transparent, #000 22%, #000 78%, transparent)",
        WebkitMaskImage: isDown
          ? "linear-gradient(to bottom, transparent, #000 22%, #000 78%, transparent)"
          : "linear-gradient(to right, transparent, #000 22%, #000 78%, transparent)",
      }}
    >
      <div
        className={`flex ${
          isDown
            ? "flow-chevrons-down flex-col items-center"
            : "flow-chevrons-across flex-row items-center"
        }`}
      >
        <ChevronRow direction={direction} copy="a" />
        <ChevronRow direction={direction} copy="b" />
      </div>
    </div>
  );
}

export function SystemExtensionDiagram() {
  return (
    <figure className="w-full min-w-0">
      <div className="grid grid-cols-[minmax(0,1fr)_3.5rem_minmax(0,1fr)] grid-rows-[auto_3.5rem_auto] overflow-visible">
        <DiagramCard
          className="col-span-3"
          node={{ title: "Component Library", icon: "menu_book" }}
        />
        <div className="relative z-0 col-start-1 row-start-2 -my-3 flex items-center justify-center">
          <FlowChevrons direction="down" />
        </div>
        <div className="relative z-0 col-start-3 row-start-2 -my-3 flex items-center justify-center">
          <FlowChevrons direction="down" />
        </div>
        <DiagramCard
          className="col-start-1 row-start-3"
          node={{
            title: "Design Demo Site",
            icon: "laptop_mac",
            body: "The demo site is built using the same production grade components.",
          }}
        />
        <div className="relative z-0 col-start-2 row-start-3 -mx-3 flex items-center justify-center">
          <FlowChevrons direction="across" />
        </div>
        <DiagramCard
          className="col-start-3 row-start-3"
          node={{
            title: "Kimedics Codebase",
            icon: "code",
            body: "Resulting in stronger consistency during handoff from design to dev.",
          }}
        />
      </div>
      <figcaption className="sr-only">
        A shared component library feeds the design demo site and the Kimedics
        codebase, so prototypes and production start from the same components.
      </figcaption>
    </figure>
  );
}
