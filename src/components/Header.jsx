import { useState } from "react";

const links = [
  { label: "Modelos", href: "#modelos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Financiamento", href: "#financiamento" },
  { label: "Dúvidas", href: "#duvidas" },
  { label: "Contato", href: "#contato" },
];

function BoltIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />
    </svg>
  );
}

import React from 'react'

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#1A1D21]">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#B8F23A] text-[#1A1D21]">
            <BoltIcon className="h-4 w-4" />
          </span>
          <span className="text-lg font-bold tracking-tight text-white">faísca.</span>
        </a>

        {/* Nav desktop */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA desktop */}
        <a
          href="#test-ride"
          className="hidden rounded-full bg-[#B8F23A] px-5 py-2 text-sm font-semibold text-[#1A1D21] transition hover:brightness-95 md:inline-block"
        >
          Agendar test ride
        </a>

        {/* Botão mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
            {open ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <nav className="border-t border-white/10 px-6 pb-6 md:hidden">
          <ul className="flex flex-col gap-1 pt-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-2 text-white/80 hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#test-ride"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-full bg-[#B8F23A] py-3 text-center text-sm font-semibold text-[#1A1D21]"
          >
            Agendar test ride
          </a>
        </nav>
      )}
    </header>
  );
}

export default Header
