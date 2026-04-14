import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { BlogListPage } from "@/components/blog/blog-list-page";

export const metadata = {
  title: "Blog | Refacint Technologies",
  description:
    "Insights on software development, AI, automation, and building technology that matters.",
};

export default function Blog() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <BlogListPage />
      </main>
      <Footer />
    </>
  );
}