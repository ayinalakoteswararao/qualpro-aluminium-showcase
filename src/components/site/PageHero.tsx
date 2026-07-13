import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-steel-gradient text-steel-foreground">
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />
      <div className="container-x relative py-20 md:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
          {eyebrow}
        </p>
        <h1 className="mt-4 font-display text-4xl md:text-6xl font-bold leading-[1.05] max-w-3xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg text-steel-foreground/75">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
