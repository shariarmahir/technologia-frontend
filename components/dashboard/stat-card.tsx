"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type StatTone = "default" | "primary" | "accent" | "success";

export function StatCard({
  label,
  value,
  delta,
  icon: Icon,
  tone = "default",
  hint,
}: {
  label: string;
  value: string;
  delta?: { value: string; direction: "up" | "down" };
  icon: LucideIcon;
  tone?: StatTone;
  hint?: string;
}) {
  const dark = tone === "primary" || tone === "accent";

  const surface = {
    default:
      "bg-white border-[color:var(--color-border)] shadow-[0_4px_24px_-12px_rgba(15,11,61,0.12)] hover:shadow-[0_14px_40px_-20px_rgba(14,165,233,0.35)] hover:border-[#BAE6FD]",
    primary:
      "text-white border-[#1E40AF]/50 bg-[linear-gradient(135deg,#0A0930_0%,#1B1464_55%,#0369A1_120%)] shadow-[0_22px_50px_-18px_rgba(14,20,70,0.6)]",
    accent:
      "text-white border-[#38BDF8]/60 bg-[linear-gradient(135deg,#0369A1_0%,#0EA5E9_55%,#38BDF8_120%)] shadow-[0_22px_50px_-18px_rgba(14,165,233,0.55)]",
    success:
      "bg-[#ECFDF5] border-[#A7F3D0] shadow-[0_4px_24px_-12px_rgba(16,185,129,0.25)]",
  }[tone];

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-0.5",
        surface
      )}
    >
      {dark && (
        <>
          <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#38BDF8]/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-8 h-32 w-32 rounded-full bg-[#0EA5E9]/20 blur-3xl" />
        </>
      )}

      <div className="relative flex items-start justify-between">
        <span
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-xl transition-transform group-hover:scale-105",
            dark
              ? "border border-white/15 bg-white/10 text-white"
              : tone === "success"
              ? "bg-white text-[#047857]"
              : "bg-[color:var(--color-accent-soft)] text-[color:var(--color-accent)]"
          )}
        >
          <Icon className="h-4 w-4" />
        </span>
        {delta && (
          <span
            className={cn(
              "inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-[11px] font-semibold",
              delta.direction === "up"
                ? dark
                  ? "bg-white/15 text-white"
                  : "bg-[#DCFCE7] text-[#047857]"
                : dark
                ? "bg-white/15 text-white"
                : "bg-[#FEE2E2] text-[#B91C1C]"
            )}
          >
            {delta.direction === "up" ? (
              <ArrowUpRight className="h-3 w-3" />
            ) : (
              <ArrowDownRight className="h-3 w-3" />
            )}
            {delta.value}
          </span>
        )}
      </div>
      <p
        className={cn(
          "relative mt-4 text-[11px] font-medium uppercase tracking-[0.14em]",
          dark
            ? "text-white/70"
            : tone === "success"
            ? "text-[#047857]"
            : "text-[color:var(--color-text-secondary)]"
        )}
      >
        {label}
      </p>
      <p
        className={cn(
          "relative mt-1 font-display text-2xl font-semibold leading-tight tracking-tight sm:text-[1.75rem]",
          dark
            ? "text-white"
            : tone === "success"
            ? "text-[#064E3B]"
            : "text-[color:var(--color-text-primary)]"
        )}
      >
        {value}
      </p>
      {hint && (
        <p
          className={cn(
            "relative mt-1.5 text-[11px]",
            dark ? "text-white/55" : "text-[color:var(--color-text-secondary)]"
          )}
        >
          {hint}
        </p>
      )}
    </motion.div>
  );
}
