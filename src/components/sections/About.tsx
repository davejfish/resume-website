import { Section } from "@/components/Section";
import { about } from "@/data/resume";

export function About() {
  return (
    <Section id="about" title="About">
      <div className="flex flex-col gap-4 text-lg leading-8 text-zinc-700 dark:text-zinc-300">
        {about.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
