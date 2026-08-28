import { Open_Sans } from "next/font/google";
import { timesheetProduct } from "@/components/timesheet-card";
import { timesheetShiftExample } from "@/components/timesheet-data";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export type TimesheetShiftLine = {
  label: string;
  time: string;
  duration: string;
  rate: string;
  amount: string;
  overtime?: boolean;
};

export type TimesheetShiftCardData = {
  title: string;
  scheduled: string;
  activity: string;
  lines: TimesheetShiftLine[];
  total: string;
};

function DashedRule() {
  return <div aria-hidden className="h-px w-full border-t border-dashed border-[#D0D3D8]" />;
}

function ShiftLink({ children }: { children: string }) {
  return (
    <button
      type="button"
      className="cursor-pointer font-[inherit] text-[14px] leading-none font-normal underline decoration-[1.5px] underline-offset-[3px] transition-colors duration-200 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8a54d5]"
      style={{ color: timesheetProduct.purple }}
    >
      {children}
    </button>
  );
}

function OvertimeText({ children }: { children: string }) {
  return (
    <span
      className="underline decoration-dotted decoration-[1.5px] underline-offset-[3px]"
      style={{ color: timesheetProduct.hours }}
    >
      {children}
    </span>
  );
}

function alignDuration(duration: string) {
  const match = duration.match(/^(\d+)\s+hrs?\s+(\d+)\s+mins$/);
  if (!match) return duration;
  const hours = match[1].padStart(2, " ");
  const unit = match[1] === "1" ? "hr " : "hrs";
  const mins = match[2].padStart(2, "0");
  return `${hours} ${unit} ${mins} mins`;
}

function alignMoney(value: string, width = 9) {
  if (!value.startsWith("$")) return value.padStart(width, " ");
  return `$${value.slice(1).padStart(width - 1, " ")}`;
}

export function TimesheetShiftCard({
  shift = timesheetShiftExample,
}: {
  shift?: TimesheetShiftCardData;
}) {
  return (
    <article
      aria-label={`Example shift card for ${shift.activity}`}
      className={`${openSans.className} w-full cursor-pointer overflow-hidden rounded-[12px] border border-[#D8DBE0] bg-white text-[14px] text-[#2B2F36] shadow-[0_6px_20px_rgba(15,23,42,0.06)] transition-[border-color,box-shadow,transform] duration-200 hover:z-10 hover:-translate-y-0.5 hover:border-[#C5CAD1] hover:shadow-[0_12px_28px_rgba(15,23,42,0.12)] motion-reduce:transition-none motion-reduce:hover:translate-y-0`}
    >
      <div className="flex flex-col gap-1.5 px-5 pt-4 pb-3.5">
        <p className="text-[16px] leading-[1.2] font-bold text-[#1F2430]">
          {shift.title}
        </p>
        <p
          className="text-[14px] leading-[1.3] font-normal"
          style={{ color: timesheetProduct.muted }}
        >
          {shift.scheduled}
        </p>
      </div>

      <div className="h-px w-full bg-[#E4E7EB]" aria-hidden />

      <div className="px-5 pt-4 pb-3">
        <p className="text-[14px] leading-[1.3] font-bold text-[#1F2430]">
          {shift.activity}
        </p>
      </div>

      {shift.lines.map((line) => (
        <div key={line.label}>
          <div className="px-5">
            <DashedRule />
          </div>
          <div className="flex flex-col gap-1.5 px-5 py-3">
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <p className="text-[14px] leading-[1.3] font-bold text-[#1F2430]">
                {line.overtime ? <OvertimeText>{line.label}</OvertimeText> : line.label}
              </p>
              <p className="text-[14px] leading-[1.35] font-normal">
                {line.overtime ? <OvertimeText>{line.time}</OvertimeText> : line.time}
              </p>
            </div>
            <div className="flex items-baseline justify-between gap-3 font-mono text-[13px] leading-none">
              <p className="whitespace-pre">
                {line.overtime ? (
                  <OvertimeText>{alignDuration(line.duration)}</OvertimeText>
                ) : (
                  alignDuration(line.duration)
                )}
                <span style={{ color: timesheetProduct.muted }}> × </span>
                {line.rate}
              </p>
              <p className="whitespace-pre text-right">
                {alignMoney(line.amount)}
              </p>
            </div>
          </div>
        </div>
      ))}

      <div className="px-5">
        <DashedRule />
      </div>

      <div className="flex items-center justify-between gap-3 px-5 py-3">
        <ShiftLink>Edit Activities</ShiftLink>
        <ShiftLink>Edit Rates</ShiftLink>
      </div>

      <div className="h-px w-full bg-[#E4E7EB]" aria-hidden />

      <div className="flex items-center justify-between gap-3 px-5 pt-3 pb-5">
        <p
          className="text-[12px] leading-none font-normal tracking-[0.08em] uppercase"
          style={{ color: timesheetProduct.muted }}
        >
          Total
        </p>
        <p className="font-mono text-[16px] leading-none font-bold whitespace-pre text-[#1F2430]">
          {alignMoney(shift.total)}
        </p>
      </div>
    </article>
  );
}
