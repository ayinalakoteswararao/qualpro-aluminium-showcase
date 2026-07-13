import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin, Youtube, ShieldCheck } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-steel-foreground border-t border-white/5 py-10 lg:py-14 relative overflow-hidden">
      {/* Subtle ambient accent */}
      <div className="absolute -left-24 -bottom-24 h-80 w-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      {/* Large backdrop watermark */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/16 select-none pointer-events-none font-display font-extralight text-[3rem] md:text-[5rem] lg:text-[7rem] leading-none tracking-wider text-white/[0.02] dark:text-white/[0.01] uppercase z-0 whitespace-nowrap">
        QUALPRO ALUMINIUM
      </div>

      <div className="container-x relative grid gap-8 lg:gap-6 sm:grid-cols-2 lg:grid-cols-4 z-10">

        {/* Col 1: Brand & Social */}
        <div className="space-y-4">
          <Link to="/" className="flex items-center gap-2.5 group">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-steel-gradient text-steel-foreground font-display font-black shadow-card border border-white/10 group-hover:scale-105 transition-transform duration-300">
              Q
            </span>
            <span className="font-display text-lg font-bold text-white tracking-tight">
              Qualpro <span className="text-primary">Aluminium</span>
            </span>
          </Link>
          <p className="text-sm text-steel-foreground/60 leading-relaxed">
            Precision engineering, state-of-the-art European fabrication machinery, and direct technical director supervision.
          </p>

          {/* Social media icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Qualpro Linkedin Page"
              className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 border border-white/10 text-steel-foreground/75 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-card cursor-pointer"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Qualpro Youtube Channel"
              className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 border border-white/10 text-steel-foreground/75 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-card cursor-pointer"
            >
              <Youtube className="h-4 w-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Qualpro Instagram Feed"
              className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 border border-white/10 text-steel-foreground/75 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-card cursor-pointer"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Qualpro Facebook Page"
              className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 border border-white/10 text-steel-foreground/75 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-card cursor-pointer"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Col 2: Navigation */}
        <div>
          <h4 className="font-display text-xs uppercase tracking-[0.2em] font-bold text-primary">
            Navigation
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-steel-foreground/75">
            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
            <li><Link to="/products" className="hover:text-primary transition-colors">Products</Link></li>
            <li><Link to="/infrastructure" className="hover:text-primary transition-colors">Infrastructure</Link></li>
            <li><Link to="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
            <li><Link to="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Col 3: Contact details */}
        <div>
          <h4 className="font-display text-xs uppercase tracking-[0.2em] font-bold text-primary">
            Reach Us
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-steel-foreground/75">
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
              <span className="leading-relaxed"># 17, IDA Phase 1, Cherlapally, Hyderabad - 500051</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-primary shrink-0" />
              <a href="tel:+919848125106" className="hover:text-primary transition-colors">+91 98481 25106</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-primary shrink-0" />
              <a href="mailto:info@qualproaluminium.com" className="hover:text-primary transition-colors">info@qualproaluminium.com</a>
            </li>
          </ul>
        </div>

        {/* Col 4: Quality & Standards */}
        <div className="space-y-3">
          <h4 className="font-display text-xs uppercase tracking-[0.2em] font-bold text-primary">
            Quality Standards
          </h4>
          <p className="text-sm text-steel-foreground/60 leading-relaxed">
            All custom extrusions and facade systems comply with the Bureau of Indian Standards (BIS) and American Architectural Manufacturers Association (AAMA) specifications.
          </p>
          <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/5 border border-white/5 text-xs text-steel-foreground/80">
            <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
            <span>ISO 9001:2015 Certified Plant</span>
          </div>
        </div>

      </div>

      {/* Bottom Sub-Footer with legal links */}
      <div className="mt-10 border-t border-white/10">
        <div className="container-x flex flex-col md:flex-row justify-between items-center gap-4 py-6 text-xs text-steel-foreground/60 z-10 relative">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p>© {new Date().getFullYear()} Qualpro Aluminium. All rights reserved.</p>
            <span className="hidden md:inline text-white/10">|</span>
            <p>Precision Aluminium. Built to Last.</p>
          </div>

          {/* Privacy & Terms Links */}
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <span className="text-white/10">|</span>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
