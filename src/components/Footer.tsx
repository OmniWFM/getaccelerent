import Link from "next/link";

const columns = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/model", label: "Model" },
      { href: "/leadership", label: "Leadership" },
    ],
  },
  {
    title: "Platform",
    links: [
      { href: "/partners", label: "Partners" },
      { href: "/markets", label: "Markets" },
      { href: "/portal", label: "Partner Portal" },
    ],
  },
  {
    title: "Connect",
    links: [
      { href: "/contact", label: "Contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 text-white">
              <span className="inline-block h-6 w-6 rounded-sm bg-gold" />
              <span className="text-xl font-semibold">
                Accel<span className="text-gold">erent</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              A business development platform built on category exclusivity —
              connecting decision-makers who drive real growth.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
                {col.title}
              </h4>
              <ul className="space-y-3 text-sm">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="transition-colors hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 border-t border-white/10 pt-8 text-sm text-white/50 md:flex md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Accelerent. All rights reserved.</p>
          <p className="mt-2 md:mt-0">One partner per industry. Every relationship that matters.</p>
        </div>
      </div>
    </footer>
  );
}
