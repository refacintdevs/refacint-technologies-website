"use client";

import { useEffect, useState, useRef } from "react";
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
  {
    title: "FinTech Dashboard",
    category: "Web App",
    image: "/images/portfolio/fintech.jpg",
  },
  {
    title: "Healthcare AI Platform",
    category: "AI Solution",
    image: "/images/portfolio/healthcare.jpg",
  },
  {
    title: "E-Commerce Rebuild",
    category: "Web Development",
    image: "/images/portfolio/ecommerce.jpg",
  },
  {
    title: "Logistics Automation",
    category: "Automation",
    image: "/images/portfolio/logistics.jpg",
  },
  {
    title: "SaaS Analytics Tool",
    category: "Web App",
    image: "/images/portfolio/saas.jpg",
  },
  {
    title: "Enterprise CRM",
    category: "Platform",
    image: "/images/portfolio/crm.jpg",
  },
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
          className="absolute left-0 text-primary whitespace-nowrap"
          initial={false}
          animate={{
            y:
              i === index
                ? "0%"
                : i === (index - 1 + roles.length) % roles.length
                ? "-110%"
                : "110%",
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

function AutoScrollCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId: number;
    let scrollSpeed = 0.6;

    const scroll = () => {
      if (!isPaused && el) {
        el.scrollLeft += scrollSpeed;
        // Reset to start when halfway (we duplicate items)
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  // Double items for infinite scroll
  const items = [...portfolioItems, ...portfolioItems];

  return (
    <div
      ref={scrollRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="flex gap-5 overflow-x-hidden"
    >
      {items.map((item, i) => (
        <div
          key={`${item.title}-${i}`}
          className="shrink-0 w-[340px] sm:w-[400px] lg:w-[460px]"
        >
          <div className="relative h-[220px] sm:h-[260px] lg:h-[295px] rounded-2xl overflow-hidden group cursor-pointer bg-secondary border border-border">
            {/* Placeholder gradient — replace with real screenshots */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary via-muted to-secondary" />

            {/* If you have real screenshots, uncomment this: */}
            {/* <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            /> */}

            {/* Fake browser chrome */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-background/60 backdrop-blur-sm flex items-center px-3 gap-1.5 border-b border-border/50">
              <span className="h-2 w-2 rounded-full bg-red-400/60" />
              <span className="h-2 w-2 rounded-full bg-yellow-400/60" />
              <span className="h-2 w-2 rounded-full bg-green-400/60" />
              <span className="ml-3 text-[10px] text-muted-foreground/60 font-mono">
                {item.title.toLowerCase().replace(/\s+/g, "-")}.com
              </span>
            </div>

            {/* Content placeholder lines */}
            <div className="absolute top-12 left-5 right-5 space-y-3">
              <div className="h-5 w-3/4 rounded bg-border/60" />
              <div className="h-3 w-full rounded bg-border/40" />
              <div className="h-3 w-5/6 rounded bg-border/40" />
              <div className="mt-4 h-8 w-28 rounded-lg bg-primary/15" />
            </div>

            {/* Bottom label */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 via-background/50 to-transparent">
              <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                {item.category}
              </p>
              <p className="text-base font-bold text-foreground mt-0.5">
                {item.title}
              </p>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-all duration-300" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-16">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
        {/* Top tag */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold tracking-wide text-primary uppercase"
        >
          Software Development, AI &amp; Automation
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-6 font-heading text-[2.8rem] sm:text-[3.4rem] lg:text-[3.9rem] font-extrabold leading-[1.12] tracking-tight max-w-4xl"
        >
          Building Powerful{" "}
          <RotatingText />
          <br />
          <span className="text-muted-foreground">
            That Drive Real Results
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl"
        >
          We design, develop, deploy, and maintain digital platforms and
          technology solutions that transform how businesses operate and grow.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-start gap-4"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
          >
            Get a Proposal
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground hover:bg-secondary hover:border-primary/20 transition-all duration-300"
          >
            Our Services
            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-all duration-200 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>

      {/* Full-width scrolling portfolio */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="relative mt-16 w-full"
      >
        {/* Fade edges */}
        <div className="absolute top-0 left-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 right-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />

        <AutoScrollCarousel />
      </motion.div>

      {/* Recent Work link */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full mt-8"
      >
        <Link
          href="/work"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          View Our Work
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </motion.div>
    </section>
  );
}