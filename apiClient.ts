const API_URL = "https://api.anthropic.com/v1/messages";
const MODEL   = "claude-sonnet-4-20250514";

export interface FetchOptions {
  system: string;
  userMessage: string;
  maxTokens?: number;
}

/**
 * Memanggil Anthropic Messages API.
 * API key di-inject oleh proxy Claude.ai — tidak perlu disertakan di client.
 */
export async function callClaude({ system, userMessage, maxTokens = 3500 }: FetchOptions): Promise<string> {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: maxTokens,
      system,
      messages: [{ role: "user", content: userMessage }],
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`API error ${res.status}: ${err}`);
  }

  const data = await res.json();
  return data.content?.[0]?.text ?? "";
}

/**
 * Variant untuk chat multi-turn.
 */
export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export async function callClaudeChat(
  system: string,
  history: ChatMessage[],
  maxTokens = 1200,
): Promise<string> {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: maxTokens,
      system,
      messages: history,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`API error ${res.status}: ${err}`);
  }

  const data = await res.json();
  return data.content?.[0]?.text ?? "";
}
