"use client";

import { motion } from "framer-motion";
import { useState } from "react";
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

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start justify-between gap-4 text-left py-6 group"
      >
        <h3 className="font-heading text-base font-bold text-foreground group-hover:text-primary transition-colors sm:text-lg">
          {faq.question}
        </h3>
        <div className="shrink-0 mt-1">
          {isOpen ? (
            <Minus className="h-4 w-4 text-primary" />
          ) : (
            <Plus className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
          )}
        </div>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-sm text-muted-foreground leading-relaxed pr-12">
          {faq.answer}
        </p>
      </motion.div>
      <div className="h-px bg-border" />
    </motion.div>
  );
}

export function FAQ() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">
            FAQs
          </p>
          <h2 className="mt-4 font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">
            Your Questions,{" "}
            <span className="text-gradient">Answered</span>
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="mt-14">
          <div className="h-px bg-border" />
          {faqs.map((faq, i) => (
            <FAQItem key={faq.question} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}