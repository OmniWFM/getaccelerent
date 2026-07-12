import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Accelerent is a Business Development Platform that brings decision-makers and their sales teams together to build the relationships that generate new business.",
};

const DIFFERENT = [
  {
    t: "No competition",
    d: "One company from each industry — category exclusivity is the foundation of the platform.",
  },
  {
    t: "Like-minded CEOs",
    d: "Engage with leaders who run real companies and share your growth ambitions.",
  },
  {
    t: "No card-swapping",
    d: "No meet and greets to simply exchange business cards — every environment is structured for outcomes.",
  },
];

const SUPPORT = [
  "We develop a strategy with you — and hold you accountable to it.",
  "You and your sales team will be well prepared before every environment.",
  "We have the structure and tools to help you measure the results of your efforts.",
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Accelerent"
        title="Built to generate new business."
      />

      {/* PLATFORM SPLIT */}
      <section className="bg-paper py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 md:grid-cols-2">
            <Reveal>
              <h2 className="font-display font-normal leading-[1.1] text-ink" style={{ fontSize: "clamp(30px, 3.6vw, 46px)" }}>
                A Business Development Platform — not another association.
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <div>
                <p className="text-lg leading-relaxed text-ink/70">
                  Accelerent is a Business Development Platform that brings
                  decision-makers and their sales teams together with other
                  decision-makers and their sales teams to build new relationships.
                  Represented in a given market, our Partners can be assured there is
                  no shortage of other companies — and relationships — to help them
                  generate new business.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-ink/70">
                  Our clients increase sales by partnering with each other, because
                  each client has connections to other valuable decision-makers. That
                  is why we call our clients Partners.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHY WE'RE DIFFERENT — BAND */}
      <section className="bg-band py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="eyebrow text-gold">Why We&apos;re Different</p>
          </Reveal>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {DIFFERENT.map((c, i) => (
              <Reveal key={c.t} delay={i * 120}>
                <div className="border-t-2 border-navy pt-8">
                  <h3 className="font-display font-normal text-2xl text-ink">{c.t}</h3>
                  <p className="mt-4 leading-relaxed text-ink/60">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT & ACCOUNTABILITY — PAPER SPLIT */}
      <section className="bg-paper py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 md:grid-cols-2">
            <Reveal>
              <div>
                <p className="eyebrow text-gold">Support &amp; Accountability</p>
                <h2 className="mt-6 font-display font-normal leading-[1.1] text-ink" style={{ fontSize: "clamp(30px, 3.6vw, 46px)" }}>
                  A strategy, a prepared team, and measurable results.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div>
                {SUPPORT.map((s, i) => (
                  <div
                    key={i}
                    className={`flex gap-6 py-7 ${i > 0 ? "border-t border-hair" : ""}`}
                  >
                    <span className="font-display font-normal text-gold" style={{ fontSize: "26px" }}>
                      0{i + 1}
                    </span>
                    <p className="text-lg leading-relaxed text-ink/80">{s}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
