export interface Project {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  github: string;
  demo: string;
  tags: string[];
  technologies: string[];
  impact: string;
  year: string;
  status: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "BlinqTrack AI - Expense Tracker",
    shortDescription: "AI-powered intelligent expense tracking application",
    description:
      "BlinqTrack is an intelligent expense tracking application powered by AI. It helps you categorize, analyze, and manage your expenses effortlessly. Track your spending patterns with AI insights and get smart recommendations to optimize your budget.",
    github: "https://github.com/chaitanya-code24/BlinqTrack_AI-Expense-Tracker",
    demo: "https://ai-expense-tracker-l8reqtq8g-chaitanya-lokhandes-projects.vercel.app/",
    tags: ["AI", "Expense Tracking", "Analytics"],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "AI API"],
    impact: "Turns plain expense logs into AI-guided money decisions.",
    year: "2026",
    status: "Live",
  },
  {
    id: 2,
    title: "ChatDock",
    shortDescription: "Modern chat application for real-time communication",
    description:
      "ChatDock is a feature-rich chat application that enables real-time communication with an intuitive user interface. Built with modern web technologies, it provides a seamless experience for messaging and collaboration.",
    github: "https://github.com/chaitanya-code24/ChatDock",
    demo: "https://chat-dock.vercel.app/",
    tags: ["Chat", "Real-time", "Communication"],
    technologies: ["React", "Node.js", "Socket.io", "Tailwind CSS"],
    impact: "Built for fast conversations, live updates, and cleaner collaboration.",
    year: "2026",
    status: "Live",
  },
  {
    id: 3,
    title: "AI Resume Builder Pro",
    shortDescription: "Build professional resumes with AI assistance",
    description:
      "AI Resume Builder Pro is a serverless application that helps you create professional, ATS-optimized resumes. With AI suggestions and real-time preview, you can craft the perfect resume for your dream job.",
    github: "https://github.com/swayamsf3/ai-resume-pro",
    demo: "https://ai-resume-pro-vert.vercel.app/",
    tags: ["AI", "Resume Builder", "Career"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel Functions"],
    impact: "Helps users generate sharper, ATS-aware resumes with less friction.",
    year: "2026",
    status: "Live",
  },
];
