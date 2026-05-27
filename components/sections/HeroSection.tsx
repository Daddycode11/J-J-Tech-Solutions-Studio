"use client";
import { useRef } from "react";

const FLOATING_WORDS = [
  "Website",
  "POS System",
  "Booking App",
  "Dashboard",
  "Menu System",
  "Inventory",
  "Digital Menu",
  "E-commerce",
];

export default function HeroSection() {
  const tickerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-16"
    >
      {/* ── Background: large faded logo watermark ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <img
          src="/logo.png"
          alt=""
          aria-hidden="true"
          className="w-[520px] h-[520px] md:w-[760px] md:h-[760px] object-contain select-none"
          style={{ opacity: 0.055, filter: "invert(1)" }}
        />
      </div>

      {/* ── Secondary offset logo (top-right, rotated) for depth ── */}
      <div
        className="absolute -top-24 -right-24 pointer-events-none z-0"
        style={{ opacity: 0.025, filter: "invert(1)" }}
      >
        <img
          src="/logo.png"
          alt=""
          aria-hidden="true"
          className="w-[320px] h-[320px] object-contain select-none rotate-12"
        />
      </div>

      {/* ── Radial glow blobs (sit above logo, below content) ── */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none animate-pulse-slow z-[1]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-amber/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow [animation-delay:2s] z-[1]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-3xl pointer-events-none z-[1]" />

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-blue/30 bg-brand-blue/10 mb-8 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
          <span className="text-brand-blue text-xs font-display font-semibold tracking-widest uppercase">
            🇵🇭 Serving Local Businesses Philippines-wide
          </span>
        </div>

        {/* Main headline */}
        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-6 animate-fade-in-up [animation-delay:0.1s]">
          Modern{" "}
          <span className="relative inline-block">
            <span className="text-gradient-blue">Websites</span>
            <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-brand-blue/0 via-brand-blue to-brand-blue/0" />
          </span>{" "}
          &amp; Business{" "}
          <br className="hidden sm:block" />
          <span className="text-gradient-amber">Systems</span> for Local
          Businesses
        </h1>

        {/* Subtext */}
        <p className="text-brand-muted font-body text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-in-up [animation-delay:0.2s]">
          We build websites, POS systems, booking systems, and custom business
          solutions —{" "}
          <span className="text-white">
            fast, affordable, and built to grow with you.
          </span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16 animate-fade-in-up [animation-delay:0.3s]">
          <a
            href="#services"
            className="btn-primary text-sm md:text-base px-6 py-3.5"
          >
            View Services
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="#portfolio"
            className="btn-outline text-sm md:text-base px-6 py-3.5"
          >
            See Portfolio
          </a>
          <a
            href="#contact"
            className="btn-amber text-sm md:text-base px-6 py-3.5"
          >
            Request a Demo ✨
          </a>
        </div>

        {/* Stats strip */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 animate-fade-in-up [animation-delay:0.4s]">
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "3–5", label: "Days Avg. Delivery" },
            { value: "100%", label: "Client Ownership" },
            { value: "24/7", label: "Support Available" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-bold text-2xl md:text-3xl text-white">
                {stat.value}
              </div>
              <div className="text-brand-muted text-xs font-body mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Scrolling ticker ── */}
      <div className="absolute bottom-8 left-0 right-0 overflow-hidden pointer-events-none">
        <div className="flex gap-8 animate-ticker whitespace-nowrap">
          {[...FLOATING_WORDS, ...FLOATING_WORDS, ...FLOATING_WORDS].map(
            (word, i) => (
              <span
                key={i}
                className="text-brand-border text-sm font-display font-semibold uppercase tracking-widest flex items-center gap-8"
              >
                {word} <span className="text-brand-blue/30">◆</span>
              </span>
            )
          )}
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-10 bg-gradient-to-b from-brand-blue to-transparent animate-pulse" />
        <span className="text-brand-muted text-[10px] font-body tracking-widest uppercase">
          Scroll
        </span>
      </div>
    </section>
  );
}