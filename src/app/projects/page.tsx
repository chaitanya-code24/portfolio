import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects | Chaitanya Lokhande",
  description: "Product-focused portfolio projects, including AI tools and real-time apps.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="pb-24">
        <section className="section-shell py-18 md:py-24">
          <div className="max-w-4xl">
            <p className="eyebrow mb-4">Projects</p>
            <h1 className="headline text-5xl md:text-7xl">A stronger showcase for the work that matters.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--text-secondary)]">
              Each project here has a clear product angle, live access, and a more confident
              presentation. The AI Resume Builder live site is included now as well.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/4 p-6 text-center">
            <p className="text-base text-[color:var(--text-secondary)]">
              Want the rest of the code and experiments too? Check out my{" "}
              <a
                href="https://github.com/chaitanya-code24"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[color:var(--accent)] hover:underline"
              >
                GitHub profile
              </a>{" "}
              for more builds and iterations.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
