"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What's your development process?",
    answer:
      "We follow an agile methodology with 2-week sprints. Every engagement starts with a discovery phase where we understand your goals, constraints, and technical landscape. Then we architect a solution, build iteratively with continuous feedback, and stay with you through launch and beyond. You see progress weekly — no surprises.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "Our core stack includes React, Next.js, Node.js, Python, and PostgreSQL — but we're technology-agnostic. We choose the best tools for each project based on your requirements, team capabilities, and long-term maintainability. For AI/ML, we work with TensorFlow, PyTorch, and OpenAI APIs.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "It depends on scope. An MVP can ship in 6-8 weeks. A full platform build typically takes 3-5 months. We'll give you a clear timeline during our discovery phase — and we have a track record of hitting deadlines.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Absolutely. We offer flexible maintenance and support plans that include monitoring, security updates, performance optimization, and feature development. We don't disappear after launch — we stay with you as your technology partner.",
  },
  {
    question: "What's your pricing structure?",
    answer:
      "We price based on project scope, not hourly rates. After our discovery call, we provide a detailed proposal with fixed pricing so you know exactly what to expect. No hidden fees, no surprise invoices. Typical projects range from $5,000 to $50,000+.",
  },
  {
    question: "Can you work with our existing team?",
    answer:
      "Yes. We frequently embed with client teams as an extension of their engineering department. Whether you need full project delivery or targeted augmentation, we adapt to your workflow and communication style.",
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            FAQs
          </p>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold tracking-tight">
            Your Questions, Answered
          </h2>
        </motion.div>

        {/* Accordion */}
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