"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MoreHorizontal,
  Plus,
  Filter,
  Users,
  CheckCircle2,
  Globe,
  X,
  ChevronRight,
} from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { StatusBadge, type AssignmentStatus } from "@/components/ui/status-badge";
import { assignments, workers } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const COLUMNS: { status: AssignmentStatus; label: string; dot: string }[] = [
  { status: "posted", label: "Posted", dot: "bg-[#94A3B8]" },
  { status: "bidding", label: "Bidding", dot: "bg-[#F59E0B]" },
  { status: "matched", label: "Matched", dot: "bg-[#3B82F6]" },
  { status: "in_progress", label: "In Progress", dot: "bg-[#003A6E]" },
  { status: "under_review", label: "Under Review", dot: "bg-[#7C3AED]" },
  { status: "completed", label: "Completed", dot: "bg-[#10B981]" },
];

function MatchWorkerModal({
  assignmentId,
  title,
  subjectArea,
  onClose,
}: {
  assignmentId: string;
  title: string;
  subjectArea: string;
  onClose: () => void;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const [matched, setMatched] = useState(false);

  const eligible = workers.filter((w) => w.isVerified);

  if (matched) {
    const worker = workers.find((w) => w.id === selected);
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-[#001A3E]/60 backdrop-blur-sm" onClick={onClose} />
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative w-full max-w-sm rounded-2xl bg-white p-8 text-center shadow-2xl"
        >
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#DBEAFE]">
            <CheckCircle2 className="h-8 w-8 text-[#3B82F6]" />
          </div>
          <h3 className="font-display text-lg font-bold text-[#003A6E]">Worker matched!</h3>
          <p className="mt-2 text-sm text-[color:var(--color-text-secondary)]">
            <span className="font-semibold text-[#003A6E]">{worker?.name}</span> has been assigned to{" "}
            <span className="font-semibold">{assignmentId}</span>. Status updated to{" "}
            <span className="font-semibold text-[#3B82F6]">matched</span>.
          </p>
          <Button variant="primary" size="sm" className="mt-5 w-full" onClick={onClose}>
            Done
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#001A3E]/60 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="relative w-full max-w-lg rounded-2xl bg-white shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-[#E5E7EB] p-5">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-[color:var(--color-text-secondary)]">
              Match worker · {assignmentId}
            </p>
            <h3 className="mt-0.5 font-display text-base font-bold text-[#003A6E] leading-snug">
              {title}
            </h3>
            <p className="text-xs text-[color:var(--color-text-secondary)]">
              Subject area: <span className="font-semibold text-[#003A6E]">{subjectArea}</span>
            </p>
          </div>
          <button onClick={onClose} className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full hover:bg-[#F1F5F9]">
            <X className="h-4 w-4 text-[color:var(--color-text-secondary)]" />
          </button>
        </div>
        <div className="max-h-80 overflow-y-auto p-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[color:var(--color-text-secondary)]">
            Verified workers
          </p>
          <div className="space-y-2">
            {eligible.map((w) => (
              <button
                key={w.id}
                onClick={() => setSelected(w.id)}
                className={cn(
                  "w-full rounded-xl border p-3.5 text-left transition",
                  selected === w.id
                    ? "border-[#003A6E] bg-[#EFF6FF]"
                    : "border-[#E5E7EB] bg-white hover:border-[#00539C]/30 hover:bg-[#F8FAFC]"
                )}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#003A6E,#00539C)] font-semibold text-sm text-white">
                      {w.name[0]}
                    </span>
                    <div>
                      <p className="font-semibold text-sm text-[#003A6E]">{w.name}</p>
                      <p className="text-xs text-[color:var(--color-text-secondary)]">
                        {w.department} · {w.university} · {w.rating}★
                      </p>
                    </div>
                  </div>
                  <div className="text-right text-xs text-[color:var(--color-text-secondary)]">
                    <p className="font-semibold text-[#003A6E]">{w.activeAssignments} active</p>
                    <p>৳{(w.totalEarned / 1000).toFixed(0)}k earned</p>
                  </div>
                </div>
                <div className="mt-2 flex flex-wrap gap-1">
                  {w.skills.slice(0, 3).map((s) => (
                    <span key={s} className="rounded-full bg-[#F1F5F9] px-2 py-0.5 text-[10px] text-[color:var(--color-text-secondary)]">
                      {s}
                    </span>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>
        <div className="flex gap-2 border-t border-[#E5E7EB] p-5">
          <Button variant="outline" size="sm" className="flex-1" onClick={onClose}>Cancel</Button>
          <Button
            variant="primary"
            size="sm"
            className="flex-1"
            disabled={!selected}
            onClick={() => selected && setMatched(true)}
          >
            Confirm match <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </motion.div>
    </div>
  );
}

export default function AssignmentsPipeline() {
  const [view, setView] = useState<"kanban" | "table">("kanban");
  const [matchTarget, setMatchTarget] = useState<{ id: string; title: string; subject: string } | null>(null);

  return (
    <>
      {matchTarget && (
        <MatchWorkerModal
          assignmentId={matchTarget.id}
          title={matchTarget.title}
          subjectArea={matchTarget.subject}
          onClose={() => setMatchTarget(null)}
        />
      )}

      <div className="space-y-6">
        <PageHeader
          eyebrow="Work pipeline"
          title="Assignment pipeline"
          description="Review bids, match workers, track progress, and approve completed work."
          actions={
            <>
              <div className="flex rounded-full border border-[#E5E7EB] bg-white p-1 text-xs">
                {(["kanban", "table"] as const).map((v) => (
                  <button
                    key={v}
                    onClick={() => setView(v)}
                    className={cn(
                      "rounded-full px-3 py-1.5 font-semibold capitalize transition",
                      view === v
                        ? "bg-[#003A6E] text-white"
                        : "text-[color:var(--color-text-secondary)] hover:text-[#003A6E]"
                    )}
                  >
                    {v}
                  </button>
                ))}
              </div>
              <button className="inline-flex items-center gap-1.5 rounded-full border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[color:var(--color-primary)] transition hover:border-[#00539C]/30">
                <Filter className="h-3.5 w-3.5" /> Filter
              </button>
              <Button variant="primary" size="sm">
                <Plus className="h-4 w-4" /> New assignment
              </Button>
            </>
          }
        />

        {view === "kanban" ? (
          <div className="overflow-x-auto pb-4">
            <div className="flex min-w-max gap-4">
              {COLUMNS.map((col) => {
                const items = assignments.filter((a) => a.status === col.status);
                return (
                  <div
                    key={col.status}
                    className="flex w-[290px] flex-shrink-0 flex-col rounded-2xl border border-[#E5E7EB] bg-white/60 p-3 backdrop-blur"
                  >
                    <div className="flex items-center justify-between px-1 pb-3">
                      <div className="flex items-center gap-2">
                        <span className={cn("h-2 w-2 rounded-full", col.dot)} />
                        <p className="font-display text-sm font-semibold text-[#003A6E]">{col.label}</p>
                        <span className="rounded-full bg-[#F1F5F9] px-1.5 text-[10px] font-semibold text-[color:var(--color-text-secondary)]">
                          {items.length}
                        </span>
                      </div>
                      <button className="rounded-full p-1 text-[color:var(--color-text-secondary)] hover:bg-[#F1F5F9]">
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="space-y-2.5">
                      {items.map((a) => (
                        <motion.div
                          key={a.id}
                          layout
                          className="cursor-default rounded-xl border border-[#E5E7EB] bg-white p-3.5 shadow-[0_2px_10px_rgba(0,58,110,0.04)] transition hover:-translate-y-0.5 hover:border-[#00539C]/30 hover:shadow-[0_10px_30px_-8px_rgba(0,83,156,0.14)]"
                        >
                          <div className="flex items-start justify-between gap-1">
                            <span className="font-mono text-[10px] uppercase tracking-wider text-[color:var(--color-text-secondary)]">
                              {a.id} · {a.subjectArea}
                            </span>
                            {a.verified && (
                              <span className="rounded-full bg-[#DCFCE7] px-1.5 py-0.5 text-[9px] font-semibold text-[#065F46] flex-shrink-0">
                                ✓
                              </span>
                            )}
                          </div>
                          <p className="mt-1.5 text-sm font-semibold leading-snug text-[#003A6E]">
                            {a.title}
                          </p>
                          <p className="mt-1 flex items-center gap-1 text-xs text-[color:var(--color-text-secondary)]">
                            <Globe className="h-3 w-3" /> {a.clientCountry} · {a.client}
                          </p>

                          <div className="mt-3 flex items-center justify-between border-t border-[#F1F5F9] pt-2.5">
                            <span className="font-mono text-xs font-semibold text-[#003A6E]">
                              ${a.budget}
                            </span>
                            {a.worker ? (
                              <span className="inline-flex items-center gap-1 text-[11px] text-[color:var(--color-text-secondary)]">
                                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[linear-gradient(135deg,#003A6E,#00539C)] text-[9px] font-bold text-white">
                                  {a.worker[0]}
                                </span>
                                {a.worker}
                              </span>
                            ) : (
                              <button
                                onClick={() => setMatchTarget({ id: a.id, title: a.title, subject: a.subjectArea })}
                                className="inline-flex items-center gap-1 rounded-full bg-[#EFF6FF] px-2 py-0.5 text-[10px] font-semibold text-[#003A6E] transition hover:bg-[#DBEAFE]"
                              >
                                <Users className="h-3 w-3" /> Match
                              </button>
                            )}
                          </div>
                        </motion.div>
                      ))}
                      {items.length === 0 && (
                        <p className="rounded-xl border border-dashed border-[#E5E7EB] py-6 text-center text-xs text-[color:var(--color-text-secondary)]">
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
          <div className="overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E5E7EB] text-left font-mono text-[10px] uppercase tracking-wider text-[color:var(--color-text-secondary)]">
                  <th className="px-6 py-3">Assignment</th>
                  <th className="px-3 py-3">Client</th>
                  <th className="px-3 py-3">Subject</th>
                  <th className="px-3 py-3">Worker</th>
                  <th className="px-3 py-3">Budget</th>
                  <th className="px-3 py-3">Deadline</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-3 py-3" />
                </tr>
              </thead>
              <tbody>
                {assignments.map((a) => (
                  <tr
                    key={a.id}
                    className="border-b border-[#F1F5F9] last:border-0 transition hover:bg-[#F8FAFC]"
                  >
                    <td className="px-6 py-3.5">
                      <p className="font-mono text-[11px] text-[color:var(--color-text-secondary)]">{a.id}</p>
                      <p className="mt-0.5 font-semibold text-[#003A6E]">{a.title}</p>
                    </td>
                    <td className="px-3 py-3.5">
                      <p className="text-[color:var(--color-text-primary)]">{a.client}</p>
                      <p className="text-xs text-[color:var(--color-text-secondary)]">{a.clientCountry}</p>
                    </td>
                    <td className="px-3 py-3.5">
                      <span className="rounded-full border border-[#BAE6FD]/60 bg-[#EFF6FF] px-2 py-0.5 font-mono text-[10px] font-semibold text-[#003A6E]">
                        {a.subjectArea}
                      </span>
                    </td>
                    <td className="px-3 py-3.5">
                      {a.worker ? (
                        <span className="text-[color:var(--color-text-primary)]">{a.worker}</span>
                      ) : (
                        <button
                          onClick={() => setMatchTarget({ id: a.id, title: a.title, subject: a.subjectArea })}
                          className="inline-flex items-center gap-1 rounded-full bg-[#EFF6FF] px-2.5 py-1 text-[11px] font-semibold text-[#003A6E] transition hover:bg-[#DBEAFE]"
                        >
                          <Users className="h-3 w-3" /> Match worker
                        </button>
                      )}
                    </td>
                    <td className="px-3 py-3.5 font-mono text-xs font-semibold text-[#003A6E]">
                      ${a.budget} {a.currency}
                    </td>
                    <td className="px-3 py-3.5 text-xs text-[color:var(--color-text-secondary)]">
                      {a.deadline}
                    </td>
                    <td className="px-6 py-3.5">
                      <StatusBadge status={a.status} />
                    </td>
                    <td className="px-3 py-3.5">
                      <button className="rounded-full p-1 text-[color:var(--color-text-secondary)] hover:bg-[#F1F5F9]">
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}
