import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Refacint Technologies terms of service.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-24">
        <article className="mx-auto max-w-3xl px-6 prose-custom">
          <h1 className="font-heading text-4xl font-extrabold text-foreground">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          <h2>Placeholder</h2>
          <p>This is a placeholder terms page. Replace with your final legal content before launch.</p>
        </article>
      </main>
      <Footer />
    </>
  );
}

