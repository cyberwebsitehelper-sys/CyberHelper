"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
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
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  },
  viewport: { once: true }
};

export default function Contact() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Get in touch"
        title="Contact Us."
        subtitle="Our team is dedicated to providing timely and clear communication. We typically respond within 24 to 72 working hours."
      />

      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 topo-pattern opacity-5" />

        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-2"
          >
            {[
              {
                t: "Our Office",
                c: "Ground Floor, Mercantile House, 15 Kasturba Gandhi Marg, New Delhi 110001",
                icon: MapPin,
                tag: "Headquarters"
              },
              {
                t: "Our Chamber",
                c: "48 Lawyers Chamber, Supreme Court of India, Tilak Marg, New Delhi",
                icon: MapPin,
                tag: "Supreme Court"
              },
            ].map((card, i) => (
              <motion.div
                key={card.t}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="group relative rounded-[2.5rem] border border-border bg-white p-12 shadow-sm transition-all hover:border-gold/50 hover:shadow-2xl"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="inline-flex items-center gap-2 rounded-full bg-surface-dark px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] text-gold font-bold">
                    <card.icon className="h-3 w-3" /> {card.tag}
                  </div>
                </div>

                <h3 className="font-display text-4xl text-primary">{card.t}</h3>
                <p className="mt-6 text-xl text-foreground/80 leading-relaxed font-display italic">"{card.c}"</p>

                <div className="mt-10 pt-10 border-t border-border space-y-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    <div className="h-10 w-10 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-gold group-hover:text-primary">
                      <Phone className="h-4 w-4" />
                    </div>
                    <span className="font-medium">+91 11 4000 0000</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    <div className="h-10 w-10 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-gold group-hover:text-primary">
                      <Mail className="h-4 w-4" />
                    </div>
                    <span className="font-medium">contact@agarwallaw.in</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="h-10 w-10 rounded-xl bg-secondary flex items-center justify-center">
                      <Clock className="h-4 w-4" />
                    </div>
                    <span>Mon–Sat, 10:00 AM – 7:00 PM</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-surface-dark py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 mx-auto max-w-4xl px-6"
        >
          <div className="text-[11px] uppercase tracking-[0.4em] text-gold font-bold mb-6">Confidential Intake</div>
          <h2 className="font-display text-5xl md:text-7xl text-white">Have a specific <br /> <span className="text-gold italic">legal query?</span></h2>
          <p className="mt-8 text-xl text-white/60 max-w-2xl mx-auto">Submit your case details securely. Our team will perform a conflict check and revert promptly.</p>
          <div className="mt-12">
            <Link
              href="/query"
              className="inline-flex items-center gap-3 rounded-full bg-gold px-12 py-5 text-sm font-bold text-primary hover:scale-105 transition-transform shadow-2xl"
            >
              Raise a Query <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </section>
    </PageLayout>
  );
}
