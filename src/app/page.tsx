import Link from "next/link";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import NetworkHero from "@/components/NetworkHero";
import TiltCard from "@/components/TiltCard";
import BoardroomScene from "@/components/art/BoardroomScene";
import PartnershipScene from "@/components/art/PartnershipScene";
import BoardTableScene from "@/components/art/BoardTableScene";

const INDUSTRIES = [
  "Insurance",
  "Banking",
  "Construction",
  "Marketing",
  "Technology",
  "Real Estate",
  "Logistics",
  "Legal",
  "Healthcare",
  "Manufacturing",
  "Accounting",
  "Energy",
];

export default function Home() {
  return (
    <>
      {/* HERO — interactive 3D node network over a committed boardroom scene */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-navy hero-grain">
        {/* committed SVG boardroom scene as the base layer (never expires) */}
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <BoardroomScene className="h-full w-full" />
        </div>
        {/* rotating conic aura */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full aura opacity-60" />
        {/* the 3D canvas */}
        <NetworkHero />
        {/* soft vignette + gradient so text stays readable over the canvas */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy via-navy/70 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pt-32">
          <p className="mb-6 animate-fadeIn text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            The Business Development Platform
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
            Relationships that
            <span className="block gradient-gold">drive growth.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
            We select the right companies in each market to create a focused
            platform where decision-makers build meaningful relationships —
            with category exclusivity and none of the competitive clutter.
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
              className="rounded-full border border-white/30 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-colors hover:border-gold hover:text-gold"
            >
              How it works
            </Link>
          </div>
          <p className="mt-16 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/40">
            <span className="inline-block h-8 w-px animate-pulse bg-gold/60" />
            Drag your cursor across the network
          </p>
        </div>
      </section>

      {/* INDUSTRY MARQUEE */}
      <section className="overflow-hidden border-y border-navy/10 bg-navy-dark py-6">
        <div className="marquee gap-12">
          {[...INDUSTRIES, ...INDUSTRIES].map((name, i) => (
            <span
              key={i}
              className="whitespace-nowrap text-lg font-medium uppercase tracking-widest text-white/40"
            >
              {name}
              <span className="ml-12 text-gold">◆</span>
            </span>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="relative bg-paper py-24 grid-lines">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { n: <Counter end={275} suffix="+" />, l: "Clients & counting" },
              { n: <Counter end={85} suffix="%" />, l: "Partner retention" },
              { n: <><Counter end={50} />–<Counter end={60} /></>, l: "Industry segments" },
              { n: <Counter end={1} />, l: "Partner per industry" },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 100}>
                <TiltCard className="rounded-2xl border border-navy/10 bg-white/70 p-6 text-center shadow-sm backdrop-blur">
                  <div className="text-4xl font-semibold text-navy md:text-5xl">
                    {s.n}
                  </div>
                  <p className="mt-3 text-sm uppercase tracking-wider text-navy/60">
                    {s.l}
                  </p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MODEL — with committed partnership scene */}
      <section className="scene bg-white py-28">
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
              <div className="overflow-hidden rounded-3xl border border-navy/10 shadow-xl shadow-navy/10">
                <PartnershipScene className="aspect-[4/3] w-full transition-transform duration-700 hover:scale-105" />
              </div>
            </Reveal>
          </div>

          <div className="mt-20 grid gap-16 md:grid-cols-2 md:items-center">
            <Reveal className="md:order-2">
              <div className="grid gap-4">
                {[
                  { t: "No competition", d: "One company from each industry — you own your category." },
                  { t: "Like-minded leaders", d: "Engage directly with CEOs, not business-card swaps." },
                  { t: "Support & accountability", d: "A strategy, the tools, and the structure to measure results." },
                ].map((c) => (
                  <TiltCard
                    key={c.t}
                    className="group rounded-2xl border border-navy/10 bg-paper p-6 hover:border-gold hover:shadow-xl hover:shadow-navy/5"
                  >
                    <h3 className="text-lg font-semibold text-navy group-hover:text-gold">
                      {c.t}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy/60">
                      {c.d}
                    </p>
                  </TiltCard>
                ))}
              </div>
            </Reveal>
            <Reveal delay={150} className="md:order-1">
              <div className="overflow-hidden rounded-3xl border border-navy/10 shadow-xl shadow-navy/10">
                <BoardTableScene className="aspect-[4/3] w-full transition-transform duration-700 hover:scale-105" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy py-28">
        <div className="pointer-events-none absolute -right-40 -top-20 h-[500px] w-[500px] rounded-full bg-gold/10 blur-3xl float" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <h2 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
              Ready to own your industry in your market?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
              Category exclusivity is limited to one partner per segment. Let&apos;s
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
