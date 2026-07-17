import { Section } from "@/components/Section";
import { projects } from "@/data/resume";

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      {projects.length === 0 ? (
        <div className="rounded-xl border border-dashed border-black/[.12] px-6 py-12 text-center text-zinc-500 dark:border-white/[.18]">
          <p className="font-medium">Projects coming soon.</p>
          <p className="mt-1 text-sm">
            This section will showcase personal projects with descriptions, tech stacks, and links.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col gap-3 rounded-xl border border-black/[.08] p-6 dark:border-white/[.12]"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold">
                  {project.sourceUrl ? (
                    <a href={project.sourceUrl} className="hover:underline">
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                {project.comingSoon && (
                  <span className="shrink-0 rounded-full bg-amber-500/[.12] px-2.5 py-0.5 text-xs font-medium text-amber-700 dark:bg-amber-400/[.12] dark:text-amber-300">
                    Coming soon
                  </span>
                )}
              </div>
              <p className="flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-black/[.04] px-2.5 py-0.5 text-xs text-zinc-600 dark:bg-white/[.08] dark:text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-sm font-medium">
                {project.liveUrl && (
                  <a href={project.liveUrl} className="hover:underline">
                    Live demo →
                  </a>
                )}
                {project.sourceUrl && (
                  <a href={project.sourceUrl} className="hover:underline">
                    Source →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </Section>
  );
}
