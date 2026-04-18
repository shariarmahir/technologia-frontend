import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import type { OrderStatus } from "@/components/ui/status-badge";

const stages: { id: OrderStatus; label: string }[] = [
  { id: "requested", label: "Requested" },
  { id: "assigned", label: "Assigned" },
  { id: "in_progress", label: "In progress" },
  { id: "pending_review", label: "Review" },
  { id: "submitted", label: "Submitted" },
];

export function WorkTracker({ current }: { current: OrderStatus }) {
  const activeIndex = stages.findIndex((s) => s.id === current);
  const clamped = activeIndex === -1 ? stages.length - 1 : activeIndex;

  return (
    <div className="relative">
      <div className="absolute left-4 right-4 top-4 h-[2px] bg-[color:var(--color-border)]" />
      <div
        className="absolute left-4 top-4 h-[2px] bg-gradient-to-r from-[#1B1464] to-[#7C3AED] transition-all"
        style={{
          width: `calc(${(clamped / (stages.length - 1)) * 100}% - 2rem)`,
        }}
      />

      <ol className="relative flex justify-between">
        {stages.map((s, i) => {
          const done = i < clamped;
          const active = i === clamped;
          return (
            <li key={s.id} className="flex flex-col items-center gap-2">
              <span
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full border-2 text-[11px] font-semibold transition",
                  done &&
                    "border-[color:var(--color-primary)] bg-[color:var(--color-primary)] text-white",
                  active &&
                    "border-[color:var(--color-accent)] bg-white text-[color:var(--color-accent)] shadow-[0_0_0_6px_rgba(124,58,237,0.15)]",
                  !done && !active &&
                    "border-[color:var(--color-border)] bg-white text-[color:var(--color-text-secondary)]"
                )}
              >
                {done ? <Check className="h-4 w-4" /> : i + 1}
              </span>
              <span
                className={cn(
                  "text-[11px] font-semibold uppercase tracking-wider",
                  active
                    ? "text-[color:var(--color-accent)]"
                    : done
                    ? "text-[color:var(--color-primary)]"
                    : "text-[color:var(--color-text-secondary)]"
                )}
              >
                {s.label}
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
