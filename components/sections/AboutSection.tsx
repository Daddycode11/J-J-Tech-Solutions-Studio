"use client";

const LOGO_SRC  = "/assets/logo.png";
const PHOTO_SRC = "/assets/id_jowel.png";

const skills = [
  "PHP / Laravel 11",
  "Python / Django",
  "Flutter",
  "MySQL / PostgreSQL",
  "Firebase",
  "Supabase",
  "Docker / VPS",
  "Tailwind CSS",
  "REST API",
  "Filament v3",
  "Next.js",
  "OpenAI API",
  "GameMaker Studio",
  "Unity",
];

const stats = [
  { value: "10+",   label: "Projects Built"   },
  { value: "3-14d", label: "Delivery Time"    },
  { value: "100%",  label: "Client Ownership" },
];

export default function AboutSection(): JSX.Element {
  return (
    <section id="about" className="relative section container py-24 overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-brand-amber/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow [animation-delay:2s]" />

      <div className="relative z-10 max-w-5xl mx-auto">

        <h2 className="font-display font-bold text-4xl md:text-5xl text-white text-center mb-16">
          About <span className="text-gradient-blue">Us</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          <div className="flex flex-col gap-5">

            <div className="flex items-center gap-3">
              <img src={LOGO_SRC} alt="JJ Tech Solutions logo" className="w-[52px] h-[52px] rounded-full border border-white/20 object-cover" />
              <div>
                <p className="font-display font-bold text-white text-lg leading-tight">J&amp;J Tech Solutions</p>
                <p className="text-brand-muted text-xs tracking-widest uppercase mt-0.5">Freelance Tech Studio - Philippines</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-white/10">
              <img src={PHOTO_SRC} alt="Jowel D. Pana" className="w-full object-cover aspect-[3/4]" />
              <div className="absolute bottom-0 inset-x-0 bg-black/60 backdrop-blur-sm px-4 py-3 border-t border-white/10">
                <p className="font-display font-bold text-white text-2xl tracking-wide leading-tight">Jowel D. Pana</p>
                <p className="text-brand-muted text-xs tracking-widest uppercase mt-0.5">Founder - Full-Stack Developer - Graphic Designer</p>
              </div>
            </div>

          </div>

          <div className="flex flex-col gap-6 pt-1">

            <div>
              <p className="text-brand-muted text-xs tracking-widest uppercase mb-2">About Us</p>
              <h3 className="font-display font-bold text-white text-4xl md:text-5xl leading-tight">
                We Build<br />Digital Systems<br />
                <span className="text-gradient-blue">That Work.</span>
              </h3>
            </div>

            <p className="text-brand-muted leading-relaxed">
              J&amp;J Tech Solutions is a freelance tech studio based in{" "}
              <span className="text-white/80">Calintaan, Occidental Mindoro</span>, Philippines. Founded by{" "}
              <span className="text-white/80 font-medium">Jowel D. Pana</span>, a full-stack developer with
              3+ years of experience building production-ready systems for government, healthcare, and business clients.
            </p>

            <p className="text-brand-muted leading-relaxed">
              Specializing in Laravel, Django, Flutter, and modern web stacks -- from municipal tourism websites
              and health information systems to POS platforms and custom APIs. Fast delivery. Clean code. Full ownership.
            </p>

            <div className="border-t border-white/10" />

            <div>
              <p className="text-brand-muted text-xs tracking-widest uppercase mb-3">Core Stack</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-brand-muted">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {stats.map((item) => (
                <div key={item.label} className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-4 text-center">
                  <div className="text-white font-bold text-xl">{item.value}</div>
                  <div className="text-brand-muted text-xs mt-1">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 flex-wrap">
              <a href="https://github.com/Daddycode11" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-white hover:bg-white/10 transition">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                GitHub
              </a>
              <a href="/assets/CV_Jowel_Pana.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-lg border border-brand-blue/40 bg-brand-blue/10 text-brand-blue hover:bg-brand-blue/20 transition">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download CV
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
