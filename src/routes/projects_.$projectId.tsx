import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { allProjects, getProjectSlug, getCategoryStyle } from "./projects";
import { PageHero } from "@/components/site/PageHero";
import { 
  ArrowLeft, 
  ArrowRight, 
  Building2, 
  MapPin, 
  Calendar, 
  ShieldCheck, 
  Award, 
  Info, 
  Grid, 
  ChevronRight,
  Sparkles,
  Wrench,
  Activity
} from "lucide-react";

// Detailed copy from draft for the major projects
const majorProjectsDetails: Record<string, {
  subtitle: string;
  longDesc: string;
  capabilities: string[];
  highlights?: string[];
  value?: string;
  scopeDetailed?: { title: string; desc: string }[];
}> = {
  "tirupati-airport": {
    subtitle: "State-of-the-Art Terminal Façade (₹16.40 Cr Infrastructure Execution)",
    value: "₹16.40 Crores",
    longDesc: "Qualpro Aluminium contributed to the development of NITB – Tirupati Airport by executing a specialized ₹16.40 Crore façade package for main contractor Sam India Builtwell Pvt. Ltd.\n\nThe project delivered a state-of-the-art terminal building envelope combining structural strength, architectural elegance, and energy efficiency. Our scope included high-performance Structural Glazing for natural light penetration, sleek ACP Cladding for weather-resistant exterior finishes, heavy-duty ACP Cutting & Grooving, and transparent Spider Glazing with stainless steel fittings.\n\nExecuted with precision, this landmark project reflects Qualpro Aluminium's deep technical capability in delivering large-scale aviation infrastructure that meets international standards.",
    capabilities: [
      "ACP Cutting & Grooving — Heavy-duty architectural panel processing",
      "Structural Glazing — High-performance façade systems designed to enhance durability, aesthetics, and natural light penetration",
      "ACP Cladding — Aluminium Composite Panels applied for a sleek, modern exterior finish with weather resistance",
      "Spider Glazing — Frameless glass systems supported by stainless steel spider fittings for a contemporary look"
    ],
    highlights: [
      "Delivered a state-of-the-art terminal façade combining strength, elegance, and energy efficiency.",
      "Integrated modern glazing technologies to meet international airport standards.",
      "Enhanced passenger experience with natural lighting and visually striking architecture.",
      "Executed with precision, reflecting Qualpro Aluminium's expertise in large-scale infrastructure projects."
    ],
    scopeDetailed: [
      { title: "ACP Cutting & Grooving", desc: "Heavy-duty architectural panel processing for custom profile fits." },
      { title: "Structural Glazing", desc: "High-performance façade systems designed to enhance durability, aesthetics, and natural light penetration." },
      { title: "ACP Cladding", desc: "Aluminium Composite Panels applied for a sleek, modern exterior finish with weather resistance." },
      { title: "Spider Glazing", desc: "Frameless glass systems supported by stainless steel spider fittings, delivering a contemporary look." }
    ]
  },
  "rajahmundry-airport": {
    subtitle: "Ongoing Infrastructure Package — Rajahmundry Airport Terminal",
    value: "Ongoing Infrastructure Package",
    longDesc: "At Rajahmundry Airport Terminal, Qualpro Aluminium is partnering with client Reenatus to deliver advanced façade solutions that combine structural durability with modern aesthetics.\n\nThe scope of work includes Structural Glazing systems designed for maximum transparency and strength, alongside ASD ACP Cladding that enhances both thermal efficiency and architectural appeal.\n\nThis project reflects our expertise in integrating precision engineering with innovative aluminium solutions, ensuring the terminal’s exterior meets international standards of safety, performance, and design. The combination of glazing and ACP cladding provides a seamless, contemporary look while maintaining resilience against environmental factors — a hallmark of our ongoing airport projects.",
    capabilities: [
      "Structural Glazing systems for maximum transparency and structural strength",
      "ASD ACP Cladding enhancing both thermal efficiency and architectural appeal",
      "Precision engineering integrated with innovative aluminium solutions",
      "Resilience against environmental factors and weather exposure"
    ],
    highlights: [
      "Partnering with Reenatus to deliver advanced façade solutions combining durability with modern aesthetics.",
      "Structural Glazing systems designed for maximum transparency and structural strength.",
      "ASD ACP Cladding enhancing both thermal efficiency and architectural appeal.",
      "Seamless contemporary look maintaining resilience against environmental factors — a hallmark of our ongoing airport projects."
    ],
    scopeDetailed: [
      { title: "Structural Glazing", desc: "Designed for maximum transparency, acoustic comfort, and structural strength." },
      { title: "ASD ACP Cladding", desc: "Enhances both thermal efficiency and architectural appeal across the building exterior." }
    ]
  },
  "vijayawada-airport": {
    subtitle: "State-of-the-Art Terminal Glazing (₹15 Cr Infrastructure Package)",
    value: "₹15 Crores",
    longDesc: "At Vijayawada Airport, Qualpro Aluminium is executing a ₹15 Crore façade project for client NKG, undertaking specialized aluminium, glazing, and cladding works.\n\nThe scope includes high-performance Structural Glazing engineered for durability, transparency, and modern aesthetics; sleek ACP Cladding for weather resistance; and frameless Spider Glazing supported by spider fittings for an open architectural expression.\n\nThe project integrates modern glazing technologies for large-scale aviation infrastructure, enhancing natural daylighting and terminal architecture.",
    capabilities: [
      "Structural Glazing — High-performance façade systems engineered for durability, transparency, and modern aesthetics",
      "ACP Cladding — Aluminium Composite Panels for sleek exterior finishes with weather resistance",
      "Spider Glazing — Frameless glass systems supported by spider fittings for open architectural expression",
      "Large-scale aviation infrastructure execution"
    ],
    highlights: [
      "Executing a state-of-the-art terminal façade combining strength, elegance and energy efficiency.",
      "Integrating modern glazing technologies for large-scale aviation infrastructure.",
      "Enhancing natural lighting and architectural appeal."
    ],
    scopeDetailed: [
      { title: "Structural Glazing", desc: "High-performance façade systems engineered for durability, transparency and modern aesthetics." },
      { title: "ACP Cladding", desc: "Aluminium Composite Panels for sleek exterior finishes with weather resistance." },
      { title: "Spider Glazing", desc: "Frameless glass systems supported by spider fittings for a contemporary and open architectural expression." }
    ]
  },
  "kadapa-airport": {
    subtitle: "Ongoing Project — New Domestic Terminal Building",
    value: "Awarded Façade Package",
    longDesc: "At Kadapa Airport, Andhra Pradesh, Qualpro Aluminium is executing specialized façade solutions for the New Domestic Terminal Building.\n\nThe project involves the systematic engineering, fabrication, and installation of durable building envelope systems in line with project specifications. Final awarded façade package details are being actively executed under strict quality and safety standards.\n\nKadapa Airport highlights our experience in delivering regional aviation infrastructure projects with technical precision and dependable site management.",
    capabilities: [
      "Façade Works for New Domestic Terminal Building",
      "Structural glazing and architectural cladding systems",
      "Fabrication as per approved engineering drawings",
      "Site alignment, finishing, and quality control"
    ],
    highlights: [
      "New Domestic Terminal Building project is actively under development at Kadapa Airport.",
      "Specialized façade works and aluminium envelope systems execution."
    ],
    scopeDetailed: [
      { title: "Façade Works", desc: "Final awarded façade package details for the new Domestic Terminal Building." }
    ]
  },
  "mn-park": {
    subtitle: "Contemporary Aluminium and Glazing Solutions",
    longDesc: "For the MN Park project, Qualpro Aluminium delivered aluminium and glazing solutions designed to enhance the building’s architectural identity, functionality and long-term performance.\n\nThe project demanded close coordination with the architectural and structural requirements of the development. Our team focused on accurate fabrication, clean finishing and systematic installation to achieve a modern and uniform appearance.\n\nThrough efficient planning and quality-focused execution, Qualpro Aluminium supported the creation of a visually appealing building envelope suited to the project’s commercial requirements.",
    capabilities: [
      "Architectural aluminium systems",
      "Façade and glazing installation",
      "Custom fabrication based on project drawings",
      "Finishing and alignment control",
      "Site coordination and quality assurance"
    ]
  }
};

const whyQualproPoints = [
  {
    title: "Thorough Drawing Study",
    desc: "Rigorous analysis of drawings and engineering specs to ensure structural accuracy."
  },
  {
    title: "Practical Design Coordination",
    desc: "Value engineering that preserves architectural aesthetics while optimizing structural performance."
  },
  {
    title: "Quality-Controlled Fabrication",
    desc: "Procured materials are fabricated under strict tolerances in our dedicated plant."
  },
  {
    title: "Skilled Site Execution",
    desc: "Continuous supervision and precise alignment control during installation."
  },
  {
    title: "Robust Safety Systems",
    desc: "Disciplined execution following highest safety and technical compliance protocols."
  },
  {
    title: "Transparent Communication",
    desc: "Proactive coordination with main contractors, consultants, and developers."
  }
];

export const Route = createFileRoute("/projects_/$projectId")({
  loader: ({ params }) => {
    const project = allProjects.find(
      (p) => p.id === params.projectId || getProjectSlug(p.title) === params.projectId
    );
    if (!project) {
      throw notFound();
    }
    const resolvedId = project.id || getProjectSlug(project.title);
    const detail = majorProjectsDetails[resolvedId];
    return { project, resolvedId, detail };
  },
  head: ({ loaderData }) => {
    const project = loaderData?.project;
    const detail = loaderData?.detail;
    const title = project 
      ? `${project.title} Glazing & Façade Project Showcase` 
      : "Project Showcase | Qualpro Aluminium";
    const desc = detail 
      ? detail.subtitle 
      : `Technical details, scope of work and specifications for ${project?.title || 'our projects'}.`;
    
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  component: ProjectDetailComponent,
});

function ProjectDetailComponent() {
  const { project, resolvedId, detail } = Route.useLoaderData();

  // Find related projects in same category
  const relatedProjects = allProjects
    .filter((p) => p.title !== project.title && (p.category === project.category))
    .slice(0, 3);

  // If no related projects in the same category, grab from anywhere
  const fallbackRelated = relatedProjects.length > 0 
    ? relatedProjects 
    : allProjects.filter((p) => p.title !== project.title).slice(0, 3);

  // Subtitle/concept fallback
  const displaySubtitle = detail ? detail.subtitle : "Specialised Aluminium & Façade Solutions";
  
  // Description fallback
  const displayDesc = detail 
    ? detail.longDesc 
    : `Qualpro Aluminium successfully executed the specialized aluminium, structural glazing, and cladding systems for ${project.title}. Working alongside project teams and contractors, we delivered premium structural and architectural solutions tailored to the building's aesthetic and operational requirements. Our work focuses on accurate fabrication, durable material coordination, and systematic installation to achieve high-performance building envelopes.`;

  // Capabilities fallback (based on project scope)
  const displayCapabilities = detail 
    ? detail.capabilities 
    : [
        ...project.scope.map(s => `${s} system execution`),
        "Precision fabrication as per drawings",
        "Site alignment and finishing control",
        "Quality assurance & compliance with standards"
      ];

  return (
    <div className="bg-background min-h-screen pb-20">
      {/* Dynamic Hero banner */}
      <PageHero
        eyebrow={project.category}
        title={project.title}
        description={displaySubtitle}
        imageSrc={project.img}
      >
        {/* Dynamic Breadcrumbs */}
        <nav className="mt-8 flex items-center gap-2 text-xs font-semibold text-steel-foreground/60 select-none animate-rise">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link to="/projects" className="hover:text-primary transition-colors">Projects</Link>
          <span>/</span>
          <span className="text-primary-foreground font-bold">{project.title}</span>
        </nav>
      </PageHero>

      {/* Main Grid Section */}
      <section className="py-20">
        <div className="container-x">
          {/* Back button */}
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-primary mb-12 transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>

          <div className="grid gap-12 lg:grid-cols-12 items-start">
            {/* Left Column - Detailed narrative */}
            <div className="lg:col-span-7 space-y-12 animate-rise">
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <span className={`rounded-lg border px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider ${getCategoryStyle(project.category)}`}>
                    {project.category}
                  </span>
                  {project.year === "Ongoing Project" && (
                    <span className="rounded-lg border border-orange-500/25 bg-orange-500/10 text-orange-400 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider">
                      Active execution
                    </span>
                  )}
                </div>

                <h2 className="font-display text-2xl md:text-3xl font-extrabold text-foreground tracking-tight leading-tight border-b border-border pb-4">
                  Project Overview
                </h2>

                <div className="text-sm md:text-base text-muted-foreground leading-relaxed whitespace-pre-line space-y-4 font-medium">
                  {displayDesc}
                </div>
              </div>

              {/* Project Highlights */}
              {((detail?.highlights && detail.highlights.length > 0) || (project as any).highlights) && (
                <div className="space-y-6 pt-2">
                  <h3 className="font-display text-xl font-bold text-foreground flex items-center gap-2.5">
                    <Sparkles className="h-5.5 w-5.5 text-brand-orange" /> Project Highlights
                  </h3>
                  <div className="space-y-3">
                    {(detail?.highlights || (project as any).highlights)?.map((hl: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-sm">
                        <span className="h-2 w-2 rounded-full bg-brand-orange mt-1.5 shrink-0" />
                        <p className="text-sm font-semibold text-foreground leading-relaxed">{hl}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Detailed Scope Breakdown */}
              {detail?.scopeDetailed && detail.scopeDetailed.length > 0 && (
                <div className="space-y-6 pt-2">
                  <h3 className="font-display text-xl font-bold text-foreground flex items-center gap-2.5">
                    <Wrench className="h-5.5 w-5.5 text-primary" /> Scope of Work Breakdown
                  </h3>
                  <div className="grid gap-3 sm:grid-cols-1">
                    {detail.scopeDetailed.map((item, idx) => (
                      <div key={idx} className="rounded-xl border border-border bg-card p-5 space-y-1.5 shadow-sm">
                        <h4 className="font-display text-sm font-extrabold text-emerald-600 dark:text-emerald-400">
                          {item.title}
                        </h4>
                        <p className="text-xs text-muted-foreground leading-relaxed font-medium">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Capabilities checklist */}
              <div className="space-y-6 pt-2">
                <h3 className="font-display text-xl font-bold text-foreground flex items-center gap-2.5">
                  <ShieldCheck className="h-5.5 w-5.5 text-primary" /> Key Capabilities Demonstrated
                </h3>
                <div className="grid gap-3 sm:grid-cols-1">
                  {displayCapabilities.map((cap, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-sm hover:border-primary/10 transition-colors"
                    >
                      <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground font-semibold">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Qualpro approach panel */}
              <div className="space-y-6 pt-4">
                <h3 className="font-display text-xl font-bold text-foreground flex items-center gap-2.5">
                  <Award className="h-5.5 w-5.5 text-primary" /> Driven by Engineering, Defined by Precision
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {whyQualproPoints.map((pt, index) => (
                    <div key={index} className="rounded-xl border border-border bg-card p-5 space-y-2 shadow-sm">
                      <h4 className="font-display text-sm font-bold text-foreground flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {pt.title}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {pt.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Project Metadata and RFQ Action */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24 animate-rise [animation-delay:150ms]">
              
              {/* Technical Specifications sheet */}
              <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-industrial">
                <div className="bg-secondary/40 px-6 py-5 border-b border-border flex items-center gap-2.5">
                  <Building2 className="h-5 w-5 text-primary" />
                  <h3 className="font-display text-xs font-black uppercase tracking-widest text-foreground">
                    Project Profile
                  </h3>
                </div>
                
                <div className="divide-y divide-border/80">
                  <div className="grid grid-cols-12 px-6 py-4.5 text-xs">
                    <span className="col-span-5 font-bold text-muted-foreground uppercase tracking-wider">Client</span>
                    <span className="col-span-7 font-bold text-foreground text-right lg:text-left">{project.client}</span>
                  </div>
                  
                  <div className="grid grid-cols-12 px-6 py-4.5 text-xs">
                    <span className="col-span-5 font-bold text-muted-foreground uppercase tracking-wider">Location</span>
                    <span className="col-span-7 font-bold text-foreground text-right lg:text-left flex items-center gap-1 justify-end lg:justify-start">
                      <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
                      {project.location}
                    </span>
                  </div>

                  {((project as any).value || detail?.value) && (
                    <div className="grid grid-cols-12 px-6 py-4.5 text-xs">
                      <span className="col-span-5 font-bold text-muted-foreground uppercase tracking-wider">Project Value</span>
                      <span className="col-span-7 font-extrabold text-brand-orange text-right lg:text-left">
                        {(project as any).value || detail?.value}
                      </span>
                    </div>
                  )}

                  <div className="grid grid-cols-12 px-6 py-4.5 text-xs">
                    <span className="col-span-5 font-bold text-muted-foreground uppercase tracking-wider">Timeline / Year</span>
                    <span className="col-span-7 font-bold text-foreground text-right lg:text-left flex items-center gap-1 justify-end lg:justify-start">
                      <Calendar className="h-3.5 w-3.5 text-primary shrink-0" />
                      {project.year}
                    </span>
                  </div>

                  <div className="grid grid-cols-12 px-6 py-4.5 text-xs">
                    <span className="col-span-5 font-bold text-muted-foreground uppercase tracking-wider">Sector</span>
                    <span className="col-span-7 font-bold text-foreground text-right lg:text-left">{project.category}</span>
                  </div>

                  <div className="grid grid-cols-12 px-6 py-4.5 text-xs">
                    <span className="col-span-5 font-bold text-muted-foreground uppercase tracking-wider">Scope of Work</span>
                    <div className="col-span-7 flex flex-wrap gap-1.5 justify-end lg:justify-start">
                      {project.scope.map((sc, index) => (
                        <span 
                          key={index}
                          className="rounded bg-secondary/80 border border-border px-2 py-0.5 text-[10px] font-semibold text-muted-foreground"
                        >
                          {sc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultation / Quote Card */}
              <div className="rounded-2xl bg-gradient-to-br from-steel to-ink p-6 md:p-8 shadow-industrial border border-white/5 relative overflow-hidden text-white">
                <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
                <div className="relative z-10 space-y-5">
                  <div className="inline-flex rounded-lg bg-white/5 border border-white/10 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-primary">
                    Project Consultation
                  </div>
                  <h4 className="font-display text-lg font-bold tracking-tight">
                    Discuss Façade Solutions for Your Project
                  </h4>
                  <p className="text-xs text-steel-foreground/75 leading-relaxed">
                    Collaborate with Qualpro's design and fabrication teams. We provide precise shop drawings, structural wind load analysis, and custom-extruded system profiles.
                  </p>
                  <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
                    <Link
                      to="/contact"
                      search={{ subject: `Enquiry regarding ${project.title}` }}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-primary-foreground hover:opacity-95 shadow-md transition-all cursor-pointer text-center w-full"
                    >
                      Enquire about this Project
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Related Projects Section */}
          <div className="border-t border-border mt-24 pt-20 space-y-8 animate-rise [animation-delay:250ms]">
            <div className="flex items-end justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Portfolio Showcase</span>
                <h3 className="font-display text-xl md:text-2xl font-extrabold text-foreground mt-1">
                  Explore Similar Engineering Handovers
                </h3>
              </div>
              <Link
                to="/projects"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary hover:underline"
              >
                Full Portfolio <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {fallbackRelated.map((rel, idx) => (
                <article 
                  key={`${rel.title}-${idx}`}
                  className="group rounded-2xl border border-border bg-card overflow-hidden shadow-card hover:border-primary/20 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="overflow-hidden aspect-[4/3] relative">
                      <img 
                        src={rel.img} 
                        alt={rel.title} 
                        className="h-full w-full object-cover group-hover:scale-103 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/65 to-transparent" />
                      <div className={`absolute top-4 left-4 rounded-lg border backdrop-blur-md px-2.5 py-1 text-[9px] uppercase font-bold tracking-widest ${getCategoryStyle(rel.category)}`}>
                        {rel.category.split(" ")[0]}
                      </div>
                    </div>
                    
                    <div className="p-6 space-y-3">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-primary flex items-center gap-1">
                        <MapPin className="h-3 w-3 text-primary shrink-0" /> {rel.location}
                      </span>
                      <h4 className="font-display text-base font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                        <Link to="/projects/$projectId" params={{ projectId: rel.id || getProjectSlug(rel.title) }}>
                          {rel.title}
                        </Link>
                      </h4>
                      <p className="text-xs text-muted-foreground font-semibold">
                        Client: {rel.client}
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-6 pt-0">
                    <Link
                      to="/projects/$projectId"
                      params={{ projectId: rel.id || getProjectSlug(rel.title) }}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:text-primary/80 transition-colors"
                    >
                      View Project <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
