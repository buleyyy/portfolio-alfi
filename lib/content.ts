// ==========================================================
// SITE CONTENT — single source of truth for copy & data.
// Only real, verifiable information lives here. No invented
// metrics, clients, or testimonials.
// ==========================================================

export const nav = {
  links: [
    { href: "#work", label: "Work" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
  ],
  cta: { label: "Let's Work Together", href: "#contact" },
};

export const hero = {
  eyebrow: "Available for freelance work",
  headline: "I build digital products that move businesses forward.",
  sub: "Full-stack web development, digital systems, data analytics, and digital experiences for businesses and growing brands.",
  ctaPrimary: { label: "View My Work", href: "#work" },
  ctaSecondary: { label: "Let's Work Together", href: "#contact" },
  credibility: "Information Systems Student @ Universitas Gunadarma",
};

export type ProjectKind = "system" | "data" | "brand";

export interface Project {
  slug: string;
  index: string;
  kind: ProjectKind;
  name: string;
  tagline: string;
  problem: string;
  solutionSolution: string;
  system: string[];
  features: string[];
  stack: string[];
  outcome: string;
  role: string;
}

export const projects: Project[] = [
  {
    slug: "ali-nursery",
    index: "01",
    kind: "system",
    name: "Ali Nursery",
    tagline: "Digital Ordering & Inventory System",
    problem:
      "Orders and stock were being tracked manually, with no way to confirm in real time whether what customers ordered actually matched what was in inventory.",
    solutionSolution:
      "A full-stack platform that connects ordering, inventory, and admin operations into one system — so what's sold always matches what's in stock.",
    system: [
      "Customer-facing storefront with authenticated accounts",
      "Real-time inventory validation on checkout",
      "Order lifecycle tracking from placement to fulfillment",
      "Admin dashboard for products, orders, and payment verification",
      "Exportable sales reporting for business review",
    ],
    features: [
      "JWT-based customer authentication (register, login, password reset)",
      "Real-time stock validation to prevent overselling",
      "Order tracking with status updates",
      "Admin workflow for payment verification and fulfillment",
      "Multi-sheet sales report export",
    ],
    stack: ["React", "Node.js", "Express", "MySQL"],
    role: "Designed and built end-to-end — architecture, database, API, frontend, and deployment.",
    outcome:
      "A production system live on Vercel and Railway, replacing manual order and stock tracking with a single source of truth the business can rely on.",
  },
  {
    slug: "ewallet-analytics",
    index: "02",
    kind: "data",
    name: "E-Wallet Spending Analytics",
    tagline: "Data Analytics Dashboard",
    problem:
      "Transaction-level data had no structure behind it — no way to see spending patterns, category breakdowns, or trends without digging through raw records.",
    solutionSolution:
      "An interactive dashboard that turns raw transactions into readable charts and summaries, built for fast, confident decisions.",
    system: [
      "Data ingestion and cleaning pipeline",
      "Category and time-based aggregation",
      "Interactive charting layer",
      "Summary metric cards for at-a-glance reading",
    ],
    features: [
      "Spending breakdown by category",
      "Trend view across time periods",
      "Interactive charts built with Chart.js",
      "Responsive dashboard layout",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Chart.js"],
    role: "Structured the data, designed the visualizations, and built the frontend from scratch.",
    outcome:
      "A self-contained analytics dashboard that shows how raw financial data can become a usable decision-support tool.",
  },
  {
    slug: "kopi-umbara",
    index: "03",
    kind: "brand",
    name: "Kopi Umbara",
    tagline: "Brand Development & Digital Experience",
    problem:
      "A bottled coffee brand had no identity and no digital presence — it needed a name, a visual language, and a way for customers to actually find and buy it.",
    solutionSolution:
      "A brand built from zero: naming, an earthy vintage-travel-journal identity, and a digital storefront to bring it to customers.",
    system: [
      "Brand naming and positioning",
      "Visual identity — palette, type, tone",
      "Customer-facing storefront",
      "Admin panel for the business side",
    ],
    features: [
      "Warm, earthy vintage-journal visual identity",
      "React + Vite + Tailwind storefront",
      "Express + Prisma + MySQL backend",
      "Admin panel for day-to-day operations",
    ],
    stack: ["React", "Vite", "Tailwind CSS", "Express", "Prisma", "MySQL"],
    role: "Co-founder — led brand identity, product design, and the full-stack build.",
    outcome:
      "A cohesive brand and digital experience built from the ground up, co-founded and run end-to-end.",
  },
];

export const capabilities = [
  {
    title: "Web Development",
    desc: "A website or web app that actually represents the business — built to convert visitors, not just look good.",
  },
  {
    title: "Digital Systems",
    desc: "Ordering systems, dashboards, and internal tools that replace manual work with something reliable and repeatable.",
  },
  {
    title: "Data & Analytics",
    desc: "Turning scattered business data into dashboards and reports that make the next decision easier to make.",
  },
  {
    title: "Digital Experience",
    desc: "A digital presence — identity, UI/UX, storefront — that gives a brand a consistent face customers recognize.",
  },
];

export const aboutStory = {
  progression: [
    "Accounting",
    "Information Systems",
    "Web Development",
    "Data & Analytics",
    "Digital Products",
  ],
  paragraphs: [
    "I started in accounting — following how numbers move through a business, and where they break down. That's where I first learned to think in systems: inputs, processes, outputs that have to reconcile.",
    "That instinct is what pulled me into Information Systems at Universitas Gunadarma, and from there into building the systems themselves — full-stack web development, data analytics, and digital branding. A nursery platform's ordering and inventory system. An e-wallet spending dashboard. A coffee brand's identity and storefront, built from nothing.",
    "Different projects, same starting point: understand the business problem first, then build the digital solution.",
  ],
};

export const process = [
  {
    index: "01",
    title: "Discover",
    desc: "We talk through the business, the goal, and who it's actually for — before any design or code.",
  },
  {
    index: "02",
    title: "Plan",
    desc: "I map the scope, user flow, and technical approach so there are no surprises once building starts.",
  },
  {
    index: "03",
    title: "Build",
    desc: "Design and development happen together — the product takes shape, and you see it as it grows.",
  },
  {
    index: "04",
    title: "Refine",
    desc: "I test against real use, fix what doesn't hold up, and tighten the experience before it ships.",
  },
  {
    index: "05",
    title: "Deliver",
    desc: "Launch, handoff, and documentation — so the product is yours to run, not just yours to own.",
  },
];

export const whoIWorkWith = {
  eyebrow: "Who I Work With",
  title: "A good fit if you're...",
  items: [
    {
      title: "A small business going digital",
      desc: "You're replacing spreadsheets and manual tracking with a system that actually fits how you operate.",
    },
    {
      title: "A growing brand that needs a real identity",
      desc: "You have a product worth selling, but no visual identity or digital presence to match it yet.",
    },
    {
      title: "A founder who needs to see the numbers clearly",
      desc: "You have the data, just not a way to read it — you need it turned into something you can act on.",
    },
  ],
};

export const trust = [
  { label: "Selected Projects", value: "3" },
  { label: "GitHub", value: "@buleyyy", href: "https://github.com/buleyyy" },
  { label: "Freelance Platforms", value: "Fiverr · Fastwork" },
  { label: "Institution", value: "Information Systems, Universitas Gunadarma" },
];

export const finalCta = {
  headline: "Have a business problem that needs a digital solution?",
  sub: "Let's turn the idea into something functional, useful, and ready to grow.",
  cta: { label: "Let's Build It", href: "#contact" },
};

export const contact = {
  email: "alfifauzinur@gmail.com",
  social: [
    { label: "GitHub", handle: "buleyyy", href: "https://github.com/buleyyy" },
    {
      label: "LinkedIn",
      handle: "Alfi Fauzi",
      href: "https://linkedin.com/in/alfi-fauzi-00170b264",
    },
    {
      label: "Instagram",
      handle: "@alfifauzi__",
      href: "https://instagram.com/alfifauzi__",
    },
  ],
};

export const footer = {
  name: "Alfi Fauzi",
  positioning: "Full-stack development, digital systems & data for growing businesses.",
};
