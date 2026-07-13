import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { useState } from "react";
import { 
  ArrowRight, 
  CheckCircle2,
  Cpu,
  ShieldAlert,
  Wrench
} from "lucide-react";
import curtainImg from "@/assets/product-curtain.jpg";
import { servicesList } from "@/lib/data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Qual Pro Aluminium" },
      {
        name: "description",
        content:
          "Explore the range of façade and fenestration engineering services offered by Qual Pro Aluminium including Unitized Glazing, Spider Glazing, ACP Cladding, and Skylights.",
      },
      { property: "og:title", content: "Qual Pro Aluminium Services" },
      {
        property: "og:description",
        content: "Precision-engineered facade, cladding, glazing, skylight, and door/window systems.",
      },
    ],
  }),
  component: Services,
});

type Category = "All" | "Glazing & Façades" | "Cladding & Openings";

function Services() {
  const [activeTab, setActiveTab] = useState<Category>("All");
  
  const filteredServices = activeTab === "All" 
    ? servicesList 
    : servicesList.filter(s => s.category === activeTab);

  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Comprehensive Façade & Glazing Services"
        description="From design and plant fabrication to precise site installation, we deliver end-to-end envelope systems conforming to international engineering standards."
        imageSrc={curtainImg}
      >
        {/* Floating Quick Highlights under Hero */}
        <div className="mt-12 grid gap-6 md:grid-cols-3 max-w-5xl animate-rise [animation-delay:150ms]">
          <Link
            to="/infrastructure"
            search={{ machine: "copy-router" }}
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md hover:bg-white/10 hover:border-primary/30 hover:scale-[1.02] hover:shadow-industrial transition-all duration-300 cursor-pointer group shadow-card"
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shrink-0">
              <Cpu className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white group-hover:text-primary transition-colors flex items-center gap-1">
                CNC Pre-Fabrication <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0" />
              </h4>
              <p className="text-xs text-steel-foreground/60 mt-1 leading-relaxed">Millimeter-precise plant fabrication.</p>
            </div>
          </Link>
          
          <Link
            to="/about"
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md hover:bg-white/10 hover:border-primary/30 hover:scale-[1.02] hover:shadow-industrial transition-all duration-300 cursor-pointer group shadow-card"
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shrink-0">
              <ShieldAlert className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white group-hover:text-primary transition-colors flex items-center gap-1">
                Seismic & Wind Audited <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0" />
              </h4>
              <p className="text-xs text-steel-foreground/60 mt-1 leading-relaxed">Tested against extreme high-rise load forces.</p>
            </div>
          </Link>

          <Link
            to="/about"
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md hover:bg-white/10 hover:border-primary/30 hover:scale-[1.02] hover:shadow-industrial transition-all duration-300 cursor-pointer group shadow-card"
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shrink-0">
              <Wrench className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white group-hover:text-primary transition-colors flex items-center gap-1">
                Direct Supervision <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0" />
              </h4>
              <p className="text-xs text-steel-foreground/60 mt-1 leading-relaxed">Facade reviews by Director Partner Ramesh Kommana.</p>
            </div>
          </Link>
        </div>
      </PageHero>

      {/* FILTER TABS SECTION */}
      <section className="py-20 bg-background">
        <div className="container-x">
          
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 border-b border-border pb-6 animate-rise">
            <SectionHeader
              eyebrow="Our Solutions"
              title="Tailored for Architectural Engineering Excellence"
            />
            
            {/* Elegant Tabs */}
            <div className="flex gap-2 bg-secondary/50 p-1.5 rounded-xl border border-border">
              {(["All", "Glazing & Façades", "Cladding & Openings"] as Category[]).map((tab) => (
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

          {/* ALTERNATING SERVICES SECTIONS */}
          <div className="space-y-24 mt-16">
            {filteredServices.map((service, index) => {
              const IconComp = service.icon;
              return (
                <div 
                  key={service.title}
                  className="grid md:grid-cols-12 gap-8 md:gap-16 items-center border-b border-border pb-20 last:border-0 last:pb-0 animate-rise"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Image Column */}
                  <div className={`md:col-span-5 relative group overflow-hidden rounded-2xl border border-border shadow-industrial ${
                    index % 2 === 1 ? "md:order-2" : ""
                  }`}>
                    <div className="overflow-hidden aspect-[4/3]">
                      <img
                        src={service.img}
                        alt={service.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
                    
                    {/* Floating index */}
                    <span className="absolute top-4 left-4 text-xs font-bold uppercase tracking-[0.2em] bg-gradient-to-tr from-steel/90 to-ink text-primary border border-white/10 px-3 py-1 rounded-full shadow-card">
                      {service.num}
                    </span>
                  </div>

                  {/* Content Column */}
                  <div className={`md:col-span-7 space-y-6 ${
                    index % 2 === 1 ? "md:order-1" : ""
                  }`}>
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                        <IconComp className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">{service.category}</span>
                    </div>

                    <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground hover:text-primary transition-colors">
                      <Link to="/services/$serviceId" params={{ serviceId: service.id }}>
                        {service.title}
                      </Link>
                    </h3>
                    
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {service.desc}
                    </p>

                    <div className="grid gap-3 sm:grid-cols-2 pt-2">
                      {service.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center gap-2.5 text-sm text-foreground">
                          <CheckCircle2 className="h-4.5 w-4.5 text-primary shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 flex flex-wrap gap-3">
                      <Link
                        to="/services/$serviceId"
                        params={{ serviceId: service.id }}
                        className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
                      >
                        Explore Details <ArrowRight className="h-4 w-4" />
                      </Link>
                      <Link
                        to="/contact"
                        search={{ subject: `Enquiry about ${service.title}` }}
                        className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
                      >
                        Quick Inquiry
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-steel to-ink p-10 md:p-16 shadow-industrial border border-white/10">
            {/* Ambient glows */}
            <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
            <div className="absolute -left-24 -bottom-24 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
            
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
              <div className="max-w-2xl space-y-6">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Work with us</span>
                <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                  Need a specialized glazing partner?
                </h2>
                <p className="text-base md:text-lg text-steel-foreground/75 leading-relaxed">
                  Get in touch with our engineering team for drafting assistance, shop drawings, wind-load assessments, and competitive tenders.
                </p>
                
                {/* Visual badges/features inside CTA */}
                <div className="pt-4 flex flex-wrap gap-4 text-xs text-steel-foreground/60">
                  <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>In-House Engineering</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>Wind-Load Assessments</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    <span>Shop Drawings</span>
                  </div>
                </div>
              </div>

              <div className="shrink-0">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-5 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-industrial hover:scale-[1.03] hover:opacity-95 active:scale-[0.98] transition-all duration-300 group cursor-pointer"
                >
                  Inquire Now
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
