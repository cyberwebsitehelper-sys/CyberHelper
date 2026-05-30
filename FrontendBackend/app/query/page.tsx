"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { z } from "zod";
import { Send, CheckCircle2, Clock, Search, ShieldCheck, ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const schema = z.object({
  clientName: z.string().trim().min(2, "Required").max(100),
  mobile: z.string().trim().regex(/^[0-9+\- ]{7,15}$/, "Invalid mobile"),
  bankName: z.string().trim().max(100).optional().or(z.literal("")),
  accountNo: z.string().trim().max(30).optional().or(z.literal("")),
  ifsc: z.string().trim().max(15).optional().or(z.literal("")),
  accountType: z.enum(["private-limited", "proprietorship", "opc", "personal"]),
  entityName: z.string().trim().max(150).optional().or(z.literal("")),
  remarks: z.string().trim().max(1000).optional().or(z.literal("")),
});

type FormData = z.infer<typeof schema>;

const initial: FormData = {
  clientName: "",
  mobile: "",
  bankName: "",
  accountNo: "",
  ifsc: "",
  accountType: "personal",
  entityName: "",
  remarks: "",
};

export default function QueryPage() {
  const [form, setForm] = useState<FormData>(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const update = <K extends keyof FormData>(k: K, v: FormData[K]) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: "" }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const map: Record<string, string> = {};
      for (const issue of result.error.issues) {
        map[issue.path[0] as string] = issue.message;
      }
      setErrors(map);
      return;
    }
    setSubmitted(true);
  };

  return (
    <PageLayout>
      <PageHero
        eyebrow="Case intake"
        title="Raise a Query."
        subtitle="Share your matter details confidentially. Our intake team will perform a conflict check and revert within 24–72 working hours."
      />

      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 topo-pattern opacity-5" />

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[2fr_1fr]">
          {/* FORM SIDE */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="rounded-[3rem] border border-border bg-white p-10 md:p-16 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
                <ShieldCheck className="h-64 w-64 text-primary" />
            </div>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-16 text-center relative z-10"
                >
                  <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-gold/10 text-gold border border-gold/20 shadow-inner">
                    <CheckCircle2 className="h-12 w-12" />
                  </div>
                  <h2 className="mt-10 font-display text-5xl text-primary">Query Received.</h2>
                  <p className="mt-4 text-muted-foreground font-display text-xl italic">Reference: <span className="font-mono text-gold not-italic font-bold">ALA-{Date.now().toString().slice(-8)}</span></p>
                  <p className="mt-8 max-w-md mx-auto text-lg leading-relaxed text-muted-foreground">
                    Your information has been encrypted and sent to our senior partners. We will respond via your provided mobile within 72 hours.
                  </p>
                  <button
                    onClick={() => { setForm(initial); setSubmitted(false); }}
                    className="mt-12 rounded-full border border-border px-10 py-4 text-sm font-bold hover:bg-secondary transition-all"
                  >
                    Submit New Matter
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={onSubmit}
                  className="space-y-10 relative z-10"
                >
                  <div>
                    <h2 className="font-display text-4xl text-primary">Intake Information</h2>
                    <div className="mt-4 h-1 w-12 bg-gold" />
                  </div>

                  <div className="grid gap-8 sm:grid-cols-2">
                    <Field label="Full Name *" error={errors.clientName}>
                      <input value={form.clientName} onChange={(e) => update("clientName", e.target.value)} className={inputCls} placeholder="As per official ID" />
                    </Field>
                    <Field label="Mobile Number *" error={errors.mobile}>
                      <input value={form.mobile} onChange={(e) => update("mobile", e.target.value)} className={inputCls} placeholder="+91 ..." />
                    </Field>
                    <Field label="Bank Name" error={errors.bankName}>
                      <input value={form.bankName} onChange={(e) => update("bankName", e.target.value)} className={inputCls} />
                    </Field>
                    <Field label="Account Number" error={errors.accountNo}>
                      <input value={form.accountNo} onChange={(e) => update("accountNo", e.target.value)} className={inputCls} />
                    </Field>
                    <Field label="IFSC Code" error={errors.ifsc}>
                      <input value={form.ifsc} onChange={(e) => update("ifsc", e.target.value.toUpperCase())} className={inputCls} />
                    </Field>
                    <Field label="Account Type *" error={errors.accountType}>
                      <select value={form.accountType} onChange={(e) => update("accountType", e.target.value as FormData["accountType"])} className={inputCls}>
                        <option value="personal">Personal</option>
                        <option value="proprietorship">Proprietorship</option>
                        <option value="opc">OPC</option>
                        <option value="private-limited">Private Limited</option>
                      </select>
                    </Field>
                    <div className="sm:col-span-2">
                      <Field label="Entity Name" error={errors.entityName}>
                        <input value={form.entityName} onChange={(e) => update("entityName", e.target.value)} className={inputCls} placeholder="Company / firm name (if applicable)" />
                      </Field>
                    </div>
                    <div className="sm:col-span-2">
                      <Field label="Matter Remarks" error={errors.remarks}>
                        <textarea value={form.remarks} onChange={(e) => update("remarks", e.target.value)} className={`${inputCls} min-h-[160px] resize-none`} placeholder="Briefly describe the legal assistance required..." />
                      </Field>
                    </div>
                  </div>

                  <button type="submit" className="group inline-flex items-center gap-3 rounded-full bg-gold px-12 py-5 text-sm font-bold text-primary shadow-xl hover:scale-105 transition-all">
                    Submit Query <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* SIDEBAR SIDE */}
          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="rounded-[2.5rem] bg-surface-dark p-10 text-surface-dark-foreground shadow-elegant relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <Clock className="h-20 w-20" />
              </div>
              <h3 className="font-display text-3xl">Response SLA</h3>
              <p className="mt-6 text-lg text-surface-dark-foreground/70 leading-relaxed">
                Initial conflict checks and partner review are completed within <span className="text-gold font-bold">24 to 72 working hours</span>.
              </p>
            </div>

            <div className="rounded-[2.5rem] border border-border bg-white p-10 shadow-sm group hover:border-gold/30 transition-all">
              <Search className="h-8 w-8 text-gold" />
              <h3 className="mt-6 font-display text-2xl text-primary">Case Status</h3>
              <p className="mt-2 text-sm text-muted-foreground">Enter your tracking reference ID</p>
              <div className="mt-6 flex flex-col gap-3">
                <input
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="ALA-XXXXXXXX"
                    className={inputCls}
                />
                <button className="rounded-xl bg-primary py-3 text-sm font-bold text-white hover:bg-primary/90 transition-colors">
                  Verify Status
                </button>
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-border bg-secondary/30 p-10">
              <ShieldCheck className="h-8 w-8 text-primary" />
              <h3 className="mt-6 font-display text-2xl text-primary">Confidentiality</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                All submissions are protected by attorney-client privilege. Your data is encrypted and accessible only by the assigned legal team.
              </p>
            </div>
          </motion.aside>
        </div>
      </section>
    </PageLayout>
  );
}

const inputCls = "w-full rounded-2xl border border-border bg-white px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-gold focus:outline-none focus:ring-4 focus:ring-gold/10 transition-all";

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-primary/60 ml-1">{label}</label>
      {children}
      {error && <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="text-xs font-bold text-destructive ml-1">{error}</motion.p>}
    </div>
  );
}
