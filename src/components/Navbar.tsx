"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/model", label: "Model" },
  { href: "/partners", label: "Partners" },
  { href: "/leadership", label: "Leadership" },
  { href: "/markets", label: "Markets" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/90 backdrop-blur-md py-3 shadow-lg shadow-navy/20"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 text-white">
          <span className="inline-block h-6 w-6 rounded-sm bg-gold" />
          <span className="text-xl font-semibold tracking-tight">
            Accel<span className="text-gold">erent</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-gold"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/portal"
            className="rounded-full border border-gold px-5 py-2 text-sm font-semibold text-gold transition-all hover:bg-gold hover:text-navy"
          >
            Partner Portal
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
          aria-label="Toggle menu"
        >
          <span className="block h-0.5 w-6 bg-white mb-1.5" />
          <span className="block h-0.5 w-6 bg-white mb-1.5" />
          <span className="block h-0.5 w-6 bg-white" />
        </button>
      </nav>

      {open && (
        <div className="mt-3 space-y-1 bg-navy/95 px-6 py-4 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-white/80 hover:text-gold"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/portal"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-full border border-gold px-5 py-2 text-center font-semibold text-gold"
          >
            Partner Portal
          </Link>
        </div>
      )}
    </header>
  );
}
