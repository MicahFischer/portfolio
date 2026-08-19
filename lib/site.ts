export const EMAIL = "micah@micahfischer.com";
export const LINKEDIN_URL = "https://www.linkedin.com/in/micah-fischer";
export const LINKEDIN_LABEL = "linkedin.com/in/micah-fischer";

export const expertise = [
  "Product & UX Strategy",
  "Interaction & Interface Design",
  "Complex Workflow Design",
  "Design Systems",
  "User Research & Testing",
];

export const howIWork = [
  "Product Discovery & Definition",
  "Systems Thinking",
  "Cross-functional Leadership",
  "Rapid Prototyping",
  "Design-to-Development Execution",
];

export const tools = [
  "Figma & FigJam",
  "Claude Code & Cursor",
  "AI-assisted Design Workflows",
  "HTML, CSS & Front-end Prototyping",
  "Adobe Creative Cloud",
];

export const experience = [
  {
    titles: [
      {
        role: "Senior Product Designer",
        detail: "Jan '26 - Present",
      },
      {
        role: "Product Designer",
        detail:
          "Kimedics (A Jackson Healthcare Company)\nMay '23 - Jan ‘26 | Nashville, TN",
      },
    ],
    description: [
      "Founding designer for Kimedics 2.0, leading product design across a healthcare workforce management platform supporting 1,200+ organizations, 13,000+ providers, and hundreds of thousands of shifts.",
      "Own design across the product lifecycle, from discovery and workflow definition through interaction design, prototyping, design systems, and development execution. Partner closely with Product and Engineering to define complex workflows, establish scalable product patterns, and translate healthcare workforce operations into intuitive experiences.",
      "Established and continue to evolve the product's design system, creating a shared foundation for consistency and scale across the platform.",
    ],
  },
  {
    titles: [
      {
        role: "User Experience Designer",
        detail:
          "LevelUp (LittleBird & GateHawk)\nOct '21 - May '23 | Phoenix, AZ",
      },
    ],
    description: [
      "Designed connected product experiences across smart home, access control, and residential technology for multifamily communities. Led UX and interaction design for complex workflows spanning mobile applications, connected devices, video intercom, guest access, and property management experiences.",
      "Partnered with Product and Engineering to translate technical capabilities and user research into cohesive, intuitive experiences across the platform.",
    ],
  },
  {
    titles: [
      {
        role: "Web Design Manager",
        detail:
          "Grand Canyon University: College of Arts & Media & Office of Student Engagement\nApr '21 - Apr '23 | Phoenix, AZ",
      },
    ],
  },
  {
    titles: [
      {
        role: "Graphic Designer",
        detail:
          "Grand Canyon Education\nSept '20 - Nov '21 | Phoenix, AZ",
      },
    ],
  },
];

export const education = {
  role: "Bachelor of Arts: Digital Design",
  detail: "Grand Canyon University\nSept '20 - May '23 | Phoenix, AZ",
  description:
    "Graduated summa cum laude, President's Academic Scholarship Recipient, Student Government Web Designer, College of Arts and Media Dean's Council Member.",
};

export const caseStudies = [
  {
    eyebrow: "Case study • 2026",
    title:
      "Rapid AI enabled prototyping with multiplatform Kimedics Design System",
    description:
      "I simplified the LittleBird app guest access interface into an intuitive step-by-step workflow that gives users greater control over their smart home and promotes security in multifamily communities.",
    cta: "View Project",
    href: "#",
    status: "Shipped",
    locked: false,
    image: "/assets/project-ai-prototype.jpg",
  },
  {
    eyebrow: "Case study • 2025",
    title:
      "Redesigning Time & Expense Entry for Healthcare Staffing Workflows",
    description:
      "I redesigned the entry system to support complex shifts, mileage, and expenses - streamlining submissions, improving accuracy, and reducing friction across the approval and billing process.",
    cta: "View Project",
    href: "/work/time-expense",
    status: "Shipped",
    locked: false,
    image: "/assets/project-time-expense.jpg",
  },
  {
    eyebrow: "Conceptual • 2024",
    title: "Augmented reality powered grocery shopping way finding",
    description:
      "I conceptualized Carrot, a new augmented-reality grocery shopping app providing shoppers with guided directions through a grocery store, helping them shop their list quickly, saving them time and money.",
    cta: "View Project",
    href: "#",
    status: "Conceptual",
    locked: false,
  },
  {
    eyebrow: "Case study • 2023",
    title:
      "Redesigning guest access for smart home communities for safety and peace of mind",
    description:
      "I simplified the LittleBird app guest access interface into an intuitive step-by-step workflow that gives users greater control over their smart home and promotes security in multifamily communities.",
    cta: "View Project",
    href: "#",
    status: "Shipped",
    locked: false,
  },
  {
    eyebrow: "Project • 2023",
    title:
      "Arts program website for the largest private Christian university in the United States",
    description:
      "I developed a new website for Grand Canyon University's College of Arts and Media, which served as a tool for student recruitment, boosting program enrollment by approximately 20% across all programs.",
    cta: "View Project",
    href: "#",
    status: "Shipped",
    locked: false,
  },
];

export const timeExpenseProject = {
  eyebrow: "Product Design",
  title: "Redesigning Time & Expense Entry for Healthcare Staffing Workflows",
  image: "/assets/project-time-expense.jpg",
  overview: [
    "In healthcare operations, every shift worked and expense incurred has a critical downstream impact on payroll, client invoicing, and workforce trust. Many healthcare organizations, staffing agencies, and managed service providers still manage time and expense approvals through a patchwork of forms, spreadsheets, and disconnected tools. These gaps lead to late submissions, billing errors, and preventable payment delays. The results are not just operational inefficiency; they created fractured confidence in the system.",
    "I was tasked with designing a unified solution that would give clinicians and timesheet approvers greater clarity, transparency, and control, regardless of how complex the rate set.",
  ],
  meta: [
    { label: "Role", value: "Lead Product Designer" },
    { label: "Company", value: "Kimedics (LocumTenens.com)" },
    { label: "Focus", value: "Workflow redesign, prototyping, user research, validation design" },
    { label: "Timeline", value: "Q3 2025 + Ongoing enhancements" },
  ],
  problem: {
    eyebrow: "Problem",
    title: "Timesheets built for volume, not clarity",
    points: [
      {
        title: "Hard to see what needed action",
        body: "The timesheet overview lacked the visual hierarchy needed to identify what required action, and individual timesheets were dense and difficult to scan, making review slow and error-prone.",
      },
      {
        title: "Rates calculated by hand",
        body: "Without automated logic for overtime, gratis, and guaranteed hours, rate calculations had to be applied manually, introducing both errors and significant administrative overhead.",
      },
      {
        title: "No way to compare shifts",
        body: "There was no easy way to compare scheduled shifts against submitted time, leaving approvers with no reliable way to verify that thresholds and differentials had been correctly applied.",
      },
      {
        title: "Expenses missed the pay period",
        body: "Because only one timesheet was allowed per staff member per pay period, missed expenses had to be added to a later timesheet, pushing them outside the relevant pay period and creating reconciliation issues.",
      },
      {
        title: "Errors hit invoices downstream",
        body: "Errors that made it through approval had direct downstream consequences: delayed invoices, incorrect billing, and in some cases recalculation risk on already-processed line items.",
      },
    ],
  },
  solutions: [
    {
      eyebrow: "Solution 1/2",
      title: "Providing timesheet approvers clarity and confidence",
      body: [
        "Our redesign focused on clarity and actionability. Instead of a single, rigid table, we introduced two flexible views: a table layout for high-volume processing and a card view optimized for quick scanning and on-the-go decision-making. Both views present the same data — shift counts, hours worked, unit volume, and expense totals.",
        "Each record now shows a complete picture: the total volume submitted, the assigned approver, and a real-time status indicator. Common statuses like “Pending Submission,” “Disputed,” and “Approved” are paired with contextual actions such as Submit, Resubmit, or Approve — available directly in-line. No extra clicks, no ambiguity.",
        "For teams managing dozens or even hundreds of submissions, this update was transformational.",
      ],
    },
    {
      eyebrow: "Solution 2/2",
      title: "Entry-level accuracy that prevents downstream errors",
      body: [
        "Clicking into a timesheet reveals a full entry-level breakdown. Each shift includes the shift type, scheduled time, submitted activities, and corresponding rates, while accounting for weekend and holiday differentials so every entry is fully contextualized.",
        "I redesigned the Add Time and Add Expense forms to simplify complex entries into clear, structured steps. Users select staff, practice, and dates, then define shift or expense details through dynamic fields that adapt as needed. Time entries support multiple activities (Base and Call, for example) stacked within a single shift. Expense entries support units, pay codes, and receipt uploads in a single flow.",
        "Built-in notes and edge-case toggles for scenarios like multi-day shifts or missed work keep the process flexible without sacrificing completeness.",
      ],
    },
  ],
};
