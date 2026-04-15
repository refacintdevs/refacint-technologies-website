"use client";

import { motion } from "framer-motion";

const items = [
  "Software Development",
  "★",
  "Artificial Intelligence",
  "★",
  "Process Automation",
  "★",
  "Platform Engineering",
  "★",
  "Digital Transformation",
  "★",
  "Cloud Architecture",
  "★",
  "API Design",
  "★",
  "Machine Learning",
  "★",
];

export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-border bg-card/30 py-5">
      <motion.div
        className="flex whitespace-nowrap gap-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className={`text-sm font-semibold tracking-wide uppercase shrink-0 ${
              item === "★"
                ? "text-gradient text-base"
                : "text-muted-foreground/70"
            }`}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}