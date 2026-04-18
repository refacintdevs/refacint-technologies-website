/**
 * Blog store — Neon Postgres via Drizzle.
 *
 * This file is the ONLY place that touches the database for blog content.
 * All pages (blog list, single post, admin) call these functions.
 * To migrate to a different store later, replace only this file.
 */
import { remark } from "remark";
import html from "remark-html";
import { eq, desc } from "drizzle-orm";
import { db } from "@/lib/db";
import { posts as postsTable } from "@/lib/db/schema";
import type { Post, PostListItem } from "./types";

async function renderMarkdown(md: string): Promise<string> {
  const processed = await remark().use(html).process(md);
  return processed.toString();
}

function rowToPost(row: typeof postsTable.$inferSelect): Omit<Post, "html"> {
  return {
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    content: row.content,
    category: row.category,
    date: row.date,
    readTime: row.readTime,
    gradient: row.gradient ?? "from-blue-500 to-cyan-500",
    coverImage: row.coverImage ?? undefined,
    author: row.authorName ?? "Refacint Team",
    published: row.published,
  };
}

export async function getAllSlugs(): Promise<string[]> {
  const rows = await db
    .select({ slug: postsTable.slug })
    .from(postsTable)
    .where(eq(postsTable.published, true));
  return rows.map((r) => r.slug);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const row = await db.query.posts.findFirst({
    where: eq(postsTable.slug, slug),
  });
  if (!row) return null;
  const base = rowToPost(row);
  const rendered = await renderMarkdown(base.content);
  return { ...base, html: rendered };
}

export async function getAllPosts(
  opts: { includeDrafts?: boolean } = {}
): Promise<PostListItem[]> {
  const rows = await db.query.posts.findMany({
    orderBy: [desc(postsTable.date), desc(postsTable.createdAt)],
  });
  return rows
    .filter((r) => opts.includeDrafts || r.published)
    .map((row) => {
      const { content: _c, ...rest } = rowToPost(row);
      void _c;
      return rest;
    });
}

export async function createPost(
  slug: string,
  frontmatter: Omit<Post, "slug" | "content" | "html">,
  content: string
): Promise<void> {
  await db.insert(postsTable).values({
    slug,
    title: frontmatter.title,
    excerpt: frontmatter.excerpt,
    content,
    category: frontmatter.category,
    date: frontmatter.date,
    readTime: frontmatter.readTime,
    gradient: frontmatter.gradient,
    coverImage: frontmatter.coverImage,
    authorName: frontmatter.author ?? "Refacint Team",
    published: frontmatter.published ?? true,
  });
}

export async function updatePost(
  slug: string,
  frontmatter: Omit<Post, "slug" | "content" | "html">,
  content: string
): Promise<void> {
  await db
    .update(postsTable)
    .set({
      title: frontmatter.title,
      excerpt: frontmatter.excerpt,
      content,
      category: frontmatter.category,
      date: frontmatter.date,
      readTime: frontmatter.readTime,
      gradient: frontmatter.gradient,
      coverImage: frontmatter.coverImage,
      authorName: frontmatter.author ?? "Refacint Team",
      published: frontmatter.published ?? true,
      updatedAt: new Date(),
    })
    .where(eq(postsTable.slug, slug));
}

export async function deletePost(slug: string): Promise<void> {
  await db.delete(postsTable).where(eq(postsTable.slug, slug));
}

