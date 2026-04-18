import Link from "next/link";

export const metadata = { title: "Offline" };

export default function OfflinePage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-background">
      <div className="text-center max-w-md">
        <h1 className="font-heading text-5xl font-extrabold text-gradient">Offline</h1>
        <p className="mt-4 text-muted-foreground">
          You are currently offline. Some pages may not be available until you reconnect.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white"
        >
          Retry Home
        </Link>
      </div>
    </main>
  );
}

