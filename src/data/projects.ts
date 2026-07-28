import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "KPI Management System",
    slug: "kpi-management-system",
    description:
      "Enterprises needed a single place to track KPIs using the Balanced Scorecard (BSC) methodology with multi-level approval and real-time visibility. I built a full-stack platform that centralizes goal setting, formula-based scoring, and approval workflows. Teams can now align on objectives and track progress from one dashboard. Built with Vue 3, Ant Design Vue, Vuex, Chart.js, Socket.IO, TypeScript, and ExcelJS.",
    image: "/images/dashboard.png",
    domain: "Enterprise",
    ownership: "client",
    liveUrl: "",
    githubUrl: "https://github.com/vantungdz/kpi_bsc",
    codeNote: "Internal company project — no public demo",
    technologies: ["Vue 3", "Ant Design Vue", "Vuex", "Chart.js", "Socket.IO", "TypeScript", "ExcelJS"],
    features: [
      "Multi-level KPI tracking with BSC methodology",
      "Formula-based scoring and configurable targets",
      "Real-time notifications and live dashboard updates",
      "Role-based access control (RBAC) for approvals",
      "Analytics and export (Excel) for reporting",
      "Responsive UI for desktop and tablet",
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
    title: "PaySplit",
    slug: "paysplit",
    description:
      "Splitting bills and tracking who paid what in groups was messy and error-prone. I designed and built a mobile app that lets groups create expenses, assign shares, and settle up with real-time sync and MoMo payment integration. Reduces friction in group payments and keeps everyone aligned. Built with React Native, Expo, TypeScript, Node.js, Express, MongoDB, Socket.IO, and JWT.",
    image: "/images/portfolio.jpg",
    domain: "Finance",
    ownership: "personal",
    liveUrl: "",
    githubUrl: "",
    codeNote: "Mobile app — repo not published",
    technologies: ["React Native", "Expo", "TypeScript", "Node.js", "Express", "MongoDB", "Socket.IO", "JWT"],
    features: [
      "Real-time payment and balance tracking across devices",
      "JWT-secured auth and session handling",
      "MoMo integration for local payments",
      "Push and in-app notifications for updates",
      "Admin dashboard for oversight and support",
    ],
    year: "2023",
    relatedPostSlugs: [],
    caseStudy: {
      problem:
        "Friend groups and roommates were tracking shared expenses in chat threads and mental math, which made it easy to lose track of who owed what and led to awkward, delayed settlements.",
      challenges: [
        "Keeping balances in sync in real time when multiple members add expenses concurrently from different devices",
        "Integrating MoMo payments so settling up happens inside the app instead of switching to a separate banking app",
        "Designing a data model where an expense can be split unevenly (not just equal shares) without the UI becoming confusing",
      ],
      decisions: [
        {
          decision: "MongoDB over a relational database",
          why: "Group/expense/split data is naturally nested and schema shape varies per split type, which mapped more directly to documents than normalized tables for a fast-moving personal project.",
        },
        {
          decision: "Socket.IO for balance updates instead of polling",
          why: "Group expense apps live or die on trust — if one member's phone shows a stale balance, they lose confidence in the app immediately.",
        },
      ],
      results: [
        "Group expenses and balances stay in sync across devices without manual refresh",
        "Settling up happens without leaving the app, reducing the friction that usually kills these apps' adoption in a group",
      ],
      lessonsLearned: [
        "For a solo/personal project, MongoDB's flexibility sped up early iteration, but I'd revisit that choice for a version with more complex reporting queries",
        "Payment integrations deserve a sandboxed test plan written before the first line of integration code — MoMo's edge cases surfaced late otherwise",
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
export const projectCategories = ["All", "Enterprise", "Finance", "Personal"];
