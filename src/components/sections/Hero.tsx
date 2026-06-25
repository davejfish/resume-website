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
      </div>
    </section>
  );
}
