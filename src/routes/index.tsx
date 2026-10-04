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
  ArrowUpRight,
  CheckCircle2,
  Store,
  Hotel,
  Home as HomeIcon,
  Landmark,
  GraduationCap,
  Briefcase,
  Clock,
  Coins,
  Globe,
  Factory,
  Leaf,
  Table,
  LayoutGrid,
  Check,
  Sparkles
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
import { allProjects, getCategoryStyle, getProjectSlug, type Category } from "./projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Premium Facade Company in Hyderabad - Transforming Skylines | Qual Pro Aluminium" },
      {
        name: "description",
        content:
          "At Qual Pro Aluminium, we specialize in end-to-end designing, manufacturing, and installing premium aluminium facade systems in Hyderabad. Trusted facade contractor for commercial, residential & public infrastructure.",
      },
      { property: "og:title", content: "Premium Facade Company in Hyderabad | Qual Pro Aluminium" },
      {
        property: "og:description",
        content:
          "Qual Pro Aluminium designs, manufactures, and installs premium aluminium facade systems that combine aesthetics, functionality, and performance in Hyderabad.",
      },
      { property: "og:type", content: "website" },
      { name: "keywords", content: "Facade Company in Hyderabad, Premium Facade Company in Hyderabad, Aluminium Facade Systems Hyderabad, Curtain Wall Systems Hyderabad, Unitized Glazing Hyderabad, Structural Glazing Hyderabad, ACP Cladding Hyderabad" },
    ],
  }),
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
  { k: "50+", v: "Completed projects" },
  { k: "10+", v: "Years of success" },
  { k: "Hyderabad", v: "Cherlapally based" },
];

const sectors = [
  { title: "Commercial buildings", icon: Building2, desc: "Office towers, commercial complexes, and modern skylines." },
  { title: "IT Parks", icon: Cpu, desc: "High-tech workspaces with premium climate-controlled facades." },
  { title: "Corporate offices", icon: Briefcase, desc: "Corporate headquarters reflecting corporate identity." },
  { title: "Shopping malls", icon: Layers, desc: "Atriums, dynamic entrances, and wide retail glass fronts." },
  { title: "Retail outlets", icon: Store, desc: "Sleek retail display windows and customized door systems." },
  { title: "Educational institutions", icon: GraduationCap, desc: "Durable glazing solutions for school & university campuses." },
  { title: "Hospitals", icon: Activity, desc: "Hygiene-first, sound-insulated facade engineering." },
  { title: "Hotels", icon: Hotel, desc: "Premium aesthetic glazing for international hospitality suites." },
  { title: "Industrial facilities", icon: Wrench, desc: "Heavy-duty structural framing and louvers for aeration." },
  { title: "Residential apartments", icon: Building2, desc: "Modern residential high-rises with thermal comfort." },
  { title: "Luxury villas", icon: HomeIcon, desc: "Custom minimal-frame sliding doors and sleek skylights." },
  { title: "Government projects", icon: Landmark, desc: "Code-compliant, high-durability infrastructure development." }
];

const highlights = [
  { icon: Award, title: "Expert Leadership", desc: "Led by Mr. Ramesh Kommana (MS, Texas A&M) & Ms. Veda Deepthi A (MBA, IIM Calcutta)." },
  { icon: ShieldCheck, title: "Precision Design", desc: "Driven by innovation and defined by precision at every stage." },
  { icon: Wrench, title: "End-to-End Solutions", desc: "Design, engineering, custom fabrication, and on-site execution." },
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

const projectCategories: Category[] = ["All", "Aviation (Airports)", "Commercial & Infrastructure"];

const whyQualProPillars = [
  {
    id: "01",
    title: "Complete Responsibility",
    subtitle: "End-to-end ownership",
    colorTheme: "green",
    icon: ShieldCheck,
    tag: "100% Single-Point Contact",
    category: "Accountability",
    description: "Full end-to-end project lifecycle ownership from engineering design, raw material sourcing, factory fabrication, to final site erection and handover."
  },
  {
    id: "02",
    title: "Competitive Pricing",
    subtitle: "Value without compromising quality",
    colorTheme: "orange",
    icon: Coins,
    tag: "Budget & Value Optimized",
    category: "Commercial Edge",
    description: "Direct factory-to-site pricing and optimized engineering workflows that deliver maximum structural performance within budget constraints."
  },
  {
    id: "03",
    title: "On-Time Execution",
    subtitle: "Disciplined planning & coordination",
    colorTheme: "green",
    icon: Clock,
    tag: "Zero-Delay Delivery Protocol",
    category: "Schedule Control",
    description: "Strict milestone tracking, proactive site coordination, and synchronized material logistics to ensure strict adherence to project schedules."
  },
  {
    id: "04",
    title: "Façade Expertise",
    subtitle: "Glazing, fenestration & cladding",
    colorTheme: "green",
    icon: Building2,
    tag: "Advanced Envelope Engineering",
    category: "Technical Mastery",
    description: "Specialized expertise across unitized curtain walls, stick glazing systems, high-rise structural glazing, aluminium composite cladding (ACP), and louvers."
  },
  {
    id: "05",
    title: "Pan-India Experience",
    subtitle: "Multi-sector project delivery",
    colorTheme: "orange",
    icon: Globe,
    tag: "Nationwide Infrastructure Reach",
    category: "Proven Track Record",
    description: "Extensive experience completing landmark facade projects for major international airports, AIIMS medical institutes, IT hubs, and commercial towers across India."
  },
  {
    id: "06",
    title: "Integrated Capabilities",
    subtitle: "Design to installation",
    colorTheme: "green",
    icon: Cpu,
    tag: "Turnkey System Delivery",
    category: "Full Lifecycle Scope",
    description: "Complete in-house capability encompassing architectural design support, structural wind load analysis, CNC fabrication, and certified site installation."
  },
  {
    id: "07",
    title: "Quality & Reliability",
    subtitle: "Structured quality control",
    colorTheme: "green",
    icon: Award,
    tag: "Multi-Stage Quality Audits",
    category: "Quality Assurance",
    description: "Strict quality assurance protocols with factory sealing inspection, airtightness, water penetration testing, and structural integrity checks."
  },
  {
    id: "08",
    title: "In-House Fabrication",
    subtitle: "Control over quality & timelines",
    colorTheme: "orange",
    icon: Factory,
    tag: "Cherlapally Plant (25,000 Sq Ft)",
    category: "Manufacturing Power",
    description: "Owned state-of-the-art Cherlapally manufacturing facility with precision Italian LGF CNC machinery, pneumatic assembly lines, and master fabricators."
  },
  {
    id: "09",
    title: "Sustainable Execution",
    subtitle: "Efficient processes & material use",
    colorTheme: "green",
    icon: Leaf,
    tag: "Eco-Friendly Operations",
    category: "Sustainability",
    description: "Use of thermally broken aluminium profiles, recyclable alloy materials, optimized scrap management, and high-performance energy efficient glazing."
  }
];

function Home() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [currentHeroIdx, setCurrentHeroIdx] = useState(0);
  const [activeProjectTab, setActiveProjectTab] = useState<Category>("All");
  const [whyQualproMode, setWhyQualproMode] = useState<"table" | "matrix">("table");

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
      {/* Local Business Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Qual Pro Aluminium",
            "image": "https://qualproaluminium.com/assets/hero-factory.jpg",
            "url": "https://qualproaluminium.com",
            "telephone": "+919848125106",
            "priceRange": "$$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "# 17, IDA, Phase 1, Cherlapally",
              "addressLocality": "Hyderabad",
              "postalCode": "500051",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "17.4645",
              "longitude": "78.6012"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "09:00",
              "closes": "18:00"
            },
            "description": "Premium Facade Company in Hyderabad specializing in end-to-end design, manufacturing, and installation of premium aluminium facade systems, curtain walls, unitized glazing, and ACP cladding."
          })
        }}
      />

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
          <p className="animate-rise text-xs font-bold uppercase tracking-[0.28em]">
            <span className="text-primary">QUAL</span>
            <span className="text-brand-orange">PRO</span>
            <span className="text-steel-foreground/60 ml-1.5">ALUMINIUM</span>
          </p>
          <h1 className="animate-rise mt-5 font-display max-w-5xl tracking-tight leading-[1.15]">
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
              Premium Facade Company in Hyderabad
            </span>
            <span className="block mt-3 bg-brand-gradient bg-clip-text text-transparent text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide font-sans">
              Transforming Skylines &amp; Redefining Modern Architecture
            </span>
          </h1>
          <div className="animate-rise mt-8 max-w-4xl space-y-4">
            <p className="text-base md:text-lg font-medium text-white/95 leading-relaxed">
              At Qual Pro Aluminium, we specialize in end-to-end designing, manufacturing, and installing premium aluminium facade systems that combine aesthetics, functionality, and long-term performance.
            </p>
            <p className="text-sm md:text-base text-steel-foreground/75 leading-relaxed border-l-2 border-brand-orange pl-4">
              With years of industry expertise, we have earned a reputation as a trusted Facade Company in Hyderabad, delivering high-quality solutions for commercial buildings, corporate offices, retail spaces, hospitals, educational institutions, hotels, and residential projects.
            </p>
          </div>
          <div className="animate-rise mt-9 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-brand-orange px-6 py-3 text-sm font-semibold text-white shadow-industrial transition hover:opacity-95"
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





      {/* SECTION: WHY QUAL PRO (EXECUTIVE TABLE & MATRIX FORMAT) */}
      <section className="py-24 bg-card border-t border-border relative overflow-hidden">
        <div className="absolute left-0 top-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full bg-brand-orange/5 blur-3xl pointer-events-none" />

        <div className="container-x relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary block mb-3">
                Core Operational Matrix
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
                WHY QUAL PRO?
              </h2>
              <p className="mt-3 text-base text-muted-foreground max-w-2xl leading-relaxed">
                Selecting the right partner for your building envelope is crucial. As a leading Aluminium Facade Company in Hyderabad with pan-India delivery, we provide end-to-end accountability across design, fabrication, and installation.
              </p>
            </div>

            {/* View switcher buttons */}
            <div className="inline-flex items-center p-1 rounded-xl bg-secondary border border-border shrink-0 self-start md:self-auto shadow-sm">
              <button
                type="button"
                onClick={() => setWhyQualproMode("table")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  whyQualproMode === "table"
                    ? "bg-card text-foreground shadow-sm border border-border"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Table className="h-4 w-4 text-primary" />
                <span>Specification Table</span>
              </button>
              <button
                type="button"
                onClick={() => setWhyQualproMode("matrix")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  whyQualproMode === "matrix"
                    ? "bg-card text-foreground shadow-sm border border-border"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <LayoutGrid className="h-4 w-4 text-brand-orange" />
                <span>Matrix Grid Table</span>
              </button>
            </div>
          </div>

          {whyQualproMode === "table" ? (
            /* EXECUTIVE SPECIFICATION TABLE VIEW */
            <div className="rounded-2xl border border-border bg-card shadow-industrial overflow-hidden transition-all duration-300">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[750px]">
                  <thead>
                    <tr className="bg-secondary/70 border-b border-border text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                      <th className="py-4 px-6 w-1/4">Pillar & Capability</th>
                      <th className="py-4 px-6 w-1/4">Core Focus</th>
                      <th className="py-4 px-6 w-2/5">Operational Scope & Delivery</th>
                      <th className="py-4 px-6 w-1/6 text-right">Qual Pro Standard</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/60">
                    {whyQualProPillars.map((item) => {
                      const IconComp = item.icon;
                      const isGreen = item.colorTheme === "green";
                      return (
                        <tr
                          key={item.id}
                          className="group hover:bg-secondary/30 transition-colors duration-200"
                        >
                          <td className="py-5 px-6 align-top">
                            <div className="flex items-center gap-3">
                              <div
                                className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl transition-all ${
                                  isGreen
                                    ? "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                                    : "bg-brand-orange/10 text-brand-orange group-hover:bg-brand-orange group-hover:text-white"
                                }`}
                              >
                                <IconComp className="h-5 w-5" />
                              </div>
                              <div>
                                <span className="text-[10px] font-mono text-muted-foreground block font-bold">
                                  #{item.id}
                                </span>
                                <h3
                                  className={`font-display text-base font-extrabold leading-snug ${
                                    isGreen
                                      ? "text-emerald-600 dark:text-emerald-400"
                                      : "text-brand-orange dark:text-amber-500"
                                  }`}
                                >
                                  {item.title}
                                </h3>
                              </div>
                            </div>
                          </td>

                          <td className="py-5 px-6 align-top">
                            <div className="font-semibold text-sm text-foreground">
                              {item.subtitle}
                            </div>
                            <span className="inline-block mt-1.5 text-[11px] text-muted-foreground font-medium bg-secondary px-2.5 py-0.5 rounded border border-border/50">
                              {item.category}
                            </span>
                          </td>

                          <td className="py-5 px-6 align-top">
                            <p className="text-xs text-muted-foreground leading-relaxed">
                              {item.description}
                            </p>
                          </td>

                          <td className="py-5 px-6 align-top text-right">
                            <span
                              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap border ${
                                isGreen
                                  ? "bg-primary/10 text-primary border-primary/20"
                                  : "bg-brand-orange/10 text-brand-orange border-brand-orange/20"
                              }`}
                            >
                              <Check className="h-3.5 w-3.5" />
                              {item.tag}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            /* MATRIX GRID TABLE VIEW */
            <div className="border border-border rounded-2xl bg-card shadow-industrial overflow-hidden divide-y divide-border">
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
                {whyQualProPillars.slice(0, 3).map((item) => {
                  const IconComp = item.icon;
                  const isGreen = item.colorTheme === "green";
                  return (
                    <div
                      key={item.id}
                      className="p-6 md:p-8 bg-card hover:bg-secondary/20 transition-all duration-300 flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest font-bold">
                            Pillar #{item.id}
                          </span>
                          <div
                            className={`grid h-9 w-9 place-items-center rounded-xl transition-all ${
                              isGreen
                                ? "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                                : "bg-brand-orange/10 text-brand-orange group-hover:bg-brand-orange group-hover:text-white"
                            }`}
                          >
                            <IconComp className="h-4 w-4" />
                          </div>
                        </div>

                        <h3
                          className={`font-display text-lg md:text-xl font-extrabold leading-tight ${
                            isGreen
                              ? "text-emerald-600 dark:text-emerald-400"
                              : "text-brand-orange dark:text-amber-500"
                          }`}
                        >
                          {item.title}
                        </h3>

                        <p className="text-xs font-semibold text-foreground/80 mt-1">
                          {item.subtitle}
                        </p>

                        <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between">
                        <span
                          className={`inline-flex items-center gap-1 text-[11px] font-bold ${
                            isGreen ? "text-primary" : "text-brand-orange"
                          }`}
                        >
                          <Check className="h-3 w-3" />
                          {item.tag}
                        </span>
                        <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground/70">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
                {whyQualProPillars.slice(3, 6).map((item) => {
                  const IconComp = item.icon;
                  const isGreen = item.colorTheme === "green";
                  return (
                    <div
                      key={item.id}
                      className="p-6 md:p-8 bg-card hover:bg-secondary/20 transition-all duration-300 flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest font-bold">
                            Pillar #{item.id}
                          </span>
                          <div
                            className={`grid h-9 w-9 place-items-center rounded-xl transition-all ${
                              isGreen
                                ? "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                                : "bg-brand-orange/10 text-brand-orange group-hover:bg-brand-orange group-hover:text-white"
                            }`}
                          >
                            <IconComp className="h-4 w-4" />
                          </div>
                        </div>

                        <h3
                          className={`font-display text-lg md:text-xl font-extrabold leading-tight ${
                            isGreen
                              ? "text-emerald-600 dark:text-emerald-400"
                              : "text-brand-orange dark:text-amber-500"
                          }`}
                        >
                          {item.title}
                        </h3>

                        <p className="text-xs font-semibold text-foreground/80 mt-1">
                          {item.subtitle}
                        </p>

                        <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between">
                        <span
                          className={`inline-flex items-center gap-1 text-[11px] font-bold ${
                            isGreen ? "text-primary" : "text-brand-orange"
                          }`}
                        >
                          <Check className="h-3 w-3" />
                          {item.tag}
                        </span>
                        <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground/70">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
                {whyQualProPillars.slice(6, 9).map((item) => {
                  const IconComp = item.icon;
                  const isGreen = item.colorTheme === "green";
                  return (
                    <div
                      key={item.id}
                      className="p-6 md:p-8 bg-card hover:bg-secondary/20 transition-all duration-300 flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest font-bold">
                            Pillar #{item.id}
                          </span>
                          <div
                            className={`grid h-9 w-9 place-items-center rounded-xl transition-all ${
                              isGreen
                                ? "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                                : "bg-brand-orange/10 text-brand-orange group-hover:bg-brand-orange group-hover:text-white"
                            }`}
                          >
                            <IconComp className="h-4 w-4" />
                          </div>
                        </div>

                        <h3
                          className={`font-display text-lg md:text-xl font-extrabold leading-tight ${
                            isGreen
                              ? "text-emerald-600 dark:text-emerald-400"
                              : "text-brand-orange dark:text-amber-500"
                          }`}
                        >
                          {item.title}
                        </h3>

                        <p className="text-xs font-semibold text-foreground/80 mt-1">
                          {item.subtitle}
                        </p>

                        <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between">
                        <span
                          className={`inline-flex items-center gap-1 text-[11px] font-bold ${
                            isGreen ? "text-primary" : "text-brand-orange"
                          }`}
                        >
                          <Check className="h-3 w-3" />
                          {item.tag}
                        </span>
                        <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground/70">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <div className="mt-12 rounded-2xl bg-gradient-to-r from-primary/10 via-brand-orange/10 to-primary/10 border border-primary/15 p-6 md:p-8 text-center max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <h4 className="font-display text-base font-bold text-foreground">
                Looking for a dependable façade contractor in Hyderabad or across India?
              </h4>
              <p className="text-xs text-muted-foreground mt-1">
                Consult with our engineering team for technical drawings, BOQ estimation, and design advice.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-5 py-2.5 rounded-xl text-xs hover:bg-primary/90 transition-all shrink-0 shadow-sm"
            >
              Request Technical Proposal <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION: WHAT MAKES US DIFFERENT (OUR EDGE) */}
      <section className="py-24 bg-secondary/15 border-y border-border relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full bg-brand-orange/5 blur-3xl pointer-events-none" />

        <div className="container-x relative z-10">
          <div className="max-w-xl mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-orange block mb-3">
              Our Edge
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
              What makes us different?
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Our core values and operational strengths that set us apart.
            </p>
          </div>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
            {[
              "Experienced facade engineering team",
              "Premium quality aluminium systems",
              "Modern manufacturing standards",
              "Innovative architectural solutions",
              "Precision installation",
              "Timely project completion",
              "Strict quality control",
              "Custom-built facade systems",
              "Competitive pricing",
              "Reliable after-sales support"
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="group rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-industrial hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 mb-4">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h4 className="font-display text-sm font-bold text-foreground leading-snug">
                  {item}
                </h4>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-3xl bg-gradient-to-r from-primary/10 via-brand-orange/10 to-primary/10 border border-primary/10 p-8 md:p-10 text-center max-w-4xl mx-auto">
            <p className="text-base md:text-lg font-bold text-foreground leading-relaxed max-w-3xl mx-auto">
              Every solution we deliver is designed to improve building appearance, energy efficiency, weather resistance, and long-term durability.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION: FAÇADE & EXTERNAL BUILDING ENVELOPE SOLUTIONS */}
      <section className="py-24 bg-background border-t border-border relative overflow-hidden">
        <div className="absolute right-0 top-1/4 w-[450px] h-[450px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        <div className="absolute left-0 bottom-10 w-[450px] h-[450px] rounded-full bg-brand-orange/5 blur-3xl pointer-events-none" />

        <div className="container-x relative z-10">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary block mb-3">
              Building Envelope Engineering
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight uppercase">
              FAÇADE & EXTERNAL BUILDING ENVELOPE SOLUTIONS
            </h2>
            <p className="mt-3 text-lg font-semibold text-primary/90">
              Engineering for performance, precision and architectural impact.
            </p>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Qual Pro Aluminium delivers integrated external envelope solutions combining engineering expertise, controlled fabrication, quality materials and disciplined site execution for superior aesthetics, durability, weather performance and long-term reliability.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Unitized Glazing",
                badge: "Factory Prefabricated",
                icon: Activity,
                link: "/services/$serviceId",
                params: { serviceId: "unitized-glazing" },
                desc: "Factory-fabricated modular façades for rapid installation, consistent quality and large-scale performance."
              },
              {
                title: "Stick Glazing",
                badge: "Geometric Adaptability",
                icon: GridIcon,
                link: "/services/$serviceId",
                params: { serviceId: "facade-works" },
                desc: "Site-assembled curtain-wall systems adaptable to varied geometries and architectural requirements."
              },
              {
                title: "Spider Glazing",
                badge: "Point Supported",
                icon: Maximize2,
                link: "/services/$serviceId",
                params: { serviceId: "spider-glazing" },
                desc: "Point-supported glass systems for transparent entrances, atriums and feature façades."
              },
              {
                title: "Aluminium Windows & Doors",
                badge: "Engineered Fenestration",
                icon: HomeIcon,
                link: "/services/$serviceId",
                params: { serviceId: "doors" },
                desc: "Engineered fenestration systems for performance, durability and architectural integration."
              },
              {
                title: "Semi-Unitized Glazing",
                badge: "Hybrid Precision",
                icon: Cpu,
                link: "/services/$serviceId",
                params: { serviceId: "unitized-glazing" },
                desc: "Hybrid systems combining installation flexibility with high standards of finish and performance."
              },
              {
                title: "Structural Glazing",
                badge: "Frameless Glass",
                icon: Building2,
                link: "/products/$productId",
                params: { productId: "structural-glazing" },
                desc: "High-performance glazed façades creating clean, contemporary external envelopes."
              },
              {
                title: "ACP / Metal Cladding",
                badge: "Weather Protection",
                icon: Compass,
                link: "/services/$serviceId",
                params: { serviceId: "cladding" },
                desc: "Durable architectural cladding for weather protection, identity and external finishes."
              },
              {
                title: "Curtain Wall Systems",
                badge: "Integrated Envelope",
                icon: Layers,
                link: "/services/$serviceId",
                params: { serviceId: "curtain-wall-systems" },
                desc: "Integrated glazed building-envelope systems for commercial and institutional developments."
              }
            ].map((sol) => {
              const IconComponent = sol.icon;
              return (
                <Link
                  key={sol.title}
                  to={sol.link}
                  params={sol.params}
                  className="group rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-industrial hover:-translate-y-1.5 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-primary/80 bg-primary/10 px-2.5 py-1 rounded-md">
                        {sol.badge}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {sol.title}
                    </h3>
                    <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">
                      {sol.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/50 flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:gap-2.5 transition-all">
                    <span>Explore System</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION: INTERNAL FAÇADE & ARCHITECTURAL INTERIOR SOLUTIONS */}
      <section className="py-24 bg-card border-t border-border relative overflow-hidden">
        <div className="absolute left-0 top-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full bg-brand-orange/5 blur-3xl pointer-events-none" />

        <div className="container-x relative z-10">
          {/* Header */}
          <div className="max-w-4xl mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary block mb-3">
              Interior Envelope Architecture
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight uppercase">
              INTERNAL FAÇADE & ARCHITECTURAL INTERIOR SOLUTIONS
            </h2>
            <p className="mt-3 text-lg md:text-xl font-bold text-brand-orange">
              Precision-crafted systems for contemporary interior environments.
            </p>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Our internal architectural solutions combine functionality, aesthetics, durability and precision workmanship for commercial, institutional, hospitality and premium interior environments.
            </p>
          </div>

          {/* 6 Solutions Grid / Table Layout */}
          <div className="border border-border rounded-2xl bg-card shadow-industrial overflow-hidden divide-y divide-border mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
              {/* Item 1: Internal Glass Partitions (Green) */}
              <div className="p-8 bg-card hover:bg-secondary/20 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest font-bold">
                      Interior System #01
                    </span>
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <GridIcon className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">
                    Internal Glass Partitions
                  </h3>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    Engineered systems that define spaces while preserving openness, natural light and visual connectivity.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between">
                  <span className="text-xs font-bold text-primary">Spatial Definition</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">Commercial & Office</span>
                </div>
              </div>

              {/* Item 4: Frameless Glass Partitions (Orange) */}
              <div className="p-8 bg-card hover:bg-secondary/20 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest font-bold">
                      Interior System #02
                    </span>
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-orange/10 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all">
                      <Maximize2 className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-extrabold text-brand-orange dark:text-amber-500">
                    Frameless Glass Partitions
                  </h3>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    Minimalist systems maximising transparency with seamless contemporary architectural lines.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between">
                  <span className="text-xs font-bold text-brand-orange">Seamless Transparency</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">Minimalist Glazing</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
              {/* Item 2: Acrylic Solid Surface (Green) */}
              <div className="p-8 bg-card hover:bg-secondary/20 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest font-bold">
                      Interior System #03
                    </span>
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <Sparkles className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">
                    Acrylic Solid Surface
                  </h3>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    Seamless, durable and hygienic finishes for feature walls, counters, workspaces and reception areas.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between">
                  <span className="text-xs font-bold text-primary">Hygienic & Durable</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">Reception & Workspaces</span>
                </div>
              </div>

              {/* Item 5: Lacquered Glass (Orange) */}
              <div className="p-8 bg-card hover:bg-secondary/20 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest font-bold">
                      Interior System #04
                    </span>
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-orange/10 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all">
                      <Layers className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-extrabold text-brand-orange dark:text-amber-500">
                    Lacquered Glass
                  </h3>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    Premium coloured glass finishes for feature walls, partitions, panels and decorative applications.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between">
                  <span className="text-xs font-bold text-brand-orange">Coloured Glass Finish</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">Decorative Panels</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
              {/* Item 3: GFRC (Green) */}
              <div className="p-8 bg-card hover:bg-secondary/20 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest font-bold">
                      Interior System #05
                    </span>
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <Building2 className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">
                    GFRC
                  </h3>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    Lightweight Glass Fiber Reinforced Concrete solutions with strength and design flexibility for panels and feature elements.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between">
                  <span className="text-xs font-bold text-primary">Glass Fiber Reinforced Concrete</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">Feature Elements</span>
                </div>
              </div>

              {/* Item 6: Stainless Steel Glazing (Orange) */}
              <div className="p-8 bg-card hover:bg-secondary/20 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest font-bold">
                      Interior System #06
                    </span>
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-orange/10 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-extrabold text-brand-orange dark:text-amber-500">
                    Stainless Steel Glazing
                  </h3>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    Precision-engineered glazing combining structural performance with a sophisticated premium finish.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between">
                  <span className="text-xs font-bold text-brand-orange">Structural & Sophisticated</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">Premium Finish</span>
                </div>
              </div>
            </div>
          </div>

          {/* INTEGRATED INTERIOR EXECUTION PIPELINE BAR */}
          <div className="mt-12 rounded-2xl bg-secondary/30 border border-border p-6 md:p-8">
            <h3 className="font-display text-xl md:text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 uppercase tracking-tight mb-6">
              INTEGRATED INTERIOR EXECUTION
            </h3>

            {/* Alternating 8-step bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 overflow-hidden rounded-xl">
              {[
                { label: "Design Coordination", color: "bg-emerald-700 text-white" },
                { label: "Material Selection", color: "bg-brand-orange text-white" },
                { label: "Detailing", color: "bg-emerald-700 text-white" },
                { label: "Fabrication", color: "bg-brand-orange text-white" },
                { label: "Installation", color: "bg-emerald-700 text-white" },
                { label: "Finishing", color: "bg-brand-orange text-white" },
                { label: "Quality Control", color: "bg-emerald-700 text-white" },
                { label: "Handover", color: "bg-brand-orange text-white" }
              ].map((step, i) => (
                <div
                  key={step.label}
                  className={`${step.color} p-3.5 text-center font-display text-xs md:text-sm font-extrabold flex flex-col items-center justify-center min-h-[60px] shadow-sm hover:scale-[1.02] transition-transform`}
                >
                  <span className="text-[10px] opacity-80 font-mono font-bold block mb-0.5">
                    Step {i + 1}
                  </span>
                  <span>{step.label}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
              We ensure seamless integration between architectural intent and site execution, with a consistent focus on precision, workmanship, durability and finished quality.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION: MANUFACTURING CAPABILITY & PROJECT EXPERIENCE */}
      <section className="py-24 bg-background border-t border-border relative overflow-hidden">
        <div className="absolute right-0 top-1/3 w-[450px] h-[450px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        <div className="absolute left-0 bottom-0 w-[450px] h-[450px] rounded-full bg-brand-orange/5 blur-3xl pointer-events-none" />

        <div className="container-x relative z-10">
          <div className="max-w-4xl mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary block mb-3">
              Cherlapally Plant Infrastructure
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight uppercase">
              MANUFACTURING CAPABILITY & PROJECT EXPERIENCE
            </h2>
            <p className="mt-3 text-base md:text-lg text-muted-foreground leading-relaxed">
              Controlled fabrication backed by focused project experience across airport and commercial developments.
            </p>
          </div>

          {/* 5-Column Table / Grid Layout */}
          <div className="border border-border rounded-2xl bg-card shadow-industrial overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 lg:divide-x divide-border">
              {/* Item 1: Double Head Cutting (Green) */}
              <div className="p-6 md:p-8 bg-card hover:bg-secondary/20 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest font-bold">
                      Machinery #01
                    </span>
                    <div className="grid h-9 w-9 place-items-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <Wrench className="h-4 w-4" />
                    </div>
                  </div>
                  <h3 className="font-display text-lg md:text-xl font-extrabold text-emerald-600 dark:text-emerald-400">
                    Double Head Cutting
                  </h3>
                  <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                    Industrial multi-angle aluminium profile cutting
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-primary">High-Precision Cut</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">Cherlapally</span>
                </div>
              </div>

              {/* Item 2: CNC Machining (Orange) */}
              <div className="p-6 md:p-8 bg-card hover:bg-secondary/20 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest font-bold">
                      Machinery #02
                    </span>
                    <div className="grid h-9 w-9 place-items-center rounded-xl bg-brand-orange/10 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all">
                      <Cpu className="h-4 w-4" />
                    </div>
                  </div>
                  <h3 className="font-display text-lg md:text-xl font-extrabold text-brand-orange dark:text-amber-500">
                    CNC Machining
                  </h3>
                  <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                    LGF Italy make; 4000 mm multi-axis profile processing
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-brand-orange">LGF Italy CNC</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">4000 mm Axis</span>
                </div>
              </div>

              {/* Item 3: End Milling & Copy Router (Green) */}
              <div className="p-6 md:p-8 bg-card hover:bg-secondary/20 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest font-bold">
                      Machinery #03
                    </span>
                    <div className="grid h-9 w-9 place-items-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <Layers className="h-4 w-4" />
                    </div>
                  </div>
                  <h3 className="font-display text-lg md:text-xl font-extrabold text-emerald-600 dark:text-emerald-400">
                    End Milling & Copy Router
                  </h3>
                  <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                    Accurate profile preparation and hardware routing
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-primary">Accurate Prep</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">Hardware Routing</span>
                </div>
              </div>

              {/* Item 4: Silicone Dispensing (Orange) */}
              <div className="p-6 md:p-8 bg-card hover:bg-secondary/20 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest font-bold">
                      Machinery #04
                    </span>
                    <div className="grid h-9 w-9 place-items-center rounded-xl bg-brand-orange/10 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                  </div>
                  <h3 className="font-display text-lg md:text-xl font-extrabold text-brand-orange dark:text-amber-500">
                    Silicone Dispensing
                  </h3>
                  <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                    Controlled glazing and sealing applications
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-brand-orange">Controlled Sealing</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">Structural Glazing</span>
                </div>
              </div>

              {/* Item 5: ACP Cutting & Grooving (Green) */}
              <div className="p-6 md:p-8 bg-card hover:bg-secondary/20 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest font-bold">
                      Machinery #05
                    </span>
                    <div className="grid h-9 w-9 place-items-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <Compass className="h-4 w-4" />
                    </div>
                  </div>
                  <h3 className="font-display text-lg md:text-xl font-extrabold text-emerald-600 dark:text-emerald-400">
                    ACP Cutting & Grooving
                  </h3>
                  <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                    Heavy-duty architectural panel processing
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-primary">Heavy-Duty Panel</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">Cladding Prep</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <Link
              to="/infrastructure"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary hover:text-primary-foreground"
            >
              Explore Full Infrastructure Facility <ArrowRight className="h-4 w-4" />
            </Link>
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
            <div className="flex flex-row flex-nowrap overflow-x-auto gap-2.5 max-w-full py-1 self-start lg:self-end scrollbar-none">
              {projectCategories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveProjectTab(c)}
                  className={`rounded-xl px-5 py-3 text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 shrink-0 border shadow-sm cursor-pointer ${
                    activeProjectTab === c
                      ? "bg-primary border-primary text-primary-foreground shadow-md shadow-primary/10"
                      : "bg-card border-border text-muted-foreground hover:text-foreground hover:border-primary/20"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-16">
            {displayProjects.map((p, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={p.id}
                  className="grid gap-8 lg:grid-cols-12 items-center py-8 border-b border-border/50 dark:border-white/5 last:border-0 last:pb-0"
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
                      
                      {/* Floating Category Badge (using Green for Aviation, Orange for Commercial) */}
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
                    <div className="grid grid-cols-3 gap-3 border-y border-border/80 dark:border-white/5 py-4">
                      <div>
                        <span className="text-[9px] uppercase font-black text-muted-foreground tracking-widest block">Client</span>
                        <span className="text-xs font-bold text-foreground mt-0.5 block truncate" title={p.client}>{p.client}</span>
                      </div>
                      <div>
                        <span className="text-[9px] uppercase font-black text-muted-foreground tracking-widest block">Status</span>
                        <span className={`text-xs font-bold mt-0.5 block ${
                          p.year === "Ongoing Project" ? "text-brand-orange font-extrabold" : "text-foreground"
                        }`}>{p.year}</span>
                      </div>
                      <div>
                        <span className="text-[9px] uppercase font-black text-muted-foreground tracking-widest block">Value</span>
                        <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 mt-0.5 block">
                          {(p as any).value || "Custom Scope"}
                        </span>
                      </div>
                    </div>

                    {/* Scope tags */}
                    <div className="space-y-2">
                      <span className="text-[9px] uppercase font-black tracking-widest text-muted-foreground">Scope of Execution</span>
                      <div className="flex flex-wrap gap-1.5">
                        {p.scope.map((s) => (
                          <span
                            key={s}
                            className="rounded-lg bg-secondary border border-border text-secondary-foreground px-2.5 py-1 text-xs font-semibold"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project Highlights Preview */}
                    {(p as any).highlights && (p as any).highlights.length > 0 && (
                      <div className="space-y-1.5 pt-1">
                        <span className="text-[9px] uppercase font-black tracking-widest text-muted-foreground">Key Highlights</span>
                        <ul className="space-y-1 text-xs text-muted-foreground font-medium">
                          {(p as any).highlights.slice(0, 2).map((hl: string, hIdx: number) => (
                            <li key={hIdx} className="flex items-start gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-brand-orange mt-1.5 shrink-0" />
                              <span className="line-clamp-2">{hl}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* CTA link - Button styled in primary logo color (Green) or accent color (Orange) */}
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
            })}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-brand-orange hover:opacity-95 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 transform hover:scale-[1.02] cursor-pointer"
            >
              Explore Full Portfolio ({allProjects.length} Projects) <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION: WE SERVE (SCROLLING TICKER) */}
      <section className="py-20 bg-card border-t border-border overflow-hidden relative">
        <div className="container-x">
          <div className="max-w-3xl mb-10 text-center mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary block mb-3">Markets We Serve</span>
            <h3 className="font-display text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
              We serve diverse architectural sectors
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Every project receives personalised attention, ensuring quality workmanship and timely delivery.
            </p>
          </div>
        </div>

        {/* Infinite Marquee Track */}
        <div className="relative flex overflow-x-hidden w-full select-none mt-8 border-y border-border/50 py-6 bg-secondary/5">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <div className="flex gap-12 md:gap-16 items-center animate-marquee whitespace-nowrap">
            {/* First Copy */}
            {sectors.map((sector, idx) => {
              const IconComp = sector.icon;
              // Alternate text colors and style weights for a high-end designer look
              const textColors = [
                "text-foreground hover:text-primary",
                "text-brand-orange hover:text-foreground",
                "text-primary hover:text-brand-orange"
              ];
              const iconColors = [
                "text-primary",
                "text-brand-orange",
                "text-primary"
              ];
              const textColor = textColors[idx % textColors.length];
              const iconColor = iconColors[idx % iconColors.length];

              return (
                <div 
                  key={`serve-${idx}`} 
                  className="flex items-center gap-4 shrink-0 cursor-default"
                >
                  <IconComp className={`h-6 w-6 ${iconColor} shrink-0 transition-transform duration-300 hover:scale-110`} />
                  <span className={`font-display text-lg md:text-xl font-extrabold uppercase tracking-wider transition-colors duration-300 ${textColor}`}>
                    {sector.title}
                  </span>
                </div>
              );
            })}
            {/* Second Copy for Loop */}
            {sectors.map((sector, idx) => {
              const IconComp = sector.icon;
              const textColors = [
                "text-foreground hover:text-primary",
                "text-brand-orange hover:text-foreground",
                "text-primary hover:text-brand-orange"
              ];
              const iconColors = [
                "text-primary",
                "text-brand-orange",
                "text-primary"
              ];
              const textColor = textColors[idx % textColors.length];
              const iconColor = iconColors[idx % iconColors.length];

              return (
                <div 
                  key={`serve-dup-${idx}`} 
                  className="flex items-center gap-4 shrink-0 cursor-default"
                >
                  <IconComp className={`h-6 w-6 ${iconColor} shrink-0 transition-transform duration-300 hover:scale-110`} />
                  <span className={`font-display text-lg md:text-xl font-extrabold uppercase tracking-wider transition-colors duration-300 ${textColor}`}>
                    {sector.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION: PARTNER WITH US */}
      <section className="py-24 bg-secondary/15 border-t border-border relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full bg-brand-orange/5 blur-3xl pointer-events-none" />

        <div className="container-x relative z-10">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            
            {/* Left Column: Collaboration Pitch */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-orange block mb-3">Collaboration</span>
                <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
                  Partner With Us
                </h3>
              </div>
              
              <div className="space-y-4">
                <p className="text-lg text-foreground/95 leading-relaxed font-semibold">
                  If you're looking for a dependable Facade Company in Hyderabad, Qual Pro Aluminium is your trusted partner for innovative exterior building solutions.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  From concept and design to fabrication and installation, we provide complete Commercial Facade Solutions, advanced Facade and Glazing Solutions, and reliable Facade and Fenestration solutions that deliver long-term value.
                </p>
              </div>
            </div>

            {/* Right Column: Goal & Call to Action */}
            <div className="lg:col-span-5 bg-card border border-border rounded-3xl p-8 md:p-10 space-y-6 shadow-industrial">
              <p className="text-base text-foreground font-medium leading-relaxed">
                Our goal is to create visually striking, durable, and high-performing buildings through precision engineering, quality craftsmanship, and customer-focused service.
              </p>
              <div className="pt-6 border-t border-border/80 flex flex-col gap-4">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Contact Qual Pro Aluminium today to discuss your project and discover how our customized aluminium facade solutions can bring your vision to life.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-orange text-white px-6 py-4 text-sm font-bold uppercase tracking-wider shadow-lg shadow-brand-orange/20 hover:opacity-95 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer text-center w-full"
                >
                  Contact Us Today <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-20 bg-card border-t border-border relative overflow-hidden">
        <div className="container-x relative z-10">
          <SectionHeader
            eyebrow="Testimonials"
            title="What Our Clients & Partners Say"
            description="Trusted by leading developers, architects, and infrastructure companies across India."
          />
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-ink via-steel to-ink p-8 md:p-12 lg:p-16 shadow-industrial border border-white/10">
            {/* Ambient glows */}
            <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/25 blur-3xl pointer-events-none" />
            <div className="absolute -left-24 -bottom-24 h-96 w-96 rounded-full bg-brand-orange/20 blur-3xl pointer-events-none" />
            
            <div className="relative z-10 grid gap-12 lg:grid-cols-12 items-center">
              
              {/* Left Column: Heading and feature cards */}
              <div className="lg:col-span-7 space-y-8 animate-rise">
                <div className="space-y-4">
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-orange">Get Started</span>
                  <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                    Ready to spec your next project?
                  </h2>
                  <p className="text-base md:text-lg text-steel-foreground/80 leading-relaxed max-w-xl">
                    Send us your drawings or requirement — you'll get a professional engineering assessment and quotation within 48 hours.
                  </p>
                </div>
                
                {/* Redesigned card features instead of basic pills */}
                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    { title: "Free Technical Review", desc: "Complete drawing & spec scan", icon: ShieldCheck, color: "text-primary bg-primary/10 border-primary/20" },
                    { title: "48-Hour Turnaround", desc: "Fast engineering estimation", icon: Clock, color: "text-brand-orange bg-brand-orange/10 border-brand-orange/20" },
                    { title: "Direct Partner Review", desc: "MS/MBA director oversight", icon: Award, color: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20" }
                  ].map((feat, idx) => {
                    const IconComponent = feat.icon;
                    return (
                      <div 
                        key={idx} 
                        className="rounded-2xl border border-white/5 bg-white/5 p-5 backdrop-blur-sm hover:border-white/10 hover:bg-white/10 transition-all duration-300 group"
                      >
                        <div className={`grid h-10 w-10 place-items-center rounded-xl border ${feat.color} transition-all duration-300 group-hover:scale-105`}>
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <h4 className="mt-4 text-sm font-bold text-white leading-snug">
                          {feat.title}
                        </h4>
                        <p className="mt-1 text-xs text-steel-foreground/60 leading-relaxed">
                          {feat.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Premium CTA Conversion Card */}
              <div className="lg:col-span-5 animate-rise [animation-delay:150ms]">
                <div className="relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md p-8 md:p-10 space-y-6 shadow-2xl flex flex-col justify-between items-center text-center group hover:border-primary/30 transition-all duration-300">
                  <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-brand-orange/10 blur-2xl group-hover:bg-brand-orange/15 transition-colors" />
                  
                  <div className="space-y-3 relative z-10">
                    <h3 className="font-display text-xl font-bold text-white">
                      Request a Custom Quote
                    </h3>
                    <p className="text-xs md:text-sm text-steel-foreground/75 leading-relaxed">
                      Submit your architectural plans or engineering documents. Our senior estimators will deliver a custom proposal in 48 hours.
                    </p>
                  </div>

                  <div className="w-full pt-4 border-t border-white/10 relative z-10 flex flex-col items-center">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-primary to-brand-orange px-8 py-4.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-primary/25 hover:opacity-95 hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer w-full text-center"
                    >
                      Request a Quote <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
