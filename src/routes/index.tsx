import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import HeroScene from "../components/HeroScene";
import {
  FadeIn,
  StaggerList,
  StaggerItem,
  AnimatedCounter,
  MagneticLink,
  motion,
} from "../components/motion";
import { SpotlightCard } from "../components/SpotlightCard";
import { TrackRecord } from "../components/TrackRecord";
import {
  ArrowUpRight,
  Bot,
  BarChart3,
  Database,
  Sparkles,
  Lock,
  Layers,
  FileText,
  Check,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Paul Femi-Adejobi — Tech Consultant (Data & AI), Lagos" },
      {
        name: "description",
        content:
          "Data, AI and technology consulting portfolio: Power BI, SQL, Python, and AI automation projects by Paul Femi-Adejobi, Lagos, Nigeria.",
      },
      { property: "og:title", content: "Paul Femi-Adejobi — Tech Consultant (Data & AI)" },
      {
        property: "og:description",
        content:
          "Selected analytics, AI-readiness and strategy work, experience, certifications and awards. Lagos-based, working worldwide.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

interface MetricItem {
  label: string;
  value: string;
  desc?: string;
}

interface ProjectItem {
  no: string;
  category: "ai" | "bi" | "sql" | "product";
  badge: string;
  sector: string;
  title: string;
  org: string;
  intro: string;
  metrics: MetricItem[];
  image?: string;
  domainUrl?: string;
  bullets: string[];
  tags: string[];
  lead: string;
  link?: string;
  links?: { label: string; url: string; primary?: boolean }[];
  isFlagship?: boolean;
}

const projects: ProjectItem[] = [
  {
    no: "01",
    category: "ai",
    badge: "Production AI Workflow",
    sector: "AI & Automation",
    title: "Autonomous AI Invoice & Receipt Pipeline",
    org: "Production System",
    intro:
      "Enterprise-grade document automation system combining n8n and Google Gemini to autonomously ingest invoices, extract structured line items, verify accounting mathematics, detect duplicates, and route edge cases to a human-in-the-loop review queue.",
    metrics: [
      { label: "Extraction Accuracy", value: "99.2%", desc: "Strict JSON schema enforcement" },
      { label: "Confidence Gate", value: "0–100", desc: "Multi-factor audit scoring" },
      { label: "Test Fixtures", value: "9 / 9", desc: "Automated end-to-end tests" },
      { label: "AI Containment", value: "Zero-Touch", desc: "Direct Google Sheets filing" },
    ],
    image: "/projects/invoice-pipeline.webp",
    domainUrl: "paulytics.github.io/invoice-pipeline",
    bullets: [
      "Multimodal OCR and data extraction with Gemini Flash using structured JSON schema",
      "Deterministic verification for line items, subtotals, VAT/tax, and accounting totals",
      "Automated exception handling in Google Sheets with real-time Telegram escalation",
    ],
    tags: ["n8n", "Gemini AI", "Workflow Automation", "JavaScript", "Google Workspace"],
    lead: "n8n",
    link: "https://paulytics.github.io/invoice-pipeline",
    links: [
      {
        label: "Explore Live Project",
        url: "https://paulytics.github.io/invoice-pipeline",
        primary: true,
      },
      { label: "GitHub Source Code", url: "https://github.com/paulytics/invoice-pipeline" },
    ],
    isFlagship: true,
  },
  {
    no: "02",
    category: "bi",
    badge: "Executive BI & Economics",
    sector: "Operations & AI Economics",
    title: "Customer Support AI Economics & Operations",
    org: "Support Operations",
    intro:
      "Interactive 3-page Power BI executive intelligence dashboard analyzing 12,000 support tickets across AI containment, human handoffs, unit economics, CSAT, and SLA compliance to isolate failure leaks and optimize routing playbooks.",
    metrics: [],
    image: "/projects/powerbi-support.webp",
    domainUrl: "app.powerbi.com/support-economics",
    bullets: [
      "Executive dashboard modeling AI containment, CSAT scores, and queue response times",
      "Operational unit economics comparing automated deflection vs human escalation costs",
      "Strategic routing playbooks designed to minimize SLA breaches and customer churn",
    ],
    tags: ["Power BI", "DAX", "Data Modeling", "AI Economics", "Operations Analytics"],
    lead: "Power BI",
    link: "https://app.powerbi.com/view?r=eyJrIjoiMzYxMjkyN2UtYzBjNS00MWE4LWEwMGQtMWU4YzdkMWQ2NjFhIiwidCI6IjQ2NTRiNmYxLTBlNDctNDU3OS1hOGExLTAyZmU5ZDk0M2M3YiIsImMiOjl9",
    links: [
      {
        label: "Interactive Power BI Report",
        url: "https://app.powerbi.com/view?r=eyJrIjoiMzYxMjkyN2UtYzBjNS00MWE4LWEwMGQtMWU4YzdkMWQ2NjFhIiwidCI6IjQ2NTRiNmYxLTBlNDctNDU3OS1hOGExLTAyZmU5ZDk0M2M3YiIsImMiOjl9",
        primary: true,
      },
      { label: "Executive Deck (PDF)", url: "/AI_Support_Economics_Dashboard.pdf" },
    ],
    isFlagship: true,
  },
  {
    no: "03",
    category: "product",
    badge: "AI Exam Simulation Engine",
    sector: "EdTech · AI Products",
    title: "CertliAI — AI-Powered Certification Exam Platform",
    org: "Dataleum",
    intro:
      "Full-length, timed mock exams that mirror real certification testing. Built with auto-save, proctoring, and instant diagnostics — all in one platform.",
    metrics: [
      { label: "Type", value: "Live Product" },
      { label: "Domain", value: "EdTech / AI" },
    ],
    image: "/projects/certliai.webp",
    domainUrl: "certliai.dataleum.com",
    bullets: [
      "Exam simulation engine with full-length timed mock exams and real test mirroring",
      "Auto-save, proctoring, and instant diagnostic feedback built into the platform",
      "Built and shipped end-to-end as a live product under Dataleum",
    ],
    tags: ["Product Development", "AI", "EdTech", "SaaS"],
    lead: "Product Development",
    link: "https://certliai.dataleum.com/",
    links: [{ label: "View Live Product", url: "https://certliai.dataleum.com/", primary: true }],
    isFlagship: true,
  },
  {
    no: "04",
    category: "sql",
    badge: "PostgreSQL Telemetry Engine",
    sector: "Product Analytics",
    title: "Product Analytics & User Journey Pathing Engine",
    org: "PostgreSQL Engine",
    intro:
      "End-to-end SQL analytics engine analyzing 334,000+ telemetry events across 6,000 user journeys in PostgreSQL to pinpoint checkout drop-offs, platform disparities, and validate retention habits against planted ground truth.",
    metrics: [],
    image: "/projects/sql-analytics.webp",
    domainUrl: "github.com/paulytics/product-analytics-engine",
    bullets: [
      "Chained funnel models and sessionization views tracking multi-touch telemetry",
      "Friction diagnostics isolating checkout exits and cross-platform conversion variance",
      "Cohort retention analysis measuring habit formation and long-term user activation",
    ],
    tags: ["PostgreSQL", "SQL", "Python", "Product Analytics", "Funnel Analysis"],
    lead: "PostgreSQL",
    link: "https://github.com/paulytics/product-analytics-engine",
    links: [
      {
        label: "GitHub Engine & Code",
        url: "https://github.com/paulytics/product-analytics-engine",
        primary: true,
      },
      { label: "Case Study Deck (PDF)", url: "/Product_Analytics_SQL_Case_Study.pdf" },
    ],
    isFlagship: true,
  },
  {
    no: "05",
    category: "bi",
    badge: "Retail Intelligence",
    sector: "Retail / Fashion",
    title: "Sales Intelligence Dashboard",
    org: "Vintage Couture",
    intro:
      "Executive overview and analysis dashboard, showcasing revenue trends, regional performance, and product profitability across retail footprints.",
    metrics: [
      { label: "Scope", value: "Multi-Region" },
      { label: "Focus", value: "Product Margin" },
    ],
    image: "/projects/sales-dashboard.webp",
    domainUrl: "vintage-couture.bi/overview",
    bullets: [
      "Revenue & profitability trend analysis with interactive slicers",
      "Regional and state-level performance tracking",
      "Product and customer segment profit distribution",
    ],
    tags: ["Power BI", "Excel", "Data Modeling"],
    lead: "Power BI",
    link: "/Sales_Intelligence_Dashboard.pdf",
    links: [
      { label: "View Dashboard PDF", url: "/Sales_Intelligence_Dashboard.pdf", primary: true },
    ],
    isFlagship: false,
  },
  {
    no: "06",
    category: "sql",
    badge: "Epidemiological Analysis",
    sector: "Public Health",
    title: "COVID-19 Data Exploration",
    org: "Public Health",
    intro:
      "Explored global COVID-19 datasets in SQL, calculating infection velocity, mortality ratios, and vaccination coverage across territories.",
    metrics: [
      { label: "Technique", value: "CTEs & Windows" },
      { label: "Coverage", value: "Global" },
    ],
    bullets: [
      "Multi-table CTEs, joins, window functions and rolling aggregations",
      "Infection-rate analysis across regions and demographics",
      "Vaccination progression and longitudinal tracking",
    ],
    tags: ["SQL", "Data Exploration", "Window Functions"],
    lead: "SQL",
    isFlagship: false,
  },
  {
    no: "07",
    category: "bi",
    badge: "Biometrics & Wearables",
    sector: "Health & Fitness",
    title: "Fitness Dataset Analysis",
    org: "Health & Fitness",
    intro:
      "Cleaned and transformed raw fitness sensor data into actionable health indicators, presenting metrics in an interactive executive dashboard.",
    metrics: [
      { label: "Pipeline", value: "ETL & Cleaning" },
      { label: "Output", value: "Interactive BI" },
    ],
    bullets: [
      "Data cleaning and transformation of raw sensor feeds",
      "BMI and daily activity performance indicators",
      "Longitudinal visual reporting and cohort comparisons",
    ],
    tags: ["Power BI", "Excel", "ETL"],
    lead: "Power BI",
    isFlagship: false,
  },
  {
    no: "08",
    category: "sql",
    badge: "Modular ML Analytics",
    sector: "Python Analytics",
    title: "Health Metrics Classification System",
    org: "Python Analytics",
    intro:
      "Modular Python data pipeline that processes biometric inputs, executes vectorized Pandas transformations, and categorizes health risk scores.",
    metrics: [
      { label: "Stack", value: "Pandas & Python" },
      { label: "Visuals", value: "Matplotlib" },
    ],
    bullets: [
      "Modular Python architecture and automated Pandas ETL",
      "Multi-variable health scoring and classification algorithms",
      "Distribution analysis, outlier detection and Matplotlib visuals",
    ],
    tags: ["Python", "Pandas", "Matplotlib"],
    lead: "Python",
    isFlagship: false,
  },
  {
    no: "09",
    category: "bi",
    badge: "Tableau · Data Visualization",
    sector: "Public Data & Development",
    title: "Global Development at a Glance",
    org: "Tableau Public",
    intro:
      "Interactive Tableau dashboard visualizing global development indicators — GDP, education, health, and social progress — across countries and time periods.",
    metrics: [
      { label: "Tool", value: "Tableau" },
      { label: "Scope", value: "Global Dataset" },
    ],
    image: "/projects/tableau-global.webp",
    domainUrl: "public.tableau.com",
    bullets: [
      "Multi-KPI development index explorer with country and year filtering",
      "Cross-dimensional storytelling linking economic, health, and social outcomes",
      "Published on Tableau Public for open access and sharing",
    ],
    tags: ["Tableau", "Data Visualization", "Public Data", "Storytelling"],
    lead: "Tableau",
    link: "https://public.tableau.com/app/profile/paul.femi.adejobi/viz/GlobalDevelopmentataGlance/GlobalDevelopmentataGlance?publish=yes",
    links: [
      {
        label: "View Tableau Dashboard",
        url: "https://public.tableau.com/app/profile/paul.femi.adejobi/viz/GlobalDevelopmentataGlance/GlobalDevelopmentataGlance?publish=yes",
        primary: true,
      },
    ],
    isFlagship: false,
  },
  {
    no: "10",
    category: "product",
    badge: "AI Language Learning App",
    sector: "EdTech · African Languages",
    title: "HeritageVoice — Speak Nigerian Languages with Confidence",
    org: "HeritageVoice.ai",
    intro:
      "Learn to speak Yorùbá, Igbo, and Hausa from your first minute. Hear a native speaker, say the phrase, and see exactly what the AI speech model understood.",
    metrics: [
      { label: "Languages", value: "Yorùbá, Igbo, Hausa" },
      { label: "Type", value: "Live App" },
    ],
    image: "/projects/heritagevoice.webp",
    domainUrl: "heritagevoice.vercel.app",
    bullets: [
      "AI speech recognition engine that processes Nigerian language pronunciation in real time",
      "Native speaker audio + instant model feedback loop for confident speaking practice",
      "Built and shipped end-to-end — from concept to live product",
    ],
    tags: ["Product Development", "AI", "Speech Recognition", "African Languages", "EdTech"],
    lead: "Product Development",
    link: "https://heritagevoice.vercel.app",
    links: [{ label: "View Live App", url: "https://heritagevoice.vercel.app", primary: true }],
    isFlagship: false,
  },
];

const reports = [
  {
    no: "01",
    sector: "Media & Entertainment",
    title: "Skit Makers Report Q1 & Q2 '26",
    org: "Dataleum",
    intro:
      "Managed the project end-to-end while leading the analysis, dashboard development and report production.",
    bullets: [
      "Project Management and team coordination",
      "Data analysis and dashboard creation",
      "Report design and industry insights",
    ],
    tags: ["Project Management", "Data Analysis", "Dashboarding"],
    lead: "Project Management",
    link: "https://dataleum.com/wp-content/uploads/2026/07/Dataleum-Q2-2026-Skit-Makers-Report.pdf",
  },
  {
    no: "02",
    sector: "Human Resources",
    title: "Tech Attrition Report",
    org: "Dataleum",
    intro:
      "Analyzed HR data to identify patterns in technology talent attrition, retention and hiring dynamics.",
    bullets: [
      "HR intelligence analysis",
      "Data visualization and reporting",
      "Strategic talent insights",
    ],
    tags: ["HR Analytics", "Data Analysis", "Reporting"],
    lead: "Data Analysis",
    link: "https://dataleum.com/wp-content/uploads/2026/05/HR-Intelligence-Report-May-2026.pdf",
  },
  {
    no: "03",
    sector: "Technology Policy",
    title: "AI Governance in Africa",
    org: "Dataleum",
    intro:
      "Research report on responsible AI innovation, assessing the trillion-dollar growth potential and governance landscape across Africa.",
    bullets: [
      "AI policy research and analysis",
      "Economic impact assessment",
      "Responsible innovation frameworks",
    ],
    tags: ["Research", "AI Governance", "Strategy"],
    lead: "Research",
    link: "https://dataleum.com/ai-governance-in-africa-responsible-innovation-and-trillion-dollar-growth/",
  },
  {
    no: "04",
    sector: "Data Privacy",
    title: "Data Protection in Africa",
    org: "Dataleum",
    intro:
      "Explored how Africa is redefining data protection in 2026, analyzing regulatory changes and compliance strategies.",
    bullets: [
      "Regulatory and compliance research",
      "Data privacy frameworks",
      "Strategic industry insights",
    ],
    tags: ["Research", "Data Privacy", "Strategy"],
    lead: "Research",
    link: "https://dataleum.com/how-africa-is-redefining-data-protection-in-2026/",
  },
  {
    no: "05",
    sector: "Business Strategy",
    title: "AI Value Abyss",
    org: "Dataleum",
    intro:
      "Investigated what West African SMEs get wrong about AI adoption and how to bridge the value gap.",
    bullets: [
      "SME market analysis",
      "AI adoption barriers and solutions",
      "Strategic business recommendations",
    ],
    tags: ["Research", "Business Strategy", "AI"],
    lead: "Business Strategy",
    link: "https://dataleum.com/ai-value-abyss-what-west-african-smes-get-wrong/",
  },
];

const roles = [
  {
    period: "Feb 2026 — Present",
    title: "Research, Strategy & Intelligence Analyst",
    org: "Dataleum · Lagos",
    note: "Driving solutions across research, data, AI and technology, while leading analytics projects, developing new products and services, and providing consulting and capacity-building solutions for organizations including Access Bank, FMN and One Acre Fund.",
  },
  {
    period: "Mar 2025 — Feb 2026",
    title: "Business Strategy Analyst",
    org: "NoemDek · Lagos",
    note: "Energy, healthcare and consumer-facing initiatives — financial modelling, market research, due diligence, product requirements and grant proposals.",
  },
  {
    period: "Sep 2025 — Dec 2025",
    title: "Business Analyst",
    org: "YouBloom · Remote",
    note: "Connected product, design and engineering — turning user feedback and business requirements into prioritized product decisions and roadmap support.",
  },
  {
    period: "Dec 2024",
    title: "BI Analyst — Simulation",
    org: "PwC · Forage",
    note: "Built executive Power BI dashboards to investigate workforce and leadership trends, identify key drivers and develop recommendations.",
  },
  {
    period: "Jul 2024 — Oct 2024",
    title: "Data Analytics & Visualization Intern — Simulation",
    org: "Accenture · Forage",
    note: "Cleaned and joined seven datasets to identify the content categories driving engagement, and translated findings into recommendations.",
  },
  {
    period: "Aug 2022 — Oct 2022",
    title: "Data & IT Intern",
    org: "Fibernet · Ogun",
    note: "Supported database operations and documentation for a live student-management system, making processes usable for non-technical staff.",
  },
];

const certs = [
  "Microsoft Power BI Data Analyst",
  "Microsoft AI Business Professional",
  "Microsoft Fabric Analytics Engineer",
  "Google Cloud Generative AI Leader",
  "Microsoft AI Fluency",
  "Google Cloud Google Sheets Certified",
  "AWS / Udacity AI Practitioner",
  "DataCamp Data Analyst Associate",
  "DataCamp Data Literacy",
  "DSN Python for Data Science & ML",
  "HackerRank Software Engineering",
  "Dataleum Project Management",
  "Treford Technical Project Manager",
  "Ethical Researcher — University of the People",
];

const awards = [
  { name: "Innovator of the Quarter — Dataleum", year: "2026" },
  { name: "3x Best Graduating Student — Dataleum Academy", year: "2026" },
  { name: "Tech Savvy of the Year, Nominee — Bowen Awards", year: "2024" },
  { name: "Winner — National IT Competition", year: "2023" },
  { name: "First Runner-Up — BCMQ Competition", year: "2022" },
];

const affiliations = [
  {
    name: "ComputeX",
    role: "Program Coordinator / PM",
    desc: "Orchestrating technical programs and managing end-to-end project lifecycles to drive impactful tech initiatives.",
  },
  {
    name: "FSI (Financial Services Innovators)",
    role: "Ambassador",
    desc: "Advocating for financial inclusion and empowering the fintech community through grassroots innovation.",
  },
  {
    name: "Polygon Guild",
    role: "Contributor · Campus Tour",
    desc: "Driving Web3 education and onboarding the next generation of builders across university campuses.",
  },
  {
    name: "HOGGOS",
    role: "Part-Time Tutor",
    desc: "Mentoring students and breaking down complex topics to build a strong foundation in core technical subjects.",
  },
  {
    name: "Dataleum",
    role: "Data Analytics Facilitator",
    desc: "Leading hands-on AI and data analytics sessions to upskill individuals and organizations across different industries, including Access Bank, Myrtle, Dangote, FMN, and One Acre Fund.",
  },
  {
    name: "Association of Responsible AI (ARAI)",
    role: "Subject Matter Expert",
    desc: "Providing expert guidance on AI governance, ethics, and developing responsible implementation frameworks.",
  },
];

function ProjectMockupFrame({
  image,
  title,
  domainUrl,
  link,
}: {
  image: string;
  title: string;
  domainUrl?: string;
  link?: string;
}) {
  const content = (
    <div className="group/mockup relative overflow-hidden rounded-2xl border border-ink/15 bg-paper shadow-md transition-all duration-500 hover:border-signal/40 hover:shadow-xl">
      {/* Sleek browser window chrome */}
      <div className="flex items-center justify-between border-b border-ink/10 bg-ink/[0.03] px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-ink/25" />
          <span className="size-2 rounded-full bg-ink/25" />
          <span className="size-2 rounded-full bg-ink/25" />
        </div>
        <div className="flex items-center gap-1.5 rounded-md border border-ink/10 bg-paper/90 px-3 py-1 font-mono text-[10px] text-ink/65 shadow-2xs max-w-[240px] truncate sm:max-w-xs">
          <Lock className="size-2.5 text-signal/80 shrink-0" />
          <span className="truncate">{domainUrl || "paulytics.io/view"}</span>
        </div>
        <div className="flex items-center text-ink/40 group-hover/mockup:text-signal transition-colors">
          <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover/mockup:translate-x-0.5 group-hover/mockup:-translate-y-0.5" />
        </div>
      </div>

      {/* Image container with subtle inner shadow & zoom */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink/5">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover/mockup:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-ink/5" />
        <div className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover/mockup:bg-ink/[0.02]" />
      </div>
    </div>
  );

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${title}`}
        className="block"
      >
        {content}
      </a>
    );
  }

  return content;
}

function Index() {
  const [projectFilter, setProjectFilter] = useState<string>("all");

  const filterCategories = [
    { id: "all", label: "All Systems", count: projects.length },
    {
      id: "ai",
      label: "AI & Automation",
      count: projects.filter((p) => p.category === "ai").length,
    },
    {
      id: "bi",
      label: "Power BI & Analytics",
      count: projects.filter((p) => p.category === "bi").length,
    },
    {
      id: "sql",
      label: "SQL & Telemetry",
      count: projects.filter((p) => p.category === "sql").length,
    },
    {
      id: "product",
      label: "Product & Platforms",
      count: projects.filter((p) => p.category === "product").length,
    },
  ];

  const visibleProjects =
    projectFilter === "all" ? projects : projects.filter((p) => p.category === projectFilter);
  const flagshipProjects = visibleProjects.filter((p) => p.isFlagship);
  const secondaryProjects = visibleProjects.filter((p) => !p.isFlagship);

  return (
    <main className="bg-paper text-ink">
      {/* top strip */}
      <div className="bg-ink text-paper font-mono text-[11px] uppercase tracking-[0.2em]">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between border-b border-line px-6 py-3">
          <span className="text-paper">Paul Femi-Adejobi</span>
          <span className="hidden items-center gap-6 text-mute sm:flex">
            <span className="flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-signal pulse-signal" />
              Open to opportunities
            </span>
            <span>Lagos, NG · Remote</span>
            <span className="text-signal">GMT+1</span>
          </span>
        </div>
      </div>

      {/* hero */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(246,242,234,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(246,242,234,0.05) 1px,transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="pointer-events-none absolute inset-y-0 left-1/4 w-px bg-line" />
        <div className="pointer-events-none absolute inset-y-0 left-2/4 w-px bg-line" />
        <div className="pointer-events-none absolute inset-y-0 left-3/4 w-px bg-line" />

        <HeroScene />

        <div className="relative mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-6 py-20 lg:py-28">
          <StaggerList className="col-span-12 lg:col-span-8 relative z-10">
            <StaggerItem>
              <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.3em] text-signal">
                Analyst | Tech Consultant (Data &amp; AI)
              </p>
            </StaggerItem>
            <StaggerItem>
              <h1 className="text-balance font-display text-[clamp(3.25rem,11vw,9rem)] font-medium leading-[0.92] tracking-[-0.02em]">
                Paul Femi-Adejobi
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="mt-8 font-sans text-[clamp(1.15rem,1.8vw,1.5rem)] font-light leading-relaxed text-paper/90">
                I help businesses drive growth through Data-Driven Insights & AI
              </p>
            </StaggerItem>
            <StaggerItem>
              <p className="mt-5 max-w-[56ch] text-pretty font-sans text-[clamp(1.05rem,1.4vw,1.25rem)] leading-relaxed text-paper/70">
                I work at the intersection of data, technology, strategy and AI — helping
                organizations turn complex information into clearer insights, better products and
                smarter decisions.
              </p>
            </StaggerItem>
            <StaggerItem>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-[0.15em] text-mute">
                <span className="flex items-center gap-2">
                  <span className="size-1 rounded-full bg-signal pulse-signal" />
                  Data &amp; Analytics
                </span>
                <span>AI</span>
                <span>Strategy</span>
                <span>Product</span>
              </div>
            </StaggerItem>
          </StaggerList>
          <div className="col-span-12 flex flex-col justify-between gap-8 lg:col-span-4 lg:border-l lg:border-line lg:pt-2 lg:pl-8 hero-sidebar">
            <div className="relative overflow-hidden border border-line photo-hover">
              <img
                src="/paul-portrait.jpg?v=5"
                alt="Paul Femi-Adejobi portrait"
                className="aspect-[4/5] w-full object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 border-t border-line bg-ink/80 p-3 backdrop-blur-sm">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-mute">
                  Paul Femi-Adejobi
                </p>
                <p className="mt-0.5 font-sans text-xs text-paper/70">Lagos, Nigeria</p>
              </div>
            </div>
            <div className="space-y-4 border-t border-line pt-6">
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-mute">
                  Experience
                </span>
                <span className="font-display text-3xl font-semibold tracking-[-0.02em]">
                  <AnimatedCounter target={3} suffix="+" duration={1.5} /> yrs
                </span>
              </div>
              <div className="border-t border-line pt-4">
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-mute">
                  Education
                </span>
                <p className="mt-2 font-sans text-sm leading-snug text-paper/80">
                  BSc Computer Science — Bowen University
                </p>
                <p className="font-sans text-xs text-paper/60">
                  2020–2024 · First Class Honours (4.8/5.0)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* projects */}
      <section className="bg-paper text-ink">
        <div className="mx-auto max-w-[1360px] px-6 sm:px-8 lg:px-12 py-20 lg:py-28">
          {/* Section Header */}
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6 border-b border-ink/10 pb-8">
            <FadeIn>
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-signal font-semibold">
                Featured Systems &amp; Analytics
              </p>
              <h2 className="text-balance font-display text-[clamp(2.5rem,6vw,5rem)] font-medium leading-none tracking-[-0.02em]">
                Selected Work.
              </h2>
              <p className="mt-4 max-w-[52ch] text-pretty font-sans text-base text-ink/70">
                Production-grade AI workflows, executive BI economics, and user journey telemetry
                engines built for measurable business impact.
              </p>
            </FadeIn>

            {/* Category Filter Pills */}
            <FadeIn direction="right" className="flex flex-wrap items-center gap-2">
              {filterCategories.map((cat) => {
                const isActive = projectFilter === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setProjectFilter(cat.id)}
                    className={`group relative flex items-center gap-2 rounded-xl px-3.5 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-ink text-paper shadow-sm"
                        : "border border-ink/15 text-ink/70 hover:border-signal/50 hover:text-ink hover:bg-ink/[0.03]"
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`rounded-full px-1.5 py-0.2 text-[10px] font-mono transition-colors ${
                        isActive
                          ? "bg-signal text-paper font-semibold"
                          : "bg-ink/10 text-ink/60 group-hover:bg-signal/20 group-hover:text-signal"
                      }`}
                    >
                      {String(cat.count).padStart(2, "0")}
                    </span>
                  </button>
                );
              })}
            </FadeIn>
          </div>

          {/* Flagship Projects Showcase */}
          <div className="space-y-12 lg:space-y-16">
            {flagshipProjects.map((p, idx) => (
              <FadeIn key={p.no} direction="up" amount={0.1}>
                <div className="group rounded-3xl border border-ink/12 bg-paper/90 p-6 sm:p-8 lg:p-10 shadow-xs hover:border-signal/30 transition-all duration-300">
                  <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
                    {/* Mockup Column */}
                    <div
                      className={`lg:col-span-7 ${
                        idx % 2 === 1 ? "order-1 lg:order-2" : "order-1"
                      }`}
                    >
                      {p.image ? (
                        <ProjectMockupFrame
                          image={p.image}
                          title={p.title}
                          domainUrl={p.domainUrl}
                          link={p.link}
                        />
                      ) : null}
                    </div>

                    {/* Editorial Content Column */}
                    <div
                      className={`flex flex-col justify-between space-y-6 lg:col-span-5 ${
                        idx % 2 === 1 ? "order-2 lg:order-1" : "order-2"
                      }`}
                    >
                      <div>
                        {/* Metadata strip */}
                        <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs">
                          <span className="font-bold text-signal tracking-widest">{p.no}</span>
                          <span className="text-mute uppercase tracking-widest">{p.sector}</span>
                          <span className="text-ink/20">·</span>
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-signal/10 px-2.5 py-0.5 text-[11px] font-medium text-signal">
                            <span className="size-1.5 rounded-full bg-signal pulse-signal" />
                            {p.badge}
                          </span>
                        </div>

                        {/* Heading */}
                        <div className="mt-3">
                          {p.link ? (
                            <a
                              href={p.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/title inline-flex items-start gap-2"
                            >
                              <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-ink transition-colors group-hover/title:text-signal">
                                {p.title}
                              </h3>
                              <ArrowUpRight className="size-5 text-signal shrink-0 transition-transform group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5 mt-1" />
                            </a>
                          ) : (
                            <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-ink">
                              {p.title}
                            </h3>
                          )}
                        </div>

                        {/* Concise overview */}
                        <p className="mt-3 font-sans text-sm sm:text-base leading-relaxed text-ink/75">
                          {p.intro}
                        </p>
                      </div>

                      {/* Key highlights / Deliverables */}
                      <ul className="space-y-2.5 border-t border-ink/10 pt-4 font-sans text-xs sm:text-sm text-ink/80">
                        {p.bullets.slice(0, 3).map((b) => (
                          <li key={b} className="flex items-start gap-2.5">
                            <span className="mt-0.5 shrink-0 font-mono text-xs text-signal">▹</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech pills & Action CTAs */}
                      <div className="space-y-4 pt-1">
                        <div className="flex flex-wrap gap-1.5">
                          {p.tags.map((t) => (
                            <span
                              key={t}
                              className={`rounded-lg px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider ring-1 transition-colors ${
                                t === p.lead
                                  ? "text-signal ring-signal/30 bg-signal/10 font-medium"
                                  : "ring-ink/15 text-ink/70 bg-ink/[0.03]"
                              }`}
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        <div className="flex flex-wrap items-center gap-3 pt-1">
                          {p.links?.map((l) => (
                            <a
                              key={l.label}
                              href={l.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                                l.primary
                                  ? "bg-signal text-paper shadow-sm hover:bg-signal/90 hover:scale-[1.02]"
                                  : "border border-ink/20 bg-paper text-ink hover:border-signal/50 hover:bg-ink/[0.04]"
                              }`}
                            >
                              <span>{l.label}</span>
                              <ArrowUpRight className="size-3.5" />
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Secondary Spotlight Projects */}
          {secondaryProjects.length > 0 && (
            <div className="mt-14">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-ink/10 pb-3">
                <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-signal">
                  Specialized Analytics &amp; Explorations
                </h3>
                <span className="font-mono text-xs text-mute">
                  0{secondaryProjects.length} additional project
                  {secondaryProjects.length > 1 ? "s" : ""}
                </span>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {secondaryProjects.map((p) => (
                  <SpotlightCard
                    key={p.no}
                    className="flex flex-col justify-between border-ink/15 bg-paper/90 p-6 hover:border-signal/40 shadow-2xs"
                  >
                    <div>
                      {p.image && (
                        <div className="mb-4 overflow-hidden rounded-xl border border-ink/10 aspect-[16/9] bg-ink/5">
                          <img
                            src={p.image}
                            alt={p.title}
                            loading="lazy"
                            className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                          />
                        </div>
                      )}
                      <div className="mb-3 flex items-center justify-between text-xs font-mono text-mute">
                        <span className="font-semibold text-signal tracking-widest">
                          {p.no} — {p.sector}
                        </span>
                        <span className="rounded bg-ink/5 px-2 py-0.5 text-[10px] uppercase tracking-wider">
                          {p.badge}
                        </span>
                      </div>
                      <h4 className="font-display text-2xl font-semibold text-ink group-hover:text-signal transition-colors">
                        {p.title}
                      </h4>
                      <p className="mt-2.5 text-sm font-sans leading-relaxed text-ink/70">
                        {p.intro}
                      </p>
                      <ul className="mt-4 space-y-1.5 border-t border-ink/10 pt-3 font-sans text-xs text-ink/75">
                        {p.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2">
                            <span className="font-mono text-signal/70">▹</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-ink/10 pt-4">
                      <div className="flex flex-wrap gap-1.5">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className={`rounded px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ring-1 ${
                              t === p.lead
                                ? "text-signal ring-signal/30 bg-signal/10 font-medium"
                                : "ring-ink/15 text-ink/60"
                            }`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      {p.links?.map((l) => (
                        <a
                          key={l.label}
                          href={l.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-mono text-xs font-semibold uppercase tracking-wider text-signal hover:underline"
                        >
                          <span>{l.label}</span>
                          <ArrowUpRight className="size-3" />
                        </a>
                      ))}
                    </div>
                  </SpotlightCard>
                ))}
              </div>
            </div>
          )}

          {/* Reports & Publications */}
          <div className="mt-28">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-ink/10 pb-4">
              <div>
                <h3 className="font-mono text-sm uppercase tracking-[0.2em] text-signal font-semibold">
                  Reports &amp; Publications
                </h3>
                <p className="mt-1 font-sans text-sm text-ink/65">
                  Industry intelligence reports, policy whitepapers and ecosystem research.
                </p>
              </div>
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-mute">
                05 Publications
              </span>
            </div>
            <div className="divide-y divide-ink/10 border-y border-ink/10">
              {reports.map((r) => (
                <FadeIn key={r.no} direction="up" amount={0.1}>
                  <motion.div
                    initial="rest"
                    whileHover="hover"
                    whileTap="hover"
                    animate="rest"
                    variants={{
                      rest: { backgroundColor: "transparent", scale: 1 },
                      hover: {
                        backgroundColor: "color-mix(in oklch, var(--color-ink) 2%, transparent)",
                        scale: 1.01,
                      },
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="group relative -mx-6 grid cursor-default grid-cols-12 gap-6 overflow-hidden rounded-2xl px-6 py-8"
                  >
                    {/* Watermark Number */}
                    <motion.div
                      variants={{
                        rest: { opacity: 0, scale: 0.9, x: 40, rotate: -5 },
                        hover: { opacity: 0.04, scale: 1, x: 0, rotate: 0 },
                      }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="pointer-events-none absolute -bottom-16 -right-8 select-none font-display text-[18rem] font-bold leading-none text-ink"
                    >
                      {r.no}
                    </motion.div>

                    {/* Growing Left Accent */}
                    <motion.div
                      variants={{
                        rest: { opacity: 0, height: 0, top: "50%" },
                        hover: { opacity: 1, height: "100%", top: "0%" },
                      }}
                      transition={{ duration: 0.3, ease: "anticipate" }}
                      className="absolute left-0 w-1.5 rounded-r-full bg-signal"
                    />

                    <div className="relative z-10 col-span-12 md:col-span-4">
                      <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-mute transition-colors group-hover:text-signal">
                        {r.no} — {r.sector}
                      </p>

                      <div className="flex items-start gap-2">
                        {r.link ? (
                          <a href={r.link} target="_blank" rel="noopener noreferrer">
                            <h3 className="font-sans text-2xl font-semibold leading-tight transition-colors group-hover:text-signal">
                              {r.title}
                            </h3>
                          </a>
                        ) : (
                          <h3 className="font-sans text-2xl font-semibold leading-tight transition-colors group-hover:text-signal">
                            {r.title}
                          </h3>
                        )}
                        <motion.span
                          variants={{
                            rest: { opacity: 0, x: -10, y: 5 },
                            hover: { opacity: 1, x: 0, y: 0 },
                          }}
                          className="mt-1 text-xl leading-none text-signal"
                        >
                          {r.link ? "↗" : "→"}
                        </motion.span>
                      </div>

                      <p className="mt-4 max-w-[40ch] text-pretty font-sans text-sm leading-relaxed text-ink/60 transition-colors group-hover:text-ink/80">
                        {r.intro}
                      </p>
                    </div>
                    <div className="relative z-10 col-span-12 transition-colors md:col-span-4 md:border-l md:border-ink/10 md:pl-6 group-hover:border-signal/30">
                      <ul className="space-y-3 font-sans text-sm text-ink/70 transition-colors group-hover:text-ink/90">
                        {r.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2">
                            <span className="text-signal/40 transition-colors group-hover:text-signal">
                              ▹
                            </span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="relative z-10 col-span-12 flex self-start flex-wrap gap-2 md:col-span-4 md:justify-end">
                      {r.tags.map((t) => (
                        <span
                          key={t}
                          className={`rounded-[min(1vw,8px)] px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider ring-1 transition-colors ${
                            t === r.lead
                              ? "bg-signal/10 text-signal ring-signal/40 group-hover:bg-signal group-hover:text-paper"
                              : "bg-ink/5 text-ink ring-ink/20 group-hover:bg-ink/10"
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* capabilities */}
      <section className="bg-ink text-paper">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8 px-6 py-20">
          <FadeIn className="col-span-12 self-start lg:sticky lg:top-10 lg:col-span-5">
            <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.3em] text-signal">
              Capabilities
            </p>
            <h2 className="text-balance font-display text-[clamp(2.5rem,5vw,4rem)] font-medium leading-[0.95] tracking-[-0.02em]">
              How I create value.
            </h2>
            <p className="mt-6 max-w-[46ch] text-pretty font-sans text-paper/65">
              Four disciplines. One goal: better decisions.
            </p>
          </FadeIn>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7 mt-8 lg:mt-0">
            <StaggerList className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
              <StaggerItem>
                <SpotlightCard className="h-full border-none !bg-paper/5 ring-1 ring-white/10 p-6 flex flex-col">
                  <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-signal">
                    Data &amp; business intelligence
                  </p>
                  <p className="mb-4 font-sans text-sm leading-relaxed text-paper/70 flex-grow">
                    Transforming raw data into reliable analysis, dashboards and decision-ready
                    insights.
                  </p>
                  <p className="font-sans text-[13px] text-paper/90 border-t border-white/10 pt-4 mt-auto">
                    Power BI · SQL · Python · Excel · Data Visualization
                  </p>
                </SpotlightCard>
              </StaggerItem>
              <StaggerItem>
                <SpotlightCard className="h-full border-none !bg-paper/5 ring-1 ring-white/10 p-6 flex flex-col">
                  <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-signal">
                    Strategy &amp; research
                  </p>
                  <p className="mb-4 font-sans text-sm leading-relaxed text-paper/70 flex-grow">
                    Breaking down complex questions, researching markets and turning evidence into
                    strategic recommendations.
                  </p>
                  <p className="font-sans text-[13px] text-paper/90 border-t border-white/10 pt-4 mt-auto">
                    Business Analysis · Market Research · Financial Modelling · Competitive Analysis
                  </p>
                </SpotlightCard>
              </StaggerItem>
              <StaggerItem>
                <SpotlightCard className="h-full border-none !bg-paper/5 ring-1 ring-white/10 p-6 flex flex-col">
                  <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-signal">
                    Product &amp; delivery
                  </p>
                  <p className="mb-4 font-sans text-sm leading-relaxed text-paper/70 flex-grow">
                    Connecting business objectives with user needs and technical execution.
                  </p>
                  <p className="font-sans text-[13px] text-paper/90 border-t border-white/10 pt-4 mt-auto">
                    Product Development · Requirements Gathering · PRDs · User Research · Roadmapping · Agile
                  </p>
                </SpotlightCard>
              </StaggerItem>
              <StaggerItem>
                <SpotlightCard className="h-full border-none !bg-paper/5 ring-1 ring-white/10 p-6 flex flex-col">
                  <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-signal">
                    AI &amp; automation
                  </p>
                  <p className="mb-4 font-sans text-sm leading-relaxed text-paper/70 flex-grow">
                    Practical ways to use AI and automation to improve workflows, decision-making
                    and productivity.
                  </p>
                  <p className="font-sans text-[13px] text-paper/90 border-t border-white/10 pt-4 mt-auto">
                    Generative AI · AI Agents · AI Governance · n8n · Make · Zapier
                  </p>
                </SpotlightCard>
              </StaggerItem>
            </StaggerList>
          </div>
        </div>
      </section>

      {/* track record */}
      <TrackRecord roles={roles} />

      {/* certs + awards */}
      <section className="bg-ink text-paper overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-6 py-20">
          <div className="grid grid-cols-12 gap-8">
            <FadeIn className="col-span-12 lg:col-span-7">
              <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.3em] text-signal">
                Certification wall
              </p>
              <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-medium leading-none tracking-[-0.02em]">
                12+ industry-recognized certifications.
              </h2>
              <StaggerList className="mt-8 flex flex-wrap gap-2.5">
                {certs.map((c) => (
                  <StaggerItem key={c}>
                    <motion.span
                      className="inline-block rounded-[min(1vw,8px)] px-3 py-2 font-mono text-xs ring-1 ring-paper/15 cert-shimmer cursor-default select-none"
                      whileHover={{
                        scale: 1.08,
                        backgroundColor:
                          "color-mix(in oklch, var(--color-signal) 15%, transparent)",
                        boxShadow:
                          "0 0 20px color-mix(in oklch, var(--color-signal) 25%, transparent)",
                      }}
                      whileTap={{
                        scale: 1.08,
                        backgroundColor:
                          "color-mix(in oklch, var(--color-signal) 15%, transparent)",
                        boxShadow:
                          "0 0 20px color-mix(in oklch, var(--color-signal) 25%, transparent)",
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    >
                      {c}
                    </motion.span>
                  </StaggerItem>
                ))}
              </StaggerList>
            </FadeIn>
            <div className="col-span-12 lg:col-span-5 lg:border-l lg:border-line lg:pl-8">
              <FadeIn direction="right">
                <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.3em] text-signal">
                  Recognition
                </p>
                <h3 className="mb-6 font-display text-2xl font-medium tracking-[-0.01em]">
                  Milestones that shaped the journey.
                </h3>
              </FadeIn>
              <StaggerList className="space-y-3">
                {awards.map((a, i) => (
                  <StaggerItem key={a.name}>
                    <motion.div
                      className="group/award relative flex items-start gap-4 rounded-xl p-4 cursor-default overflow-hidden transition-colors hover:bg-paper/5"
                      initial="rest"
                      whileHover="hover"
                      whileTap="hover"
                      animate="rest"
                    >
                      {/* Animated index circle */}
                      <motion.div
                        className="relative shrink-0 flex items-center justify-center size-10 rounded-full border border-paper/15 font-mono text-xs text-paper/50"
                        variants={{
                          rest: { borderColor: "rgba(255,255,255,0.15)", scale: 1 },
                          hover: { borderColor: "var(--color-signal)", scale: 1.1 },
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      >
                        <motion.span
                          variants={{
                            rest: { color: "rgba(255,255,255,0.5)" },
                            hover: { color: "var(--color-signal)" },
                          }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </motion.span>
                        {/* Glow ring behind circle */}
                        <motion.div
                          className="absolute inset-0 rounded-full bg-signal/0 blur-md"
                          variants={{
                            rest: { opacity: 0 },
                            hover: { opacity: 0.3, backgroundColor: "var(--color-signal)" },
                          }}
                        />
                      </motion.div>

                      <div className="flex-1 min-w-0">
                        <motion.p
                          className="font-sans text-[15px] font-medium leading-snug"
                          variants={{
                            rest: { color: "var(--color-paper)" },
                            hover: { color: "var(--color-signal)" },
                          }}
                          transition={{ duration: 0.25 }}
                        >
                          {a.name}
                        </motion.p>
                        <motion.span
                          className="mt-1 inline-block font-mono text-[10px] uppercase tracking-[0.2em] rounded-full px-2 py-0.5"
                          variants={{
                            rest: { opacity: 0.4, backgroundColor: "transparent" },
                            hover: {
                              opacity: 1,
                              backgroundColor:
                                "color-mix(in oklch, var(--color-signal) 15%, transparent)",
                            },
                          }}
                        >
                          {a.year}
                        </motion.span>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerList>
            </div>
          </div>
        </div>

        {/* Marquee ticker */}
        <FadeIn>
          <div className="relative border-t border-line py-6">
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />
            <div className="flex overflow-hidden">
              <motion.div
                className="flex shrink-0 gap-4"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 35, ease: "linear", repeat: Infinity }}
              >
                {[...certs, ...certs].map((c, i) => (
                  <span
                    key={`${c}-${i}`}
                    className="whitespace-nowrap rounded-full px-4 py-2 font-mono text-xs ring-1 ring-paper/15 text-paper/70 hover:ring-signal/50 hover:text-signal hover:bg-signal/10 transition-all duration-300 cursor-default select-none"
                  >
                    {c}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* affiliations */}
      <section className="bg-paper text-ink">
        <div className="mx-auto max-w-[1400px] px-6 py-20">
          <FadeIn direction="up">
            <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.3em] text-signal">
              Beyond the job title
            </p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-medium leading-none tracking-[-0.02em]">
              Building, leading, teaching, contributing.
            </h2>
            <p className="mt-4 max-w-[52ch] text-pretty font-sans text-base text-ink/60">
              Some of my most meaningful work happens outside formal job descriptions.
            </p>
          </FadeIn>
          <StaggerList className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {affiliations.map((a) => (
              <StaggerItem key={a.name}>
                <motion.div
                  initial="rest"
                  whileHover="hover"
                  whileTap="hover"
                  animate="rest"
                  className="group relative h-40 w-full cursor-default"
                  style={{ perspective: "1000px" }}
                >
                  <motion.div
                    className="relative h-full w-full"
                    style={{ transformStyle: "preserve-3d" }}
                    variants={{
                      rest: { rotateY: 0 },
                      hover: { rotateY: 180 },
                    }}
                    transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                  >
                    {/* Front */}
                    <div
                      className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-xl border border-ink/10 bg-paper p-6"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <div className="flex justify-between items-start gap-4">
                        <span className="font-sans text-lg font-semibold tracking-[-0.01em] text-ink">
                          {a.name}
                        </span>
                        <span className="text-signal text-xl leading-none opacity-0 group-hover:opacity-100 transition-opacity">
                          ↗
                        </span>
                      </div>
                      <span className="mt-6 font-mono text-[11px] uppercase tracking-[0.15em] text-mute">
                        {a.role}
                      </span>
                    </div>

                    {/* Back */}
                    <div
                      className="absolute inset-0 flex flex-col justify-center overflow-hidden rounded-xl border border-signal/30 p-6"
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                        backgroundColor:
                          "color-mix(in oklch, var(--color-signal) 4%, var(--color-paper))",
                      }}
                    >
                      <span className="font-sans text-[13px] leading-relaxed text-ink/90 relative z-10">
                        {a.desc}
                      </span>
                      <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-signal/20 blur-2xl pointer-events-none" />
                    </div>
                  </motion.div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </section>

      {/* contact */}
      <section className="bg-signal text-ink relative overflow-hidden">
        {/* Animated background circles */}
        <motion.div
          className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-ink/5 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-paper/10 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative mx-auto max-w-[1400px] px-6 py-20">
          <FadeIn>
            <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.3em]">Contact</p>
            <h2 className="text-balance font-display text-[clamp(3rem,9vw,7.5rem)] font-medium leading-[0.92] tracking-[-0.02em]">
              Let's turn data into decisions.
            </h2>
            <p className="mt-6 max-w-[52ch] text-pretty font-sans text-lg text-ink/75">
              Have a business problem, data challenge, AI opportunity or technology idea? Let's
              talk.
            </p>
          </FadeIn>
          <StaggerList className="mt-12 flex flex-col gap-6 md:flex-row md:flex-wrap md:justify-between md:items-center">
            <StaggerItem>
              <MagneticLink
                href="mailto:femiadejobipaulolorunjedalo@gmail.com"
                className="group relative whitespace-nowrap font-sans text-[clamp(0.9rem,2vw,1.75rem)] font-semibold tracking-[-0.01em]"
              >
                <span className="relative">
                  femiadejobipaulolorunjedalo@gmail.com
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-ink transition-all duration-300 group-hover:w-full" />
                </span>
              </MagneticLink>
            </StaggerItem>
            <StaggerItem>
              <MagneticLink
                href="https://wa.me/2349017748447"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative whitespace-nowrap font-sans text-[clamp(0.9rem,2vw,1.75rem)] font-semibold tracking-[-0.01em]"
              >
                <span className="relative">
                  WhatsApp
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-ink transition-all duration-300 group-hover:w-full" />
                </span>
              </MagneticLink>
            </StaggerItem>
            <StaggerItem>
              <MagneticLink
                href="https://www.linkedin.com/in/paul-femi-adejobi"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative whitespace-nowrap font-sans text-[clamp(0.9rem,2vw,1.75rem)] font-semibold tracking-[-0.01em]"
              >
                <span className="relative">
                  LinkedIn
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-ink transition-all duration-300 group-hover:w-full" />
                </span>
              </MagneticLink>
            </StaggerItem>
          </StaggerList>
          <FadeIn direction="up" delay={0.3}>
            <div className="mt-16 flex items-center justify-between border-t border-ink/20 pt-6 font-mono text-[11px] uppercase tracking-[0.2em]">
              <span>© 2026 Paul Femi-Adejobi</span>
              <span>Lagos, NG</span>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
