import { Link } from "@tanstack/react-router";
import { Linkedin, Youtube, Mail, Phone, Scale } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-dark text-surface-dark-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-md bg-gold text-primary">
              <Scale className="h-5 w-5" />
            </div>
            <div className="font-display text-xl">Agarwal Law Associates</div>
          </div>
          <p className="mt-4 text-sm text-surface-dark-foreground/70">
            Trusted legal partners, delivering excellence across India since 1964.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#" className="grid h-9 w-9 place-items-center rounded-full border border-white/15 hover:bg-white/10">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="#" className="grid h-9 w-9 place-items-center rounded-full border border-white/15 hover:bg-white/10">
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg text-gold">About</h4>
          <ul className="mt-4 space-y-2 text-sm text-surface-dark-foreground/75">
            <li><Link to="/about">Our Story</Link></li>
            <li><Link to="/team">Our Team</Link></li>
            <li><Link to="/why-choose-us">Why Choose Us</Link></li>
            <li><Link to="/branches">Our Branches</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-gold">Practice Areas</h4>
          <ul className="mt-4 space-y-2 text-sm text-surface-dark-foreground/75">
            <li>Corporate & Insolvency</li>
            <li>Cyber & Tech Law</li>
            <li>Criminal Litigation</li>
            <li>Arbitration & Mediation</li>
            <li>Banking & Finance</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-gold">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-surface-dark-foreground/75">
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-gold" /> contact@agarwallaw.in</li>
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-gold" /> +91 11 4000 0000</li>
            <li><Link to="/terms" className="underline-offset-4 hover:underline">Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-xs text-surface-dark-foreground/60 sm:flex-row">
          <span>© {new Date().getFullYear()} Agarwal Law Associates. All rights reserved.</span>
          <span>Feedback delivered within 24–72 working hours.</span>
        </div>
      </div>
    </footer>
  );
}