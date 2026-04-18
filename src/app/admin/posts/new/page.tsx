"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PostForm, type PostFormValues } from "../_form";

export default function NewPostPage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(values: PostFormValues) {
    setSaving(true);
    setError("");
    const res = await fetch("/api/posts", {
      method: "POST",
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

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="font-heading text-3xl font-bold text-foreground">New Post</h1>
      <PostForm onSubmit={onSubmit} saving={saving} error={error} />
    </div>
  );
}

