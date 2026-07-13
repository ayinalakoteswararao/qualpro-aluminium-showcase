import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { servicesList } from "@/lib/data";
import { PageHero } from "@/components/site/PageHero";
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  TableProperties, 
  FileText, 
  MessageSquare,
  Sparkles
} from "lucide-react";

export const Route = createFileRoute("/services_/$serviceId")({
  loader: ({ params }) => {
    const service = servicesList.find((s) => s.id === params.serviceId);
    if (!service) {
      throw notFound();
    }
    return { service };
  },
  head: ({ loaderData }) => {
    const service = loaderData?.service;
    return {
      meta: [
        { title: service ? service.seoTitle : "Service Details | Qualpro Aluminium" },
        {
          name: "description",
          content: service ? service.seoDesc : "Details about our custom-engineered aluminium facade and fenestration solutions.",
        },
        { property: "og:title", content: service ? service.seoTitle : "Qualpro Aluminium Service" },
        {
          property: "og:description",
          content: service ? service.seoDesc : "High-performance architectural aluminium profiles and installations.",
        },
      ],
    };
  },
  component: ServiceDetailComponent,
});

function ServiceDetailComponent() {
  const { service } = Route.useLoaderData();
  
  // Find related services (excluding the current one, grab up to 3)
  const relatedServices = servicesList
    .filter((s) => s.id !== service.id)
    .slice(0, 3);

  const IconComp = service.icon;

  return (
    <div className="bg-background min-h-screen pb-16">
      {/* Dynamic Hero Section */}
      <PageHero
        eyebrow={service.num}
        title={service.title}
        description={service.desc}
        imageSrc={service.img}
      >
        {/* Dynamic Breadcrumbs */}
        <nav className="mt-8 flex items-center gap-2 text-xs font-semibold text-steel-foreground/60 select-none animate-rise">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
          <span>/</span>
          <span className="text-primary-foreground font-bold">{service.title}</span>
        </nav>
      </PageHero>

      {/* Main content grid */}
      <section className="py-20">
        <div className="container-x">
          
          {/* Back button */}
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-primary mb-12 transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform" />
            Back to All Services
          </Link>

          <div className="grid gap-12 lg:grid-cols-12 items-start">
            
            {/* Left Column: Extensive Information */}
            <div className="lg:col-span-7 space-y-12 animate-rise">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                    <IconComp className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-[0.25em] text-primary">{service.category}</span>
                </div>
                
                <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight border-b border-border pb-4">
                  Engineering Overview
                </h2>
                
                <div className="text-base text-muted-foreground leading-relaxed whitespace-pre-line space-y-4">
                  {service.longDesc}
                </div>
              </div>

              {/* Key Features / Performance Criteria */}
              <div className="space-y-6">
                <h3 className="font-display text-2xl font-bold text-foreground flex items-center gap-2.5">
                  <Sparkles className="h-5 w-5 text-primary" /> Key Capabilities & Benefits
                </h3>
                <div className="grid gap-4 sm:grid-cols-1">
                  {service.features.map((feature, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start gap-3.5 rounded-2xl border border-border bg-card p-5 shadow-card hover:border-primary/20 transition-all duration-300"
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-bold text-foreground">{feature.split(" for ")[0] || feature.split(" complying ")[0] || feature.split(" with ")[0]}</p>
                        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{feature}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Specification Table & Dynamic CTA */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24 animate-rise [animation-delay:150ms]">
              
              {/* Spec Table */}
              <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-industrial">
                <div className="bg-secondary/40 px-6 py-5 border-b border-border flex items-center gap-2.5">
                  <TableProperties className="h-5 w-5 text-primary" />
                  <h3 className="font-display text-sm font-bold uppercase tracking-wider text-foreground">
                    Technical Specifications
                  </h3>
                </div>
                <div className="divide-y divide-border/80">
                  {Object.entries(service.specs).map(([key, value]) => (
                    <div key={key} className="grid grid-cols-12 px-6 py-4 text-xs">
                      <span className="col-span-5 font-bold text-muted-foreground uppercase tracking-wider">{key}</span>
                      <span className="col-span-7 font-medium text-foreground text-right lg:text-left">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Consultation / Quote Card */}
              <div className="rounded-2xl bg-gradient-to-br from-steel to-ink p-8 shadow-industrial border border-white/5 relative overflow-hidden text-white">
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/20 blur-2xl pointer-events-none" />
                <div className="relative z-10 space-y-6">
                  <div className="inline-flex rounded-xl bg-white/5 border border-white/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-widest text-primary">
                    Project Request
                  </div>
                  <h4 className="font-display text-2xl font-bold tracking-tight">
                    Discuss Your Facade Requirements
                  </h4>
                  <p className="text-xs text-steel-foreground/75 leading-relaxed">
                    Request static wind load estimations, custom profile advice, or layout drawings for {service.title}.
                  </p>
                  
                  <div className="flex flex-col gap-3 pt-2">
                    <Link
                      to="/contact"
                      search={{ subject: `Inquiry regarding ${service.title}` }}
                      className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-primary py-3.5 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-industrial hover:scale-[1.02] hover:opacity-95 active:scale-[0.98] transition-all cursor-pointer"
                    >
                      <MessageSquare className="h-4 w-4" /> Request Consultation
                    </Link>
                    
                    <a
                      href="tel:+919848125106"
                      className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-white/5 border border-white/10 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10 transition-colors"
                    >
                      Call Technical Desk
                    </a>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2 text-[10px] text-steel-foreground/40 pt-2">
                    <ShieldCheck className="h-4.5 w-4.5 text-primary shrink-0" />
                    <span>Direct engineering consultation with expert partners.</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Related Services Slider/Grid */}
          <div className="border-t border-border mt-24 pt-20 space-y-10 animate-rise [animation-delay:250ms]">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Explore Options</span>
                <h3 className="font-display text-2xl md:text-3xl font-extrabold text-foreground mt-1">
                  Other Envelope Services
                </h3>
              </div>
              <Link
                to="/services"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary hover:underline"
              >
                View All Services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((rel) => {
                const RelIcon = rel.icon;
                return (
                  <article 
                    key={rel.id}
                    className="group rounded-2xl border border-border bg-card overflow-hidden shadow-card hover:border-primary/20 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="overflow-hidden aspect-[4/3] relative">
                        <img 
                          src={rel.img} 
                          alt={rel.title} 
                          className="h-full w-full object-cover group-hover:scale-103 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-ink/30" />
                      </div>
                      
                      <div className="p-6 space-y-3">
                        <div className="flex items-center gap-2">
                          <RelIcon className="h-4 w-4 text-primary" />
                          <span className="text-[10px] font-bold uppercase tracking-widest text-primary">{rel.category}</span>
                        </div>
                        <h4 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                          <Link to="/services/$serviceId" params={{ serviceId: rel.id }}>
                            {rel.title}
                          </Link>
                        </h4>
                        <p className="text-xs leading-relaxed text-muted-foreground line-clamp-3">
                          {rel.desc}
                        </p>
                      </div>
                    </div>
                    
                    <div className="p-6 pt-0">
                      <Link
                        to="/services/$serviceId"
                        params={{ serviceId: rel.id }}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:text-primary/80 transition-colors"
                      >
                        Explore Service <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
