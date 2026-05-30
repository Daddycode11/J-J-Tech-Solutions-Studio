// app/api/generate-systems/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { businessType } = await req.json();

  if (!businessType || typeof businessType !== "string") {
    return NextResponse.json(
      { error: "businessType is required" },
      { status: 400 }
    );
  }

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.ANTHROPIC_API_KEY!,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1000,
      messages: [
        {
          role: "user",
          content: `You are a business systems consultant. Generate exactly 4 business system recommendations tailored for a "${businessType}" business.

Respond ONLY with a valid JSON array, no markdown, no backticks, no preamble:
[
  { "title": "System Name", "desc": "One or two sentence description of what this system does and why it helps this specific business type." },
  ...
]

Make the titles and descriptions specific and relevant to ${businessType} businesses. Keep each desc under 20 words.`,
        },
      ],
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    console.error("Anthropic API error:", error);
    return NextResponse.json(
      { error: "Failed to generate systems" },
      { status: 502 }
    );
  }

  const data = await response.json();
  const raw =
    data.content.find((b: { type: string }) => b.type === "text")?.text ?? "[]";
  const clean = raw.replace(/```json|```/g, "").trim();

  try {
    const cards = JSON.parse(clean);
    return NextResponse.json({ cards });
  } catch {
    console.error("Failed to parse Claude response:", raw);
    return NextResponse.json(
      { error: "Invalid response from Claude" },
      { status: 500 }
    );
  }
}