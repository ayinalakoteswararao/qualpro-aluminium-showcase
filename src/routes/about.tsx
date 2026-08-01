import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { 
  Target, 
  Eye, 
  Sparkles, 
  Users, 
  Gauge, 
  HeartHandshake,
  GraduationCap,
  Briefcase,
  Award,
  ShieldCheck,
  Compass,
  ChevronRight,
  Activity,
  ArrowRight
} from "lucide-react";
import commercialImg from "@/assets/project-commercial.jpg";
import glazingImg from "@/assets/product-glazing.jpg";
import heroImg from "@/assets/hero-factory.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Qual Pro Aluminium - Facade Contractors in Hyderabad" },
      {
        name: "description",
        content:
          "Learn about Qual Pro Aluminium - leading Facade Contractors in Hyderabad delivering unitized glazing, stick glazing, architectural envelopes, and landmark airport projects.",
      },
      { property: "og:title", content: "A Legacy of Façade & Fenestration Excellence" },
      {
        property: "og:description",
        content: "Trusted Facade Contractors in Hyderabad delivering Unitized and Stick glazing systems.",
      },
    ],
  }),
  component: About,
});

const values = [
  { icon: Sparkles, title: "Driven by Innovation", desc: "Always pushing the boundaries of fenestration and glazing design." },
  { icon: Users, title: "Visionary Leadership", desc: "Guided by our Director Partners' combined engineering and strategic consulting expertise." },
  { icon: Gauge, title: "Defined by Precision", desc: "Carefully controlled fabrication and assembly for extreme durability." },
  { icon: HeartHandshake, title: "Client Partnerships", desc: "End-to-end solutions focused on delivery and customer objectives." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A Legacy of Façade & Fenestration Excellence"
        description="Qual Pro Aluminium was established with a clear purpose—to deliver world-class aluminium façade systems that combine architectural beauty with engineering precision."
        imageSrc={heroImg}
      />

      {/* OVERVIEW SECTION */}
      <section className="py-20 overflow-hidden bg-background">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            
            {/* Overview Text */}
            <div className="lg:col-span-7 space-y-6 animate-rise">
              <SectionHeader
                eyebrow="Company Overview"
                title="Trusted Facade Contractors in Hyderabad"
              />
              <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
                <p>
                  Qual Pro Aluminium was established with a clear purpose—to deliver world-class aluminium façade systems that combine architectural beauty with engineering precision. Over the years, we have successfully transformed this vision into reality by completing projects that reflect innovation, quality craftsmanship, and technical excellence.
                </p>
                <p>
                  As experienced Facade Contractors in Hyderabad, we understand that every building deserves an exterior that is not only visually impressive but also structurally sound and energy efficient. Our expertise extends across the complete lifecycle of façade development, from conceptual design and engineering to fabrication, installation, and final project delivery.
                </p>
                <p>
                  Founded with a vision to redefine modern building envelopes, Qual Pro Aluminium continues to deliver exceptional results through engineering excellence and customer-focused service. Our journey has established us as one of the dependable names in façade and fenestration solutions across India.
                </p>
              </div>

              {/* Quick stats panel */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="rounded-xl border border-border p-4 bg-secondary/30 hover:border-primary/30 transition-colors">
                  <div className="flex items-center gap-2 text-primary">
                    <ShieldCheck className="h-5 w-5" />
                    <span className="font-display font-semibold text-foreground">Premium Quality</span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">Quality audits at every stage of fabrication.</p>
                </div>
                <div className="rounded-xl border border-border p-4 bg-secondary/30 hover:border-primary/30 transition-colors">
                  <div className="flex items-center gap-2 text-primary">
                    <Compass className="h-5 w-5" />
                    <span className="font-display font-semibold text-foreground">Pan-India Reach</span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">Delivering building envelopes nationwide.</p>
                </div>
              </div>
            </div>

            {/* Overlapping Images block */}
            <div className="lg:col-span-5 relative flex justify-center items-center mt-10 lg:mt-0">
              <div className="relative w-full max-w-[400px] h-[450px] animate-rise [animation-delay:200ms]">
                {/* Main image container */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl border border-border shadow-industrial transform hover:scale-[1.02] transition-transform duration-500">
                  <img
                    src={commercialImg}
                    alt="Modern skyscraper structural glazing facade"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                </div>
                
                {/* Secondary overlapping card with image */}
                <div className="absolute -bottom-6 -left-6 md:-left-12 w-48 h-48 overflow-hidden rounded-xl border-2 border-background shadow-industrial hidden sm:block transform hover:-translate-y-2 transition-transform duration-500">
                  <img
                    src={glazingImg}
                    alt="Aluminium profile fabrication"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Hovering Badge */}
                <div className="absolute -top-4 -right-4 bg-heat-gradient text-primary-foreground p-5 rounded-2xl shadow-industrial text-center transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <span className="block font-display text-3xl font-bold">10+</span>
                  <span className="text-[10px] uppercase font-semibold tracking-wider">Years of Success</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* LEADERSHIP SECTION */}
      <section className="py-20 bg-secondary/30 border-y border-border">
        <div className="container-x space-y-12">
          
          <div className="text-center max-w-3xl mx-auto animate-rise">
            <SectionHeader
              eyebrow="Visionary Leadership"
              title="Our Strength Relies in Our Leadership"
              description="Together, their leadership drives a culture of collaborative growth, engineering precision, and customer-focused delivery, setting new standards in the façade industry."
            />
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            
            {/* Mr. Ramesh Kommana Card */}
            <div className="relative rounded-2xl bg-gradient-to-b from-steel/90 to-ink p-8 text-steel-foreground shadow-industrial border border-white/10 overflow-hidden flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300 animate-rise">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/25 blur-2xl" />
              
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-orange-500 blur-sm" />
                    <div className="relative grid h-16 w-16 place-items-center rounded-full bg-ink border border-primary text-primary font-display text-xl font-bold">
                      RK
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-steel-foreground">Mr. Ramesh Kommana</h3>
                    <p className="text-xs uppercase tracking-widest text-primary font-semibold">Director Partner</p>
                  </div>
                </div>

                <div className="space-y-4 text-sm leading-relaxed text-steel-foreground/80">
                  <p>
                    Mr. Ramesh Kommana brings over <strong className="text-white">10 years of hands-on expertise</strong> in façade systems and engineering. 
                    An MS graduate from <strong className="text-white">Texas A&M University</strong>, he previously worked with global MNCs, bringing international standards and technical depth to the company.
                  </p>
                  <p>
                    His deep knowledge of façade technologies and project execution is the backbone of our operational excellence.
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t border-white/10 pt-6 space-y-3">
                <div className="flex items-center gap-3 text-xs">
                  <GraduationCap className="h-4 w-4 text-primary shrink-0" />
                  <span>MS, Texas A&M University</span>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <Briefcase className="h-4 w-4 text-primary shrink-0" />
                  <span>10+ Years Fa&ccedil;ade & Engineering Expertise</span>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <Award className="h-4 w-4 text-primary shrink-0" />
                  <span>Global MNC Standard Technical Depth</span>
                </div>
              </div>
            </div>

            {/* Ms. Veda Deepthi A Card */}
            <div className="relative rounded-2xl bg-gradient-to-b from-steel/90 to-ink p-8 text-steel-foreground shadow-industrial border border-white/10 overflow-hidden flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300 animate-rise [animation-delay:150ms]">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-orange-500/20 blur-2xl" />
              
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-orange-500 blur-sm" />
                    <div className="relative grid h-16 w-16 place-items-center rounded-full bg-ink border border-primary text-primary font-display text-xl font-bold">
                      VD
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-steel-foreground">Ms. Veda Deepthi A</h3>
                    <p className="text-xs uppercase tracking-widest text-primary font-semibold">Director Partner</p>
                  </div>
                </div>

                <div className="space-y-4 text-sm leading-relaxed text-steel-foreground/80">
                  <p>
                    Ms. Veda Deepthi A complements this with <strong className="text-white">two decades (20+ years) of experience</strong> in strategy and risk consulting, having worked with the Big Four consulting firms. 
                    An MBA graduate from <strong className="text-white">IIM Calcutta (IIMC)</strong>, she plays a key role in driving business strategy, governance, and innovation.
                  </p>
                  <p>
                    Her strategic foresight and global consulting exposure have elevated Qual Pro Aluminium into a dynamic, client-centric brand.
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t border-white/10 pt-6 space-y-3">
                <div className="flex items-center gap-3 text-xs">
                  <GraduationCap className="h-4 w-4 text-primary shrink-0" />
                  <span>MBA, IIM Calcutta (IIMC)</span>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <Briefcase className="h-4 w-4 text-primary shrink-0" />
                  <span>20+ Years Strategy & Risk Consulting</span>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <Award className="h-4 w-4 text-primary shrink-0" />
                  <span>Big Four Corporate Advisory Alumna</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* GLAZING TECHNICAL COMPETENCE (UNITIZED vs STICK) */}
      <section className="py-20 bg-background">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-rise">
            <SectionHeader
              eyebrow="Technical Competence"
              title="Advanced Glazing Systems Capabilities"
              description="Technical excellence is one of the strongest pillars of Qual Pro Aluminium. Unlike many companies in the industry, we possess the engineering expertise to design and execute both Unitized Glazing Systems and Stick Glazing Systems, allowing us to provide customized solutions based on each project's architectural and structural requirements."
            />
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-16 max-w-5xl mx-auto animate-rise [animation-delay:100ms]">
            
            {/* Card 1: Collaborative Engineering */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card hover:-translate-y-1 hover:shadow-industrial hover:border-primary/20 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-orange/10 border border-brand-orange/20 text-brand-orange">
                  <Users className="h-5 w-5" />
                </div>
                <h4 className="mt-5 font-display text-base font-bold text-foreground">
                  Collaborative Engineering
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  As experienced Facade Contractors in Hyderabad, our engineering team works closely with architects and consultants to develop façade systems that balance aesthetics, performance, and long-term durability.
                </p>
              </div>
            </div>

            {/* Card 2: Precision Fabrication */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card hover:-translate-y-1 hover:shadow-industrial hover:border-primary/20 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 border border-primary/20 text-primary">
                  <Gauge className="h-5 w-5" />
                </div>
                <h4 className="mt-5 font-display text-base font-bold text-foreground">
                  Precision Fabrication
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  As trusted Commercial aluminium contractors, we use advanced fabrication equipment and modern manufacturing techniques to ensure precision, consistency, and exceptional quality across every project.
                </p>
              </div>
            </div>

            {/* Card 3: Advanced Glazing Performance */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card hover:-translate-y-1 hover:shadow-industrial hover:border-primary/20 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-500">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h4 className="mt-5 font-display text-base font-bold text-foreground">
                  High-Performance Glazing
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  We are also recognized for delivering advanced Architectural glazing and facades that enhance natural lighting, improve thermal efficiency, reduce maintenance, and provide weather protection.
                </p>
              </div>
            </div>

          </div>

          <div className="grid gap-8 md:grid-cols-2">
            
            {/* Unitized Glazing System Card */}
            <div className="group rounded-2xl border border-border bg-card p-8 shadow-card hover:-translate-y-1 hover:shadow-industrial hover:border-primary/20 transition-all duration-300 flex flex-col justify-between animate-rise">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary bg-primary/10 px-3 py-1 rounded-full">Prefabs & Speed</span>
                  <div className="grid h-10 w-10 place-items-center rounded-md bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Activity className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-foreground">Unitized Glazing Systems</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Pre-fabricated panels manufactured in a clean, strictly controlled{" "}
                  <Link 
                    to="/infrastructure" 
                    search={{ machine: "lgf-cutting" }}
                    className="text-foreground font-semibold underline hover:text-primary transition-colors"
                  >
                    factory environment at Cherlapally
                  </Link>{" "}
                  and shipped directly to sites for fast crane-assisted installation.
                </p>
                
                <ul className="mt-6 space-y-2 border-t border-border pt-6">
                  <li className="flex items-center gap-2.5 text-xs text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Highly consistent factory-sealed gaskets
                  </li>
                  <li className="flex items-center gap-2.5 text-xs text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Ideal for rapid high-rise skyscraper execution
                  </li>
                  <li className="flex items-center gap-2.5 text-xs text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Minimizes on-site scaffolding and labor
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 flex items-center gap-2 text-xs font-semibold text-primary group-hover:text-primary/80">
                <span>View Glazing Specifications</span>
                <ChevronRight className="h-4 w-4" />
              </div>
            </div>

            {/* Stick Glazing System Card */}
            <div className="group rounded-2xl border border-border bg-card p-8 shadow-card hover:-translate-y-1 hover:shadow-industrial hover:border-primary/20 transition-all duration-300 flex flex-col justify-between animate-rise [animation-delay:150ms]">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary bg-primary/10 px-3 py-1 rounded-full">Versatility & Custom Fit</span>
                  <div className="grid h-10 w-10 place-items-center rounded-md bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Sparkles className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-foreground">Stick Glazing Systems</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Assembled piece-by-piece directly on the building structure. Provides structural layout flexibility, shorter fabrication lead times, and allows for local design adjustments.
                </p>
                
                <ul className="mt-6 space-y-2 border-t border-border pt-6">
                  <li className="flex items-center gap-2.5 text-xs text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Accommodates complex building geometry and shapes
                  </li>
                  <li className="flex items-center gap-2.5 text-xs text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Requires lower initial factory tooling costs
                  </li>
                  <li className="flex items-center gap-2.5 text-xs text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Highly adaptable to site-measured tolerances
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 flex items-center gap-2 text-xs font-semibold text-primary group-hover:text-primary/80">
                <span>View Glazing Specifications</span>
                <ChevronRight className="h-4 w-4" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CORE STRATEGIC ALIGNMENT (MISSION & VISION) */}
      <section className="py-20 bg-secondary/30 border-t border-border">
        <div className="container-x">
          <div className="grid gap-8 md:grid-cols-2 animate-rise">
            
            {/* Mission */}
            <div className="rounded-2xl border border-border bg-card p-8 shadow-card relative overflow-hidden group hover:border-primary/20 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="absolute top-0 right-0 h-24 w-24 rounded-bl-full bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-heat-gradient text-primary-foreground shadow-card">
                    <Target className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="mt-6 text-sm md:text-base leading-relaxed text-muted-foreground">
                  Our mission is to provide innovative, reliable, and sustainable façade solutions that exceed customer expectations through quality engineering, advanced technology, and exceptional workmanship.
                </p>
                <ul className="mt-6 space-y-2.5 border-t border-border pt-6 text-xs text-muted-foreground">
                  {[
                    "Delivering premium aluminium façade systems.",
                    "Providing customized engineering solutions.",
                    "Maintaining the highest standards of safety and quality.",
                    "Completing every project on schedule.",
                    "Building lasting relationships through trust and transparency.",
                    "Continuously improving our processes through innovation."
                  ].map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-6 text-xs font-semibold text-foreground border-t border-border/50 pt-4">
                Every project reflects our dedication to delivering value, performance, and customer satisfaction.
              </p>
            </div>

            {/* Vision */}
            <div className="rounded-2xl border border-border bg-card p-8 shadow-card relative overflow-hidden group hover:border-primary/20 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="absolute top-0 right-0 h-24 w-24 rounded-bl-full bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-steel-gradient text-steel-foreground shadow-card">
                    <Eye className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="mt-6 text-sm md:text-base leading-relaxed text-muted-foreground">
                  Our vision is to become one of India's most respected providers of façade, glazing, and aluminium building envelope solutions by delivering engineering excellence, superior craftsmanship, and innovative architectural solutions.
                </p>
                <ul className="mt-6 space-y-2.5 border-t border-border pt-6 text-xs text-muted-foreground">
                  {[
                    "We aspire to lead the industry by embracing new technologies, sustainable practices, and advanced engineering methods that contribute to the future of modern construction.",
                    "As trusted Facade and Fenestration Specialists, we strive to create building exteriors that are elegant, energy efficient, durable, and environmentally responsible.",
                    "Engineering high-performance envelopes that withstand extreme weather, seismic loads, and high wind pressures.",
                    "Partnering with international system designers to introduce globally certified, thermal-break facade solutions to the Indian market."
                  ].map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-orange mt-1.5 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* LANDMARK PROJECTS SECTION */}
      <section className="py-20 bg-card border-t border-border relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        
        <div className="container-x relative z-10">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            
            {/* Text block */}
            <div className="lg:col-span-8 space-y-6">
              <SectionHeader
                eyebrow="Proven Experience"
                title="Building India's Landmark Projects"
              />
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Our experience extends across some of India's most prestigious infrastructure developments. Over the years, Qual Pro Aluminium has successfully delivered façade solutions for airports, government institutions, hospitals, commercial buildings, educational campuses, IT parks, shopping malls, and corporate offices.
                </p>
                <p className="font-semibold text-foreground">
                  Our portfolio includes projects at:
                </p>
                <p className="text-sm border-l-2 border-primary pl-4 py-1">
                  Cochin International Airport, Hyderabad International Airport, Agartala Airport, Vijayawada Airport, Tirupati Airport, Varanasi Airport, Bhubaneswar Airport, Vizag Airport, along with renowned institutions such as AIIMS Bilaspur, IRDA Hyderabad, IIM Raipur, NIT Warangal, and numerous commercial developments across the country.
                </p>
                <p>
                  These successful projects reflect our ability to manage large-scale developments while maintaining exceptional quality, engineering precision, and timely execution.
                </p>
              </div>
            </div>

            {/* Quick references card */}
            <div className="lg:col-span-4 bg-secondary/35 border border-border rounded-2xl p-6 space-y-4">
              <h4 className="font-display font-bold text-foreground">Featured Sectors</h4>
              <div className="flex flex-wrap gap-2">
                {["Airports", "Hospitals", "IIT/IIM Campuses", "IT Parks", "Shopping Malls", "Corporate Hubs"].map((sec) => (
                  <span key={sec} className="bg-card border border-border text-xs px-3 py-1.5 rounded-lg text-muted-foreground font-medium">
                    {sec}
                  </span>
                ))}
              </div>
              <div className="pt-4 border-t border-border">
                <Link to="/projects" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary hover:text-primary-foreground">
                  Explore Case Studies <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* COMMITMENTS / VALUES */}
      <section className="py-20 bg-background border-t border-border">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-rise">
            <SectionHeader
              eyebrow="Our Commitments"
              title="Four values driving every project delivery."
            />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="rounded-xl border border-border bg-card p-6 shadow-card hover:-translate-y-1 hover:shadow-industrial hover:border-primary/20 transition-all duration-300 animate-rise"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="grid h-11 w-11 place-items-center rounded-md bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
