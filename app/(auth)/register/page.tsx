"use client";

import { useState } from "react";
import Link from "next/link";
import { GraduationCap, School, ShieldCheck, ArrowRight } from "lucide-react";
import { GlassButton } from "@/components/ui/glass-button";
import { cn } from "@/lib/utils";

type Role = "client" | "school" | "admin";

const roles: {
  value: Role;
  title: string;
  description: string;
  icon: typeof GraduationCap;
  destination: string;
}[] = [
  {
    value: "client",
    title: "Student / Professional",
    description: "Order services, track work, pay via bKash or card.",
    icon: GraduationCap,
    destination: "/dashboard/client",
  },
  {
    value: "school",
    title: "School / College",
    description: "Partner for teams, workshops, events & achievements.",
    icon: School,
    destination: "/dashboard/school",
  },
  {
    value: "admin",
    title: "technoLOgia admin",
    description: "Internal console — manage orders, teams & revenue.",
    icon: ShieldCheck,
    destination: "/admin",
  },
];

export default function RegisterPage() {
  const [role, setRole] = useState<Role>("client");
  const selected = roles.find((r) => r.value === role)!;

  return (
    <div>
      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
        Get started
      </span>
      <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[color:var(--color-primary-dark)]">
        Create your technoLOgia account
      </h1>
      <p className="mt-1.5 text-sm text-[color:var(--color-text-secondary)]">
        Pick the role that fits you — your dashboard will be tailored to match.
      </p>

      <div className="mt-7 space-y-2.5">
        {roles.map((r) => {
          const Icon = r.icon;
          const active = r.value === role;
          return (
            <button
              key={r.value}
              type="button"
              onClick={() => setRole(r.value)}
              className={cn(
                "flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition",
                active
                  ? "border-[color:var(--color-accent)] bg-[color:var(--color-surface-alt)] shadow-[0_6px_18px_rgba(124,58,237,0.15)]"
                  : "border-[color:var(--color-border)] bg-white hover:border-[color:var(--color-accent-light)]"
              )}
            >
              <span
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-xl",
                  active
                    ? "bg-[color:var(--color-primary)] text-white"
                    : "bg-[color:var(--color-surface)] text-[color:var(--color-primary)]"
                )}
              >
                <Icon className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <p className="font-display text-sm font-semibold text-[color:var(--color-primary-dark)]">
                  {r.title}
                </p>
                <p className="mt-0.5 text-xs text-[color:var(--color-text-secondary)]">
                  {r.description}
                </p>
              </div>
              <span
                className={cn(
                  "mt-1 h-4 w-4 flex-shrink-0 rounded-full border-2",
                  active
                    ? "border-[color:var(--color-accent)] bg-[color:var(--color-accent)] shadow-[0_0_0_3px_rgba(124,58,237,0.18)]"
                    : "border-[color:var(--color-border)]"
                )}
              />
            </button>
          );
        })}
      </div>

      <form className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Field label="Full name" placeholder="Mahir Shariar" />
        <Field label="Email" type="email" placeholder="you@example.com" />
        {role === "client" && (
          <Field
            label="University"
            placeholder="University of Asia Pacific"
            className="sm:col-span-2"
          />
        )}
        {role === "school" && (
          <Field
            label="School / College name"
            placeholder="Dhaka Residential Model College"
            className="sm:col-span-2"
          />
        )}
        <Field label="Password" type="password" placeholder="••••••••" />
        <Field
          label="Confirm password"
          type="password"
          placeholder="••••••••"
        />
      </form>

      <div className="mt-5 flex items-start gap-2 rounded-xl bg-[color:var(--color-surface)] p-3 text-xs text-[color:var(--color-text-secondary)]">
        <input
          type="checkbox"
          className="mt-0.5 h-4 w-4 rounded border-[color:var(--color-border)] accent-[color:var(--color-accent)]"
          defaultChecked
        />
        <span>
          I agree to the{" "}
          <Link href="#" className="text-[color:var(--color-primary)] underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="#" className="text-[color:var(--color-primary)] underline">
            Privacy Policy
          </Link>
          . Work I order will be verified per technoLOgia&rsquo;s quality
          assurance flow.
        </span>
      </div>

      <GlassButton
        href={selected.destination}
        variant="primary"
        size="lg"
        className="mt-6 w-full"
      >
        Create account · Enter {selected.title}
        <ArrowRight className="h-4 w-4" />
      </GlassButton>

      <p className="mt-6 text-center text-sm text-[color:var(--color-text-secondary)]">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-semibold text-[color:var(--color-primary)] hover:text-[color:var(--color-accent)]"
        >
          Log in
        </Link>
      </p>
    </div>
  );
}

function Field({
  label,
  className,
  ...rest
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className={cn("block", className)}>
      <span className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-text-secondary)]">
        {label}
      </span>
      <input
        {...rest}
        className="mt-1.5 w-full rounded-xl border border-[color:var(--color-border)] bg-white px-3 py-2.5 text-sm outline-none transition focus:border-[color:var(--color-accent)] focus:shadow-[0_0_0_4px_rgba(124,58,237,0.12)]"
      />
    </label>
  );
}
