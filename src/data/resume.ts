// Central source of truth for resume content.
// Update this file to change what renders across the site.

export const profile = {
  name: "Dave Fisher",
  title: "Full-Stack Software Developer",
  tagline:
    "Full-stack software developer who makes clunky things run smoothly — building customer-facing APIs and web apps end to end with AI-augmented workflows.",
  location: "Seattle, WA",
  email: "dave.j.fish@gmail.com",
  // PDF served from /public. Drop the file here to enable the download button.
  resumeFile: "/Dave-Fisher-Resume.pdf",
  socials: {
    linkedin: "https://linkedin.com/in/davefisher88",
    github: "https://github.com/davejfish",
  },
} as const;

export const about = {
  // A longer, first-person intro for the About section. Edit to taste.
  body: [
    "I'm a full-stack developer based in Seattle who likes taking tangled, clunky systems and making them run smoothly. Most of my work lives at the seam between customer-facing APIs and the web apps that consume them.",
    "I lean on AI-augmented workflows to ship faster — prototyping, accelerating feature delivery, and strengthening code review — without losing sight of solid fundamentals like test-driven development and clean data modeling.",
  ],
} as const;

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  { label: "Languages", items: ["JavaScript", "TypeScript", "Python 3", "HTML/CSS"] },
  {
    label: "Frameworks & Libraries",
    items: ["Next.js", "NestJS", "React", "Node.js", "Tailwind CSS", "Federated GraphQL"],
  },
  { label: "Data & ORMs", items: ["Prisma", "Drizzle ORM", "TypeORM"] },
  {
    label: "AWS",
    items: ["Lambda", "DynamoDB", "ECS", "API Gateway", "SQS", "CloudWatch", "Secrets Manager"],
  },
  { label: "AI Tools", items: ["Claude Code", "GitHub Copilot"] },
  {
    label: "Practices",
    items: ["Test-driven development", "Microservices", "REST API design", "OAuth"],
  },
];

export type ExperienceItem = {
  company: string;
  role: string;
  start: string;
  end: string;
  summary?: string;
  // Optional sub-projects within a role, mirroring the resume structure.
  projects: {
    name: string;
    highlights: string[];
  }[];
};

export const experience: ExperienceItem[] = [
  {
    company: "ReUp Education",
    role: "Fullstack Software Engineer 2",
    start: "Jan 2023",
    end: "Present",
    summary:
      "Ed-tech company partnering with colleges, universities, and states to re-enroll and graduate adult learners who stopped out — using data, predictive scoring, and coaching.",
    projects: [
      {
        name: "External API",
        highlights: [
          "Sole developer building a customer-facing API from the ground up, used by educational placement companies to supply lead information.",
          "Shipped endpoints to product spec using test-driven development; the API has collected 5M+ leads powering ReUp's outreach.",
        ],
      },
      {
        name: "Partner App",
        highlights: [
          "Built a web application for customers to retrieve, view, and manipulate lead data, with bulk import to support larger customers.",
          "Implemented batch processing for Salesforce insertion and CSV upload/download of original and transformed data alongside the team.",
          "Added OAuth authentication and password encryption.",
        ],
      },
      {
        name: "Student Analytics App",
        highlights: [
          "Built the backend for a web application that surfaces student statistics to customers — enrollment rate, retention, and related metrics.",
          "Worked with the team to split the NestJS + Prisma backend into independent services — B2B, dashboard, auth, file, query, and notification — composed under a federated GraphQL gateway.",
          "Focused on backend design and the data model behind the reporting and analytics layer.",
        ],
      },
      {
        name: "Learner App (Contract · Jan 2023 – April 2023)",
        highlights: [
          "Built a web application from the ground up with a four-person team on two-week sprints.",
          "Created RESTful APIs and controllers for key features using NestJS, TypeORM, and GraphQL.",
          "Developed a responsive frontend with React, Next.js, and Tailwind CSS; implemented backend services in Node.js.",
          "Gave and received code review feedback across the codebase.",
        ],
      },
    ],
  },
];

export const education = [
  {
    school: "University of Washington",
    detail: "Communications",
  },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  sourceUrl?: string;
  comingSoon?: boolean;
};

// Powers the Projects section.
export const projects: Project[] = [
  {
    title: "Federated GraphQL Demo",
    description:
      "A hands-on demo modeling a users → posts → comments domain across independent subgraphs, composed under a single gateway to show how Apollo Federation stitches entities together and resolves references across service boundaries.",
    tech: ["GraphQL", "Apollo Federation", "TypeScript", "Node.js"],
    sourceUrl: "https://github.com/davejfish/federation-gateway",
  },
  {
    title: "Hypersmith.ai",
    description:
      "A local-first AI coding workspace that helps developers scale projects with AI agents while keeping code and models on their own machine. It unifies capabilities usually spread across separate tools: Recall, a code-retrieval engine that indexes a repo across semantic, lexical, structural, dependency, and git-history dimensions to give agents typed search APIs instead of raw shell tools — shrinking prompts and cutting token usage; task execution that runs each task against an isolated git worktree through a provider-agnostic task-runner boundary, with durable progress, recovery, and cancellation; and a first-class benchmark harness for evaluating real local-model task runs with paired-variant comparisons. Architected for graceful degradation under partial failure, with clean route → model → service → datastore layering and a dual-engine SQLite/Postgres persistence layer.",
    tech: [
      "TypeScript",
      "Fastify",
      "React",
      "Electron",
      "Drizzle ORM",
      "SQLite/Postgres (pgvector)",
      "LanceDB",
      "node-llama-cpp",
    ],
    comingSoon: true,
  },
];
