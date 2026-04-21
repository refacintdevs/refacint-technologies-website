"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { projects } from "@/lib/projects";

export function WorkPage() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Our Work
          </p>
          <h1 className="mt-4 font-heading text-[2.6rem] sm:text-[3rem] font-bold tracking-tight leading-[1.15]">
            Recent Projects &amp; Client Builds
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Real systems we&apos;ve built for real businesses — schools, SaaS
            startups, and organizations across Nigeria and beyond. Every project
            here is live and running in production.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                href={project.url || "#"}
                target={project.url ? "_blank" : undefined}
                rel={project.url ? "noopener noreferrer" : undefined}
                className="group block h-full rounded-2xl border border-border bg-background overflow-hidden transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Screenshot */}
                <div className="relative aspect-[16/10] bg-secondary overflow-hidden">
                  {/* Browser chrome */}
                  <div className="absolute top-0 left-0 right-0 h-8 bg-background/90 backdrop-blur-sm flex items-center px-3 gap-1.5 border-b border-border/50 z-10">
                    <span className="h-2 w-2 rounded-full bg-red-400/60" />
                    <span className="h-2 w-2 rounded-full bg-yellow-400/60" />
                    <span className="h-2 w-2 rounded-full bg-green-400/60" />
                    <span className="ml-3 text-[10px] text-muted-foreground/70 font-mono truncate">
                      {project.domain}
                    </span>
                  </div>
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top pt-8 transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                {/* Info */}
                <div className="p-7">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {project.category}
                    </span>
                    {project.url && (
                      <ExternalLink className="h-4 w-4 text-muted-foreground/40 group-hover:text-primary transition-colors" />
                    )}
                  </div>
                  <h2 className="mt-2 font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h2>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  {project.url && (
                    <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                      {project.domain}
                      <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </span>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 rounded-2xl border border-primary/15 bg-primary/5 p-8 lg:p-12 text-center"
        >
          <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Want to be the next project on this page?
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Tell us what you&apos;re building. We&apos;ll come back with a plan,
            a price, and a timeline.
          </p>
          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
          >
            Start a Conversation
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
