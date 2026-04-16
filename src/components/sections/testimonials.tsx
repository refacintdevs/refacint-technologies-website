"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    quote:
      "Refacint delivered exactly what we needed — a fast, reliable platform that handles thousands of daily transactions without breaking a sweat. Their team was responsive, transparent, and genuinely invested in our success.",
    name: "Adewale Okonkwo",
    title: "CTO, LogiFlow",
    initials: "AO",
    project: "logiflow.io",
    projectUrl: "#",
  },
  {
    quote:
      "We went from idea to launched product in 8 weeks. The quality of code, the attention to UX, and the communication throughout the project exceeded every expectation. Refacint is our go-to engineering partner.",
    name: "Ngozi Eze",
    title: "Founder, HealthBridge",
    initials: "NE",
    project: "healthbridge.ng",
    projectUrl: "#",
  },
  {
    quote:
      "The AI recommendation engine they built for our e-commerce platform increased average order value by 34% in the first quarter. They don't just build — they understand the business impact of every feature.",
    name: "Tunde Bakare",
    title: "Head of Product, ShopWave",
    initials: "TB",
    project: "shopwave.co",
    projectUrl: "#",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () =>
    setCurrent((c) => (c + 1) % testimonials.length);

  const testimonial = testimonials[current];

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Client Stories
          </p>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold tracking-tight">
            Powerful Results &amp; Happy Clients
          </h2>
        </motion.div>

        {/* Testimonial Card */}
        <div className="mt-14">
          <div className="overflow-hidden rounded-2xl border border-border bg-background">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left — Quote */}
              <div className="p-8 sm:p-10 lg:p-14 flex flex-col justify-between">
                <div>
                  {/* Project link */}
                  <Link
                    href={testimonial.projectUrl}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                  >
                    {testimonial.project}
                    <ArrowRight className="h-3 w-3" />
                  </Link>

                  {/* Quote */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -16 }}
                      transition={{ duration: 0.35 }}
                    >
                      <div className="mt-6 relative">
                        <Quote className="absolute -top-2 -left-1 h-8 w-8 text-primary/10" />
                        <p className="font-heading text-lg sm:text-xl font-semibold leading-relaxed text-foreground pl-1">
                          &ldquo;{testimonial.quote}&rdquo;
                        </p>
                      </div>

                      {/* Author */}
                      <div className="mt-8 flex items-center gap-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                          {testimonial.initials}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Navigation */}
                <div className="mt-10 flex items-center gap-3">
                  <button
                    onClick={prev}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all hover:border-primary/30 hover:bg-secondary"
                    aria-label="Previous testimonial"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={next}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all hover:border-primary/30 hover:bg-secondary"
                    aria-label="Next testimonial"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <span className="ml-2 text-xs text-muted-foreground">
                    {current + 1} / {testimonials.length}
                  </span>
                </div>
              </div>

              {/* Right — Screenshot placeholder */}
              <div className="relative border-t lg:border-t-0 lg:border-l border-border bg-secondary/30">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="h-full min-h-[360px] lg:min-h-[480px] flex items-center justify-center p-8"
                  >
                    {/* Replace this placeholder with real project screenshots */}
                    <div className="w-full max-w-sm">
                      {/* Fake browser window */}
                      <div className="rounded-xl border border-border bg-background shadow-lg overflow-hidden">
                        {/* Browser chrome */}
                        <div className="flex items-center gap-1.5 px-4 py-2.5 bg-secondary/50 border-b border-border">
                          <span className="h-2 w-2 rounded-full bg-red-400/50" />
                          <span className="h-2 w-2 rounded-full bg-yellow-400/50" />
                          <span className="h-2 w-2 rounded-full bg-green-400/50" />
                          <span className="ml-3 text-[10px] text-muted-foreground/50 font-mono">
                            {testimonial.project}
                          </span>
                        </div>
                        {/* Wireframe content */}
                        <div className="p-5 space-y-3">
                          <div className="h-4 w-2/3 rounded bg-border/70" />
                          <div className="h-3 w-full rounded bg-border/50" />
                          <div className="h-3 w-5/6 rounded bg-border/50" />
                          <div className="h-3 w-4/6 rounded bg-border/50" />
                          <div className="mt-4 h-24 w-full rounded-lg bg-primary/8" />
                          <div className="flex gap-2 mt-3">
                            <div className="h-7 w-20 rounded bg-primary/15" />
                            <div className="h-7 w-16 rounded bg-border/50" />
                          </div>
                          <div className="mt-3 h-3 w-full rounded bg-border/40" />
                          <div className="h-3 w-3/4 rounded bg-border/40" />
                        </div>
                      </div>
                    </div>

                    {/* When you have real screenshots, use:
                    <Image
                      src={`/images/testimonials/${testimonial.project}.jpg`}
                      alt={`${testimonial.project} screenshot`}
                      fill
                      className="object-cover"
                    />
                    */}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}