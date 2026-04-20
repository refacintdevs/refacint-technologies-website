"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "You Tell Us the Problem",
    description:
      "We get on a call, you tell us what's not working or what you need built. No technical knowledge required — we'll translate.",
  },
  {
    step: "02",
    title: "We Come Back With a Plan",
    description:
      "Within a few days, you get a clear proposal: what we'll build, how long it takes, and what it costs. No surprises, no hidden fees.",
  },
  {
    step: "03",
    title: "We Build It, You See Progress",
    description:
      "We work in weekly sprints. Every week you see what's done, give feedback, and we adjust. You're never in the dark.",
  },
  {
    step: "04",
    title: "We Ship It & Stick Around",
    description:
      "We launch your system, make sure it works, and stay available for support, fixes, and improvements. We don't disappear after delivery.",
  },
];

export function Process() {
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
            How It Works
          </p>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold tracking-tight">
            From First Call to Working System — Here&apos;s the Process
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed">
            We keep it simple. Four steps, clear communication, no mystery
            timelines.
          </p>
        </motion.div>

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