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
  Activity
} from "lucide-react";
import commercialImg from "@/assets/project-commercial.jpg";
import glazingImg from "@/assets/product-glazing.jpg";
import heroImg from "@/assets/hero-factory.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Qual Pro Aluminium — Façade and Fenestration Solutions" },
      {
        name: "description",
        content:
          "Learn about Qual Pro Aluminium — our leadership under Mr. Ramesh Kommana and Ms. Veda Deepthi A, our mission, vision, and glazing options.",
      },
      { property: "og:title", content: "About Qual Pro Aluminium" },
      {
        property: "og:description",
        content: "Led by Mr. Ramesh Kommana and Ms. Veda Deepthi A, offering premium façade solutions.",
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
        title="Driven by Innovation. Defined by Precision."
        description="Qual Pro Aluminium is a market leader in fa&ccedil;ade and fenestration solutions, known for our relentless pursuit of innovation and service excellence."
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
                title="A Legacy of Façade & Fenestration Excellence"
              />
              <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
                <p>
                  Founded over a decade ago, <strong className="text-foreground">Qual Pro Aluminium</strong> has grown into a trusted name in façade 
                  and fenestration solutions across India. What began as a vision for quality and innovation 
                  has become a benchmark for excellence in design, engineering, and project execution.
                </p>
                <p>
                  Qual Pro Aluminium has earned a premier reputation in the Indian market for its curtain wall systems and capabilities. 
                  We stand as one of the very few glazing providers who have the technical depth to deliver both unitized and stick facades tailored to unique client requirements.
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
          <div className="text-center max-w-3xl mx-auto mb-16 animate-rise">
            <SectionHeader
              eyebrow="Technical Competence"
              title="Advanced Glazing Systems Capabilities"
              description="We stand as one of the very few glazing providers in the Indian market with the engineering depth to provide both Unitized Glazing and Stick Glazing options."
            />
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
            <div className="rounded-2xl border border-border bg-card p-8 shadow-card relative overflow-hidden group hover:border-primary/20 transition-all duration-300">
              <div className="absolute top-0 right-0 h-24 w-24 rounded-bl-full bg-primary/5 group-hover:bg-primary/10 transition-colors" />
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-heat-gradient text-primary-foreground shadow-card">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">Our Mission</h3>
              </div>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                To build collaborative, lifetime relationships with developers, architects, and builders. We deliver curtain walls and fenestrations of benchmark quality, engineering integrity, and aesthetic value tailored precisely to customer requirements.
              </p>
            </div>

            {/* Vision */}
            <div className="rounded-2xl border border-border bg-card p-8 shadow-card relative overflow-hidden group hover:border-primary/20 transition-all duration-300">
              <div className="absolute top-0 right-0 h-24 w-24 rounded-bl-full bg-primary/5 group-hover:bg-primary/10 transition-colors" />
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-steel-gradient text-steel-foreground shadow-card">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">Our Vision</h3>
              </div>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                To be India's front-runner in building envelope engineering. We seek to set industry standards in structural glazing safety, architectural aesthetics, and thermal efficiency for next-generation skyscrapers.
              </p>
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
