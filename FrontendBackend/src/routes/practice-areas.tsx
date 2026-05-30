import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Building2, Shield, Gavel, Scale, FileText, Award, Briefcase, Landmark, Users, Globe, BookOpen, Lock } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/practice-areas")({
  head: () => ({
    meta: [
      { title: "Practice Areas — Agarwal Law Associates" },
      { name: "description", content: "Comprehensive legal services across corporate, criminal, cyber, arbitration, banking, tax and constitutional law." },
      { property: "og:title", content: "Practice Areas — Agarwal Law" },
      { property: "og:description", content: "Full-service legal expertise across India's most complex domains." },
    ],
  }),
  component: PracticeAreas,
});

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

function PracticeAreas() {
  return (
    <PageLayout>
      <PageHero eyebrow="Our Expertise" title="Practice Areas." subtitle="A multi-disciplinary firm delivering depth and breadth across India's legal landscape." />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {areas.map((a, i) => (
              <motion.div
                key={a.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 6) * 0.06 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:border-accent hover:shadow-elegant"
              >
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-gold opacity-0 blur-3xl transition-opacity group-hover:opacity-20" />
                <div className="relative">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-gradient-gold group-hover:text-accent-foreground">
                    <a.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl text-primary">{a.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}