import { cn } from "@/lib/utils";

export type AssignmentStatus =
  | "posted"
  | "bidding"
  | "matched"
  | "in_progress"
  | "under_review"
  | "revision"
  | "completed"
  | "disputed"
  | "cancelled";

const statusMap: Record<
  AssignmentStatus,
  { label: string; className: string; dot: string }
> = {
  posted: {
    label: "Posted",
    className: "bg-[#F8F9FC] text-[#475569] border-[#E2E8F0]",
    dot: "bg-[#94A3B8]",
  },
  bidding: {
    label: "Bidding",
    className: "bg-[#FFFBEB] text-[#92400E] border-[#FDE68A]",
    dot: "bg-[#F59E0B]",
  },
  matched: {
    label: "Matched",
    className: "bg-[#EEF4FF] text-[#1E40AF] border-[#C7D7FE]",
    dot: "bg-[#3B82F6]",
  },
  in_progress: {
    label: "In Progress",
    className: "bg-[#DBEAFE] text-[#1D4ED8] border-[#BFDBFE]",
    dot: "bg-[#2563EB]",
  },
  under_review: {
    label: "Under Review",
    className: "bg-[#FCE7F3] text-[#9D174D] border-[#FBCFE8]",
    dot: "bg-[#DB2777]",
  },
  revision: {
    label: "Revision",
    className: "bg-[#FFF7ED] text-[#C2410C] border-[#FED7AA]",
    dot: "bg-[#EA580C]",
  },
  completed: {
    label: "Completed",
    className: "bg-[#DCFCE7] text-[#065F46] border-[#BBF7D0]",
    dot: "bg-[#10B981]",
  },
  disputed: {
    label: "Disputed",
    className: "bg-[#FEF3C7] text-[#92400E] border-[#FDE68A]",
    dot: "bg-[#D97706]",
  },
  cancelled: {
    label: "Cancelled",
    className: "bg-[#FEE2E2] text-[#991B1B] border-[#FECACA]",
    dot: "bg-[#EF4444]",
  },
};

export function StatusBadge({
  status,
  className,
}: {
  status: AssignmentStatus;
  className?: string;
}) {
  const s = statusMap[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold tracking-tight",
        s.className,
        className
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", s.dot)} />
      {s.label}
    </span>
  );
}

// Backward-compatible alias
export type OrderStatus = AssignmentStatus;
