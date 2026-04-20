"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    label: "Custom Software & App Development",
    href: "/services#development",
    description: "Web apps, mobile apps, and custom software — built from scratch.",
  },
  {
    label: "AI Agents",
    href: "/services#ai-agents",
    description: "AI that handles real tasks in your business.",
  },
  {
    label: "AI & Workflow Automation",
    href: "/services#automation",
    description: "Eliminate repetitive work and manual processes.",
  },
  {
    label: "Custom CRM Development",
    href: "/services#crm",
    description: "CRMs designed around how you sell.",
  },
  {
    label: "Content Automation Apps",
    href: "/services#content-automation",
    description: "Content that creates and publishes itself.",
  },
  {
    label: "Maintenance & Support",
    href: "/services#maintenance",
    description: "Keep your systems running at peak performance.",
  },
  {
    label: "AI Consulting",
    href: "/services#consulting",
    description: "Find where AI actually helps your business.",
  },
];

const company = [
  {
    label: "About Us",
    href: "/about",
    description: "The team behind Refacint.",
  },
  {
    label: "Careers",
    href: "/careers",
    description: "Work with us.",
  },
];

type DropdownKey = "services" | "company" | null;

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey>(null);
  const [mobileExpanded, setMobileExpanded] = useState<DropdownKey>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-dropdown]")) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const handleMouseEnter = (key: DropdownKey) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(key);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm"
            : "bg-background"
        )}
      >
        <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <Image
              src="/images/logo.webp"
              alt="Refacint Technologies"
              width={38}
              height={38}
              className="transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex items-center gap-2">
              <div className="w-px h-7 bg-border" />
              <span className="font-heading text-[1.15rem] font-bold tracking-tight text-foreground">
                Refacint
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className="px-4 py-2 text-[0.925rem] font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              data-dropdown
              className="relative"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={cn(
                  "flex items-center gap-1 px-4 py-2 text-[0.925rem] font-medium transition-colors duration-200",
                  activeDropdown === "services"
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                Services
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 transition-transform duration-200",
                    activeDropdown === "services" && "rotate-180"
                  )}
                />
              </button>

              <AnimatePresence>
                {activeDropdown === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                  >
                    <div className="w-[520px] rounded-2xl border border-border bg-background shadow-xl shadow-black/5 p-3">
                      <div className="grid grid-cols-2 gap-1">
                        {services.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="group rounded-xl px-4 py-3 transition-colors duration-150 hover:bg-secondary"
                          >
                            <p className="text-[0.875rem] font-semibold text-foreground group-hover:text-primary transition-colors">
                              {item.label}
                            </p>
                            <p className="mt-0.5 text-[0.8rem] text-muted-foreground leading-snug">
                              {item.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-2 border-t border-border pt-3 px-4 pb-1">
                        <Link
                          href="/services"
                          onClick={() => setActiveDropdown(null)}
                          className="inline-flex items-center gap-1.5 text-[0.825rem] font-semibold text-primary hover:underline"
                        >
                          View All Services
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Company Dropdown */}
            <div
              data-dropdown
              className="relative"
              onMouseEnter={() => handleMouseEnter("company")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={cn(
                  "flex items-center gap-1 px-4 py-2 text-[0.925rem] font-medium transition-colors duration-200",
                  activeDropdown === "company"
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                Company
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 transition-transform duration-200",
                    activeDropdown === "company" && "rotate-180"
                  )}
                />
              </button>

              <AnimatePresence>
                {activeDropdown === "company" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                  >
                    <div className="w-[280px] rounded-2xl border border-border bg-background shadow-xl shadow-black/5 p-3">
                      {company.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setActiveDropdown(null)}
                          className="group block rounded-xl px-4 py-3 transition-colors duration-150 hover:bg-secondary"
                        >
                          <p className="text-[0.875rem] font-semibold text-foreground group-hover:text-primary transition-colors">
                            {item.label}
                          </p>
                          <p className="mt-0.5 text-[0.8rem] text-muted-foreground leading-snug">
                            {item.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/blog"
              className="px-4 py-2 text-[0.925rem] font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className="px-4 py-2 text-[0.925rem] font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Contact
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-[0.875rem] font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
            >
              Tell Us What You Need
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background pt-[80px] px-6 lg:hidden overflow-y-auto"
          >
            <nav className="flex flex-col gap-1 pb-8">
              <Link href="/" onClick={() => setIsMobileOpen(false)} className="flex items-center justify-between py-4 text-lg font-heading font-bold text-foreground border-b border-border hover:text-primary transition-colors">
                Home
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </Link>

              <div className="border-b border-border">
                <button onClick={() => setMobileExpanded(mobileExpanded === "services" ? null : "services")} className="flex w-full items-center justify-between py-4 text-lg font-heading font-bold text-foreground">
                  Services
                  <ChevronDown className={cn("h-4 w-4 text-muted-foreground transition-transform duration-200", mobileExpanded === "services" && "rotate-180")} />
                </button>
                <AnimatePresence>
                  {mobileExpanded === "services" && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                      <div className="pb-4 pl-4 space-y-1">
                        {services.map((item) => (
                          <Link key={item.href} href={item.href} onClick={() => setIsMobileOpen(false)} className="block rounded-lg px-3 py-2.5 hover:bg-secondary transition-colors">
                            <p className="text-[0.9rem] font-semibold text-foreground">{item.label}</p>
                            <p className="text-[0.8rem] text-muted-foreground">{item.description}</p>
                          </Link>
                        ))}
                        <Link href="/services" onClick={() => setIsMobileOpen(false)} className="inline-flex items-center gap-1.5 px-3 py-2 text-[0.85rem] font-semibold text-primary">
                          View All Services <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="border-b border-border">
                <button onClick={() => setMobileExpanded(mobileExpanded === "company" ? null : "company")} className="flex w-full items-center justify-between py-4 text-lg font-heading font-bold text-foreground">
                  Company
                  <ChevronDown className={cn("h-4 w-4 text-muted-foreground transition-transform duration-200", mobileExpanded === "company" && "rotate-180")} />
                </button>
                <AnimatePresence>
                  {mobileExpanded === "company" && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                      <div className="pb-4 pl-4 space-y-1">
                        {company.map((item) => (
                          <Link key={item.href} href={item.href} onClick={() => setIsMobileOpen(false)} className="block rounded-lg px-3 py-2.5 hover:bg-secondary transition-colors">
                            <p className="text-[0.9rem] font-semibold text-foreground">{item.label}</p>
                            <p className="text-[0.8rem] text-muted-foreground">{item.description}</p>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/blog" onClick={() => setIsMobileOpen(false)} className="flex items-center justify-between py-4 text-lg font-heading font-bold text-foreground border-b border-border hover:text-primary transition-colors">
                Blog <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </Link>

              <Link href="/contact" onClick={() => setIsMobileOpen(false)} className="flex items-center justify-between py-4 text-lg font-heading font-bold text-foreground border-b border-border hover:text-primary transition-colors">
                Contact <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </Link>

              <div className="mt-6">
                <Link href="/contact" onClick={() => setIsMobileOpen(false)} className="flex items-center justify-center gap-2 w-full rounded-full bg-primary px-6 py-4 text-base font-semibold text-primary-foreground">
                  Tell Us What You Need <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}