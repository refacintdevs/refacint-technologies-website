"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    quote:
      "We needed a CRM that actually matched how our sales team works — not the other way around. Refacint built it in 6 weeks, and our close rate went up 28% in the first quarter. They didn't just build what we asked for, they challenged our assumptions and made it better.",
    name: "Client Name",
    title: "Role, Company Name",
    initials: "CN",
    project: "project-name.com",
    projectUrl: "#",
  },
  {
    quote:
      "We were spending 15 hours a week on content — writing, scheduling, posting across five platforms. Refacint built us an automation system that cut that to 2 hours. Same quality, same consistency, fraction of the time. It paid for itself in the first month.",
    name: "Client Name",
    title: "Role, Company Name",
    initials: "CN",
    project: "project-name.com",
    projectUrl: "#",
  },
  {
    quote:
      "I'd talked to three agencies before Refacint. They were the only ones who actually understood what I was trying to build. No jargon, no upselling — just 'here's how we'd do it, here's what it costs, here's when it's done.' And they delivered exactly that.",
    name: "Client Name",
    title: "Role, Company Name",
    initials: "CN",
    project: "project-name.com",
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
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            What Clients Say
          </p>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold tracking-tight">
            Real Results, Real Feedback
          </h2>
        </motion.div>

        <div className="mt-14">
          <div className="overflow-hidden rounded-2xl border border-border bg-background">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-8 sm:p-10 lg:p-14 flex flex-col justify-between">
                <div>
                  <Link
                    href={testimonial.projectUrl}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                  >
                    {testimonial.project}
                    <ArrowRight className="h-3 w-3" />
                  </Link>

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

                <div className="mt-10 flex items-center gap-3">
                  <button onClick={prev} className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all hover:border-primary/30 hover:bg-secondary" aria-label="Previous testimonial">
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                  <button onClick={next} className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all hover:border-primary/30 hover:bg-secondary" aria-label="Next testimonial">
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <span className="ml-2 text-xs text-muted-foreground">
                    {current + 1} / {testimonials.length}
                  </span>
                </div>
              </div>

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
                    <div className="w-full max-w-sm">
                      <div className="rounded-xl border border-border bg-background shadow-lg overflow-hidden">
                        <div className="flex items-center gap-1.5 px-4 py-2.5 bg-secondary/50 border-b border-border">
                          <span className="h-2 w-2 rounded-full bg-red-400/50" />
                          <span className="h-2 w-2 rounded-full bg-yellow-400/50" />
                          <span className="h-2 w-2 rounded-full bg-green-400/50" />
                          <span className="ml-3 text-[10px] text-muted-foreground/50 font-mono">
                            {testimonial.project}
                          </span>
                        </div>
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