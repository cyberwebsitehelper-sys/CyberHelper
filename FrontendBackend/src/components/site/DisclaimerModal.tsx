"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, CheckCircle2 } from "lucide-react";

const STORAGE_KEY = "ala-disclaimer-ack";

export function DisclaimerModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const ack = window.sessionStorage.getItem(STORAGE_KEY);
    if (!ack) setOpen(true);
  }, []);

  const agree = () => {
    window.sessionStorage.setItem(STORAGE_KEY, "1");
    setOpen(false);
  };

  const disagree = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[2.5rem] bg-card shadow-2xl border border-border"
          >
            {/* Header with Icon */}
            <div className="border-b border-border p-10 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
              <div className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-2xl bg-gold/10 text-gold border border-gold/20">
                <ShieldAlert className="h-10 w-10" />
              </div>
              <h2 className="font-display text-4xl tracking-tight text-primary uppercase">
                Legal Disclaimer
              </h2>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground">
                Bar Council of India Compliance
              </p>
            </div>

            {/* Content with Custom Scrollbar */}
            <div className="p-10 space-y-6 text-sm leading-relaxed text-foreground/80 overflow-y-auto scrollbar-thin scrollbar-thumb-gold/20">
              <p className="font-medium text-primary">
                As per the rules of the Bar Council of India, we are not
                permitted to solicit work and advertise. By clicking on the{" "}
                <span className="text-gold font-bold italic">"I AGREE"</span>{" "}
                button, you acknowledge:
              </p>

              <ul className="space-y-4">
                {[
                  "There has been no advertisement, personal communication, or inducement of any sort from us to solicit work through this website.",
                  "You wish to gain information about us for your own use and information.",
                  "Information provided is at your specific request and any materials downloaded are completely at your own volition.",
                  "Use of this site does not create any lawyer-client relationship.",
                  "We are not liable for any consequence of any action taken by you relying on the material provided here."
                ].map((text, i) => (
                  <li key={i} className="flex gap-4">
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>

              <div className="rounded-2xl bg-secondary/50 p-6 border border-border mt-8">
                <p className="text-xs text-muted-foreground leading-relaxed italic">
                  Note: If you have any legal issues, you must seek independent legal advice. This website uses cookies to enhance your experience.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col-reverse gap-4 border-t border-border p-10 sm:flex-row sm:justify-center">
              <button
                onClick={disagree}
                className="rounded-full border border-border px-10 py-4 text-xs font-bold uppercase tracking-widest text-foreground transition-all hover:bg-secondary"
              >
                Exit Website
              </button>
              <button
                onClick={agree}
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gold px-12 py-4 text-xs font-bold uppercase tracking-widest text-primary shadow-xl hover:scale-105 transition-all"
              >
                I Agree & Proceed
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
