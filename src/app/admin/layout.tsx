import type { Metadata } from "next";
import Link from "next/link";
import { SignOutButton } from "@/components/admin/signout-button";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false, noarchive: true, nosnippet: true },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-muted/30 flex flex-col">
      <header className="border-b border-border bg-background">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <Link href="/admin/posts" className="font-heading font-bold text-foreground">
            Refacint Admin
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link href="/admin/posts" className="text-muted-foreground hover:text-foreground">
              Posts
            </Link>
            <Link href="/" className="text-muted-foreground hover:text-foreground">
              View Site
            </Link>
            <SignOutButton />
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}

