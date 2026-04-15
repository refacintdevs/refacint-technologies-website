"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const roles = [
  "Software Development",
  "AI Solutions",
  "Process Automation",
  "Digital Platforms",
];

const portfolioItems = [
  { title: "FinTech Dashboard", category: "Web App", color: "from-violet-500 to-purple-700" },
  { title: "Healthcare AI Platform", category: "AI Solution", color: "from-cyan-500 to-blue-700" },
  { title: "E-Commerce Rebuild", category: "Web Development", color: "from-amber-500 to-orange-700" },
  { title: "Logistics Automation", category: "Automation", color: "from-pink-500 to-rose-700" },
  { title: "SaaS Analytics Tool", category: "Web App", color: "from-emerald-500 to-green-700" },
  { title: "Enterprise CRM", category: "Platform", color: "from-indigo-500 to-violet-700" },
];

function RotatingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-block overflow-hidden h-[1.15em] align-bottom">
      {roles.map((role, i) => (
        <motion.span
          key={role}
          className="absolute left-0 text-gradient whitespace-nowrap"
          initial={false}
          animate={{
            y: i === index ? "0%" : i === (index - 1 + roles.length) % roles.length ? "-110%" : "110%",
            opacity: i === index ? 1 : 0,
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {role}
        </motion.span>
      ))}
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-12">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
        {/* Top tag */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold tracking-wide text-primary uppercase"
        >
          Software Development, AI & Automation
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-heading text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl max-w-4xl"
        >
          Building Powerful{" "}
          <RotatingText />
          <br />
          <span className="text-muted-foreground">That Drive Real Results</span>
        </motion.h1>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-start gap-4"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30 hover:scale-[1.02]"
          >
            Get a Proposal
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground hover:bg-card hover:border-primary/30 transition-all duration-300"
          >
            Our Services
            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-all duration-200 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>

        {/* Portfolio Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 relative"
        >
          <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory -mx-6 px-6">
            {portfolioItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.08, duration: 0.4 }}
                className="snap-start shrink-0 w-[320px] sm:w-[380px] lg:w-[420px]"
              >
                <div className={`relative h-[240px] sm:h-[280px] rounded-2xl bg-gradient-to-br ${item.color} overflow-hidden group cursor-pointer`}>
                  {/* Fake browser dots */}
                  <div className="absolute top-4 left-4 flex gap-1.5 z-10">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
                  </div>
                  {/* Grid pattern overlay */}
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
                  {/* Bottom label */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/60 to-transparent">
                    <p className="text-[11px] font-medium uppercase tracking-wider text-white/70">{item.category}</p>
                    <p className="text-lg font-bold text-white mt-0.5">{item.title}</p>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Fade edges */}
          <div className="absolute top-0 right-0 bottom-4 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
        </motion.div>
      </div>
    </section>
  );
}