import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  imageSrc,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  imageSrc?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-steel-gradient text-steel-foreground">
      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />
      
      {/* Bottom-right glow if there is no image */}
      {!imageSrc && (
        <div className="absolute right-0 bottom-0 h-64 w-64 bg-primary/10 rounded-tl-full blur-3xl pointer-events-none" />
      )}

      <div className="container-x relative py-20 md:py-24">
        <div className="grid gap-10 lg:grid-cols-12 items-center">
          
          {/* Left Text Block */}
          <div className={imageSrc ? "lg:col-span-7" : "lg:col-span-12"}>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              {eyebrow}
            </p>
            <h1 className="mt-4 font-display text-4xl md:text-6xl font-bold leading-[1.05] max-w-3xl text-white">
              {title}
            </h1>
            {description && (
              <p className="mt-5 max-w-2xl text-base md:text-lg text-steel-foreground/75 leading-relaxed">
                {description}
              </p>
            )}
            {children}
          </div>

          {/* Right Image Block (Gap filler) */}
          {imageSrc && (
            <div className="lg:col-span-5 relative w-full h-64 md:h-80 overflow-hidden rounded-3xl border border-white/10 shadow-industrial group animate-rise">
              <div className="absolute inset-0 bg-primary/5 z-10 pointer-events-none group-hover:bg-transparent transition-colors duration-300" />
              <img
                src={imageSrc}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
