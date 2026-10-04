"use client";

import { Open_Sans } from "next/font/google";
import { useState, type CSSProperties } from "react";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import {
  TimesheetCard,
  StaffAgencyLine,
  statusTone,
  timesheetProduct,
  type TimesheetCardData,
} from "@/components/timesheet-card";
import { timesheetExamples } from "@/components/timesheet-data";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

type View = "table" | "cards";

function StatusChip({ card }: { card: TimesheetCardData }) {
  const status = statusTone[card.status];
  return (
    <span
      className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-[7px]"
      style={{
        backgroundColor: status.bg,
        borderColor: status.border,
        color: status.text,
      }}
    >
      <span
        aria-hidden
        className="size-2.5 rounded-full"
        style={{ backgroundColor: status.dot }}
      />
      <span className="text-[14px] leading-none font-bold">{card.status}</span>
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        width={18}
        height={18}
        fill="currentColor"
        className="shrink-0"
      >
        <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
      </svg>
    </span>
  );
}

function PersonIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" width={20} height={20} fill="currentColor">
      <path d="M12 16c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2z" opacity=".3" />
      <circle cx="12" cy="8" opacity=".3" r="2" />
      <path d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H6zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" />
    </svg>
  );
}

function AssigneeAvatar({ card }: { card: TimesheetCardData }) {
  const label = card.assignee?.name ?? "Unassigned";

  return (
    <span className="group relative inline-flex">
      <span
        tabIndex={0}
        aria-label={`Assignee: ${label}`}
        className="flex size-10 shrink-0 cursor-default items-center justify-center rounded-full border border-[#D8DBE0] text-[18px] font-medium outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8a54d5]"
        style={
          card.assignee
            ? {
                backgroundColor: timesheetProduct.purpleSoft,
                color: timesheetProduct.purple,
              }
            : { backgroundColor: "#fff", color: timesheetProduct.muted }
        }
      >
        {card.assignee ? card.assignee.initials : <PersonIcon />}
      </span>
      <span
        role="tooltip"
        className={`${openSans.className} pointer-events-none absolute top-[calc(100%+8px)] left-1/2 z-20 -translate-x-1/2 rounded-md border border-[#D8DBE0] bg-white px-2.5 py-1.5 text-[14px] leading-none font-medium whitespace-nowrap text-[#1F2430] opacity-0 shadow-[0_6px_20px_rgba(15,23,42,0.08)] transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100`}
      >
        {label}
      </span>
    </span>
  );
}

function ActionButtons({ card }: { card: TimesheetCardData }) {
  const label = card.actions[1];

  return (
    <button
      type="button"
      className="inline-flex h-9 w-[7.25rem] cursor-pointer items-center justify-center rounded-[8px] border border-[#8a54d5] bg-[#8a54d5] font-[inherit] text-[14px] leading-none font-bold tracking-[0.06em] text-white uppercase transition-colors duration-200 hover:border-[#7344b8] hover:bg-[#7344b8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8a54d5]"
    >
      {label}
    </button>
  );
}

function TimesheetTable({ animate }: { animate: boolean }) {
  return (
    <div className="w-full min-w-0 overflow-x-auto rounded-[12px] border border-[#D8DBE0] bg-white shadow-[0_6px_20px_rgba(15,23,42,0.06)]">
      <table className={`${openSans.className} w-full min-w-[1280px] text-left text-[14px] text-[#2B2F36] [&_td]:align-middle [&_th]:align-middle`}>
        <thead>
          <tr className="border-b border-[#E4E7EB] bg-[#FAFBFC]">
            <th className="px-4 py-3 text-[14px] leading-none font-bold text-[#1F2430]">
              <span className="flex items-center gap-1.5">
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  fill="currentColor"
                  className="shrink-0"
                  style={{ color: timesheetProduct.muted }}
                >
                  <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
                </svg>
                Staff
              </span>
            </th>
            {["Practice", "Volume", "Assignee", "Status", "Actions"].map(
              (heading) => (
                <th
                  key={heading}
                  className={`px-4 py-3 text-[14px] leading-none font-bold text-[#1F2430] ${
                    heading === "Assignee" ? "text-center" : ""
                  }`}
                >
                  {heading}
                </th>
              ),
            )}
          </tr>
        </thead>
        <tbody>
          {timesheetExamples.map((card, index) => (
            <tr
              key={card.name}
              className={`border-b border-[#E4E7EB] last:border-b-0 transition-colors duration-200 hover:bg-[#8a54d5]/8 ${
                animate ? "timesheet-enter-row" : ""
              }`}
              style={
                animate
                  ? ({ "--enter-i": index } as CSSProperties)
                  : undefined
              }
            >
              <td className="px-4 py-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex shrink-0 items-center gap-1.5">
                    <svg
                      aria-hidden
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                      fill="currentColor"
                      className="shrink-0"
                      style={{ color: timesheetProduct.muted }}
                    >
                      <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
                    </svg>
                    <span
                      aria-hidden
                      className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#D8DBE0] text-[18px] font-medium text-white"
                      style={{ backgroundColor: timesheetProduct.purple }}
                    >
                      {card.initials}
                    </span>
                  </div>
                  <span className="min-w-0 max-w-[220px]">
                    <span
                      className="block truncate text-[16px] font-bold underline decoration-[1.5px] underline-offset-[3px]"
                      style={{ color: timesheetProduct.purple }}
                    >
                      {card.name}
                    </span>
                    <StaffAgencyLine
                      agency={card.agency}
                      className="mt-0.5 text-[13px] leading-[1.3]"
                    />
                  </span>
                </div>
              </td>
              <td className="px-4 py-3">
                <span
                  className="block text-[14px] leading-none font-normal tracking-[0.06em] uppercase"
                  style={{ color: timesheetProduct.muted }}
                >
                  {card.dates}
                </span>
                <span className="mt-1.5 block font-bold text-[#1F2430]">{card.job}</span>
                <span
                  className="mt-0.5 block"
                  style={{ color: timesheetProduct.muted }}
                >
                  {card.facility}
                </span>
              </td>
              <td className="px-4 py-3 font-normal text-[#1F2430]">
                <span className="flex min-w-[7.5rem] flex-col divide-y divide-dashed divide-[#D0D3D8]">
                  <span className="flex justify-between gap-3 py-0.5">
                    <span>Shifts</span>
                    <span className="font-bold">{card.shifts}</span>
                  </span>
                  <span
                    className="flex justify-between gap-3 py-0.5"
                    style={{ color: timesheetProduct.hours }}
                  >
                    <span>Hours</span>
                    <span className="font-bold">{card.hours}</span>
                  </span>
                  <span className="flex justify-between gap-3 py-0.5">
                    <span>Units</span>
                    <span className="font-bold">{card.units}</span>
                  </span>
                  <span className="flex justify-between gap-3 py-0.5">
                    <span>Expenses</span>
                    <span className="font-bold">{card.expenses}</span>
                  </span>
                </span>
              </td>
              <td className="px-4 py-3 text-center">
                <AssigneeAvatar card={card} />
              </td>
              <td className="px-4 py-3">
                <StatusChip card={card} />
              </td>
              <td className="px-4 py-3">
                <ActionButtons card={card} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function TimesheetViewSwitcher({
  eyebrow,
  title,
  details,
  descriptions,
}: {
  eyebrow: string;
  title: string;
  details: string;
  descriptions: Record<View, string>;
}) {
  const [view, setView] = useState<View>("table");
  const [animate, setAnimate] = useState(false);

  function switchView(next: View) {
    if (next === view) return;
    setAnimate(true);
    setView(next);
  }

  return (
    <div className="flex w-full min-w-0 flex-col gap-10">
      <div className="flex w-full flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div className="flex min-w-0 flex-col items-start gap-2.5">
          <Reveal>
            <p className="font-mono text-[14px] leading-normal tracking-[1.4px] text-muted uppercase">
              {eyebrow}
            </p>
          </Reveal>
          <Reveal delay={90}>
            <h2 className="heading max-w-[540px] text-[36px] text-balance text-foreground">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="max-w-[720px] font-sans text-base leading-[1.5] text-muted">
              {details}
            </p>
          </Reveal>
          <Reveal delay={270}>
            <p
              key={view}
              aria-live="polite"
              className={`max-w-[720px] font-sans text-base leading-[1.5] text-pretty text-ink ${
                animate ? "timesheet-copy-enter" : ""
              }`}
            >
              {descriptions[view]}
            </p>
          </Reveal>
        </div>
        <Reveal delay={120}>
          <div
            role="tablist"
            aria-label="Timesheet layout"
            className="relative inline-flex h-12 shrink-0 items-center rounded-full border border-foreground/10 bg-gradient-to-b from-white/55 to-white/15 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_10px_24px_rgba(15,23,42,0.12)] backdrop-blur-md"
          >
          <span aria-hidden className="pointer-events-none absolute inset-1">
            <span
              className={`block h-full w-1/2 rounded-full bg-foreground transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
                view === "cards" ? "translate-x-full" : "translate-x-0"
              }`}
            />
          </span>
          {(["table", "cards"] as const).map((option) => {
            const selected = view === option;
            const label = option === "table" ? "Table" : "Cards";
            return (
              <button
                key={option}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => switchView(option)}
                className={`relative z-10 inline-flex h-full min-w-[6.75rem] cursor-pointer items-center justify-center gap-2 rounded-full px-4 font-sans text-[16px] leading-none font-bold transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground ${
                  selected ? "text-white" : "text-muted hover:text-foreground"
                }`}
              >
                <Icon
                  name={option === "table" ? "table" : "grid_view"}
                  size={20}
                />
                <span className="btn-label">{label}</span>
              </button>
            );
          })}
          </div>
        </Reveal>
      </div>

      <Reveal delay={180}>
        {view === "table" ? (
          <TimesheetTable animate={animate} />
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {timesheetExamples.map((card, index) => (
              <div
                key={card.name}
                className={animate ? "timesheet-enter" : undefined}
                style={
                  animate
                    ? ({ "--enter-i": index } as CSSProperties)
                    : undefined
                }
              >
                <TimesheetCard card={card} />
              </div>
            ))}
          </div>
        )}
      </Reveal>
    </div>
  );
}
