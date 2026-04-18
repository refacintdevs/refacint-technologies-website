/**
 * Web Push helpers. Server-side only.
 */
import webpush from "web-push";
import { db } from "@/lib/db";
import { pushSubscriptions } from "@/lib/db/schema";
import { eq, isNull, sql } from "drizzle-orm";

let configured = false;
function ensureConfigured() {
  if (configured) return;
  const subject = process.env.VAPID_SUBJECT || "mailto:hello@refacint.com";
  const publicKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
  const privateKey = process.env.VAPID_PRIVATE_KEY;
  if (!publicKey || !privateKey) {
    throw new Error("VAPID keys are not set. Check .env.local");
  }
  webpush.setVapidDetails(subject, publicKey, privateKey);
  configured = true;
}

export interface PushPayload {
  title: string;
  body: string;
  url: string;
  icon?: string;
}

export async function sendPushToAll(payload: PushPayload): Promise<{
  sent: number;
  failed: number;
  disabled: number;
}> {
  ensureConfigured();
  const body = JSON.stringify(payload);
  const subs = await db.query.pushSubscriptions.findMany({
    where: isNull(pushSubscriptions.disabledAt),
  });

  let sent = 0;
  let failed = 0;
  let disabled = 0;

  await Promise.all(
    subs.map(async (sub) => {
      try {
        const parsed = JSON.parse(sub.subscriptionJson);
        await webpush.sendNotification(parsed, body);
        sent++;
        await db
          .update(pushSubscriptions)
          .set({ lastPushedAt: new Date() })
          .where(eq(pushSubscriptions.id, sub.id));
      } catch (e) {
        const err = e as { statusCode?: number };
        // 404 or 410 = subscription is gone. Disable it.
        if (err.statusCode === 404 || err.statusCode === 410) {
          disabled++;
          await db
            .update(pushSubscriptions)
            .set({ disabledAt: new Date() })
            .where(eq(pushSubscriptions.id, sub.id));
        } else {
          failed++;
        }
      }
    })
  );

  return { sent, failed, disabled };
}

export async function countActiveSubscribers(): Promise<number> {
  const result = await db
    .select({ count: sql<number>`count(*)::int` })
    .from(pushSubscriptions)
    .where(isNull(pushSubscriptions.disabledAt));
  return result[0]?.count ?? 0;
}

