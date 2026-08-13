import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "KPI Management System",
    slug: "kpi-management-system",
    description:
      "Enterprises needed a single place to track KPIs using the Balanced Scorecard (BSC) methodology with multi-level assignment, approval, and real-time visibility. I built a centralized platform covering KPI creation, assignment, cascading, and performance tracking, with formula-based scoring, live dashboards, and Excel-based reporting. Teams can now align on objectives and track progress from one dashboard. Built with Vue 3, Ant Design Vue, Vuex, Chart.js, Socket.IO, TypeScript, and ExcelJS.",
    image: "/images/dashboard.png",
    domain: "Enterprise",
    ownership: "client",
    liveUrl: "",
    githubUrl: "https://github.com/vantungdz/kpi_bsc",
    codeNote: "Internal company project — no public demo",
    technologies: ["Vue 3", "Ant Design Vue", "Vuex", "Chart.js", "Socket.IO", "TypeScript", "ExcelJS"],
    features: [
      "KPI creation, assignment, cascading, and performance tracking workflows",
      "Formula-based scoring and configurable targets",
      "Dashboards and data visualization for monitoring KPI progress",
      "Real-time data synchronization and updates via Socket.IO",
      "Multi-level KPI assignment and approval business rules",
      "Excel-based data processing and reporting (ExcelJS)",
    ],
    year: "2024",
    relatedPostSlugs: [],
    caseStudy: {
      problem:
        "Departments were tracking KPIs in scattered spreadsheets with no shared scoring logic, so managers couldn't see real-time progress or trust that numbers were computed the same way across teams.",
      challenges: [
        "Modeling the Balanced Scorecard hierarchy (objectives → KPIs → formulas → targets) in a way non-technical managers could configure without code changes",
        "Keeping scores consistent when formulas reference other KPIs, including values still pending approval",
        "Pushing live updates to dashboards without overwhelming the client with excessive Socket.IO traffic",
      ],
      decisions: [
        {
          decision: "Formula-based scoring engine instead of hardcoded calculations",
          why: "Different departments needed different weighting and target logic; a configurable formula layer meant new KPI types didn't require a code deploy.",
        },
        {
          decision: "Multi-level approval workflow with RBAC",
          why: "BSC scoring only works if numbers are trusted — approval gates prevent unverified data from reaching the shared dashboard.",
        },
      ],
      results: [
        "Replaced spreadsheet-based KPI tracking with a single source of truth across departments",
        "Managers get real-time visibility into approval status and scoring instead of waiting on manual reports",
        "Excel export kept the tool compatible with existing reporting habits during rollout",
      ],
      lessonsLearned: [
        "Configurable formulas are worth the extra design time — the alternative is a stream of small code changes every time a department's scoring rules shift",
        "Real-time features need throttling from day one; retrofitting rate limits onto Socket.IO events after users are used to instant updates is harder",
      ],
    },
  },
  {
    title: "AI Database Assistant / OpenClaw Integration",
    slug: "ai-database-assistant",
    description:
      "Querying business data usually means writing code or waiting on someone who can. I built a Node.js integration layer that lets an AI agent interact with database data through natural-language conversations, using controlled backend tools instead of giving the LLM direct database access. Integrated with OpenClaw for conversational access to business data. Built with Node.js, TypeScript, MongoDB, OpenClaw, and function calling.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
    domain: "AI",
    ownership: "personal",
    liveUrl: "",
    githubUrl: "",
    codeNote: "Integration project — repo not published",
    technologies: ["Node.js", "TypeScript", "MongoDB", "OpenClaw", "LLM", "Function Calling"],
    features: [
      "Tool/function calling so the LLM picks the right database operation from a natural-language question",
      "Reusable tools for querying, filtering, searching, and counting records",
      "Multi-step workflow: select tool + parameters → execute → generate a natural-language response",
      "Database layer supporting multiple collections",
      "LLM reasoning separated from direct database access via a controlled tool layer",
      "Conversational access to business data through OpenClaw integration",
    ],
    year: "2025",
    relatedPostSlugs: [],
    caseStudy: {
      problem:
        "Non-technical stakeholders needed answers from live database data (counts, filters, lookups) without writing a query or waiting on an engineer to pull a report.",
      challenges: [
        "Letting an LLM decide *which* database operation to run from an ambiguous natural-language question, without giving it raw query access",
        "Designing a tool layer generic enough to cover querying, filtering, searching, and counting across multiple collections",
        "Keeping the multi-step loop (select tool → execute → respond) reliable when the LLM picks the wrong tool or malformed parameters",
      ],
      decisions: [
        {
          decision: "Controlled tool/function-calling layer instead of direct LLM-to-database access",
          why: "Letting the LLM call a fixed set of backend tools instead of writing raw queries keeps every database interaction auditable and bounded to operations I explicitly implemented.",
        },
        {
          decision: "OpenClaw as the conversational front-end",
          why: "Reusing an existing conversational integration meant focusing engineering effort on the tool layer and workflow instead of rebuilding a chat interface.",
        },
      ],
      results: [
        "Working natural-language-to-database pipeline: question → tool selection → execution → grounded response",
        "Reusable tool set (query, filter, search, count) that generalizes across multiple MongoDB collections",
      ],
      lessonsLearned: [
        "A narrow, explicit tool layer is easier to trust and debug than giving an LLM broader database access, even when it means more upfront tool design",
        "Separating 'LLM reasoning' from 'data access' as distinct layers made it much easier to reason about failure modes independently",
      ],
    },
  },
  {
    title: "Bakery E-commerce & Management System",
    slug: "bakery-ecommerce-management-system",
    description:
      "A bakery needed one system to handle online ordering, custom cakes, delivery/pickup, payments, and staff operations instead of juggling disconnected tools. I built a full-stack e-commerce and management platform: a customer storefront plus a multi-role admin dashboard for admin, order staff, baker, and accountant roles, with an end-to-end order workflow and automated bank-transfer payment verification. Built with Next.js 16, React 19, TypeScript, Tailwind CSS 4, Node.js, Express 5, PostgreSQL, Supabase, JWT, VietQR, and SePay.",
    image: "/images/ecommerce.jpeg",
    domain: "E-commerce",
    ownership: "personal",
    liveUrl: "",
    githubUrl: "",
    codeNote: "Full-stack project — repo not published",
    technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Node.js", "Express 5", "PostgreSQL", "Supabase", "JWT", "bcrypt", "VietQR", "SePay", "Nodemailer"],
    features: [
      "Customer storefront and multi-role admin dashboard (admin, order staff, baker, accountant)",
      "RESTful services for products, orders, customers, vouchers, reviews, loyalty points, blog content, and store settings",
      "Custom authentication and RBAC on a relational PostgreSQL (Supabase) database",
      "End-to-end order workflow: pending → confirmed → baking → delivering → delivered",
      "VietQR + SePay webhook integration to auto-verify bank-transfer payments against order references",
      "Custom cake ordering, loyalty points, vouchers, image uploads, and transactional email notifications",
      "Row Level Security (RLS) with authorization enforced in backend middleware",
    ],
    year: "2025",
    relatedPostSlugs: [],
    caseStudy: {
      problem:
        "The business was running ordering, custom cake requests, delivery coordination, and payment confirmation across separate manual channels, making it hard to track order status or verify payments without back-and-forth.",
      challenges: [
        "Modeling a five-stage order workflow (pending → confirmed → baking → delivering → delivered) that stays consistent across the storefront, admin dashboard, and notification emails",
        "Automatically matching incoming bank-transfer webhooks (VietQR/SePay) to the correct order without manual reconciliation",
        "Supporting four distinct staff roles (admin, order staff, baker, accountant) with different permissions on the same data, without duplicating dashboard code per role",
      ],
      decisions: [
        {
          decision: "Supabase (PostgreSQL) with Row Level Security plus backend middleware authorization",
          why: "RLS gave a database-level safety net for a relational order/customer/payment model, while still enforcing the real business rules explicitly in backend middleware rather than relying on RLS alone.",
        },
        {
          decision: "Webhook-based payment verification (VietQR + SePay) instead of manual confirmation",
          why: "Matching transaction metadata to order references automatically removed the slowest, most error-prone step in the original manual process — someone checking a bank app and updating order status by hand.",
        },
      ],
      results: [
        "Bank-transfer payments are verified automatically against order references instead of manual reconciliation",
        "Four staff roles operate from one shared dashboard with role-appropriate permissions instead of separate tools",
        "Customers get a clear order status pipeline from placement through delivery",
      ],
      lessonsLearned: [
        "Designing the order-status state machine before writing storefront/admin UI paid off — every downstream screen just reflects one shared source of truth",
        "RLS is a strong safety net but not a substitute for explicit authorization checks in backend middleware — treating it as the only guard would have been a mistake",
      ],
    },
  },
  {
    title: "Enterprise Management System",
    slug: "enterprise-management-system",
    description:
      "Tomaho Soft needed a unified interface for accounting, warehouse, and operations instead of scattered tools. I contributed to a React-based enterprise platform that brings these workflows into one place with consistent UX and reusable components. Improved day-to-day operations for staff and reduced context-switching. Built with React, Redux-Saga, Styled Components, Formik, and Yup.",
    image: "/images/tomaho.png",
    domain: "Enterprise",
    ownership: "client",
    liveUrl: "",
    githubUrl: "",
    codeNote: "Client project — code confidential",
    technologies: ["ReactJS", "Redux-Saga", "Styled Components", "Formik", "Yup"],
    features: [
      "Unified UI for accounting and warehouse workflows",
      "Form validation and error handling with Formik + Yup",
      "Reusable component library for consistency",
      "State management with Redux-Saga for async flows",
    ],
    year: "2022",
    relatedPostSlugs: [],
    caseStudy: {
      problem:
        "Staff were switching between separate accounting, warehouse, and operations tools with inconsistent UX, which slowed down routine workflows and made training new staff harder.",
      challenges: [
        "Bringing three previously separate workflows into one consistent UI without breaking users' existing habits",
        "Handling complex async flows (multi-step approvals, stock updates) predictably across the app",
        "Building a shared component library while the product was still actively evolving requirements",
      ],
      decisions: [
        {
          decision: "Redux-Saga for async orchestration",
          why: "Warehouse and accounting flows involve multi-step, conditional side effects (e.g. stock check → approval → ledger update); sagas made those sequences explicit and testable compared to thunk-based ad-hoc chains.",
        },
        {
          decision: "Formik + Yup for all forms",
          why: "Consistent validation UX across accounting and warehouse forms reduced the amount of custom validation code duplicated per module.",
        },
      ],
      results: [
        "Reduced context-switching for staff by consolidating three workflows into one consistent interface",
        "Reusable component library shortened the time to ship new modules later in the project",
      ],
      lessonsLearned: [
        "Investing early in a shared component library paid off once the product scope expanded — retrofitting consistency later is much more expensive",
        "Redux-Saga is powerful but has a real learning curve for teammates; clear conventions for saga structure mattered as much as the library choice itself",
      ],
    },
  },
  {
    title: "Banking System",
    slug: "banking-system",
    description:
      "A large-scale banking product required a modern, type-safe frontend for financial operations and internal workflows. I worked on the React/Next.js frontend: new UI features, requirement analysis, and integration with existing services. The result is a maintainable codebase that supports complex flows and stays performant. Built with React, TypeScript, Next.js, Redux, and Redux-Saga.",
    image: "/images/dashboard.png",
    domain: "Finance",
    ownership: "client",
    liveUrl: "",
    githubUrl: "",
    codeNote: "Client project — code confidential",
    technologies: ["ReactJS", "TypeScript", "Next.js", "Redux", "Redux-Saga"],
    features: [
      "Type-safe interfaces for critical financial operations",
      "New features delivered from requirement to production",
      "Collaboration with backend on API design and contracts",
      "Stable, performant UI for high-traffic internal use",
    ],
    year: "2023",
    relatedPostSlugs: [],
    caseStudy: {
      problem:
        "Internal banking operations relied on an aging frontend that made it slow and risky to ship new financial features, since small mistakes in financial UIs have outsized consequences.",
      challenges: [
        "Working in a domain where incorrect UI state (e.g. a stale balance or misapplied filter) has real financial consequences, not just cosmetic bugs",
        "Analyzing requirements directly with stakeholders rather than working purely from a finished spec, since some workflows weren't fully documented",
        "Keeping the app performant under high internal traffic while adding new features on top of existing Redux-Saga flows",
      ],
      decisions: [
        {
          decision: "Kept Redux + Redux-Saga rather than migrating to a lighter state library",
          why: "The existing codebase already had established saga patterns for financial flows; a mid-project migration risked introducing regressions in a domain where correctness matters more than developer convenience.",
        },
        {
          decision: "TypeScript-first for new features",
          why: "Type-safety catches a category of bugs (wrong field mapping, incorrect currency/amount types) before they reach a financial UI in production.",
        },
      ],
      results: [
        "Delivered new features end-to-end from requirement analysis to production without regressing existing financial workflows",
        "Maintained a stable, performant UI for high-traffic internal use despite growing feature scope",
      ],
      lessonsLearned: [
        "In regulated/financial domains, resisting the urge to introduce a 'better' library mid-project is often the more senior decision than chasing the latest pattern",
        "Direct requirement analysis with stakeholders surfaced edge cases that a finished spec alone wouldn't have caught",
      ],
    },
  },
  {
    title: "RAG Demo — Document Q&A",
    slug: "rag-demo",
    description:
      "A hands-on demo exploring how Retrieval-Augmented Generation works: users upload documents and ask questions, and answers are grounded exclusively in retrieved passages instead of the model's general knowledge. Built with Node.js, Hugging Face embeddings (sentence-transformers/all-MiniLM-L6-v2), and the OpenAI Chat API.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    domain: "Personal",
    ownership: "personal",
    liveUrl: "",
    githubUrl: "https://github.com/vantungdz/RAG-demo",
    technologies: ["Node.js", "Hugging Face Inference API", "OpenAI API", "Vector Embeddings", "Cosine Similarity"],
    features: [
      "Document chunking (500–800 chars) and offline embedding generation",
      "Cosine-similarity retrieval of top-3 relevant chunks per query",
      "Answers constrained to retrieved context — explicit 'not available' fallback instead of hallucinating",
      "Displays retrieved chunks and similarity scores for transparency",
    ],
    year: "2024",
    relatedPostSlugs: ["rag-explained-for-developers"],
    caseStudy: {
      problem:
        "I wanted to understand RAG beyond the theory — specifically, how retrieval quality actually affects whether an LLM answer is grounded or hallucinated — by building a minimal working system instead of just reading about it.",
      challenges: [
        "Choosing a chunk size that keeps enough context per passage without diluting the embedding with unrelated content",
        "Forcing the model to say 'not available' instead of guessing when retrieval doesn't surface a relevant chunk",
        "Keeping the system simple enough to reason about — no vector database, just embeddings persisted to a JSON file",
      ],
      decisions: [
        {
          decision: "JSON file storage instead of a vector database",
          why: "For a demo meant to expose how RAG works, a real vector DB would have hidden the retrieval mechanics behind another abstraction; a flat file made the cosine-similarity step inspectable.",
        },
        {
          decision: "Surfacing retrieved chunks + similarity scores in the UI",
          why: "The point of the demo was transparency — seeing why the model answered (or refused to answer) a certain way, not just the final text.",
        },
      ],
      results: [
        "Working end-to-end RAG pipeline: upload → chunk → embed → retrieve → grounded answer",
        "Concretely demonstrated the difference between a grounded answer and a hallucinated one by testing questions with no matching content in the documents",
      ],
      lessonsLearned: [
        "Retrieval quality matters more than model choice for grounded Q&A — a good chunk beats a bigger LLM with a bad chunk",
        "Explicitly instructing the model to admit missing context is a small prompt change with an outsized effect on trustworthiness",
      ],
    },
  },
  {
    title: "Web Blog",
    slug: "web-blog",
    description:
      "Vue 3, Vite, content-driven technical blog with theme toggle, search, and markdown-based posts. Case studies and tutorials on AI, Vue, and developer tools.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    domain: "Personal",
    ownership: "personal",
    liveUrl: (typeof process !== "undefined" && process.env.NEXT_PUBLIC_BLOG_URL) || "",
    githubUrl: "",
    codeNote: "Private repo",
    technologies: ["Vue 3", "Vite", "Markdown", "Vue Router", "Pinia"],
    features: [
      "Markdown + frontmatter (gray-matter, marked)",
      "Related project ↔ portfolio deep links",
      "Theme toggle, search, archive, tags",
    ],
    year: "2025",
    relatedPostSlugs: ["why-i-started", "vue3-tips", "how-ai-coding-assistants-work"],
  },
];

/** Get project by slug for blog → portfolio linking. */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
export const projectCategories = ["All", "Enterprise", "Finance", "E-commerce", "AI", "Personal"];
