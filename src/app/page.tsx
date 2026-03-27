import Link from "next/link";
import Navbar from "@/components/Navbar";
import { projects } from "@/data/projects";

const stats = [
  { value: "3", label: "live products shipped" },
  { value: "AI", label: "baked into real workflows" },
  { value: "Full-stack", label: "from interface to deployment" },
];

const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind",
  "Node.js",
  "Socket.io",
  "Vercel",
  "AI Integrations",
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="grain overflow-hidden pb-24">
        <section className="section-shell fade-up grid min-h-[calc(100vh-73px)] items-center gap-12 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
          <div>
            <p className="eyebrow mb-6">Full-stack developer • AI-focused builder</p>
            <h1 className="headline max-w-4xl text-6xl text-[color:var(--surface)] md:text-8xl">
              I build products that feel sharp, useful, and impossible to ignore.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[color:var(--text-secondary)] md:text-xl">
              I&apos;m Chaitanya. I design and ship modern web experiences with real-time
              features, AI workflows, and a cleaner product feel than the usual
              template-heavy builds.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="rounded-full bg-[color:var(--accent)] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--surface)] transition hover:brightness-110"
              >
                Explore Projects
              </Link>
              <Link
                href="https://github.com/chaitanya-code24"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--text-primary)] transition hover:border-[color:var(--accent)]/50 hover:bg-white/5"
              >
                GitHub
              </Link>
            </div>
          </div>

          <div className="glass-panel relative overflow-hidden rounded-[2rem] p-6 md:p-8">
            <div className="absolute right-6 top-6 h-20 w-20 rounded-full bg-[color:var(--accent)]/20 blur-2xl" />
            <div className="absolute bottom-8 left-8 h-24 w-24 rounded-full bg-[color:var(--accent-2)]/15 blur-2xl" />
            <div className="relative space-y-6">
              <div className="flex items-center justify-between">
                <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--text-soft)]">
                  Snapshot
                </p>
                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                  Available for cool builds
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[1.5rem] border border-white/10 bg-black/10 p-4"
                  >
                    <p className="font-[family:var(--font-display)] text-3xl text-[color:var(--surface)]">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[color:var(--text-secondary)]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-[color:var(--surface)] p-5 text-[color:var(--surface-strong)]">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent)]">
                  Highlight Project
                </p>
                <h2 className="mt-3 font-[family:var(--font-display)] text-3xl">
                  AI Resume Builder Pro
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  ATS-aware resume generation, AI writing help, and now a proper live
                  link that actually goes somewhere.
                </p>
                <Link
                  href="https://ai-resume-pro-vert.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex rounded-full bg-[color:var(--surface-strong)] px-5 py-3 text-sm font-semibold text-[color:var(--surface)] transition hover:opacity-90"
                >
                  Open Live Project
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell py-8">
          <div className="flex flex-wrap gap-3">
            {stack.map((item, index) => (
              <span
                key={item}
                className="fade-up rounded-full border border-white/10 px-4 py-2 text-sm text-[color:var(--text-soft)]"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        <section id="work" className="section-shell py-24">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="eyebrow mb-4">Selected Work</p>
              <h2 className="headline text-4xl md:text-6xl">Projects with actual product energy.</h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-[color:var(--text-secondary)]">
              These are not filler clones. Each one pushes on usability, polish, or AI
              utility in a way that makes the product feel more alive.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.id}
                className="glass-panel fade-up flex h-full flex-col rounded-[2rem] p-6"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--text-soft)]">
                    {project.year}
                  </span>
                  <span className="rounded-full bg-white/8 px-3 py-1 text-xs text-[color:var(--accent-2)]">
                    {project.status}
                  </span>
                </div>
                <h3 className="font-[family:var(--font-display)] text-3xl text-[color:var(--surface)]">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[color:var(--text-secondary)]">
                  {project.shortDescription}
                </p>
                <p className="mt-4 text-sm font-medium text-[color:var(--accent)]">
                  {project.impact}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-[color:var(--text-soft)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[color:var(--accent)] px-5 py-3 text-sm font-semibold text-[color:var(--surface)] transition hover:brightness-110"
                  >
                    Live Site
                  </Link>
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-[color:var(--text-primary)] transition hover:bg-white/5"
                  >
                    Source
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section-shell py-24">
          <div className="grid gap-6 md:grid-cols-[0.95fr_1.05fr]">
            <div className="glass-panel rounded-[2rem] p-8">
              <p className="eyebrow mb-4">About</p>
              <h2 className="headline text-4xl md:text-5xl">Less dull. More product-minded.</h2>
              <p className="mt-6 text-base leading-8 text-[color:var(--text-secondary)]">
                I care about the part most portfolios skip: making the interface feel like
                it belongs to a confident builder. Clean code matters, but so does rhythm,
                hierarchy, and whether a project leaves an impression in five seconds.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-[2rem] border border-white/10 bg-black/10 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--accent)]">
                  Build style
                </p>
                <p className="mt-4 text-sm leading-7 text-[color:var(--text-secondary)]">
                  Fast UI iteration, strong visual hierarchy, and deployment-ready output.
                </p>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-black/10 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--accent-2)]">
                  Focus
                </p>
                <p className="mt-4 text-sm leading-7 text-[color:var(--text-secondary)]">
                  AI products, real-time interfaces, and full-stack experiences with polish.
                </p>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-black/10 p-6 sm:col-span-2">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--text-soft)]">
                  Current direction
                </p>
                <p className="mt-4 text-sm leading-7 text-[color:var(--text-secondary)]">
                  Building portfolio work that feels more like a product studio showcase than
                  a default developer template.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell py-8">
          <div className="glass-panel rounded-[2.25rem] p-8 md:p-10">
            <p className="eyebrow mb-4">Next Move</p>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <h2 className="headline text-4xl md:text-6xl">If the site was feeling dull, it won&apos;t now.</h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-[color:var(--text-secondary)]">
                  The portfolio now pushes your strongest work forward and gives each project a
                  clearer reason to click.
                </p>
              </div>
              <Link
                href="/projects"
                className="rounded-full bg-[color:var(--surface)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--surface-strong)] transition hover:opacity-90"
              >
                See Full Projects
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
