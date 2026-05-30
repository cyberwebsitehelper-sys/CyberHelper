import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { Send, CheckCircle2, Clock, Search } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/query")({
  head: () => ({
    meta: [
      { title: "Raise a Query — Agarwal Law Associates" },
      { name: "description", content: "Submit your legal query. Our team responds within 24–72 working hours." },
      { property: "og:title", content: "Raise a Query" },
      { property: "og:description", content: "Confidential intake form for new legal matters." },
    ],
  }),
  component: QueryPage,
});

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

function QueryPage() {
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
    // For now, store locally — backend can be wired later
    setSubmitted(true);
  };

  return (
    <PageLayout>
      <PageHero eyebrow="Case intake" title="Raise a Query." subtitle="Share your matter details confidentially. Our team will assess and revert within 24–72 working hours." />

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[2fr_1fr]">
          {/* FORM */}
          <div className="rounded-2xl border border-border bg-card p-8 shadow-card md:p-10">
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="py-16 text-center">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gradient-gold text-accent-foreground">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h2 className="mt-6 font-display text-4xl text-primary">Query Received</h2>
                <p className="mt-3 text-muted-foreground">Reference: <span className="font-mono text-accent">ALA-{Date.now().toString().slice(-8)}</span></p>
                <p className="mt-2 max-w-md mx-auto text-sm text-muted-foreground">Our team will review your matter and respond within 24–72 working hours at the provided contact.</p>
                <button onClick={() => { setForm(initial); setSubmitted(false); }} className="mt-8 rounded-full border border-border px-6 py-2.5 text-sm hover:bg-secondary">Submit another query</button>
              </motion.div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6">
                <h2 className="font-display text-3xl text-primary">Client Intake Form</h2>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Client Name *" error={errors.clientName}>
                    <input value={form.clientName} onChange={(e) => update("clientName", e.target.value)} className={inputCls} placeholder="Full name" />
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
                    <Field label="Remarks" error={errors.remarks}>
                      <textarea value={form.remarks} onChange={(e) => update("remarks", e.target.value)} className={`${inputCls} min-h-[120px]`} placeholder="Brief description of the matter..." />
                    </Field>
                  </div>
                </div>

                <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-3.5 text-sm font-semibold text-accent-foreground shadow-card transition-transform hover:scale-105">
                  Submit Query <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>

          {/* SIDEBAR */}
          <aside className="space-y-6">
            <div className="rounded-2xl bg-gradient-dark p-7 text-surface-dark-foreground shadow-elegant">
              <Clock className="h-7 w-7 text-gold" />
              <h3 className="mt-4 font-display text-2xl">Response Time</h3>
              <p className="mt-2 text-sm text-surface-dark-foreground/75">Feedback delivered within 24 to 72 working hours, every time.</p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-7 shadow-card">
              <Search className="h-6 w-6 text-accent" />
              <h3 className="mt-4 font-display text-xl text-primary">Check Case Status</h3>
              <p className="mt-1 text-xs text-muted-foreground">Enter your reference ID</p>
              <div className="mt-4 flex gap-2">
                <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="ALA-XXXXXXXX" className={inputCls} />
                <button className="rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground hover:bg-primary/90">Check</button>
              </div>
              {searchTerm && (
                <p className="mt-3 text-xs text-muted-foreground">No record found for "{searchTerm}". Please verify your reference.</p>
              )}
            </div>

            <div className="rounded-2xl border border-border bg-card p-7 shadow-card">
              <h3 className="font-display text-xl text-primary">Confidentiality</h3>
              <p className="mt-2 text-sm text-muted-foreground">All information submitted is treated as privileged communication and held in strict confidence under attorney-client norms.</p>
            </div>
          </aside>
        </div>
      </section>
    </PageLayout>
  );
}

const inputCls = "w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-foreground/70">{label}</label>
      {children}
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}