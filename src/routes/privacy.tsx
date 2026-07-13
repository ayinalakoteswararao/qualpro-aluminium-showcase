import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Shield, Eye, Lock, FileText, ArrowLeft } from "lucide-react";
import curtainImg from "@/assets/product-curtain.jpg";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Qualpro Aluminium" },
      {
        name: "description",
        content: "Read the Privacy Policy of Qualpro Aluminium. Learn how we handle drawings, requirements, and personal data.",
      },
    ],
  }),
  component: PrivacyPolicy,
});

export function PrivacyPolicy() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How we collect, protect, and handle your project drawings, estimation requests, and personal information."
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
              <Shield className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h2 className="font-display text-xl font-bold text-foreground">1. Commitment to Privacy</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  At Qualpro Aluminium, we respect your privacy. We are committed to safeguarding the drawings, layouts, design files, and contact specifications shared with our engineering team for technical reviews and project quotations.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start border-b border-border pb-6">
              <Eye className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h2 className="font-display text-xl font-bold text-foreground">2. Information Collection</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  We collect information when you submit a quote request, complete an estimation inquiry form, or email us design files. This may include your name, phone number, email address, project location, construction sector, approximate glazing area dimensions, and AutoCAD/PDF shop drawings.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start border-b border-border pb-6">
              <Lock className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h2 className="font-display text-xl font-bold text-foreground">3. Security of Technical Drawings</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  All engineering design plans and blueprints uploaded for estimation are treated as strictly confidential. Access is limited solely to our technical estimation engineers and directing partners. We do not sell, trade, or distribute your designs to external subcontractors or competitors.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start pb-2">
              <FileText className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h2 className="font-display text-xl font-bold text-foreground">4. Cookies and Analytical Tools</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Our website uses cookies to improve navigational experience, measure page loading speeds, and remember theme selections (light/dark mode toggle). You can choose to disable cookies through your browser settings, although some site elements may not display optimally.
                </p>
              </div>
            </div>

            <div className="border-t border-border pt-8 text-center text-xs text-muted-foreground">
              Last updated: July 2026. For privacy concerns, please contact info@qualproaluminium.com.
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
