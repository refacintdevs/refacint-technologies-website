"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, ArrowUpRight } from "lucide-react";

const posts = [
  {
    slug: "future-of-ai-in-business",
    title: "The Future of AI in Business: What Leaders Need to Know in 2026",
    excerpt:
      "Artificial intelligence is no longer a competitive advantage — it's a baseline requirement. Here's how forward-thinking companies are staying ahead.",
    category: "AI & Strategy",
    date: "Apr 10, 2026",
    readTime: "6 min read",
    gradient: "from-purple-500 to-violet-600",
  },
  {
    slug: "why-automation-fails",
    title: "Why 70% of Automation Projects Fail (And How to Be the 30%)",
    excerpt:
      "Most automation initiatives collapse under their own complexity. We break down the patterns that separate success from expensive failure.",
    category: "Automation",
    date: "Apr 3, 2026",
    readTime: "8 min read",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    slug: "building-scalable-platforms",
    title: "Building Platforms That Scale: Lessons from 50+ Projects",
    excerpt:
      "Architecture decisions made in week one echo for years. Here are the principles we follow to build systems that grow gracefully.",
    category: "Engineering",
    date: "Mar 28, 2026",
    readTime: "5 min read",
    gradient: "from-amber-500 to-orange-600",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function BlogPreview() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block rounded-full border border-border bg-card/50 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground backdrop-blur-sm">
              From the Blog
            </span>
            <h2 className="mt-6 font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">
              Insights &{" "}
              <span className="text-gradient">Thinking</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
            >
              View all posts
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Blog cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {posts.map((post) => (
            <motion.article
              key={post.slug}
              variants={cardVariants}
              className="group relative"
            >
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur-sm transition-all duration-500 hover:border-primary/20 hover:bg-card/60">
                  {/* Top gradient bar */}
                  <div
                    className={`h-1 w-full bg-gradient-to-r ${post.gradient}`}
                  />

                  <div className="p-8">
                    {/* Category + meta */}
                    <div className="flex items-center justify-between">
                      <span
                        className={`inline-block rounded-full bg-gradient-to-r ${post.gradient} px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white`}
                      >
                        {post.category}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0" />
                    </div>

                    {/* Title */}
                    <h3 className="mt-5 font-heading text-xl font-bold tracking-tight text-foreground leading-snug transition-colors duration-200 group-hover:text-primary">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Footer meta */}
                    <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground/70">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {post.date}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}