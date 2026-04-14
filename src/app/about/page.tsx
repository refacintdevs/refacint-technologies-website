import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AboutPage } from "@/components/sections/about-page";

export const metadata = {
  title: "About | Refacint Technologies",
  description:
    "Meet the team behind Refacint Technologies. Engineers, designers, and strategists building the next wave of digital.",
};

export default function About() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <AboutPage />
      </main>
      <Footer />
    </>
  );
}