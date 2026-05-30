import { createFileRoute } from "@tanstack/react-router";
import { Clock } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Agarwal Law Associates" },
      { name: "description", content: "Terms of engagement, response timelines, and conditions of use." },
      { property: "og:title", content: "Terms & Conditions" },
      { property: "og:description", content: "Engagement terms and response commitments." },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <PageLayout>
      <PageHero eyebrow="Legal" title="Terms & Conditions." subtitle="Conditions of use and our service commitments to every client." />
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 space-y-10">
          <div className="rounded-2xl bg-gradient-dark p-8 text-surface-dark-foreground shadow-elegant">
            <Clock className="h-7 w-7 text-gold" />
            <h2 className="mt-4 font-display text-3xl">Response Commitment</h2>
            <p className="mt-3 text-surface-dark-foreground/80">
              You will receive feedback on your submitted query within{" "}
              <span className="font-semibold text-gold">24 to 72 working hours</span>{" "}
              of submission. Working hours are defined as Monday–Saturday,
              10:00 AM to 7:00 PM IST, excluding public holidays.
            </p>
          </div>

          {[
            { t: "Bar Council Compliance", d: "All communications and information on this website strictly comply with the Bar Council of India rules. No content shall be construed as advertisement or solicitation." },
            { t: "No Attorney-Client Relationship", d: "Submission of a query through this website does not establish an attorney-client relationship until a formal engagement letter is signed by both parties." },
            { t: "Confidentiality", d: "All information shared with us is treated as privileged communication. We maintain strict confidentiality in accordance with professional ethics." },
            { t: "Limitation of Liability", d: "Agarwal Law Associates shall not be liable for any consequences arising out of actions taken solely on the basis of information published on this website." },
            { t: "Use of Cookies", d: "We use cookies to enhance your browsing experience. Continued use of this website constitutes consent to our cookie policy." },
            { t: "Modifications", d: "These terms may be updated from time to time. Continued use after changes constitutes acceptance of the revised terms." },
          ].map((s, i) => (
            <div key={s.t}>
              <h3 className="font-display text-2xl text-primary">{i + 1}. {s.t}</h3>
              <p className="mt-2 text-foreground/80">{s.d}</p>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}