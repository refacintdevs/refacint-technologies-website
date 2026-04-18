"use client";

import { useRef, useState } from "react";
import Image from "next/image";

type Props = {
  /** Current cover image URL */
  value?: string;
  /** Called when a new image is uploaded or cleared */
  onChange: (url: string | undefined) => void;
  /** Optional: called when user asks to insert markdown into the body editor */
  onInsertMarkdown?: (markdown: string) => void;
};

export function ImageUpload({ value, onChange, onInsertMarkdown }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [lastUploaded, setLastUploaded] = useState<string | null>(null);

  async function handleFile(file: File, mode: "cover" | "inline") {
    setError("");
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/upload", { method: "POST", body: fd });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || `Upload failed (${res.status})`);
      }
      const { url } = (await res.json()) as { url: string };

      if (mode === "cover") {
        onChange(url);
      } else if (mode === "inline" && onInsertMarkdown) {
        const alt = file.name.replace(/\.[^.]+$/, "").replace(/[-_]/g, " ");
        onInsertMarkdown(`\n![${alt}](${url})\n`);
        setLastUploaded(url);
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : "Upload failed");
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  return (
    <div className="space-y-3">
      {value ? (
        <div className="relative">
          <div className="relative h-40 w-full overflow-hidden rounded-lg border border-border bg-muted">
            <Image src={value} alt="Cover" fill className="object-cover" unoptimized />
          </div>
          <div className="mt-2 flex items-center gap-3">
            <button
              type="button"
              onClick={() => onChange(undefined)}
              className="text-xs font-semibold text-destructive hover:underline"
            >
              Remove cover
            </button>
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="text-xs font-semibold text-primary hover:underline"
            >
              Replace
            </button>
          </div>
        </div>
      ) : (
        <div className="rounded-lg border-2 border-dashed border-border bg-muted/30 p-6 text-center">
          <p className="text-sm text-muted-foreground">
            No cover image. A gradient banner will be used as fallback.
          </p>
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            disabled={uploading}
            className="mt-3 inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
          >
            {uploading ? "Uploading…" : "Upload cover image"}
          </button>
        </div>
      )}

      {onInsertMarkdown && (
        <div className="rounded-lg border border-border bg-card p-3">
          <p className="text-xs font-semibold text-foreground">Insert inline image</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Uploads to Cloudinary and inserts a Markdown snippet into the body.
          </p>
          <button
            type="button"
            onClick={() => {
              // Temporarily flip the input to inline mode via dataset
              if (inputRef.current) inputRef.current.dataset.mode = "inline";
              inputRef.current?.click();
            }}
            disabled={uploading}
            className="mt-2 inline-flex items-center rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-secondary disabled:opacity-50"
          >
            {uploading ? "Uploading…" : "Upload inline image"}
          </button>
          {lastUploaded && (
            <p className="mt-2 text-xs text-muted-foreground break-all">
              Last uploaded: <span className="font-mono">{lastUploaded}</span>
            </p>
          )}
        </div>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/avif,image/gif"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (!file) return;
          const mode = (inputRef.current?.dataset.mode as "cover" | "inline") || "cover";
          if (inputRef.current) inputRef.current.dataset.mode = "cover"; // reset
          handleFile(file, mode);
        }}
      />

      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}

