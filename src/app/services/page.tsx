import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ServicesPage } from "@/components/sections/services-page";

export const metadata = {
  title: "Services | Refacint Technologies",
  description:
    "Software development, AI solutions, business process automation, and digital platform engineering.",
};

export default function Services() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <ServicesPage />
      </main>
      <Footer />
    </>
  );
}