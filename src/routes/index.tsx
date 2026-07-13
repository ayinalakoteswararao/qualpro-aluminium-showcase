import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Wrench,
  Truck,
  Layers,
  Activity,
  Compass,
  Maximize2,
  Grid as GridIcon,
  Wind,
  Scale,
  Thermometer,
  RotateCw,
  VolumeX,
  Cpu,
  Sun,
  Building2,
  MapPin,
  Calendar,
  Box,
  ArrowUpRight
} from "lucide-react";
import heroImg from "@/assets/hero-factory.jpg";
import windowsImg from "@/assets/product-windows.jpg";
import doorsImg from "@/assets/product-doors.jpg";
import curtainImg from "@/assets/product-curtain.jpg";
import glazingImg from "@/assets/product-glazing.jpg";
import fabricationImg from "@/assets/product-fabrication.jpg";
import airportImg from "@/assets/project-airport.png";
import commercialImg from "@/assets/project-commercial.jpg";
import industrialImg from "@/assets/project-industrial.jpg";
import residentialImg from "@/assets/project-residential.jpg";
import { SectionHeader } from "@/components/site/SectionHeader";
import { allProjects, getCategoryStyle, type Category } from "./projects";

export const Route = createFileRoute("/")({
  component: Home,
});

const services = [
  { id: "curtain-wall-systems", type: "services", title: "Curtain Wall Systems", img: curtainImg, icon: Layers, desc: "Custom-engineered curtain walling systems for high-performance building envelopes, offering structural strength and modern design." },
  { id: "unitized-glazing", type: "services", title: "Unitized Glazing Systems", img: glazingImg, icon: Activity, desc: "Pre-fabricated facade panels manufactured in controlled plant environments and assembled directly on-site for speed and quality." },
  { id: "spider-glazing", type: "services", title: "Spider Glazing Systems", img: windowsImg, icon: Maximize2, desc: "Glass facade systems featuring point-fixed supports with stainless steel spider fittings – ideal for atriums, lobbies, and entrances." },
  { id: "facade-works", type: "services", title: "Facade Works", img: fabricationImg, icon: Wrench, desc: "Comprehensive facade solutions combining design, structural engineering, fabrication, and installation to achieve stunning building envelopes." },
  { id: "cladding", type: "services", title: "ACP Cladding", img: fabricationImg, icon: Compass, desc: "High-quality Aluminium Composite Panel (ACP) cladding systems that provide a sleek, contemporary, and durable finish." },
  { id: "structural-glazing", type: "products", title: "Structural Glazing", img: curtainImg, icon: GridIcon, desc: "Concealed-grid frameless glass facade systems that offer clean lines and seamless glass expanses for modern commercial developments." },
  { id: "louvers-and-sunshade-systems", type: "products", title: "Louvers & Sunshade Systems", img: windowsImg, icon: Wind, desc: "Architecturally styled louvers and shading solutions designed to manage solar heat gain, improve energy efficiency, and elevate aesthetics." },
  { id: "skylights", type: "services", title: "Skylights", img: curtainImg, icon: Sun, desc: "Engineered overhead glazing systems designed to maximize daylighting in atriums, passages, and central spaces while maintaining structural strength." },
  { id: "doors", type: "services", title: "Windows & Doors (Interior/Exterior)", img: doorsImg, icon: GridIcon, desc: "Premium quality aluminium windows and doors crafted for daily operational excellence, security, and noise isolation." },
];

const stats = [
  { k: "30+", v: "Years of experience" },
  { k: "512+", v: "Completed projects" },
  { k: "10+", v: "Years of success" },
  { k: "Hyderabad", v: "Cherlapally based" },
];

const highlights = [
  { icon: Award, title: "Expert Leadership", desc: "Led by Mr. Ramesh Kommana (MS, Texas A&M) & Ms. Veda Deepthi A (MBA, IIM Calcutta)." },
  { icon: ShieldCheck, title: "Precision Design", desc: "Driven by innovation and defined by precision at every stage." },
  { icon: Wrench, title: "End-to-End Delivery", desc: "Design, engineering, custom fabrication, and on-site execution." },
  { icon: Truck, title: "Customer Success", desc: "We build strong collaborative client relationships with a focus on project delivery." },
];

const clients = [
  "NCC Ltd",
  "Simplex Infra Ltd",
  "Sam India Builtwell",
  "Lanco Infra Projects",
  "Harsh Constructions",
  "Airport Authority of India",
  "MVR Infra",
  "KMV Projects",
  "L&T ECC (LNTECC)",
  "HIAL (Hyderabad Airport)",
  "CIAL (Cochin Airport)"
];

const clientStyles = [
  "font-outfit text-2xl md:text-4xl font-extrabold tracking-tighter text-foreground/75 hover:text-foreground",
  "font-cinzel text-xl md:text-3xl font-bold tracking-widest text-foreground/70 hover:text-foreground",
  "font-share-tech text-2xl md:text-3xl font-semibold tracking-normal text-primary/80 hover:text-primary",
  "font-syne text-2xl md:text-4xl font-black uppercase text-foreground/75 hover:text-foreground",
  "font-cormorant text-3xl md:text-4xl font-bold italic tracking-wide text-foreground/70 hover:text-foreground",
  "font-jakarta text-2xl md:text-3xl font-extrabold tracking-tight text-foreground/75 hover:text-foreground",
  "font-share-tech text-2xl md:text-3xl font-bold tracking-tight text-foreground/70 hover:text-foreground",
  "font-outfit text-2xl md:text-4xl font-black uppercase tracking-wider text-foreground/75 hover:text-foreground",
  "font-cinzel text-2xl md:text-3xl font-semibold tracking-wider text-foreground/70 hover:text-foreground",
  "font-syne text-2xl md:text-3xl font-extrabold tracking-normal text-foreground/75 hover:text-foreground",
  "font-cormorant text-3xl md:text-4xl font-semibold italic text-foreground/70 hover:text-foreground"
];

const benefits = [
  { icon: Scale, title: "High Strength-to-Weight", desc: "Weighing only a third of steel, aluminium supports massive glass expanses with extremely thin structural profiles." },
  { icon: Thermometer, title: "Polyamide Thermal Barriers", desc: "Prevents heat bridging between interior and exterior profiles, reducing AC energy costs in demanding Indian climates." },
  { icon: RotateCw, title: "100% Circular Material", desc: "Can be recycled infinitely without losing its metallurgical integrity, saving 95% of primary extraction energy." },
  { icon: ShieldCheck, title: "Self-Healing Oxide Film", desc: "Naturally forms a protective surface oxide layer upon exposure to oxygen, preventing rust in high-humidity zones." },
  { icon: Cpu, title: "Millimeter Extrusion Tolerance", desc: "Extruded under extreme hydraulic pressure to achieve complex geometric profiles with tight tolerances for perfect gasket sealing." },
  { icon: VolumeX, title: "Superior Acoustic Damping", desc: "Rigid profiles integrate perfectly with multi-layered EPDM gaskets and double-glazed units to block outdoor noise by up to 40 decibels." },
];

const testimonials = [
  {
    name: "Rohit Menon",
    role: "Principal Architect, Studio Verde",
    quote:
      "Qualpro's execution on our unitized glazing was flawless. Tolerances were tight and they hit every milestone.",
  },
  {
    name: "Anjali Rao",
    role: "Project Manager, Blueline Constructions",
    quote:
      "The quality of the ACP cladding and structural glazing is genuinely premium. They've become our go-to facade partner.",
  },
  {
    name: "Farhan Khan",
    role: "Homeowner, Palm Grove Villa",
    quote:
      "The customized windows and doors transformed our living space. Smooth, silent, and beautifully finished.",
  },
  {
    name: "Mr. Rajesh Kumar",
    role: "Project Director, Airport Authority of India (AAI)",
    quote:
      "Qualpro handled the complex canopy glazing at the new airport terminal with outstanding precision. Their design engineering stood up to all structural wind loads perfectly.",
  },
  {
    name: "Mr. Devendra Sharma",
    role: "VP Projects, KMV Projects",
    quote:
      "For state-level institutional developments, we needed a facade partner who understands strict code compliance. Qualpro delivered top-notch unitized glazing on schedule.",
  },
  {
    name: "Mr. S. Lakshmanan",
    role: "Senior General Manager, NCC Limited",
    quote:
      "Qualpro has repeatedly demonstrated their capability to scale up production. Their Cherlapally factory fabrication is fast, and on-site alignment is impeccable.",
  },
];

const heroImages = [
  heroImg,
  airportImg,
  commercialImg,
  industrialImg,
  residentialImg,
  curtainImg,
  glazingImg,
  windowsImg,
  fabricationImg,
  doorsImg
];

const projectCategories: Category[] = ["All", "Aviation (Airports)", "Government & Institutional", "Commercial & Infrastructure", "Residential & Townships"];

function Home() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [currentHeroIdx, setCurrentHeroIdx] = useState(0);
  const [activeProjectTab, setActiveProjectTab] = useState<Category>("All");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIdx((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const filteredProjects = allProjects.filter((p) => {
    if (activeProjectTab === "All") return true;
    return p.category === activeProjectTab;
  });

  const displayProjects = filteredProjects.slice(0, 6);



  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-steel-foreground">
        {heroImages.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt="Aluminium systems facade showcase background"
            width={1920}
            height={1200}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              idx === currentHeroIdx ? "opacity-40" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/50 to-ink/90" aria-hidden />
        <div className="container-x relative min-h-[86vh] flex flex-col justify-center py-24">
          <p className="animate-rise text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            Qualpro Aluminium
          </p>
          <h1 className="animate-rise mt-5 font-display text-5xl md:text-7xl font-bold leading-[1.02] max-w-4xl">
            Precision Fa&ccedil;ade &<br />
            <span className="text-primary">Fenestration Solutions.</span>
          </h1>
          <p className="animate-rise mt-6 max-w-xl text-lg text-steel-foreground/80">
            Qual Pro Aluminium is a market leader in fa&ccedil;ade and fenestration solutions. We provide end-to-end design, engineering, and execution that prioritize durability, performance, and aesthetics.
          </p>
          <div className="animate-rise mt-9 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-industrial transition hover:opacity-95"
            >
              Get a Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-steel-foreground backdrop-blur transition hover:bg-white/10"
            >
              View Products
            </Link>
          </div>

          <dl className="mt-16 grid max-w-3xl grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.v} className="border-l-2 border-primary pl-4">
                <dt className="font-display text-3xl font-bold text-steel-foreground">{s.k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-steel-foreground/60">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CLIENT TICKER / SCROLLING BRAND MARQUEE */}
      <section className="border-y border-border bg-card/65 py-10 md:py-14 overflow-hidden">
        <div className="container-x">
          <p className="text-center text-[10px] uppercase font-bold tracking-[0.25em] text-muted-foreground/80 mb-6">
            Trusted by Leading Developers & Infrastructure Corporates
          </p>
        </div>
        <div className="relative flex overflow-x-hidden w-full select-none">
          {/* Blur gradient mask effects on edges */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <div className="flex gap-20 md:gap-24 items-center animate-marquee whitespace-nowrap">
            {/* First list copy */}
            {clients.map((c, idx) => {
              const style = clientStyles[idx % clientStyles.length];
              return (
                <div key={idx} className="flex items-center gap-4 cursor-default shrink-0">
                  <span className="h-2 w-2 rounded-full bg-primary/60 shrink-0" />
                  <span className={`transition-colors duration-300 ${style}`}>{c}</span>
                </div>
              );
            })}
            {/* Duplicate copy for infinite loop */}
            {clients.map((c, idx) => {
              const style = clientStyles[idx % clientStyles.length];
              return (
                <div key={`dup-${idx}`} className="flex items-center gap-4 cursor-default shrink-0">
                  <span className="h-2 w-2 rounded-full bg-primary/60 shrink-0" />
                  <span className={`transition-colors duration-300 ${style}`}>{c}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-20">
        <div className="container-x">
          <SectionHeader
            eyebrow="Why Qualpro"
            title="Engineered for architects and owners who ship."
            description="From alloy selection to on-site handover, every step is owned by our team. No middlemen. No compromises."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="group rounded-xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:shadow-industrial"
              >
                <div className="grid h-11 w-11 place-items-center rounded-md bg-secondary text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <h.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-secondary/30 border-y border-border">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 animate-rise">
            <SectionHeader
              eyebrow="Products & Services"
              title="A complete aluminium systems partner."
              description="From residential windows to skyline-scale curtain walls — one accountable team."
            />
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline hover:gap-3 transition-all"
            >
              Explore all 8 capabilities <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 items-stretch mt-8">
            {/* Left Column: Interactive List */}
            <div className="lg:col-span-5 space-y-3 animate-rise">
              {services.map((s, idx) => {
                const IconComp = s.icon;
                const isActive = activeIdx === idx;
                return (
                  <Link
                    key={s.title}
                    to={s.type === "services" ? "/services/$serviceId" : "/products/$productId"}
                    params={s.type === "services" 
                      ? { serviceId: s.id } 
                      : { productId: s.id }
                    }
                    onMouseEnter={() => setActiveIdx(idx)}
                    className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 relative overflow-hidden group ${
                      isActive
                        ? "bg-card border-primary shadow-industrial scale-[1.01]"
                        : "bg-transparent border-border hover:bg-card/50 hover:border-border/80"
                    }`}
                  >
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
                    )}

                    <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg border transition-colors duration-300 ${
                      isActive 
                        ? "bg-primary text-primary-foreground border-primary" 
                        : "bg-secondary text-muted-foreground border-border group-hover:text-primary group-hover:border-primary/30"
                    }`}>
                      <IconComp className="h-5 w-5" />
                    </div>

                    <div className="space-y-1">
                      <h4 className={`font-display text-base font-bold transition-colors duration-300 ${
                        isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                      }`}>
                        {s.title}
                      </h4>
                      <p className="text-xs text-muted-foreground/80 line-clamp-1">
                        {s.desc}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Right Column: Display Showcase */}
            <div className="lg:col-span-7 h-full flex flex-col animate-rise [animation-delay:150ms]">
              <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-industrial p-6 md:p-8 flex flex-col justify-between h-full min-h-[500px] group">
                <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/15 transition-colors duration-500" />
                
                <div className="space-y-6 flex-grow flex flex-col justify-between">
                  {/* High quality image frame */}
                  <Link
                    to={services[activeIdx].type === "services" ? "/services/$serviceId" : "/products/$productId"}
                    params={services[activeIdx].type === "services" 
                      ? { serviceId: services[activeIdx].id } 
                      : { productId: services[activeIdx].id }
                    }
                    className="overflow-hidden rounded-2xl border border-border relative flex-grow min-h-[300px] md:min-h-[360px] lg:min-h-[400px] block cursor-pointer"
                  >
                    <img
                      src={services[activeIdx].img}
                      alt={services[activeIdx].title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 scale-100 hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
                  </Link>

                  <div className="space-y-3">
                    <h3 className="font-display text-2xl font-bold text-foreground hover:text-primary transition-colors">
                      <Link
                        to={services[activeIdx].type === "services" ? "/services/$serviceId" : "/products/$productId"}
                        params={services[activeIdx].type === "services" 
                          ? { serviceId: services[activeIdx].id } 
                          : { productId: services[activeIdx].id }
                        }
                      >
                        {services[activeIdx].title}
                      </Link>
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {services[activeIdx].desc}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <span className="text-xs text-muted-foreground font-medium">
                    Fully engineered & fabricated in our Cherlapally plant.
                  </span>
                  
                  <Link
                    to={services[activeIdx].type === "services" ? "/services/$serviceId" : "/products/$productId"}
                    params={services[activeIdx].type === "services" 
                      ? { serviceId: services[activeIdx].id } 
                      : { productId: services[activeIdx].id }
                    }
                    className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-xs font-semibold text-background hover:opacity-95 shadow-sm transition-opacity"
                  >
                    View Engineering Specs <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY ALUMINIUM */}
      <section className="py-20">
        <div className="container-x">
          <SectionHeader
            eyebrow="Why Aluminium"
            title="The material that outperforms — for a lifetime."
            description="Aluminium doesn't rust, doesn't rot and doesn't fade. It's why the world's best facades are built with it."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="flex gap-4 rounded-lg border border-border p-6">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-heat-gradient text-primary-foreground">
                  <b.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-foreground">{b.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLETED PROJECTS SHOWCASE */}
      <section className="py-24 border-t border-border bg-secondary/15">
        <div className="container-x">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <SectionHeader
              eyebrow="Our Execution"
              title="Completed Projects Showcase"
              description="A proven record of structural integrity, engineering precision, and architectural excellence across India."
            />
            {/* Category Filter Tabs */}
            <div className="flex flex-row flex-wrap gap-2.5 max-w-full py-1 self-start lg:self-end">
              {projectCategories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveProjectTab(c)}
                  className={`rounded-xl px-5 py-3 text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 shrink-0 border shadow-sm ${
                    activeProjectTab === c
                      ? "bg-primary border-primary text-primary-foreground shadow-industrial"
                      : "bg-card border-border text-muted-foreground hover:text-foreground hover:border-border/85"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {displayProjects.map((p, idx) => (
              <div
                key={`${p.title}-${idx}`}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-card hover:shadow-industrial transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image */}
                <div className="relative aspect-video w-full overflow-hidden border-b border-border bg-secondary">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                  <span className={`absolute top-3 right-3 rounded-lg border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md ${getCategoryStyle(p.category)}`}>
                    {p.category.split(" ")[0]}
                  </span>
                </div>

                {/* Body */}
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground/80 font-medium">
                      <MapPin className="h-3.5 w-3.5 text-primary" /> {p.location}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Client: <strong className="text-foreground/90 font-semibold">{p.client}</strong>
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-border/80">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground/80 block mb-1.5">
                      Scope of Work
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {p.scope.slice(0, 3).map((s) => (
                        <span
                          key={s}
                          className="rounded bg-secondary px-2 py-0.5 text-[9px] font-semibold text-secondary-foreground"
                        >
                          {s}
                        </span>
                      ))}
                      {p.scope.length > 3 && (
                        <span className="rounded bg-secondary px-2 py-0.5 text-[9px] font-semibold text-secondary-foreground">
                          +{p.scope.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-xl bg-foreground px-6 py-3.5 text-sm font-semibold text-background hover:opacity-95 shadow-industrial transition-opacity"
            >
              Explore Full Portfolio ({allProjects.length} Projects) <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-secondary/40">
        <div className="container-x">
          <SectionHeader
            eyebrow="Trusted by"
            title="What our clients say."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-xl border border-border bg-card p-6 shadow-card">
                <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M7.17 6C4.87 6 3 7.87 3 10.17V18h7v-8H6.5c0-1.66 1.34-3 3-3V6H7.17Zm10 0c-2.3 0-4.17 1.87-4.17 4.17V18h7v-8h-3.5c0-1.66 1.34-3 3-3V6h-2.33Z"/>
                </svg>
                <blockquote className="mt-4 text-sm leading-relaxed text-foreground">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <p className="font-display text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            ))}
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
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Get Started</span>
                <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                  Ready to spec your next project?
                </h2>
                <p className="text-base md:text-lg text-steel-foreground/75 leading-relaxed">
                  Send us your drawings or requirement — you'll get a professional engineering assessment and quotation within 48 hours.
                </p>
                
                {/* Visual badges/features inside CTA */}
                <div className="pt-4 flex flex-wrap gap-4 text-xs text-steel-foreground/60">
                  <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>Free Technical Review</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>48-Hour Turnaround</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    <span>Direct Director Review</span>
                  </div>
                </div>
              </div>

              <div className="shrink-0">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-5 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-industrial hover:scale-[1.03] hover:opacity-95 active:scale-[0.98] transition-all duration-300 group cursor-pointer"
                >
                  Request a Quote
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
