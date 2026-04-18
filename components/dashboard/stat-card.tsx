"use client";

import { ArrowUpRight, ArrowDownRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function StatCard({
  label,
  value,
  delta,
  icon: Icon,
  tone = "default",
}: {
  label: string;
  value: string;
  delta?: { value: string; direction: "up" | "down" };
  icon: LucideIcon;
  tone?: "default" | "primary" | "accent";
}) {
  const toneMap = {
    default: "bg-white border-[color:var(--color-border)]",
    primary:
      "bg-gradient-to-br from-[#0F0B3D] to-[#1B1464] border-[#2E21A3] text-white",
    accent:
      "bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] border-[#A78BFA] text-white",
  };
  const dark = tone !== "default";
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border p-5 shadow-[0_4px_20px_rgba(15,11,61,0.04)]",
        toneMap[tone]
      )}
    >
      <div className="flex items-start justify-between">
        <span
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-xl",
            dark
              ? "bg-white/15 text-white"
              : "bg-[color:var(--color-surface-alt)] text-[color:var(--color-primary)]"
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
          "mt-4 text-xs uppercase tracking-wider",
          dark ? "text-white/70" : "text-[color:var(--color-text-secondary)]"
        )}
      >
        {label}
      </p>
      <p
        className={cn(
          "mt-1 font-display text-2xl font-semibold tracking-tight sm:text-3xl",
          dark ? "text-white" : "text-[color:var(--color-text-primary)]"
        )}
      >
        {value}
      </p>
    </div>
  );
}
