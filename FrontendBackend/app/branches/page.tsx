"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
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

export default function Branches() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Presence"
        title="Our Network."
        subtitle="Eight strategically located offices delivering uniformly excellent legal service across the Indian subcontinent."
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
            {branches.map((b, i) => (
              <motion.div
                key={b.city}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className={`group relative overflow-hidden rounded-[2.5rem] border p-10 shadow-sm transition-all duration-500 ${
                  b.primary
                    ? "border-transparent bg-surface-dark text-surface-dark-foreground shadow-elegant"
                    : "border-border bg-white hover:border-gold/50 hover:shadow-2xl"
                }`}
              >
                {b.primary && (
                    <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-gold/10 blur-3xl" />
                )}

                <div className="flex items-start justify-between relative z-10">
                  <div>
                    <div className={`text-[10px] uppercase tracking-[0.2em] font-bold ${b.primary ? "text-gold" : "text-accent"}`}>
                      {b.primary ? "Headquarters" : "Regional Office"}
                    </div>
                    <h3 className={`mt-4 font-display text-4xl tracking-tight ${b.primary ? "" : "text-primary"}`}>{b.city}</h3>
                  </div>
                  <div className={`grid h-14 w-14 place-items-center rounded-2xl ${b.primary ? "bg-gold/20 text-gold" : "bg-primary/5 text-primary group-hover:bg-gold group-hover:text-primary"} transition-all duration-500`}>
                    <MapPin className="h-7 w-7" />
                  </div>
                </div>

                <div className={`mt-8 pt-8 border-t ${b.primary ? "border-white/10" : "border-border"} space-y-4 relative z-10`}>
                  <p className={`text-lg leading-relaxed font-display italic ${b.primary ? "text-surface-dark-foreground/80" : "text-foreground/80"}`}>
                    "{b.addr}"
                  </p>
                  <div className="pt-4 space-y-3">
                    <div className={`flex items-center gap-4 text-sm ${b.primary ? "text-surface-dark-foreground/60" : "text-muted-foreground group-hover:text-primary"} transition-colors`}>
                        <Phone className="h-4 w-4" />
                        <span className="font-medium">{b.phone}</span>
                    </div>
                    <div className={`flex items-center gap-4 text-sm ${b.primary ? "text-surface-dark-foreground/60" : "text-muted-foreground group-hover:text-primary"} transition-colors`}>
                        <Mail className="h-4 w-4" />
                        <span className="font-medium">{b.email}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* MAP PLACEHOLDER / GLOBAL REACH */}
      <section className="bg-surface-dark py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10 mx-auto max-w-4xl px-6"
        >
          <Globe className="mx-auto h-16 w-16 text-gold mb-8 opacity-20" />
          <h2 className="font-display text-5xl md:text-6xl text-white">Seamless <span className="text-gold italic">Legal Coverage</span></h2>
          <p className="mt-8 text-xl text-white/60 max-w-2xl mx-auto">
            Our interconnected offices allow for swift legal intervention across any major jurisdiction in India within hours.
          </p>
        </motion.div>
      </section>
    </PageLayout>
  );
}
