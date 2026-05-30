"use client";

import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { DisclaimerModal } from "./DisclaimerModal";
import { motion, AnimatePresence } from "framer-motion";

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background selection:bg-gold selection:text-primary">
      <DisclaimerModal />
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
