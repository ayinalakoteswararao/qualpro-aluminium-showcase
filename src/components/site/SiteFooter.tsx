import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-steel-gradient text-steel-foreground">
      <div className="container-x py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-primary text-primary-foreground font-display font-bold">
              Q
            </span>
            <span className="font-display text-xl font-bold">Qualpro Aluminium</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-steel-foreground/70">
            Premium aluminium fabrication, windows, doors, curtain walls and
            structural systems for residential, commercial and industrial
            projects. Precision engineered. Built to last.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm uppercase tracking-[0.18em] text-primary">
            Company
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-steel-foreground/80">
            <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
            <li><Link to="/products" className="hover:text-primary">Products</Link></li>
            <li><Link to="/projects" className="hover:text-primary">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm uppercase tracking-[0.18em] text-primary">
            Reach us
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-steel-foreground/80">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary" /> Industrial Area, Phase II, Your City</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary" /> +91 99999 99999</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-primary" /> hello@qualproaluminium.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col md:flex-row justify-between gap-2 py-5 text-xs text-steel-foreground/60">
          <p>© {new Date().getFullYear()} Qualpro Aluminium. All rights reserved.</p>
          <p>Precision Aluminium. Built to Last.</p>
        </div>
      </div>
    </footer>
  );
}
