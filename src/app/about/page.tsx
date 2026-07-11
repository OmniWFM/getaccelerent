import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";

export const metadata: Metadata = {
  title: "About",
  description:
    "Accelerent is a business development platform that brings decision-makers and their sales teams together to build relationships that generate new business.",
};

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Accelerent"
        title="We are NOT a networking group."
        subtitle="We're a business development platform — very different from a chamber of commerce, industry association, or leads club."
      />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <p className="text-2xl font-medium leading-relaxed text-navy">
              Accelerent brings decision-makers and their sales teams together
              with other decision-makers and <em>their</em> sales teams to build
              new relationships.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-navy/70">
              Because so many companies and relationships are represented in a
              given market, our partners can be assured that there is never a
              shortage of connections to help them generate new business. Our
              clients increase sales by partnering with each other — each one
              holds connections to other valuable decision-makers. That's exactly
              why we call our clients partners.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            {[
              { n: <Counter end={275} suffix="+" />, l: "Clients" },
              { n: <Counter end={85} suffix="%" />, l: "Retention rate" },
              { n: <><Counter end={50} />–<Counter end={60} /></>, l: "Industry segments per market" },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="text-center">
                  <div className="text-4xl font-semibold text-navy md:text-5xl">{s.n}</div>
                  <p className="mt-3 text-sm uppercase tracking-wider text-navy/60">{s.l}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-24">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Why we're different</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              "No competition — one company from each industry",
              "Engage with like-minded CEOs",
              "No 'meet and greets' to simply exchange business cards",
            ].map((t, i) => (
              <Reveal key={t} delay={i * 100}>
                <div className="h-full rounded-2xl border border-white/10 bg-navy-light/40 p-6 text-white/80">
                  {t}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="mt-12 text-center">
              <Link
                href="/model"
                className="inline-block rounded-full bg-gold px-8 py-4 font-semibold text-navy transition-transform hover:scale-105"
              >
                See how the platform works
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
