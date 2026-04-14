import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ContactPage } from "@/components/sections/contact-page";

export const metadata = {
  title: "Contact | Refacint Technologies",
  description:
    "Get in touch with Refacint Technologies. Let's discuss your next project.",
};

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <ContactPage />
      </main>
      <Footer />
    </>
  );
}