import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import type { AssignmentStatus } from "@/components/ui/status-badge";

const stages: { id: AssignmentStatus; label: string }[] = [
  { id: "posted", label: "Posted" },
  { id: "matched", label: "Matched" },
  { id: "in_progress", label: "In Progress" },
  { id: "under_review", label: "Review" },
  { id: "completed", label: "Completed" },
];

const statusOrder: AssignmentStatus[] = [
  "posted", "bidding", "matched", "in_progress", "under_review", "revision", "completed",
];

export function WorkTracker({ current }: { current: AssignmentStatus }) {
  const currentIndex = statusOrder.indexOf(current);

  const getStageIndex = (stageId: AssignmentStatus) => {
    const idx = statusOrder.indexOf(stageId);
    return idx;
  };

  return (
    <div className="relative">
      <div className="absolute left-4 right-4 top-4 h-[2px] bg-[color:var(--color-border)]" />
      <div
        className="absolute left-4 top-4 h-[2px] bg-[linear-gradient(90deg,#003A6E_0%,#00539C_50%,#FFD662_100%)] shadow-[0_0_14px_rgba(255,214,98,0.4)] transition-all"
        style={{
          width: `calc(${(Math.min(currentIndex, statusOrder.indexOf("completed")) / (stages.length - 1)) * 100}% - 2rem)`,
        }}
      />

      <ol className="relative flex justify-between">
        {stages.map((s, i) => {
          const stageGlobalIdx = getStageIndex(s.id);
          const done = stageGlobalIdx < currentIndex;
          const active = s.id === current || (s.id === "matched" && current === "bidding");
          return (
            <li key={s.id} className="flex flex-col items-center gap-2">
              <span
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full border-2 text-[11px] font-semibold transition",
                  done &&
                    "border-[#00539C] bg-[#00539C] text-white",
                  active &&
                    "border-[#FFD662] bg-white text-[#003A6E] shadow-[0_0_0_6px_rgba(255,214,98,0.2)]",
                  !done &&
                    !active &&
                    "border-[color:var(--color-border)] bg-white text-[color:var(--color-text-secondary)]"
                )}
              >
                {done ? <Check className="h-4 w-4" /> : i + 1}
              </span>
              <span
                className={cn(
                  "text-[11px] font-semibold uppercase tracking-wider",
                  active
                    ? "text-[#003A6E]"
                    : done
                    ? "text-[#00539C]"
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
