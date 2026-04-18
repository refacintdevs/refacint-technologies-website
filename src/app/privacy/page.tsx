import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Refacint Technologies privacy policy and data handling practices.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-24">
        <article className="mx-auto max-w-3xl px-6 prose-custom">
          <h1 className="font-heading text-4xl font-extrabold text-foreground">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          <h2>About this policy</h2>
          <p>This is a placeholder privacy policy for Refacint Technologies. Replace with your final legal content before launch.</p>
          <h2>What we collect</h2>
          <p>Contact form submissions, basic analytics (page views, country, device class), and cookies required for site operation.</p>
          <h2>Contact</h2>
          <p>Questions? Email us at <a href="mailto:hello@refacint.com">hello@refacint.com</a>.</p>
        </article>
      </main>
      <Footer />
    </>
  );
}

