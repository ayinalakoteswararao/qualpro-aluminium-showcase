import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { productsList } from "@/lib/data";
import { PageHero } from "@/components/site/PageHero";
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  ShieldCheck, 
  Settings2, 
  FileSpreadsheet, 
  MailWarning, 
  Award,
  Info
} from "lucide-react";

export const Route = createFileRoute("/products_/$productId")({
  loader: ({ params }) => {
    const product = productsList.find((p) => p.id === params.productId);
    if (!product) {
      throw notFound();
    }
    return { product };
  },
  head: ({ loaderData }) => {
    const product = loaderData?.product;
    return {
      meta: [
        { title: product ? product.seoTitle : "Product Specification | Qualpro" },
        {
          name: "description",
          content: product ? product.seoDesc : "Detailed structural and performance specifications for Qualpro aluminium systems.",
        },
        { property: "og:title", content: product ? product.seoTitle : "Qualpro Aluminium Product" },
        {
          property: "og:description",
          content: product ? product.seoDesc : "Explore high-performance architectural systems and assemblies.",
        },
      ],
    };
  },
  component: ProductDetailComponent,
});

function ProductDetailComponent() {
  const { product } = Route.useLoaderData();
  
  // Find related products (excluding the current one, grab up to 3)
  const relatedProducts = productsList
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="bg-background min-h-screen pb-16">
      {/* Product Hero Section */}
      <PageHero
        eyebrow={product.badge}
        title={product.title}
        description={product.desc}
        imageSrc={product.img}
      >
        {/* Dynamic Breadcrumbs */}
        <nav className="mt-8 flex items-center gap-2 text-xs font-semibold text-steel-foreground/60 select-none animate-rise">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
          <span>/</span>
          <span className="text-primary-foreground font-bold">{product.title}</span>
        </nav>
      </PageHero>

      {/* Main content layout */}
      <section className="py-20">
        <div className="container-x">
          
          {/* Back button */}
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-primary mb-12 transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform" />
            Back to Catalog
          </Link>

          <div className="grid gap-12 lg:grid-cols-12 items-start">
            
            {/* Left Column: Extensive specs and details */}
            <div className="lg:col-span-7 space-y-12 animate-rise">
              <div className="space-y-6">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5">{product.category}</span>
                
                <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight border-b border-border pb-4">
                  Product Description
                </h2>
                
                <div className="text-base text-muted-foreground leading-relaxed whitespace-pre-line space-y-4">
                  {product.longDesc}
                </div>
              </div>

              {/* Product Features Checkmarks */}
              <div className="space-y-6">
                <h3 className="font-display text-2xl font-bold text-foreground flex items-center gap-2.5">
                  <Award className="h-5 w-5 text-primary" /> Key Performance Features
                </h3>
                <div className="grid gap-3 sm:grid-cols-1">
                  {product.features.map((feature, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-sm hover:border-primary/10 transition-colors"
                    >
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Specification Table & Dynamic CTA */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24 animate-rise [animation-delay:150ms]">
              
              {/* Quick Specs Info Pills */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-4">
                <h4 className="font-display text-xs uppercase tracking-wider text-muted-foreground font-bold">Key Indicators</h4>
                <div className="flex flex-wrap gap-2">
                  {product.specs.map((spec) => (
                    <span 
                      key={spec} 
                      className="rounded-lg bg-secondary px-3.5 py-2 text-xs font-bold text-muted-foreground border border-border flex items-center gap-1.5"
                    >
                      <Info className="h-3.5 w-3.5 text-primary shrink-0" />
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technical Specifications Table */}
              <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-industrial">
                <div className="bg-secondary/40 px-6 py-5 border-b border-border flex items-center gap-2.5">
                  <Settings2 className="h-5 w-5 text-primary" />
                  <h3 className="font-display text-sm font-bold uppercase tracking-wider text-foreground">
                    Technical Specifications
                  </h3>
                </div>
                <div className="divide-y divide-border/80">
                  {Object.entries(product.technicalDetails).map(([key, value]) => (
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
                    RFQ / INQUIRY
                  </div>
                  <h4 className="font-display text-2xl font-bold tracking-tight">
                    Enquire about {product.title}
                  </h4>
                  <p className="text-xs text-steel-foreground/75 leading-relaxed">
                    Get custom extrusion drawing submittals, samples, project price lists, and architectural assistance.
                  </p>
                  
                  <div className="flex flex-col gap-3 pt-2">
                    <Link
                      to="/contact"
                      search={{ subject: `Inquiry regarding ${product.title}` }}
                      className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-primary py-3.5 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-industrial hover:scale-[1.02] hover:opacity-95 active:scale-[0.98] transition-all cursor-pointer"
                    >
                      Request Pricing & Details
                    </Link>
                    
                    <a
                      href="tel:+919848125106"
                      className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-white/5 border border-white/10 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10 transition-colors"
                    >
                      Contact Sales
                    </a>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2 text-[10px] text-steel-foreground/40 pt-2">
                    <ShieldCheck className="h-4.5 w-4.5 text-primary shrink-0" />
                    <span>Tested compliant profiles with certifications.</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Related Products Section */}
          <div className="border-t border-border mt-24 pt-20 space-y-10 animate-rise [animation-delay:250ms]">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Related Systems</span>
                <h3 className="font-display text-2xl md:text-3xl font-extrabold text-foreground mt-1">
                  Explore Other Profiles
                </h3>
              </div>
              <Link
                to="/products"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary hover:underline"
              >
                View Catalog <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((rel) => (
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
                      <div className="absolute top-4 left-4 rounded-lg bg-gradient-to-r from-steel/90 to-ink border border-white/10 px-3 py-1 text-[9px] uppercase font-bold tracking-wider text-primary shadow-industrial">
                        {rel.badge}
                      </div>
                    </div>
                    
                    <div className="p-6 space-y-3">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-primary">{rel.category}</span>
                      <h4 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        <Link to="/products/$productId" params={{ productId: rel.id }}>
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
                      to="/products/$productId"
                      params={{ productId: rel.id }}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:text-primary/80 transition-colors"
                    >
                      Explore Specifications <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
