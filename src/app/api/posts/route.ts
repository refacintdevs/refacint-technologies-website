import { NextRequest, NextResponse } from "next/server";
import { getAllPosts, createPost, getPostBySlug } from "@/lib/blog/posts";
import { getSession } from "@/lib/auth";

export async function GET() {
  const posts = await getAllPosts({ includeDrafts: true });
  return NextResponse.json({ posts });
}

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const {
    slug,
    title,
    excerpt,
    category,
    date,
    readTime,
    gradient,
    published,
    content,
    coverImage,
  } = body;
  if (!slug || !title || !content) {
    return NextResponse.json(
      { error: "slug, title, and content are required" },
      { status: 400 }
    );
  }

  // Prevent duplicate slugs
  const existing = await getPostBySlug(slug);
  if (existing) {
    return NextResponse.json({ error: "Slug already exists" }, { status: 409 });
  }

  await createPost(
    slug,
    {
      title,
      excerpt: excerpt || "",
      category: category || "General",
      date: date || new Date().toISOString().slice(0, 10),
      readTime: readTime || "5 min read",
      gradient: gradient || "from-blue-500 to-cyan-500",
      published: published !== false,
      author: session.username,
      coverImage: coverImage || undefined,
    },
    content
  );
  return NextResponse.json({ ok: true, slug });
}

