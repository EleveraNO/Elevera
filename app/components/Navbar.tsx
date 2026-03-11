"use client";

import { useState } from "react";
import Logo from "./Logo";

const tjenester = [
  { label: "Videoproduksjon", href: "/tjenester/videoproduksjon-alesund" },
  { label: "Fotografering", href: "/tjenester/fotografering-alesund" },
  { label: "Nettside", href: "/tjenester/nettside-alesund" },
  { label: "Annonsering", href: "/tjenester/annonsering-alesund" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/">
          <Logo />
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="/" className="text-sm text-white/70 transition-colors hover:text-white">
            Hjem
          </a>

          {/* Tjenester dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm text-white/70 transition-colors hover:text-white">
              Tjenester
              <svg className={`h-3.5 w-3.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute left-1/2 top-full w-52 -translate-x-1/2 pt-2">
                <div className="rounded-xl border border-white/10 bg-[#111] py-2 shadow-xl">
                  {tjenester.map((t) => (
                    <a
                      key={t.href}
                      href={t.href}
                      className="block px-4 py-2.5 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                    >
                      {t.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a href="/#kontakt" className="text-sm text-white/70 transition-colors hover:text-white">
            Kontakt
          </a>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="/#kontakt"
            className="rounded-full bg-[#7c3aed] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#6d28d9] hover:shadow-lg hover:shadow-[#7c3aed]/25"
          >
            Book møte
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Meny"
        >
          <span className={`block h-0.5 w-6 bg-white transition-all ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#0a0a0a] px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <a href="/" className="text-sm text-white/70 hover:text-white" onClick={() => setMenuOpen(false)}>
              Hjem
            </a>
            <div className="border-t border-white/10 pt-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/30">Tjenester</p>
              {tjenester.map((t) => (
                <a
                  key={t.href}
                  href={t.href}
                  className="block py-2 text-sm text-white/70 hover:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {t.label}
                </a>
              ))}
            </div>
            <a href="/#kontakt" className="text-sm text-white/70 hover:text-white" onClick={() => setMenuOpen(false)}>
              Kontakt
            </a>
            <a
              href="/#kontakt"
              className="mt-2 rounded-full bg-[#7c3aed] px-5 py-2.5 text-center text-sm font-semibold text-white"
              onClick={() => setMenuOpen(false)}
            >
              Book møte
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
