"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, ShieldCheck } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";

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
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  },
  viewport: { once: true }
};

const leaders = [
  { img: "/assets/lawyer-1.jpg", name: "E.C. Agarwal", role: "Founding Partner", bio: "60+ years of legal practice. A pioneer of modern corporate and constitutional law in India." },
  { img: "/assets/lawyer-2.jpg", name: "Mahesh Agarwal", role: "Managing Partner", bio: "Heads the corporate and insolvency practice with three decades of landmark litigation experience." },
  { img: "/assets/lawyer-3.jpg", name: "Rishi Agarwal", role: "Partner — Litigation", bio: "Specializes in complex dispute resolution and international arbitration proceedings." },
];

const associates = [
  { name: "Ankur Saigal", role: "Senior Associate", dept: "Corporate" },
  { name: "Rajeev Kumar", role: "Senior Associate", dept: "Criminal" },
  { name: "Manu Krishnan", role: "Associate Partner", dept: "Insolvency" },
  { name: "Priya Sharma", role: "Cyber Law Lead", dept: "Technology" },
  { name: "Arjun Mehta", role: "Tax & Regulatory", dept: "Finance" },
  { name: "Neha Verma", role: "Banking & Finance", dept: "Lending" },
];

export default function Team() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Leadership"
        title="Distinguished Minds."
        subtitle="A multi-generational collective of legal experts dedicated to the highest standards of advocacy."
      />

      {/* PARTNERS SECTION */}
      <section className="relative py-32 bg-background overflow-hidden">
        <div className="absolute inset-0 topo-pattern opacity-5" />
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <div className="text-[11px] uppercase tracking-[0.4em] text-accent font-bold">Partners</div>
            <h2 className="mt-4 font-display text-5xl text-primary md:text-6xl">Firm Leadership</h2>
            <div className="mt-6 mx-auto h-1 w-20 bg-gold" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid gap-12 md:grid-cols-3"
          >
            {leaders.map((l, i) => (
              <motion.div
                key={l.name}
                variants={fadeInUp}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-[2.5rem] bg-surface-dark shadow-2xl aspect-[3/4]">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    src={l.img}
                    alt={l.name}
                    className="h-full w-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
                  />

                  {/* Glass Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Socials */}
                  <div className="absolute right-6 top-6 flex flex-col gap-3 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                    <a href="#" className="grid h-10 w-10 place-items-center rounded-full bg-gold text-primary shadow-lg hover:bg-white transition-colors">
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a href="#" className="grid h-10 w-10 place-items-center rounded-full bg-gold text-primary shadow-lg hover:bg-white transition-colors">
                      <Mail className="h-4 w-4" />
                    </a>
                  </div>

                  {/* Info */}
                  <div className="absolute inset-x-0 bottom-0 p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-2 mb-2">
                       <ShieldCheck className="h-4 w-4 text-gold" />
                       <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold">{l.role}</span>
                    </div>
                    <h3 className="font-display text-3xl tracking-wide text-white uppercase">{l.name}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-3">
                      {l.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ASSOCIATES - MODERN GRID */}
      <section className="bg-surface-dark py-32 text-surface-dark-foreground relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="text-[11px] uppercase tracking-[0.4em] text-gold font-bold">Legal Talent</div>
            <h2 className="mt-4 font-display text-5xl text-white">Associate Partners</h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {associates.map((a, i) => (
              <motion.div
                key={a.name}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm group hover:border-gold/30 transition-all"
              >
                <div className="flex items-center gap-5">
                  <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 font-display text-3xl text-gold border border-gold/10">
                    {a.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-gold/60 font-bold">{a.dept}</div>
                    <h4 className="font-display text-2xl text-white mt-1">{a.name}</h4>
                    <div className="text-xs text-gray-400 mt-1">{a.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
