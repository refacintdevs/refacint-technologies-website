import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { getAllPosts } from "@/lib/blog/posts";
import { siteConfig } from "@/lib/site.config";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on software development, AI, automation, and building technology that matters — from the Refacint Technologies team.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: `Blog | ${siteConfig.name}`,
    description:
      "Insights on software development, AI, automation, and building technology that matters.",
    url: `${siteConfig.url}/blog`,
    type: "website",
  },
};

export default async function BlogIndex() {
  const posts = await getAllPosts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${siteConfig.name} Blog`,
    url: `${siteConfig.url}/blog`,
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.excerpt,
      datePublished: p.date,
      url: `${siteConfig.url}/blog/${p.slug}`,
      ...(p.coverImage ? { image: p.coverImage } : {}),
    })),
  };

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex-1 pt-32 pb-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <header className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              The Refacint Journal
            </p>
            <h1 className="mt-4 font-heading text-5xl sm:text-6xl font-extrabold tracking-tight text-foreground">
              Writing on software, AI &amp; the craft of building.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Field notes from our engineers, strategists, and founders. No fluff, no
              growth-hack listicles — just what we&apos;re learning as we ship.
            </p>
          </header>

          <section
            className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            aria-label="Blog posts"
          >
            {posts.length === 0 && (
              <p className="text-muted-foreground col-span-full">
                No posts yet. Check back soon.
              </p>
            )}
            {posts.map((post) => (
              <article key={post.slug} className="group">
                <Link
                  href={`/blog/${post.slug}`}
                  className="block rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                >
                  {post.coverImage ? (
                    <div className="relative h-40 overflow-hidden rounded-xl bg-muted">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div
                      className={`h-40 rounded-xl bg-gradient-to-br ${
                        post.gradient ?? "from-blue-500 to-cyan-500"
                      }`}
                    />
                  )}
                  <div className="mt-5 flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="font-semibold text-primary">{post.category}</span>
                    <span>•</span>
                    <time dateTime={post.date}>{post.date}</time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="mt-3 font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                </Link>
              </article>
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

