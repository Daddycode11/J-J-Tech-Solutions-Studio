"use client";
import { useState } from "react";

type Review = {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
};

type Analysis = {
  sentiment: "positive" | "mixed" | "negative";
  summary: string;
  highlights: string[];
};

const SEED_REVIEWS: Review[] = [
  { id: "1", name: "Maria Santos", rating: 5, comment: "Absolutely transformed our online presence. The custom POS system saved us hours every week.", date: "2025-05-01" },
  { id: "2", name: "James Reyes",  rating: 4, comment: "Fast delivery and clean design. Would love more customization options for the dashboard.", date: "2025-05-10" },
  { id: "3", name: "Carla Dizon",  rating: 5, comment: "The booking system is a game-changer for our clinic. Patients love the simplicity.", date: "2025-05-18" },
];

const SENTIMENT_STYLES: Record<string, string> = {
  positive: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  mixed:    "bg-amber-500/10  text-amber-400  border-amber-500/20",
  negative: "bg-red-500/10    text-red-400    border-red-500/20",
};

function StarRating({ value, onChange }: { value: number; onChange?: (v: number) => void }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <button
          key={s}
          type="button"
          onClick={() => onChange?.(s)}
          onMouseEnter={() => onChange && setHovered(s)}
          onMouseLeave={() => onChange && setHovered(0)}
          className={`text-2xl transition-transform ${onChange ? "cursor-pointer hover:scale-110" : "cursor-default"} ${
            s <= (hovered || value) ? "text-brand-amber" : "text-white/20"
          }`}
          aria-label={onChange ? `Rate ${s} stars` : `${value} stars`}
        >
          ★
        </button>
      ))}
    </div>
  );
}

export default function ReviewSection() {
  const [reviews, setReviews]     = useState<Review[]>(SEED_REVIEWS);
  const [name, setName]           = useState("");
  const [rating, setRating]       = useState(0);
  const [comment, setComment]     = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [analysis, setAnalysis]   = useState<Analysis | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [error, setError]         = useState("");

  const avgRating = reviews.reduce((a, r) => a + r.rating, 0) / reviews.length;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || rating === 0 || !comment.trim()) {
      setError("Please fill in all fields and select a rating.");
      return;
    }
    setError("");
    setSubmitting(true);

    const newReview: Review = {
      id: Date.now().toString(),
      name: name.trim(),
      rating,
      comment: comment.trim(),
      date: new Date().toISOString().split("T")[0],
    };

    const updated = [newReview, ...reviews];
    setReviews(updated);
    setName(""); setRating(0); setComment("");
    setSubmitting(false);

    // Auto-analyze after new submission
    await analyzeReviews(updated);
  }

  async function analyzeReviews(list = reviews) {
    setAnalyzing(true);
    setAnalysis(null);
    try {
      const res = await fetch("/api/generate-review-analysis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reviews: list }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setAnalysis(data);
    } catch {
      setError("Analysis failed. Please try again.");
    }
    setAnalyzing(false);
  }

  return (
    <section id="reviews" className="relative section container py-24 overflow-hidden">
      {/* Glows */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-brand-blue/15 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-brand-amber/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow [animation-delay:1.5s]" />

      {/* Header */}
      <div className="text-center relative z-10 mb-12">
        <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
          Client <span className="text-gradient-amber">Reviews</span>
        </h2>
        <p className="text-brand-muted mt-4 max-w-xl mx-auto">
          Real feedback from businesses we've helped grow.
        </p>
        {reviews.length > 0 && (
          <div className="flex items-center justify-center gap-2 mt-4">
            <StarRating value={Math.round(avgRating)} />
            <span className="text-white font-semibold">{avgRating.toFixed(1)}</span>
            <span className="text-brand-muted text-sm">({reviews.length} reviews)</span>
          </div>
        )}
      </div>

      <div className="relative z-10 grid lg:grid-cols-[1fr_420px] gap-10 max-w-5xl mx-auto">
        {/* Left — review list + AI analysis */}
        <div className="space-y-6">
          {/* AI Analysis panel */}
          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-white font-semibold text-sm">AI Sentiment Analysis</span>
              <button
                onClick={() => analyzeReviews()}
                disabled={analyzing}
                className="text-xs px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-brand-muted hover:text-white hover:border-brand-blue/40 transition disabled:opacity-50"
              >
                {analyzing ? "Analyzing..." : "Analyze ↗"}
              </button>
            </div>

            {analyzing && (
              <div className="space-y-2">
                <div className="h-3 bg-white/10 rounded animate-pulse w-3/4" />
                <div className="h-3 bg-white/10 rounded animate-pulse w-full" />
                <div className="h-3 bg-white/10 rounded animate-pulse w-5/6" />
              </div>
            )}

            {analysis && !analyzing && (
              <div className="space-y-3">
                <span className={`inline-block text-xs px-2.5 py-1 rounded-full border font-medium capitalize ${SENTIMENT_STYLES[analysis.sentiment]}`}>
                  {analysis.sentiment} sentiment
                </span>
                <p className="text-brand-muted text-sm leading-relaxed">{analysis.summary}</p>
                <ul className="space-y-1">
                  {analysis.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                      <span className="text-brand-amber mt-0.5">✦</span> {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {!analysis && !analyzing && (
              <p className="text-brand-muted text-sm">
                Click "Analyze" to get an AI-powered summary of all reviews.
              </p>
            )}
          </div>

          {/* Review cards */}
          <div className="space-y-4 max-h-[520px] overflow-y-auto pr-1 scrollbar-thin">
            {reviews.map((r) => (
              <div key={r.id} className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-5 hover:border-brand-blue/30 transition">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-white font-semibold text-sm">{r.name}</p>
                    <p className="text-brand-muted text-xs">{r.date}</p>
                  </div>
                  <StarRating value={r.rating} />
                </div>
                <p className="text-brand-muted text-sm leading-relaxed">{r.comment}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — submit form */}
        <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-6 h-fit sticky top-24">
          <h3 className="text-white font-semibold text-lg mb-5">Leave a Review</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-brand-muted text-xs mb-1.5 block">Your Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Maria Santos"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-brand-blue/50 transition"
              />
            </div>

            <div>
              <label className="text-brand-muted text-xs mb-1.5 block">Rating</label>
              <StarRating value={rating} onChange={setRating} />
            </div>

            <div>
              <label className="text-brand-muted text-xs mb-1.5 block">Comment</label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Share your experience..."
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-brand-blue/50 transition resize-none"
              />
            </div>

            {error && <p className="text-red-400 text-xs">{error}</p>}

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-2.5 rounded-lg bg-brand-amber text-black font-semibold text-sm hover:opacity-90 disabled:opacity-50 transition"
            >
              {submitting ? "Submitting..." : "Submit Review"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}