import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Sparkles } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";
import handshake from "@/assets/handshake.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Agarwal Law Associates" },
      { name: "description", content: "Established in 1964, Agarwal Law Associates has grown into a leading full-service law firm serving major clients across India." },
      { property: "og:title", content: "About Agarwal Law Associates" },
      { property: "og:description", content: "Six decades of legal excellence, modern expertise, lasting client relationships." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="About the firm"
        title="A legacy of legal excellence."
        subtitle="Established in 1964 by Mr. E.C. Agrawala, Agarwal Law Associates has grown into a leading full-service law firm serving major clients across India."
      />

      {/* VISION & MISSION */}
      <section className="bg-surface-dark py-20 text-surface-dark-foreground">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <img src={handshake} alt="Partnership" className="rounded-2xl shadow-elegant" width={1280} height={960} loading="lazy" />
          </motion.div>
          <div className="space-y-12">
            {[
              { icon: Eye, t: "Our Vision", d: "To be the most trusted legal partner, creating strong and long-lasting relationships based on confidence and trust." },
              { icon: Target, t: "Our Mission", d: "To offer innovative legal solutions that meet your unique needs and to maintain an approachable and transparent relationship." },
            ].map((item, i) => (
              <motion.div
                key={item.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-gold text-accent-foreground">
                  <item.icon className="h-6 w-6" />
                </div>
                <h2 className="mt-5 font-display text-4xl">{item.t}</h2>
                <p className="mt-3 max-w-lg text-surface-dark-foreground/75">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="relative py-24">
        <div className="absolute inset-0 topo-pattern opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-center">
            <div className="text-xs uppercase tracking-[0.3em] text-accent">What we stand for</div>
            <h2 className="mt-3 font-display text-5xl text-primary">Our Values</h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Client-Centric", d: "By working closely with you as a team, we tailor our approach to meet your unique needs." },
              { t: "Approachable", d: "Our team is always open and ready to address any concerns you may have." },
              { t: "Trust", d: "We give full attention to every case while maintaining complete confidentiality." },
              { t: "Transparent", d: "We provide clear communication and honest advice at all times." },
            ].map((v, i) => (
              <motion.div
                key={v.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="font-display text-2xl tracking-wide text-primary">{v.t.toUpperCase()}</div>
                <p className="mt-3 text-sm text-muted-foreground">{v.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="bg-card py-24 border-y border-border">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Sparkles className="mx-auto h-8 w-8 text-accent" />
          <h2 className="mt-4 font-display text-4xl text-primary md:text-5xl">Company Overview</h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80">
            For over six decades, Agarwal Law Associates has been a name synonymous
            with legal excellence in India. With offices across major metros,
            a multi-disciplinary team of advocates, and a modern technology-driven
            practice, we serve corporations, financial institutions, and individuals
            with equal commitment.
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {[
              { v: "1964", l: "Founded" },
              { v: "8", l: "Offices Nationwide" },
              { v: "120+", l: "Legal Professionals" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-5xl text-accent">{s.v}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}