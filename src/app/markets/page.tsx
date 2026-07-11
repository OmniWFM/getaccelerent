import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Markets",
  description:
    "Accelerent operates focused markets, each maturing toward one exclusive partner across 50–60 industry segments.",
};

const markets = [
  { city: "Baltimore", note: "Founding market" },
  { city: "Washington, D.C.", note: "Established" },
  { city: "Philadelphia", note: "Established" },
  { city: "Dallas", note: "Growing" },
  { city: "Atlanta", note: "Growing" },
  { city: "Your city", note: "Expansion opportunity" },
];

export default function Markets() {
  return (
    <>
      <PageHero
        eyebrow="Markets"
        title="Focused markets. Exclusive seats."
        subtitle="Each market matures toward one exclusive partner across 50–60 distinct industry segments — ensuring nearly every relevant industry is represented."
      />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {markets.map((m, i) => (
              <Reveal key={m.city} delay={i * 80}>
                <div className="group relative overflow-hidden rounded-2xl border border-navy/10 bg-paper p-8 transition-all hover:-translate-y-1 hover:border-gold hover:shadow-xl hover:shadow-navy/5">
                  <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gold/10 transition-transform group-hover:scale-150" />
                  <h3 className="relative text-2xl font-semibold text-navy">{m.city}</h3>
                  <p className="relative mt-2 text-sm uppercase tracking-wider text-gold">{m.note}</p>
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
              Bringing Accelerent to a new market?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
              We expand deliberately, one segment at a time. If your industry
              seat is still open in your market, let's talk.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-block rounded-full bg-gold px-8 py-4 font-semibold text-navy transition-transform hover:scale-105"
            >
              Check availability
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
