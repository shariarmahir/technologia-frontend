import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  const color =
    variant === "dark"
      ? "text-[color:var(--color-primary-dark)]"
      : "text-white";
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2 font-display tracking-tight",
        className
      )}
    >
      <span className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-[11px] bg-gradient-to-br from-[#1B1464] via-[#2E21A3] to-[#7C3AED] shadow-[0_8px_20px_rgba(27,20,100,0.35)]">
        <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.6),transparent_55%)]" />
        <span className="relative font-display text-sm font-bold text-white">tL</span>
      </span>
      <span className={cn("text-lg font-semibold", color)}>
        techno<span className="text-[color:var(--color-accent)]">LO</span>gia
        <span className={color}>.</span>
      </span>
    </Link>
  );
}
