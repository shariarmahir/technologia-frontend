"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Lock,
  ArrowRight,
  Eye,
  EyeOff,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function LoginPage() {
  const [show, setShow] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Eyebrow */}
      <span className="inline-flex items-center gap-2 rounded-full border border-[#FFD662]/40 bg-[#FFFBEB] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[#003A6E]">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FFD662] opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#FFD662]" />
        </span>
        Welcome back
      </span>

      <h1 className="mt-3 font-display text-[2rem] font-semibold leading-tight tracking-[-0.01em] text-[color:var(--color-primary-dark)]">
        Log in to your{" "}
        <span className="bg-gradient-to-r from-[#003A6E] via-[#00539C] to-[#FFD662] bg-clip-text text-transparent">
          dashboard
        </span>
      </h1>
      <p className="mt-1.5 text-sm text-[color:var(--color-text-secondary)]">
        Track orders, manage teams, and access your university lab — all in one place.
      </p>

      {/* Trust strip */}
      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 rounded-2xl border border-[#FFD662]/30 bg-[#FFFBEB] px-4 py-3">
        {[
          { icon: Users, text: "2,400+ students" },
          { icon: ShieldCheck, text: "96% verified work" },
          { icon: Zap, text: "48 hr avg. delivery" },
        ].map(({ icon: Icon, text }) => (
          <div
            key={text}
            className="flex items-center gap-1.5 font-mono text-[11px] font-medium text-[#003A6E]"
          >
            <Icon className="h-3.5 w-3.5 text-[#00539C]" />
            {text}
          </div>
        ))}
      </div>

      <form className="mt-7 space-y-4">
        <Field
          label="Email address"
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
          <label className="inline-flex cursor-pointer items-center gap-2 text-[color:var(--color-text-secondary)]">
            <input
              type="checkbox"
              className="h-4 w-4 cursor-pointer rounded border-[color:var(--color-border)] accent-[#00539C]"
            />
            Remember me
          </label>
          <Link
            href="#"
            className="font-medium text-[color:var(--color-primary)] transition hover:text-[color:var(--color-primary-light)]"
          >
            Forgot password?
          </Link>
        </div>

        <Button type="submit" variant="sky" size="lg" glow className="mt-2 w-full">
          Sign in <ArrowRight className="h-4 w-4" />
        </Button>
      </form>

      <div className="my-6 flex items-center gap-4 text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-text-secondary)]">
        <div className="h-px flex-1 bg-[color:var(--color-border)]" />
        or continue with
        <div className="h-px flex-1 bg-[color:var(--color-border)]" />
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        <SocialButton icon="G" label="Google" />
        <SocialButton icon="৳" label="bKash" />
      </div>

      {/* Bottom security note */}
      <div className="mt-6 flex items-center justify-center gap-1.5 text-[11px] text-[color:var(--color-text-secondary)]">
        <ShieldCheck className="h-3.5 w-3.5 text-[#00539C]" />
        Secured with 256-bit encryption
      </div>

      <p className="mt-4 text-center text-sm text-[color:var(--color-text-secondary)]">
        New to technoLOgia?{" "}
        <Link
          href="/register"
          className="font-semibold text-[color:var(--color-primary)] transition hover:text-[color:var(--color-primary-light)]"
        >
          Create a free account →
        </Link>
      </p>
    </motion.div>
  );
}

function SocialButton({ icon, label }: { icon: string; label: string }) {
  return (
    <button className="group relative overflow-hidden rounded-xl border border-[color:var(--color-border)] bg-white py-2.5 text-sm font-semibold text-[color:var(--color-primary-dark)] transition hover:border-[#FFD662]/40 hover:bg-[#FFFBEB]">
      <span className="pointer-events-none absolute inset-0 -translate-x-full -skew-x-12 bg-[linear-gradient(90deg,transparent,rgba(255,214,98,0.2),transparent)] transition-transform duration-700 group-hover:translate-x-full" />
      <span className="flex items-center justify-center gap-2">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[color:var(--color-surface)] font-bold text-[11px] text-[color:var(--color-primary)]">
          {icon}
        </span>
        {label}
      </span>
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
  className?: string;
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
          className="w-full rounded-xl border border-[color:var(--color-border)] bg-white py-3 pl-9 pr-10 text-sm text-[color:var(--color-text-primary)] outline-none transition focus:border-[#00539C] focus:bg-[#F7F9FC] focus:shadow-[0_0_0_4px_rgba(0,83,156,0.12)]"
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
