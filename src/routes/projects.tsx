import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { useState } from "react";
import residentialImg from "@/assets/project-residential.jpg";
import commercialImg from "@/assets/project-commercial.jpg";
import industrialImg from "@/assets/project-industrial.jpg";
import curtainImg from "@/assets/product-curtain.jpg";
import glazingImg from "@/assets/product-glazing.jpg";
import doorsImg from "@/assets/product-doors.jpg";
import windowsImg from "@/assets/product-windows.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Qualpro Aluminium Portfolio" },
      {
        name: "description",
        content:
          "Selected residential, commercial and industrial aluminium projects delivered by Qualpro Aluminium.",
      },
      { property: "og:title", content: "Qualpro Aluminium Projects" },
      {
        property: "og:description",
        content: "A gallery of aluminium facades, windows and structural systems delivered on time and on spec.",
      },
    ],
  }),
  component: Projects,
});

type Category = "All" | "Residential" | "Commercial" | "Industrial";

const projects: { title: string; category: Exclude<Category, "All">; img: string; span?: string }[] = [
  { title: "Palm Grove Villa", category: "Residential", img: residentialImg, span: "md:col-span-2 md:row-span-2" },
  { title: "Meridian Tower", category: "Commercial", img: commercialImg },
  { title: "Northline Logistics Hub", category: "Industrial", img: industrialImg },
  { title: "Azure Business Park", category: "Commercial", img: curtainImg },
  { title: "Skyline Financial Center", category: "Commercial", img: glazingImg },
  { title: "The Cove Residences", category: "Residential", img: doorsImg },
  { title: "Vertex Corporate Plaza", category: "Commercial", img: windowsImg },
];

const categories: Category[] = ["All", "Residential", "Commercial", "Industrial"];

function Projects() {
  const [active, setActive] = useState<Category>("All");
  const visible = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <PageHero
        eyebrow="Selected Work"
        title="Facades, homes and factories — delivered."
        description="A snapshot of aluminium projects we've engineered and installed across residential, commercial and industrial sectors."
      />

      <section className="py-20">
        <div className="container-x">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <SectionHeader eyebrow="Portfolio" title="Filter by category" />
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                    active === c
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[220px]">
            {visible.map((p, i) => (
              <figure
                key={p.title + i}
                className={`group relative overflow-hidden rounded-xl border border-border shadow-card ${
                  i === 0 && active === "All" ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" aria-hidden />
                <figcaption className="absolute inset-x-0 bottom-0 p-5 text-steel-foreground">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-primary">{p.category}</p>
                  <p className="mt-1 font-display text-lg font-semibold">{p.title}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
