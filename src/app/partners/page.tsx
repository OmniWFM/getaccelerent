import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "From locally owned businesses to Fortune 100 firms, Accelerent partners span a broad spectrum of industries — with one exclusive partner per segment.",
};

const industries = [
  "Insurance", "Banking", "Construction", "Marketing",
  "Technology", "Real Estate", "Logistics", "Legal",
  "Accounting", "Healthcare", "Manufacturing", "Staffing",
];

export default function Partners() {
  return (
    <>
      <PageHero
        eyebrow="Our Partners"
        title="Middle market to Fortune 100."
        subtitle="Our partners represent a broad spectrum — from locally owned businesses around $10 million in revenue to Fortune 100 firms approaching $20 billion."
      />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <p className="text-xl leading-relaxed text-navy/80">
              Although most of our Partners are middle-market companies, they
              represent both public and private organizations across a wide range
              of industries — from insurance, banking, and construction to
              marketing, technology, and real estate.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-navy/70">
              At maturity, each market includes one exclusive partner across
              50–60 distinct industry segments. This breadth ensures that nearly
              every relevant industry is represented, giving our Partners
              consistent access to meaningful relationships and a steady flow of
              new business opportunities.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="gold-underline mb-10 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              A partner in nearly every industry
            </p>
          </Reveal>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {industries.map((ind, i) => (
              <Reveal key={ind} delay={i * 60}>
                <div className="rounded-xl border border-navy/10 bg-white px-5 py-6 text-center font-medium text-navy transition-all hover:-translate-y-1 hover:border-gold hover:text-gold hover:shadow-lg hover:shadow-navy/5">
                  {ind}
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-navy/50">
            …and 40+ more segments per mature market.
          </p>
        </div>
      </section>
    </>
  );
}
