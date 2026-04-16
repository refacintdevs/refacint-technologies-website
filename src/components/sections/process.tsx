"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We listen. Deep-dive into your goals, constraints, and technical landscape to define a clear path forward.",
  },
  {
    step: "02",
    title: "Strategy & Design",
    description:
      "Architecture, wireframes, and a detailed roadmap — everything aligned before a single line of code is written.",
  },
  {
    step: "03",
    title: "Build & Iterate",
    description:
      "Agile sprints with continuous feedback. You see progress weekly, not quarterly. No surprises.",
  },
  {
    step: "04",
    title: "Launch & Evolve",
    description:
      "Deploy with confidence. Post-launch support, monitoring, and continuous improvement built into every engagement.",
  },
];

export function Process() {
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
            Our Process
          </p>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold tracking-tight">
            How We Deliver
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed">
            A proven framework refined across 50+ projects. Transparent, fast,
            and built for real results.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="rounded-2xl border border-border bg-background p-7 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
            >
              <span className="inline-flex items-center justify-center rounded-lg bg-primary/10 px-3 py-1 text-xs font-bold text-primary tracking-wider">
                STEP {item.step}
              </span>
              <h3 className="mt-5 font-heading text-xl font-bold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}