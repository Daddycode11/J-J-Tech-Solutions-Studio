import { PORTFOLIO } from "@/lib/constants";

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-blue/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label mb-4">Portfolio</div>
          <h2 className="section-heading mb-4">
            See What We&apos;ve{" "}
            <span className="text-gradient-amber">Built</span>
          </h2>
          <p className="section-subtext max-w-2xl mx-auto">
            Real demos, real systems. Click any project to explore a live preview of what we can build for your business.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO.map((project, i) => (
            <div
              key={project.id}
              className="group relative card-base overflow-hidden card-glow"
            >
              {/* Mock UI Preview */}
              <div
                className="relative h-52 flex items-center justify-center overflow-hidden"
                style={{ backgroundColor: project.bgColor }}
              >
                {/* Grid lines */}
                <div className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `linear-gradient(${project.accentColor}33 1px, transparent 1px), linear-gradient(90deg, ${project.accentColor}33 1px, transparent 1px)`,
                    backgroundSize: "30px 30px",
                  }}
                />

                {/* Fake browser chrome */}
                <div className="absolute top-3 left-3 right-3 h-7 bg-black/40 rounded-lg flex items-center gap-1.5 px-3">
                  <div className="w-2 h-2 rounded-full bg-red-500/60" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                  <div className="w-2 h-2 rounded-full bg-green-500/60" />
                  <div className="flex-1 mx-2 h-3.5 bg-white/10 rounded text-[9px] text-white/30 font-body flex items-center px-2">
                    jjtechstudio.com/demo/{project.id}
                  </div>
                </div>

                {/* Big emoji icon */}
                <span className="text-7xl filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300 mt-4">
                  {project.preview}
                </span>

                {/* Glow */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-16 blur-2xl opacity-40"
                  style={{ backgroundColor: project.accentColor }}
                />

                {/* Category badge */}
                <div
                  className="absolute bottom-3 left-3 px-2 py-1 rounded-lg text-[10px] font-display font-semibold uppercase tracking-wider"
                  style={{ backgroundColor: `${project.accentColor}25`, color: project.accentColor, border: `1px solid ${project.accentColor}40` }}
                >
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display font-bold text-white text-xl mb-2">{project.title}</h3>
                <p className="text-brand-muted font-body text-sm leading-relaxed mb-4">{project.description}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] font-body font-medium px-2 py-1 rounded-md bg-brand-bg border border-brand-border text-brand-subtle">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href="#contact"
                    className="btn-primary text-xs px-4 py-2"
                    style={{ backgroundColor: project.accentColor, boxShadow: `0 0 20px ${project.accentColor}40` }}
                  >
                    View Demo →
                  </a>
                  <a href="#contact" className="btn-outline text-xs px-4 py-2">
                    Request This
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-brand-muted font-body text-sm mb-4">
            Want to see a live demo tailored to your industry?
          </p>
          <a href="#contact" className="btn-amber">
            Request a Custom Demo ✨
          </a>
        </div>
      </div>
    </section>
  );
}