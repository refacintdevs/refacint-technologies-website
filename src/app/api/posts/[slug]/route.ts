import { NextRequest, NextResponse } from "next/server";
import { getPostBySlug, updatePost, deletePost } from "@/lib/blog/posts";
import { getSession } from "@/lib/auth";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ post });
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { slug } = await params;
  const body = await req.json();
  const existing = await getPostBySlug(slug);
  if (!existing) return NextResponse.json({ error: "Not found" }, { status: 404 });

  await updatePost(
    slug,
    {
      title: body.title ?? existing.title,
      excerpt: body.excerpt ?? existing.excerpt,
      category: body.category ?? existing.category,
      date: body.date ?? existing.date,
      readTime: body.readTime ?? existing.readTime,
      gradient: body.gradient ?? existing.gradient,
      published: body.published ?? existing.published,
      author: existing.author,
      coverImage: body.coverImage !== undefined ? body.coverImage : existing.coverImage,
    },
    body.content ?? existing.content
  );
  return NextResponse.json({ ok: true });
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { slug } = await params;
  await deletePost(slug);
  return NextResponse.json({ ok: true });
}

