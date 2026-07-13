import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ArrowRight, Check } from "lucide-react";
import windowsImg from "@/assets/product-windows.jpg";
import doorsImg from "@/assets/product-doors.jpg";
import curtainImg from "@/assets/product-curtain.jpg";
import glazingImg from "@/assets/product-glazing.jpg";
import fabricationImg from "@/assets/product-fabrication.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products & Services — Qualpro Aluminium Systems" },
      {
        name: "description",
        content:
          "Aluminium windows, doors, curtain walls, structural glazing and custom fabrication — engineered and installed by Qualpro Aluminium.",
      },
      { property: "og:title", content: "Qualpro Aluminium Products & Services" },
      {
        property: "og:description",
        content: "Full range of aluminium systems for residential, commercial and industrial projects.",
      },
    ],
  }),
  component: Products,
});

const items = [
  {
    title: "Aluminium Windows",
    img: windowsImg,
    desc: "Thermally broken sliding, casement, tilt-and-turn and fixed window systems for high-performance envelopes.",
    features: ["Slim sightlines (up to 25mm)", "U-values from 1.4 W/m²K", "Powder-coated in 200+ RAL colors", "Double / triple glazing ready"],
  },
  {
    title: "Aluminium Doors",
    img: doorsImg,
    desc: "Sliding, bi-fold, pivot and hinged door systems built for daily use over decades.",
    features: ["Multi-point locking hardware", "Panel spans up to 3m", "Concealed roller systems", "Weather-tested gasket seals"],
  },
  {
    title: "Curtain Walls",
    img: curtainImg,
    desc: "Stick-built and unitised curtain wall systems for mid-rise and high-rise architecture.",
    features: ["Site-tested for wind & water", "Modular unitised panels", "Integrated operable vents", "SG / captive glazing options"],
  },
  {
    title: "Structural Glazing",
    img: glazingImg,
    desc: "Seamless glass facades with concealed aluminium framing — for signature architectural expression.",
    features: ["Frameless external appearance", "Silicone-bonded assemblies", "Custom mullion depths", "Engineered for high loads"],
  },
  {
    title: "Custom Fabrication",
    img: fabricationImg,
    desc: "Bespoke aluminium designs made to your drawings — for facades, interiors and specialty applications.",
    features: ["CNC precision machining", "Small-run prototyping", "Anodised & powder finishes", "Full drawing support"],
  },
];

function Products() {
  return (
    <>
      <PageHero
        eyebrow="Products & Services"
        title="A complete aluminium systems portfolio."
        description="Every system is engineered, fabricated and installed in-house — one accountable team from spec to handover."
      />

      <section className="py-20">
        <div className="container-x space-y-16">
          {items.map((it, i) => (
            <article
              key={it.title}
              className={`grid gap-10 md:grid-cols-2 md:items-center ${
                i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="overflow-hidden rounded-2xl border border-border shadow-card">
                <img
                  src={it.img}
                  alt={it.title}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                  0{i + 1} / Product
                </p>
                <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-foreground">
                  {it.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {it.desc}
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {it.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-sm font-semibold text-background hover:opacity-90"
                >
                  Enquire about {it.title} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
