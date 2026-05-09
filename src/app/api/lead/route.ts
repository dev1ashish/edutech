import { NextResponse } from "next/server";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().min(2).max(80),
  phone: z.string().regex(/^[+\d][\d\s-]{8,15}$/),
  program: z.string().min(1).max(80),
  university: z.string().min(1).max(80),
  consent: z.literal(true),
});

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.issues },
      { status: 400 }
    );
  }

  const lead = {
    ...parsed.data,
    receivedAt: new Date().toISOString(),
    source: req.headers.get("referer") ?? "direct",
    userAgent: req.headers.get("user-agent") ?? "unknown",
  };

  // Forward to a CRM / Google Sheets / email webhook if configured.
  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
    } catch (err) {
      console.error("Lead webhook failed:", err);
    }
  } else {
    console.log("[lead]", lead);
  }

  return NextResponse.json({ ok: true });
}
