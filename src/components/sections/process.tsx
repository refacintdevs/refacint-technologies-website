"use client";

import { motion } from "framer-motion";
import { MessageSquare, Lightbulb, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Discovery",
    description:
      "We listen. Deep-dive into your goals, constraints, and technical landscape to define a clear path forward.",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Strategy & Design",
    description:
      "Architecture, wireframes, and a detailed roadmap — everything aligned before a single line of code is written.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Build & Iterate",
    description:
      "Agile sprints with continuous feedback. You see progress weekly, not quarterly. No surprises.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch & Evolve",
    description:
      "Deploy with confidence. Post-launch support, monitoring, and continuous improvement built into every engagement.",
  },
];

export function Process() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block rounded-full border border-border bg-card/50 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground backdrop-blur-sm">
            Our Process
          </span>
          <h2 className="mt-6 font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">
            How We{" "}
            <span className="text-gradient">Deliver</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A proven framework refined across 50+ projects. Transparent, fast,
            and built for real results.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative mt-20">
          {/* Connecting line — desktop */}
          <div className="hidden lg:block absolute top-24 left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-px bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.15,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative text-center"
              >
                {/* Number circle */}
                <div className="relative mx-auto flex h-14 w-14 items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-2 border-border bg-background transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-lg group-hover:shadow-primary/10" />
                  <div className="absolute inset-1.5 rounded-full bg-gradient-brand opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <step.icon className="relative z-10 h-5 w-5 text-muted-foreground transition-colors duration-300 group-hover:text-white" />
                </div>

                {/* Step number */}
                <span className="mt-6 inline-block font-mono text-xs font-semibold text-primary/60 tracking-wider">
                  STEP {step.number}
                </span>

                <h3 className="mt-2 font-heading text-xl font-bold tracking-tight text-foreground">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}