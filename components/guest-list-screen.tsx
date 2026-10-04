import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const guestUi = {
  bg: "#161616",
  card: "#242424",
  line: "rgba(255,255,255,0.12)",
  yellow: "#F5C400",
  text: "#F4F4F4",
  muted: "#A3A3A3",
  expired: "#E07040",
};

type GuestRecord = {
  name: string;
  role?: string;
  contact: string;
  contactType: "phone" | "email";
  access: "Unit Access" | "Community Access";
  schedule: string;
  expired?: boolean;
};

const guests: GuestRecord[] = [
  {
    name: "Hannah Sears",
    contact: "(555) 400-9614",
    contactType: "phone",
    access: "Unit Access",
    schedule: "All day on Mon, Wed, Fri from 10/11/26-10/20/26",
  },
  {
    name: "Andrew Charles",
    contact: "andrewc12@gmail.com",
    contactType: "email",
    access: "Community Access",
    schedule: "Today until midnight",
  },
  {
    name: "Nick Wagner",
    role: "Dog Walker",
    contact: "nickwagner@doghouse.com",
    contactType: "email",
    access: "Unit Access",
    schedule: "Tue, Thu from 9:30am to 10:45am from 3/8/26-10/24/26",
    expired: true,
  },
  {
    name: "Jordan Blake",
    contact: "(555) 237-4901",
    contactType: "phone",
    access: "Community Access",
    schedule: "Weekends from 11/1/26-12/31/26",
  },
];

function Icon({
  name,
  size = 18,
  className = "",
}: {
  name:
    | "personAdd"
    | "phone"
    | "mail"
    | "more"
    | "key"
    | "calendar"
    | "close"
    | "home"
    | "people"
    | "chat"
    | "settings";
  size?: number;
  className?: string;
}) {
  const paths = {
    personAdd:
      "M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
    phone:
      "M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z",
    mail: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z",
    more: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z",
    key: "M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z",
    calendar:
      "M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z",
    close:
      "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z",
    home: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z",
    people:
      "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zM8 11c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",
    chat: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z",
    settings:
      "M19.14 12.94c.04-.31.06-.63.06-.94s-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.07.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.36-2.54c.59-.24 1.13-.57 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.21.07-.47-.12-.61l-2.03-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z",
  };

  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={`block shrink-0 ${className}`}
      fill="currentColor"
    >
      <path d={paths[name]} />
    </svg>
  );
}

function GuestCard({ guest }: { guest: GuestRecord }) {
  return (
    <article
      aria-label={`${guest.name}, ${guest.access}`}
      className="overflow-hidden rounded-[10px] border border-white/10 bg-[#242424] transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-white/20 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      <div className="flex items-start justify-between gap-3 px-3 pt-2.5 pb-2">
        <div className="min-w-0">
          <p className="truncate text-[14px] leading-[1.2] font-bold text-[#F4F4F4]">
            {guest.name}
          </p>
          {guest.role ? (
            <p className="mt-px truncate text-[11px] leading-[1.3] text-[#A3A3A3]">
              {guest.role}
            </p>
          ) : null}
          <p className="mt-px truncate text-[11px] leading-[1.3] text-[#A3A3A3]">
            {guest.contact}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2 pt-0.5 text-[#F4F4F4]">
          <Icon name={guest.contactType === "phone" ? "phone" : "mail"} size={15} />
          <Icon name="more" size={15} />
        </div>
      </div>
      <div className="h-px bg-white/10" aria-hidden />
      <p className="flex items-center gap-2 px-3 py-1.5 text-[11px] leading-[1.3] text-[#C8C8C8]">
        <Icon name="key" size={13} />
        {guest.access}
      </p>
      <div className="h-px bg-white/10" aria-hidden />
      <p className="flex items-start gap-2 px-3 py-1.5 text-[11px] leading-[1.35] text-[#C8C8C8]">
        <Icon name="calendar" size={13} className="mt-px" />
        {guest.schedule}
      </p>
      {guest.expired ? (
        <>
          <div className="h-px bg-white/10" aria-hidden />
          <p
            className="flex items-center gap-2 px-3 py-1.5 text-[11px] leading-none font-medium"
            style={{ color: guestUi.expired }}
          >
            <Icon name="close" size={13} />
            Access Expired
          </p>
        </>
      ) : null}
    </article>
  );
}

export function GuestListScreen() {
  return (
    <div
      aria-label="LittleBird guest list"
      className={`${openSans.className} overflow-hidden rounded-[16px] border-[8px] border-white bg-black shadow-[0_16px_32px_rgba(0,0,0,0.18)]`}
    >
      <div
        className="flex h-[640px] w-full flex-col text-[13px]"
        style={{ backgroundColor: guestUi.bg }}
      >
        <div className="flex items-center justify-between px-5 pt-2 text-[12px] font-medium text-white">
          <span>9:41</span>
          <span className="flex items-center gap-1.5" aria-hidden>
            <span className="h-2 w-3.5 rounded-[1px] border border-white/80" />
            <span className="h-2 w-3.5 rounded-[1px] border border-white/80" />
            <span className="h-2.5 w-5 rounded-[2px] border border-white/80" />
          </span>
        </div>

        <div className="px-4 pt-2 pb-2.5">
          <h3 className="text-[26px] leading-none font-bold text-white">Guest</h3>
          <p className="mt-1 text-[12px] leading-[1.3] text-[#A3A3A3]">
            Grant guest access to your community or unit.
          </p>
          <button
            type="button"
            className="mt-2.5 flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-[8px] text-[14px] font-bold text-black"
            style={{ backgroundColor: guestUi.yellow }}
          >
            <Icon name="personAdd" size={18} />
            Add A Guest
          </button>
        </div>

        <div className="flex min-h-0 flex-1 flex-col gap-2.5 overflow-hidden px-4 pb-2">
          {guests.map((guest) => (
            <GuestCard key={guest.name} guest={guest} />
          ))}
        </div>

        <nav
          aria-label="LittleBird app tabs"
          className="mt-auto grid grid-cols-5 border-t border-white/10 bg-[#111] px-1 pt-1.5 pb-2.5"
        >
          {(
            [
              ["home", "Home", false],
              ["key", "Access", false],
              ["people", "Guest", true],
              ["chat", "Inbox", false],
              ["settings", "Settings", false],
            ] as const
          ).map(([icon, label, active]) => (
            <span
              key={label}
              className={`relative flex flex-col items-center gap-0.5 pt-1.5 text-[9px] font-semibold tracking-[0.04em] uppercase ${
                active ? "text-[#F5C400]" : "text-[#8A8A8A]"
              }`}
            >
              {active ? (
                <span
                  aria-hidden
                  className="absolute top-0 h-[2px] w-8 rounded-full"
                  style={{ backgroundColor: guestUi.yellow }}
                />
              ) : null}
              <Icon name={icon} size={18} />
              {label}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
}
