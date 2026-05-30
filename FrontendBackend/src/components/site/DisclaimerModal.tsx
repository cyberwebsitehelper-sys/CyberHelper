import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-lg bg-card shadow-elegant"
          >
            <div className="border-b border-border p-8 text-center">
              <h2 className="font-display text-4xl tracking-wider text-primary">
                DISCLAIMER
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                & Confirmation
              </p>
            </div>
            <div className="space-y-4 p-8 text-sm leading-relaxed text-foreground/85">
              <p>
                As per the rules of the Bar Council of India, we are not
                permitted to solicit work and advertise. By clicking on the{" "}
                <span className="font-semibold text-primary">"I AGREE"</span>{" "}
                button below, you acknowledge the following:
              </p>
              <ul className="space-y-3 pl-5">
                <li className="relative before:absolute before:-left-4 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent">
                  there has been no advertisement, personal communication,
                  solicitation, invitation or inducement of any sort whatsoever
                  from us or any of our members to solicit any work through this
                  website;
                </li>
                <li className="relative before:absolute before:-left-4 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent">
                  you wish to gain more information about us for your own
                  information and use;
                </li>
                <li className="relative before:absolute before:-left-4 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent">
                  the information about us is provided to you on your specific
                  request and any information obtained or materials downloaded
                  from this website is completely at your own volition and any
                  transmission, receipt or use of this site does not create any
                  lawyer-client relationship;
                </li>
                <li className="relative before:absolute before:-left-4 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent">
                  we are not liable for any consequence of any action taken by
                  you relying on the material / information provided on this
                  website.
                </li>
              </ul>
              <p>
                If you have any legal issues, you, in all cases, must seek
                independent legal advice.
              </p>
              <p className="text-xs text-muted-foreground">
                We use cookies to enhance your experience. By continuing to
                visit this website you agree to our use of cookies.
              </p>
            </div>
            <div className="flex flex-col-reverse gap-3 border-t border-border p-6 sm:flex-row sm:justify-center">
              <button
                onClick={disagree}
                className="rounded-full border border-border px-8 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                I Disagree
              </button>
              <button
                onClick={agree}
                className="rounded-full bg-gradient-gold px-10 py-3 text-sm font-semibold text-accent-foreground shadow-card transition-transform hover:scale-105"
              >
                I Agree — Proceed
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}