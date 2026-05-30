import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Award, Users, TrendingUp, Scale, Gavel, Building2, FileText } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import heroOffice from "@/assets/hero-office.jpg";
import cyberLegal from "@/assets/cyber-legal.jpg";
import lawyer1 from "@/assets/lawyer-1.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Agarwal Law Associates — Trusted Legal Partners" },
      { name: "description", content: "Full-service law firm delivering excellence across corporate, cyber, criminal and civil law with a 98% case success rate." },
      { property: "og:title", content: "Agarwal Law Associates — Trusted Legal Partners" },
      { property: "og:description", content: "Decades of legal excellence. Modern expertise in cyber law, corporate, and litigation." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <PageLayout>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-surface-dark text-surface-dark-foreground">
        <div className="absolute inset-0 -z-10">
          <img src={heroOffice} alt="Law office" className="h-full w-full object-cover opacity-40" width={1920} height={1280} />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-dark via-surface-dark/85 to-surface-dark/40" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold">
              <Shield className="h-3.5 w-3.5" /> Est. 1964
            </div>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] md:text-7xl">
              Justice, <span className="text-gold italic">Reimagined</span> for the Digital Age.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-surface-dark-foreground/75">
              From cyber law to corporate insolvency, our seasoned advocates blend
              decades of courtroom expertise with modern legal technology.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/query"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-card transition-transform hover:scale-105"
              >
                Raise a Query <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium hover:bg-white/5"
              >
                About the Firm
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="relative">
              <img src={cyberLegal} alt="Cyber law" className="rounded-2xl shadow-elegant animate-float" width={1280} height={1280} />
              <div className="absolute -bottom-6 -left-6 rounded-xl border border-white/10 bg-surface-dark/90 p-5 backdrop-blur shadow-elegant">
                <div className="text-3xl font-display text-gold">98%</div>
                <div className="text-xs uppercase tracking-wider text-surface-dark-foreground/70">Case Success Rate</div>
              </div>
              <div className="absolute -right-4 top-8 rounded-xl border border-white/10 bg-surface-dark/90 p-5 backdrop-blur shadow-elegant">
                <div className="text-3xl font-display text-gold">60+</div>
                <div className="text-xs uppercase tracking-wider text-surface-dark-foreground/70">Years of Trust</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS / SUCCESS BAR */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Award, value: "5,000+", label: "Cases Won" },
            { icon: Users, value: "2,500+", label: "Clients Served" },
            { icon: TrendingUp, value: "98%", label: "Success Rate" },
            { icon: Building2, value: "8", label: "Branch Offices" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-gold text-accent-foreground">
                <stat.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display text-3xl text-primary">{stat.value}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRACTICE AREAS */}
      <section className="relative py-24">
        <div className="absolute inset-0 topo-pattern opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-center">
            <div className="text-xs uppercase tracking-[0.3em] text-accent">What we do</div>
            <h2 className="mt-3 font-display text-5xl text-primary">Practice Areas</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              A full-service firm with deep specialization across India's most complex legal domains.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Building2, t: "Corporate & Insolvency", d: "M&A, restructuring, NCLT representation and corporate governance." },
              { icon: Shield, t: "Cyber & Tech Law", d: "Data protection, IT Act matters, fintech compliance and cybercrime." },
              { icon: Gavel, t: "Criminal Litigation", d: "Trial and appellate work at all levels including white-collar defence." },
              { icon: Scale, t: "Arbitration & Mediation", d: "Domestic and international arbitration, ADR and dispute resolution." },
              { icon: FileText, t: "Banking & Finance", d: "Lending, recovery, DRT/SARFAESI and regulatory compliance." },
              { icon: Award, t: "Constitutional & Public Law", d: "Writs, PILs and high-stakes constitutional matters." },
            ].map((p, i) => (
              <motion.div
                key={p.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:border-accent hover:shadow-elegant"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-gradient-gold group-hover:text-accent-foreground">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-2xl text-primary">{p.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/practice-areas" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all">
              View all practice areas <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* LEADERSHIP CTA */}
      <section className="bg-surface-dark py-24 text-surface-dark-foreground">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div>
            <img src={lawyer1} alt="Founding partner" className="rounded-2xl shadow-elegant" width={768} height={960} loading="lazy" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold">Leadership</div>
            <h2 className="mt-3 font-display text-5xl">A legacy of <em className="text-gold">trust</em>.</h2>
            <p className="mt-6 text-lg text-surface-dark-foreground/75">
              "Our diverse legal team brings together seasoned veterans and young
              talents, letting us examine legal issues from multiple angles and
              find the best solutions for our clients."
            </p>
            <div className="mt-6">
              <div className="font-display text-xl text-gold">E.C. Agarwal</div>
              <div className="text-xs uppercase tracking-wider text-surface-dark-foreground/60">Founding Partner</div>
            </div>
            <Link to="/team" className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium hover:bg-white/5">
              Meet our team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
