"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { PostForm, type PostFormValues } from "../../_form";
import { PushButton } from "@/components/admin/push-button";

export default function EditPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const router = useRouter();
  const [initial, setInitial] = useState<PostFormValues | null>(null);
  const [published, setPublished] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`/api/posts/${slug}`)
      .then((r) => r.json())
      .then(({ post }) => {
        if (!post) return;
        setPublished(post.published !== false);
        setInitial({
          slug: post.slug,
          title: post.title,
          excerpt: post.excerpt,
          category: post.category,
          date: post.date,
          readTime: post.readTime,
          gradient: post.gradient || "from-blue-500 to-cyan-500",
          published: post.published !== false,
          content: post.content,
          coverImage: post.coverImage,
        });
      });
  }, [slug]);

  async function onSubmit(values: PostFormValues) {
    setSaving(true);
    setError("");
    const res = await fetch(`/api/posts/${slug}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (!res.ok) {
      const j = await res.json().catch(() => ({}));
      setError(j.error || "Failed to save");
      setSaving(false);
      return;
    }
    router.push("/admin/posts");
    router.refresh();
  }

  async function onDelete() {
    if (!confirm("Delete this post? This cannot be undone.")) return;
    const res = await fetch(`/api/posts/${slug}`, { method: "DELETE" });
    if (res.ok) {
      router.push("/admin/posts");
      router.refresh();
    }
  }

  if (!initial) return <div className="p-10 text-muted-foreground">Loading…</div>;

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <div className="flex items-center justify-between">
        <h1 className="font-heading text-3xl font-bold text-foreground">Edit Post</h1>
        <button onClick={onDelete} className="text-sm font-semibold text-destructive hover:underline">
          Delete
        </button>
      </div>

      {published && <PushButton slug={slug} />}

      <PostForm initial={initial} onSubmit={onSubmit} saving={saving} error={error} lockSlug />
    </div>
  );
}

