"use client";
import { useState } from "react";
import { SYSTEMS } from "@/lib/constants";

export default function SystemsSection() {
  const [activeSystem, setActiveSystem] = useState(SYSTEMS[1].id);
  const active = SYSTEMS.find((s) => s.id === activeSystem) || SYSTEMS[0];

  return (
    <section id="systems" className="py-24 px-4 relative overflow-hidden">
      {/* BG accent */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-amber/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label mb-4">Buy or Customize</div>
          <h2 className="section-heading mb-4">
            Choose Your{" "}
            <span className="text-gradient-blue">Path</span>
          </h2>
          <p className="section-subtext max-w-2xl mx-auto">
            Need it fast? Buy a ready-made system. Need it your way? We customize it from scratch.
          </p>
        </div>

        {/* System Tabs */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {SYSTEMS.map((sys) => (
            <button
              key={sys.id}
              onClick={() => setActiveSystem(sys.id)}
              className={`relative px-5 py-2.5 rounded-xl font-display font-semibold text-sm transition-all duration-200 ${
                activeSystem === sys.id
                  ? "bg-brand-blue text-white shadow-glow-blue"
                  : "bg-brand-surface border border-brand-border text-brand-muted hover:text-white hover:border-brand-blue/30"
              }`}
            >
              {sys.popular && (
                <span className="absolute -top-2 -right-2 bg-brand-amber text-brand-bg text-[9px] font-display font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wide">
                  Popular
                </span>
              )}
              {sys.name}
            </button>
          ))}
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Buy Ready */}
          <div className="card-base p-8 relative overflow-hidden group hover:border-brand-blue/40 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-bl-full" />

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-display font-semibold mb-6">
              ⚡ Buy Ready System
            </div>

            <div className="mb-2">
              <span className="font-display font-bold text-4xl text-white">{active.buyPrice}</span>
              <span className="text-brand-muted text-sm font-body ml-1">one-time</span>
            </div>
            <p className="text-brand-muted text-xs font-body mb-6">
              Delivery: <span className="text-white font-medium">{active.delivery.buy}</span>
            </p>

            <ul className="space-y-2.5 mb-8">
              {active.buyFeatures.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm font-body text-brand-subtle">
                  <span className="w-5 h-5 rounded-full bg-brand-blue/15 border border-brand-blue/25 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <a href="#contact" className="btn-primary w-full justify-center">
              Buy Now — {active.buyPrice}
            </a>
          </div>

          {/* Customize */}
          <div className="relative p-px rounded-2xl bg-gradient-to-br from-brand-amber/50 via-brand-amber/20 to-transparent">
            <div className="card-base h-full p-8 rounded-2xl relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, rgba(245,158,11,0.08) 0%, rgba(10,15,30,1) 60%)" }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-amber/5 rounded-bl-full" />

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-amber/10 border border-brand-amber/20 text-brand-amber text-xs font-display font-semibold mb-6">
                🎨 Customize System
              </div>

              <div className="mb-2">
                <span className="font-display font-bold text-4xl text-white">{active.customPrice}</span>
              </div>
              <p className="text-brand-muted text-xs font-body mb-6">
                Delivery: <span className="text-white font-medium">{active.delivery.custom}</span>
              </p>

              <ul className="space-y-2.5 mb-8">
                {active.customFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm font-body text-brand-subtle">
                    <span className="w-5 h-5 rounded-full bg-brand-amber/15 border border-brand-amber/25 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-brand-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a href="#contact" className="btn-amber w-full justify-center">
                Request Quote →
              </a>
            </div>
          </div>
        </div>

        {/* Trust note */}
        <p className="text-center text-brand-muted text-xs font-body mt-8">
          ✅ 50% downpayment · 50% on delivery &nbsp;|&nbsp; 💳 GCash, PayMaya, Bank Transfer accepted &nbsp;|&nbsp; 🔐 Full source code ownership
        </p>
      </div>
    </section>
  );
}