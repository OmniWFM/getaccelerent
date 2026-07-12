import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import BoardroomScene from "@/components/art/BoardroomScene";

export const metadata: Metadata = {
  title: "Model",
  description:
    "Our model is simple: we select the right companies in each market to create a focused platform where decision-makers build relationships that drive growth.",
};

const wonderings = [
  "Have I established all of the valuable relationships needed to grow my business?",
  "Why does my team have trouble accessing the decision-makers we must engage to increase sales?",
  "Do I even know how successful my sales and marketing efforts really are?",
];

const support = [
  { t: "Strategy & accountability", d: "We develop a strategy with you and hold you accountable to it." },
  { t: "Always prepared", d: "You and your sales team walk into every environment ready to engage." },
  { t: "Measurable results", d: "We have the structure and tools to help you measure the results of your efforts." },
];

export default function Model() {
  return (
    <>
      <PageHero
        eyebrow="Our Model"
        title="Simple. Focused. Exclusive."
        subtitle="We select the right companies in each market to create a focused platform where decision-makers build relationships that drive growth."
      />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 md:grid-cols-2 md:items-center">
            <Reveal>
              <p className="text-xl leading-relaxed text-navy/80">
                With category exclusivity, Partners can tell their story and form
                meaningful connections — without competitive clutter. At maturity,
                each market includes one exclusive partner across 50–60 distinct
                industry segments, ensuring nearly every relevant industry is
                represented and giving Partners a steady flow of new business
                opportunities.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <div className="overflow-hidden rounded-3xl border border-navy/10 shadow-xl shadow-navy/10">
                <BoardroomScene className="aspect-[4/3] w-full transition-transform duration-700 hover:scale-105" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-paper py-24">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <p className="gold-underline mb-8 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              If you're like most business leaders, you're wondering…
            </p>
          </Reveal>
          <div className="space-y-4">
            {wonderings.map((w, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="flex gap-4 rounded-2xl border border-navy/10 bg-white p-6">
                  <span className="text-2xl font-semibold text-gold">0{i + 1}</span>
                  <p className="text-lg text-navy/80">{w}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="text-3xl font-semibold text-navy md:text-4xl">
              Support and accountability
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-navy/60">
              We don't just make introductions. We build the structure that turns
              relationships into revenue.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {support.map((s, i) => (
              <Reveal key={s.t} delay={i * 100}>
                <div className="group h-full rounded-2xl border border-navy/10 bg-paper p-8 transition-all hover:-translate-y-1 hover:border-gold hover:shadow-xl hover:shadow-navy/5">
                  <h3 className="text-xl font-semibold text-navy group-hover:text-gold">{s.t}</h3>
                  <p className="mt-3 leading-relaxed text-navy/60">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Business growth, by design
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
              We provide the platform for you to get to know like-minded business
              leaders — and for them to know you. With 275+ clients and an 85%
              retention rate, the model works.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-block rounded-full bg-gold px-8 py-4 font-semibold text-navy transition-transform hover:scale-105"
            >
              Become a Partner
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
