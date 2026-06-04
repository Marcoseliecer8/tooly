import Anthropic from "@anthropic-ai/sdk";
import { TOOLS } from "../../lib/tools";

export const runtime = "edge";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(request) {
  try {
    const { toolId, values } = await request.json();

    const tool = TOOLS[toolId];
    if (!tool) {
      return json({ error: "Unknown tool." }, 400);
    }

    const required = tool.fields.filter((f) => !f.optional);
    for (const f of required) {
      if (!values?.[f.id]?.trim()) {
        return json({ error: "Please fill in all required fields." }, 400);
      }
    }

    const message = await anthropic.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 1024,
      messages: [{ role: "user", content: tool.buildPrompt(values) }],
    });

    const text = message.content
      .map((block) => (block.type === "text" ? block.text : ""))
      .join("");

    return json({ result: text }, 200);
  } catch (err) {
    return json({ error: "Something went wrong. Please try again." }, 500);
  }
}

function json(obj, status) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
