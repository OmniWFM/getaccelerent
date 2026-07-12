import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about your business and your market. We'll confirm whether your industry segment is still available.",
};

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy pt-52 pb-28">
        <div className="mx-auto max-w-6xl px-6">
          <p className="eyebrow text-gold">CONTACT</p>
          <h1 className="font-display mt-6 text-paper" style={{ fontSize: "clamp(48px,7vw,84px)", lineHeight: 1.02 }}>
            Start the conversation.
          </h1>
        </div>
      </section>

      {/* Paper split */}
      <section className="bg-paper py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 md:grid-cols-2">
            <Reveal>
              <div>
                <h2 className="font-display text-navy" style={{ fontSize: "clamp(28px,3.2vw,40px)", lineHeight: 1.1 }}>
                  Tell us about your business and your market.
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-navy/70">
                  We&apos;ll confirm whether your industry segment is still available and walk you
                  through how the platform works in your market.
                </p>

                <div className="mt-12">
                  <div className="border-t border-hair py-6">
                    <p className="uppercase text-gold" style={{ fontSize: "11px", letterSpacing: "0.14em" }}>
                      GENERAL INQUIRIES
                    </p>
                    <p className="mt-2 text-navy">info@accelerent.com</p>
                  </div>
                  <div className="border-t border-hair py-6">
                    <p className="uppercase text-gold" style={{ fontSize: "11px", letterSpacing: "0.14em" }}>
                      PARTNER SUPPORT
                    </p>
                    <p className="mt-2 text-navy">Through your market team or the Partner Portal</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
