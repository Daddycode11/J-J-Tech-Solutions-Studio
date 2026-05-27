"use client";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative section container min-h-screen flex flex-col items-center justify-center overflow-hidden px-4"
    >
      {/* Background glow (same style as Hero) */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-amber/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow [animation-delay:2s]" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-2xl text-center">
        {/* Title */}
        <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
          Let’s Build Something{" "}
          <span className="text-gradient-blue">Powerful</span>
        </h2>

        <p className="text-brand-muted text-lg mb-10 leading-relaxed">
          Have a project in mind? Website, POS system, booking system, or custom software —
          send a message and let’s talk.
        </p>

        {/* Form */}
        <form className="flex flex-col gap-4 text-left">
          <input
            className="card w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:border-brand-blue outline-none rounded-xl"
            placeholder="Your Name"
            type="text"
          />

          <input
            className="card w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:border-brand-blue outline-none rounded-xl"
            placeholder="Your Email"
            type="email"
          />

          <textarea
            className="card w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:border-brand-blue outline-none rounded-xl min-h-[140px] resize-none"
            placeholder="Tell us about your project..."
          />

          <button
            type="submit"
            className="btn-primary w-full py-3 text-sm md:text-base flex items-center justify-center gap-2"
          >
            Send Message
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
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </form>

        {/* Footer hint */}
        <p className="text-brand-muted text-xs mt-8">
          We usually reply within 24 hours ⚡
        </p>
      </div>
    </section>
  );
}