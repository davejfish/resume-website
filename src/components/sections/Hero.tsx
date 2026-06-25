import Link from "next/link";
import { profile } from "@/data/resume";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-3xl flex-col gap-6 px-6 py-24 sm:py-32"
    >
      <p className="text-sm font-medium text-zinc-500">{profile.location}</p>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        {profile.name}
      </h1>
      <p className="text-xl font-medium text-zinc-700 dark:text-zinc-300">
        {profile.title}
      </p>
      <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        {profile.tagline}
      </p>
      <div className="mt-2 flex flex-wrap gap-4 text-sm font-medium">
        <Link
          href="#projects"
          className="flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-background transition-opacity hover:opacity-90"
        >
          View my work
        </Link>
        <Link
          href="#contact"
          className="flex h-11 items-center justify-center rounded-full border border-black/[.12] px-6 transition-colors hover:bg-black/[.04] dark:border-white/[.18] dark:hover:bg-white/[.06]"
        >
          Get in touch
        </Link>
        <a
          href={profile.resumeFile}
          download
          className="flex h-11 items-center justify-center gap-2 rounded-full border border-black/[.12] px-6 transition-colors hover:bg-black/[.04] dark:border-white/[.18] dark:hover:bg-white/[.06]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4"
            aria-hidden="true"
          >
            <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
            <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
          </svg>
          Download Résumé
        </a>
      </div>
    </section>
  );
}
