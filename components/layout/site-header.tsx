"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Languages } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
  { label: "What we do", href: "/#what-we-do" },
  { label: "Services", href: "/#services" },
  { label: "School Program", href: "/#school-program" },
  { label: "University Labs", href: "/#university-labs" },
  { label: "How it works", href: "/#how-it-works" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"EN" | "BN">("EN");

  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--color-border)]/60 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[color:var(--color-text-secondary)] transition-colors hover:text-[color:var(--color-primary)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <button
            onClick={() => setLang((l) => (l === "EN" ? "BN" : "EN"))}
            className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--color-border)] bg-white/70 px-3 py-1.5 text-xs font-semibold text-[color:var(--color-primary)] transition hover:bg-[color:var(--color-surface)]"
            aria-label="Toggle language"
          >
            <Languages className="h-3.5 w-3.5" />
            {lang}
          </button>
          <Link
            href="/login"
            className="rounded-full px-4 py-2 text-sm font-medium text-[color:var(--color-primary)] transition hover:bg-[color:var(--color-surface)]"
          >
            Log in
          </Link>
          <Button href="/register" variant="primary" size="sm">
            Get started
          </Button>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-border)] bg-white text-[color:var(--color-primary)] md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-[color:var(--color-border)] bg-white transition-[max-height] duration-300 md:hidden",
          open ? "max-h-96" : "max-h-0"
        )}
      >
        <div className="flex flex-col gap-1 px-5 py-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-[color:var(--color-text-primary)] hover:bg-[color:var(--color-surface)]"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-2 flex gap-2">
            <Link
              href="/login"
              className="flex-1 rounded-full border border-[color:var(--color-border)] px-4 py-2.5 text-center text-sm font-semibold text-[color:var(--color-primary)]"
            >
              Log in
            </Link>
            <Button href="/register" variant="primary" size="sm" className="flex-1">
              Get started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
