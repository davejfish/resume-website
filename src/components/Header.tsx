import Link from "next/link";
import { profile } from "@/data/resume";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-black/[.08] bg-background/80 backdrop-blur dark:border-white/[.12]">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link href="#top" className="font-semibold tracking-tight">
          {profile.name}
        </Link>
        <ul className="hidden gap-6 text-sm text-zinc-600 dark:text-zinc-400 sm:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="transition-colors hover:text-foreground">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
