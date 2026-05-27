"use client";
import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-bg/90 backdrop-blur-xl border-b border-brand-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          {/* Actual logo image — white version on dark bg */}
          <div className="w-9 h-9 flex items-center justify-center flex-shrink-0">
            <img
              src="/logo.png"
              alt="JJ Tech Solutions Studio"
              className="w-9 h-9 object-contain"
              style={{ filter: "invert(1) brightness(1.1)" }}
            />
          </div>
          <div className="leading-none">
            <span className="font-display font-bold text-white text-sm tracking-tight">
              J&J Tech
            </span>
            <span className="block text-brand-muted text-[10px] tracking-widest uppercase font-body">
              Solutions Studio
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-3 py-1.5 text-sm font-body text-brand-muted hover:text-white rounded-lg hover:bg-white/5 transition-all duration-150"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" className="btn-primary text-xs px-4 py-2">
            Get a Quote →
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-brand-muted hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span
              className={`block h-0.5 bg-current transition-transform duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-current transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-current transition-transform duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-brand-bg/95 backdrop-blur-xl border-b border-brand-border`}
      >
        <ul className="px-4 pb-4 pt-2 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-2.5 text-sm font-body text-brand-muted hover:text-white rounded-lg hover:bg-white/5 transition-all"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="btn-primary w-full justify-center text-sm"
            >
              Get a Quote →
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}