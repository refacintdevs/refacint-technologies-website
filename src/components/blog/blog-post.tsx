"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface BlogPostProps {
  post: {
    title: string;
    category: string;
    date: string;
    readTime: string;
    gradient: string;
    content: string;
  };
}

export function BlogPost({ post }: BlogPostProps) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 lg:px-8">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
            Back to blog
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8"
        >
          <span
            className={`inline-block rounded-full bg-gradient-to-r ${post.gradient} px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white`}
          >
            {post.category}
          </span>

          <h1 className="mt-6 font-heading text-4xl font-extrabold tracking-tight leading-tight sm:text-5xl">
            {post.title}
          </h1>

          <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>

          {/* Divider */}
          <div
            className={`mt-8 h-1 w-24 rounded-full bg-gradient-to-r ${post.gradient}`}
          />
        </motion.div>

        {/* Content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 prose-custom"
          dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
        />

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 rounded-2xl border border-border bg-card/30 backdrop-blur-sm p-8 text-center"
        >
          <h3 className="font-heading text-xl font-bold text-foreground">
            Ready to build something?
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Let&apos;s discuss how we can help bring your project to life.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function formatContent(content: string): string {
  return content
    .split("\n")
    .map((line) => {
      const trimmed = line.trim();
      if (!trimmed) return "";
      if (trimmed.startsWith("## "))
        return `<h2 class="mt-12 mb-4 font-heading text-2xl font-bold tracking-tight text-foreground">${trimmed.slice(3)}</h2>`;
      if (trimmed.startsWith("### "))
        return `<h3 class="mt-8 mb-3 font-heading text-xl font-bold tracking-tight text-foreground">${trimmed.slice(4)}</h3>`;
      if (trimmed.startsWith("**") && trimmed.endsWith("**"))
        return `<p class="mt-4 mb-2 font-semibold text-foreground">${trimmed.slice(2, -2)}</p>`;
      if (trimmed.startsWith("- "))
        return `<li class="ml-6 mb-1 text-muted-foreground list-disc">${trimmed.slice(2)}</li>`;
      // Handle inline bold
      const withBold = trimmed.replace(
        /\*\*(.*?)\*\*/g,
        '<strong class="text-foreground font-semibold">$1</strong>'
      );
      return `<p class="mb-4 text-muted-foreground leading-relaxed">${withBold}</p>`;
    })
    .join("\n");
}