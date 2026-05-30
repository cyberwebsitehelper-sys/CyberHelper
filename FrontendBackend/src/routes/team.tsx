import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";
import lawyer1 from "@/assets/lawyer-1.jpg";
import lawyer2 from "@/assets/lawyer-2.jpg";
import lawyer3 from "@/assets/lawyer-3.jpg";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team — Agarwal Law Associates" },
      { name: "description", content: "Meet our distinguished partners and associates leading Agarwal Law Associates across India." },
      { property: "og:title", content: "Our Team — Agarwal Law" },
      { property: "og:description", content: "Leadership and legal expertise across India." },
    ],
  }),
  component: Team,
});

const leaders = [
  { img: lawyer1, name: "E.C. Agarwal", role: "Founding Partner", bio: "60+ years of legal practice. Pioneer of modern corporate law in India." },
  { img: lawyer2, name: "Mahesh Agarwal", role: "Managing Partner", bio: "Heads the corporate, M&A and insolvency practice with 30+ years of experience." },
  { img: lawyer3, name: "Rishi Agarwal", role: "Partner — Litigation", bio: "Leads the firm's dispute resolution and arbitration practice." },
];

const associates = [
  { name: "Ankur Saigal", role: "Senior Associate" },
  { name: "Rajeev Kumar", role: "Senior Associate" },
  { name: "Manu Krishnan", role: "Associate Partner" },
  { name: "Priya Sharma", role: "Cyber Law Lead" },
  { name: "Arjun Mehta", role: "Tax & Regulatory" },
  { name: "Neha Verma", role: "Banking & Finance" },
];

function Team() {
  return (
    <PageLayout>
      <PageHero eyebrow="Leading with purpose" title="Our Team." subtitle="A diverse legal team bringing seasoned veterans and young talents together." />

      <section className="relative py-24 topo-pattern">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <div className="text-xs uppercase tracking-[0.3em] text-accent">Partners</div>
            <h2 className="mt-3 font-display text-5xl text-primary">Our Leaders</h2>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {leaders.map((l, i) => (
              <motion.div
                key={l.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl bg-surface-dark shadow-elegant">
                  <img src={l.img} alt={l.name} className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105" width={768} height={960} loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-transparent to-transparent" />
                  <div className="absolute right-3 top-3 flex flex-col gap-2">
                    <a href="#" className="grid h-8 w-8 place-items-center rounded bg-surface-dark/80 text-gold backdrop-blur"><Linkedin className="h-4 w-4" /></a>
                    <a href="#" className="grid h-8 w-8 place-items-center rounded bg-surface-dark/80 text-gold backdrop-blur"><Mail className="h-4 w-4" /></a>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6 text-surface-dark-foreground">
                    <div className="font-display text-2xl tracking-wide">{l.name.toUpperCase()}</div>
                    <div className="text-xs uppercase tracking-[0.2em] text-gold">{l.role}</div>
                    <p className="mt-2 text-sm text-surface-dark-foreground/75 opacity-0 transition-opacity duration-300 group-hover:opacity-100">{l.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-dark py-24 text-surface-dark-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <div className="text-xs uppercase tracking-[0.3em] text-gold">Meet our expert team</div>
            <h2 className="mt-3 font-display text-5xl">Associate Partners</h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {associates.map((a, i) => (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-gold/40 hover:bg-white/10"
              >
                <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-gold font-display text-2xl text-accent-foreground">
                  {a.name.charAt(0)}
                </div>
                <div className="mt-4 font-display text-xl">{a.name}</div>
                <div className="text-xs uppercase tracking-wider text-gold">{a.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}