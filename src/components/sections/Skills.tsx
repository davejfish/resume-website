import { Section } from "@/components/Section";
import { skills } from "@/data/resume";

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="flex flex-col gap-6">
        {skills.map((group) => (
          <div key={group.label} className="flex flex-col gap-2 sm:flex-row sm:gap-6">
            <dt className="w-48 shrink-0 font-medium text-zinc-900 dark:text-zinc-100">
              {group.label}
            </dt>
            <dd className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-black/[.08] px-3 py-1 text-sm text-zinc-700 dark:border-white/[.12] dark:text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
