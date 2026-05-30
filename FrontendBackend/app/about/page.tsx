"use client";

import { motion } from "framer-motion";
import { History, Target, Users2, Scale, Award, Shield } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

export default function About() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Our Story"
        title="Legacy of Excellence."
        subtitle="Six decades of unwavering commitment to justice, evolving with the changing legal landscape since 1964."
      />

      <section className="py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-20 lg:grid-cols-2 items-center">
            <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
              <div className="text-[11px] uppercase tracking-[0.4em] text-accent font-bold mb-6">Foundations</div>
              <h2 className="font-display text-5xl text-primary mb-8">The ALA Philosophy</h2>
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Founded by E.C. Agarwal in 1964, our firm was built on the pillars of integrity, meticulous research, and aggressive advocacy. What began as a boutique litigation practice has grown into a multi-disciplinary legal powerhouse.
                </p>
                <p>
                  We believe that the law is not static; it is a living instrument of justice. Our approach combines the wisdom of seasoned veterans with the agility of tech-savvy legal minds to provide solutions that are both legally sound and commercially viable.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                <img
                  src="/assets/hero-office.jpg"
                  alt="Our Heritage"
                  className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-gold p-8 rounded-3xl shadow-xl hidden md:block">
                <div className="text-4xl font-display text-primary">60+</div>
                <div className="text-[10px] uppercase tracking-widest text-primary/70 font-bold">Years of Practice</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-32 bg-surface-dark text-surface-dark-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-20">
            <div className="text-[11px] uppercase tracking-[0.4em] text-gold font-bold">Principles</div>
            <h2 className="mt-4 font-display text-5xl">Our Core Values</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: Shield, t: "Uncompromising Integrity", d: "The trust of our clients is our most valuable asset. We maintain the highest ethical standards in every matter." },
              { icon: Target, t: "Strategic Precision", d: "We don't just react; we anticipate. Every move is calculated to achieve the best possible outcome for our clients." },
              { icon: Users2, t: "Client-Centricity", d: "Our clients' goals are our goals. We provide personalized attention and bespoke legal strategies." }
            ].map((v) => (
              <div key={v.t} className="p-10 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="w-14 h-14 bg-gold/20 rounded-2xl flex items-center justify-center mb-8">
                  <v.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-display text-2xl mb-4">{v.t}</h3>
                <p className="text-sm leading-relaxed text-surface-dark-foreground/60">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
