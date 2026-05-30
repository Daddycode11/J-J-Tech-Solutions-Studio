"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg]   = useState("");
  const [form, setForm] = useState({
    name:    "",
    email:   "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormState("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error ?? "Something went wrong.");
      }

      setFormState("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err: unknown) {
      setFormState("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  }

  return (
    <section
      id="contact"
      className="relative section container min-h-screen flex flex-col items-center justify-center overflow-hidden px-4"
    >
      {/* Background glows */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-amber/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow [animation-delay:2s]" />

      <div className="relative z-10 w-full max-w-2xl text-center">

        <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
          Let&apos;s Build Something{" "}
          <span className="text-gradient-blue">Powerful</span>
        </h2>

        <p className="text-brand-muted text-lg mb-10 leading-relaxed">
          Have a project in mind? Website, POS system, booking system, or
          custom software — send a message and let&apos;s talk.
        </p>

        {/* ── Success state ── */}
        {formState === "success" ? (
          <div className="flex flex-col items-center gap-4 py-16">
            <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
              <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-display font-bold text-white text-2xl">Message Sent!</h3>
            <p className="text-brand-muted">
              Thanks! We&apos;ll get back to you within 24 hours.
            </p>
            <button
              onClick={() => setFormState("idle")}
              className="mt-4 text-sm text-brand-blue underline underline-offset-4 hover:opacity-80 transition"
            >
              Send another message
            </button>
          </div>
        ) : (
          /* ── Form ── */
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">

            <div className="flex flex-col gap-1">
              <label className="text-white/50 text-xs tracking-widest uppercase pl-1">
                Name
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                disabled={formState === "loading"}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-brand-blue outline-none rounded-xl transition disabled:opacity-50"
                placeholder="Juan dela Cruz"
                type="text"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-white/50 text-xs tracking-widest uppercase pl-1">
                Email
              </label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                disabled={formState === "loading"}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-brand-blue outline-none rounded-xl transition disabled:opacity-50"
                placeholder="juan@email.com"
                type="email"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-white/50 text-xs tracking-widest uppercase pl-1">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                disabled={formState === "loading"}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-brand-blue outline-none rounded-xl min-h-[140px] resize-none transition disabled:opacity-50"
                placeholder="Tell us about your project..."
              />
            </div>

            {/* Error message */}
            {formState === "error" && (
              <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {errorMsg}
              </div>
            )}

            <button
              type="submit"
              disabled={formState === "loading"}
              className="btn-primary w-full py-3 text-sm md:text-base flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed transition"
            >
              {formState === "loading" ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </button>

          </form>
        )}

        <p className="text-brand-muted text-xs mt-8">
          We usually reply within 24 hours ⚡
        </p>
      </div>
    </section>
  );
}