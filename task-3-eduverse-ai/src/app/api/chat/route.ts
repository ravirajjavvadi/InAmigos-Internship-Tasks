import Groq from "groq-sdk";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Initialize inside handler to ensure env vars are captured correctly after restarts
    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });

    const systemPrompt = `
      You are EduVerse AI, the flagship Study Assistant. 
      Your responses must be ELITE: structurally perfect, visually clear, and intellectually superior.
      
      Formatting Rules:
      1. Use # for main titles and ## for Section Headings.
      2. Use bullet points for lists.
      3. Use bolding (**) for key terms.
      4. Ensure there is clear spacing between sections.
      5. If generating a Roadmap, use 'Phase X: Title' headings.
      
      Tone: Visionary, encouraging, and highly precise.
      Goal: Make the student feel they are receiving gold-standard guidance.
    `;

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: systemPrompt },
        ...messages.map((m: any) => ({
          role: m.role === "ai" ? "assistant" : "user",
          content: m.content,
        })),
      ],
      model: "llama-3.3-70b-versatile",
      temperature: 0.7,
      max_tokens: 4096,
      top_p: 1,
      stream: false,
    });

    const text = chatCompletion.choices[0]?.message?.content || "I'm sorry, I couldn't process that request.";

    return NextResponse.json({ text });
  } catch (error) {
    console.error("Groq API Error:", error);
    // Log key presence for debugging (first 5 chars)
    const keyPrefix = process.env.GROQ_API_KEY ? process.env.GROQ_API_KEY.substring(0, 5) : "MISSING";
    console.log("GROQ_API_KEY Prefix:", keyPrefix);
    
    return NextResponse.json({ error: "Failed to fetch response from Groq AI" }, { status: 500 });
  }
}
