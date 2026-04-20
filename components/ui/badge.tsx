import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "default" | "sky" | "success" | "dark" | "outline";

const styles: Record<Variant, string> = {
  default:
    "bg-[color:var(--color-surface-alt)] text-[color:var(--color-primary)] border border-[color:var(--color-border)]",
  sky:
    "bg-[color:var(--color-accent-soft)] text-[#075985] border border-[#BAE6FD]",
  success:
    "bg-[#ECFDF5] text-[#047857] border border-[#A7F3D0]",
  dark:
    "bg-white/10 text-white border border-white/20 backdrop-blur",
  outline:
    "bg-transparent text-[color:var(--color-text-secondary)] border border-[color:var(--color-border)]",
};

export function Badge({
  children,
  variant = "default",
  className,
}: {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.18em]",
        styles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
