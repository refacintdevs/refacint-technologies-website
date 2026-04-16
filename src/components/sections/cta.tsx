"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTA() {
  return (
    <section className="relative py-24 overflow-hidden bg-brand-navy">
      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-white/40">
            Ready to build something great?
          </p>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Let&apos;s Turn Your Vision Into Reality
          </h2>
          <p className="mt-5 text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re starting from scratch or scaling an existing
            platform, we&apos;re ready to help you build what&apos;s next.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30"
            >
              Schedule a Call
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="mailto:hello@refacint.com"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 hover:text-white transition-colors"
            >
              hello@refacint.com
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}