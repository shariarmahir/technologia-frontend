"use client";

import Link from "next/link";
import { Mail, Lock, ArrowRight, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function LoginPage() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <span className="inline-flex items-center gap-2 rounded-full border border-[#BAE6FD] bg-[color:var(--color-accent-soft)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[#075985]">
        <span className="h-1 w-1 rounded-full bg-[color:var(--color-accent)]" />
        Welcome back
      </span>
      <h1 className="mt-3 font-display text-[2rem] font-semibold leading-tight tracking-[-0.01em] text-[color:var(--color-primary-dark)]">
        Log in to your dashboard
      </h1>
      <p className="mt-1.5 text-sm text-[color:var(--color-text-secondary)]">
        Track your orders, manage your teams, or run your university lab.
      </p>

      <form className="mt-8 space-y-4">
        <Field
          label="Email"
          icon={<Mail className="h-4 w-4" />}
          type="email"
          placeholder="you@university.edu"
          autoComplete="email"
        />
        <Field
          label="Password"
          icon={<Lock className="h-4 w-4" />}
          type={show ? "text" : "password"}
          placeholder="••••••••"
          autoComplete="current-password"
          rightIcon={
            <button
              type="button"
              onClick={() => setShow((s) => !s)}
              className="text-[color:var(--color-text-secondary)] transition hover:text-[color:var(--color-primary)]"
              aria-label={show ? "Hide password" : "Show password"}
            >
              {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          }
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

        <Button type="submit" variant="sky" size="lg" glow className="mt-2 w-full">
          Log in <ArrowRight className="h-4 w-4" />
        </Button>
      </form>

      <div className="my-7 flex items-center gap-4 text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-text-secondary)]">
        <div className="h-px flex-1 bg-[color:var(--color-border)]" />
        or continue with
        <div className="h-px flex-1 bg-[color:var(--color-border)]" />
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        <SocialButton label="Google" />
        <SocialButton label="bKash" />
      </div>

      <p className="mt-8 text-center text-sm text-[color:var(--color-text-secondary)]">
        New here?{" "}
        <Link
          href="/register"
          className="font-semibold text-[color:var(--color-primary)] transition hover:text-[color:var(--color-accent)]"
        >
          Create an account
        </Link>
      </p>
    </div>
  );
}

function SocialButton({ label }: { label: string }) {
  return (
    <button className="group relative overflow-hidden rounded-xl border border-[color:var(--color-border)] bg-white py-2.5 text-sm font-semibold text-[color:var(--color-primary-dark)] transition hover:border-[#BAE6FD] hover:bg-[color:var(--color-accent-soft)]">
      <span className="pointer-events-none absolute inset-0 -translate-x-full -skew-x-12 bg-[linear-gradient(90deg,transparent,rgba(14,165,233,0.25),transparent)] transition-transform duration-700 group-hover:translate-x-full" />
      {label}
    </button>
  );
}

function Field({
  label,
  icon,
  rightIcon,
  className,
  ...rest
}: {
  label: string;
  icon: React.ReactNode;
  rightIcon?: React.ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className={cn("block", className)}>
      <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[color:var(--color-text-secondary)]">
        {label}
      </span>
      <div className="relative mt-1.5">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[color:var(--color-text-secondary)]">
          {icon}
        </span>
        <input
          {...rest}
          className="w-full rounded-xl border border-[color:var(--color-border)] bg-white py-2.5 pl-9 pr-10 text-sm text-[color:var(--color-text-primary)] outline-none transition focus:border-[color:var(--color-accent)] focus:shadow-[0_0_0_4px_rgba(14,165,233,0.15)]"
        />
        {rightIcon && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2">
            {rightIcon}
          </span>
        )}
      </div>
    </label>
  );
}
