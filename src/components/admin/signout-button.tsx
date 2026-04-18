"use client";

import { signOut } from "next-auth/react";

export function SignOutButton() {
  return (
    <button
      type="button"
      onClick={() => signOut({ callbackUrl: "/" })}
      className="text-muted-foreground hover:text-foreground"
    >
      Logout
    </button>
  );
}

