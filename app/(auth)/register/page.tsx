"use client";

import { useState } from "react";
import Link from "next/link";
import {
  GraduationCap,
  School,
  ShieldCheck,
  ArrowRight,
  FlaskConical,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Role = "client" | "school" | "lab" | "admin";

const roles: {
  value: Role;
  title: string;
  description: string;
  icon: typeof GraduationCap;
  destination: string;
  badge?: string;
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
    value: "lab",
    title: "University Project Lab",
    description:
      "Run workshops, issue inter-university challenges, host competitions.",
    icon: FlaskConical,
    destination: "/dashboard/lab",
    badge: "New",
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
      <span className="inline-flex items-center gap-2 rounded-full border border-[#BAE6FD] bg-[color:var(--color-accent-soft)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[#075985]">
        <span className="h-1 w-1 rounded-full bg-[color:var(--color-accent)]" />
        Get started
      </span>
      <h1 className="mt-3 font-display text-[2rem] font-semibold leading-tight tracking-[-0.01em] text-[color:var(--color-primary-dark)]">
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
                "group relative flex w-full items-start gap-4 overflow-hidden rounded-2xl border p-4 text-left transition-all",
                active
                  ? "border-[#0EA5E9] bg-[color:var(--color-accent-soft)] shadow-[0_12px_32px_-16px_rgba(14,165,233,0.45)]"
                  : "border-[color:var(--color-border)] bg-white hover:-translate-y-0.5 hover:border-[#BAE6FD] hover:shadow-[0_10px_28px_-18px_rgba(14,165,233,0.35)]"
              )}
            >
              {active && (
                <span className="absolute inset-y-0 left-0 w-1 bg-[linear-gradient(180deg,#0EA5E9_0%,#38BDF8_100%)]" />
              )}
              <span
                className={cn(
                  "flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl transition",
                  active
                    ? "bg-[linear-gradient(135deg,#1B1464_0%,#0EA5E9_100%)] text-white shadow-[0_8px_20px_-8px_rgba(14,165,233,0.6)]"
                    : "bg-[color:var(--color-surface)] text-[color:var(--color-primary)]"
                )}
              >
                <Icon className="h-5 w-5" />
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="font-display text-sm font-semibold text-[color:var(--color-primary-dark)]">
                    {r.title}
                  </p>
                  {r.badge && (
                    <span className="rounded-full bg-[linear-gradient(135deg,#0EA5E9_0%,#38BDF8_100%)] px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-white shadow-[0_6px_14px_-6px_rgba(14,165,233,0.7)]">
                      {r.badge}
                    </span>
                  )}
                </div>
                <p className="mt-0.5 text-xs leading-relaxed text-[color:var(--color-text-secondary)]">
                  {r.description}
                </p>
              </div>
              <span
                className={cn(
                  "mt-1 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full border-2 transition",
                  active
                    ? "border-[#0EA5E9] bg-[#0EA5E9] shadow-[0_0_0_4px_rgba(14,165,233,0.2)]"
                    : "border-[color:var(--color-border)]"
                )}
              >
                {active && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
              </span>
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
        {role === "lab" && (
          <>
            <Field
              label="University"
              placeholder="BUET · IEEE Student Branch"
              className="sm:col-span-2"
            />
            <Field
              label="Lab / program name"
              placeholder="Robotics Project Lab"
            />
            <Field
              label="Faculty advisor email"
              type="email"
              placeholder="advisor@buet.ac.bd"
            />
          </>
        )}
        <Field label="Password" type="password" placeholder="••••••••" />
        <Field
          label="Confirm password"
          type="password"
          placeholder="••••••••"
        />
      </form>

      <div className="mt-5 flex items-start gap-2 rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-3 text-xs text-[color:var(--color-text-secondary)]">
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

      <Button
        href={selected.destination}
        variant="sky"
        size="lg"
        glow
        className="mt-6 w-full"
      >
        Create account · Enter {selected.title}
        <ArrowRight className="h-4 w-4" />
      </Button>

      <p className="mt-6 text-center text-sm text-[color:var(--color-text-secondary)]">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-semibold text-[color:var(--color-primary)] transition hover:text-[color:var(--color-accent)]"
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
      <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[color:var(--color-text-secondary)]">
        {label}
      </span>
      <input
        {...rest}
        className="mt-1.5 w-full rounded-xl border border-[color:var(--color-border)] bg-white px-3 py-2.5 text-sm outline-none transition focus:border-[color:var(--color-accent)] focus:shadow-[0_0_0_4px_rgba(14,165,233,0.15)]"
      />
    </label>
  );
}
