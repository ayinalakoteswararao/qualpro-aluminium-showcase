import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Wrench,
  Truck,
  Feather,
  Recycle,
  Sun,
  Layers,
} from "lucide-react";
import heroImg from "@/assets/hero-factory.jpg";
import windowsImg from "@/assets/product-windows.jpg";
import doorsImg from "@/assets/product-doors.jpg";
import curtainImg from "@/assets/product-curtain.jpg";
import glazingImg from "@/assets/product-glazing.jpg";
import fabricationImg from "@/assets/product-fabrication.jpg";
import { SectionHeader } from "@/components/site/SectionHeader";

export const Route = createFileRoute("/")({
  component: Home,
});

const services = [
  { title: "Aluminium Windows", img: windowsImg, desc: "Slim-profile, thermally broken window systems for modern facades." },
  { title: "Aluminium Doors", img: doorsImg, desc: "Sliding, folding and hinged door systems engineered for daily performance." },
  { title: "Curtain Walls", img: curtainImg, desc: "Unitised and stick-built curtain walling for high-rise architecture." },
  { title: "Structural Glazing", img: glazingImg, desc: "Seamless glass facades with concealed aluminium framing." },
  { title: "Custom Fabrication", img: fabricationImg, desc: "Bespoke aluminium designs made to your drawings, tolerances and finish." },
];

const stats = [
  { k: "20+", v: "Years of experience" },
  { k: "1200+", v: "Projects delivered" },
  { k: "98%", v: "On-time completion" },
  { k: "ISO", v: "Certified quality" },
];

const highlights = [
  { icon: Award, title: "Premium Grade", desc: "Only 6063-T5/T6 alloys, powder coated to AAMA 2604." },
  { icon: ShieldCheck, title: "Quality Assured", desc: "Every profile inspected against ISO 9001 procedures." },
  { icon: Wrench, title: "Custom Solutions", desc: "In-house design & CNC fabrication to your specifications." },
  { icon: Truck, title: "On-time Delivery", desc: "Streamlined production for predictable project timelines." },
];

const benefits = [
  { icon: Feather, title: "Lightweight & Strong", desc: "One-third the weight of steel, without sacrificing rigidity." },
  { icon: ShieldCheck, title: "Corrosion Resistant", desc: "Naturally oxide-protected — ideal for coastal & harsh climates." },
  { icon: Recycle, title: "100% Recyclable", desc: "A truly sustainable material with a low lifecycle footprint." },
  { icon: Sun, title: "Weather Resistant", desc: "Powder-coated finishes hold color and integrity for decades." },
  { icon: Layers, title: "Design Freedom", desc: "Extrudable into virtually any profile a project demands." },
  { icon: Award, title: "Low Maintenance", desc: "Wash-and-go finishes with no rot, warping or repainting." },
];

const testimonials = [
  {
    name: "Rohit Menon",
    role: "Principal Architect, Studio Verde",
    quote:
      "Qualpro's execution on our curtain wall was flawless. Tolerances were tight and they hit every milestone.",
  },
  {
    name: "Anjali Rao",
    role: "Project Manager, Blueline Constructions",
    quote:
      "The quality of the aluminium and the finish is genuinely premium. They've become our go-to fabricator.",
  },
  {
    name: "Farhan Khan",
    role: "Homeowner, Palm Grove Villa",
    quote:
      "The sliding doors transformed our living room. Smooth, silent and beautifully finished.",
  },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-steel-foreground">
        <img
          src={heroImg}
          alt="Aluminium extrusion profiles in a modern fabrication facility"
          width={1920}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/50 to-ink/90" aria-hidden />
        <div className="container-x relative min-h-[86vh] flex flex-col justify-center py-24">
          <p className="animate-rise text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            Qualpro Aluminium
          </p>
          <h1 className="animate-rise mt-5 font-display text-5xl md:text-7xl font-bold leading-[1.02] max-w-4xl">
            Precision Aluminium.<br />
            <span className="text-primary">Built to Last.</span>
          </h1>
          <p className="animate-rise mt-6 max-w-xl text-lg text-steel-foreground/80">
            Two decades of engineering windows, doors, facades and bespoke
            aluminium systems for architects, developers and homeowners who
            refuse to compromise.
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
      <section className="py-20 bg-secondary/40">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <SectionHeader
              eyebrow="Products & Services"
              title="A complete aluminium systems partner."
              description="From residential windows to skyline-scale curtain walls — one accountable team."
            />
            <Link
              to="/products"
              className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              Browse full catalog <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <article
                key={s.title}
                className={`group overflow-hidden rounded-xl border border-border bg-card shadow-card transition hover:-translate-y-1 hover:shadow-industrial ${
                  i === 0 ? "lg:col-span-2 lg:row-span-1" : ""
                }`}
              >
                <div className={`overflow-hidden ${i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </article>
            ))}
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
      <section className="py-16">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-2xl bg-steel-gradient p-10 md:p-16 shadow-industrial">
            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="max-w-xl">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-steel-foreground">
                  Ready to spec your next project?
                </h2>
                <p className="mt-3 text-steel-foreground/75">
                  Send us your drawings or requirement — you'll get a quote and technical review within 48 hours.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-card hover:opacity-95"
              >
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div
              className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/25 blur-3xl"
              aria-hidden
            />
          </div>
        </div>
      </section>
    </>
  );
}
