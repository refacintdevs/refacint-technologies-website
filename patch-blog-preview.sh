#!/usr/bin/env bash
# Patch: replace homepage BlogPreview dummy posts with live data from Neon.
# Run from project root.
set -euo pipefail

if [ ! -f "package.json" ] || [ ! -f "src/components/sections/blog-preview.tsx" ]; then
  echo "ERROR: run this from your project root."
  exit 1
fi

echo "==> Backing up old blog-preview.tsx"
cp src/components/sections/blog-preview.tsx \
   "src/components/sections/blog-preview.tsx.bak.$(date +%s)"

echo "==> Writing new blog-preview.tsx (server component, reads from DB)"
cat > src/components/sections/blog-preview.tsx << 'PATCH_EOF'
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/blog/posts";
import { BlogPreviewCard } from "./blog-preview-card";

export const revalidate = 60;

export async function BlogPreview() {
  const allPosts = await getAllPosts();
  const posts = allPosts.slice(0, 3);

  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              From the Blog
            </p>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold tracking-tight">
              Insights &amp; Thinking
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            View All Posts
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <BlogPreviewCard key={post.slug} index={i}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block h-full rounded-2xl border border-border bg-background overflow-hidden transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
              >
                {post.coverImage ? (
                  <div className="relative h-48 bg-secondary overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div
                    className={`h-48 flex items-center justify-center bg-gradient-to-br ${
                      post.gradient ?? "from-blue-500 to-cyan-500"
                    }`}
                  >
                    <span className="text-xs font-semibold uppercase tracking-wider text-white/70">
                      {post.category}
                    </span>
                  </div>
                )}

                <div className="p-6">
                  <span className="inline-block text-xs font-semibold text-primary uppercase tracking-wider">
                    {post.category}
                  </span>
                  <h3 className="mt-2 font-heading text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <p className="mt-4 text-xs text-muted-foreground">
                    <time dateTime={post.date}>{post.date}</time> &middot; {post.readTime}
                  </p>
                </div>
              </Link>
            </BlogPreviewCard>
          ))}
        </div>

        <div className="mt-8 sm:hidden text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            View All Posts
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
PATCH_EOF

echo "==> Writing new blog-preview-card.tsx (client child for animation)"
cat > src/components/sections/blog-preview-card.tsx << 'PATCH_EOF'
"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function BlogPreviewCard({
  children,
  index,
}: {
  children: ReactNode;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
PATCH_EOF

echo ""
echo "============================================================"
echo "  Done."
echo "============================================================"
echo ""
echo "  Test locally:  npm run dev"
echo "  Deploy:        git add . && git commit -m \"feat: live blog posts on homepage\" && git push"
echo ""
echo "  If empty, the section auto-hides until you publish at least one post."
