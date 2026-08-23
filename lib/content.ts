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
  eyebrow: "Final-year Information Systems student",
  headline: "I build functional web products — and I'm ready to bring that to a team.",
  sub: "Full-stack development, digital systems, and data-driven interfaces. Open to internships, agency roles, and freelance projects across web and digital products.",
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
  image?: string;
  reportsLink?: string;
}

export const projects: Project[] = [
  {
    slug: "ali-nursery",
    index: "01",
    kind: "system",
    name: "Ali Nursery",
    tagline: "Digital Ordering & Inventory System",
    image: "/projects/ali/LoginPage.png",
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
    slug: "college-practicum",
    index: "02",
    kind: "data",
    name: "College Practicum Projects",
    tagline: "Applied Coursework — Data, Modeling & Interface Design",
    problem:
      "Coursework across data mining, data science, systems modeling, and interface design tends to stay siloed — each assignment graded and forgotten, with no single place showing how the skills connect.",
    solutionSolution:
      "A collection of hands-on lab work across six courses, applying data mining, data visualization, systems modeling, and interface design to real datasets and case scenarios.",
    system: [
      "Clustering and classification on real datasets using Weka",
      "Data cleaning, aggregation, and visualization in Python and Power BI",
      "System modeling and UML diagramming with StarUML",
      "Rule-based knowledge representation using Prolog",
      "Interface prototyping and usability principles in Figma",
    ],
    features: [
      "K-Means clustering and data mining workflows (Weka)",
      "Exploratory data analysis and visualization (Python, Matplotlib, Seaborn)",
      "Dataset appending and BI reporting (Power BI)",
      "UML modeling for system design (StarUML)",
      "Knowledge-based rule systems (Prolog)",
      "UI prototyping fundamentals (Figma)",
    ],
    stack: ["Python", "Weka", "Power BI", "StarUML", "Prolog", "Figma"],
    role: "Completed independently as part of Information Systems coursework — from problem framing to final report for each module.",
    outcome:
      "A working grasp of the full data-to-system pipeline — from raw datasets to models, diagrams, and interfaces — built through six semesters of applied lab work.",
    reportsLink: "https://drive.google.com/drive/folders/1hs-tuSyRrMLKtlDhWJ_gYWeDXM5_x8zS?usp=sharing",
  },
];

export const capabilities = [
  {
    title: "Web Development",
    desc: "Building websites and web apps end-to-end — from layout to logic, functional and easy to use.",
    icon: "code",
  },
  {
    title: "Digital Systems",
    desc: "Ordering flows, dashboards, and internal tools that replace manual, repetitive work.",
    icon: "layers",
  },
  {
    title: "Data & Analytics",
    desc: "Turning raw data into dashboards and reports that are actually easy to read and act on.",
    icon: "chart",
  },
  {
    title: "Digital Experience",
    desc: "UI/UX and digital presence work — giving a product or brand a consistent, usable face.",
    icon: "figma",
  },
];

export const aboutStory = {
  progression: [
    "Information Systems",
    "Web Development",
    "Data & Analytics",
    "Digital Products",
  ],
  paragraphs: [
    "I'm a final-year Information Systems student at Universitas Gunadarma (3.75 GPA), with interests spanning IT Support, Information Systems, Data Analytics, Business/Digital Transformation, and UI/UX. My technical projects run on Python, Google Colab, Weka, SQL, UML, and Figma — and from that came things like UMKM ordering systems, e-wallet spending analytics, and an IT troubleshooting knowledge base.",
    "Outside coursework, I've also spent time in campus organizations handling people coordination and event operations — Staff PSDM at BEM FIKTI and Head of Operations for Gunadarma Olympiad Committee. I've also completed IBM SkillsBuild coursework on data classification and summarization, and Dicoding's intro to AI.",
    "I'm in my final year now, still learning, and looking for a place — an agency, a company's dev or IT team, an internship — where I can keep building and grow from there.",
  ],
};

export const education = {
  school: "Universitas Gunadarma",
  degree: "S1 Sistem Informasi",
  gpa: "3.75 / 4.00",
  courses: [
    "Sistem Basis Data",
    "Analisis & Perancangan Sistem",
    "Data Mining",
    "Sains Data",
    "Business Intelligence",
    "Interaksi Manusia & Komputer",
    "Jaringan Komputer",
  ],
};

export const organizations = [
  {
    role: "Staff PSDM (Pengembangan Sumber Daya Manusia)",
    org: "BEM FIKTI Universitas Gunadarma",
    period: "Dec 2024 — Dec 2025",
    points: [
      "Supported student development programs through activity coordination, internal communication, and program execution.",
      "Helped plan and evaluate activities to improve member engagement and team coordination.",
    ],
    photos: ["/organizations/StaffBEMFIKTI.JPG", "/organizations/VolunAcaraFiktiSpace.jpg", "/organizations/BEMFiktiRapat.jpeg"],
  },
  {
    role: "Head of Operations",
    org: "Gunadarma Olympiad Committee",
    period: "Apr 2025 — Aug 2025",
    points: [
      "Led operational coordination, making sure technical and non-technical needs ran according to plan.",
      "Organized workflows, task delegation, and cross-team communication from preparation through execution.",
    ],
    photos: ["/organizations/OlimpiadeGunadarma.JPG", "/organizations/OlimpiadeGunadarmaRapat.JPG", "/organizations/OlimpiadeGunadarma3.jpg"],
  },
  {
    role: "Chairperson",
    org: "Cyber Space 2024",
    period: "2024",
    points: [
      "Led an independent, region-wide annual campus event as chairperson, overseeing planning and execution.",
      "Coordinated cross-functional teams and external stakeholders to deliver the event end-to-end.",
    ],
    photos: ["/organizations/KetuaEventCyberSpace.JPG", "/organizations/CyberSpace2.jpg", "/organizations/CyberSpace3_260821_1.jpg"],
  },
];

export const otherProjects = [
  {
    title: "IT Troubleshooting Handbook",
    tagline: "Personal IT Support Case Project — built in Notion",
    desc: "A structured troubleshooting knowledge base covering network, software, device, and OS issues — organized from the problems that come up constantly to the rarer ones that matter most when they do.",
    link: "https://assorted-tuberose-654.notion.site/IT-Troubleshooting-Handbook-376fe7e57267814fa319dd23264b41e7",
    categories: [
      {
        label: "Most Common",
        items: [
          "No internet / intermittent Wi-Fi connection",
          "Slow PC or laptop performance",
          "Application not responding or crashing",
          "Printer not detected or failing to print",
        ],
      },
      {
        label: "Frequent",
        items: [
          "Software installation or update failures",
          "Storage running low / disk cleanup needed",
          "Peripheral device not recognized (USB, external drive, headset)",
          "Login or account access issues",
        ],
      },
      {
        label: "Occasional but Disruptive",
        items: [
          "Blue Screen of Error (BSOD) / unexpected system crash",
          "Driver conflicts after Windows update",
          "Overheating and thermal shutdown",
          "File corruption or unexpected data loss",
        ],
      },
      {
        label: "Rare but Critical",
        items: [
          "Suspected malware or ransomware activity",
          "Boot failure / OS won't start",
          "Hardware failure requiring escalation (disk, RAM, motherboard)",
        ],
      },
    ],
  },
];

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
  eyebrow: "Where I Fit",
  title: "A good fit if you're...",
  items: [
    {
      title: "A company or agency hiring for an internship or entry-level dev role",
      desc: "I'm comfortable across the stack — frontend, backend, and the database in between — and I pick things up fast.",
    },
    {
      title: "A small business or founder going digital",
      desc: "You need a website, ordering system, or dashboard to replace something manual, and want it built properly.",
    },
    {
      title: "Someone with data but no easy way to read it",
      desc: "You have the numbers, just not a way to see them clearly — I can turn that into something usable.",
    },
  ],
};

export const trust = [
  { label: "GPA", value: "3.75 / 4.00" },
  { label: "GitHub", value: "@buleyyy", href: "https://github.com/buleyyy" },
  { label: "Institution", value: "Information Systems, Universitas Gunadarma" },
];

export const finalCta = {
  headline: "Looking for someone to build with, or bring onto the team?",
  sub: "I'm open to internships, entry-level roles, and freelance projects — let's talk about what you need.",
  cta: { label: "Let's Talk", href: "https://instagram.com/alfifauzi__" },
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
  positioning: "Information Systems student — full-stack development, digital systems & data.",
};
