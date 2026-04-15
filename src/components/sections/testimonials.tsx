"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Refacint delivered exactly what we needed — a fast, reliable platform that handles thousands of daily transactions without breaking a sweat. Their team was responsive, transparent, and genuinely invested in our success.",
    name: "Adewale Okonkwo",
    role: "CTO, LogiFlow",
    gradient: "from-purple-500 to-violet-600",
  },
  {
    quote:
      "We went from idea to launched product in 8 weeks. The quality of code, the attention to UX, and the communication throughout the project exceeded every expectation. Refacint is our go-to engineering partner.",
    name: "Ngozi Eze",
    role: "Founder, HealthBridge",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    quote:
      "The AI recommendation engine they built for our e-commerce platform increased average order value by 34% in the first quarter. They don't just build — they understand the business impact of every feature.",
    name: "Tunde Bakare",
    role: "Head of Product, ShopWave",
    gradient: "from-amber-500 to-orange-600",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">
            Client Stories
          </p>
          <h2 className="mt-4 font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">
            Trusted by Teams That{" "}
            <span className="text-gradient">Ship</span>
          </h2>
        </motion.div>

        {/* Testimonial cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="group relative"
            >
              <div className="relative h-full rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-8 transition-all duration-300 hover:border-primary/20 hover:bg-card/60">
                {/* Quote icon */}
                <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${t.gradient}`}>
                  <Quote className="h-4 w-4 text-white" />
                </div>

                {/* Quote text */}
                <p className="mt-5 text-sm text-muted-foreground leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-6 pt-5 border-t border-border">
                  <div className="flex items-center gap-3">
                    <div className={`h-10 w-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-bold text-sm`}>
                      {t.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {t.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}