export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative section container py-24 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-brand-amber/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow [animation-delay:2s]" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
          About{" "}
          <span className="text-gradient-blue">Us</span>
        </h2>

        <p className="text-brand-muted text-lg leading-relaxed mb-6">
          We are a freelance tech studio based in the Philippines building
          modern websites, POS systems, booking apps, and custom business
          software for small and medium businesses.
        </p>

        <p className="text-white/80 leading-relaxed">
          Our goal is simple: help local businesses go digital with fast,
          affordable, and scalable systems that actually grow with them —
          not just “pretty websites.”
        </p>

        {/* highlight stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          {[
            { value: "50+", label: "Projects Built" },
            { value: "3–14 Days", label: "Delivery Time" },
            { value: "100%", label: "Client Ownership" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-4"
            >
              <div className="text-white font-bold text-xl">
                {item.value}
              </div>
              <div className="text-brand-muted text-xs mt-1">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}