import type { ReactNode } from "react";
import { motion } from "framer-motion";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface-dark py-24 text-surface-dark-foreground">
      <div className="absolute inset-0 topo-pattern opacity-10" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {eyebrow && (
            <div className="text-xs uppercase tracking-[0.3em] text-gold">{eyebrow}</div>
          )}
          <h1 className="mt-4 font-display text-6xl leading-none md:text-7xl">{title}</h1>
          {subtitle && (
            <p className="mt-6 max-w-2xl text-lg text-surface-dark-foreground/75">{subtitle}</p>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
}