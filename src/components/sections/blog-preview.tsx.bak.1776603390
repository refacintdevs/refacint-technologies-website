"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const posts = [
  {
    slug: "future-of-ai-in-business",
    category: "AI & Strategy",
    title: "The Future of AI in Business: What Leaders Need to Know in 2026",
    excerpt:
      "Artificial intelligence is no longer a competitive advantage — it's a baseline requirement. Here's how forward-thinking companies are staying ahead.",
    date: "Apr 10, 2026",
    readTime: "6 min read",
  },
  {
    slug: "why-automation-fails",
    category: "Automation",
    title: "Why 70% of Automation Projects Fail (And How to Be the 30%)",
    excerpt:
      "Most automation initiatives collapse under their own complexity. We break down the patterns that separate success from expensive failure.",
    date: "Apr 3, 2026",
    readTime: "8 min read",
  },
  {
    slug: "building-scalable-platforms",
    category: "Engineering",
    title: "Building Platforms That Scale: Lessons from 50+ Projects",
    excerpt:
      "Architecture decisions made in week one echo for years. Here are the principles we follow to build systems that grow gracefully.",
    date: "Mar 28, 2026",
    readTime: "5 min read",
  },
];

export function BlogPreview() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between"
        >
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
        </motion.div>

        {/* Posts grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group block h-full rounded-2xl border border-border bg-background overflow-hidden transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Image placeholder */}
                <div className="h-48 bg-secondary flex items-center justify-center">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/40">
                    {post.category}
                  </span>
                </div>

                <div className="p-6">
                  <span className="inline-block text-xs font-semibold text-primary uppercase tracking-wider">
                    {post.category}
                  </span>
                  <h3 className="mt-2 font-heading text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <p className="mt-4 text-xs text-muted-foreground">
                    {post.date} · {post.readTime}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile link */}
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