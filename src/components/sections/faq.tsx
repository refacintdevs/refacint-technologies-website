"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "I'm not technical — can I still work with you?",
    answer:
      "Absolutely. Most of our clients aren't technical, and they don't need to be. You tell us the business problem — 'my team spends 10 hours a week on manual data entry' or 'I need a better way to track leads' — and we handle the rest. We explain everything in plain English, not code.",
  },
  {
    question: "How much does a typical project cost?",
    answer:
      "It depends on what you need. A simple automation setup might be a few thousand dollars. A full custom CRM or AI agent system could be $10K–$50K+. We give you a fixed price upfront after our discovery call — no hourly billing surprises and no scope creep unless you ask for changes.",
  },
  {
    question: "How long does it take to build something?",
    answer:
      "Most projects take 4–12 weeks depending on complexity. A workflow automation or content tool can be done in 4–6 weeks. A full app or custom CRM is typically 8–12 weeks. We'll give you a clear timeline before we start, and we have a 98% on-time delivery rate.",
  },
  {
    question: "What's the difference between you and just using Zapier or HubSpot?",
    answer:
      "Off-the-shelf tools are great until they aren't. When you need logic that doesn't fit their templates, data that doesn't match their fields, or workflows that cross multiple platforms — that's where we come in. We build custom systems that do exactly what you need, with no workarounds or duct tape.",
  },
  {
    question: "Do you build AI agents that actually work, or is it just chatbots?",
    answer:
      "We build agents that do real work — not just answer FAQs. Our agents qualify leads, process documents, extract data, route tasks, and integrate with your existing tools. If it can be described as a repeatable process, we can probably build an agent that handles it.",
  },
  {
    question: "What happens after you deliver the project?",
    answer:
      "We don't disappear. Every project includes a handoff with documentation and training. After that, we offer ongoing support plans for monitoring, updates, and improvements. Most clients come back with new projects within 6 months — we take that as a compliment.",
  },
  {
    question: "Can you work with our existing tools and systems?",
    answer:
      "Yes. We regularly integrate with Slack, Google Workspace, CRMs, payment processors, email platforms, and custom APIs. If your tool has an API (most do), we can connect to it. If it doesn't, we'll find a workaround.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) =>
    setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-secondary/40" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Common Questions
          </p>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold tracking-tight">
            Straight Answers to Common Questions
          </h2>
        </motion.div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="rounded-xl border border-border bg-background overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-heading text-[0.95rem] font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  {openIndex === i ? (
                    <Minus className="h-3.5 w-3.5 text-primary" />
                  ) : (
                    <Plus className="h-3.5 w-3.5 text-primary" />
                  )}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}