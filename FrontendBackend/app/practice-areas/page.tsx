"use client";

import { motion } from "framer-motion";
import { Building2, Shield, Gavel, Scale, FileText, Award, Briefcase, Landmark, Users, Globe, BookOpen, Lock, ArrowRight } from "lucide-react";
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
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  },
  viewport: { once: true }
};

const areas = [
  { icon: Building2, t: "Corporate & Insolvency", d: "M&A, restructuring, NCLT representation, joint ventures and corporate governance advisory." },
  { icon: Shield, t: "Cyber & Technology Law", d: "Data protection, IT Act matters, fintech compliance and cybercrime defence." },
  { icon: Gavel, t: "Criminal Litigation", d: "Trial and appellate work at all levels including white-collar defence and economic offences." },
  { icon: Scale, t: "Arbitration & Mediation", d: "Domestic and international arbitration, ADR proceedings and complex dispute resolution." },
  { icon: FileText, t: "Banking & Finance", d: "Lending, recovery, DRT/SARFAESI proceedings and regulatory compliance." },
  { icon: Award, t: "Constitutional & Public Law", d: "Writ petitions, PILs and high-stakes constitutional matters before High Courts and Supreme Court." },
  { icon: Briefcase, t: "Commercial Litigation", d: "Complex commercial disputes, contract enforcement and recovery." },
  { icon: Landmark, t: "Tax Law", d: "Direct and indirect tax advisory, GST, transfer pricing and tax litigation." },
  { icon: Users, t: "Employment & Labour", d: "Workplace policies, industrial disputes, compliance and HR advisory." },
  { icon: Globe, t: "Cross-Border Transactions", d: "FDI, FEMA, international trade and cross-border M&A advisory." },
  { icon: BookOpen, t: "Intellectual Property", d: "Trademarks, patents, copyright protection and IP litigation." },
  { icon: Lock, t: "Regulatory Compliance", d: "SEBI, RBI, competition law and sector-specific regulatory matters." },
];

export default function PracticeAreas() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Specialization"
        title="Practice Areas."
        subtitle="A multi-disciplinary firm delivering depth and breadth across India's most complex legal domains."
      />

      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 topo-pattern opacity-5" />
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {areas.map((a, i) => (
              <motion.div
                key={a.t}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-[2.5rem] border border-border bg-white p-10 shadow-sm transition-all hover:border-gold/50 hover:shadow-2xl"
              >
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gold/5 blur-3xl transition-opacity group-hover:opacity-20" />

                <div className="relative">
                  <div className="mb-8 grid h-16 w-16 place-items-center rounded-2xl bg-secondary text-primary group-hover:bg-gold group-hover:text-primary transition-all duration-500">
                    <a.icon className="h-8 w-8" />
                  </div>

                  <h3 className="font-display text-3xl tracking-tight text-primary">{a.t}</h3>
                  <div className="mt-4 h-0.5 w-10 bg-gold/30 group-hover:w-20 transition-all duration-500" />
                  <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{a.d}</p>

                  <div className="mt-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    Consultation <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FOOTER CALL TO ACTION */}
      <section className="bg-surface-dark py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl px-6"
        >
          <h2 className="font-display text-4xl md:text-5xl text-white">Need expert legal advice?</h2>
          <p className="mt-6 text-lg text-white/60">Our team of specialists is ready to handle your unique legal challenges.</p>
          <div className="mt-10">
            <button className="rounded-full bg-gold px-10 py-4 text-sm font-bold text-primary hover:scale-105 transition-transform shadow-xl">
              Request a Specialist
            </button>
          </div>
        </motion.div>
      </section>
    </PageLayout>
  );
}
