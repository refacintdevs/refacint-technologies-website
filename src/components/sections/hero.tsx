"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Brain, Workflow } from "lucide-react";

const roles = [
  "Software Development",
  "AI Solutions",
  "Process Automation",
  "Digital Platforms",
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
    <span className="relative inline-block h-[1.2em] overflow-hidden align-bottom">
      {roles.map((role, i) => (
        <motion.span
          key={role}
          className="absolute left-0 text-gradient whitespace-nowrap"
          initial={{ y: "100%", opacity: 0 }}
          animate={{
            y: i === index ? "0%" : "-100%",
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

const floatingCards = [
  { icon: Code2, label: "Custom Software", x: "8%", y: "22%", delay: 0.8 },
  { icon: Brain, label: "AI & ML", x: "78%", y: "18%", delay: 1.1 },
  { icon: Workflow, label: "Automation", x: "72%", y: "68%", delay: 1.4 },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-pink-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber-500/3 blur-[140px] pointer-events-none" />

      {/* Floating cards — desktop only */}
      <div className="hidden lg:block">
        {floatingCards.map((card) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              delay: card.delay,
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute z-10"
            style={{ left: card.x, top: card.y }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card/60 backdrop-blur-md px-5 py-3.5 shadow-lg"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand">
                <card.icon className="h-5 w-5 text-white" />
              </div>
              <span className="text-sm font-medium text-foreground">
                {card.label}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-20 mx-auto max-w-5xl px-6 text-center">
        {/* Pill badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur-sm px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Available for new projects
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 font-heading text-5xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl"
        >
          We Build
          <br />
          <RotatingText />
          <br />
          <span className="text-muted-foreground">That Drive Growth</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed"
        >
          From concept to deployment — we design, develop, and maintain digital
          platforms powered by cutting-edge AI and intelligent automation.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-brand px-8 py-4 text-base font-semibold text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30 hover:scale-[1.02]"
          >
            Start a Project
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-base font-medium text-foreground transition-all duration-300 hover:bg-card hover:border-primary/30"
          >
            Explore Services
            <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:translate-x-1 group-hover:text-foreground" />
          </Link>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-20"
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground/60">
            Trusted by forward-thinking companies
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 opacity-40">
            {["Company A", "Company B", "Company C", "Company D"].map(
              (name) => (
                <span
                  key={name}
                  className="font-heading text-lg font-bold tracking-tight text-foreground"
                >
                  {name}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}