"use client";

import { useEffect, useState } from "react";
import { Bell, Check, AlertCircle } from "lucide-react";

type Status = "idle" | "sending" | "sent" | "error";

export function PushButton({ slug }: { slug: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [subscriberCount, setSubscriberCount] = useState<number | null>(null);
  const [result, setResult] = useState<{ sent: number; failed: number; disabled: number } | null>(null);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    fetch("/api/push/broadcast")
      .then((r) => r.json())
      .then(({ count }) => setSubscriberCount(count ?? 0))
      .catch(() => setSubscriberCount(null));
  }, []);

  async function handlePush() {
    const confirmed = confirm(
      `Send a push notification about this post to all ${
        subscriberCount ?? "?"
      } subscribers? This cannot be undone.`
    );
    if (!confirmed) return;

    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/push/broadcast", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug }),
      });
      const j = await res.json();
      if (!res.ok) throw new Error(j.error || "Failed to send");
      setResult({ sent: j.sent, failed: j.failed, disabled: j.disabled });
      setStatus("sent");
    } catch (e) {
      setErrorMsg(e instanceof Error ? e.message : "Failed to send");
      setStatus("error");
    }
  }

  return (
    <div className="mt-6 rounded-xl border border-border bg-card p-4">
      <div className="flex items-start gap-3">
        <div className="shrink-0 rounded-full bg-primary/10 p-2">
          <Bell className="h-4 w-4 text-primary" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-foreground">Push notification</p>
          <p className="mt-0.5 text-xs text-muted-foreground">
            {subscriberCount === null
              ? "Loading subscriber count…"
              : `${subscriberCount} active subscriber${subscriberCount === 1 ? "" : "s"}`}
          </p>
        </div>
        <button
          type="button"
          onClick={handlePush}
          disabled={status === "sending" || subscriberCount === 0}
          className="shrink-0 inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
        >
          {status === "sending" ? "Sending…" : "Push to subscribers"}
        </button>
      </div>

      {status === "sent" && result && (
        <div className="mt-3 flex items-start gap-2 rounded-lg bg-emerald-50 p-3">
          <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
          <p className="text-xs text-emerald-800">
            Sent to {result.sent} subscriber{result.sent === 1 ? "" : "s"}.
            {result.failed > 0 && ` ${result.failed} failed.`}
            {result.disabled > 0 && ` ${result.disabled} disabled (expired).`}
          </p>
        </div>
      )}

      {status === "error" && (
        <div className="mt-3 flex items-start gap-2 rounded-lg bg-destructive/10 p-3">
          <AlertCircle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
          <p className="text-xs text-destructive">{errorMsg}</p>
        </div>
      )}
    </div>
  );
}

