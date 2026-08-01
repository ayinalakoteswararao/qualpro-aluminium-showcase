import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { useState } from "react";
import { Search, MapPin, Building2, ShieldCheck, Plane, Calendar, Box, ArrowRight, Award, Map as MapIcon, Shield } from "lucide-react";
import residentialImg from "@/assets/project-residential.jpg";
import commercialImg from "@/assets/project-commercial.jpg";
import industrialImg from "@/assets/project-industrial.jpg";
import curtainImg from "@/assets/product-curtain.jpg";
import glazingImg from "@/assets/product-glazing.jpg";
import doorsImg from "@/assets/product-doors.jpg";
import windowsImg from "@/assets/product-windows.jpg";
import airportImg from "@/assets/project-airport.png";
import tirupatiImg from "@/assets/project-tirupati.png";
import rajahmundryImg from "@/assets/project-rajahmundry.png";
import vijayawadaImg from "@/assets/project-vijayawada.png";
import kadapaImg from "@/assets/project-kadapa.jpg";
import mnparkImg from "@/assets/project-mnpark.png";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Completed Projects Portfolio — Qualpro Aluminium" },
      {
        name: "description",
        content:
          "Browse our comprehensive portfolio of completed airport terminals and commercial glazing projects across India.",
      },
      { property: "og:title", content: "Qualpro Aluminium Project Portfolio" },
      {
        property: "og:description",
        content: "A premium showcase of completed structural glazing, ACP cladding, and aluminium systems.",
      },
    ],
  }),
  component: Projects,
});

export type Category = "All" | "Aviation (Airports)" | "Government & Institutional" | "Commercial & Infrastructure" | "Residential & Townships";

export const getProjectSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
};

export const allProjects = [
  // --- AVIATION (AIRPORTS) ---
  {
    id: "tirupati-airport",
    title: "Tirupati Airport",
    category: "Aviation (Airports)" as const,
    client: "Sam India Builtwell",
    location: "Tirupati, AP",
    scope: ["Structural Glazing", "ACP Cladding", "Spider Glazing"],
    year: "Completed",
    img: tirupatiImg,
    featured: true
  },
  {
    id: "vijayawada-airport",
    title: "Vijayawada Airport",
    category: "Aviation (Airports)" as const,
    client: "Simplex Infra Ltd",
    location: "Vijayawada, AP",
    scope: ["Structural Glazing", "ACP Cladding", "Spider Glazing"],
    year: "Ongoing Project",
    img: vijayawadaImg
  },
  {
    id: "rajahmundry-airport",
    title: "Rajahmundry Airport",
    category: "Aviation (Airports)" as const,
    client: "Airport Authority of India",
    location: "Rajahmundry, AP",
    scope: ["Structural Glazing", "ACP Cladding", "Facade Engineering"],
    year: "Completed",
    img: rajahmundryImg
  },
  {
    id: "kadapa-airport",
    title: "Kadapa Airport",
    category: "Aviation (Airports)" as const,
    client: "Airport Authority of India",
    location: "Kadapa, AP",
    scope: ["Structural Glazing", "ACP Cladding", "Facade Engineering"],
    year: "Completed",
    img: kadapaImg
  },
  // --- COMMERCIAL & INFRASTRUCTURE ---
  {
    id: "mn-park",
    title: "MN Park",
    category: "Commercial & Infrastructure" as const,
    client: "MN Park Developer",
    location: "Genome Valley, Hyderabad",
    scope: ["Architectural Aluminium Systems", "Façade & Glazing Installation", "Custom Fabrication", "Finishing and Alignment"],
    year: "Completed",
    img: mnparkImg
  }
];

const categories: Category[] = ["All", "Aviation (Airports)", "Commercial & Infrastructure"];

// Color schemes for sector tags
export const getCategoryStyle = (cat: Category) => {
  switch (cat) {
    case "Aviation (Airports)":
      return "bg-slate-950/85 text-blue-400 border-blue-500/30";
    case "Government & Institutional":
      return "bg-slate-950/85 text-amber-400 border-amber-500/30";
    case "Commercial & Infrastructure":
      return "bg-slate-950/85 text-slate-300 border-slate-500/30";
    case "Residential & Townships":
      return "bg-slate-950/85 text-emerald-400 border-emerald-500/30";
    default:
      return "bg-slate-950/85 text-primary border-primary/30";
  }
};

function Projects() {
  const [activeTab, setActiveTab] = useState<Category>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = allProjects.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.scope.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

    if (activeTab === "All") return matchesSearch;
    return matchesSearch && p.category === activeTab;
  });

  // Calculate Featured Item
  const featuredProject = allProjects.find(p => p.featured && (activeTab === "All" || activeTab === p.category));

  // Filter grid projects to not repeat the featured one if visible
  const gridProjects = featuredProject 
    ? filteredProjects.filter(p => p.title !== featuredProject.title)
    : filteredProjects;

  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Engineering Architectural Legacies"
        description="Browse our portfolio of prominent aviation terminals and commercial glazing projects. We deliver absolute structural precision on time."
        imageSrc={airportImg}
      />

      {/* METRIC SUMMARIES */}
      <section className="bg-secondary/20 py-8 border-y border-border">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-3 max-w-5xl mx-auto">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-card/45 border border-border/80">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                <Plane className="h-5 w-5" />
              </div>
              <div>
                <span className="block text-lg font-bold font-display text-foreground">13 Terminals</span>
                <span className="text-[10px] text-muted-foreground uppercase font-semibold tracking-wider">Public Airport Openings</span>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-card/45 border border-border/80">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <span className="block text-lg font-bold font-display text-foreground">18+ Years</span>
                <span className="text-[10px] text-muted-foreground uppercase font-semibold tracking-wider">Unblemished Quality Record</span>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-card/45 border border-border/80">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                <MapIcon className="h-5 w-5" />
              </div>
              <div>
                <span className="block text-lg font-bold font-display text-foreground">PAN-India</span>
                <span className="text-[10px] text-muted-foreground uppercase font-semibold tracking-wider">National Execution Capability</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container-x space-y-12">
          
          {/* Header and Filter Row */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-6 border-b border-border">
            <SectionHeader eyebrow="Qualpro Projects" title="Architectural Showcase" />
            <div className="flex flex-row flex-nowrap overflow-x-auto gap-2.5 max-w-full py-1 scrollbar-none">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => {
                    setActiveTab(c);
                    setSearchQuery("");
                  }}
                  className={`rounded-xl px-5 py-3 text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 shrink-0 border shadow-sm ${
                    activeTab === c
                      ? "bg-primary border-primary text-primary-foreground shadow-industrial"
                      : "bg-card border-border text-muted-foreground hover:text-foreground hover:border-border/85"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Search & Summary Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-2.5 w-full md:max-w-md shadow-sm">
              <Search className="h-5 w-5 text-muted-foreground shrink-0" />
              <input
                type="text"
                placeholder="Search projects, clients, cities, or scopes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground/60"
              />
            </div>
            
            <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-wider">
              <Box className="h-4 w-4 text-primary" />
              Showing {filteredProjects.length} of {allProjects.length} Projects
            </div>
          </div>

          {/* PROJECTS ALTERNATING LIST */}
          <div className="space-y-16 mt-8">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((p, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div
                    key={p.id}
                    className="grid gap-8 lg:grid-cols-12 items-center py-8 border-b border-border/50 dark:border-white/5 last:border-0 last:pb-0 animate-rise"
                    style={{ animationDelay: `${idx * 50}ms` }}
                  >
                    {/* Image Column */}
                    <div className={`lg:col-span-7 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                      <Link
                        to="/projects/$projectId"
                        params={{ projectId: p.id || getProjectSlug(p.title) }}
                        className="relative block aspect-[16/10] w-full overflow-hidden rounded-3xl border border-border bg-secondary shadow-card hover:shadow-industrial transition-all duration-500 group cursor-pointer"
                      >
                        <img
                          src={p.img}
                          alt={p.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-102"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-85" />
                        
                        {/* Floating Category Badge */}
                        <span className={`absolute top-4 right-4 rounded-xl border px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest backdrop-blur-md shadow-sm z-10 ${
                          p.category === "Aviation (Airports)"
                            ? "bg-primary border-primary/20 text-primary-foreground"
                            : "bg-brand-orange border-brand-orange/20 text-white"
                        }`}>
                          {p.category}
                        </span>
                      </Link>
                    </div>

                    {/* Text/Content Column */}
                    <div className={`lg:col-span-5 space-y-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                      <div className="space-y-3">
                        {/* Location Badge */}
                        <span className={`inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest ${
                          p.category === "Aviation (Airports)" ? "text-primary" : "text-brand-orange"
                        }`}>
                          <MapPin className="h-3.5 w-3.5" /> {p.location}
                        </span>
                        
                        <h3 className="font-display text-2xl md:text-3xl font-black tracking-tight text-foreground leading-tight">
                          <Link
                            to="/projects/$projectId"
                            params={{ projectId: p.id || getProjectSlug(p.title) }}
                            className="hover:text-primary transition-colors"
                          >
                            {p.title}
                          </Link>
                        </h3>
                      </div>

                      {/* Metadata specs */}
                      <div className="grid grid-cols-2 gap-4 border-y border-border/80 dark:border-white/5 py-4">
                        <div>
                          <span className="text-[9px] uppercase font-black text-muted-foreground tracking-widest block">Client</span>
                          <span className="text-sm font-bold text-foreground mt-0.5 block">{p.client}</span>
                        </div>
                        <div>
                          <span className="text-[9px] uppercase font-black text-muted-foreground tracking-widest block">Status</span>
                          <span className={`text-sm font-bold mt-0.5 block ${
                            p.year === "Ongoing Project" ? "text-brand-orange" : "text-foreground"
                          }`}>{p.year}</span>
                        </div>
                      </div>

                      {/* Scope tags */}
                      <div className="space-y-2">
                        <span className="text-[9px] uppercase font-black tracking-widest text-muted-foreground">Scope of Execution</span>
                        <div className="flex flex-wrap gap-1.5">
                          {p.scope.map((s) => (
                            <span
                              key={s}
                              className="rounded-lg bg-secondary border border-border text-secondary-foreground px-3 py-1 text-xs font-semibold"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA link */}
                      <div className="pt-2">
                        <Link
                          to="/projects/$projectId"
                          params={{ projectId: p.id || getProjectSlug(p.title) }}
                          className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 transform hover:scale-[1.02] cursor-pointer w-full sm:w-auto ${
                            p.category === "Aviation (Airports)"
                              ? "bg-primary hover:opacity-95 shadow-primary/10"
                              : "bg-brand-orange hover:opacity-95 shadow-brand-orange/10"
                          }`}
                        >
                          Explore Project Case Study
                          <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col-span-full py-16 text-center text-muted-foreground text-sm font-medium">
                No matching projects found. Try checking other categories or clearing your search filter.
              </div>
            )}
          </div>

        </div>
      </section>
    </>
  );
}
