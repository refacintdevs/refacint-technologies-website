import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { pushSubscriptions } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { endpoint } = body;
    if (!endpoint) {
      return NextResponse.json({ error: "Endpoint required" }, { status: 400 });
    }
    await db
      .update(pushSubscriptions)
      .set({ disabledAt: new Date() })
      .where(eq(pushSubscriptions.endpoint, endpoint));
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("unsubscribe error:", e);
    return NextResponse.json({ error: "Failed to unsubscribe" }, { status: 500 });
  }
}

