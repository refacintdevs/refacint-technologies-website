import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WorkPage } from "@/components/sections/work-page";

export const metadata = {
  title: "Our Work | Refacint Technologies",
  description:
    "Recent projects from Refacint Technologies — EdTech platforms, custom dashboards, SaaS products, and school management systems built for businesses across Nigeria and beyond.",
};

export default function Work() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <WorkPage />
      </main>
      <Footer />
    </>
  );
}
