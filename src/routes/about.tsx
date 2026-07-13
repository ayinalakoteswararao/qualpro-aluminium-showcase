import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Target, Eye, Sparkles, Users, Gauge, HeartHandshake } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Qualpro Aluminium — Two decades of precision fabrication" },
      {
        name: "description",
        content:
          "Learn about Qualpro Aluminium — our vision, mission, values and why architects, developers and homeowners trust our aluminium systems.",
      },
      { property: "og:title", content: "About Qualpro Aluminium" },
      {
        property: "og:description",
        content: "Two decades of premium aluminium fabrication and facade engineering.",
      },
    ],
  }),
  component: About,
});

const values = [
  { icon: Sparkles, title: "High-quality materials", desc: "Certified alloys and finishes sourced from vetted mills." },
  { icon: Users, title: "Skilled craftsmanship", desc: "A tenured team of engineers, fabricators and installers." },
  { icon: Gauge, title: "Timely delivery", desc: "Predictable production schedules that respect your milestones." },
  { icon: HeartHandshake, title: "Competitive pricing", desc: "Direct-from-manufacturer pricing without cutting corners." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Aluminium engineered with obsession."
        description="Qualpro Aluminium was founded on a simple belief: buildings deserve fabricators who care as much as their architects."
      />

      <section className="py-20">
        <div className="container-x grid gap-12 md:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Our Story"
              title="From a workshop of five to a systems partner of hundreds."
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                What began as a modest fabrication workshop is today a
                full-service aluminium systems company delivering residential,
                commercial and industrial projects across the region.
              </p>
              <p>
                We invest in our machines, our people and our processes — because
                aluminium done right is a promise that lasts decades.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-xl border border-border bg-card p-8 shadow-card">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-md bg-heat-gradient text-primary-foreground">
                  <Target className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">Our Mission</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                To deliver aluminium systems that combine precision engineering,
                honest craftsmanship and uncompromising quality — on every project,
                every time.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-8 shadow-card">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-md bg-steel-gradient text-steel-foreground">
                  <Eye className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">Our Vision</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                To be the region's most trusted aluminium partner — the name
                architects, developers and homeowners specify by default.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/40">
        <div className="container-x">
          <SectionHeader
            eyebrow="Why Choose Us"
            title="Four commitments we make on every project."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-xl border border-border bg-card p-6 shadow-card"
              >
                <div className="grid h-11 w-11 place-items-center rounded-md bg-secondary text-foreground">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
