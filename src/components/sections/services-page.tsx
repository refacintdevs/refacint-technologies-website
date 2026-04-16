"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Brain,
  Workflow,
  Server,
  Shield,
  Rocket,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "software",
    icon: Code2,
    title: "Custom Software Development",
    subtitle: "Custom-built digital products",
    description:
      "We build web applications, mobile apps, and enterprise platforms from the ground up. Every line of code is written with scalability, performance, and maintainability in mind.",
    features: [
      "Full-stack web applications (React, Next.js, Node.js)",
      "Cross-platform mobile development",
      "API design & microservices architecture",
      "Database design & optimization",
      "Third-party integrations & webhooks",
    ],
  },
  {
    id: "ai",
    icon: Brain,
    title: "AI & Machine Learning",
    subtitle: "Intelligence that drives decisions",
    description:
      "From predictive analytics to natural language processing, we design and deploy AI systems that transform how your business operates and competes.",
    features: [
      "Custom ML model development & training",
      "Natural Language Processing (NLP) systems",
      "Computer vision & image recognition",
      "AI-powered chatbots & virtual assistants",
      "Data pipeline architecture & ETL",
    ],
  },
  {
    id: "automation",
    icon: Workflow,
    title: "Process Automation",
    subtitle: "Eliminate manual bottlenecks",
    description:
      "We map your workflows, identify inefficiencies, and build automated systems that save time, reduce errors, and free your team to focus on high-value work.",
    features: [
      "Business process mapping & optimization",
      "Robotic Process Automation (RPA)",
      "Workflow orchestration & scheduling",
      "Document processing & data extraction",
      "Integration between legacy & modern systems",
    ],
  },
  {
    id: "platform",
    icon: Server,
    title: "Platform Engineering",
    subtitle: "Infrastructure that scales",
    description:
      "Cloud-native architecture, CI/CD pipelines, and infrastructure-as-code — we build the foundation your applications need to run reliably at any scale.",
    features: [
      "Cloud architecture (AWS, GCP, Azure)",
      "CI/CD pipeline design & implementation",
      "Container orchestration (Docker, Kubernetes)",
      "Infrastructure as Code (Terraform, Pulumi)",
      "Performance monitoring & observability",
    ],
  },
  {
    id: "maintenance",
    icon: Shield,
    title: "Maintenance & Support",
    subtitle: "Keep systems running at peak",
    description:
      "Proactive monitoring, security patches, performance tuning, and 24/7 incident response — we keep your digital assets healthy and secure.",
    features: [
      "24/7 uptime monitoring & alerting",
      "Security audits & vulnerability patching",
      "Performance optimization & caching",
      "Dependency updates & tech debt reduction",
      "SLA-backed support tiers",
    ],
  },
  {
    id: "transformation",
    icon: Rocket,
    title: "Digital Transformation",
    subtitle: "Modernize & future-proof",
    description:
      "Strategic consulting and hands-on execution to migrate legacy systems, adopt modern practices, and position your organization for what's next.",
    features: [
      "Legacy system modernization & migration",
      "Technology strategy & roadmapping",
      "Team augmentation & mentorship",
      "Architecture review & recommendations",
      "Change management & adoption support",
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
            Our Services
          </p>
          <h1 className="mt-4 font-heading text-[2.6rem] sm:text-[3rem] font-bold tracking-tight leading-[1.15]">
            Everything Your Business Needs For Success
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            End-to-end solutions — from first concept through deployment and
            ongoing evolution. Every service built on the same principle: ship
            fast, build right, scale smart.
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

                    <Link
                      href="/contact"
                      className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline transition-colors"
                    >
                      Discuss this service
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>

                  {/* Right — features */}
                  <div className="lg:col-span-2 border-t lg:border-t-0 lg:border-l border-border bg-secondary/30 p-8 lg:p-12">
                    <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                      What&apos;s included
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
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
          >
            Get a Proposal
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}