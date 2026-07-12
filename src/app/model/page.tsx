import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SegmentRing from "@/components/SegmentRing";

export const metadata: Metadata = {
  title: "The Model",
  description:
    "We select the right companies in each market to create a focused platform where decision-makers build relationships that drive growth — one partner per industry.",
};

const STEPS = [
  {
    t: "Select",
    d: "We select the right companies in each market — one per industry segment, chosen for quality and reach.",
  },
  {
    t: "Connect",
    d: "Structured environments bring decision-makers and their sales teams face to face with their peers.",
  },
  {
    t: "Execute",
    d: "We develop a strategy with you, hold you accountable, and prepare your team before every environment.",
  },
  {
    t: "Measure",
    d: "Structure and tools to measure the results of your efforts — a steady flow of new business opportunities.",
  },
];

export default function Model() {
  return (
    <>
      <PageHero
        eyebrow="The Model"
        title="One market. One partner per industry."
        subtitle="We select the right companies in each market to create a focused platform where decision-makers build relationships that drive growth. With category exclusivity, Partners can tell their story and form meaningful connections — without competitive clutter."
      />

      {/* HOW IT WORKS — PAPER */}
      <section className="bg-paper py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="eyebrow text-gold">How It Works</p>
          </Reveal>
          <div className="mt-12 grid gap-y-12 md:grid-cols-4 md:gap-y-0">
            {STEPS.map((s, i) => (
              <Reveal key={s.t} delay={i * 120}>
                <div className="border-l border-hair pl-7">
                  <div className="font-display font-normal" style={{ fontSize: "44px", color: "rgba(30,37,54,0.22)" }}>
                    {i + 1}
                  </div>
                  <h3 className="mt-4 font-display font-normal text-2xl text-ink">{s.t}</h3>
                  <p className="mt-4 leading-relaxed text-ink/60">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AT MATURITY — NAVY SPLIT */}
      <section className="bg-navy py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 md:grid-cols-2 md:items-center">
            <Reveal>
              <div>
                <p className="eyebrow text-gold">At Maturity</p>
                <h2 className="mt-6 font-display font-normal leading-[1.1] text-paper" style={{ fontSize: "clamp(32px, 4vw, 52px)" }}>
                  50–60 exclusive segments per market.
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-[rgba(246,244,239,.7)]">
                  At maturity, each market includes one exclusive partner across 50–60
                  distinct industry segments. This breadth ensures that nearly every
                  relevant industry is represented — providing consistent access to
                  meaningful relationships and a steady flow of new business
                  opportunities.
                </p>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="mx-auto w-full max-w-[460px]">
                <div className="aspect-square w-full">
                  <SegmentRing />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
