import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/branches")({
  head: () => ({
    meta: [
      { title: "Our Branches — Agarwal Law Associates" },
      { name: "description", content: "Agarwal Law Associates has branch offices across major Indian cities." },
      { property: "og:title", content: "Our Branches" },
      { property: "og:description", content: "Serving clients from offices across India." },
    ],
  }),
  component: Branches,
});

const branches = [
  { city: "New Delhi", addr: "Ground Floor, Mercantile House, 15 Kasturba Gandhi Marg", phone: "+91 11 4000 0000", email: "delhi@agarwallaw.in", primary: true },
  { city: "Mumbai", addr: "12th Floor, Maker Chambers IV, Nariman Point", phone: "+91 22 6000 0000", email: "mumbai@agarwallaw.in" },
  { city: "Bengaluru", addr: "UB City, Vittal Mallya Road", phone: "+91 80 4000 0000", email: "blr@agarwallaw.in" },
  { city: "Kolkata", addr: "Park Mansions, Park Street", phone: "+91 33 4000 0000", email: "kol@agarwallaw.in" },
  { city: "Chennai", addr: "Spencer Plaza, Anna Salai", phone: "+91 44 4000 0000", email: "chennai@agarwallaw.in" },
  { city: "Hyderabad", addr: "Cyber Towers, HITEC City", phone: "+91 40 4000 0000", email: "hyd@agarwallaw.in" },
  { city: "Ahmedabad", addr: "Iscon Centre, S.G. Highway", phone: "+91 79 4000 0000", email: "amd@agarwallaw.in" },
  { city: "Pune", addr: "ICC Trade Tower, Senapati Bapat Road", phone: "+91 20 4000 0000", email: "pune@agarwallaw.in" },
];

function Branches() {
  return (
    <PageLayout>
      <PageHero eyebrow="Pan-India presence" title="Our Branches." subtitle="Eight strategically located offices delivering uniformly excellent legal service across India." />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {branches.map((b, i) => (
              <motion.div
                key={b.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 6) * 0.06 }}
                className={`group relative overflow-hidden rounded-2xl border p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant ${
                  b.primary
                    ? "border-transparent bg-surface-dark text-surface-dark-foreground"
                    : "border-border bg-card"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className={`text-xs uppercase tracking-[0.2em] ${b.primary ? "text-gold" : "text-accent"}`}>
                      {b.primary ? "Head Office" : "Branch"}
                    </div>
                    <h3 className={`mt-2 font-display text-3xl ${b.primary ? "" : "text-primary"}`}>{b.city}</h3>
                  </div>
                  <div className={`grid h-10 w-10 place-items-center rounded-full ${b.primary ? "bg-gold/20 text-gold" : "bg-primary/10 text-primary"}`}>
                    <MapPin className="h-5 w-5" />
                  </div>
                </div>
                <div className={`mt-5 space-y-2 text-sm ${b.primary ? "text-surface-dark-foreground/75" : "text-muted-foreground"}`}>
                  <p>{b.addr}</p>
                  <p className="flex items-center gap-2"><Phone className="h-3.5 w-3.5" /> {b.phone}</p>
                  <p className="flex items-center gap-2"><Mail className="h-3.5 w-3.5" /> {b.email}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}