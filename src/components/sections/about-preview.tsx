"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "12+", label: "Team Experts" },
  { value: "4+", label: "Years Experience" },
];

export function AboutPreview() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-secondary/40" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              About Us
            </p>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold tracking-tight">
              Engineering the Next Wave of Digital
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Refacint Technologies is a team of engineers, designers, and
              strategists obsessed with building technology that actually works.
              We don&apos;t just write code — we solve problems that move
              businesses forward.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From startups shipping their first MVP to enterprises modernizing
              legacy systems, we bring the same level of craft, rigor, and care
              to every engagement.
            </p>
            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              Learn more about us
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Right — stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                className="rounded-2xl border border-border bg-background p-6 text-center"
              >
                <p className="font-heading text-3xl sm:text-4xl font-bold text-primary">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}