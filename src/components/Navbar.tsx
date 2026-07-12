"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Wordmark from "@/components/Wordmark";

const links = [
  { href: "/about", label: "About" },
  { href: "/model", label: "Model" },
  { href: "/partners", label: "Partners" },
  { href: "/leadership", label: "Leadership" },
  { href: "/markets", label: "Markets" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b"
      style={{
        height: "84px",
        background: "rgba(246,244,239,.82)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderColor: "rgba(19,28,49,.1)",
      }}
    >
      <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        <Link href="/" aria-label="Accelerent home">
          <Wordmark variant="color" />
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-[13px] font-medium uppercase tracking-[0.12em] transition-colors ${
                  active ? "nav-active" : "text-ink/70 hover:text-gold"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href="/portal"
            className="bg-navy px-6 py-3 text-[12px] font-bold uppercase tracking-[0.14em] text-paper transition-colors hover:bg-gold hover:text-navy"
          >
            Partner Portal
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-ink md:hidden"
          aria-label="Toggle menu"
        >
          <span className="mb-1.5 block h-0.5 w-6 bg-ink" />
          <span className="mb-1.5 block h-0.5 w-6 bg-ink" />
          <span className="block h-0.5 w-6 bg-ink" />
        </button>
      </nav>

      {open && (
        <div className="space-y-1 border-t border-hair bg-paper px-6 py-4 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block py-2 text-sm font-medium uppercase tracking-[0.12em] text-ink/80 hover:text-gold"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/portal"
            className="mt-2 block bg-navy px-5 py-3 text-center text-[12px] font-bold uppercase tracking-[0.14em] text-paper"
          >
            Partner Portal
          </Link>
        </div>
      )}
    </header>
  );
}
