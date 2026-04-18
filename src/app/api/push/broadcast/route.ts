import { NextRequest, NextResponse } from "next/server";
import { eq, sql } from "drizzle-orm";
import { getSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { posts } from "@/lib/db/schema";
import { sendPushToAll, countActiveSubscribers } from "@/lib/push";
import { siteConfig } from "@/lib/site.config";

export async function GET() {
  // Subscriber count (public-ish — no PII, just a number for the admin UI)
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const count = await countActiveSubscribers();
  return NextResponse.json({ count });
}

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const { slug } = body;
  if (!slug) return NextResponse.json({ error: "Slug required" }, { status: 400 });

  const post = await db.query.posts.findFirst({ where: eq(posts.slug, slug) });
  if (!post) return NextResponse.json({ error: "Post not found" }, { status: 404 });
  if (!post.published) {
    return NextResponse.json(
      { error: "Cannot push an unpublished post" },
      { status: 400 }
    );
  }

  const result = await sendPushToAll({
    title: post.title,
    body: post.excerpt || "New post from Refacint",
    url: `${siteConfig.url}/blog/${post.slug}`,
    icon: post.coverImage || `${siteConfig.url}/icons/icon-192x192.png`,
  });

  // Mark post as pushed
  await db
    .update(posts)
    .set({
      pushedAt: new Date(),
      pushCount: sql`${posts.pushCount} + 1`,
    })
    .where(eq(posts.id, post.id));

  return NextResponse.json({ ok: true, ...result });
}

