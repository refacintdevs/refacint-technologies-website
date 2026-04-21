"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { testimonialProjects } from "@/lib/projects";

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  if (testimonialProjects.length === 0) return null;

  const prev = () =>
    setCurrent(
      (c) => (c - 1 + testimonialProjects.length) % testimonialProjects.length
    );
  const next = () =>
    setCurrent((c) => (c + 1) % testimonialProjects.length);

  const project = testimonialProjects[current];
  const testimonial = project.testimonial!;

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
              {/* LEFT: quote */}
              <div className="p-8 sm:p-10 lg:p-14 flex flex-col justify-between">
                <div>
                  {project.url ? (
                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                    >
                      {project.domain}
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  ) : (
                    <span className="text-sm font-semibold text-primary">
                      {project.domain}
                    </span>
                  )}

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
                    {current + 1} / {testimonialProjects.length}
                  </span>
                </div>
              </div>

              {/* RIGHT: real project screenshot */}
              <div className="relative border-t lg:border-t-0 lg:border-l border-border bg-secondary/30">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="h-full min-h-[360px] lg:min-h-[480px] flex items-center justify-center p-6 sm:p-10"
                  >
                    <div className="w-full max-w-xl">
                      <div className="rounded-xl border border-border bg-background shadow-lg overflow-hidden">
                        {/* Browser chrome */}
                        <div className="flex items-center gap-1.5 px-4 py-2.5 bg-secondary/50 border-b border-border">
                          <span className="h-2 w-2 rounded-full bg-red-400/50" />
                          <span className="h-2 w-2 rounded-full bg-yellow-400/50" />
                          <span className="h-2 w-2 rounded-full bg-green-400/50" />
                          <span className="ml-3 text-[10px] text-muted-foreground/60 font-mono truncate">
                            {project.domain}
                          </span>
                        </div>
                        {/* Real screenshot */}
                        <div className="relative w-full aspect-[16/9] bg-secondary">
                          <Image
                            src={project.image}
                            alt={`${project.title} screenshot`}
                            fill
                            sizes="(max-width: 1024px) 100vw, 576px"
                            className="object-cover object-top"
                          />
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
