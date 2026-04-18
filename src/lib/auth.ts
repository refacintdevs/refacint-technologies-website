/**
 * Auth helpers for API routes. These wrap Auth.js v5.
 *
 * Existing code that imported `getSession`, `requireSession` from here
 * continues to work — we just proxy through to Auth.js.
 */
import { auth } from "@/auth";

export async function getSession(): Promise<{ username: string; role: string } | null> {
  const session = await auth();
  if (!session?.user) return null;
  const role = (session.user as { role?: string }).role ?? "admin";
  if (role !== "admin") return null;
  return {
    username: session.user.email ?? session.user.name ?? "admin",
    role,
  };
}

export async function requireSession(): Promise<{ username: string; role: string }> {
  const s = await getSession();
  if (!s) throw new Error("Unauthorized");
  return s;
}

// Legacy exports (no-op after migration). Keep to avoid breaking imports.
export async function login(): Promise<boolean> {
  throw new Error("login() is deprecated — use Auth.js signIn() via the login page");
}
export async function logout(): Promise<void> {
  throw new Error("logout() is deprecated — use Auth.js signOut()");
}

