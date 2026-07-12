import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Accelerent Partners span a broad spectrum — from locally owned businesses to Fortune 100 firms, across every relevant industry.",
};

const chips = [
  "Insurance",
  "Banking",
  "Construction",
  "Marketing",
  "Technology",
  "Real Estate",
];

export default function Partners() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy pt-52 pb-28">
        <div className="mx-auto max-w-6xl px-6">
          <p className="eyebrow text-gold">PARTNERS</p>
          <h1 className="font-display mt-6 text-paper" style={{ fontSize: "clamp(48px,7vw,84px)", lineHeight: 1.02 }}>
            A broad spectrum, a single standard.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed" style={{ color: "rgba(246,244,239,.7)" }}>
            Although most of our Partners are middle-market companies, they represent a broad
            spectrum — from locally owned businesses with approximately $10 million in revenue to
            Fortune 100 firms approaching $20 billion.
          </p>
        </div>
      </section>

      {/* Paper split */}
      <section className="bg-paper py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 md:grid-cols-2 md:items-center">
            <Reveal>
              <div>
                <h2 className="font-display text-navy" style={{ fontSize: "clamp(30px,3.4vw,44px)", lineHeight: 1.08 }}>
                  Public and private. Every relevant industry.
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-navy/70">
                  Our Partners include both public and private companies, representing a wide range
                  of industries — from insurance, banking, and construction to marketing,
                  technology, and real estate.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="flex flex-wrap gap-3">
                {chips.map((c) => (
                  <span
                    key={c}
                    className="border border-hair px-5 py-2.5 uppercase text-navy/80"
                    style={{ fontSize: "13px", letterSpacing: "0.08em" }}
                  >
                    {c}
                  </span>
                ))}
                <span
                  className="border border-dashed border-hair px-5 py-2.5 uppercase text-navy/40"
                  style={{ fontSize: "13px", letterSpacing: "0.08em" }}
                >
                  + 50 more segments
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Band stats */}
      <section className="bg-band py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="grid gap-y-10 sm:grid-cols-3">
              {[
                { n: "275+", l: "Partner Companies" },
                { n: "85%", l: "Retention Rate" },
                { n: "1", l: "Partner Per Segment" },
              ].map((s) => (
                <div key={s.l} className="border-l border-hair pl-8">
                  <div className="font-display text-navy" style={{ fontSize: "58px", lineHeight: 1 }}>
                    {s.n}
                  </div>
                  <p className="mt-3 uppercase text-navy/55" style={{ fontSize: "13px", letterSpacing: "0.08em" }}>
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
