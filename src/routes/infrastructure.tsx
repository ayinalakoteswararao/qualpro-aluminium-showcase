import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { useState } from "react";
import { 
  ArrowRight, 
  Cpu, 
  Layers, 
  Settings, 
  Scissors, 
  Droplet, 
  Gauge, 
  Maximize2, 
  ShieldCheck, 
  Activity,
  ChevronRight,
  Info,
  Hammer
} from "lucide-react";
import heroImg from "@/assets/hero-factory.jpg";
import lgfCutterImg from "@/assets/lgf_double_cutter.png";
import copyRouterImg from "@/assets/cnc_copy_router.png";
import endMillerImg from "@/assets/cnc_end_miller.png";
import gmcCuttingImg from "@/assets/gmc_cutting.png";
import siliconePumpImg from "@/assets/silicone_pump.png";

type MachineSearch = {
  machine?: string;
};

export const Route = createFileRoute("/infrastructure")({
  validateSearch: (search: Record<string, unknown>): MachineSearch => {
    return {
      machine: search.machine as string | undefined,
    };
  },
  head: () => ({
    meta: [
      { title: "Infrastructure & Machinery — Qualpro Aluminium" },
      {
        name: "description",
        content:
          "Explore the cutting-edge manufacturing facility of Qualpro Aluminium at Cherlapally. Featuring high-end CNC cutting, milling, copy routing, and cladding machines.",
      },
      { property: "og:title", content: "Qualpro Aluminium Infrastructure" },
      {
        property: "og:description",
        content: "Explore our industrial fabrication facility and machinery specs (LGF Italy, GMC, and more).",
      },
    ],
  }),
  component: Infrastructure,
});

const machines = [
  {
    id: "lgf-cutting",
    name: "LGF ITALY CNC Double Head Cutting Machine",
    model: "4000 mm Version",
    icon: Scissors,
    img: lgfCutterImg,
    tagline: "High-precision radial double head cutting for aluminium profiles",
    overview: "A premium Italian-made cutting system with radial blade travel, designed for millimeter-perfect mitre and compound cuts in architectural profile systems. Equipped with self-cleaning chip collection and pneumatic blade feeds.",
    highlights: [
      "Mitre tilting range (90º - 45º - 22.5º)",
      "High-precision radial sliding blade"
    ],
    specs: [
      { label: "Length of Traverse (X axis)", value: "4000 mm" },
      { label: "Working Capacity", value: "4000 x 200 x 270 mm" },
      { label: "Width of Traverse (Y axis)", value: "600 mm" },
      { label: "Depth of Movement (Z axis)", value: "300 mm" },
      { label: "T.C.T. Saw Blades", value: "Ø 550 mm" },
      { label: "Blade Shaft Diameter", value: "30 mm" },
      { label: "Motor Power", value: "Three-phase, 3 HP, 2800 rpm" },
      { label: "Working Pressure", value: "Min. 7 bar" },
      { label: "Heads Tilting Range", value: "90º - 45º - 22.5º" },
      { label: "Machine Weight", value: "2,300 kg" }
    ],
    dimensions: [
      { model: "L = 4000", size: "1200 x 5300 x 1600 mm" },
      { model: "L = 5000", size: "1200 x 6300 x 1600 mm" },
      { model: "L = 6000", size: "1200 x 7300 x 1600 mm" }
    ],
    features: [
      "Sliding movable Head mounted on high-precision Ball Bearings",
      "Radial sliding action of the blade unit for smooth cutting",
      "Self-cleaning chip collection tanks to maintain plant environment",
      "Pneumatically controlled head tilting adjustments"
    ]
  },
  {
    id: "copy-router",
    name: "CNC Copy Router Machine",
    model: "High-Speed Passing-Through Operation",
    icon: Cpu,
    img: copyRouterImg,
    tagline: "Millimeter-precise template routing for lock and hardware cutouts",
    overview: "Engineered specifically for passing-through operations on profile chambers. Enables fast and flawless replication of complex lock, handle, and hardware templates onto aluminium profiles.",
    highlights: [
      "14,000 rpm high-speed spindle speed",
      "Passing-through routing chambers"
    ],
    specs: [
      { label: "Motor Power", value: "Three-phase, 1.5 HP, 2800 rpm" },
      { label: "Spindle Revolutions", value: "14,000 rpm" },
      { label: "Vertical Traverse", value: "110 mm" },
      { label: "Lengthwise Travel", value: "220 mm" },
      { label: "Cross Adjustment", value: "115 mm" },
      { label: "Working Pressure", value: "Min. 7 bar" },
      { label: "Machine Weight", value: "118 kg" },
      { label: "Overall Dimensions", value: "700 x 540 x 1570 mm" }
    ],
    features: [
      "Optimized for quick, multi-chamber routing",
      "Extremely high spindle rotation speed (14,000 rpm) for burr-free cuts",
      "Sturdy casting base to minimize high-speed vibrations",
      "Dual pneumatic horizontal clamps for secure profile holding"
    ]
  },
  {
    id: "end-milling",
    name: "CNC End Milling Machine",
    model: "Heavy-Duty Profile Jointing",
    icon: Settings,
    img: endMillerImg,
    tagline: "Clean, square machining for transom and mullion joint profiles",
    overview: "Specially designed for end milling of aluminium profiles, providing the precise notches and mating profiles required for flush architectural framing joint systems.",
    highlights: [
      "Transom & mullion frame jointing",
      "Ø 32mm heavy-duty cutter spindle"
    ],
    specs: [
      { label: "Motor Power", value: "Three-phase, 1.5 HP, 2800 rpm" },
      { label: "Cutter Block Spindle", value: "Ø 32 mm" },
      { label: "Max Cutter Diameter", value: "140 mm" },
      { label: "Sliding Horizontal Stroke", value: "340 mm" },
      { label: "Working Pressure", value: "Min. 7 bar" },
      { label: "Overall Dimensions", value: "670 x 420 x 660 mm" }
    ],
    features: [
      "Large horizontal stroke accommodates deep profiles",
      "Dynamic cutter block shield ensures operator safety",
      "Highly rigid spindle support prevents cutter deflection",
      "Integrated micro-mist lubrication for cutter longevity"
    ]
  },
  {
    id: "gmc-cutting",
    name: "GMC ACP Cutting and Shearing Machine",
    model: "GMC 400 Series",
    icon: Layers,
    img: gmcCuttingImg,
    tagline: "Large-format panel cutting and grooving with high acoustic insulation",
    overview: "A heavy-duty monobloc structural saw machine built to process large Aluminium Composite Panels (ACP) with extreme precision and speed.",
    highlights: [
      "4200 x 2200 mm working cut area",
      "Vibration-damping soundproofed unit"
    ],
    specs: [
      { label: "Working Cut Capacity", value: "4200 x 2200 mm" },
      { label: "Structure Design", value: "Heavy-Duty Monobloc Steel Frame" },
      { label: "Sound Insulation", value: "Soundproof-covered sawing unit" },
      { label: "Operation Type", value: "Multi-axis sheet sizing & scoring" }
    ],
    features: [
      "Designed for vibration-free cutting of high-density mineral fire-rated cores",
      "Sound-damped blade housing reduces shop floor ambient noise to a minimum",
      "Pneumatically clamping support grid avoids panel slippage",
      "Clean, linear guide rails for perfect straightness tolerances"
    ]
  },
  {
    id: "silicon-dispenser",
    name: "Silicon Dispensation Pump",
    model: "High Viscosity Fluid Delivery System",
    icon: Droplet,
    img: siliconePumpImg,
    tagline: "Precise high-volume structural silicone extrusion",
    overview: "Compact and lightweight pumping solution designed to extrude highly viscous sealing compounds directly from 1-quart (1-liter) or 1-gallon (3.8-liter) containers directly onto glazing frames.",
    highlights: [
      "Highly precise fluid delivery control",
      "Extrudes from 1L or 3.8L sources"
    ],
    specs: [
      { label: "Viscous Extrusion Support", value: "1 qt (1 l) & 1 gal (3.8 l) original sources" },
      { label: "Precision Delivery", value: "Highly precise, metered fluid delivery" },
      { label: "Structure", value: "Compact and Lightweight design" },
      { label: "Applications", value: "Structural glazing adhesive application" }
    ],
    features: [
      "Continuous material flow without cavitation or pressure drops",
      "Minimizes structural adhesive wastage compared to manual cartridges",
      "Easily integrated with industrial linear glazing gantries",
      "Robust seals designed for chemical resistance to advanced structural sealants"
    ]
  }
];

function Infrastructure() {
  const { machine } = Route.useSearch();
  const navigate = Route.useNavigate();
  const [activeMachineId, setActiveMachineId] = useState(machine || machines[0].id);
  const activeMachine = machines.find((m) => m.id === activeMachineId) || machines[0];

  const handleMachineSelect = (id: string) => {
    setActiveMachineId(id);
    navigate({
      search: { machine: id },
      replace: true,
    });

    // Smooth scroll to specs details for mobile users
    const element = document.getElementById("machine-details");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Our Facility"
        title="Industrial Scale. Micro Precision."
        description="Our manufacturing plant at Cherlapally, Hyderabad is equipped with specialized European machinery. This enables us to achieve tight architectural tolerances, rapid pre-fabrication, and flawless assembly."
        imageSrc={gmcCuttingImg}
      />

      {/* CHERLAPALLY FACILITY OVERVIEW SECTION */}
      <section className="py-20 bg-background">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            
            {/* Overview Text */}
            <div className="lg:col-span-7 space-y-6 animate-rise">
              <SectionHeader
                eyebrow="Manufacturing Plant"
                title="The Cherlapally Fabrication Facility"
              />
              <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
                <p>
                  To deliver premium facade systems like unitized glazing, stick glazing, and ACP cladding, Qualpro maintains a fully integrated fabrication plant in the industrial zone of <strong className="text-foreground">Cherlapally, Hyderabad</strong>.
                </p>
                <p>
                  Our facility operates under rigorous quality checks. By moving the profile cutting, end-milling, routing, and silicone glazing tasks into a clean, dust-free factory environment, we eliminate the structural and seal defects common in field-assembled facades.
                </p>
              </div>

              {/* Plant Stats Panel */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="rounded-xl border border-border p-4 bg-secondary/30 hover:border-primary/30 transition-colors">
                  <div className="flex items-center gap-2 text-primary">
                    <Activity className="h-5 w-5" />
                    <span className="font-display font-semibold text-foreground">Optimized Flow</span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">Linear manufacturing lines from extrusion raw stock to finished glazing panels.</p>
                </div>
                <div className="rounded-xl border border-border p-4 bg-secondary/30 hover:border-primary/30 transition-colors">
                  <div className="flex items-center gap-2 text-primary">
                    <ShieldCheck className="h-5 w-5" />
                    <span className="font-display font-semibold text-foreground">Dust-Free Glazing</span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">Dedicated positive-pressure zones for structural silicone sealant application.</p>
                </div>
              </div>
            </div>

            {/* Overlapping Image Frame */}
            <div className="lg:col-span-5 relative flex justify-center items-center mt-10 lg:mt-0">
              <div className="relative w-full max-w-[400px] h-[400px] animate-rise [animation-delay:200ms]">
                <div className="absolute inset-0 overflow-hidden rounded-2xl border border-border shadow-industrial">
                  <img
                    src={heroImg}
                    alt="Qualpro Factory Floor and Extrusions"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-heat-gradient text-primary-foreground p-5 rounded-2xl shadow-industrial text-center">
                  <span className="block font-display text-2xl font-bold">100%</span>
                  <span className="text-[10px] uppercase font-semibold tracking-wider">In-House Fabrication</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MACHINERY LIST SECTION */}
      <section className="py-20 bg-secondary/30 border-y border-border">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-rise">
            <SectionHeader
              eyebrow="Fabrication Machinery"
              title="State-of-the-Art Machine Specifications"
              description="Explore the technical capabilities and dimensions of our specialized machinery, guaranteeing precision cutting and machining on every architectural profile."
            />
          </div>

          <div className="grid gap-8 lg:grid-cols-12 items-start">
            
            {/* Left Column: Machine Switcher Buttons */}
            <div className="lg:col-span-4 space-y-4 animate-rise">
              {machines.map((m) => {
                const Icon = m.icon;
                const isActive = activeMachineId === m.id;
                return (
                  <button
                    key={m.id}
                    onClick={() => handleMachineSelect(m.id)}
                    className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex flex-col gap-4 relative overflow-hidden group cursor-pointer ${
                      isActive
                        ? "bg-card border-primary shadow-industrial scale-[1.01]"
                        : "bg-card/75 border-border hover:bg-card hover:border-border/80 shadow-sm"
                    }`}
                  >
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary" />
                    )}

                    <div className="flex items-center gap-4 w-full">
                      <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg border transition-colors duration-300 ${
                        isActive 
                          ? "bg-primary text-primary-foreground border-primary" 
                          : "bg-secondary text-muted-foreground border-border group-hover:text-primary group-hover:border-primary/30"
                      }`}>
                        <Icon className="h-5 w-5" />
                      </div>

                      <div className="space-y-0.5 flex-grow">
                        <h4 className={`font-display text-sm font-bold transition-colors duration-300 ${
                          isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                        }`}>
                          {m.name}
                        </h4>
                        <p className="text-[10px] text-muted-foreground tracking-wide uppercase font-semibold">
                          {m.model}
                        </p>
                      </div>
                    </div>

                    {/* Bullet Highlights representing why this machine is selected */}
                    <ul className="space-y-1.5 pl-2 border-t border-border/60 pt-3 w-full">
                      {m.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Spec Sheet Display */}
            <div id="machine-details" className="lg:col-span-8 scroll-mt-20 animate-rise [animation-delay:150ms]">
              <div className="rounded-2xl border border-border bg-card shadow-industrial p-6 md:p-8 space-y-6">
                
                {/* Header info */}
                <div className="border-b border-border pb-6">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-primary">
                        {activeMachine.model}
                      </span>
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-1">
                        {activeMachine.name}
                      </h3>
                    </div>
                    
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                      {(() => {
                        const Icon = activeMachine.icon;
                        return <Icon className="h-6 w-6" />;
                      })()}
                    </div>
                  </div>
                  <p className="text-sm text-foreground font-medium mt-3 italic">
                    "{activeMachine.tagline}"
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                    {activeMachine.overview}
                  </p>
                </div>

                {/* Machine Image Showcase */}
                {activeMachine.img && (
                  <div className="relative overflow-hidden rounded-xl border border-border aspect-[16/9] md:aspect-[16/7] bg-secondary/15 shadow-sm group/img">
                    <img
                      src={activeMachine.img}
                      alt={activeMachine.name}
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent pointer-events-none" />
                  </div>
                )}

                {/* Grid layout for Technical Specs */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground mb-4 flex items-center gap-2">
                    <Info className="h-4 w-4 text-primary shrink-0" /> Technical Data Sheet
                  </h4>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {activeMachine.specs.map((spec) => (
                      <div key={spec.label} className="flex justify-between items-center rounded-lg border border-border/60 bg-secondary/20 px-4 py-3">
                        <span className="text-xs font-medium text-muted-foreground">{spec.label}</span>
                        <span className="text-xs font-bold text-foreground text-right ml-2">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Conditionally display dimensions for cutting machine */}
                {activeMachine.dimensions && (
                  <div className="pt-4 border-t border-border">
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground mb-4">
                      Traverse Version Footprint Dimensions
                    </h4>
                    <div className="grid gap-3 sm:grid-cols-3">
                      {activeMachine.dimensions.map((dim) => (
                        <div key={dim.model} className="rounded-lg border border-border p-3.5 bg-secondary/10 flex flex-col items-center text-center">
                          <span className="text-[10px] font-bold uppercase text-primary tracking-wider">{dim.model}</span>
                          <span className="text-xs font-bold text-foreground mt-1.5">{dim.size}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Special features bullets */}
                <div className="pt-6 border-t border-border">
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground mb-4">
                    Key Mechanical Advantages
                  </h4>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {activeMachine.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-muted-foreground leading-relaxed">
                        <span className="h-2 w-2 rounded-full bg-primary shrink-0 mt-1.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES SECTION */}
      <section className="py-20 bg-background">
        <div className="container-x">
          <div className="grid gap-8 md:grid-cols-3 text-center">
            
            <div className="group rounded-2xl border border-border bg-card p-8 shadow-card hover:-translate-y-1.5 transition-all duration-300">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <Gauge className="h-6 w-6" />
              </div>
              <h4 className="font-display text-lg font-bold text-foreground mt-6">Millimeter Tolerances</h4>
              <p className="text-xs text-muted-foreground max-w-xs mx-auto mt-2">
                Our CNC cutting and copy routing machinery calibrates joints and notches down to ±0.2mm, preventing water leaks and drafts.
              </p>
            </div>

            <div className="group rounded-2xl border border-border bg-card p-8 shadow-card hover:-translate-y-1.5 transition-all duration-300">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <Maximize2 className="h-6 w-6" />
              </div>
              <h4 className="font-display text-lg font-bold text-foreground mt-6">Large Profile Processing</h4>
              <p className="text-xs text-muted-foreground max-w-xs mx-auto mt-2">
                With a 4000mm traverse path on our double-head cutter and GMC 4200mm vertical panel saw, we easily process oversized profiles.
              </p>
            </div>

            <div className="group rounded-2xl border border-border bg-card p-8 shadow-card hover:-translate-y-1.5 transition-all duration-300">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <Hammer className="h-6 w-6" />
              </div>
              <h4 className="font-display text-lg font-bold text-foreground mt-6">Italian & German Rigidity</h4>
              <p className="text-xs text-muted-foreground max-w-xs mx-auto mt-2">
                Heavy-duty monobloc structures damp cutting vibrations to ensure a pristine glass-smooth finish on all aluminium edges.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-steel to-ink p-10 md:p-16 shadow-industrial border border-white/10">
            {/* Ambient glows */}
            <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
            <div className="absolute -left-24 -bottom-24 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
            
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
              <div className="max-w-2xl space-y-6">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Technical Audits</span>
                <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                  Want to inspect our shop drawings or plant?
                </h2>
                <p className="text-base md:text-lg text-steel-foreground/75 leading-relaxed">
                  We welcome structural engineers and architects to visit our Cherlapally facility for visual inspection, quality verification, and audit.
                </p>
                
                {/* Visual badges/features inside CTA */}
                <div className="pt-4 flex flex-wrap gap-4 text-xs text-steel-foreground/60">
                  <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>Visual Plant Inspection</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>Design Documentation Audits</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    <span>Cherlapally, Hyderabad</span>
                  </div>
                </div>
              </div>

              <div className="shrink-0">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-5 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-industrial hover:scale-[1.03] hover:opacity-95 active:scale-[0.98] transition-all duration-300 group cursor-pointer"
                >
                  Schedule a Plant Visit
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
