"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  FlaskConical,
  CheckCircle2,
  Clock,
  Plus,
  Download,
  Users,
  CalendarDays,
} from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { labWorkshops } from "@/lib/mock-data";

type Filter = "all" | "scheduled" | "completed";

const statusMap = {
  scheduled: {
    label: "Scheduled",
    dot: "bg-[#0EA5E9]",
    chip: "border-[#BAE6FD] bg-[#E0F2FE] text-[#075985]",
  },
  ongoing: {
    label: "Ongoing",
    dot: "bg-[#0EA5E9] animate-pulse",
    chip: "border-[#BAE6FD] bg-[#E0F2FE] text-[#0369A1]",
  },
  completed: {
    label: "Completed",
    dot: "bg-[#10B981]",
    chip: "border-[#BBF7D0] bg-[#DCFCE7] text-[#047857]",
  },
  cancelled: {
    label: "Cancelled",
    dot: "bg-[#EF4444]",
    chip: "border-[#FECACA] bg-[#FEE2E2] text-[#991B1B]",
  },
};

export default function WorkshopsPage() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered =
    filter === "all"
      ? labWorkshops
      : labWorkshops.filter((w) =>
          filter === "scheduled"
            ? w.status === "scheduled" || w.status === "ongoing"
            : w.status === "completed"
        );

  const done = labWorkshops.filter((w) => w.status === "completed").length;
  const total = labWorkshops.length;
  const pct = Math.round((done / total) * 100);

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Lab portal · workshops"
        title="Workshop tracker"
        description="Every session logged — topic, attendance, materials, and progress."
        actions={
          <Button variant="primary" size="sm">
            <Plus className="h-4 w-4" /> Log new session
          </Button>
        }
      />

      {/* Semester progress */}
      <Card className="overflow-hidden">
        <div className="relative bg-[linear-gradient(135deg,#0A0930_0%,#1B1464_55%,#0369A1_120%)] p-6 text-white">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#0EA5E9]/35 blur-3xl" />
          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#7DD3FC]">
                Semester progress
              </p>
              <p className="mt-1 font-display text-2xl font-semibold">
                {done} of {total} sessions completed
              </p>
              <p className="mt-1 text-sm text-white/70">
                12-week semester roadmap · Spring 2026
              </p>
            </div>
            <div className="flex gap-6 text-center">
              <div>
                <p className="font-display text-2xl font-semibold text-[#7DD3FC]">
                  {labWorkshops.filter((w) => w.attendance > 0).reduce((s, w) => s + w.attendance, 0)}
                </p>
                <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-white/55">
                  Total attendance
                </p>
              </div>
              <div>
                <p className="font-display text-2xl font-semibold text-[#7DD3FC]">
                  {labWorkshops.filter((w) => w.materials).length}
                </p>
                <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-white/55">
                  With materials
                </p>
              </div>
            </div>
          </div>
          <div className="relative mt-5">
            <div className="flex justify-between text-[11px] text-white/65">
              <span>Week progress</span>
              <span className="font-mono text-white">{pct}%</span>
            </div>
            <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${pct}%` }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="h-full rounded-full bg-[linear-gradient(90deg,#38BDF8_0%,#0EA5E9_100%)] shadow-[0_0_18px_rgba(56,189,248,0.7)]"
              />
            </div>
          </div>
        </div>
      </Card>

      {/* Filter tabs */}
      <div className="flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-1 w-fit">
        {(["all", "scheduled", "completed"] as Filter[]).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold transition capitalize ${
              filter === f
                ? "bg-white text-[color:var(--color-primary-dark)] shadow-[0_2px_8px_rgba(15,11,61,0.1)]"
                : "text-[color:var(--color-text-secondary)] hover:text-[color:var(--color-primary)]"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Workshop cards grid */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {filtered.map((w, i) => {
          const s = statusMap[w.status];
          const attendPct = w.attendance > 0 ? Math.round((w.attendance / w.capacity) * 100) : 0;
          return (
            <motion.div
              key={w.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group flex flex-col gap-4 rounded-2xl border border-[color:var(--color-border)] bg-white p-5 transition hover:-translate-y-0.5 hover:border-[#BAE6FD] hover:shadow-[0_14px_36px_-18px_rgba(14,165,233,0.4)]"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[color:var(--color-accent-soft)] text-[color:var(--color-accent)] transition group-hover:bg-[color:var(--color-accent)] group-hover:text-white">
                    <FlaskConical className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[color:var(--color-text-secondary)]">
                        Session {w.session}/{w.totalSessions}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${s.chip}`}
                      >
                        <span className={`h-1 w-1 rounded-full ${s.dot}`} />
                        {s.label}
                      </span>
                    </div>
                    <p className="mt-1 font-display text-[15px] font-semibold leading-snug text-[color:var(--color-primary-dark)]">
                      {w.topic}
                    </p>
                  </div>
                </div>
                {w.status === "completed" && (
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-[#10B981]" />
                )}
                {w.status === "scheduled" && (
                  <Clock className="h-5 w-5 flex-shrink-0 text-[#0EA5E9]" />
                )}
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center gap-1.5 text-[color:var(--color-text-secondary)]">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {w.date} · {w.time}
                </div>
                <div className="flex items-center gap-1.5 text-[color:var(--color-text-secondary)]">
                  <Users className="h-3.5 w-3.5" />
                  {w.attendance > 0 ? `${w.attendance}/${w.capacity} attended` : `Capacity: ${w.capacity}`}
                </div>
              </div>

              {w.attendance > 0 && (
                <div>
                  <div className="flex justify-between text-[10px] text-[color:var(--color-text-secondary)]">
                    <span>Attendance rate</span>
                    <span className="font-mono">{attendPct}%</span>
                  </div>
                  <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-[color:var(--color-surface)]">
                    <div
                      className="h-full rounded-full bg-[linear-gradient(90deg,#1B1464_0%,#0EA5E9_100%)]"
                      style={{ width: `${attendPct}%` }}
                    />
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {w.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-2 py-0.5 font-mono text-[10px] text-[color:var(--color-text-secondary)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {w.materials && (
                  <button className="flex items-center gap-1 rounded-full border border-[#BAE6FD] bg-[color:var(--color-accent-soft)] px-2.5 py-1 text-[11px] font-semibold text-[#075985] transition hover:bg-[#BAE6FD]">
                    <Download className="h-3 w-3" /> Materials
                  </button>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
