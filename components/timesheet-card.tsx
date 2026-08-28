import { Open_Sans } from "next/font/google";
import type { CSSProperties } from "react";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const timesheetProduct = {
  purple: "#8a54d5",
  purpleSoft: "#EDE4F8",
  hours: "#C45C5C",
  muted: "#6A727C",
};

export type TimesheetStatus =
  | "Pending Submission"
  | "Pending Approval"
  | "Disputed"
  | "Approved";

export type TimesheetCardData = {
  initials: string;
  name: string;
  agency: string;
  dates: string;
  job: string;
  facility: string;
  shifts: number;
  hours: number;
  units: number;
  expenses: number;
  assignee: { name: string; initials: string } | null;
  status: TimesheetStatus;
  actions: [string, string];
};

export const statusTone: Record<
  TimesheetStatus,
  { bg: string; hoverBg: string; border: string; text: string; dot: string }
> = {
  "Pending Submission": {
    bg: "#EBF3FA",
    hoverBg: "#DCEAF5",
    border: "#B8D4EB",
    text: "#3978B8",
    dot: "#3978B8",
  },
  "Pending Approval": {
    bg: "#FBF3E6",
    hoverBg: "#F5E9D4",
    border: "#E8CFA3",
    text: "#C47A16",
    dot: "#C47A16",
  },
  Disputed: {
    bg: "#FCEEEE",
    hoverBg: "#F5E0E0",
    border: "#E8B4B4",
    text: "#C94B4B",
    dot: "#C94B4B",
  },
  Approved: {
    bg: "#E8F5EE",
    hoverBg: "#D8EEE3",
    border: "#B8DFC9",
    text: "#27865C",
    dot: "#27865C",
  },
};

function DashedRule() {
  return <div aria-hidden className="h-px w-full border-t border-dashed border-[#D0D3D8]" />;
}

const twoToneIcons = {
  check_box_outline_blank: (
    <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
  ),
  contact_phone: (
    <>
      <path
        d="M22 5H2v14h20V5zM9 6c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3zm6 12H3v-1.41C3 14.08 6.97 13 9 13s6 1.08 6 3.58V18zm2.85-4h1.64L21 16l-1.99 1.99c-1.31-.98-2.28-2.38-2.73-3.99-.18-.64-.28-1.31-.28-2s.1-1.36.28-2c.45-1.62 1.42-3.01 2.73-3.99L21 8l-1.51 2h-1.64c-.22.63-.35 1.3-.35 2s.13 1.37.35 2z"
        opacity=".3"
      />
      <path d="M2 21h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2zM2 5h20v14H2V5zm17.49 5L21 8l-1.99-1.99c-1.31.98-2.28 2.37-2.73 3.99-.18.64-.28 1.31-.28 2s.1 1.36.28 2c.45 1.61 1.42 3.01 2.73 3.99L21 16l-1.51-2h-1.64c-.22-.63-.35-1.3-.35-2s.13-1.37.35-2h1.64zM9 12c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 5c-2.03 0-6 1.08-6 3.58V18h12v-1.41C15 14.08 11.03 13 9 13zm-3.52 3c.74-.5 2.22-1 3.52-1s2.77.49 3.52 1H5.48z" />
    </>
  ),
  person: (
    <>
      <path d="M12 16c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2z" opacity=".3" />
      <circle cx="12" cy="8" opacity=".3" r="2" />
      <path d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H6zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" />
    </>
  ),
  keyboard_arrow_down: (
    <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
  ),
};

function MdIcon({
  name,
  size = 20,
  className = "",
  color,
}: {
  name: keyof typeof twoToneIcons;
  size?: number;
  className?: string;
  color?: string;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={`block shrink-0 ${className}`}
      style={color ? { color } : undefined}
      fill="currentColor"
    >
      {twoToneIcons[name]}
    </svg>
  );
}

export function StaffAgencyLine({
  agency,
  className = "",
}: {
  agency: string;
  className?: string;
}) {
  const separator = " • ";
  const index = agency.lastIndexOf(separator);
  const org = index === -1 ? agency : agency.slice(0, index);
  const staffClass = index === -1 ? null : agency.slice(index + separator.length);

  return (
    <span
      className={`flex min-w-0 items-baseline ${className}`}
      style={{ color: timesheetProduct.muted }}
    >
      <span className="min-w-0 truncate">
        {staffClass ? `${org}\u00a0` : org}
      </span>
      {staffClass ? (
        <span className="shrink-0 whitespace-nowrap">• {staffClass}</span>
      ) : null}
    </span>
  );
}

export function TimesheetCard({ card }: { card: TimesheetCardData }) {
  const status = statusTone[card.status];

  return (
    <article
      aria-label={`Example timesheet card for ${card.name}`}
      className={`${openSans.className} w-full cursor-pointer overflow-hidden rounded-[12px] border border-[#D8DBE0] bg-white text-[14px] text-[#2B2F36] shadow-[0_6px_20px_rgba(15,23,42,0.06)] transition-[border-color,box-shadow,transform] duration-200 hover:z-10 hover:-translate-y-0.5 hover:border-[#C5CAD1] hover:shadow-[0_12px_28px_rgba(15,23,42,0.12)] motion-reduce:transition-none motion-reduce:hover:translate-y-0`}
    >
      <div className="flex items-center gap-3 px-5 py-[14px]">
        <div className="flex shrink-0 items-center gap-1.5">
          <MdIcon name="check_box_outline_blank" size={24} color={timesheetProduct.muted} />
          <span
            aria-hidden
            className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#D8DBE0] text-[18px] font-medium text-white"
            style={{ backgroundColor: timesheetProduct.purple }}
          >
            {card.initials}
          </span>
        </div>
        <div className="min-w-0 flex-1">
          <p
            className="truncate text-[16px] leading-[1.2] font-bold underline decoration-[1.5px] underline-offset-[3px]"
            style={{ color: timesheetProduct.purple }}
          >
            {card.name}
          </p>
          <StaffAgencyLine
            agency={card.agency}
            className="mt-0.5 text-[14px] leading-[1.3]"
          />
        </div>
        <MdIcon name="contact_phone" size={24} color={timesheetProduct.purple} />
      </div>

      <div className="h-px w-full bg-[#E4E7EB]" aria-hidden />

      <div className="flex flex-col gap-1.5 px-5 pt-4 pb-3.5">
        <p
          className="text-[14px] leading-none font-normal tracking-[0.06em] uppercase"
          style={{ color: timesheetProduct.muted }}
        >
          {card.dates}
        </p>
        <p className="text-[14px] leading-[1.3] font-bold text-[#1F2430]">
          {card.job}
        </p>
        <p className="text-[14px] leading-none font-normal" style={{ color: timesheetProduct.muted }}>
          {card.facility}
        </p>
      </div>

      <div className="px-5">
        <DashedRule />
      </div>

      <p className="px-5 py-3 text-[14px] leading-none font-normal text-[#1F2430]">
        <span className="font-bold">{card.shifts}</span> Shifts •{" "}
        <span style={{ color: timesheetProduct.hours }}>
          <span className="font-bold">{card.hours}</span> Hours
        </span>
        {" • "}
        <span className="font-bold">{card.units}</span> Units •{" "}
        <span className="font-bold">{card.expenses}</span> Expenses
      </p>

      <div className="px-5">
        <DashedRule />
      </div>

      <div className="flex w-full items-center justify-between gap-3 px-5 py-3">
        <button
          type="button"
          className="inline-flex min-w-0 w-fit max-w-full cursor-pointer items-center gap-2 rounded-full border border-solid border-[#D8DBE0] bg-white py-1 pr-2.5 pl-1 font-[inherit] text-left transition-colors duration-200 hover:border-[#C5CAD1] hover:bg-[#F4F5F7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8a54d5]"
        >
          {card.assignee ? (
            <span
              aria-hidden
              className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#D8DBE0] text-[18px] font-medium"
              style={{ backgroundColor: timesheetProduct.purpleSoft, color: timesheetProduct.purple }}
            >
              {card.assignee.initials}
            </span>
          ) : (
            <span
              aria-hidden
              className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#C5CAD1] bg-white"
              style={{ color: timesheetProduct.muted }}
            >
              <MdIcon name="person" size={24} color={timesheetProduct.muted} />
            </span>
          )}
          <span className="flex min-w-0 flex-col items-start text-left">
            <span
              className="block w-full text-left text-[12px] leading-none font-normal tracking-[0.08em] uppercase"
              style={{ color: timesheetProduct.muted }}
            >
              Assignee
            </span>
            <span className="mt-1 block w-full truncate text-left text-[14px] leading-none font-medium text-[#2B2F36]">
              {card.assignee?.name ?? "Unassigned"}
            </span>
          </span>
          <MdIcon
            name="keyboard_arrow_down"
            size={20}
            className="shrink-0"
            color={timesheetProduct.purple}
          />
        </button>
        <button
          type="button"
          aria-label={card.status}
          title={card.status}
          className="inline-flex min-w-0 max-w-[10.5rem] shrink cursor-pointer items-center gap-1.5 rounded-full border px-2.5 py-[7px] font-[inherit] transition-colors duration-200 hover:bg-[var(--status-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8a54d5]"
          style={
            {
              backgroundColor: status.bg,
              borderColor: status.border,
              color: status.text,
              "--status-hover": status.hoverBg,
            } as CSSProperties
          }
        >
          <span
            aria-hidden
            className="size-2.5 shrink-0 rounded-full"
            style={{ backgroundColor: status.dot }}
          />
          <span className="min-w-0 truncate text-[14px] leading-none font-bold">
            {card.status}
          </span>
          <MdIcon name="keyboard_arrow_down" size={18} className="shrink-0" color={status.text} />
        </button>
      </div>

      <div className="h-px w-full bg-[#E4E7EB]" aria-hidden />

      <div className="grid grid-cols-2 gap-2.5 px-5 py-3">
        {card.actions.map((label, actionIndex) => {
          const primary = actionIndex === 1;
          return (
            <button
              key={label}
              type="button"
              className={
                primary
                  ? "inline-flex h-9 cursor-pointer items-center justify-center rounded-[8px] border border-[#8a54d5] bg-[#8a54d5] font-[inherit] text-[14px] leading-none font-bold tracking-[0.06em] text-white uppercase transition-colors duration-200 hover:border-[#7344b8] hover:bg-[#7344b8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8a54d5]"
                  : "inline-flex h-9 cursor-pointer items-center justify-center rounded-[8px] border border-[#8a54d5] bg-white font-[inherit] text-[14px] leading-none font-bold tracking-[0.06em] text-[#8a54d5] uppercase transition-colors duration-200 hover:bg-[#8a54d5]/12 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8a54d5]"
              }
            >
              {label}
            </button>
          );
        })}
      </div>
    </article>
  );
}
