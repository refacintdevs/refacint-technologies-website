"use client";

import { motion } from "framer-motion";
import { Target, Eye, Gem, Users } from "lucide-react";

// const stats = [
//   // { value: "50+", label: "Projects Shipped" },
//   // { value: "7+", label: "Core Services" },
//   // { value: "98%", label: "On-Time Delivery" },
//   // { value: "4+", label: "Years Building" },
// ];

const values = [
  {
    icon: Target,
    title: "We Build What You Actually Need",
    description:
      "No feature bloat. No unnecessary complexity. We figure out the simplest version that solves your problem, build that first, then improve from there.",
  },
  {
    icon: Eye,
    title: "You See Everything",
    description:
      "Weekly updates. Shared project boards. No disappearing for three months and hoping for the best. You know what's happening at every step.",
  },
  {
    icon: Gem,
    title: "Clean Work, Every Time",
    description:
      "We write code that the next developer can actually read. Documented, tested, and built so your system doesn't fall apart when one person leaves.",
  },
  {
    icon: Users,
    title: "We're Partners, Not Vendors",
    description:
      "We don't just take orders and disappear. We learn your business, push back when something doesn't make sense, and treat your project like our own.",
  },
];

// const timeline = [
//   {
//     year: "2021",
//     title: "Started Building",
//     description:
//       "Founded with a simple idea: business owners deserve tech partners who actually deliver — not agencies that overpromise and underdeliver.",
//   },
//   {
//     year: "2022",
//     title: "First Major Systems",
//     description:
//       "Shipped our first production CRM and automation system. Clients started coming back with second and third projects.",
//   },
//   {
//     year: "2023",
//     title: "AI Gets Real",
//     description:
//       "Started building AI agents and automation systems for clients. Not hype — real tools that saved real hours every week.",
//   },
//   {
//     year: "2024",
//     title: "Team & Process Matured",
//     description:
//       "Grew the team, locked in our process. Every project now runs on the same framework: discover, design, build, ship, support.",
//   },
//   {
//     year: "2025",
//     title: "50+ Projects Shipped",
//     description:
//       "Crossed 50 completed projects with a 98% on-time delivery rate. Expanded into content automation and AI consulting.",
//   },
// ];

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
            About Refacint
          </p>
          <h1 className="mt-4 font-heading text-[2.6rem] sm:text-[3rem] font-bold tracking-tight leading-[1.15]">
            We Build the Systems That Let You Focus on Running Your Business
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Most business owners know they need better technology. They just
            don&apos;t want to deal with the headaches that come with building it.
            That&apos;s where we come in.
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

        {/* Brand Story */}
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
                Why We Exist
              </p>
              <p className="mt-4 font-heading text-2xl font-bold leading-snug text-foreground">
                We started Refacint because too many business owners were getting
                burned by agencies that talk big and deliver small.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                You&apos;d pay thousands for a &ldquo;custom solution&rdquo; and get a
                WordPress template with your logo slapped on it. Or you&apos;d hire
                developers who disappear for months and come back with something
                that doesn&apos;t work. We&apos;ve seen it too many times.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                How We Work
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We do things differently. You tell us your problem. We figure
                out the simplest, most effective way to solve it. We build it
                fast, we show you progress every week, and we don&apos;t stop until
                it actually works in your business.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                No jargon. No mystery timelines. No &ldquo;we&apos;ll circle back on
                that.&rdquo; Just straight talk and systems that work.
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
              How We Operate
            </p>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold tracking-tight">
              What You Can Expect From Us
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
                <h3 className="mt-5 font-heading text-base font-bold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

{/* 
        Timeline
        <div className="mt-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Our Story
            </p>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold tracking-tight">
              How We Got Here
            </h2>
          </motion.div>

          <div className="relative mt-14 max-w-3xl mx-auto">
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
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-primary border-2 border-background z-10 mt-1.5" />
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
        </div> */}
      </div>
    </section>
  );
}