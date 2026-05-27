export default function SystemsSection() {
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
          Business{" "}
          <span className="text-gradient-amber">Systems</span>
        </h2>

        <p className="text-brand-muted mt-4 max-w-xl mx-auto">
          Ready-made and custom systems designed to automate and scale your business.
        </p>
      </div>

      {/* Cards */}
      <div className="relative z-10 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {[
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
        ].map((item) => (
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