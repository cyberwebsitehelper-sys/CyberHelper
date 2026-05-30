"use client";

import Link from "next/link";
import { Linkedin, Youtube, Mail, Phone, Scale, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/5 bg-surface-dark text-surface-dark-foreground relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-gold/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold text-primary shadow-lg transition-transform group-hover:rotate-12">
                <Scale className="h-6 w-6" />
              </div>
              <div>
                <div className="font-display text-2xl font-bold tracking-tight uppercase leading-none">Agarwal Law</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold/80 mt-1">Associates</div>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-surface-dark-foreground/60 max-w-xs">
              Redefining legal excellence through six decades of courtroom mastery and modern innovation. Trusted partners for India's most complex challenges.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Youtube, href: "#" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ y: -3 }}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 hover:bg-gold hover:text-primary transition-colors"
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl text-gold mb-8 uppercase tracking-widest text-[11px] font-bold">The Firm</h4>
            <ul className="space-y-4 text-sm text-surface-dark-foreground/60">
              {[
                { href: "/about", label: "Our Story" },
                { href: "/team", label: "Our Team" },
                { href: "/why-choose-us", label: "The Advantage" },
                { href: "/branches", label: "Presence" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="group flex items-center gap-2 hover:text-gold transition-colors">
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="font-display text-xl text-gold mb-8 uppercase tracking-widest text-[11px] font-bold">Expertise</h4>
            <ul className="space-y-4 text-sm text-surface-dark-foreground/60">
              <li><span className="hover:text-gold transition-colors cursor-default">Corporate & Insolvency</span></li>
              <li><span className="hover:text-gold transition-colors cursor-default">Cyber & Tech Law</span></li>
              <li><span className="hover:text-gold transition-colors cursor-default">Criminal Litigation</span></li>
              <li><span className="hover:text-gold transition-colors cursor-default">Arbitration & ADR</span></li>
              <li><span className="hover:text-gold transition-colors cursor-default">Banking & Finance</span></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-display text-xl text-gold mb-8 uppercase tracking-widest text-[11px] font-bold">Contact</h4>
            <ul className="space-y-6 text-sm text-surface-dark-foreground/60">
              <li className="flex items-start gap-4">
                <div className="h-8 w-8 shrink-0 rounded-lg bg-white/5 flex items-center justify-center border border-white/5">
                  <Mail className="h-4 w-4 text-gold" />
                </div>
                <span className="hover:text-white transition-colors">contact@agarwallaw.in</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="h-8 w-8 shrink-0 rounded-lg bg-white/5 flex items-center justify-center border border-white/5">
                  <Phone className="h-4 w-4 text-gold" />
                </div>
                <span className="hover:text-white transition-colors">+91 11 4000 0000</span>
              </li>
              <li className="pt-4 border-t border-white/5">
                <Link href="/terms" className="text-[10px] uppercase tracking-widest font-bold hover:text-gold transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 bg-black/20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 text-[10px] font-bold uppercase tracking-[0.2em] text-surface-dark-foreground/40 sm:flex-row">
          <div className="flex items-center gap-4">
             <span>© {new Date().getFullYear()} Agarwal Law Associates.</span>
             <div className="h-1 w-1 rounded-full bg-gold/40" />
             <span>All rights reserved.</span>
          </div>
          <div className="flex items-center gap-8">
            <span className="text-gold/50 italic font-display lowercase tracking-normal text-sm font-normal">SLA: 24–72 working hours response.</span>
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-white/60 hover:text-gold transition-colors"
            >
              Back to Top <ArrowUpRight className="h-3 w-3 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
