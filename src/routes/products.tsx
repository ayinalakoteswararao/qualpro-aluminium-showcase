import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { useState } from "react";
import { 
  ArrowRight, 
  Check, 
  Info,
  Shield,
  Activity,
  Wind
} from "lucide-react";
import glazingImg from "@/assets/product-glazing.jpg";
import { productsList } from "@/lib/data";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Product Catalog — Qualpro Aluminium Systems" },
      {
        name: "description",
        content:
          "Explore the architectural product catalog of Qualpro Aluminium: Curtain Wall, Unitized Glazing, Spider Glazing, ACP Cladding, Skylights, Windows, and Doors.",
      },
      { property: "og:title", content: "Qualpro Aluminium Product Catalog" },
      {
        property: "og:description",
        content: "High-performance facade and window/door systems engineered for Indian structural loads.",
      },
    ],
  }),
  component: Products,
});

type ProdCategory = "All" | "Glazing & Facades" | "Windows & Doors" | "ACP & Shading";

function Products() {
  const [activeTab, setActiveTab] = useState<ProdCategory>("All");

  const filteredItems = activeTab === "All"
    ? productsList
    : productsList.filter(it => it.category === activeTab);

  return (
    <>
      <PageHero
        eyebrow="Architectural Catalog"
        title="Premium Aluminium Systems & Assemblies"
        description="Every structural profile and glazing layout is engineered in-house, manufactured under strict tolerance checks, and installed by certified teams."
        imageSrc={glazingImg}
      />

      <section className="py-20 bg-background">
        <div className="container-x">
          
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 border-b border-border pb-6 animate-rise">
            <SectionHeader
              eyebrow="Our Catalog"
              title="Filter by Aluminium Framing Solutions"
            />
            
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2 bg-secondary/50 p-1.5 rounded-xl border border-border">
              {(["All", "Glazing & Facades", "Windows & Doors", "ACP & Shading"] as ProdCategory[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-lg px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-primary text-primary-foreground shadow-card"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* 3-COLUMN SPEC CATALOG GRID */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((it, i) => (
              <article
                key={it.title}
                className="group flex flex-col justify-between rounded-2xl border border-border bg-card overflow-hidden shadow-card hover:-translate-y-1.5 hover:shadow-industrial hover:border-primary/20 transition-all duration-500 animate-rise"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div>
                  {/* Top Image Frame with glassmorphic tag */}
                  <div className="relative overflow-hidden aspect-[4/3] border-b border-border">
                    <img
                      src={it.img}
                      alt={it.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                    
                    {/* Floating performance rating badge */}
                    <div className="absolute top-4 left-4 rounded-lg bg-gradient-to-r from-steel/90 to-ink border border-white/10 px-3 py-1 text-[10px] uppercase font-bold tracking-wider text-primary shadow-industrial">
                      {it.badge}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                        {it.category}
                      </span>
                      <h3 className="mt-1 font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        <Link to="/products/$productId" params={{ productId: it.id }}>
                          {it.title}
                        </Link>
                      </h3>
                    </div>

                    <p className="text-xs leading-relaxed text-muted-foreground line-clamp-3">
                      {it.desc}
                    </p>

                    {/* Technical Specs Pill Panel */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border mt-3">
                      {it.specs.map((spec) => (
                        <span key={spec} className="rounded bg-secondary px-2.5 py-1 text-[10px] font-semibold text-muted-foreground border border-border flex items-center gap-1">
                          <Info className="h-3 w-3 text-primary shrink-0" />
                          {spec}
                        </span>
                      ))}
                    </div>

                    {/* Feature Lists */}
                    <ul className="space-y-2 mt-4">
                      {it.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-xs text-foreground">
                          <Check className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer buttons */}
                <div className="p-6 pt-0 mt-4 grid grid-cols-2 gap-2">
                  <Link
                    to="/products/$productId"
                    params={{ productId: it.id }}
                    className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-primary text-xs font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 py-2.5 shadow-sm hover:shadow-card"
                  >
                    Explore Specs
                  </Link>
                  <Link
                    to="/contact"
                    search={{ subject: `Inquiry regarding ${it.title}` }}
                    className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-secondary text-xs font-semibold text-secondary-foreground hover:bg-border transition-all duration-300 py-2.5 shadow-sm"
                  >
                    Enquire <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* TECHNICAL HIGHLIGHTS GRID */}
      <section className="py-16 bg-secondary/30 border-y border-border">
        <div className="container-x">
          <div className="grid gap-8 md:grid-cols-3 text-center">
            <div className="space-y-3">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <Wind className="h-6 w-6" />
              </div>
              <h4 className="font-display text-lg font-bold text-foreground">Airtight & Wind Resistant</h4>
              <p className="text-xs text-muted-foreground max-w-xs mx-auto">
                Profiles fully tested for extreme air leak prevention and deflection resistance.
              </p>
            </div>
            <div className="space-y-3">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <Shield className="h-6 w-6" />
              </div>
              <h4 className="font-display text-lg font-bold text-foreground">ISO & FR Standards</h4>
              <p className="text-xs text-muted-foreground max-w-xs mx-auto">
                Uses Class 1 fire-retardant panel fillings and high-purity structural 6063 T6 alloys.
              </p>
            </div>
            <div className="space-y-3">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <Activity className="h-6 w-6" />
              </div>
              <h4 className="font-display text-lg font-bold text-foreground">Seismic Isolation</h4>
              <p className="text-xs text-muted-foreground max-w-xs mx-auto">
                Engineered joint layouts designed to adapt to heavy floor deflection movements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
