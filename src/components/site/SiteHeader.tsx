import { Link } from "@tanstack/react-router";
import { Menu, X, Phone, Sun, Moon, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { servicesList, productsList } from "../../lib/data";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/infrastructure", label: "Infrastructure" },
  { to: "/projects", label: "Projects" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  // Read initial theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  // Update document classes and save value on theme change
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-md shadow-[0_2px_20px_-12px_rgba(0,0,0,0.08)] transition-colors duration-300">
      <div className="container-x flex h-16 items-center justify-between">
        
        {/* Logo block */}
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-steel-gradient text-steel-foreground font-display font-black shadow-card group-hover:scale-105 group-hover:shadow-industrial transition-all duration-300 border border-white/10 text-sm">
            Q
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-sm md:text-base font-bold tracking-tight text-foreground">
              Qualpro <span className="text-primary">Aluminium</span>
            </span>
            <span className="hidden xl:inline text-[9px] uppercase tracking-[0.2em] text-muted-foreground mt-0.5">
              Built to last
            </span>
          </span>
        </Link>

        {/* Desktop Navigation (Visible on lg screens and wider) */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
          {nav.map((n) => {
            if (n.label === "Services") {
              return (
                <div key={n.to} className="relative group py-2">
                  <Link
                    to={n.to}
                    className="px-2 xl:px-3.5 py-1.5 text-[10px] xl:text-xs uppercase tracking-wider font-bold text-muted-foreground rounded-full transition-all duration-300 hover:text-foreground group-hover:text-foreground group-hover:bg-secondary/70 flex items-center gap-1 shrink-0"
                    activeProps={{ className: "text-primary-foreground bg-primary shadow-sm" }}
                  >
                    Services <ChevronDown className="h-3 w-3 opacity-60 group-hover:opacity-100 group-hover:rotate-180 transition-transform duration-200" />
                  </Link>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-64 rounded-2xl border border-border/80 bg-background/95 backdrop-blur-md p-2.5 shadow-industrial opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
                    <div className="grid gap-0.5">
                      {servicesList.map((service) => (
                        <Link
                          key={service.id}
                          to="/services/$serviceId"
                          params={{ serviceId: service.id }}
                          className="flex items-center justify-between rounded-xl px-3 py-2 text-left text-xs font-semibold text-foreground/80 hover:text-primary hover:bg-secondary/70 transition-all duration-200"
                        >
                          <span>{service.title}</span>
                          <span className="text-[10px] text-muted-foreground/60 font-mono tracking-widest">{service.num.split(" ")[0]}</span>
                        </Link>
                      ))}
                      <div className="border-t border-border/60 mt-1.5 pt-1.5">
                        <Link
                          to="/services"
                          className="flex items-center justify-between rounded-xl px-3 py-1.5 text-xs font-bold text-primary hover:bg-primary/10 transition-colors"
                        >
                          <span>All Services</span>
                          <span>→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            if (n.label === "Products") {
              return (
                <div key={n.to} className="relative group py-2">
                  <Link
                    to={n.to}
                    className="px-2 xl:px-3.5 py-1.5 text-[10px] xl:text-xs uppercase tracking-wider font-bold text-muted-foreground rounded-full transition-all duration-300 hover:text-foreground group-hover:text-foreground group-hover:bg-secondary/70 flex items-center gap-1 shrink-0"
                    activeProps={{ className: "text-primary-foreground bg-primary shadow-sm" }}
                  >
                    Products <ChevronDown className="h-3 w-3 opacity-60 group-hover:opacity-100 group-hover:rotate-180 transition-transform duration-200" />
                  </Link>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-72 rounded-2xl border border-border/80 bg-background/95 backdrop-blur-md p-2.5 shadow-industrial opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
                    <div className="grid gap-0.5">
                      {productsList.map((product) => (
                        <Link
                          key={product.id}
                          to="/products/$productId"
                          params={{ productId: product.id }}
                          className="flex items-center justify-between rounded-xl px-3 py-2 text-left text-xs font-semibold text-foreground/80 hover:text-primary hover:bg-secondary/70 transition-all duration-200"
                        >
                          <span>{product.title}</span>
                          <span className="text-[9px] uppercase tracking-wider text-primary/80 bg-primary/5 border border-primary/10 rounded px-1.5 py-0.5 font-mono shrink-0 scale-90">{product.badge.split(":")[0]}</span>
                        </Link>
                      ))}
                      <div className="border-t border-border/60 mt-1.5 pt-1.5">
                        <Link
                          to="/products"
                          className="flex items-center justify-between rounded-xl px-3 py-1.5 text-xs font-bold text-primary hover:bg-primary/10 transition-colors"
                        >
                          <span>All Products Catalog</span>
                          <span>→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={n.to}
                to={n.to}
                className="px-2 xl:px-3.5 py-1.5 text-[10px] xl:text-xs uppercase tracking-wider font-bold text-muted-foreground rounded-full transition-all duration-300 hover:text-foreground hover:bg-secondary/70 shrink-0"
                activeProps={{ className: "text-primary-foreground bg-primary shadow-sm" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions (Visible on lg screens and wider) */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-4 shrink-0">
          
          {/* Phone Link (Icon only on lg, full number on xl) */}
          <a
            href="tel:+919848125106"
            className="flex xl:hidden h-10 w-10 items-center justify-center rounded-full bg-secondary/80 border border-border text-foreground hover:text-primary hover:bg-secondary transition-all duration-300 shadow-sm shrink-0"
            aria-label="Call us"
          >
            <Phone className="h-4 w-4" />
          </a>
          <a
            href="tel:+919848125106"
            className="hidden xl:flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-foreground hover:text-primary transition-colors whitespace-nowrap shrink-0"
          >
            <Phone className="h-4 w-4 text-primary shrink-0" />
            +91 98481 25106
          </a>

          {/* Theme Toggle Switcher */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="grid h-10 w-10 place-items-center rounded-full bg-secondary/80 border border-border text-foreground hover:text-primary hover:bg-secondary transition-all duration-300 shadow-sm cursor-pointer shrink-0"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          {/* Get a Quote Button */}
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 xl:px-5 py-2 xl:py-2.5 text-[10px] xl:text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-industrial hover:scale-[1.02] hover:opacity-95 active:scale-[0.99] transition-all duration-300 cursor-pointer whitespace-nowrap shrink-0"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile/Tablet Controls (Visible on screens below lg) */}
        <div className="flex lg:hidden items-center gap-3">
          {/* Theme Toggle Switcher */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="grid h-9 w-9 place-items-center rounded-xl bg-secondary/80 border border-border text-foreground hover:text-primary hover:bg-secondary transition-all duration-300 shadow-sm cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          
          <button
            className="inline-flex items-center justify-center rounded-xl border border-border p-2 text-foreground hover:bg-secondary transition-colors"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-lg animate-rise">
          <div className="container-x py-6 flex flex-col gap-2">
            {nav.map((n) => {
              if (n.label === "Services") {
                return (
                  <div key={n.to} className="flex flex-col">
                    <div className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-secondary transition-all duration-200">
                      <Link
                        to={n.to}
                        onClick={() => setOpen(false)}
                        className="text-sm font-semibold text-foreground/80 hover:text-foreground"
                        activeProps={{ className: "text-primary font-bold" }}
                      >
                        Services
                      </Link>
                      <button 
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="p-1.5 hover:bg-border/30 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ChevronDown className={`h-4 w-4 transform transition-transform duration-200 ${mobileServicesOpen ? "rotate-180 text-primary" : ""}`} />
                      </button>
                    </div>
                    {mobileServicesOpen && (
                      <div className="pl-6 pr-4 py-1.5 flex flex-col gap-1 border-l border-primary/20 ml-6 mt-1 animate-rise">
                        {servicesList.map((service) => (
                          <Link
                            key={service.id}
                            to="/services/$serviceId"
                            params={{ serviceId: service.id }}
                            onClick={() => setOpen(false)}
                            className="py-2 text-xs text-muted-foreground hover:text-primary transition-colors font-medium"
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              if (n.label === "Products") {
                return (
                  <div key={n.to} className="flex flex-col">
                    <div className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-secondary transition-all duration-200">
                      <Link
                        to={n.to}
                        onClick={() => setOpen(false)}
                        className="text-sm font-semibold text-foreground/80 hover:text-foreground"
                        activeProps={{ className: "text-primary font-bold" }}
                      >
                        Products
                      </Link>
                      <button 
                        onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                        className="p-1.5 hover:bg-border/30 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ChevronDown className={`h-4 w-4 transform transition-transform duration-200 ${mobileProductsOpen ? "rotate-180 text-primary" : ""}`} />
                      </button>
                    </div>
                    {mobileProductsOpen && (
                      <div className="pl-6 pr-4 py-1.5 flex flex-col gap-1 border-l border-primary/20 ml-6 mt-1 animate-rise">
                        {productsList.map((product) => (
                          <Link
                            key={product.id}
                            to="/products/$productId"
                            params={{ productId: product.id }}
                            onClick={() => setOpen(false)}
                            className="py-2 text-xs text-muted-foreground hover:text-primary transition-colors font-medium"
                          >
                            {product.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm font-semibold text-foreground/80 hover:text-foreground hover:bg-secondary rounded-xl transition-all duration-200"
                  activeProps={{ className: "text-primary-foreground bg-primary" }}
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {n.label}
                </Link>
              );
            })}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-industrial hover:opacity-95 transition-opacity"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
