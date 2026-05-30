"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Award, Users, TrendingUp, Scale, Gavel, Building2, FileText, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { PageLayout } from "@/components/site/PageLayout";

// Professional Animation Variants
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
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  },
  viewport: { once: true }
};

export default function Index() {
  return (
    <PageLayout>
      {/* HERO SECTION */}
      <section className="relative isolate min-h-[90vh] flex items-center overflow-hidden bg-surface-dark text-surface-dark-foreground">
        <div className="absolute inset-0 -z-10">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src="/assets/hero-office.jpg"
            alt="Law office"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-dark via-surface-dark/90 to-transparent" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-gold">
              <Shield className="h-3 w-3" /> Established 1964
            </div>
            <h1 className="mt-8 font-display text-6xl leading-[1.1] md:text-8xl">
              Justice, <br />
              <span className="text-gold italic">Reimagined.</span>
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-surface-dark-foreground/80">
              Blending six decades of courtroom mastery with cutting-edge legal technology to solve the complexities of the digital age.
            </p>
            <div className="mt-12 flex flex-wrap gap-5">
              <Link
                href="/query"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gold px-8 py-4 text-sm font-bold text-primary shadow-2xl transition-all hover:scale-105"
              >
                <span className="relative z-10">Raise a Query</span>
                <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-medium transition-colors hover:bg-white/10"
              >
                The ALA Story
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden md:block self-center"
          >
            <div className="relative p-4">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-gold/40 to-transparent blur-2xl" />
              <img src="/assets/cyber-legal.jpg" alt="Cyber Law" className="relative rounded-2xl shadow-2xl grayscale-[0.2] hover:grayscale-0 transition-all duration-700" />

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-8 rounded-2xl border border-white/10 bg-surface-dark/95 p-6 backdrop-blur-xl shadow-elegant"
              >
                <div className="text-4xl font-display text-gold">98%</div>
                <div className="text-[10px] uppercase tracking-widest text-gold/60">Case Success Rate</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MEET OUR EXPERTS SECTION */}
      <section className="py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="text-center mb-20">
            <div className="text-[11px] uppercase tracking-[0.4em] text-accent font-bold">Leadership</div>
            <h2 className="mt-4 font-display text-5xl text-primary md:text-6xl">Our Partners</h2>
            <div className="mt-6 mx-auto h-1 w-20 bg-gold" />
          </motion.div>

          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="grid gap-8 md:grid-cols-3">
            {[
              { img: "/assets/lawyer-1.jpg", name: "E.C. Agarwal", role: "Founding Partner" },
              { img: "/assets/lawyer-2.jpg", name: "Mahesh Agarwal", role: "Managing Partner" },
              { img: "/assets/lawyer-3.jpg", name: "Rishi Agarwal", role: "Partner — Litigation" },
            ].map((lawyer) => (
              <motion.div key={lawyer.name} variants={fadeInUp} className="group relative overflow-hidden rounded-[2rem] aspect-[4/5] bg-surface-dark shadow-xl">
                <img src={lawyer.img} alt={lawyer.name} className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 p-8">
                   <div className="flex items-center gap-2 mb-2">
                       <ShieldCheck className="h-3 w-3 text-gold" />
                       <span className="text-[9px] uppercase tracking-widest text-gold font-bold">{lawyer.role}</span>
                    </div>
                  <h3 className="font-display text-2xl text-white uppercase">{lawyer.name}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-16 text-center">
            <Link href="/team" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:text-gold transition-colors">
              Meet the full team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="relative z-10 -mt-10 border-y border-border bg-card/80 backdrop-blur-md">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="mx-auto grid max-w-7xl gap-8 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            { icon: Award, value: "5,000+", label: "Cases Won" },
            { icon: Users, value: "2,500+", label: "Clients Served" },
            { icon: TrendingUp, value: "98%", label: "Success Rate" },
            { icon: Building2, value: "8", label: "Branch Offices" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="flex items-center gap-5 group"
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <stat.icon className="h-6 w-6" />
              </div>
              <div>
                <div className="font-display text-4xl text-primary">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* PRACTICE AREAS */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 topo-pattern opacity-10" />
        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-[11px] uppercase tracking-[0.4em] text-accent font-bold">Expertise</div>
            <h2 className="mt-4 font-display text-5xl text-primary md:text-6xl">Practice Areas</h2>
            <div className="mt-6 mx-auto h-1 w-20 bg-gold" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[
              { icon: Building2, t: "Corporate & Insolvency", d: "High-stakes M&A, restructuring, and NCLT representation." },
              { icon: Shield, t: "Cyber & Tech Law", d: "Pioneering data protection and IT Act defense since the IT Act's inception." },
              { icon: Gavel, t: "Criminal Litigation", d: "Sophisticated defense strategies for white-collar and economic offences." },
              { icon: Scale, t: "Arbitration & ADR", d: "Domestic and international resolution without the courtroom delay." },
              { icon: FileText, t: "Banking & Finance", d: "Recovery, regulatory compliance, and debt restructuring expertise." },
              { icon: Award, t: "Constitutional Law", d: "Impactful writ petitions before the High Courts and Supreme Court." },
            ].map((p, i) => (
              <motion.div
                key={p.t}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group relative rounded-3xl border border-border bg-white p-10 transition-all hover:border-gold/50 hover:shadow-2xl"
              >
                <div className="mb-8 grid h-14 w-14 place-items-center rounded-2xl bg-secondary text-primary group-hover:bg-gold group-hover:text-primary transition-colors duration-500">
                  <p.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-3xl text-primary">{p.t}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
                <div className="mt-8 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-gold opacity-0 group-hover:opacity-100 transition-all">
                  Learn More <ArrowRight className="h-3 w-3" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-surface-dark py-32 text-surface-dark-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[3rem] bg-gradient-to-br from-gold/20 to-transparent p-12 md:p-24 border border-white/5 text-center"
          >
            <h2 className="font-display text-5xl md:text-7xl">Secure your <span className="text-gold italic">legal future</span> today.</h2>
            <p className="mt-8 mx-auto max-w-2xl text-lg text-surface-dark-foreground/70">
              Our partners are ready to discuss your matter with the confidentiality and expertise it deserves.
            </p>
            <div className="mt-12">
              <Link href="/contact" className="inline-flex items-center gap-3 rounded-full bg-gold px-12 py-5 text-sm font-bold text-primary hover:scale-105 transition-transform">
                Get Started Now <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
