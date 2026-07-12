import Link from "next/link";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import NetworkHero from "@/components/NetworkHero";
import TiltCard from "@/components/TiltCard";

const CARDS = [
  {
    n: "01",
    t: "Category Exclusivity",
    d: "One company per industry. Your competitors are not in the room — your story stands alone in front of every decision-maker on the platform.",
  },
  {
    n: "02",
    t: "Decision-Maker Access",
    d: "We bring decision-makers and their sales teams together with other decision-makers and their teams — no gatekeepers, no cold outreach.",
  },
  {
    n: "03",
    t: "Support & Accountability",
    d: "We develop a strategy with you, prepare your team before every environment, and give you the structure and tools to measure results.",
  },
];

const WONDERINGS = [
  "Have I established all of the valuable relationships needed to grow my business?",
  "Why does my team have trouble accessing the decision-makers we must engage to increase sales?",
  "Do I even know how successful my sales and marketing efforts are?",
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-navy">
        <NetworkHero />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(13,21,40,0.75)_100%)]" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-28 pt-52">
          <Reveal>
            <p className="eyebrow text-gold">The Business Development Platform</p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 max-w-4xl font-display font-normal leading-[1.06] text-paper" style={{ fontSize: "clamp(48px, 9vw, 108px)" }}>
              Relationships that{" "}
              <em className="italic text-gold">drive growth.</em>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[rgba(246,244,239,.7)]">
              One exclusive partner per industry, in every market. Accelerent brings
              decision-makers and their sales teams together to build the
              relationships that generate new business — without competitive clutter.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/model" className="btn-gold">
                Explore the Model
              </Link>
              <Link href="/contact" className="btn-outline">
                Become a Partner
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-[rgba(246,244,239,.4)]">
          Scroll
        </div>
      </section>

      {/* STATS BAND */}
      <section className="border-b border-hair bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-y-12 md:grid-cols-4 md:gap-y-0">
            {[
              { n: <Counter end={275} suffix="+" />, l: "Partner Companies" },
              { n: <Counter end={85} suffix="%" />, l: "Partner Retention" },
              { n: "50–60", l: "Exclusive Industry Segments" },
              { n: "$10M–$20B", l: "Partner Revenue Range" },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="border-l border-hair pl-7">
                  <div className="font-display font-normal leading-none text-ink" style={{ fontSize: "64px" }}>
                    {s.n}
                  </div>
                  <p className="mt-4 text-sm uppercase tracking-wider text-ink/60">
                    {s.l}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OUR MODEL SPLIT */}
      <section className="bg-paper py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 md:grid-cols-2">
            <Reveal>
              <div>
                <p className="eyebrow text-gold">Our Model</p>
                <h2 className="mt-6 font-display font-normal leading-[1.1] text-ink" style={{ fontSize: "clamp(32px, 4vw, 52px)" }}>
                  A focused platform where decision-makers build relationships.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div>
                <p className="text-lg leading-relaxed text-ink/70">
                  Our model is simple. We select the right companies in each market to
                  create a focused platform where decision-makers build relationships
                  that drive growth.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-ink/70">
                  With category exclusivity, Partners can tell their story and form
                  meaningful connections — without competitive clutter.
                </p>
                <Link
                  href="/model"
                  className="mt-8 inline-block border-b-2 border-gold pb-1 font-medium text-ink hover:text-gold"
                >
                  How the model works →
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHY PARTNERS CHOOSE — BAND */}
      <section className="bg-band py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="eyebrow text-gold">Why Partners Choose Accelerent</p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {CARDS.map((c, i) => (
              <Reveal key={c.n} delay={i * 120}>
                <TiltCard className="h-full border border-hair bg-paper p-10">
                  <div className="font-display font-normal text-gold" style={{ fontSize: "26px" }}>
                    {c.n}
                  </div>
                  <h3 className="mt-6 font-display font-normal text-2xl text-ink">
                    {c.t}
                  </h3>
                  <p className="mt-4 leading-relaxed text-ink/60">{c.d}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TO BE CLEAR — NAVY STATEMENT */}
      <section className="bg-navy py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <p className="eyebrow text-gold">To Be Clear</p>
            <h2 className="mt-6 font-display font-normal leading-[1.1] text-paper" style={{ fontSize: "clamp(34px, 5vw, 60px)" }}>
              We are <em className="italic text-gold">not</em> a networking group.
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[rgba(246,244,239,.7)]">
              We are very different from a Chamber of Commerce, industry association, or
              leads club. No meet and greets to simply exchange business cards — a
              structured platform of like-minded CEOs, with a strategy and the
              accountability to execute it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SOUND FAMILIAR — PAPER SPLIT */}
      <section className="bg-paper py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 md:grid-cols-2">
            <Reveal>
              <div>
                <p className="eyebrow text-gold">Sound Familiar?</p>
                <h2 className="mt-6 font-display font-normal leading-[1.1] text-ink" style={{ fontSize: "clamp(32px, 4vw, 50px)" }}>
                  If you are like most business leaders, you are wondering—
                </h2>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div>
                {WONDERINGS.map((w, i) => (
                  <div
                    key={i}
                    className={`py-7 font-display font-normal text-ink/90 ${
                      i > 0 ? "border-t border-hair" : ""
                    }`}
                    style={{ fontSize: "25px", lineHeight: 1.3 }}
                  >
                    {w}
                  </div>
                ))}
                <Link
                  href="/about"
                  className="mt-6 inline-block border-b-2 border-gold pb-1 font-medium text-ink hover:text-gold"
                >
                  What we do →
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="py-28" style={{ backgroundColor: "#131C31" }}>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <h2 className="font-display font-normal leading-[1.1] text-paper" style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}>
              Own your industry segment in your market.
            </h2>
            <div className="mt-10">
              <Link href="/contact" className="btn-gold">
                Start the Conversation
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
