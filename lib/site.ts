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
      "I built a workflow connecting AI to our design system, product logic, and data model, accelerating the creation of realistic, interactive prototypes while creating more time for exploration and critical product thinking.",
    cta: "View Project",
    href: "/work/ai-prototyping",
    status: "Shipped",
    locked: false,
    image: "/assets/project-ai-planning.jpg",
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
    eyebrow: "Case study • 2023",
    title:
      "Redesigning guest access around convenience and security",
    description:
      "I simplified the LittleBird app guest access interface into an intuitive step-by-step workflow that gives users greater control over their smart home and promotes security in multifamily communities.",
    cta: "View Project",
    href: "/work/guest-access",
    status: "Shipped",
    locked: false,
  },
];

export type CaseStudy = (typeof caseStudies)[number];

export function getAdjacentCaseStudies(currentHref: string) {
  const index = caseStudies.findIndex((study) => study.href === currentHref);
  const current = index >= 0 ? index : 0;

  return {
    previous: current > 0 ? caseStudies[current - 1] : null,
    next: current < caseStudies.length - 1 ? caseStudies[current + 1] : null,
  };
}

export const aiPrototypingProject = {
  eyebrow: "Design System • AI Prototyping",
  title:
    "Building a Scalable AI Prototyping System for a Healthcare Workforce Management Platform",
  lead:
    "How I turned Kimedics’ design system and product architecture into a repeatable workflow for creating high-fidelity, interactive prototypes.",
  image: "/assets/project-ai-prototype-hero.jpg",
  overview: [
    "As Kimedics grew, I remained the only designer responsible for the application end to end, supporting as many as six development teams working across a complex healthcare workforce management platform.",
    "Traditional prototyping in Figma required significant manual production time. Every new workflow meant recreating established patterns, populating realistic data, connecting interactions, and documenting behavior for engineering.",
    "I built an AI-assisted prototyping system that connects our design patterns, component library, and product architecture. It allows me to turn plain-language requirements into realistic, interactive prototypes in a fraction of the time while retaining control over the final experience.",
  ],
  role: {
    eyebrow: "My Role",
    title: "Accelerating design delivery during organizational growth",
    intro:
      "As Kimedics’ founding product designer, I led the design of the system, including:",
    points: [
      "Establishing the design patterns and component library that prototypes use",
      "Documenting the application’s entities, relationships, and product logic",
      "Creating reusable AI skills for common interface patterns",
      "Defining requirements, edge cases, and expected behavior",
      "Reviewing and refining generated experiences",
      "Testing prototypes with Product, Engineering, customers, and internal stakeholders",
    ],
    closing:
      "AI accelerated production, but the underlying product decisions, system design, and final design judgment remained my responsibility.",
  },
  challenges: {
    eyebrow: "Challenges",
    points: [
      {
        icon: "/assets/icon-monitoring.svg",
        title: "Design demand was scaling faster than design capacity",
        body: "As the organization expanded, I was responsible for delivering solutions across more areas of the application in parallel. Recreating established interfaces manually would have made design a bottleneck.",
      },
      {
        icon: "/assets/icon-dashboard-2-edit.svg",
        title: "High fidelity required significant production time",
        body: "Realistic prototypes depend on more than polished screens. They need accurate data, connected interactions, validation, system states, and edge cases. Producing that fidelity manually was tedious and made it harder to explore multiple solutions quickly.",
      },
      {
        icon: "/assets/icon-chat-error.svg",
        title: "Static handoffs left behavior open to interpretation",
        body: "A linear Figma prototype could communicate the primary path, but engineers still depended on supporting requirements and conversations to understand how the experience should behave across different conditions.",
      },
    ],
  },
  solution: {
    eyebrow: "Solution",
    title: "Building the system AI needed to produce reliable prototypes",
    body: [
      "I built a workflow that connects AI to how Kimedics actually works: its design language, components, data, logic, and structure.",
      "Instead of asking AI to invent an interface from scratch, I gave it a defined system within which to work. Plain-language requirements could then become functional prototypes that looked and behaved like Kimedics.",
      "The system is built on three foundations.",
    ],
    points: [
      {
        icon: "/assets/icon-extension.svg",
        title: "Reusable design patterns",
        body: "The component library gives AI a constrained set of patterns instead of asking it to make new design decisions with every prompt. Accessibility, validation, system states, interaction behavior, visual hierarchy, and consistency are already built into these components. This reduces production time without sacrificing the decisions embedded in the design system.",
      },
      {
        icon: "/assets/icon-psychology.svg",
        title: "Product and system context",
        body: "I documented the application’s data model and relationships between organizations, practices, jobs, providers, assignments, shifts, and rates. This allows prototypes to use realistic, interconnected data instead of placeholder content, making complex workflows and downstream impacts easier to evaluate.",
      },
      {
        icon: "/assets/icon-cycle.svg",
        title: "Reusable AI skills",
        body: "I created guided skills for common structures such as tables, forms, and record pages. Each skill gathers the necessary context in plain language before generating an experience from our established components and product model. This turns knowledge that previously lived in my head into a repeatable process.",
      },
    ],
  },
  process: {
    eyebrow: "Process",
    title: "How the workflow works",
    steps: [
      "I define the problem, requirements, constraints, and edge cases.",
      "A guided skill gathers the product and interface context needed for the prototype.",
      "AI assembles an initial experience using established components and realistic data.",
      "I evaluate the workflow, explore alternatives, and resolve product decisions.",
      "I refine the interaction details and final visual execution.",
      "Product and Engineering review the functioning prototype before development begins.",
    ],
    closing:
      "The system handles repetitive production work. I remain responsible for deciding what should be built and whether the resulting experience solves the problem effectively.",
    outcomes: [
      {
        title: "Broader exploration",
        body: "Multiple approaches can be created and compared quickly instead of committing to the first viable direction.",
      },
      {
        title: "Deeper product thinking",
        body: "Less time spent on manual production creates more time to evaluate requirements, tradeoffs, edge cases, and downstream impacts.",
      },
      {
        title: "Earlier problem detection",
        body: "Functional prototypes surface gaps and unanswered questions before development begins, when they are easier to resolve.",
      },
    ],
  },
  example: {
    eyebrow: "Case Example",
    title: "Planning Coverage Matrix",
    opening: [
      "Kimedics’ Planning Coverage experience helps teams understand staffing needs across practices, specialties, and labor categories.",
      "Users needed the ability to configure two levels of grouping within the planning matrix. They could choose from:",
    ],
    options: [
      "Client",
      "Labor category",
      "Specialty",
      "Labor category and specialty",
    ],
    closing: [
      "The two grouping levels could not be identical. Combined with the option to use no secondary grouping, the feature produced 16 valid table configurations.",
      "Creating every variation manually would have required designing and populating each state separately. It also would have made it difficult to confirm that the hierarchy, totals, and interactions worked consistently across every combination.",
      "Using the prototyping system, I described the grouping rules and constraints in plain language. The system generated all 16 configurations using connected sample data and functioning controls.",
      "This allowed me to evaluate the complete behavior of the feature, not only its default state.",
    ],
  },
  results: {
    eyebrow: "Results",
    title: "16 interactive configurations in 15–30 minutes",
    intro:
      "Producing and populating the same variations manually would have taken an estimated two to three days.",
    represented: "That represented:",
    points: [
      "Up to 96x faster prototype production",
      "Complete coverage of all valid grouping combinations",
      "Realistic, connected sample data",
      "A fully interactive experience instead of isolated static screens",
    ],
    closing:
      "The time saved was reinvested in evaluating the hierarchy, identifying requirement gaps, and refining how users would configure the matrix.",
  },
  impact: {
    eyebrow: "Organizational Impact",
    points: [
      {
        title: "Product",
        body: "Requirement gaps and edge cases surface before development begins, when they are less expensive to address.",
      },
      {
        title: "Engineering",
        body: "Engineers can interact with the intended behavior instead of interpreting it from a collection of static screens.",
      },
      {
        title: "Design",
        body: "Less time is spent rebuilding established patterns, leaving more time for product decisions, usability, and final execution.",
      },
      {
        title: "Sales & CX",
        body: "Interactive prototypes can communicate future functionality in customer and sales conversations before the feature is developed.",
      },
      {
        title: "Company",
        body: "The system allows one designer to support more teams and deliver higher-fidelity work across the application without lowering the quality of the final experience.",
      },
    ],
  },
  extension: {
    eyebrow: "Extending the system",
    body: [
      "The next step is to connect the prototyping environment directly to the same production-grade component library used by the Kimedics application.",
      "That would create a shared foundation across design prototypes and production development:",
      "Instead of translating a design into a separate implementation, both environments would begin from the same components and interaction patterns. This creates stronger consistency and further reduces the gap between design intent and production behavior.",
    ],
  },
};

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
    { label: "Company", value: "Confidential" },
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
        "Our redesign focused on clarity and actionability. Instead of a single, rigid table, we introduced two flexible views: a table layout for high-volume processing and a card view optimized for quick scanning and on-the-go decision-making. Both views present the same data: shift counts, hours worked, unit volume, and expense totals.",
        "Each record now shows a complete picture: the total volume submitted, the assigned approver, and a real-time status indicator. Common statuses like “Pending Submission,” “Disputed,” and “Approved” are paired with contextual actions such as Submit, Resubmit, or Approve, available directly in-line. No extra clicks, no ambiguity.",
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
  views: {
    eyebrow: "Table and card views",
    title: "Same records, two ways to work",
    details:
      "Approvers see the same timesheet data in either layout: staff, practice, volume, assignee, and status. Toggle between a dense processing table and a more scannable card view.",
    descriptions: {
      table:
        "The table is built for batch review. Columns keep volume, ownership, and status aligned so teams can scan and act without opening every record.",
      cards:
        "Cards give each timesheet more room to breathe. Volume, ownership, and status show up in a compact snapshot that's easier to read on the go.",
    },
  },
};

export const guestAccessProject = {
  eyebrow: "Mobile app",
  title: "Redesigning guest access around convenience and security",
  overview: [
    "LittleBird brought connected access, video intercom, and property management into one experience for multifamily communities. Guest access sat at the intersection of convenience and security: residents needed an easy way to let people in without giving away lasting control of their homes.",
    "I redesigned the experience from initial setup through ongoing guest management, creating a clear, step-by-step workflow that gave residents more control over where and when guests could enter while helping communities maintain stronger security.",
  ],
  meta: [
    { label: "Role", value: "Product Designer" },
    { label: "Company", value: "LevelUp (LittleBird & GateHawk)" },
    { label: "Focus", value: "Mobile App Design" },
    { label: "Timeline", value: "Q4 2022-Q1 2023" },
  ],
  challenges: {
    eyebrow: "Challenges",
    title:
      "Security-sensitive choices were buried in a single overwhelming screen",
    body: [
      "The original experience combined the guest list and access setup within a screen containing more than 12 options. Residents had to enter contact information, select an access level, and configure a schedule without enough context to understand the implications of each choice.",
      "This created cognitive overload and increased the risk of residents granting broader or longer access than intended.",
      "Through interviews with residents, property guests, and property managers, I learned that users needed the same flexibility presented through a clearer decision-making process. I also reviewed competing access-control applications to understand how similar products explained permissions and recurring schedules.",
    ],
  },
  solution: {
    eyebrow: "Solution",
    title: "Turning a complex form into a guided access flow",
    body: [
      "I separated guest management from guest creation and reorganized setup around three decisions: identifying the guest, choosing where they could go, and determining when their credentials would work.",
      "Each decision became a focused step with supporting copy that explained the available options. The interface only revealed additional controls when they were relevant, simplifying common scenarios without removing advanced scheduling capabilities.",
    ],
  },
  guestManagement: {
    eyebrow: "Guest management",
    title: "Making active access easy to review and manage",
    body: [
      "A dedicated guest list gives residents a clear view of everyone with active access. Each record displays the guest’s contact information, access type, and access period.",
      "Residents can add someone from their contacts, update existing permissions, or remove a guest without navigating through the creation flow.",
    ],
  },
};
