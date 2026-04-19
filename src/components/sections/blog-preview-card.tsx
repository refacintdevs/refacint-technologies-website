"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function BlogPreviewCard({
  children,
  index,
}: {
  children: ReactNode;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
