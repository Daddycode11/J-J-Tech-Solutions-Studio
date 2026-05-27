import { SERVICES } from "@/lib/constants";

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-4 relative">
      {/* Section divider glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-brand-blue/30" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label mb-4">Our Services</div>
          <h2 className="section-heading mb-4">
            Everything Your Business{" "}
            <span className="text-gradient-blue">Needs Online</span>
          </h2>
          <p className="section-subtext max-w-2xl mx-auto">
            From a simple landing page to a full custom POS system — we cover it all at prices built for local businesses.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <div
              key={service.id}
              className="card-base card-glow p-6 group relative overflow-hidden"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-20 h-20 rounded-bl-3xl opacity-10 ${
                service.color === "blue" ? "bg-brand-blue" : "bg-brand-amber"
              }`} />

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 ${
                service.color === "blue"
                  ? "bg-brand-blue/15 border border-brand-blue/20"
                  : "bg-brand-amber/15 border border-brand-amber/20"
              }`}>
                {service.icon}
              </div>

              <h3 className="font-display font-bold text-white text-lg mb-2 leading-tight">{service.title}</h3>
              <p className="text-brand-muted font-body text-sm leading-relaxed mb-4">{service.description}</p>

              {/* Target clients */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {service.targets.map((t) => (
                  <span
                    key={t}
                    className={`text-[10px] font-body font-medium px-2 py-1 rounded-full border ${
                      service.color === "blue"
                        ? "text-brand-blue border-brand-blue/25 bg-brand-blue/10"
                        : "text-brand-amber border-brand-amber/25 bg-brand-amber/10"
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className={`inline-flex items-center gap-2 text-sm font-display font-semibold transition-all duration-200 group-hover:gap-3 ${
                  service.color === "blue" ? "text-brand-blue" : "text-brand-amber"
                }`}
              >
                Request This
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}

          {/* Wide CTA card */}
          <div className="card-base p-6 border-dashed border-brand-blue/30 flex flex-col items-center justify-center text-center gap-4 hover:border-brand-blue/50 transition-colors duration-300">
            <div className="w-12 h-12 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-2xl">
              🤝
            </div>
            <div>
              <h3 className="font-display font-bold text-white text-lg mb-1">Need Something Else?</h3>
              <p className="text-brand-muted font-body text-sm">Tell us your idea — we'll make it happen.</p>
            </div>
            <a href="#contact" className="btn-outline text-sm">
              Let's Talk →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}