"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Briefcase,
  MessageSquare,
  Users,
  ArrowRight,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import Link from "next/link";

const contactOptions = [
  {
    icon: FileText,
    title: "I have a project — let's talk",
    description: "Tell us what you're building and we'll come back with a plan and a price.",
    href: "mailto:proposal@refacint.com",
    primary: true,
  },
  {
    icon: Briefcase,
    title: "I want to work at Refacint",
    description: "We're always looking for sharp developers and thinkers.",
    href: "mailto:careers@refacint.com",
    primary: false,
  },
  {
    icon: MessageSquare,
    title: "Just a quick question",
    description: "No commitment needed. Ask us anything about what we do.",
    href: "mailto:hello@refacint.com",
    primary: false,
  },
  {
    icon: Users,
    title: "I'm already a client",
    description: "Need support or want to start a new project? Reach out anytime.",
    href: "mailto:support@refacint.com",
    primary: false,
  },
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@refacint.com",
    href: "mailto:hello@refacint.com",
  },
  {
    icon: MapPin,
    label: "Based in",
    value: "Lagos, Nigeria",
    href: null,
  },
  {
    icon: Clock,
    label: "Typical Response",
    value: "Within 24 hours",
    href: null,
  },
];

export function ContactPage() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Get in Touch
          </p>
          <h1 className="mt-4 font-heading text-[2.6rem] sm:text-[3rem] font-bold tracking-tight leading-[1.15]">
            Let&apos;s Figure Out What You Need
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            No sales pitch. No pressure. Pick the option that fits and
            we&apos;ll take it from there. Most people hear back within a day.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {contactOptions.map((option, i) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <Link
                href={option.href}
                className={`group flex items-start gap-5 rounded-2xl border p-7 transition-all duration-300 ${
                  option.primary
                    ? "border-primary/20 bg-primary/5 hover:border-primary/40 hover:bg-primary/8 hover:shadow-lg hover:shadow-primary/10"
                    : "border-border bg-background hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
                }`}
              >
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                    option.primary
                      ? "bg-primary text-white"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  <option.icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-base font-bold text-foreground group-hover:text-primary transition-colors">
                    {option.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {option.description}
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground/40 group-hover:text-primary transition-all duration-200 group-hover:translate-x-1 mt-1" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {contactInfo.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:border-primary/15"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <item.icon className="h-4.5 w-4.5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a href={item.href} className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold text-foreground">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-2xl border border-primary/15 bg-primary/5 p-7 max-w-2xl"
        >
          <p className="text-sm font-semibold text-foreground">
            Not sure what you need yet?
          </p>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            That&apos;s completely normal. Book a free 30-minute call and we&apos;ll
            help you figure it out. No jargon, no pressure — just an honest
            conversation about what&apos;s possible.
          </p>
          <Link
            href="mailto:hello@refacint.com"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            Book a free discovery call
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}