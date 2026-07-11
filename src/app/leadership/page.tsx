import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "Accelerent's leadership team brings experience from Big Four accounting, investment banking, logistics, commercial real estate, national retail, and professional sports.",
};

const sectors = [
  "Big Four Accounting & Consulting",
  "Investment Banking",
  "Logistics",
  "Commercial Real Estate",
  "National Retail",
  "Professional Sports Sales & Marketing",
];

const firms = ["Arthur Andersen", "PricewaterhouseCoopers", "FedEx", "Merrill Lynch"];

function initials(seed: number) {
  const pairs = ["AM", "JR", "KL", "TS", "DW", "PH"];
  return pairs[seed % pairs.length];
}

export default function Leadership() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="Experience across every table."
        subtitle="Our leadership team brings a diverse range of experience — enabling our executives to understand the unique challenges across industries and help clients achieve their objectives."
      />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <p className="text-xl leading-relaxed text-navy/80">
              Our leadership team spans Big Four public accounting and consulting,
              investment banking, logistics, commercial real estate, national
              retail, and professional sports sales and marketing. Team members
              have held roles with firms such as Arthur Andersen,
              PricewaterhouseCoopers, FedEx, and Merrill Lynch.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="gold-underline mb-10 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Backgrounds that shape our approach
            </p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {sectors.map((s, i) => (
              <Reveal key={s} delay={i * 80}>
                <div className="flex h-full items-center gap-4 rounded-2xl border border-navy/10 bg-white p-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-navy text-sm font-semibold text-gold">
                    {initials(i)}
                  </div>
                  <p className="font-medium text-navy">{s}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Alumni of
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
              {firms.map((f) => (
                <span key={f} className="text-lg font-medium text-white/70">{f}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
