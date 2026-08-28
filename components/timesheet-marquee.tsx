import { TimesheetCard } from "@/components/timesheet-card";
import { timesheetExamples } from "@/components/timesheet-data";

function CardColumn({ hidden }: { hidden?: boolean }) {
  return (
    <div
      aria-hidden={hidden || undefined}
      className="flex flex-col gap-4 pb-4"
      data-marquee-clone={hidden ? "" : undefined}
    >
      {timesheetExamples.map((card) => (
        <TimesheetCard key={`${hidden ? "clone-" : ""}${card.name}`} card={card} />
      ))}
    </div>
  );
}

export function TimesheetMarquee() {
  return (
    <div className="w-full min-w-0 max-w-[480px] self-start lg:shrink-0">
      <div
        aria-label="Scrolling examples of timesheet cards"
        className="timesheet-marquee relative -mx-8 overflow-hidden px-8"
      >
        <div className="timesheet-marquee-track flex w-full flex-col">
          <CardColumn />
          <CardColumn hidden />
        </div>
      </div>
    </div>
  );
}
