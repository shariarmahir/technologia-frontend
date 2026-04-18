"use client";

import Link from "next/link";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { GlassButton } from "@/components/ui/glass-button";

export default function LoginPage() {
  return (
    <div>
      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
        Welcome back
      </span>
      <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[color:var(--color-primary-dark)]">
        Log in to your dashboard
      </h1>
      <p className="mt-1.5 text-sm text-[color:var(--color-text-secondary)]">
        Track your orders, manage your teams, or review deliverables.
      </p>

      <form className="mt-8 space-y-4">
        <Field
          label="Email"
          icon={<Mail className="h-4 w-4" />}
          type="email"
          placeholder="you@university.edu"
        />
        <Field
          label="Password"
          icon={<Lock className="h-4 w-4" />}
          type="password"
          placeholder="••••••••"
        />

        <div className="flex items-center justify-between text-sm">
          <label className="inline-flex items-center gap-2 text-[color:var(--color-text-secondary)]">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-[color:var(--color-border)] accent-[color:var(--color-accent)]"
            />
            Remember me
          </label>
          <Link
            href="#"
            className="text-[color:var(--color-primary)] hover:text-[color:var(--color-accent)]"
          >
            Forgot password?
          </Link>
        </div>

        <GlassButton variant="primary" className="mt-2 w-full" size="lg">
          Log in <ArrowRight className="h-4 w-4" />
        </GlassButton>
      </form>

      <div className="my-7 flex items-center gap-4 text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-text-secondary)]">
        <div className="h-px flex-1 bg-[color:var(--color-border)]" />
        or continue with
        <div className="h-px flex-1 bg-[color:var(--color-border)]" />
      </div>

      <div className="grid grid-cols-2 gap-2">
        <button className="rounded-xl border border-[color:var(--color-border)] bg-white py-2.5 text-sm font-medium transition hover:bg-[color:var(--color-surface)]">
          Google
        </button>
        <button className="rounded-xl border border-[color:var(--color-border)] bg-white py-2.5 text-sm font-medium transition hover:bg-[color:var(--color-surface)]">
          bKash
        </button>
      </div>

      <p className="mt-8 text-center text-sm text-[color:var(--color-text-secondary)]">
        New here?{" "}
        <Link
          href="/register"
          className="font-semibold text-[color:var(--color-primary)] hover:text-[color:var(--color-accent)]"
        >
          Create an account
        </Link>
      </p>
    </div>
  );
}

function Field({
  label,
  icon,
  ...rest
}: {
  label: string;
  icon: React.ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-text-secondary)]">
        {label}
      </span>
      <div className="relative mt-1.5">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[color:var(--color-text-secondary)]">
          {icon}
        </span>
        <input
          {...rest}
          className="w-full rounded-xl border border-[color:var(--color-border)] bg-white py-2.5 pl-9 pr-3 text-sm text-[color:var(--color-text-primary)] outline-none transition focus:border-[color:var(--color-accent)] focus:shadow-[0_0_0_4px_rgba(124,58,237,0.12)]"
        />
      </div>
    </label>
  );
}
