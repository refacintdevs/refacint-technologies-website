"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Brain,
  Workflow,
  Server,
  Shield,
  Rocket,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Custom web & mobile applications built with modern architectures. Scalable, maintainable, and designed to evolve with your business.",
    gradient: "from-amber-500 to-orange-600",
    shadowColor: "shadow-amber-500/20",
  },
  {
    icon: Brain,
    title: "AI Solutions",
    description:
      "Machine learning models, NLP systems, and intelligent agents that transform raw data into actionable business intelligence.",
    gradient: "from-purple-500 to-violet-600",
    shadowColor: "shadow-purple-500/20",
  },
  {
    icon: Workflow,
    title: "Process Automation",
    description:
      "End-to-end workflow automation that eliminates bottlenecks, reduces errors, and frees your team to focus on what matters.",
    gradient: "from-pink-500 to-rose-600",
    shadowColor: "shadow-pink-500/20",
  },
  {
    icon: Server,
    title: "Platform Engineering",
    description:
      "Cloud infrastructure, DevOps pipelines, and platform architecture designed for reliability at any scale.",
    gradient: "from-cyan-500 to-blue-600",
    shadowColor: "shadow-cyan-500/20",
  },
  {
    icon: Shield,
    title: "Maintenance & Support",
    description:
      "Proactive monitoring, security updates, and continuous optimization to keep your digital assets performing at peak.",
    gradient: "from-emerald-500 to-green-600",
    shadowColor: "shadow-emerald-500/20",
  },
  {
    icon: Rocket,
    title: "Digital Transformation",
    description:
      "Strategic consulting and execution to modernize legacy systems and accelerate your organization's digital journey.",
    gradient: "from-orange-500 to-red-600",
    shadowColor: "shadow-orange-500/20",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Services() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block rounded-full border border-border bg-card/50 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground backdrop-blur-sm">
            What We Do
          </span>
          <h2 className="mt-6 font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">
            Services Built for{" "}
            <span className="text-gradient">Impact</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Full-cycle technology solutions — from initial concept through
            deployment and beyond.
          </p>
        </motion.div>

        {/* Service cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative"
            >
              <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-8 transition-all duration-500 hover:border-primary/20 hover:bg-card/70">
                {/* Hover glow */}
                <div
                  className={`absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br ${service.gradient} opacity-0 blur-[80px] transition-opacity duration-500 group-hover:opacity-10`}
                />

                {/* Icon */}
                <div
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} shadow-lg ${service.shadowColor} transition-transform duration-300 group-hover:scale-110`}
                >
                  <service.icon className="h-6 w-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="mt-6 font-heading text-xl font-bold tracking-tight text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                {/* Bottom line accent */}
                <div
                  className={`absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r ${service.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-60`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}