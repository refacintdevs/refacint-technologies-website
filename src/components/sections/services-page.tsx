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
    title: "Software Development",
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
    gradient: "from-amber-500 to-orange-600",
    glowColor: "bg-amber-500/10",
  },
  {
    id: "ai",
    icon: Brain,
    title: "AI Solutions",
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
    gradient: "from-purple-500 to-violet-600",
    glowColor: "bg-purple-500/10",
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
    gradient: "from-pink-500 to-rose-600",
    glowColor: "bg-pink-500/10",
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
    gradient: "from-cyan-500 to-blue-600",
    glowColor: "bg-cyan-500/10",
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
    gradient: "from-emerald-500 to-green-600",
    glowColor: "bg-emerald-500/10",
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
    gradient: "from-orange-500 to-red-600",
    glowColor: "bg-orange-500/10",
  },
];

export function ServicesPage() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-block rounded-full border border-border bg-card/50 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground backdrop-blur-sm">
            Our Services
          </span>
          <h1 className="mt-6 font-heading text-5xl font-extrabold tracking-tight sm:text-6xl">
            Technology That{" "}
            <span className="text-gradient">Works</span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
            End-to-end solutions — from first concept through deployment and
            ongoing evolution. Every service built on the same principle: ship
            fast, build right, scale smart.
          </p>
        </motion.div>

        {/* Service blocks */}
        <div className="mt-24 space-y-20">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative scroll-mt-24"
            >
              <div className="relative overflow-hidden rounded-3xl border border-border bg-card/30 backdrop-blur-sm transition-all duration-500 hover:border-primary/15 hover:bg-card/50">
                {/* Glow */}
                <div
                  className={`absolute -top-32 -right-32 h-64 w-64 rounded-full ${service.glowColor} blur-[100px] pointer-events-none`}
                />

                <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-0">
                  {/* Left — info */}
                  <div className="lg:col-span-3 p-10 lg:p-14">
                    <div className="flex items-center gap-4">
                      <div
                        className={`inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} shadow-lg`}
                      >
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                          {service.title}
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          {service.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="mt-6 text-muted-foreground leading-relaxed text-base">
                      {service.description}
                    </p>

                    <Link
                      href="/contact"
                      className="group/link mt-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      Discuss this service
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                    </Link>
                  </div>

                  {/* Right — features */}
                  <div className="lg:col-span-2 border-t lg:border-t-0 lg:border-l border-border bg-card/20 p-10 lg:p-14">
                    <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      What&apos;s included
                    </h4>
                    <ul className="mt-6 space-y-4">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm text-foreground/80"
                        >
                          <CheckCircle2
                            className={`mt-0.5 h-4 w-4 shrink-0 bg-gradient-to-br ${service.gradient} rounded-full text-white`}
                          />
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
      </div>
    </section>
  );
}