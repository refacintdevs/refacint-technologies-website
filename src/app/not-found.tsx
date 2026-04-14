import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex items-center justify-center min-h-screen">
        <div className="text-center px-6">
          <h1 className="font-heading text-8xl font-extrabold text-gradient">
            404
          </h1>
          <p className="mt-4 font-heading text-2xl font-bold text-foreground">
            Page not found
          </p>
          <p className="mt-2 text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30"
          >
            Go Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}