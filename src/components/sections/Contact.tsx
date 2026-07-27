import { Section } from "@/components/Section";
import { profile } from "@/data/resume";

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="flex flex-col gap-4">
        <p className="text-lg leading-8 text-zinc-700 dark:text-zinc-300">
          Interested in working together or have a question? Reach out — I&apos;d love to hear from you.
        </p>
        <div className="flex flex-col gap-2 text-zinc-700 dark:text-zinc-300">
          <a href={`mailto:${profile.email}`} className="font-medium hover:underline">
            {profile.email}
          </a>
        </div>
        <div className="mt-2 flex gap-4 text-sm font-medium">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 items-center justify-center rounded-full border border-black/[.12] px-6 transition-colors hover:bg-black/[.04] dark:border-white/[.18] dark:hover:bg-white/[.06]"
          >
            GitHub
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 items-center justify-center rounded-full border border-black/[.12] px-6 transition-colors hover:bg-black/[.04] dark:border-white/[.18] dark:hover:bg-white/[.06]"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </Section>
  );
}
