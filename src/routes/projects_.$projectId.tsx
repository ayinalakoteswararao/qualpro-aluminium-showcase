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

// Detailed copy from draft for the 5 major projects
const majorProjectsDetails: Record<string, {
  subtitle: string;
  longDesc: string;
  capabilities: string[];
}> = {
  "tirupati-airport": {
    subtitle: "Creating a Modern and Durable Airport Façade",
    longDesc: "Qualpro Aluminium contributed to the development of Tirupati Airport by executing specialised aluminium and façade-related works designed to meet the functional and architectural requirements of a modern airport terminal.\n\nThe project required careful coordination between engineering, fabrication and site teams to ensure accurate installation and a consistent external appearance. Materials and systems were selected to offer durability, weather resistance and ease of maintenance while complementing the architectural character of the terminal.\n\nOur involvement reflected our ability to work within an active infrastructure environment while maintaining high standards of quality, safety and execution.",
    capabilities: [
      "Aluminium façade and glazing works",
      "Precision fabrication and installation",
      "Coordination with project consultants and contractors",
      "Quality and safety management",
      "Execution in a high-visibility public infrastructure project"
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
  },
  "vijayawada-airport": {
    subtitle: "Delivering Façade Solutions for Expanding Aviation Infrastructure",
    longDesc: "Qualpro Aluminium is currently associated with the Vijayawada Airport project, undertaking specialised aluminium, glazing and façade-related works.\n\nThe project involves detailed engineering coordination, material planning, fabrication and on-site installation in accordance with approved drawings and project specifications. Our teams work closely with the main contractor, consultants and other agencies to maintain quality, safety and progress across different work fronts.\n\nAs an ongoing project, Vijayawada Airport demonstrates Qualpro Aluminium’s capability to manage complex infrastructure assignments through structured planning, responsive coordination and dependable execution.",
    capabilities: [
      "Aluminium and façade system execution",
      "Supply and installation of project-specific materials",
      "Coordination with multiple stakeholders",
      "Quality inspections and documentation",
      "Progress planning for an active airport project",
      "Compliance with safety and technical requirements"
    ]
  },
  "rajahmundry-airport": {
    subtitle: "Reliable Execution for a Major Regional Airport",
    longDesc: "Qualpro Aluminium carried out aluminium and façade-related works for Rajahmundry Airport, contributing to the architectural and functional development of the airport terminal.\n\nAirport projects require a high level of coordination because façade, glazing and aluminium systems must integrate accurately with the building structure and other services. Our team managed fabrication, material movement and site installation through systematic planning and continuous coordination with the project team.\n\nThe completed works reflect Qualpro Aluminium’s commitment to workmanship, durability and dependable project delivery.",
    capabilities: [
      "Airport terminal façade works",
      "Aluminium fabrication and installation",
      "Structural and architectural coordination",
      "On-site resource and material management",
      "Quality-focused execution"
    ]
  },
  "kadapa-airport": {
    subtitle: "Aluminium and Façade Works for Public Infrastructure",
    longDesc: "Qualpro Aluminium executed specialised aluminium and façade-related works for Kadapa Airport, supporting the development of a durable and visually coordinated terminal building.\n\nThe project involved the supply, fabrication and installation of aluminium systems in line with project drawings, approved specifications and site conditions. Our team worked to maintain accurate alignment, proper finishing and reliable performance across the installed systems.\n\nKadapa Airport highlights our experience in delivering infrastructure projects that require technical precision, effective site management and adherence to demanding quality standards.",
    capabilities: [
      "Aluminium architectural systems",
      "Façade and glazing works",
      "Fabrication as per approved drawings",
      "Installation and finishing control",
      "Coordination with contractors and consultants",
      "Quality and safety compliance"
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
