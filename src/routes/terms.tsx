import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Clock, Hammer, Shield, Info, ArrowLeft } from "lucide-react";
import curtainImg from "@/assets/product-curtain.jpg";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Qualpro Aluminium" },
      {
        name: "description",
        content: "Read the Terms and Conditions of Qualpro Aluminium. Scope of work, technical estimations, warranties, and plant orders.",
      },
    ],
  }),
  component: TermsAndConditions,
});

export function TermsAndConditions() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description="Standard operating agreements, scope definitions, drawing reviews, and project estimation constraints."
        imageSrc={curtainImg}
      />

      <section className="py-20 bg-background text-foreground transition-colors duration-300">
        <div className="container-x max-w-4xl">
          {/* Back button */}
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors group cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
          </div>
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-card space-y-10">
            
            <div className="flex gap-4 items-start border-b border-border pb-6">
              <Clock className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h2 className="font-display text-xl font-bold text-foreground">1. Estimation & Technical Review</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Our commitment to deliver a quotation within 48 hours is dependent on receiving complete architectural drawings (elevations, plan layouts, details) and structural parameters (wind loads, deflections). Incomplete data may delay the technical assessment.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start border-b border-border pb-6">
              <Hammer className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h2 className="font-display text-xl font-bold text-foreground">2. Fabrication & Tolerances</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  All custom extrusions, unitized frames, and panels are fabricated in our ISO 9001:2015 certified plant in Cherlapally, Hyderabad. Dimensions are fabricated according to approved shop drawings, adhering strictly to the American Architectural Manufacturers Association (AAMA) standard tolerances.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start border-b border-border pb-6">
              <Shield className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h2 className="font-display text-xl font-bold text-foreground">3. Guarantee and Warranties</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  We guarantee structurally sound installations. Double-glazed units (DGU) carry specialized manufacturer warranties against desiccant failure and glass fogging. Material color coatings (anodized or powder coatings) carry standard warranties against cracking or excessive chalking.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start pb-2">
              <Info className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h2 className="font-display text-xl font-bold text-foreground">4. Governing Law</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  These agreements and subsequent project contracts are governed by local and state industrial regulations in Telangana, India. Disputes arising from design engineering interpretation are subject to arbitration in Hyderabad jurisdiction.
                </p>
              </div>
            </div>

            <div className="border-t border-border pt-8 text-center text-xs text-muted-foreground">
              Last updated: July 2026. For detailed contract enquiries, please contact info@qualproaluminium.com.
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
