"use client";
import { useState, useEffect } from "react";

export default function Loading() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev === "..." ? "" : prev + "."));
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="font-[family-name:var(--font-display)] text-5xl font-bold tracking-tight">
          <span className="text-[var(--pen)]">T</span>L
        </p>
        <p className="mt-4 font-[family-name:var(--font-mono)] text-sm text-[var(--ink-soft)]">
          Loading portfolio<span className="text-[var(--pen)]">{dots}</span>
        </p>
      </div>
    </div>
  );
}
