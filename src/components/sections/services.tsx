"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Bot,
  Workflow,
  Database,
  FileText,
  Shield,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Code2,
    title: "Custom Software & App Development",
    description:
      "Need a web app, mobile app, or custom software that actually works? We build it from front to back — fast, reliable, and ready for real users from day one.",
    href: "/services#development",
  },
  {
    icon: Bot,
    title: "AI Agents",
    description:
      "We build AI agents that handle real tasks in your business — qualifying leads, answering customers, processing data — so your team can stop doing work a machine should do.",
    href: "/services#ai-agents",
  },
  {
    icon: Workflow,
    title: "AI & Workflow Automation",
    description:
      "If your team is copying data between tools, sending manual follow-ups, or running repetitive processes — we build systems that do it automatically, without errors, 24/7.",
    href: "/services#automation",
  },
  {
    icon: Database,
    title: "Custom CRM Development",
    description:
      "Off-the-shelf CRMs don't fit the way you actually work. We build CRMs from scratch — designed around your sales process, your data, and how your team operates.",
    href: "/services#crm",
  },
  {
    icon: FileText,
    title: "Content Automation Apps",
    description:
      "We build apps that generate, schedule, and distribute content across your channels automatically. You set the strategy, the system does the execution.",
    href: "/services#content-automation",
  },
  {
    icon: Shield,
    title: "Maintenance & Support",
    description:
      "We don't disappear after launch. Monitoring, security updates, performance fixes, and ongoing improvements — we keep your systems healthy so you don't have to worry.",
    href: "/services#maintenance",
  },
  {
    icon: MessageSquare,
    title: "AI Consulting",
    description:
      "Not sure where AI fits in your business? We sit down with you, look at how your business actually runs, and show you exactly where AI can save you time and money.",
    href: "/services#consulting",
  },
];

export function Services() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-secondary/50" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            What We Do
          </p>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold tracking-tight">
            Six Ways We Help Your Business Move Faster
          </h2>
        </motion.div>

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
            Let&apos;s Talk About Your Project
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}