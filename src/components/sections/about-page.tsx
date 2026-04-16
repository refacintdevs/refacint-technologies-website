"use client";

import { motion } from "framer-motion";
import { Target, Eye, Gem, Users } from "lucide-react";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "12+", label: "Team Experts" },
  { value: "4+", label: "Years Experience" },
];

const values = [
  {
    icon: Target,
    title: "Precision",
    description:
      "Every decision — from architecture to pixel — is intentional. We don't ship 'good enough.'",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "No black boxes. You see progress weekly, understand every decision, and own everything we build.",
  },
  {
    icon: Gem,
    title: "Craft",
    description:
      "We treat code as craft. Clean, documented, tested, and built to outlast the project timeline.",
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "We're not vendors. We embed with your team, learn your domain, and operate as an extension of your organization.",
  },
];

const timeline = [
  {
    year: "2021",
    title: "Founded",
    description:
      "Started with a simple thesis: businesses deserve technology partners who actually build, not just advise.",
  },
  {
    year: "2022",
    title: "First Major Platform",
    description:
      "Delivered our first enterprise-grade platform — a logistics automation system processing 10K+ daily transactions.",
  },
  {
    year: "2023",
    title: "AI Practice Launched",
    description:
      "Expanded into AI solutions, deploying ML models and NLP systems for clients across fintech and healthcare.",
  },
  {
    year: "2024",
    title: "Team Growth",
    description:
      "Grew to a distributed team of 12+ specialists across engineering, design, and strategy.",
  },
  {
    year: "2025",
    title: "50+ Projects Milestone",
    description:
      "Crossed 50 successful project deliveries with a 98% client satisfaction rate.",
  },
];

const team = [
  { name: "Founder & CEO", initials: "RC" },
  { name: "Lead Engineer", initials: "LE" },
  { name: "AI/ML Lead", initials: "ML" },
  { name: "Product Designer", initials: "PD" },
  { name: "Backend Engineer", initials: "BE" },
  { name: "DevOps Engineer", initials: "DO" },
];

export function AboutPage() {
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
            About Us
          </p>
          <h1 className="mt-4 font-heading text-[2.6rem] sm:text-[3rem] font-bold tracking-tight leading-[1.15]">
            We&apos;re Obsessed With Building Technology That Works
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Refacint Technologies is a software development and AI solutions
            company. We design, build, deploy, and maintain digital platforms
            for businesses ready to move fast and build right.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="rounded-2xl border border-border bg-background p-6 text-center"
            >
              <p className="font-heading text-3xl sm:text-4xl font-bold text-primary">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission & Approach */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 overflow-hidden rounded-2xl border border-border bg-background p-8 lg:p-14"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                Our Mission
              </p>
              <p className="mt-4 font-heading text-2xl font-bold leading-snug text-foreground">
                To empower businesses with technology that&apos;s built to last
                — not just to launch.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                Our Approach
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We don&apos;t believe in one-size-fits-all. Every engagement
                starts with deep discovery — understanding your business, users,
                and constraints. Then we architect a solution that fits your
                reality, not our template. We ship in sprints, communicate
                obsessively, and stay with you well past launch day.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <div className="mt-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Our Values
            </p>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold tracking-tight">
              What Drives Us
            </h2>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="rounded-2xl border border-border bg-background p-7 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <value.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mt-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Team Members
            </p>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold tracking-tight">
              Our Creative Crew
            </h2>
          </motion.div>

          <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="rounded-2xl border border-border bg-background p-5 text-center transition-all duration-300 hover:border-primary/20 hover:shadow-md"
              >
                {/* Placeholder avatar — replace with real photos */}
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-secondary text-xl font-bold text-primary">
                  {member.initials}
                </div>
                <p className="mt-4 text-sm font-semibold text-foreground">
                  {member.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Our Journey
            </p>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold tracking-tight">
              How We Got Here
            </h2>
          </motion.div>

          <div className="relative mt-14 max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border sm:left-1/2" />

            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className={`relative flex items-start gap-8 mb-12 ${
                  i % 2 === 0
                    ? "sm:flex-row"
                    : "sm:flex-row-reverse sm:text-right"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-primary border-2 border-background z-10 mt-1.5" />

                {/* Content */}
                <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8">
                  <span className="font-mono text-xs font-semibold text-primary tracking-wider">
                    {item.year}
                  </span>
                  <h3 className="mt-1 font-heading text-lg font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}