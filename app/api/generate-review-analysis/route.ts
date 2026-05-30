import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { reviews } = await req.json();

  if (!Array.isArray(reviews) || reviews.length === 0) {
    return NextResponse.json({ error: "reviews array is required" }, { status: 400 });
  }

  const formatted = reviews
    .map((r: { rating: number; comment: string; name: string }) =>
      `- ${r.name} (${r.rating}/5): "${r.comment}"`
    )
    .join("\n");

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.ANTHROPIC_API_KEY!,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 300,
      messages: [
        {
          role: "user",
          content: `You are a review analyst. Given these customer reviews, produce a short JSON summary.

Reviews:
${formatted}

Respond ONLY with valid JSON, no markdown, no backticks:
{
  "sentiment": "positive" | "mixed" | "negative",
  "summary": "2-3 sentence overview of what customers love and any concerns.",
  "highlights": ["key point 1", "key point 2", "key point 3"]
}`,
        },
      ],
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ error: "Anthropic API error" }, { status: 502 });
  }

  const data = await response.json();
  const raw = data.content.find((b: { type: string }) => b.type === "text")?.text ?? "{}";
  const clean = raw.replace(/```json|```/g, "").trim();

  try {
    return NextResponse.json(JSON.parse(clean));
  } catch {
    return NextResponse.json({ error: "Invalid Claude response" }, { status: 500 });
  }
}