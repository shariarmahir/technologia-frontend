"use client";

import { useState } from "react";
import { MoreHorizontal, Plus, Filter } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { GlassButton } from "@/components/ui/glass-button";
import { StatusBadge, type OrderStatus } from "@/components/ui/status-badge";
import { orders } from "@/lib/mock-data";
import { formatCurrency, cn } from "@/lib/utils";

const columns: { status: OrderStatus; label: string; accent: string }[] = [
  { status: "requested", label: "Requested", accent: "bg-[#2E21A3]" },
  { status: "assigned", label: "Assigned", accent: "bg-[#1E40AF]" },
  { status: "in_progress", label: "In Progress", accent: "bg-[#F59E0B]" },
  { status: "pending_review", label: "Pending Review", accent: "bg-[#DB2777]" },
  { status: "submitted", label: "Submitted", accent: "bg-[#0284C7]" },
  { status: "completed", label: "Completed", accent: "bg-[#10B981]" },
];

export default function OrdersPipeline() {
  const [view, setView] = useState<"kanban" | "table">("kanban");

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Work pipeline"
        title="Orders pipeline"
        description="Drag to assign, approve, or mark complete. The pipeline is the source of truth."
        actions={
          <>
            <div className="flex rounded-full border border-[color:var(--color-border)] bg-white p-1 text-xs">
              {(["kanban", "table"] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  className={cn(
                    "rounded-full px-3 py-1.5 font-semibold capitalize",
                    view === v
                      ? "bg-[color:var(--color-primary)] text-white"
                      : "text-[color:var(--color-text-secondary)]"
                  )}
                >
                  {v}
                </button>
              ))}
            </div>
            <button className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--color-border)] bg-white px-3 py-2 text-xs font-semibold text-[color:var(--color-primary)] transition hover:bg-[color:var(--color-surface)]">
              <Filter className="h-3.5 w-3.5" /> Filters
            </button>
            <GlassButton variant="primary" size="sm">
              <Plus className="h-4 w-4" /> New order
            </GlassButton>
          </>
        }
      />

      {view === "kanban" ? (
        <div className="overflow-x-auto pb-4">
          <div className="flex min-w-max gap-4">
            {columns.map((col) => {
              const items = orders.filter((o) => o.status === col.status);
              return (
                <div
                  key={col.status}
                  className="flex w-[300px] flex-shrink-0 flex-col rounded-2xl border border-[color:var(--color-border)] bg-white/60 p-3 backdrop-blur"
                >
                  <div className="flex items-center justify-between px-1 pb-3">
                    <div className="flex items-center gap-2">
                      <span
                        className={cn("h-2 w-2 rounded-full", col.accent)}
                      />
                      <p className="font-display text-sm font-semibold text-[color:var(--color-primary-dark)]">
                        {col.label}
                      </p>
                      <span className="rounded-full bg-[color:var(--color-surface)] px-1.5 text-[10px] font-semibold text-[color:var(--color-text-secondary)]">
                        {items.length}
                      </span>
                    </div>
                    <button className="rounded-full p-1 text-[color:var(--color-text-secondary)] hover:bg-[color:var(--color-surface)]">
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="space-y-2.5">
                    {items.map((o) => (
                      <div
                        key={o.id}
                        className="group cursor-grab rounded-xl border border-[color:var(--color-border)] bg-white p-3.5 shadow-[0_2px_10px_rgba(15,11,61,0.04)] transition hover:-translate-y-0.5 hover:border-[color:var(--color-accent)]/40 hover:shadow-[0_10px_30px_-10px_rgba(124,58,237,0.25)]"
                      >
                        <div className="flex items-start justify-between">
                          <span className="font-mono text-[10px] uppercase tracking-wider text-[color:var(--color-text-secondary)]">
                            {o.id} · {o.category}
                          </span>
                          {o.verified && (
                            <span className="rounded-full bg-[#DCFCE7] px-1.5 py-0.5 text-[9px] font-semibold text-[#065F46]">
                              ✓ Verified
                            </span>
                          )}
                        </div>
                        <p className="mt-1.5 text-sm font-semibold text-[color:var(--color-primary-dark)]">
                          {o.title}
                        </p>
                        <p className="mt-1 text-xs text-[color:var(--color-text-secondary)]">
                          {o.client}
                        </p>

                        <div className="mt-3 flex items-center justify-between border-t border-[color:var(--color-border)]/60 pt-2.5">
                          <span className="text-[11px] text-[color:var(--color-text-secondary)]">
                            {o.assignedTo ? (
                              <span className="inline-flex items-center gap-1.5">
                                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-[#1B1464] to-[#7C3AED] text-[9px] font-bold text-white">
                                  {o.assignedTo[0]}
                                </span>
                                {o.assignedTo}
                              </span>
                            ) : (
                              <span className="italic">Unassigned</span>
                            )}
                          </span>
                          <span className="font-mono text-xs font-semibold text-[color:var(--color-primary)]">
                            {formatCurrency(o.budget)}
                          </span>
                        </div>
                      </div>
                    ))}
                    {items.length === 0 && (
                      <p className="rounded-xl border border-dashed border-[color:var(--color-border)] py-6 text-center text-xs text-[color:var(--color-text-secondary)]">
                        Empty
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[color:var(--color-border)] text-left font-mono text-[10px] uppercase tracking-wider text-[color:var(--color-text-secondary)]">
                <th className="px-6 py-3">Order</th>
                <th className="px-3 py-3">Client</th>
                <th className="px-3 py-3">Category</th>
                <th className="px-3 py-3">Assigned</th>
                <th className="px-3 py-3">Budget</th>
                <th className="px-3 py-3">Deadline</th>
                <th className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr
                  key={o.id}
                  className="border-b border-[color:var(--color-border)]/60 last:border-0 hover:bg-[color:var(--color-surface)]"
                >
                  <td className="px-6 py-3.5">
                    <p className="font-mono text-[11px] text-[color:var(--color-text-secondary)]">
                      {o.id}
                    </p>
                    <p className="mt-0.5 font-semibold">{o.title}</p>
                  </td>
                  <td className="px-3 py-3.5">{o.client}</td>
                  <td className="px-3 py-3.5 capitalize text-[color:var(--color-text-secondary)]">
                    {o.category}
                  </td>
                  <td className="px-3 py-3.5 text-[color:var(--color-text-secondary)]">
                    {o.assignedTo ?? "—"}
                  </td>
                  <td className="px-3 py-3.5 font-mono">
                    {formatCurrency(o.budget)}
                  </td>
                  <td className="px-3 py-3.5 text-[color:var(--color-text-secondary)]">
                    {o.deadline}
                  </td>
                  <td className="px-6 py-3.5">
                    <StatusBadge status={o.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
