"use client";

import { motion } from "framer-motion";
import { Target, Eye, Gem, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Precision",
    description:
      "Every decision — from architecture to pixel — is intentional. We don't ship 'good enough.'",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "No black boxes. You see progress weekly, understand every decision, and own everything we build.",
  },
  {
    icon: Gem,
    title: "Craft",
    description:
      "We treat code as craft. Clean, documented, tested, and built to outlast the project timeline.",
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "We're not vendors. We embed with your team, learn your domain, and operate as an extension of your organization.",
  },
];

const timeline = [
  {
    year: "2021",
    title: "Founded",
    description:
      "Started with a simple thesis: businesses deserve technology partners who actually build, not just advise.",
  },
  {
    year: "2022",
    title: "First Major Platform",
    description:
      "Delivered our first enterprise-grade platform — a logistics automation system processing 10K+ daily transactions.",
  },
  {
    year: "2023",
    title: "AI Practice Launched",
    description:
      "Expanded into AI solutions, deploying ML models and NLP systems for clients across fintech and healthcare.",
  },
  {
    year: "2024",
    title: "Team Growth",
    description:
      "Grew to a distributed team of 12+ specialists across engineering, design, and strategy.",
  },
  {
    year: "2025",
    title: "50+ Projects Milestone",
    description:
      "Crossed 50 successful project deliveries with a 98% client satisfaction rate.",
  },
];

export function AboutPage() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-block rounded-full border border-border bg-card/50 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground backdrop-blur-sm">
            About Us
          </span>
          <h1 className="mt-6 font-heading text-5xl font-extrabold tracking-tight sm:text-6xl">
            We Build What{" "}
            <span className="text-gradient">Matters</span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
            Refacint Technologies is a software development and AI solutions
            company. We design, build, deploy, and maintain digital platforms
            for businesses ready to move fast and build right.
          </p>
        </motion.div>

        {/* Mission block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 relative overflow-hidden rounded-3xl border border-border bg-card/30 backdrop-blur-sm p-10 lg:p-16"
        >
          <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-purple-500/5 blur-[100px] pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Our Mission
              </h3>
              <p className="mt-4 text-2xl font-heading font-bold leading-snug text-foreground">
                To empower businesses with technology that&apos;s built to last — not
                just to launch.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Our Approach
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We don&apos;t believe in one-size-fits-all. Every engagement starts
                with deep discovery — understanding your business, users, and
                constraints. Then we architect a solution that fits your reality,
                not our template. We ship in sprints, communicate obsessively,
                and stay with you well past launch day.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <div className="mt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">
              Our <span className="text-gradient">Values</span>
            </h2>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card/30 backdrop-blur-sm p-8 transition-all duration-300 hover:border-primary/20 hover:bg-card/50"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand">
                  <value.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">
              Our <span className="text-gradient">Journey</span>
            </h2>
          </motion.div>

          <div className="relative mt-16 max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent sm:left-1/2" />

            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`relative flex items-start gap-8 mb-12 ${
                  i % 2 === 0
                    ? "sm:flex-row"
                    : "sm:flex-row-reverse sm:text-right"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-gradient-brand border-2 border-background z-10 mt-1.5" />

                {/* Content */}
                <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8">
                  <span className="font-mono text-xs font-semibold text-primary tracking-wider">
                    {item.year}
                  </span>
                  <h3 className="mt-1 font-heading text-lg font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}