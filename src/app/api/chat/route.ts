// app/api/chat/route.ts
import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";
import { GABRIEL_SYSTEM_PROMPT } from "@/lib/gabriel-prompt";

const client = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid messages" }, { status: 400 });
    }

    const response = await client.chat.completions.create({
      model: "llama-3.1-8b-instant",
      max_tokens: 500,
      messages: [
        { role: "system", content: GABRIEL_SYSTEM_PROMPT },
        ...messages.map((m: { role: string; content: string }) => ({
          role: m.role as "user" | "assistant",
          content: m.content,
        })),
      ],
    });

    const text = response.choices[0]?.message?.content ?? "Désolé, je n'ai pas pu générer une réponse.";

    return NextResponse.json({ reply: text });
  } catch (err) {
    console.error("Chat API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}