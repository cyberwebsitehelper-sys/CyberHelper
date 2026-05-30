"use client";

import { motion } from "framer-motion";
import { Target, Eye, Sparkles, Shield, Award, Users } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";
import handshake from "@/assets/handshake.jpg";

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

export default function About() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Our Legacy"
        title="Sixty Years of Legal Mastery."
        subtitle="Since 1964, Agarwal Law Associates has stood as a beacon of integrity and excellence in the Indian legal landscape."
      />

      {/* VISION & MISSION - PROFESSIONAL SPLIT */}
      <section className="bg-surface-dark py-32 text-surface-dark-foreground overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gold/10 blur-2xl" />
            <img
              src={handshake.src || handshake}
              alt="Partnership"
              className="relative rounded-3xl shadow-2xl grayscale-[0.3] hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute -bottom-10 -right-10 hidden lg:block">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="rounded-full border border-gold/20 p-4 backdrop-blur-sm"
              >
                <div className="h-32 w-32 rounded-full border border-gold/40 flex items-center justify-center text-gold font-display text-sm tracking-widest text-center">
                  ESTD <br /> 1964
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="space-y-16"
          >
            {[
              {
                icon: Eye,
                t: "Our Vision",
                d: "To be the definitive legal partner for the digital age, setting global standards for integrity and innovative problem-solving."
              },
              {
                icon: Target,
                t: "Our Mission",
                d: "Empowering clients through bespoke legal strategies that prioritize speed, clarity, and uncompromising excellence."
              },
            ].map((item, i) => (
              <motion.div key={item.t} variants={fadeInUp}>
                <div className="flex items-center gap-6">
                  <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gold/10 text-gold border border-gold/20">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <h2 className="font-display text-4xl text-white">{item.t}</h2>
                    <div className="mt-2 h-0.5 w-12 bg-gold/50" />
                  </div>
                </div>
                <p className="mt-6 text-lg leading-relaxed text-surface-dark-foreground/70">{item.d}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* VALUES - GLASS CARDS */}
      <section className="relative py-32 bg-background">
        <div className="absolute inset-0 topo-pattern opacity-5" />
        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="text-center mb-20">
            <div className="text-[11px] uppercase tracking-[0.4em] text-accent font-bold">Foundation</div>
            <h2 className="mt-4 font-display text-5xl text-primary md:text-6xl">Core Values</h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              { icon: Shield, t: "Integrity", d: "We uphold the highest ethical standards, ensuring every action builds enduring trust." },
              { icon: Users, t: "Client-First", d: "Your goals are our pulse. We work as an extension of your team, always." },
              { icon: Sparkles, t: "Innovation", d: "Applying modern technology to centuries-old legal principles for faster results." },
              { icon: Award, t: "Excellence", d: "We don't just meet standards; we redefine them across every practice area." },
            ].map((v, i) => (
              <motion.div
                key={v.t}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group p-10 rounded-[2rem] border border-border bg-white shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="mb-8 grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl tracking-tight text-primary">{v.t}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* OVERVIEW STATS */}
      <section className="bg-card py-32 border-y border-border overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
            <Sparkles className="mx-auto h-12 w-12 text-gold animate-pulse" />
            <h2 className="mt-8 font-display text-5xl text-primary md:text-6xl">The Firm at a Glance</h2>
            <p className="mt-10 text-xl leading-relaxed text-muted-foreground italic">
              "We provide a sophisticated legal bridge between traditional courtroom advocacy and the fast-paced requirements of modern business."
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="mt-20 grid gap-12 sm:grid-cols-3"
          >
            {[
              { v: "1964", l: "Established" },
              { v: "08", l: "National Offices" },
              { v: "120+", l: "Legal Minds" },
            ].map((s) => (
              <motion.div key={s.l} variants={fadeInUp}>
                <div className="font-display text-7xl text-gold">{s.v}</div>
                <div className="mt-4 text-xs uppercase tracking-[0.3em] font-bold text-muted-foreground">{s.l}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
