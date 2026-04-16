"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Brain,
  Workflow,
  Server,
  Shield,
  Rocket,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Web & mobile applications built with modern architectures — scalable, maintainable, and designed to grow with your business.",
    href: "/services#software",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "From predictive models to NLP systems — AI solutions that transform raw data into actionable business intelligence.",
    href: "/services#ai",
  },
  {
    icon: Workflow,
    title: "Process Automation",
    description:
      "End-to-end workflow automation that eliminates bottlenecks, reduces errors, and frees your team for high-value work.",
    href: "/services#automation",
  },
  {
    icon: Server,
    title: "Platform Engineering",
    description:
      "Cloud-native infrastructure, CI/CD pipelines, and architecture designed for reliability and performance at any scale.",
    href: "/services#platform",
  },
  {
    icon: Shield,
    title: "Maintenance & Support",
    description:
      "Proactive monitoring, security patches, and continuous optimization — keeping your systems healthy and performant.",
    href: "/services#maintenance",
  },
  {
    icon: Rocket,
    title: "Digital Transformation",
    description:
      "Strategic consulting and hands-on execution to modernize legacy systems and accelerate your digital journey.",
    href: "/services#transformation",
  },
];

export function Services() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-secondary/50" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Our Services
          </p>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold tracking-tight">
            Everything Your Business Needs to Succeed
          </h2>
        </motion.div>

        {/* Service cards grid */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
            >
              <Link
                href={service.href}
                className="group block h-full rounded-2xl border border-border bg-background p-8 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <service.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
          >
            Get a Proposal
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}