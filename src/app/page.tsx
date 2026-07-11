import Link from "next/link";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-navy hero-grain">
        <div className="absolute inset-0">
          <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-navy-light/40 blur-3xl" />
        </div>
        <div className="relative mx-auto w-full max-w-7xl px-6 pt-32">
          <p className="mb-6 animate-fadeIn text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            The Business Development Platform
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
            Relationships that
            <span className="block text-gold">drive growth.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
            We select the right companies in each market to create a focused
            platform where decision-makers build meaningful relationships — with
            category exclusivity and none of the competitive clutter.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-gold px-8 py-4 font-semibold text-navy transition-transform hover:scale-105"
            >
              Become a Partner
            </Link>
            <Link
              href="/model"
              className="rounded-full border border-white/30 px-8 py-4 font-semibold text-white transition-colors hover:border-gold hover:text-gold"
            >
              How it works
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-paper py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { n: <Counter end={275} suffix="+" />, l: "Clients & counting" },
              { n: <Counter end={85} suffix="%" />, l: "Partner retention" },
              { n: <><Counter end={50} />–<Counter end={60} /></>, l: "Industry segments" },
              { n: <Counter end={1} />, l: "Partner per industry" },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="text-center">
                  <div className="text-4xl font-semibold text-navy md:text-5xl">
                    {s.n}
                  </div>
                  <p className="mt-3 text-sm uppercase tracking-wider text-navy/60">
                    {s.l}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MODEL */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 md:grid-cols-2 md:items-center">
            <Reveal>
              <div>
                <p className="gold-underline mb-6 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                  Our Model
                </p>
                <h2 className="text-4xl font-semibold leading-tight text-navy">
                  Simple by design. Powerful by exclusivity.
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-navy/70">
                  We select the right companies in each market to create a
                  focused platform where decision-makers build relationships
                  that drive growth. With category exclusivity, Partners can
                  tell their story and form meaningful connections — without
                  competitive clutter.
                </p>
                <Link
                  href="/model"
                  className="mt-8 inline-block font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-gold"
                >
                  Explore the platform →
                </Link>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="grid gap-4">
                {[
                  { t: "No competition", d: "One company from each industry — you own your category." },
                  { t: "Like-minded leaders", d: "Engage directly with CEOs, not business-card swaps." },
                  { t: "Support & accountability", d: "A strategy, the tools, and the structure to measure results." },
                ].map((c) => (
                  <div
                    key={c.t}
                    className="group rounded-2xl border border-navy/10 bg-paper p-6 transition-all hover:-translate-y-1 hover:border-gold hover:shadow-xl hover:shadow-navy/5"
                  >
                    <h3 className="text-lg font-semibold text-navy group-hover:text-gold">
                      {c.t}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy/60">
                      {c.d}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <h2 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
              Ready to own your industry in your market?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
              Category exclusivity is limited to one partner per segment. Let's
              talk about whether yours is still open.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-block rounded-full bg-gold px-10 py-4 font-semibold text-navy transition-transform hover:scale-105"
            >
              Start the conversation
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
