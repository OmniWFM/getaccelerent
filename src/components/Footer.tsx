import Link from "next/link";
import Wordmark from "@/components/Wordmark";

const columns = [
  {
    title: "Platform",
    links: [
      { href: "/model", label: "The Model" },
      { href: "/partners", label: "Partners" },
      { href: "/markets", label: "Markets" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/leadership", label: "Leadership" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Partners",
    links: [
      { href: "/portal", label: "Partner Portal" },
      { href: "/contact", label: "Become a Partner" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#0A1122" }} className="text-paper/70">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Wordmark variant="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper/55">
              The Business Development Platform. One exclusive partner per
              industry, in every market we serve.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="eyebrow mb-5">{col.title}</h4>
              <ul className="space-y-3 text-sm">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-paper/70 transition-colors hover:text-gold"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col gap-2 border-t border-paper/10 pt-8 text-sm text-paper/50 md:flex-row md:items-center md:justify-between">
          <p>© {year} Accelerent. All rights reserved.</p>
          <p>getaccelerent.com</p>
        </div>
      </div>
    </footer>
  );
}
