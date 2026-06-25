import { Section } from "@/components/Section";
import { experience } from "@/data/resume";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="flex flex-col gap-12">
        {experience.map((job) => (
          <div key={job.company} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold">
                  {job.company} <span className="text-zinc-500">— {job.role}</span>
                </h3>
                <span className="text-sm text-zinc-500">
                  {job.start} – {job.end}
                </span>
              </div>
              {job.summary && (
                <p className="text-sm italic leading-6 text-zinc-500">{job.summary}</p>
              )}
            </div>

            <div className="flex flex-col gap-6">
              {job.projects.map((project) => (
                <div key={project.name} className="flex flex-col gap-2">
                  <h4 className="font-medium text-zinc-900 dark:text-zinc-100">
                    {project.name}
                  </h4>
                  <ul className="flex flex-col gap-1.5 pl-5 text-zinc-700 dark:text-zinc-300">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="list-disc leading-7 marker:text-zinc-400">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
