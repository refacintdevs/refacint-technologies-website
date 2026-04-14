"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative flex h-8 w-14 items-center rounded-full p-1 transition-colors duration-300",
        isDark
          ? "bg-gradient-to-r from-purple-600 to-pink-500"
          : "bg-gradient-to-r from-amber-400 to-orange-400"
      )}
      aria-label="Toggle theme"
    >
      <span
        className={cn(
          "flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300",
          isDark ? "translate-x-6" : "translate-x-0"
        )}
      >
        {isDark ? (
          <Moon className="h-3.5 w-3.5 text-purple-600" />
        ) : (
          <Sun className="h-3.5 w-3.5 text-amber-500" />
        )}
      </span>
    </button>
  );
}