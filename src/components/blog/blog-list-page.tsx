"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const categories = [
  "All",
  "AI & Strategy",
  "Engineering",
  "Automation",
  "Company",
];

const allPosts = [
  {
    slug: "future-of-ai-in-business",
    title: "The Future of AI in Business: What Leaders Need to Know in 2026",
    excerpt:
      "Artificial intelligence is no longer a competitive advantage — it's a baseline requirement. Here's how forward-thinking companies are staying ahead.",
    category: "AI & Strategy",
    date: "Apr 10, 2026",
    readTime: "6 min read",
    gradient: "from-purple-500 to-violet-600",
    featured: true,
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
    featured: false,
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
    featured: false,
  },
  {
    slug: "ai-chatbots-beyond-hype",
    title: "AI Chatbots Beyond the Hype: Building Assistants That Actually Help",
    excerpt:
      "Most chatbots are glorified FAQ pages. Here's how we build conversational AI that understands context, handles edge cases, and delivers real value.",
    category: "AI & Strategy",
    date: "Mar 20, 2026",
    readTime: "7 min read",
    gradient: "from-cyan-500 to-blue-600",
    featured: false,
  },
  {
    slug: "choosing-the-right-tech-stack",
    title: "Choosing the Right Tech Stack in 2026: A Decision Framework",
    excerpt:
      "React or Vue? Python or Go? Monolith or microservices? We share the framework we use to make technology decisions that stand the test of time.",
    category: "Engineering",
    date: "Mar 12, 2026",
    readTime: "10 min read",
    gradient: "from-emerald-500 to-green-600",
    featured: false,
  },
  {
    slug: "refacint-year-in-review",
    title: "Refacint 2025: A Year of Growth, Craft, and Lessons Learned",
    excerpt:
      "Reflections on our fifth year — the projects that challenged us, the mistakes we made, and what we're building toward in 2026.",
    category: "Company",
    date: "Feb 28, 2026",
    readTime: "4 min read",
    gradient: "from-orange-500 to-red-600",
    featured: false,
  },
];

export function BlogListPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? allPosts
      : allPosts.filter((p) => p.category === activeCategory);

  const featured = allPosts.find((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured || activeCategory !== "All");

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block rounded-full border border-border bg-card/50 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground backdrop-blur-sm">
            Blog
          </span>
          <h1 className="mt-6 font-heading text-5xl font-extrabold tracking-tight sm:text-6xl">
            Insights &{" "}
            <span className="text-gradient">Thinking</span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Perspectives on building technology that matters — from the team
            shipping it every day.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex flex-wrap gap-2"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-gradient-brand text-white shadow-lg shadow-purple-500/15"
                  : "border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Featured post */}
        {activeCategory === "All" && featured && (
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12"
          >
            <Link href={`/blog/${featured.slug}`} className="group block">
              <div className="relative overflow-hidden rounded-3xl border border-border bg-card/30 backdrop-blur-sm transition-all duration-500 hover:border-primary/20 hover:bg-card/50">
                <div
                  className={`h-1.5 w-full bg-gradient-to-r ${featured.gradient}`}
                />
                <div className="p-10 lg:p-14">
                  <span
                    className={`inline-block rounded-full bg-gradient-to-r ${featured.gradient} px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white`}
                  >
                    Featured
                  </span>
                  <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight text-foreground lg:text-4xl transition-colors duration-200 group-hover:text-primary">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-3xl">
                    {featured.excerpt}
                  </p>
                  <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground/70">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      {featured.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      {featured.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.article>
        )}

        {/* Post grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
              className="group"
            >
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-card/30 backdrop-blur-sm transition-all duration-500 hover:border-primary/20 hover:bg-card/50">
                  <div
                    className={`h-1 w-full bg-gradient-to-r ${post.gradient}`}
                  />
                  <div className="p-8">
                    <div className="flex items-center justify-between">
                      <span
                        className={`inline-block rounded-full bg-gradient-to-r ${post.gradient} px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white`}
                      >
                        {post.category}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-all duration-300 group-hover:opacity-100" />
                    </div>
                    <h3 className="mt-5 font-heading text-xl font-bold tracking-tight text-foreground leading-snug transition-colors duration-200 group-hover:text-primary">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
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
        </div>
      </div>
    </section>
  );
}