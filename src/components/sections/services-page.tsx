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
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "development",
    icon: Code2,
    title: "Custom Software & App Development",
    subtitle: "Your idea, built and shipped",
    description:
      "You have a product idea, a business tool, or a platform that needs to exist. We take it from concept to live product — handling the frontend your users see, the backend that powers it, and everything in between. Web apps, mobile apps, custom software — no templates, no shortcuts. Code that's built to handle real traffic and real users from day one.",
    whyUs:
      "We've shipped apps across e-commerce, fintech, logistics, and SaaS. We write clean code, communicate clearly, and hit deadlines.",
    features: [
      "Web applications (React, Next.js, Node.js)",
      "Mobile apps (iOS & Android)",
      "Custom business software & internal tools",
      "API development & third-party integrations",
      "Database architecture & optimization",
    ],
  },
  {
    id: "ai-agents",
    icon: Bot,
    title: "AI Agent Development",
    subtitle: "AI that does real work in your business",
    description:
      "An AI agent isn't a chatbot that says 'I'm sorry, I can't help with that.' It's a system that actually does things — qualifies your leads, handles customer questions with real answers, processes documents, books appointments, and routes tasks. We build agents that plug into your existing tools and handle the work your team shouldn't be doing manually.",
    whyUs:
      "We don't just connect APIs. We understand your business process first, then build an agent that fits into it naturally.",
    features: [
      "Lead qualification & routing agents",
      "Customer support agents with real knowledge",
      "Document processing & data extraction",
      "Multi-step task automation agents",
      "Integration with your existing tools (Slack, CRM, email)",
    ],
  },
  {
    id: "automation",
    icon: Workflow,
    title: "AI & Workflow Automation",
    subtitle: "Stop doing manually what a system can do",
    description:
      "Every business has processes that eat up hours — sending follow-up emails, moving data between spreadsheets and tools, generating reports, onboarding new clients. We map out those workflows and build automated systems that run them for you. No more human error. No more 'I forgot to send that.' It just works.",
    whyUs:
      "We don't just set up Zapier. We build custom automation systems that handle complex, multi-step business logic that off-the-shelf tools can't.",
    features: [
      "End-to-end workflow mapping & automation",
      "Email sequences & follow-up automation",
      "Data sync between platforms",
      "Reporting & notification systems",
      "Legacy system integration",
    ],
  },
  {
    id: "crm",
    icon: Database,
    title: "Custom CRM Development",
    subtitle: "A CRM that fits how you actually sell",
    description:
      "Salesforce is expensive. HubSpot doesn't do what you need. Every off-the-shelf CRM forces you to work around its limitations. We build CRMs from scratch — designed around your pipeline, your team's workflow, and the data that actually matters to your business. You get exactly what you need, nothing you don't.",
    whyUs:
      "We've built CRMs for sales teams, service businesses, and agencies. We understand pipelines, reporting, and what makes a CRM people actually use.",
    features: [
      "Custom pipeline & deal tracking",
      "Contact management & segmentation",
      "Automated follow-ups & reminders",
      "Reporting dashboards & analytics",
      "Role-based access & team management",
    ],
  },
  {
    id: "content-automation",
    icon: FileText,
    title: "Content Automation Apps",
    subtitle: "Content that creates and publishes itself",
    description:
      "You know you need to post content consistently. You also know it takes forever. We build apps that generate content based on your strategy, schedule it across your channels, and publish it — automatically. You set the direction, review what matters, and the system handles the rest.",
    whyUs:
      "We combine AI with real publishing workflows. Not just 'generate text' — we build full systems that draft, review, schedule, and distribute.",
    features: [
      "AI-powered content generation",
      "Multi-platform scheduling & publishing",
      "Content calendar & approval workflows",
      "Analytics & performance tracking",
      "Brand voice & template management",
    ],
  },
  {
    id: "maintenance",
    icon: Shield,
    title: "Maintenance & Support",
    subtitle: "We stick around after launch",
    description:
      "Most agencies disappear after delivery. We don't. Your system needs monitoring, updates, security patches, and someone to call when something breaks at 2am. We offer ongoing support plans that keep your apps, CRMs, and automation systems running smoothly — so you never have to worry about the tech side.",
    whyUs:
      "We built it, so we know it inside out. No handoff confusion, no re-learning your codebase. Fast fixes, proactive monitoring, real support.",
    features: [
      "24/7 uptime monitoring & alerting",
      "Security updates & vulnerability patching",
      "Performance optimization",
      "Bug fixes & feature improvements",
      "Priority response SLAs",
    ],
  },
  {
    id: "consulting",
    icon: MessageSquare,
    title: "AI Consulting",
    subtitle: "Figure out where AI actually helps your business",
    description:
      "There's a lot of noise about AI right now. Most of it won't help your specific business. We cut through it. We look at how your business actually operates — your team, your processes, your bottlenecks — and show you exactly where AI can save you time, reduce costs, or open up new revenue. No hype. Just a clear plan you can act on.",
    whyUs:
      "We're builders, not just advisors. Every recommendation we make is something we can actually implement for you if you decide to move forward.",
    features: [
      "AI readiness assessment",
      "Process audit & opportunity mapping",
      "Tool & platform recommendations",
      "Implementation roadmap & cost estimates",
      "Team training & adoption support",
    ],
  },
];

export function ServicesPage() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            What We Build
          </p>
          <h1 className="mt-4 font-heading text-[2.6rem] sm:text-[3rem] font-bold tracking-tight leading-[1.15]">
            Real Systems for Real Businesses
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            We don&apos;t do generic websites or cookie-cutter solutions.
            Everything we build is designed around how your business actually
            works — then built to make it work better.
          </p>
        </motion.div>

        {/* Service blocks */}
        <div className="mt-20 space-y-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="scroll-mt-24"
            >
              <div className="overflow-hidden rounded-2xl border border-border bg-background transition-all duration-300 hover:border-primary/15 hover:shadow-lg hover:shadow-primary/5">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                  {/* Left — info */}
                  <div className="lg:col-span-3 p-8 lg:p-12">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                        <service.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h2 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                          {service.title}
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          {service.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="mt-6 text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>

                    <p className="mt-4 text-sm text-foreground/80 leading-relaxed">
                      <span className="font-semibold text-foreground">Why us?</span>{" "}
                      {service.whyUs}
                    </p>

                    <Link
                      href="/contact"
                      className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline transition-colors"
                    >
                      Talk to us about this
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>

                  {/* Right — features */}
                  <div className="lg:col-span-2 border-t lg:border-t-0 lg:border-l border-border bg-secondary/30 p-8 lg:p-12">
                    <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                      What you get
                    </h4>
                    <ul className="mt-5 space-y-3.5">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm text-foreground/80"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-5">
            Not sure which service you need? That&apos;s fine — just tell us the problem.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
          >
            Describe Your Project
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}