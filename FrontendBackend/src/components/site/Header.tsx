"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Scale } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/branches", label: "Our Branches" },
  { href: "/team", label: "Our Team" },
  { href: "/why-choose-us", label: "Why Choose Us" },
  { href: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ rotate: 15 }}
            className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground shadow-lg group-hover:bg-gold group-hover:text-primary transition-colors duration-300"
          >
            <Scale className="h-6 w-6" />
          </motion.div>
          <div className="leading-tight">
            <div className="font-display text-xl font-bold tracking-tight text-primary uppercase">
              Agarwal Law
            </div>
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold/80">
              Associates
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-xs font-bold uppercase tracking-widest transition-colors hover:text-gold ${
                pathname === item.href ? "text-gold" : "text-foreground/70"
              }`}
            >
              {item.label}
              {pathname === item.href && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 h-0.5 w-full bg-gold"
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/query"
            className="hidden rounded-full bg-gold px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-primary shadow-xl hover:scale-105 transition-transform lg:inline-flex"
          >
            Raise a Query
          </Link>

          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-background/50 backdrop-blur hover:bg-secondary transition-colors lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5 text-primary" /> : <Menu className="h-5 w-5 text-primary" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="mx-auto flex max-w-7xl flex-col px-8 py-8 gap-4">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`text-sm font-bold uppercase tracking-[0.2em] ${
                      pathname === item.href ? "text-gold" : "text-foreground/70"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  href="/query"
                  onClick={() => setOpen(false)}
                  className="mt-4 flex items-center justify-center rounded-2xl bg-gold py-4 text-sm font-bold uppercase tracking-widest text-primary shadow-xl"
                >
                  Raise a Query
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
