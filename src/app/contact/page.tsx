import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Find out whether your industry seat is still open. Start a conversation with the Accelerent team.",
};

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your market."
        subtitle="Category exclusivity is limited to one partner per segment. Tell us about your business and we'll let you know if your seat is still open."
      />

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2">
          <Reveal>
            <form className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-navy">First name</label>
                  <input type="text" className="w-full rounded-lg border border-navy/15 px-4 py-3 outline-none focus:border-gold" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-navy">Last name</label>
                  <input type="text" className="w-full rounded-lg border border-navy/15 px-4 py-3 outline-none focus:border-gold" />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-navy">Company</label>
                <input type="text" className="w-full rounded-lg border border-navy/15 px-4 py-3 outline-none focus:border-gold" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-navy">Work email</label>
                <input type="email" className="w-full rounded-lg border border-navy/15 px-4 py-3 outline-none focus:border-gold" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-navy">Industry &amp; market</label>
                <input type="text" placeholder="e.g. Commercial Insurance — Dallas" className="w-full rounded-lg border border-navy/15 px-4 py-3 outline-none focus:border-gold" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-navy">How can we help?</label>
                <textarea rows={4} className="w-full rounded-lg border border-navy/15 px-4 py-3 outline-none focus:border-gold" />
              </div>
              <button
                type="submit"
                className="rounded-full bg-navy px-8 py-4 font-semibold text-white transition-colors hover:bg-gold hover:text-navy"
              >
                Send inquiry
              </button>
            </form>
          </Reveal>

          <Reveal delay={150}>
            <div className="rounded-3xl bg-navy p-10 text-white">
              <h3 className="text-2xl font-semibold">Prefer to reach out directly?</h3>
              <p className="mt-4 text-white/70">
                Our team responds to every partner inquiry personally.
              </p>
              <div className="mt-8 space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-wider text-gold">Email</p>
                  <p className="mt-1 text-lg">partners@getaccelerent.com</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider text-gold">Phone</p>
                  <p className="mt-1 text-lg">(410) 555-0170</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider text-gold">Existing partner?</p>
                  <p className="mt-1 text-lg">Sign in through the Partner Portal.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
