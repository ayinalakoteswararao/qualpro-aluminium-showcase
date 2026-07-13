import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { X, ZoomIn, Info, Shield, Hammer, Cpu, Layers } from "lucide-react";

import airportImg from "@/assets/project-airport.png";
import commercialImg from "@/assets/project-commercial.jpg";
import residentialImg from "@/assets/project-residential.jpg";
import industrialImg from "@/assets/project-industrial.jpg";
import glazingImg from "@/assets/product-glazing.jpg";
import curtainImg from "@/assets/product-curtain.jpg";
import windowsImg from "@/assets/product-windows.jpg";
import doorsImg from "@/assets/product-doors.jpg";
import gmcImg from "@/assets/gmc_cutting.png";
import lgfImg from "@/assets/lgf_double_cutter.png";
import millerImg from "@/assets/cnc_end_miller.png";
import routerImg from "@/assets/cnc_copy_router.png";
import pumpImg from "@/assets/silicone_pump.png";
import factoryImg from "@/assets/hero-factory.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Project & Machinery Gallery — Qualpro Aluminium" },
      {
        name: "description",
        content:
          "Explore the Qualpro Aluminium project and machinery gallery. Browse unitized glazing, stick curtain walls, precision doors, CNC machining centers, and plant tools.",
      },
      { property: "og:title", content: "Qualpro Aluminium Gallery" },
      {
        property: "og:description",
        content: "High-definition showcase of our glazing fabrications and high-precision plant machinery.",
      },
    ],
  }),
  component: Gallery,
});

interface GalleryItem {
  id: string;
  title: string;
  category: "Glazing & Facades" | "Windows & Doors" | "Machinery & Plant";
  desc: string;
  matter: string;
  img: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Unitized Glass Facade - Rajahmundry Airport",
    category: "Glazing & Facades",
    desc: "Precision double-glazed structural unitized system for the new terminal extension.",
    matter: "System: Custom 75mm thermally broken profiles. Glass: 28mm DGU (6mm High-Performance Low-E + 16mm Air Gap + 6mm Clear Laminated). Structural sealant: Dow Corning 995.",
    img: airportImg,
  },
  {
    id: "gal-2",
    title: "Double-Glazed Curtain Wall - Corporate Hub",
    category: "Glazing & Facades",
    desc: "High-span stick curtain wall with structural joints and integrated ventilation panels.",
    matter: "Profiles: Hindalco alloy 6063-T6. Wind Load Capacity: Tested up to 2.5 kPa. Silicone: DC 895 structural glazing sealant.",
    img: curtainImg,
  },
  {
    id: "gal-3",
    title: "GMC CNC Aluminum Profile Cutting Center",
    category: "Machinery & Plant",
    desc: "State-of-the-art European GMC cutting center for high-accuracy length cutting of glazing frames.",
    matter: "Capacity: Profiles up to 6500mm length, accuracy tolerance within +/- 0.1mm. Integrated optimization software to minimize profile wastage.",
    img: gmcImg,
  },
  {
    id: "gal-4",
    title: "LGF Double Mitre Saw Cutter",
    category: "Machinery & Plant",
    desc: "High-capacity dual-head mitre saw for seamless profile angling (45° and 90° cuts).",
    matter: "Features: Automatic positioning, hydro-pneumatic blade feed, custom safety extraction hood. Fits extra-thick structural sections.",
    img: lgfImg,
  },
  {
    id: "gal-5",
    title: "Heavy-Duty Lift-and-Slide Patio Doors",
    category: "Windows & Doors",
    desc: "Large-span aluminum sliding door systems designed for premium high-rise projects.",
    matter: "Hardware: Siegenia/G-U lift-slide gear. Weight Capacity: Up to 400kg per sash. EPDM gaskets for perfect acoustic & weather insulation.",
    img: doorsImg,
  },
  {
    id: "gal-6",
    title: "Semi-Unitized Structural Glazing",
    category: "Glazing & Facades",
    desc: "Custom curtain glazing highlighting modern clean lines with structural spacer jointing.",
    matter: "Glazing Type: 12mm thick monolithic tempered glass + custom spacer bars. Frame coating: 25-micron PVDF powder coating.",
    img: glazingImg,
  },
  {
    id: "gal-7",
    title: "CNC End-Milling Machine",
    category: "Machinery & Plant",
    desc: "Pneumatic end milling machine for jointing intersections on structural transom sections.",
    matter: "Motor: 2.2kW high-speed spindle. Tooling: Quick-change cutter stacks for varying mullion designs. Clean pneumatic clamping.",
    img: millerImg,
  },
  {
    id: "gal-8",
    title: "Acoustic Double-Glazed Windows",
    category: "Windows & Doors",
    desc: "Thermally broken casement window series for residential towers with enhanced sound dampening.",
    matter: "Profiles: 60mm frame depth. Sound Attenuation: Up to 42 dB noise reduction. Multi-point locking system for security.",
    img: windowsImg,
  },
  {
    id: "gal-9",
    title: "CNC Automatic Copy Router",
    category: "Machinery & Plant",
    desc: "Copy router for precise milling of lock cylinders, hinges, and slot openings in profiles.",
    matter: "Speed: 12,000 RPM high-frequency motor. Template: Steel copy templates with 1:1 scanning. Dual pneumatic tracer pins.",
    img: routerImg,
  },
  {
    id: "gal-10",
    title: "Pneumatic Structural Silicone Pump",
    category: "Machinery & Plant",
    desc: "Pneumatic extruder for rapid application of dual-component structural sealants.",
    matter: "Material: Designed for Dow Corning 993/995. Mixing Ratio: Electronically controlled to ensure correct curing and bond strength.",
    img: pumpImg,
  },
  {
    id: "gal-11",
    title: "Commercial Facade - Corporate Office",
    category: "Glazing & Facades",
    desc: "ACP cladding combined with glass structural panels for premium aesthetics.",
    matter: "Cladding: 4mm fire-retardant (FR grade) ACP panels with PVDF coating. Substructure: Galvanized iron grid framework.",
    img: commercialImg,
  },
  {
    id: "gal-12",
    title: "Factory Fabrication Assembly Line",
    category: "Machinery & Plant",
    desc: "View of the Cherlapally factory bay showing assembly jigs and quality checking tables.",
    matter: "Workflow: Strict staging from CNC cutting -> milling -> assembly -> glazing application -> final QA inspection. Capacity: 300 sqm/day.",
    img: factoryImg,
  }
];

export function Gallery() {
  const [filter, setFilter] = useState<"All" | "Glazing & Facades" | "Windows & Doors" | "Machinery & Plant">("All");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filteredItems = filter === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  return (
    <>
      <PageHero
        eyebrow="Our Showcase"
        title="Engineering Portfolio & Machinery Facility"
        description="Browse through our high-precision structural glazing projects and our modern factory fabrication plant in Cherlapally."
        imageSrc={curtainImg}
      />

      <section className="py-20 bg-background text-foreground transition-colors duration-300">
        <div className="container-x">
          
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2.5 justify-center mb-16">
            {(["All", "Glazing & Facades", "Windows & Doors", "Machinery & Plant"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-bold transition-all duration-300 shadow-sm cursor-pointer ${
                  filter === cat
                    ? "bg-primary text-primary-foreground shadow-industrial scale-105"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-2.5 shadow-card hover:-translate-y-1.5 hover:shadow-industrial hover:border-primary/20 transition-all duration-300 cursor-pointer animate-rise"
              >
                {/* Image frame */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-secondary">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Category tag */}
                  <span className="absolute top-4 left-4 z-10 text-[10px] uppercase tracking-wider font-extrabold px-3 py-1 rounded-full bg-slate-950/85 text-white border border-white/10">
                    {item.category}
                  </span>
                  
                  {/* Interactive zoom overlay */}
                  <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-industrial transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <ZoomIn className="h-5 w-5" />
                    </div>
                  </div>
                </div>

                {/* Info body */}
                <div className="p-5 space-y-2">
                  <h3 className="font-display text-lg font-bold text-foreground line-clamp-1 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-muted-foreground line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/90 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-4xl bg-card rounded-3xl border border-border overflow-hidden shadow-industrial max-h-[90vh] flex flex-col md:flex-row">
            
            {/* Modal close button */}
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-20 grid h-10 w-10 place-items-center rounded-xl bg-slate-950/80 border border-white/10 text-white hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-card cursor-pointer"
              aria-label="Close details"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Left: Image container */}
            <div className="relative w-full md:w-1/2 bg-black min-h-[300px] md:min-h-0 flex items-center justify-center">
              <img
                src={activeItem.img}
                alt={activeItem.title}
                className="h-full w-full object-cover"
              />
              <span className="absolute bottom-4 left-4 z-10 text-[10px] uppercase tracking-wider font-extrabold px-3 py-1.5 rounded-full bg-primary text-primary-foreground border border-white/10">
                {activeItem.category}
              </span>
            </div>

            {/* Right: Technical specifications */}
            <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto flex flex-col justify-between gap-8 bg-card">
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Technical Specs</span>
                  <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground mt-2 leading-tight">
                    {activeItem.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">Description</span>
                      <p className="text-sm leading-relaxed text-foreground mt-1">{activeItem.desc}</p>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Layers className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">Engineering Details</span>
                      <p className="text-sm leading-relaxed text-foreground mt-1 bg-secondary/40 border border-border/80 rounded-2xl p-4 font-mono text-[13px] text-foreground">
                        {activeItem.matter}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-6 flex items-center justify-between text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5"><Shield className="h-4 w-4 text-emerald-500" /> Tested Integrity</span>
                <span className="flex items-center gap-1.5"><Cpu className="h-4 w-4 text-blue-500" /> European CNC Precision</span>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
