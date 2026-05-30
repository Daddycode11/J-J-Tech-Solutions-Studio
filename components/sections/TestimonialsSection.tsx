"use client";

import { useState } from "react";

const DEFAULT_CARDS = [
  {
    title: "Ready-Made Website",
    desc: "Fast deployment websites for businesses who need online presence immediately.",
  },
  {
    title: "Custom POS System",
    desc: "Point-of-sale system with inventory, sales tracking, and reporting dashboard.",
  },
  {
    title: "Booking System",
    desc: "Online booking system for salons, clinics, rentals, and services.",
  },
  {
    title: "Business Dashboard",
    desc: "Analytics dashboard to track sales, users, and business performance.",
  },
];

type Card = { title: string; desc: string };

export default function SystemsSection() {
  const [cards, setCards] = useState<Card[]>(DEFAULT_CARDS);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  async function generateCards() {
    const businessType = prompt.trim() || "general business";
    setLoading(true);
    setStatus("Tailoring systems for your business...");

    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages: [
            {
              role: "user",
              content: `You are a business systems consultant. Generate exactly 4 business system recommendations tailored for a "${businessType}" business.

Respond ONLY with a valid JSON array, no markdown, no backticks, no preamble:
[
  { "title": "System Name", "desc": "One or two sentence description of what this system does and why it helps this specific business type." },
  ...
]

Make the titles and descriptions specific and relevant to ${businessType} businesses. Keep each desc under 20 words.`,
            },
          ],
        }),
      });

      const data = await res.json();
      const raw =
        data.content.find((b: { type: string }) => b.type === "text")?.text ??
        "[]";
      const clean = raw.replace(/```json|```/g, "").trim();
      const parsed: Card[] = JSON.parse(clean);

      setCards(parsed);
      setStatus(`✓ Tailored for ${businessType} businesses`);
    } catch {
      setStatus("Something went wrong. Please try again.");
    }

    setLoading(false);
  }

  return (
    <section
      id="systems"
      className="relative section container py-24 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-amber/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow [animation-delay:2s]" />

      {/* Header */}
      <div className="text-center relative z-10 mb-12">
        <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
          Business <span className="text-gradient-amber">Systems</span>
        </h2>
        <p className="text-brand-muted mt-4 max-w-xl mx-auto">
          Ready-made and custom systems designed to automate and scale your
          business.
        </p>
      </div>

      {/* Dynamic prompt input */}
      <div className="relative z-10 flex items-center gap-3 max-w-md mx-auto mb-10">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && generateCards()}
          placeholder="Describe your business type..."
          className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder:text-brand-muted text-sm focus:outline-none focus:border-brand-blue/50"
        />
        <button
          onClick={generateCards}
          disabled={loading}
          className="px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-white text-sm hover:border-brand-blue/40 disabled:opacity-50 transition whitespace-nowrap"
        >
          {loading ? "Generating..." : "Generate ↗"}
        </button>
      </div>

      {status && (
        <p className="text-center text-brand-muted text-xs mb-6 relative z-10">
          {status}
        </p>
      )}

      {/* Cards */}
      <div
        className={`relative z-10 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto transition-opacity duration-300 ${
          loading ? "opacity-40" : "opacity-100"
        }`}
      >
        {cards.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:border-brand-blue/40 transition"
          >
            <h3 className="text-white font-semibold text-lg mb-2">
              {item.title}
            </h3>
            <p className="text-brand-muted text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}