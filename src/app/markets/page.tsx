import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";

export const metadata: Metadata = {
  title: "Markets",
  description:
    "Each Accelerent market is built the same way: one exclusive partner across 50–60 industry segments, with a dedicated local team.",
};

const markets = [
  { region: "Mid-Atlantic", city: "Baltimore" },
  { region: "Mid-Atlantic", city: "Washington D.C." },
  { region: "Midwest", city: "Kansas City" },
  { region: "Midwest", city: "Indianapolis" },
  { region: "Midwest", city: "Milwaukee" },
  { region: "Southwest", city: "Phoenix" },
];

export default function Markets() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy pt-52 pb-28">
        <div className="mx-auto max-w-6xl px-6">
          <p className="eyebrow text-gold">MARKETS</p>
          <h1 className="font-display mt-6 text-paper" style={{ fontSize: "clamp(48px,7vw,84px)", lineHeight: 1.02 }}>
            A platform in every market we serve.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed" style={{ color: "rgba(246,244,239,.7)" }}>
            Each Accelerent market is built the same way: one exclusive partner across 50–60
            distinct industry segments, with a dedicated local team running the platform.
          </p>
        </div>
      </section>

      {/* Paper grid */}
      <section className="bg-paper py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {markets.map((m, i) => (
              <Reveal key={m.city} delay={i * 70}>
                <TiltCard>
                  <div className="h-full border border-hair bg-white p-9">
                    <p className="uppercase text-gold" style={{ fontSize: "11px", letterSpacing: "0.14em" }}>
                      {m.region}
                    </p>
                    <h3 className="font-display mt-3 text-navy" style={{ fontSize: "30px" }}>
                      {m.city}
                    </h3>
                    <div className="mt-5 flex items-center gap-3">
                      <span
                        className="inline-block rounded-full bg-gold"
                        style={{ width: "7px", height: "7px" }}
                      />
                      <span className="text-navy/60" style={{ fontSize: "14px" }}>
                        Active platform
                      </span>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
          <p className="mt-12 italic text-navy/45" style={{ fontSize: "13px" }}>
            Market list to be confirmed against Accelerent&apos;s current footprint.
          </p>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-navy-deep py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <h2 className="font-display text-paper" style={{ fontSize: "clamp(28px,3.4vw,44px)", lineHeight: 1.1 }}>
              Is your industry segment still open in your market?
            </h2>
            <div className="mt-10">
              <Link href="/contact" className="btn-gold">
                Check Availability
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
