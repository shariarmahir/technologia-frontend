import { BadgeCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export function VerifiedBadge({
  compact = false,
  className,
}: {
  compact?: boolean;
  className?: string;
}) {
  if (compact) {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-1 rounded-full bg-[#DCFCE7] px-2 py-0.5 text-[11px] font-semibold text-[#065F46]",
          className
        )}
      >
        <BadgeCheck className="h-3 w-3" /> Verified
      </span>
    );
  }
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 rounded-2xl border border-[#BBF7D0] bg-gradient-to-r from-[#DCFCE7] to-white px-4 py-2.5 shadow-[0_4px_18px_rgba(16,185,129,0.18)]",
        className
      )}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#10B981] text-white">
        <BadgeCheck className="h-5 w-5" />
      </span>
      <div className="flex flex-col leading-tight">
        <span className="font-display text-sm font-semibold text-[#065F46]">
          Verified by Masum Hawlader
        </span>
        <span className="text-[11px] text-[#047857]">
          Assistant Professor, EEE — University of Asia Pacific
        </span>
      </div>
    </div>
  );
}
