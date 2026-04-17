import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "Custom Software Development", href: "/services#software" },
    { label: "AI & Machine Learning", href: "/services#ai" },
    { label: "Process Automation", href: "/services#automation" },
    { label: "Platform Engineering", href: "/services#platform" },
    { label: "Maintenance & Support", href: "/services#maintenance" },
    { label: "Digital Transformation", href: "/services#transformation" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  Connect: [
    { label: "LinkedIn", href: "#" },
    { label: "Twitter / X", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "Email Us", href: "mailto:hello@refacint.com" },
  ],
};

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-brand-navy text-white">
      {/* CTA Band */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white">
            We Treat Our Clients Like Partners
          </h2>
          <p className="mt-4 text-[1rem] text-white/60 max-w-xl mx-auto leading-relaxed">
            Let&apos;s find out if we&apos;re the right fit for each other.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30"
          >
            Get a Proposal
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.webp"
                alt="Refacint Technologies"
                width={36}
                height={36}
              />
              <div className="flex items-center gap-2">
                <div className="w-px h-6 bg-white/20" />
                <span className="font-heading text-base font-bold tracking-tight text-white">
                  Refacint
                </span>
              </div>
            </Link>
            <p className="mt-5 text-sm text-white/50 leading-relaxed max-w-xs">
              Building the future through software development, AI solutions,
              and intelligent automation.
            </p>

            {/* Location */}
            <div className="mt-6 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/30">
                Based in
              </p>
              <p className="text-sm text-white/60">Lagos, Nigeria</p>
            </div>

            {/* Email */}
            <div className="mt-4">
              <Link
                href="mailto:hello@refacint.com"
                className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Mail className="h-3.5 w-3.5" />
                hello@refacint.com
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
              Services
            </h4>
            <ul className="mt-5 space-y-3">
              {footerLinks.Services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-200 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
              Company
            </h4>
            <ul className="mt-5 space-y-3">
              {footerLinks.Company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-200 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
              Connect
            </h4>
            <ul className="mt-5 space-y-3">
              {footerLinks.Connect.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-200 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Serving globally note */}
            <div className="mt-8 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <p className="text-xs text-white/40 leading-relaxed">
                Serving clients across Nigeria, Africa &amp; worldwide. We
                accommodate all timezones.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Refacint Technologies. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}