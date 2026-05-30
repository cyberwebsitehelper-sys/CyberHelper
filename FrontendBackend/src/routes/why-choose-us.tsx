import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ShieldCheck, Clock, Users, Trophy, Heart, Zap } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/why-choose-us")({
  head: () => ({
    meta: [
      { title: "Why Choose Us — Agarwal Law Associates" },
      { name: "description", content: "Six decades of trust, modern legal expertise, and an unwavering client-first commitment." },
      { property: "og:title", content: "Why Choose Agarwal Law" },
      { property: "og:description", content: "What sets us apart as your trusted legal partner." },
    ],
  }),
  component: WhyChoose,
});

const reasons = [
  { icon: Trophy, t: "Proven Track Record", d: "98% case success rate across 5,000+ matters spanning six decades of practice." },
  { icon: ShieldCheck, t: "Absolute Confidentiality", d: "Bank-grade security and watertight ethics safeguard every client matter." },
  { icon: Clock, t: "Rapid Response", d: "Initial feedback within 24–72 working hours — every query, every time." },
  { icon: Users, t: "Team of Specialists", d: "120+ legal professionals with deep expertise across 12 practice areas." },
  { icon: Heart, t: "Client-First Approach", d: "Tailored strategies — never one-size-fits-all advice." },
  { icon: Zap, t: "Tech-Enabled Practice", d: "Modern legal-tech tooling for case tracking, e-discovery and faster turnarounds." },
];

function WhyChoose() {
  return (
    <PageLayout>
      <PageHero eyebrow="The Agarwal Advantage" title="Why Choose Us." subtitle="What makes Agarwal Law Associates the trusted choice for India's most demanding legal matters." />
      <section className="relative py-24">
        <div className="absolute inset-0 topo-pattern opacity-20" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r, i) => (
              <motion.div
                key={r.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 6) * 0.08 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-dark p-7 text-surface-dark-foreground shadow-elegant"
              >
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/10 blur-3xl transition-all group-hover:bg-gold/30" />
                <div className="relative">
                  <div className="grid h-14 w-14 place-items-center rounded-xl bg-gold/15 text-gold">
                    <r.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl">{r.t}</h3>
                  <p className="mt-2 text-sm text-surface-dark-foreground/75">{r.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}