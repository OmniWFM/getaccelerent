import type { Metadata } from "next";
import Link from "next/link";
import Wordmark from "@/components/Wordmark";
import NetworkHero from "@/components/NetworkHero";

export const metadata: Metadata = {
  title: "Partner Portal",
  description: "Sign in to the Accelerent Partner Portal.",
  robots: { index: false, follow: false },
};

const inputCls =
  "w-full border border-hair bg-[rgba(13,21,40,.4)] px-4 py-3 text-paper placeholder:text-paper/30 outline-none transition-colors focus:border-gold";

export default function Portal() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-navy px-6 py-24">
      <NetworkHero />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, rgba(13,21,40,0) 0%, rgba(13,21,40,.85) 75%)",
        }}
      />

      <Link
        href="/"
        className="absolute left-6 top-6 z-10 text-paper/55 transition-colors hover:text-gold"
        style={{ fontSize: "13px" }}
      >
        &larr; Back to site
      </Link>

      <div className="relative z-10 w-[420px] max-w-[calc(100vw-48px)] border border-[rgba(246,244,239,.14)] bg-[rgba(246,244,239,.06)] p-12 backdrop-blur-xl">
        <div className="flex justify-center">
          <Wordmark variant="light" />
        </div>
        <p
          className="mt-4 text-center uppercase text-gold"
          style={{ fontSize: "11px", letterSpacing: "0.3em" }}
        >
          PARTNER PORTAL
        </p>

        <form className="mt-10 space-y-5">
          <div>
            <label className="mb-2 block uppercase text-paper/60" style={{ fontSize: "11px", letterSpacing: "0.1em" }}>
              Email
            </label>
            <input type="email" placeholder="you@company.com" className={inputCls} />
          </div>
          <div>
            <label className="mb-2 block uppercase text-paper/60" style={{ fontSize: "11px", letterSpacing: "0.1em" }}>
              Password
            </label>
            <input type="password" placeholder="••••••••" className={inputCls} />
          </div>
          <button type="button" className="btn-gold w-full justify-center">
            Sign In
          </button>
        </form>

        <div className="mt-6 flex items-center justify-between" style={{ fontSize: "13px" }}>
          <button type="button" className="text-paper/55 transition-colors hover:text-gold">
            Forgot password?
          </button>
          <Link href="/contact" className="text-paper/55 transition-colors hover:text-gold">
            Request access
          </Link>
        </div>
      </div>
    </section>
  );
}
