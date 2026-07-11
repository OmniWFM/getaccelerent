import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Partner Portal",
  description: "Sign in to the Accelerent Partner Portal to access your relationships, events, and results.",
  robots: { index: false, follow: false },
};

export default function Portal() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-navy hero-grain px-6 py-32">
      <div className="absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-navy-light/40 blur-3xl" />

      <div className="relative w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 text-white">
            <span className="inline-block h-7 w-7 rounded-sm bg-gold" />
            <span className="text-2xl font-semibold">
              Accel<span className="text-gold">erent</span>
            </span>
          </div>
          <h1 className="text-2xl font-semibold text-white">Partner Portal</h1>
          <p className="mt-2 text-sm text-white/60">
            Sign in to access your relationships, events, and results.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
          <form className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-white/80">Email</label>
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none focus:border-gold"
              />
            </div>
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="block text-sm font-medium text-white/80">Password</label>
                <a href="#" className="text-xs text-gold hover:underline">Forgot?</a>
              </div>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none focus:border-gold"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-gold py-3 font-semibold text-navy transition-transform hover:scale-[1.02]"
            >
              Sign in
            </button>
          </form>
        </div>

        <p className="mt-6 text-center text-sm text-white/50">
          Not a partner yet?{" "}
          <Link href="/contact" className="text-gold hover:underline">
            Request access
          </Link>
        </p>
      </div>
    </section>
  );
}
