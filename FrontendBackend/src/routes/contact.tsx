import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Agarwal Law Associates" },
      { name: "description", content: "Get in touch with Agarwal Law Associates. Offices across India." },
      { property: "og:title", content: "Contact Agarwal Law Associates" },
      { property: "og:description", content: "Reach our legal team — response within 24–72 working hours." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <PageLayout>
      <PageHero eyebrow="Get in touch" title="Contact Us." subtitle="We respond to every query within 24 to 72 working hours." />
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">
          {[
            { t: "Our Office", c: "Ground Floor, Mercantile House, 15 Kasturba Gandhi Marg, New Delhi 110001", icon: MapPin },
            { t: "Our Chamber", c: "48 Lawyers Chamber, Supreme Court of India, Tilak Marg, New Delhi", icon: MapPin },
          ].map((card) => (
            <div key={card.t} className="rounded-2xl border border-border bg-card p-8 shadow-card">
              <div className="inline-flex items-center gap-2 rounded-full bg-surface-dark px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold">
                <card.icon className="h-3.5 w-3.5" /> {card.t}
              </div>
              <p className="mt-5 text-lg text-foreground/85">{card.c}</p>
              <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /> +91 11 4000 0000</p>
                <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /> contact@agarwallaw.in</p>
                <p className="flex items-center gap-2"><Clock className="h-4 w-4 text-accent" /> Mon–Sat, 10:00 AM – 7:00 PM</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-4xl px-6 text-center">
          <h2 className="font-display text-4xl text-primary">Have a specific legal query?</h2>
          <p className="mt-3 text-muted-foreground">Submit your case details and our team will revert within 24–72 working hours.</p>
          <Link to="/query" className="mt-8 inline-flex rounded-full bg-gradient-gold px-8 py-3.5 text-sm font-semibold text-accent-foreground shadow-card transition-transform hover:scale-105">
            Raise a Query
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}