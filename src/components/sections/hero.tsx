"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/projects";

const roles = [
  "Apps & Software",
  "AI Agents",
  "Automated Workflows",
  "Custom CRMs",
  "Content Systems",
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
    <span className="block relative overflow-hidden h-[1.25em]">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          className="block text-primary"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
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
    const scrollSpeed = 0.6;

    const scroll = () => {
      if (!isPaused && el) {
        el.scrollLeft += scrollSpeed;
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  // Duplicate for infinite scroll
  const items = [...projects, ...projects];

  return (
    <div
      ref={scrollRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="flex gap-5 overflow-x-hidden"
    >
      {items.map((item, i) => (
        <Link
          key={`${item.slug}-${i}`}
          href={item.url || "/work"}
          target={item.url ? "_blank" : undefined}
          rel={item.url ? "noopener noreferrer" : undefined}
          className="shrink-0 w-[340px] sm:w-[400px] lg:w-[460px]"
        >
          <div className="relative h-[220px] sm:h-[260px] lg:h-[295px] rounded-2xl overflow-hidden group cursor-pointer bg-secondary border border-border">
            {/* Browser chrome */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-background/90 backdrop-blur-sm flex items-center px-3 gap-1.5 border-b border-border/50 z-10">
              <span className="h-2 w-2 rounded-full bg-red-400/60" />
              <span className="h-2 w-2 rounded-full bg-yellow-400/60" />
              <span className="h-2 w-2 rounded-full bg-green-400/60" />
              <span className="ml-3 text-[10px] text-muted-foreground/70 font-mono truncate">
                {item.domain}
              </span>
            </div>

            {/* Real screenshot */}
            <Image
              src={item.image}
              alt={`${item.title} screenshot`}
              fill
              sizes="(max-width: 640px) 340px, (max-width: 1024px) 400px, 460px"
              className="object-cover object-top pt-8 transition-transform duration-500 group-hover:scale-[1.02]"
            />

            {/* Bottom label */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/95 via-background/70 to-transparent">
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
        </Link>
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold tracking-wide text-primary uppercase"
        >
          We build. We automate. You grow.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-4xl"
        >
          <h1 className="font-heading text-[1.75rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.6rem] font-extrabold leading-[1.2] tracking-tight">
            We Build
            <RotatingText />
            <span className="text-muted-foreground">
              That Run Your Business
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl"
        >
          Fullstack development, custom CRMs, AI agents, and workflow automation
          — built for business owners who want real systems, not just websites.
          You tell us what you need. We make it work.
        </motion.p>

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
            Tell Us What You Need
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground hover:bg-secondary hover:border-primary/20 transition-all duration-300"
          >
            See What We Build
            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-all duration-200 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="relative mt-16 w-full"
      >
        <div className="absolute top-0 left-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 right-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
        <AutoScrollCarousel />
      </motion.div>

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
          See Recent Projects
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </motion.div>
    </section>
  );
}
