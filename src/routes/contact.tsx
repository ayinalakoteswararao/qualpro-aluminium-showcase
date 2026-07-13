import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Qualpro Aluminium — Request a Quote" },
      {
        name: "description",
        content:
          "Get a quote for aluminium windows, doors, curtain walls and custom fabrication. Reach Qualpro Aluminium by phone, email or the form.",
      },
      { property: "og:title", content: "Contact Qualpro Aluminium" },
      { property: "og:description", content: "Request a quote or technical review for your aluminium project." },
    ],
  }),
  component: Contact,
});

const faqs = [
  {
    q: "Do you handle both design and installation?",
    a: "Yes. We manage the full lifecycle — from technical drawings and shop fabrication to on-site installation and handover.",
  },
  {
    q: "What's the typical lead time for a project?",
    a: "Standard windows & doors ship in 3–5 weeks. Curtain wall and custom systems typically run 8–12 weeks depending on scope.",
  },
  {
    q: "Do you work with architects and contractors directly?",
    a: "Absolutely. We regularly partner with architectural practices and main contractors on tendered and negotiated projects.",
  },
  {
    q: "What warranties do you provide?",
    a: "Aluminium profiles carry a 10-year structural warranty and finishes carry a 5–10 year warranty depending on the coating.",
  },
];

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Tell us about your project."
        description="Send us your drawings, specs or a short brief — we'll respond with a quote and technical review within 48 hours."
      />

      <section className="py-20">
        <div className="container-x grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="rounded-2xl border border-border bg-card p-8 shadow-card"
            >
              <h2 className="font-display text-2xl font-semibold text-foreground">Request a quote</h2>
              <p className="mt-2 text-sm text-muted-foreground">All fields marked * are required.</p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <Field label="Full name *" name="name" placeholder="Jane Doe" required />
                <Field label="Phone *" name="phone" type="tel" placeholder="+91 99999 99999" required />
                <Field label="Email *" name="email" type="email" placeholder="you@company.com" required className="sm:col-span-2" />
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-foreground">Requirement *</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Project type, location, approximate quantities, timeline…"
                    className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-card hover:opacity-95"
              >
                <Send className="h-4 w-4" /> Send enquiry
              </button>

              {sent && (
                <p className="mt-5 rounded-md border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-foreground">
                  Thanks — your enquiry has been received. We'll get back within 48 hours.
                </p>
              )}
            </form>
          </div>

          <aside className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl bg-steel-gradient p-8 text-steel-foreground shadow-card">
              <h3 className="font-display text-xl font-semibold">Company details</h3>
              <ul className="mt-6 space-y-5 text-sm">
                <li className="flex gap-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0" />
                  <span>Plot 42, Industrial Area Phase II<br />Your City — 000000</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="h-5 w-5 text-primary shrink-0" />
                  <a href="tel:+919999999999" className="hover:text-primary">+91 99999 99999</a>
                </li>
                <li className="flex gap-3">
                  <Mail className="h-5 w-5 text-primary shrink-0" />
                  <a href="mailto:hello@qualproaluminium.com" className="hover:text-primary">hello@qualproaluminium.com</a>
                </li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border shadow-card">
              <iframe
                title="Qualpro Aluminium location"
                src="https://www.google.com/maps?q=aluminium+factory&output=embed"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>
        </div>
      </section>

      <section className="py-20 bg-secondary/40">
        <div className="container-x max-w-3xl">
          <SectionHeader eyebrow="FAQ" title="Answers to common questions." />
          <div className="mt-10 divide-y divide-border rounded-xl border border-border bg-card">
            {faqs.map((f) => (
              <details key={f.q} className="group px-6 py-5">
                <summary className="flex cursor-pointer items-center justify-between font-display text-base font-semibold text-foreground list-none">
                  {f.q}
                  <span className="ml-4 text-primary transition group-open:rotate-45 text-2xl leading-none">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  className = "",
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string; className?: string }) {
  return (
    <div className={className}>
      <label className="text-sm font-medium text-foreground">{label}</label>
      <input
        {...props}
        className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
}
