import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "Accelerent's leadership team brings experience across Big Four accounting, investment banking, logistics, commercial real estate, national retail, and professional sports.",
};

const team = [
  {
    initials: "AB",
    title: "Chief Executive Officer",
    bio: "Big Four public accounting and consulting background guiding platform strategy.",
  },
  {
    initials: "CD",
    title: "President",
    bio: "Investment banking veteran overseeing partner growth and market operations.",
  },
  {
    initials: "EF",
    title: "Chief Financial Officer",
    bio: "Former Big Four finance leader stewarding the company's financial discipline.",
  },
  {
    initials: "GH",
    title: "EVP Market Development",
    bio: "Logistics and national retail experience opening and scaling new markets.",
  },
  {
    initials: "IJ",
    title: "EVP Partner Success",
    bio: "Professional sports sales and marketing background driving partner outcomes.",
  },
  {
    initials: "KL",
    title: "Market President",
    bio: "Commercial real estate leader running a local platform end to end.",
  },
];

export default function Leadership() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy pt-52 pb-28">
        <div className="mx-auto max-w-6xl px-6">
          <p className="eyebrow text-gold">LEADERSHIP</p>
          <h1 className="font-display mt-6 text-paper" style={{ fontSize: "clamp(48px,7vw,84px)", lineHeight: 1.02 }}>
            Experience across every discipline.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed" style={{ color: "rgba(246,244,239,.7)" }}>
            Our leadership team brings a diverse range of experience spanning Big Four public
            accounting and consulting, investment banking, logistics, commercial real estate,
            national retail, and professional sports sales and marketing.
          </p>
        </div>
      </section>

      {/* Paper section */}
      <section className="bg-paper py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-navy/70">
              Team members have held roles with firms such as Arthur Andersen,
              PricewaterhouseCoopers, FedEx, and Merrill Lynch. This breadth of experience enables
              our executives to understand the unique challenges across industries — and to be
              highly effective in helping our Partners achieve their business objectives.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m, i) => (
              <Reveal key={m.initials} delay={i * 70}>
                <TiltCard>
                  <div className="h-full border border-hair bg-white">
                    <div
                      className="flex items-center justify-center"
                      style={{
                        aspectRatio: "4 / 3.4",
                        background: "linear-gradient(160deg,#131C31,#2A3654)",
                      }}
                    >
                      <span className="font-display text-gold" style={{ fontSize: "42px" }}>
                        {m.initials}
                      </span>
                    </div>
                    <div className="p-7">
                      <h3 className="font-display text-navy" style={{ fontSize: "25px" }}>
                        Executive Name
                      </h3>
                      <p className="mt-1 uppercase text-gold" style={{ fontSize: "12px", letterSpacing: "0.1em" }}>
                        {m.title}
                      </p>
                      <p className="mt-4 text-navy/60" style={{ fontSize: "14px", lineHeight: 1.6 }}>
                        {m.bio}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>

          <p className="mt-12 italic text-navy/45" style={{ fontSize: "13px" }}>
            Headshots, names, and bios to be replaced with the current Accelerent leadership team.
          </p>
        </div>
      </section>
    </>
  );
}
