type SectionProps = {
  id: string;
  title?: string;
  children: React.ReactNode;
};

// Shared wrapper to keep section spacing, width, and headings consistent.
export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto max-w-3xl scroll-mt-20 px-6 py-16">
      {title && (
        <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-zinc-500">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
