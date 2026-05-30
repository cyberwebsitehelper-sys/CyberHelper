import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Scale } from "lucide-react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/practice-areas", label: "Practice Areas" },
  { to: "/branches", label: "Our Branches" },
  { to: "/team", label: "Our Team" },
  { to: "/why-choose-us", label: "Why Choose Us" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-md bg-primary text-primary-foreground">
            <Scale className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg font-semibold tracking-wide text-primary">
              Agarwal Law
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Associates
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-accent"
              activeProps={{ className: "text-accent" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/query"
          className="hidden rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-card transition-transform hover:scale-105 lg:inline-flex"
        >
          Raise a Query
        </Link>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-md border border-border lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-foreground/80"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/query"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-gradient-gold px-5 py-3 text-center text-sm font-semibold text-accent-foreground"
            >
              Raise a Query
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}