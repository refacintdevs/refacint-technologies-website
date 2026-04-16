"use client";

import { motion } from "framer-motion";

const items = [
  "Software Development",
  "Artificial Intelligence",
  "Process Automation",
  "Platform Engineering",
  "Digital Transformation",
  "Cloud Architecture",
  "API Design",
  "Machine Learning",
];

export function Marquee() {
  return (
    <section className="relative py-5 bg-brand-navy overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex shrink-0 gap-0"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {[...items, ...items].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex items-center gap-3 px-6 text-sm font-medium text-white/70 tracking-wide"
            >
              {item}
              <span className="text-primary">★</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}