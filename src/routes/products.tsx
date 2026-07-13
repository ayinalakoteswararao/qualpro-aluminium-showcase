import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { useState } from "react";
import { 
  ArrowRight, 
  Check, 
  Layers, 
  Info,
  Shield,
  Activity,
  Wind
} from "lucide-react";
import windowsImg from "@/assets/product-windows.jpg";
import doorsImg from "@/assets/product-doors.jpg";
import curtainImg from "@/assets/product-curtain.jpg";
import glazingImg from "@/assets/product-glazing.jpg";
import fabricationImg from "@/assets/product-fabrication.jpg";
import commercialImg from "@/assets/project-commercial.jpg";
import industrialImg from "@/assets/project-industrial.jpg";
import heroImg from "@/assets/hero-factory.jpg";

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

const items = [
  {
    title: "Curtain Wall Systems",
    category: "Glazing & Facades",
    img: curtainImg,
    badge: "Wind Load: 3.5 KPa",
    desc: "Custom-engineered curtain walling systems for high-performance building envelopes, offering structural strength and modern design.",
    specs: ["Alloy: 6063 T6", "Glass: 24-32mm DGU", "Profile Depth: Up to 150mm"],
    features: ["Stick-built and modular facades", "Site-tested for air and water integrity", "Thermally insulated profiles"],
  },
  {
    title: "Unitized Glazing Systems",
    category: "Glazing & Facades",
    img: glazingImg,
    badge: "Seismic: Zone V",
    desc: "Pre-fabricated facade panels manufactured in controlled plant environments and assembled directly on-site, ensuring speed, precision, and consistency for high-rise projects.",
    specs: ["Pre-assembled panels", "Wind Load: 4.5 KPa", "EPDM Gasket Seals"],
    features: ["Rapid crane-assisted installation", "Reduced on-site labor requirements", "Superior quality control and sealing"],
  },
  {
    title: "Spider Glazing Systems",
    category: "Glazing & Facades",
    img: commercialImg,
    badge: "Max Transparency",
    desc: "Glass facade systems featuring point-fixed supports with stainless steel spider fittings – ideal for atriums, lobbies, and entrances that demand transparency, elegance, and minimalism.",
    specs: ["Fittings: SUS316 Steel", "Glass: 12-19mm Laminated", "Spans: Up to 6 meters"],
    features: ["High-grade stainless steel fittings", "Maximum natural light and transparency", "Minimalist structural frames"],
  },
  {
    title: "Facade Works",
    category: "Glazing & Facades",
    img: fabricationImg,
    badge: "Full Customization",
    desc: "Comprehensive facade solutions combining design, structural engineering, fabrication, and installation to achieve stunning, weather-proof building envelopes.",
    specs: ["Engineering: In-house", "Certification: Structural", "Mock-up tested: Yes"],
    features: ["End-to-end building envelope execution", "Advanced structural analysis", "Tested for thermal and acoustic performance"],
  },
  {
    title: "ACP Cladding (Aluminium Composite Panels)",
    category: "ACP & Shading",
    img: industrialImg,
    badge: "FR Class B / A2",
    desc: "High-quality Aluminium Composite Panel (ACP) cladding systems that provide a sleek, contemporary, and durable finish for commercial and residential exteriors.",
    specs: ["Coating: PVDF / FEVE", "Core: Fire Retardant", "Thickness: 4mm / 6mm"],
    features: ["Lightweight and weather-proof panels", "Excellent thermal and acoustic insulation", "Low maintenance and high impact resistance"],
  },
  {
    title: "Structural Glazing",
    category: "Glazing & Facades",
    img: curtainImg,
    badge: "Frameless Finish",
    desc: "Concealed-grid frameless glass facade systems that offer clean lines and seamless glass expanses for modern commercial developments.",
    specs: ["Sealant: Dow Corning Silicone", "Sightlines: Structural Joint", "Glass: Insulated DGU"],
    features: ["Sleek monolithic glass appearances", "High-performance structural sealants", "Popular in IT parks and corporate offices"],
  },
  {
    title: "Louvers & Sunshade Systems",
    category: "ACP & Shading",
    img: windowsImg,
    badge: "Ventilation Shield",
    desc: "Architecturally styled louvers and shading solutions designed to manage solar heat gain, improve energy efficiency, and elevate aesthetic styling.",
    specs: ["Blades: Extruded Aluminium", "Control: Fixed or Adjustable", "Finishes: Powder Coated / Anodized"],
    features: ["Customizable blade angles and pitches", "Enhanced ventilation with privacy control", "Extruded structural construction"],
  },
  {
    title: "Skylights",
    category: "Glazing & Facades",
    img: heroImg,
    badge: "Daylighting System",
    desc: "Engineered overhead glazing systems designed to maximize daylighting in atriums, passages, and central spaces while maintaining structural strength.",
    specs: ["EPDM Double Gaskets", "Safety Laminated Glass", "Integrated Gutters"],
    features: ["Leak-proof design with drainage channels", "UV and impact-resistant safety glass", "Thermally broken structural framing"],
  },
  {
    title: "Windows and Doors (Interior / Exterior)",
    category: "Windows & Doors",
    img: doorsImg,
    badge: "Acoustic: Up to 40dB",
    desc: "Premium quality aluminium windows and doors crafted for daily operational excellence, thermal efficiency, security, and noise isolation.",
    specs: ["Locks: Multi-point secure", "Glass: 6mm - 24mm DGU", "Profiles: Slim Sightlines"],
    features: ["Slim profiles for maximum glass area", "Multi-point locking security systems", "Durable rollers, seals, and hinges"],
  },
];

function Products() {
  const [activeTab, setActiveTab] = useState<ProdCategory>("All");

  const filteredItems = activeTab === "All"
    ? items
    : items.filter(it => it.category === activeTab);

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
                        {it.title}
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
                <div className="p-6 pt-0 mt-4">
                  <Link
                    to="/contact"
                    search={{ subject: `Inquiry regarding ${it.title}` }}
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary/25 text-xs font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 w-full py-2.5 shadow-sm hover:shadow-card"
                  >
                    Enquire about {it.title} <ArrowRight className="h-4.5 w-4.5 transform group-hover:translate-x-1 transition-transform" />
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
