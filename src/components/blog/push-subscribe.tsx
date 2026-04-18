"use client";

import { useEffect, useState } from "react";
import { Bell, BellOff, Check } from "lucide-react";

type Status = "loading" | "unsupported" | "blocked" | "idle" | "subscribing" | "subscribed" | "error";

function urlBase64ToUint8Array(base64String: string): Uint8Array {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) outputArray[i] = rawData.charCodeAt(i);
  return outputArray;
}

export function PushSubscribe() {
  const [status, setStatus] = useState<Status>("loading");
  const [errorMsg, setErrorMsg] = useState("");
  const publicKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("serviceWorker" in navigator) || !("PushManager" in window)) {
      setStatus("unsupported");
      return;
    }
    if (!publicKey) {
      setStatus("unsupported");
      return;
    }
    if (Notification.permission === "denied") {
      setStatus("blocked");
      return;
    }
    navigator.serviceWorker.ready.then(async (reg) => {
      const existing = await reg.pushManager.getSubscription();
      setStatus(existing ? "subscribed" : "idle");
    });
  }, [publicKey]);

  async function handleSubscribe() {
    if (!publicKey) return;
    setStatus("subscribing");
    setErrorMsg("");
    try {
      const permission = await Notification.requestPermission();
      if (permission !== "granted") {
        setStatus(permission === "denied" ? "blocked" : "idle");
        return;
      }

      const reg = await navigator.serviceWorker.ready;
      const applicationServerKey = urlBase64ToUint8Array(publicKey);
      const subscription = await reg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: applicationServerKey.buffer.slice(
          applicationServerKey.byteOffset,
          applicationServerKey.byteOffset + applicationServerKey.byteLength
        ) as ArrayBuffer,
      });

      const res = await fetch("/api/push/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subscription }),
      });
      if (!res.ok) throw new Error("Server rejected subscription");
      setStatus("subscribed");
    } catch (e) {
      setErrorMsg(e instanceof Error ? e.message : "Failed to subscribe");
      setStatus("error");
    }
  }

  async function handleUnsubscribe() {
    try {
      const reg = await navigator.serviceWorker.ready;
      const sub = await reg.pushManager.getSubscription();
      if (sub) {
        await fetch("/api/push/unsubscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ endpoint: sub.endpoint }),
        });
        await sub.unsubscribe();
      }
      setStatus("idle");
    } catch {
      // swallow — user can try again
    }
  }

  if (status === "loading" || status === "unsupported") return null;

  return (
    <aside className="mt-16 rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-secondary p-6 sm:p-8">
      {status === "subscribed" ? (
        <div className="flex items-start gap-4">
          <div className="shrink-0 rounded-full bg-emerald-100 p-2.5">
            <Check className="h-5 w-5 text-emerald-700" />
          </div>
          <div className="flex-1">
            <h3 className="font-heading text-lg font-bold text-foreground">
              You&apos;re subscribed
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              You&apos;ll get a notification when we publish a new post.
            </p>
            <button
              onClick={handleUnsubscribe}
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground"
            >
              <BellOff className="h-3.5 w-3.5" />
              Unsubscribe
            </button>
          </div>
        </div>
      ) : status === "blocked" ? (
        <div className="flex items-start gap-4">
          <div className="shrink-0 rounded-full bg-amber-100 p-2.5">
            <BellOff className="h-5 w-5 text-amber-700" />
          </div>
          <div className="flex-1">
            <h3 className="font-heading text-lg font-bold text-foreground">
              Notifications blocked
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              You&apos;ve blocked notifications for this site. To re-enable,
              click the lock icon in your browser&apos;s address bar and allow notifications.
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
          <div className="flex items-start gap-4 flex-1">
            <div className="shrink-0 rounded-full bg-primary/10 p-2.5">
              <Bell className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-foreground">
                Enjoyed this post?
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Get a browser notification when we publish a new one.
                No emails. Unsubscribe anytime.
              </p>
            </div>
          </div>
          <button
            onClick={handleSubscribe}
            disabled={status === "subscribing"}
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
          >
            {status === "subscribing" ? "Subscribing…" : "Enable Notifications"}
          </button>
        </div>
      )}
      {status === "error" && errorMsg && (
        <p className="mt-3 text-xs text-destructive">{errorMsg}</p>
      )}
    </aside>
  );
}

