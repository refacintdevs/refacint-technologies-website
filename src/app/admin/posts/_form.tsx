"use client";

import { useRef, useState } from "react";
import { ImageUpload } from "@/components/admin/image-upload";

export interface PostFormValues {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  gradient: string;
  published: boolean;
  content: string;
  coverImage?: string;
}

const defaultValues: PostFormValues = {
  slug: "",
  title: "",
  excerpt: "",
  category: "General",
  date: new Date().toISOString().slice(0, 10),
  readTime: "5 min read",
  gradient: "from-blue-500 to-cyan-500",
  published: true,
  content: "",
  coverImage: undefined,
};

function slugify(s: string): string {
  return s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function PostForm({
  initial,
  onSubmit,
  saving,
  error,
  lockSlug = false,
}: {
  initial?: PostFormValues;
  onSubmit: (v: PostFormValues) => void;
  saving: boolean;
  error?: string;
  lockSlug?: boolean;
}) {
  const [v, setV] = useState<PostFormValues>(initial || defaultValues);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  function update<K extends keyof PostFormValues>(key: K, value: PostFormValues[K]) {
    setV((p) => ({ ...p, [key]: value }));
  }

  function insertMarkdownAtCursor(markdown: string) {
    const ta = contentRef.current;
    if (!ta) {
      setV((p) => ({ ...p, content: p.content + markdown }));
      return;
    }
    const start = ta.selectionStart;
    const end = ta.selectionEnd;
    const next = v.content.slice(0, start) + markdown + v.content.slice(end);
    setV((p) => ({ ...p, content: next }));
    // Restore cursor after insertion on next tick
    requestAnimationFrame(() => {
      ta.focus();
      ta.selectionStart = ta.selectionEnd = start + markdown.length;
    });
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(v);
      }}
      className="mt-6 space-y-5"
    >
      <Field label="Title">
        <input
          required
          value={v.title}
          onChange={(e) => {
            const title = e.target.value;
            setV((p) => ({
              ...p,
              title,
              slug: lockSlug || p.slug ? p.slug : slugify(title),
            }));
          }}
          className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </Field>

      <Field
        label="Slug (URL)"
        hint={lockSlug ? "Cannot be changed after creation." : "Auto-generated from title."}
      >
        <input
          required
          readOnly={lockSlug}
          value={v.slug}
          onChange={(e) => update("slug", slugify(e.target.value))}
          className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary read-only:bg-muted"
        />
      </Field>

      <Field label="Excerpt">
        <textarea
          value={v.excerpt}
          onChange={(e) => update("excerpt", e.target.value)}
          rows={2}
          className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </Field>

      <Field label="Cover Image" hint="Optional. Falls back to the gradient banner.">
        <div className="mt-1">
          <ImageUpload
            value={v.coverImage}
            onChange={(url) => update("coverImage", url)}
            onInsertMarkdown={insertMarkdownAtCursor}
          />
        </div>
      </Field>

      <div className="grid grid-cols-2 gap-4">
        <Field label="Category">
          <input
            value={v.category}
            onChange={(e) => update("category", e.target.value)}
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </Field>
        <Field label="Date">
          <input
            type="date"
            value={v.date}
            onChange={(e) => update("date", e.target.value)}
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </Field>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Field label="Read Time">
          <input
            value={v.readTime}
            onChange={(e) => update("readTime", e.target.value)}
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </Field>
        <Field label="Gradient fallback (Tailwind)">
          <input
            value={v.gradient}
            onChange={(e) => update("gradient", e.target.value)}
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </Field>
      </div>

      <Field label="Content (Markdown)">
        <textarea
          ref={contentRef}
          required
          value={v.content}
          onChange={(e) => update("content", e.target.value)}
          rows={20}
          className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </Field>

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={v.published}
          onChange={(e) => update("published", e.target.checked)}
          className="h-4 w-4 rounded border-border"
        />
        <span className="text-sm text-foreground">Published (uncheck to save as draft)</span>
      </label>

      {error && <p className="text-sm text-destructive">{error}</p>}

      <div className="flex items-center gap-3 pt-2">
        <button
          type="submit"
          disabled={saving}
          className="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
        >
          {saving ? "Saving…" : "Save"}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <div className="mb-1 flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">{label}</span>
        {hint && <span className="text-xs text-muted-foreground">{hint}</span>}
      </div>
      {children}
    </label>
  );
}

