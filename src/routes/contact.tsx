import { createFileRoute } from "@tanstack/react-router";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  FileText,
  HelpCircle,
  Award,
  CheckCircle2
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import commercialImg from "@/assets/project-commercial.jpg";
import { useState, useEffect } from "react";
import { trackPixelEvent } from "@/lib/meta-pixel";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Qual Pro Aluminium - Get a Quote | Facade Company in Hyderabad" },
      {
        name: "description",
        content:
          "Request a free technical review and quote for unitized glazing, spider glazing, ACP cladding, and premium facade systems. Contact our Cherlapally office in Hyderabad.",
      },
      { property: "og:title", content: "Contact Qual Pro Aluminium | Facade Contractor Hyderabad" },
      { property: "og:description", content: "Get a custom engineering review and estimate for your facade system project." },
    ],
  }),
  component: Contact,
});

const faqs = [
  {
    q: "Do you handle both design and installation?",
    a: "Yes. We manage the full lifecycle — from engineering design at our Hyderabad office to plant fabrication in Cherlapally and final on-site installation.",
  },
  {
    q: "What is your main specialization?",
    a: "We specialize in high-performance exterior building envelopes: Unitized Glazing, Spider Glazing, ACP Cladding, Structural Glazing, Skylights, Louvers, and custom architectural metal works.",
  },
  {
    q: "Do you partner with architects and developers directly?",
    a: "Absolutely. We routinely collaborate with principal architects, structural engineers, general contractors (L&T, NCC, Simplex), and developers to deliver custom building envelopes.",
  },
  {
    q: "Who manages technical execution and business operations?",
    a: "Our strategy and technical operations are led by partners Mr. Ramesh Kommana (MS, Texas A&M) with 10+ years of facade engineering expertise and Ms. Veda Deepthi A (MBA, IIM Calcutta) with 20+ years of business advisory experience.",
  },
];

function Contact() {
  const [activeTab, setActiveTab] = useState<"quote" | "enquiry">("quote");
  const [sentQuote, setSentQuote] = useState(false);
  const [sentEnquiry, setSentEnquiry] = useState(false);

  // States for forms
  const [quoteName, setQuoteName] = useState("");
  const [quotePhone, setQuotePhone] = useState("");
  const [quoteEmail, setQuoteEmail] = useState("");
  const [quoteLocation, setQuoteLocation] = useState("");
  const [quoteSector, setQuoteSector] = useState("Aviation (Airports)");
  const [quoteArea, setQuoteArea] = useState("");
  const [quoteRequirement, setQuoteRequirement] = useState("");

  const [enquiryName, setEnquiryName] = useState("");
  const [enquiryEmail, setEnquiryEmail] = useState("");
  const [enquirySubject, setEnquirySubject] = useState("");
  const [enquiryMessage, setEnquiryMessage] = useState("");

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Trigger Meta Pixel Conversion Event
    trackPixelEvent("Lead", {
      content_category: "Quote Request",
      content_name: quoteSector,
      content_area_sqft: quoteArea,
      content_location: quoteLocation,
    });

    setSentQuote(true);
    // Reset fields
    setQuoteName("");
    setQuotePhone("");
    setQuoteEmail("");
    setQuoteLocation("");
    setQuoteArea("");
    setQuoteRequirement("");
  };

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Trigger Meta Pixel Conversion Event
    trackPixelEvent("Contact", {
      content_category: "General Inquiry",
      content_name: enquirySubject,
    });

    setSentEnquiry(true);
    // Reset fields
    setEnquiryName("");
    setEnquiryEmail("");
    setEnquirySubject("");
    setEnquiryMessage("");
  };

  // Automatically scroll to success message
  useEffect(() => {
    if (sentQuote || sentEnquiry) {
      window.scrollTo({ behavior: "smooth" });
    }
  }, [sentQuote, sentEnquiry]);

  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Connect With Our Facade Experts"
        description="Send us your drawing specifications or project requirements. Our engineering team in Cherlapally will respond with a full technical review and commercial estimate."
        imageSrc={commercialImg}
      />

      <section className="py-20 bg-background">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            
            {/* LEFT COLUMN: BRAND HUB & INFO (lg:col-span-6) */}
            <div className="w-full lg:col-span-6 space-y-8 animate-rise">
              
              {/* Info Card */}
              <div className="w-full relative rounded-3xl bg-gradient-to-br from-steel to-ink p-8 text-steel-foreground shadow-industrial border border-white/10 overflow-hidden">
                <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-primary/15 blur-3xl pointer-events-none" />
                
                <h2 className="font-display text-2xl font-bold text-white tracking-tight">Qualpro Headquarters</h2>
                <p className="mt-1 text-xs text-steel-foreground/50">Factory operations & main corporate office</p>
                
                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/5 border border-white/10 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-steel-foreground/40 font-bold">Office & Factory Address</span>
                      <span className="text-sm font-medium mt-1 block text-steel-foreground/90 leading-relaxed">
                        Qualpro Aluminium Private Limited,<br />
                        # 17, IDA, Phase 1,<br />
                        Cherlapally, Hyderabad - 500051
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/5 border border-white/10 text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-steel-foreground/40 font-bold">Direct Lines</span>
                      <a href="tel:+919848125106" className="text-sm font-semibold mt-1 block text-white hover:text-primary transition-colors">
                        +91 98481 25106
                      </a>
                      <span className="text-xs text-steel-foreground/50 block mt-0.5">Mon - Sat, 9:00 AM - 6:00 PM</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/5 border border-white/10 text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-steel-foreground/40 font-bold">Commercial & Technical</span>
                      <a href="mailto:info@qualproaluminium.com" className="text-sm font-semibold mt-1 block text-white hover:text-primary transition-colors">
                        info@qualproaluminium.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Leadership Spotlight Card */}
              <div className="w-full rounded-3xl border border-border bg-card p-8 shadow-card relative overflow-hidden">
                <div className="absolute right-0 top-0 h-16 w-16 bg-primary/5 rounded-bl-full animate-pulse" />
                <h3 className="font-display text-lg font-bold text-foreground flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" /> Engineering Leadership
                </h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Our projects are directly reviewed and overseen by our founding partners, ensuring engineering integrity.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="p-4 rounded-2xl bg-secondary/50 border border-border/80">
                    <span className="block font-bold text-sm text-foreground">Mr. Ramesh Kommana</span>
                    <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider mt-0.5 block">Director Partner</span>
                    <span className="text-[10px] text-primary font-semibold mt-1 block">MS, Texas A&M University</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-secondary/50 border border-border/80">
                    <span className="block font-bold text-sm text-foreground">Ms. Veda Deepthi A</span>
                    <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider mt-0.5 block">Director Partner</span>
                    <span className="text-[10px] text-primary font-semibold mt-1 block">MBA, IIM Calcutta</span>
                  </div>
                </div>
              </div>

              {/* Interactive Map Iframe */}
              <div className="w-full overflow-hidden rounded-3xl border border-border shadow-industrial bg-card p-2 group">
                <iframe
                  title="Qual Pro Aluminium Location Map"
                  src="https://www.google.com/maps?q=Qualpro+Aluminium+Private+Limited,+Cherlapally,+Hyderabad&output=embed"
                  className="h-64 w-full rounded-2xl border border-border transition-all duration-500 group-hover:opacity-95"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

            </div>

            {/* RIGHT COLUMN: INTERACTIVE FORM (lg:col-span-6) */}
            <div className="lg:col-span-6 bg-card rounded-3xl border border-border shadow-industrial p-6 md:p-10">
              
              {/* Tab Switcher */}
              <div className="flex gap-2 p-1.5 rounded-2xl bg-secondary/60 border border-border w-full max-w-md mb-8">
                <button
                  onClick={() => {
                    setActiveTab("quote");
                    setSentQuote(false);
                  }}
                  className={`flex-1 flex items-center justify-center gap-2 rounded-xl py-3 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    activeTab === "quote"
                      ? "bg-primary text-primary-foreground shadow-card"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <FileText className="h-4 w-4" /> Request a Quote
                </button>
                <button
                  onClick={() => {
                    setActiveTab("enquiry");
                    setSentEnquiry(false);
                  }}
                  className={`flex-1 flex items-center justify-center gap-2 rounded-xl py-3 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    activeTab === "enquiry"
                      ? "bg-primary text-primary-foreground shadow-card"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Mail className="h-4 w-4" /> General Inquiry
                </button>
              </div>

              {/* FORM TAB 1: REQUEST A QUOTE */}
              {activeTab === "quote" && (
                <form onSubmit={handleQuoteSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">Project Estimation Request</h3>
                    <p className="mt-1 text-xs text-muted-foreground">Submit your architectural scope details for a detailed quotation within 48 hours.</p>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <InputWrapper label="Full Name *">
                      <input
                        type="text"
                        required
                        value={quoteName}
                        onChange={(e) => setQuoteName(e.target.value)}
                        placeholder="e.g. Jane Doe"
                        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                      />
                    </InputWrapper>

                    <InputWrapper label="Phone Number *">
                      <input
                        type="tel"
                        required
                        value={quotePhone}
                        onChange={(e) => setQuotePhone(e.target.value)}
                        placeholder="e.g. +91 98481 25106"
                        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                      />
                    </InputWrapper>

                    <InputWrapper label="Email Address *" className="sm:col-span-2">
                      <input
                        type="email"
                        required
                        value={quoteEmail}
                        onChange={(e) => setQuoteEmail(e.target.value)}
                        placeholder="e.g. contact@company.com"
                        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                      />
                    </InputWrapper>

                    <InputWrapper label="Project Location *">
                      <input
                        type="text"
                        required
                        value={quoteLocation}
                        onChange={(e) => setQuoteLocation(e.target.value)}
                        placeholder="e.g. Gachibowli, Hyderabad"
                        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                      />
                    </InputWrapper>

                    <InputWrapper label="Project Sector *">
                      <select
                        value={quoteSector}
                        onChange={(e) => setQuoteSector(e.target.value)}
                        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                      >
                        <option>Aviation (Airports)</option>
                        <option>Government & Institutional</option>
                        <option>Commercial & Infrastructure</option>
                        <option>Residential & Townships</option>
                        <option>Other / Custom Work</option>
                      </select>
                    </InputWrapper>

                    <InputWrapper label="Approximate Glazing/ACP Area (sq ft / sq m)">
                      <input
                        type="text"
                        value={quoteArea}
                        onChange={(e) => setQuoteArea(e.target.value)}
                        placeholder="e.g. 15,000 sq ft"
                        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                      />
                    </InputWrapper>

                    <InputWrapper label="Technical Scope / Special Requirements *" className="sm:col-span-2">
                      <textarea
                        required
                        rows={4}
                        value={quoteRequirement}
                        onChange={(e) => setQuoteRequirement(e.target.value)}
                        placeholder="Please detail requirements (e.g. unitized glazing, ACP sheet thickness, window frames, thermal break specs)..."
                        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                      />
                    </InputWrapper>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-sm font-bold text-primary-foreground shadow-industrial hover:opacity-95 active:scale-[0.99] transition-all cursor-pointer"
                  >
                    <Send className="h-4 w-4" /> Send Estimation Request
                  </button>

                  {sentQuote && (
                    <div className="flex gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-sm text-foreground animate-rise">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block font-semibold">Enquiry successfully submitted!</strong>
                        <span className="text-xs text-muted-foreground mt-1 block">
                          Thank you for reaching out. A facade design coordinator will review your specs and email you a technical assessment within 48 hours.
                        </span>
                      </div>
                    </div>
                  )}
                </form>
              )}

              {/* FORM TAB 2: GENERAL INQUIRY */}
              {activeTab === "enquiry" && (
                <form onSubmit={handleEnquirySubmit} className="space-y-6">
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">General Communication</h3>
                    <p className="mt-1 text-xs text-muted-foreground">Send partnerships, career inquiries, or basic product queries here.</p>
                  </div>

                  <div className="space-y-5">
                    <InputWrapper label="Your Name *">
                      <input
                        type="text"
                        required
                        value={enquiryName}
                        onChange={(e) => setEnquiryName(e.target.value)}
                        placeholder="e.g. John Doe"
                        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                      />
                    </InputWrapper>

                    <InputWrapper label="Email Address *">
                      <input
                        type="email"
                        required
                        value={enquiryEmail}
                        onChange={(e) => setEnquiryEmail(e.target.value)}
                        placeholder="e.g. john@example.com"
                        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                      />
                    </InputWrapper>

                    <InputWrapper label="Subject *">
                      <input
                        type="text"
                        required
                        value={enquirySubject}
                        onChange={(e) => setEnquirySubject(e.target.value)}
                        placeholder="e.g. Career Opportunities / Factory Visit"
                        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                      />
                    </InputWrapper>

                    <InputWrapper label="Message *">
                      <textarea
                        required
                        rows={5}
                        value={enquiryMessage}
                        onChange={(e) => setEnquiryMessage(e.target.value)}
                        placeholder="Write details of your message here..."
                        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                      />
                    </InputWrapper>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-sm font-bold text-primary-foreground shadow-industrial hover:opacity-95 active:scale-[0.99] transition-all cursor-pointer"
                  >
                    <Send className="h-4 w-4" /> Send Message
                  </button>

                  {sentEnquiry && (
                    <div className="flex gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-sm text-foreground animate-rise">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block font-semibold">Message sent successfully!</strong>
                        <span className="text-xs text-muted-foreground mt-1 block">
                          Your message has been dispatched to our communications desk. We will review and respond as soon as possible.
                        </span>
                      </div>
                    </div>
                  )}
                </form>
              )}

            </div>
          </div>
        </div>
      </section>

      {/* REDESIGNED FAQ GRID SECTION */}
      <section className="py-24 bg-secondary/30 border-t border-border">
        <div className="container-x">
          <div className="max-w-xl mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary block mb-3">FAQ</span>
            <h2 className="font-display text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
            <p className="mt-2 text-sm text-muted-foreground">Answers to common structural engineering, design, and quote inquiries.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {faqs.map((f, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-border bg-card shadow-card hover:shadow-industrial transition-all duration-300 group hover:-translate-y-0.5"
              >
                <div className="flex gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <HelpCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-foreground">{f.q}</h3>
                    <p className="mt-2.5 text-xs md:text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function InputWrapper({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="text-xs font-bold uppercase tracking-wider text-foreground">{label}</label>
      {children}
    </div>
  );
}
