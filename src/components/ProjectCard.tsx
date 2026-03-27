import Link from "next/link";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[color:var(--card)] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:border-[color:var(--accent)]/40">
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--accent)]/70 to-transparent" />

      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.24em] text-[color:var(--text-soft)]">
            {project.year} • {project.status}
          </p>
          <h3 className="text-2xl font-semibold text-[color:var(--text-primary)]">
            {project.title}
          </h3>
        </div>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-[color:var(--text-soft)]">
          {project.tags[0]}
        </span>
      </div>

      <p className="mb-4 text-sm leading-7 text-[color:var(--text-secondary)]">
        {project.description}
      </p>

      <p className="mb-5 text-sm font-medium text-[color:var(--accent-2)]">
        {project.impact}
      </p>

      <div className="mb-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-[color:var(--accent)]/12 px-3 py-1 text-xs text-[color:var(--accent)]"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-white/10 px-3 py-1 text-xs text-[color:var(--text-soft)]"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-3">
        <Link
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 px-4 py-3 text-sm font-semibold text-[color:var(--text-primary)] transition hover:border-[color:var(--accent)]/50 hover:bg-white/5"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.002.07 1.527 1.03 1.527 1.03.89 1.529 2.341 1.544 2.914 1.186.092-.923.35-1.555.636-1.913-2.22-.253-4.555-1.112-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.817c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.195 20 14.44 20 10.017 20 4.484 15.522 0 10 0z"
              clipRule="evenodd"
            />
          </svg>
          GitHub
        </Link>

        {project.demo && (
          <Link
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[color:var(--accent)] px-4 py-3 text-sm font-semibold text-[color:var(--surface)] transition hover:brightness-110"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            Live Site
          </Link>
        )}
      </div>
    </article>
  );
}
