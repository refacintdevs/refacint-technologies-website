import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { AboutPreview } from "@/components/sections/about-preview";
import { Testimonials } from "@/components/sections/testimonials";
import { BlogPreview } from "@/components/sections/blog-preview";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Services />
        <Testimonials />
        <Process />
        <AboutPreview />
        <BlogPreview />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}