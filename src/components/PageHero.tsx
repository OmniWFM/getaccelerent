export default function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy hero-grain pt-40 pb-24">
      {/* rotating conic aura */}
      <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full aura opacity-50" />
      {/* 3D perspective grid floor */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-64 grid-lines opacity-20"
        style={{
          transform: "perspective(500px) rotateX(60deg)",
          transformOrigin: "bottom",
          maskImage: "linear-gradient(to top, black, transparent)",
          WebkitMaskImage: "linear-gradient(to top, black, transparent)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-gold animate-fadeIn">
          {eyebrow}
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
