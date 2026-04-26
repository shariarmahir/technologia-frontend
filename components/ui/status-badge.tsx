import { cn } from "@/lib/utils";

export type OrderStatus =
  | "requested"
  | "assigned"
  | "in_progress"
  | "pending_review"
  | "submitted"
  | "completed"
  | "cancelled";

const statusMap: Record<
  OrderStatus,
  { label: string; className: string; dot: string }
> = {
  requested: {
    label: "Requested",
    className: "bg-[#F1F0FB] text-[#2E21A3] border-[#D6D1F5]",
    dot: "bg-[#2E21A3]",
  },
  assigned: {
    label: "Assigned",
    className: "bg-[#EEF4FF] text-[#1E40AF] border-[#C7D7FE]",
    dot: "bg-[#1E40AF]",
  },
  in_progress: {
    label: "In Progress",
    className: "bg-[#DBEAFE] text-[#1D4ED8] border-[#BFDBFE]",
    dot: "bg-[#3B82F6]",
  },
  pending_review: {
    label: "Pending Review",
    className: "bg-[#FCE7F3] text-[#9D174D] border-[#FBCFE8]",
    dot: "bg-[#DB2777]",
  },
  submitted: {
    label: "Submitted",
    className: "bg-[#E0F2FE] text-[#075985] border-[#BAE6FD]",
    dot: "bg-[#0284C7]",
  },
  completed: {
    label: "Completed",
    className: "bg-[#DCFCE7] text-[#065F46] border-[#BBF7D0]",
    dot: "bg-[#10B981]",
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
  status: OrderStatus;
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
