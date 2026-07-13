import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { useState } from "react";
import { Search, MapPin, Building2, ShieldCheck, Plane, Calendar, Box, ArrowRight, Award, Map, Shield } from "lucide-react";
import residentialImg from "@/assets/project-residential.jpg";
import commercialImg from "@/assets/project-commercial.jpg";
import industrialImg from "@/assets/project-industrial.jpg";
import curtainImg from "@/assets/product-curtain.jpg";
import glazingImg from "@/assets/product-glazing.jpg";
import doorsImg from "@/assets/product-doors.jpg";
import windowsImg from "@/assets/product-windows.jpg";
import airportImg from "@/assets/project-airport.png";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Completed Projects Portfolio — Qualpro Aluminium" },
      {
        name: "description",
        content:
          "Browse our comprehensive portfolio of 40+ completed airport, government, commercial, and residential glazing projects across India.",
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

export const allProjects = [
  // --- AVIATION (AIRPORTS) ---
  {
    title: "New Integrated Terminal – Rajahmundry Airport",
    category: "Aviation (Airports)" as const,
    client: "Airport Authority of India",
    location: "Rajahmundry, AP",
    scope: ["Structural Glazing", "ACP Cladding", "Facade Engineering"],
    year: "Ongoing Project",
    img: airportImg
  },
  {
    title: "New Integrated Terminal – Kadapa Airport",
    category: "Aviation (Airports)" as const,
    client: "Airport Authority of India",
    location: "Kadapa, AP",
    scope: ["Structural Glazing", "ACP Cladding", "Facade Engineering"],
    year: "Ongoing Project",
    img: airportImg
  },
  {
    title: "Cochin International Airport",
    category: "Aviation (Airports)" as const,
    client: "Cochin International Airport Ltd",
    location: "Cochin, Kerala",
    scope: ["Structural Glazing", "ACP Cladding", "Spider Glazing", "Automatic Sliding Doors", "Glass Partitions"],
    year: "2012-13",
    img: airportImg,
    featured: true
  },
  {
    title: "NITB, Agartala Airport",
    category: "Aviation (Airports)" as const,
    client: "NCC Ltd",
    location: "Agartala, Tripura",
    scope: ["Structural Glazing", "ACP Cladding", "Spider Glazing"],
    year: "2011-12",
    img: curtainImg
  },
  {
    title: "NITB, Vijayawada Airport",
    category: "Aviation (Airports)" as const,
    client: "Simplex Infra Ltd",
    location: "Vijayawada, AP",
    scope: ["Structural Glazing", "ACP Cladding", "Spider Glazing"],
    year: "2012-13",
    img: glazingImg
  },
  {
    title: "NITB - Tirupati Airport",
    category: "Aviation (Airports)" as const,
    client: "Sam India Builtwell",
    location: "Tirupati, AP",
    scope: ["Structural Glazing", "ACP Cladding", "Spider Glazing"],
    year: "2011-13",
    img: commercialImg
  },
  {
    title: "NITB - Khajuraho Airport",
    category: "Aviation (Airports)" as const,
    client: "Sri Avantika Contractors",
    location: "Khajuraho, MP",
    scope: ["Structural Glazing", "Spider Glazing"],
    year: "2011-12",
    img: windowsImg
  },
  {
    title: "NITB - Bhubaneswar Airport",
    category: "Aviation (Airports)" as const,
    client: "Lanco Infra Projects Ltd",
    location: "Bhubaneswar, Orissa",
    scope: ["Structural Glazing", "ACP Cladding", "Spider Glazing"],
    year: "2010-11",
    img: doorsImg
  },
  {
    title: "NITB, Varanasi Airport",
    category: "Aviation (Airports)" as const,
    client: "Lanco Infra Ltd",
    location: "Varanasi, UP",
    scope: ["Structural Glazing", "ACP Cladding", "Spider Glazing"],
    year: "2011-12",
    img: industrialImg
  },
  {
    title: "Vizag Airport",
    category: "Aviation (Airports)" as const,
    client: "AAI Ltd",
    location: "Visakhapatnam, AP",
    scope: ["Structural Glazing", "ACP Cladding"],
    year: "2012-13",
    img: airportImg
  },
  {
    title: "NITB - Vizag Airport",
    category: "Aviation (Airports)" as const,
    client: "MVR Infra",
    location: "Vizag, AP",
    scope: ["Structural Glazing", "ACP Cladding", "Honeycomb Cladding", "Spider Glazing"],
    year: "2012-13",
    img: commercialImg
  },
  {
    title: "Mangalore Airport",
    category: "Aviation (Airports)" as const,
    client: "Harsh Constructions Ltd",
    location: "Mangalore, Karnataka",
    scope: ["Structural Glazing", "ACP Cladding"],
    year: "2009-10",
    img: curtainImg
  },
  {
    title: "Hyderabad International Airport",
    category: "Aviation (Airports)" as const,
    client: "HIAL",
    location: "Hyderabad, Telangana",
    scope: ["Lift Glazing", "Aluminium Doors"],
    year: "2009-10",
    img: glazingImg
  },
  {
    title: "Kadapa Airport",
    category: "Aviation (Airports)" as const,
    client: "KMV",
    location: "Kadapa, AP",
    scope: ["Glazing", "Works Windows", "Doors"],
    year: "2012-13",
    img: windowsImg
  },
  {
    title: "Kannur International Airport",
    category: "Aviation (Airports)" as const,
    client: "LNTECC",
    location: "Kannur, Kerala",
    scope: ["Lift Spider Glazing"],
    year: "2012-13",
    img: doorsImg
  },

  // --- GOVERNMENT & INSTITUTIONAL ---
  {
    title: "AIIMS, Bilaspur",
    category: "Government & Institutional" as const,
    client: "NCC LTD",
    location: "Bilaspur, HP",
    scope: ["Aluminium Windows", "Doors", "Structural Glazing"],
    year: "2013-15",
    img: glazingImg
  },
  {
    title: "GMC, Rajnandgoan",
    category: "Government & Institutional" as const,
    client: "KMV Projects",
    location: "Rajnandgoan, Chhattisgarh",
    scope: ["Aluminium Windows", "Doors", "Structural Glazing"],
    year: "2013-14",
    img: curtainImg
  },
  {
    title: "IRIFM Campus",
    category: "Government & Institutional" as const,
    client: "Brunda Infra",
    location: "Hyderabad, Telangana",
    scope: ["Structural Glazing", "ACP Cladding", "Spider Glazing"],
    year: "2013-14",
    img: commercialImg
  },
  {
    title: "Insurance Regulatory Development Authority (IRDA)",
    category: "Government & Institutional" as const,
    client: "KPC Projects",
    location: "Hyderabad, Telangana",
    scope: ["Unitized Glazing", "ACP Cladding", "Spider Glazing", "Alu Soffit Cladding", "Curtainwall Cladding"],
    year: "2012-13",
    img: industrialImg
  },
  {
    title: "IIM Raipur",
    category: "Government & Institutional" as const,
    client: "NCC Ltd",
    location: "Raipur, Chhattisgarh",
    scope: ["Aluminium Curtainwall Glazing"],
    year: "2012-13",
    img: windowsImg
  },
  {
    title: "Vardhaman Institute of Medical Science",
    category: "Government & Institutional" as const,
    client: "NCC Ltd",
    location: "Patna, Bihar",
    scope: ["Aluminium Windows & Doors"],
    year: "2011-13",
    img: doorsImg
  },
  {
    title: "National Law University",
    category: "Government & Institutional" as const,
    client: "NCC Limited",
    location: "Cuttack, Orissa",
    scope: ["Structural Glazing", "ACP Cladding", "Aluminium Windows"],
    year: "2010-11",
    img: glazingImg
  },
  {
    title: "Civil Hospital",
    category: "Government & Institutional" as const,
    client: "NCC Limited",
    location: "Ahmedabad, Gujarat",
    scope: ["Aluminium Windows", "Doors", "Ventilators"],
    year: "2010-11",
    img: curtainImg
  },
  {
    title: "National Institute of Technology",
    category: "Government & Institutional" as const,
    client: "NCC Limited",
    location: "Agartala, Tripura",
    scope: ["Structural Glazing", "ACP Cladding", "Windows", "Doors"],
    year: "2010-11",
    img: commercialImg
  },
  {
    title: "ESIC Sanathnagar Hospital",
    category: "Government & Institutional" as const,
    client: "Vijay Nirman Construction Ltd",
    location: "Hyderabad, AP",
    scope: ["Structural Glazing", "ACP Cladding", "Windows", "Doors"],
    year: "2012-13",
    img: industrialImg
  },
  {
    title: "Corporate Bhavan",
    category: "Government & Institutional" as const,
    client: "Raus Constructions Ltd",
    location: "Hyderabad, AP",
    scope: ["Structural Glazing", "ACP Cladding", "Windows", "Doors"],
    year: "2012-13",
    img: glazingImg
  },
  {
    title: "NIT Agarthala Main Campus",
    category: "Government & Institutional" as const,
    client: "NCC Limited",
    location: "Agartala, Tripura",
    scope: ["Structural Glazing", "ACP Cladding", "Spider Glazing", "Windows"],
    year: "2011-13",
    img: windowsImg
  },
  {
    title: "DGMAP Project",
    category: "Government & Institutional" as const,
    client: "NCC Limited",
    location: "Visakhapatnam, AP",
    scope: ["Structural Glazing", "ACP Cladding", "Windows & Doors"],
    year: "2011-13",
    img: doorsImg
  },
  {
    title: "NIMS Hospital Campus",
    category: "Government & Institutional" as const,
    client: "Nagarjuna Construction Company Ltd",
    location: "B.B. Nagar, AP",
    scope: ["Structural Glazing", "ACP Cladding", "Aluminium Windows", "Louvered Ventilators"],
    year: "2009-10",
    img: glazingImg
  },
  {
    title: "National Institute of Technology (NIT)",
    category: "Government & Institutional" as const,
    client: "Nagarjuna Construction Company Ltd",
    location: "Warangal, AP",
    scope: ["Aluminium Structural Glazing", "ACP Cladding", "Spider Glazing", "Windows", "Doors"],
    year: "2009-10",
    img: curtainImg
  },
  {
    title: "NIMS Hospital ventilators",
    category: "Government & Institutional" as const,
    client: "Nagarjuna Construction Company Ltd",
    location: "B.B. Nagar, AP",
    scope: ["Structural Glazing", "ACP Cladding", "Aluminium Louvered Ventilators"],
    year: "2009-10",
    img: windowsImg
  },
  {
    title: "Mega Sports Complex",
    category: "Government & Institutional" as const,
    client: "Nagarjuna Construction Company Ltd",
    location: "Ranchi, Jharkhand",
    scope: ["Aluminium Composite Panelling (ACP)"],
    year: "2008-09",
    img: commercialImg
  },
  {
    title: "SAAP Games Village",
    category: "Government & Institutional" as const,
    client: "Nagarjuna Construction Company Ltd",
    location: "Nanakramguda, AP",
    scope: ["Aluminium Structural Glazing", "ACP Cladding"],
    year: "2007-08",
    img: curtainImg
  },

  // --- COMMERCIAL & INFRASTRUCTURE ---
  {
    title: "Trendset Mall",
    category: "Commercial & Infrastructure" as const,
    client: "Trendset Builders",
    location: "Vijayawada, AP",
    scope: ["Aluminium Structural Glazing", "ACP Cladding", "Canopy", "Automated Entrances"],
    year: "2013-14",
    img: commercialImg
  },
  {
    title: "MRF Facility",
    category: "Commercial & Infrastructure" as const,
    client: "NCC Limited",
    location: "Trichy, Tamilnadu",
    scope: ["Aluminium Windows", "Aluminium Doors", "Ventilators"],
    year: "2010-11",
    img: industrialImg
  },
  {
    title: "Lanco Kondapalli Power Pvt Ltd",
    category: "Commercial & Infrastructure" as const,
    client: "Lanco Infratech Limited",
    location: "Vijayawada, AP",
    scope: ["Aluminum Windows", "Doors", "Ventilators"],
    year: "2010-11",
    img: curtainImg
  },
  {
    title: "ICFAI Campus Project",
    category: "Commercial & Infrastructure" as const,
    client: "NCC Limited",
    location: "Tura, Meghalaya",
    scope: ["Aluminium Doors", "Aluminium Windows", "Ventilators"],
    year: "2010-11",
    img: glazingImg
  },
  {
    title: "Lanco Hills - Club House",
    category: "Commercial & Infrastructure" as const,
    client: "Lanco Hills Technology Park Pvt Ltd",
    location: "Hyderabad, AP",
    scope: ["Structural Glazing", "ACP Cladding", "Spider Glazing", "Aluminium Windows & Doors"],
    year: "2010-11",
    img: commercialImg
  },
  {
    title: "Oberoi Flight Services",
    category: "Commercial & Infrastructure" as const,
    client: "EIH Limited",
    location: "New Delhi",
    scope: ["Aluminium Structural Glazing", "ACP Cladding", "Windows", "Doors"],
    year: "2010-11",
    img: industrialImg
  },
  {
    title: "IOCL Paradeep Refinery",
    category: "Commercial & Infrastructure" as const,
    client: "NCC Ltd",
    location: "Paradeep, Odisha",
    scope: ["Aluminium Windows", "Aluminium Doors", "Cladding"],
    year: "2011-12",
    img: curtainImg
  },
  {
    title: "Manjeera Majestic",
    category: "Commercial & Infrastructure" as const,
    client: "Manjeera Holdings Pvt Ltd",
    location: "Hyderabad, AP",
    scope: ["Structural Glazing", "ACP Cladding", "Windows", "Doors"],
    year: "2010-11",
    img: glazingImg
  },
  {
    title: "Oberoi Hotel",
    category: "Commercial & Infrastructure" as const,
    client: "EIH Limited",
    location: "New Delhi",
    scope: ["Aluminium Structural Glazing", "ACP Cladding", "Premium Windows & Doors"],
    year: "2010-11",
    img: commercialImg
  },
  {
    title: "Navayuga Infotech Park",
    category: "Commercial & Infrastructure" as const,
    client: "Trisha Infrastructures Ltd",
    location: "Visakhapatnam, AP",
    scope: ["Structural Glazing", "Curtainwall", "ACP Cladding", "Doors & Windows"],
    year: "2009-10",
    img: windowsImg
  },
  {
    title: "Lanco Amarkantak Power Plant",
    category: "Commercial & Infrastructure" as const,
    client: "Lanco Infratech Ltd",
    location: "Korba, Chhattisgarh",
    scope: ["Aluminum Windows", "Doors", "Ventilators"],
    year: "2009-10",
    img: industrialImg
  },
  {
    title: "Sierra Atlantic Software Services Campus",
    category: "Commercial & Infrastructure" as const,
    client: "Sierra Atlantic Software Services Ltd",
    location: "Nanakramguda, AP",
    scope: ["Aluminum Structural Glazing", "Spider Glazing", "Canopy", "Windows & Ventilators"],
    year: "2008-09",
    img: glazingImg
  },
  {
    title: "Krishnapatnam Port Building",
    category: "Commercial & Infrastructure" as const,
    client: "Trisha Infrastructures Ltd",
    location: "Nellore, AP",
    scope: ["Aluminum Structural Glazing", "ACP Cladding", "Aluminum Fins"],
    year: "2007-08",
    img: curtainImg
  },
  {
    title: "ICFAI Campus Shankarpally",
    category: "Commercial & Infrastructure" as const,
    client: "ICFAI",
    location: "Shankarpally, AP",
    scope: ["Aluminium Doors", "Windows", "Ventilators"],
    year: "2006-08",
    img: windowsImg
  },
  {
    title: "Indu Projects Office",
    category: "Commercial & Infrastructure" as const,
    client: "Indu Constructions Ltd",
    location: "Kukatpally, AP",
    scope: ["Powder-coated Aluminium Louvered Ventilators"],
    year: "2006-07",
    img: doorsImg
  },

  // --- RESIDENTIAL & TOWNSHIPS ---
  {
    title: "Hill County Integrated Township",
    category: "Residential & Townships" as const,
    client: "Maytas Infra Ltd",
    location: "Bachupally, AP",
    scope: ["Aluminum Windows", "Doors", "Ventilators"],
    year: "2007-09",
    img: residentialImg
  }
];

const categories: Category[] = ["All", "Aviation (Airports)", "Government & Institutional", "Commercial & Infrastructure", "Residential & Townships"];

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
        description="Browse our portfolio of 40+ high-performance building envelopes. From state-level institutions to public airport terminals, we deliver absolute structural precision on time."
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
                <Map className="h-5 w-5" />
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
            <div className="flex flex-row flex-wrap gap-2.5 max-w-full py-1">
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

          {/* FEATURED PROJECTS SPOTLIGHT BANNER */}
          {featuredProject && !searchQuery && (
            <div className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-industrial hover:border-primary/20 transition-all duration-500 animate-rise">
              <div className="grid gap-8 lg:grid-cols-12 items-stretch">
                
                {/* Image Section */}
                <div className="lg:col-span-7 relative overflow-hidden min-h-[300px] lg:min-h-[460px]">
                  <img
                    src={featuredProject.img}
                    alt={featuredProject.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.015]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/20 to-transparent hidden lg:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/30 to-transparent lg:hidden" />
                  
                  {/* Category & Badge */}
                  <div className="absolute top-6 left-6 flex gap-2">
                    <div className="rounded-lg bg-primary px-3.5 py-1.5 text-[10px] uppercase font-bold tracking-widest text-primary-foreground shadow-industrial">
                      Featured Project
                    </div>
                    <div className={`rounded-lg border px-3 py-1.5 text-[10px] uppercase font-bold tracking-widest backdrop-blur-md ${getCategoryStyle(featuredProject.category)}`}>
                      {featuredProject.category}
                    </div>
                  </div>
                </div>

                {/* Details Section */}
                <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <span className="flex items-center gap-1.5 text-[10px] text-primary uppercase font-bold tracking-widest">
                      <Award className="h-4 w-4 shrink-0" /> Prestigious Infrastructure Handover
                    </span>
                    <h3 className="font-display text-2xl lg:text-3xl font-black text-foreground leading-tight">
                      {featuredProject.title}
                    </h3>
                    
                    <div className="space-y-2 pt-2">
                      <p className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                        <Building2 className="h-4.5 w-4.5 text-primary shrink-0" />
                        <span>Client: <strong className="text-foreground">{featuredProject.client}</strong></span>
                      </p>
                      <p className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4.5 w-4.5 text-primary shrink-0" />
                        <span>{featuredProject.location}</span>
                      </p>
                      <p className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4.5 w-4.5 text-primary shrink-0" />
                        <span>Completion Year: {featuredProject.year}</span>
                      </p>
                    </div>

                    <div className="pt-4">
                      <p className="text-xs uppercase font-bold tracking-wider text-muted-foreground mb-2.5">Scope of Façade Systems:</p>
                      <div className="flex flex-wrap gap-1.5">
                        {featuredProject.scope.map((sc, idx) => (
                          <span
                            key={idx}
                            className="rounded-lg bg-secondary px-3 py-1.5 text-[10px] font-semibold text-muted-foreground border border-border flex items-center gap-1"
                          >
                            <ShieldCheck className="h-3.5 w-3.5 text-primary shrink-0" />
                            {sc}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border/80">
                    <a
                      href={`/contact?subject=Enquiry%20regarding%20${encodeURIComponent(featuredProject.title)}`}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-xs font-bold uppercase tracking-wider text-primary-foreground hover:bg-primary/95 transition-all duration-300 px-6 py-3.5 shadow-md hover:shadow-card hover:translate-y-[-1px] group/btn w-full sm:w-auto"
                    >
                      Enquire about this Project
                      <ArrowRight className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* PROJECTS CARD GRID */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {gridProjects.length > 0 ? (
              gridProjects.map((p, i) => (
                <article
                  key={p.title + i}
                  className="group flex flex-col justify-between rounded-2xl border border-border bg-card overflow-hidden shadow-card hover:-translate-y-1 hover:shadow-industrial hover:border-primary/20 transition-all duration-500 animate-rise"
                  style={{ animationDelay: `${i * 20}ms` }}
                >
                  <div>
                    {/* Visual Frame */}
                    <div className="relative overflow-hidden aspect-[16/11] border-b border-border">
                      <img
                        src={p.img}
                        alt={p.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" />
                      
                      {/* Floating Category Tag */}
                      <div className={`absolute top-4 left-4 rounded-lg border backdrop-blur-md px-2.5 py-1 text-[9px] uppercase font-bold tracking-widest shadow-industrial ${getCategoryStyle(p.category)}`}>
                        {p.category}
                      </div>

                      {/* Year Indicator */}
                      <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-black/60 backdrop-blur-md rounded-md px-2.5 py-1 text-[9px] text-white/90 border border-white/10 font-bold">
                        <Calendar className="h-3.5 w-3.5 text-primary shrink-0" />
                        <span>{p.year}</span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 min-h-[52px] flex items-center leading-snug">
                          {p.title}
                        </h3>
                        <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground font-semibold">
                          <Building2 className="h-4 w-4 text-primary shrink-0" />
                          <span>Client: {p.client}</span>
                        </p>
                        <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                          <MapPin className="h-4 w-4 text-primary shrink-0" />
                          <span>{p.location}</span>
                        </p>
                      </div>

                      {/* Scope badges panel */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/80">
                        {p.scope.slice(0, 3).map((sc, scIdx) => (
                          <span
                            key={scIdx}
                            className="rounded-md bg-secondary px-2 py-1 text-[9px] font-semibold text-muted-foreground border border-border flex items-center gap-1"
                          >
                            <ShieldCheck className="h-3 w-3 text-primary shrink-0" />
                            {sc}
                          </span>
                        ))}
                        {p.scope.length > 3 && (
                          <span className="rounded-md bg-secondary/80 px-2 py-1 text-[9px] font-bold text-muted-foreground/70 border border-border/60">
                            +{p.scope.length - 3} More
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Enquiry button */}
                  <div className="px-6 pb-6 pt-2">
                    <a
                      href={`/contact?subject=Enquiry%20regarding%20${encodeURIComponent(p.title)}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary hover:text-primary-active transition-colors duration-300 group/link cursor-pointer"
                    >
                      Enquire about this Project
                      <ArrowRight className="h-3.5 w-3.5 transform group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </article>
              ))
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
