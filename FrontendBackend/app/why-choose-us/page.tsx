"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, Users, Trophy, Heart, Zap, ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  },
  viewport: { once: true }
};

const reasons = [
  { icon: Trophy, t: "Proven Track Record", d: "98% case success rate across 5,000+ matters spanning six decades of practice." },
  { icon: ShieldCheck, t: "Absolute Confidentiality", d: "Bank-grade security and watertight ethics safeguard every client matter." },
  { icon: Clock, t: "Rapid Response", d: "Initial feedback within 24–72 working hours — every query, every time." },
  { icon: Users, t: "Team of Specialists", d: "120+ legal professionals with deep expertise across 12 practice areas." },
  { icon: Heart, t: "Client-First Approach", d: "Tailored strategies — never one-size-fits-all advice." },
  { icon: Zap, t: "Tech-Enabled Practice", d: "Modern legal-tech tooling for case tracking, e-discovery and faster turnarounds." },
];

export default function WhyChoose() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="The ALA Advantage"
        title="Why Choose Us."
        subtitle="What makes Agarwal Law Associates the trusted choice for India's most demanding legal matters."
      />

      <section className="relative py-32 bg-background overflow-hidden">
        <div className="absolute inset-0 topo-pattern opacity-5" />

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {reasons.map((r, i) => (
              <motion.div
                key={r.t}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-[3rem] bg-surface-dark p-10 text-surface-dark-foreground shadow-elegant border border-white/5 transition-all duration-500"
              >
                {/* Decorative Glow */}
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/10 blur-3xl transition-all group-hover:bg-gold/30" />

                <div className="relative z-10">
                  <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gold/15 text-gold border border-gold/20 mb-8 transition-transform duration-500 group-hover:scale-110">
                    <r.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-display text-3xl tracking-tight mb-4">{r.t}</h3>
                  <div className="h-0.5 w-10 bg-gold/30 mb-6 group-hover:w-16 transition-all duration-500" />
                  <p className="text-lg leading-relaxed text-surface-dark-foreground/70 font-display italic">
                    {r.d}
                  </p>
                </div>

                <div className="mt-10 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-gold opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                   Our Commitment <ArrowRight className="h-3 w-3" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="bg-card py-32 border-y border-border">
        <div className="mx-auto max-w-4xl px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
                <h2 className="font-display text-5xl md:text-6xl text-primary">Ready to experience <br /> <span className="text-gold italic">Legal Excellence?</span></h2>
                <p className="mt-8 text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Join the thousands of clients who have trusted us with their most critical legal challenges over the last 60 years.
                </p>
                <div className="mt-12 flex flex-wrap justify-center gap-6">
                    <Link href="/query" className="rounded-full bg-gold px-12 py-5 text-sm font-bold text-primary shadow-2xl hover:scale-105 transition-transform">
                        Start Your Query
                    </Link>
                    <Link href="/contact" className="rounded-full border border-border px-12 py-5 text-sm font-bold text-primary hover:bg-secondary transition-all">
                        Find an Office
                    </Link>
                </div>
            </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
