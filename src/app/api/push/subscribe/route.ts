import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { pushSubscriptions } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { subscription } = body;
    if (!subscription?.endpoint || !subscription?.keys) {
      return NextResponse.json({ error: "Invalid subscription" }, { status: 400 });
    }

    const userAgent = req.headers.get("user-agent") || null;
    const subscriptionJson = JSON.stringify(subscription);

    // Upsert: if this endpoint already exists, re-enable it
    const existing = await db.query.pushSubscriptions.findFirst({
      where: eq(pushSubscriptions.endpoint, subscription.endpoint),
    });

    if (existing) {
      await db
        .update(pushSubscriptions)
        .set({
          subscriptionJson,
          userAgent,
          disabledAt: null,
        })
        .where(eq(pushSubscriptions.id, existing.id));
    } else {
      await db.insert(pushSubscriptions).values({
        endpoint: subscription.endpoint,
        subscriptionJson,
        userAgent,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("subscribe error:", e);
    return NextResponse.json({ error: "Failed to save subscription" }, { status: 500 });
  }
}

