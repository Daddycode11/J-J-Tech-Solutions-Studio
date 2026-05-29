"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, X, Check, Code2, Users, CalendarDays, Zap, ArrowUpRight } from "lucide-react";
import { PORTFOLIO, type PortfolioProject } from "@/lib/constants";
const FILTERS = [
  { label: "All Work",         value: "all" },
  { label: "Websites",         value: "website" },
  { label: "Business Systems", value: "system" },
  { label: "Gov't / Civic",    value: "gov" },
  { label: "SaaS / App",       value: "saas" },
  { label: "Mobile / Games",   value: "mobile" },
];

function matchesFilter(project: PortfolioProject, filter: string): boolean {
  if (filter === "all") return true;

  const cat = project.category.toLowerCase();
  const client = project.client.toLowerCase();

  if (filter === "website") {
    return (
      cat.includes("website") ||
      cat.includes("e-commerce") ||
      cat.includes("tourism") ||
      cat.includes("community") ||
      cat.includes("corporate")
    );
  }

  if (filter === "system") {
    return (
      cat.includes("system") ||
      cat.includes("management") ||
      cat.includes("payment")
    );
  }

  if (filter === "gov") {
    return (
      cat.includes("government") ||
      cat.includes("law") ||
      cat.includes("parish") ||
      client.includes("lgu") ||
      client.includes("tesda") ||
      client.includes("bjmp") ||
      client.includes("congressman") ||
      client.includes("pnp")
    );
  }

  if (filter === "saas") {
    return (
      cat.includes("saas") ||
      cat.includes("healthcare") ||
      cat.includes("platform") ||
      cat.includes("portal")
    );
  }

  if (filter === "mobile") {
    return (
      cat.includes("mobile") ||
      cat.includes("game") ||
      cat.includes("app")
    );
  }

  return true;
}

// ─── Status badge colors ──────────────────────────────────────────────────────
const STATUS_STYLES: Record<string, string> = {
  Live:     "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40",
  Demo:     "bg-blue-500/20 text-blue-400 border border-blue-500/40",
  Client:   "bg-amber-500/20 text-amber-400 border border-amber-500/40",
  Academic: "bg-violet-500/20 text-violet-400 border border-violet-500/40",
};

// ─── Project Card ─────────────────────────────────────────────────────────────
function ProjectCard({
  project,
  index,
  onClick,
}: {
  project:  PortfolioProject;
  index:    number;
  onClick:  () => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      onClick={onClick}
      className="group relative card-base overflow-hidden cursor-pointer
                 border border-brand-border hover:border-brand-blue/40
                 shadow-card hover:shadow-card-hover transition-all duration-300"
    >
      {/* Screenshot preview area */}
      <div
        className="relative h-52 overflow-hidden"
        style={{ backgroundColor: project.bgColor }}
      >
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `linear-gradient(${project.accentColor}25 1px, transparent 1px),
                              linear-gradient(90deg, ${project.accentColor}25 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />

        {/* Fake browser chrome bar */}
        <div className="absolute top-3 left-3 right-3 z-10 h-6 bg-black/50 backdrop-blur-sm rounded-md flex items-center gap-1.5 px-2.5">
          <span className="w-2 h-2 rounded-full bg-red-500/70" />
          <span className="w-2 h-2 rounded-full bg-yellow-500/70" />
          <span className="w-2 h-2 rounded-full bg-green-500/70" />
          <span className="flex-1 ml-1 h-3 bg-white/10 rounded text-[8px] text-white/30 font-body flex items-center px-2 truncate">
            jjtechsolutions.com/demo/{project.id}
          </span>
        </div>

        {/* Screenshot image */}
        <div className="absolute inset-0 top-9">
          <Image
            src={project.screenshot}
            alt={project.title}
            fill
            className="object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            onError={(e) => {
              // Fallback to emoji if image missing
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          {/* Fallback emoji shown behind image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl opacity-20 group-hover:opacity-40 transition-opacity duration-300">
              {project.emoji}
            </span>
          </div>
        </div>

        {/* Bottom gradient overlay */}
        <div
          className="absolute bottom-0 left-0 right-0 h-20"
          style={{
            background: `linear-gradient(to top, ${project.bgColor}, transparent)`,
          }}
        />

        {/* Glow blob */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-12 blur-3xl opacity-30
                     group-hover:opacity-60 transition-opacity duration-300"
          style={{ backgroundColor: project.accentColor }}
        />

        {/* Status badge */}
        <div className="absolute top-12 right-3 z-10">
          <span className={`text-[9px] font-display font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${STATUS_STYLES[project.status]}`}>
            {project.status === "Live" ? "🟢 Live" : project.status === "Client" ? "⭐ Client" : project.status === "Academic" ? "📖 Academic" : "🔵 Demo"}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <span className={`inline-flex items-center text-[10px] font-display font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border mb-3 ${project.categoryColor}`}>
          {project.category}
        </span>

        {/* Title */}
        <h3 className="font-display font-bold text-white text-lg leading-snug mb-2 group-hover:text-brand-blue transition-colors duration-200">
          {project.title}
        </h3>

        {/* Short desc */}
        <p className="text-brand-muted font-body text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech stack pills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t.label}
              className="text-[9px] font-body font-medium px-2 py-0.5 rounded-md bg-brand-bg border border-brand-border"
              style={{ color: t.color }}
            >
              {t.label}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="text-[9px] font-body text-brand-muted px-2 py-0.5 rounded-md bg-brand-bg border border-brand-border">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {/* Footer row */}
        <div className="flex items-center justify-between">
          <span className="text-brand-muted text-xs font-body">{project.year}</span>
          <button
            className="flex items-center gap-1 text-xs font-display font-semibold transition-colors duration-200"
            style={{ color: project.accentColor }}
          >
            View Details <ArrowUpRight size={13} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Project Detail Modal ─────────────────────────────────────────────────────
function ProjectModal({
  project,
  onClose,
}: {
  project:  PortfolioProject;
  onClose:  () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

      {/* Modal panel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 12 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto
                   bg-brand-surface border border-brand-border rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.6)]"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-brand-bg border border-brand-border
                     flex items-center justify-center text-brand-muted hover:text-white hover:border-brand-blue/50
                     transition-all duration-200"
        >
          <X size={15} />
        </button>

        {/* Screenshot header */}
        <div
          className="relative h-56 md:h-72 overflow-hidden rounded-t-2xl"
          style={{ backgroundColor: project.bgColor }}
        >
          {/* Grid */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(${project.accentColor}30 1px, transparent 1px),
                                linear-gradient(90deg, ${project.accentColor}30 1px, transparent 1px)`,
              backgroundSize: "30px 30px",
            }}
          />
          <div className="absolute top-4 left-4 right-12 h-6 bg-black/50 backdrop-blur-sm rounded-md flex items-center gap-1.5 px-2.5 z-10">
            <span className="w-2 h-2 rounded-full bg-red-500/70" />
            <span className="w-2 h-2 rounded-full bg-yellow-500/70" />
            <span className="w-2 h-2 rounded-full bg-green-500/70" />
            <span className="flex-1 ml-1 h-3 bg-white/10 rounded text-[8px] text-white/30 font-body flex items-center px-2 truncate">
              {project.demoUrl !== "#" ? project.demoUrl : `jjtechsolutions.com/demo/${project.id}`}
            </span>
          </div>
          {/* Screenshot */}
          <div className="absolute inset-0 top-10">
            <Image
              src={project.screenshot}
              alt={project.title}
              fill
              className="object-cover object-top"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-8xl opacity-15">{project.emoji}</span>
            </div>
          </div>
          {/* Gradient */}
          <div
            className="absolute bottom-0 left-0 right-0 h-24"
            style={{ background: `linear-gradient(to top, ${project.bgColor}, transparent)` }}
          />
          {/* Glow */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-16 blur-3xl opacity-40"
            style={{ backgroundColor: project.accentColor }}
          />
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <span className={`inline-flex items-center text-[10px] font-display font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border mb-2 ${project.categoryColor}`}>
                {project.category}
              </span>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white">
                {project.title}
              </h2>
            </div>
            {project.demoUrl !== "#" ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary shrink-0"
                style={{
                  backgroundColor: project.accentColor,
                  boxShadow: `0 0 24px ${project.accentColor}40`,
                  color: parseInt(project.accentColor.replace("#",""), 16) > 0xaaaaaa ? "#000" : "#fff",
                }}
              >
                <ExternalLink size={14} />
                View Live Demo
              </a>
            ) : (
              <a
                href="#contact"
                onClick={onClose}
                className="btn-outline shrink-0"
              >
                Request This →
              </a>
            )}
          </div>

          {/* Meta row */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            <div className="bg-brand-bg rounded-xl p-3 border border-brand-border">
              <div className="flex items-center gap-2 text-brand-muted text-xs mb-1"><Users size={11} /> Client</div>
              <p className="text-white text-xs font-display font-semibold">{project.client}</p>
            </div>
            <div className="bg-brand-bg rounded-xl p-3 border border-brand-border">
              <div className="flex items-center gap-2 text-brand-muted text-xs mb-1"><CalendarDays size={11} /> Year</div>
              <p className="text-white text-xs font-display font-semibold">{project.year}</p>
            </div>
            <div className="bg-brand-bg rounded-xl p-3 border border-brand-border col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 text-brand-muted text-xs mb-1"><Zap size={11} /> Status</div>
              <span className={`text-[10px] font-display font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${STATUS_STYLES[project.status]}`}>
                {project.status}
              </span>
            </div>
          </div>

          {/* Long description */}
          <p className="text-brand-subtle font-body text-sm leading-relaxed mb-6">
            {project.longDesc}
          </p>

          {/* Two columns: Tech Stack + Key Features */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Tech Stack */}
            <div>
              <h4 className="font-display font-semibold text-white text-sm mb-3 flex items-center gap-2">
                <Code2 size={14} style={{ color: project.accentColor }} /> Tech Stack
              </h4>
              <div className="flex flex-col gap-2">
                {project.tech.map((t) => (
                  <div key={t.label} className="flex items-center gap-2">
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: t.color }}
                    />
                    <span className="text-sm font-body text-brand-subtle">{t.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h4 className="font-display font-semibold text-white text-sm mb-3 flex items-center gap-2">
                <Check size={14} style={{ color: project.accentColor }} /> Key Features
              </h4>
              <div className="flex flex-col gap-2">
                {project.features.map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <Check size={12} className="mt-0.5 shrink-0" style={{ color: project.accentColor }} />
                    <span className="text-sm font-body text-brand-subtle">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-8 pt-6 border-t border-brand-border flex flex-wrap items-center justify-between gap-4">
            <p className="text-brand-muted text-sm font-body">
              Want something similar for your business?
            </p>
            <a
              href="#contact"
              onClick={onClose}
              className="btn-amber"
            >
              Request a Quote →
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Portfolio Section ────────────────────────────────────────────────────────
export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const filtered = PORTFOLIO.filter((p) => matchesFilter(p, activeFilter));

  return (
    <>
      <section id="portfolio" className="relative py-20 md:py-28">
        {/* Background accent */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-blue/3 to-transparent pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="section-label mb-4 inline-flex">Portfolio</span>
            <h2 className="section-heading mb-4">
              Real Projects.{" "}
              <span className="text-gradient-amber">Real Results.</span>
            </h2>
            <p className="section-subtext max-w-2xl mx-auto">
              {PORTFOLIO.length} completed projects — from government systems to coffee shop websites.
              Click any project to see the full tech stack, features, and live demo.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-2 mb-10"
          >
            {FILTERS.map((f) => {
              const count = f.value === "all"
                ? PORTFOLIO.length
                : PORTFOLIO.filter((p) => matchesFilter(p, f.value)).length;
              return (
                <button
                  key={f.value}
                  onClick={() => setActiveFilter(f.value)}
                  className={`px-4 py-2 rounded-full text-xs font-display font-semibold transition-all duration-200
                    ${activeFilter === f.value
                      ? "bg-brand-blue text-white shadow-glow-blue"
                      : "bg-brand-surface border border-brand-border text-brand-muted hover:text-white hover:border-brand-blue/40"
                    }`}
                >
                  {f.label}
                  <span className={`ml-1.5 text-[10px] px-1.5 py-0.5 rounded-full ${activeFilter === f.value ? "bg-white/20" : "bg-brand-bg"}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </motion.div>

          {/* Project Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={i}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mt-14"
          >
            <p className="text-brand-muted font-body text-sm mb-4">
              All {PORTFOLIO.length} projects built solo or in collaboration under J&amp;J Tech Solutions Studio.
            </p>
            <a href="#contact" className="btn-amber">
              ✨ Start Your Project
            </a>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}