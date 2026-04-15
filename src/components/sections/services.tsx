"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Code2,
  Brain,
  Workflow,
  Server,
  Shield,
  Rocket,
  ArrowUpRight,
} from "lucide-react";

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
            Our Services
          </p>
          <h2 className="mt-4 font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">
            Everything Your Business Needs to{" "}
            <span className="text-gradient">Succeed</span>
          </h2>
        </motion.div>

        {/* 2-col grid */}
        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <Link href={service.href} className="group block h-full">
                <div className="relative h-full rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-8 transition-all duration-300 hover:border-primary/25 hover:bg-card/70 hover:shadow-lg hover:shadow-primary/5">
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-gradient-brand group-hover:text-white">
                      <service.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-heading text-lg font-bold tracking-tight text-foreground">
                          {service.title}
                        </h3>
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0" />
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30"
          >
            Get a Proposal
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}