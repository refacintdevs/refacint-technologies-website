import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PushSubscribe } from "@/components/blog/push-subscribe";
import { getAllSlugs, getPostBySlug } from "@/lib/blog/posts";
import { siteConfig } from "@/lib/site.config";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post Not Found", robots: { index: false } };

  const url = `${siteConfig.url}/blog/${slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url,
      publishedTime: post.date,
      authors: [post.author || siteConfig.author.name],
      tags: [post.category],
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author || siteConfig.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/logo.webp`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${slug}`,
    },
    ...(post.coverImage ? { image: post.coverImage } : {}),
  };

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex-1 pt-32 pb-24">
        <article className="mx-auto max-w-3xl px-6 lg:px-8">
          <header>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="font-semibold text-primary">{post.category}</span>
              <span>•</span>
              <time dateTime={post.date}>{post.date}</time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="mt-4 font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              {post.title}
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>
            {post.coverImage ? (
              <div className="relative mt-8 h-56 sm:h-72 overflow-hidden rounded-2xl bg-muted">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover"
                />
              </div>
            ) : (
              <div
                className={`mt-8 h-56 rounded-2xl bg-gradient-to-br ${
                  post.gradient ?? "from-blue-500 to-cyan-500"
                }`}
              />
            )}
          </header>

          <div
            className="prose-custom mt-12"
            dangerouslySetInnerHTML={{ __html: post.html || "" }}
          />

          <PushSubscribe />

          <div className="mt-12 border-t border-border pt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              ← Back to all posts
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

