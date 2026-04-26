"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Swords,
  Plus,
  Trophy,
  Clock,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Medal,
  Flame,
} from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { labChallenges } from "@/lib/mock-data";

const statusStyle: Record<string, { label: string; chip: string; dot: string }> = {
  open: { label: "Open", chip: "border-[#BAE6FD] bg-[#E0F2FE] text-[#075985]", dot: "bg-[#0EA5E9]" },
  active: { label: "Active", chip: "border-[#BAE6FD] bg-[#E0F2FE] text-[#0369A1]", dot: "bg-[#0EA5E9] animate-pulse" },
  judging: { label: "Judging", chip: "border-[#FBCFE8] bg-[#FCE7F3] text-[#9D174D]", dot: "bg-[#DB2777]" },
  completed: { label: "Completed", chip: "border-[#BBF7D0] bg-[#DCFCE7] text-[#047857]", dot: "bg-[#10B981]" },
};

export default function ChallengesPage() {
  const [showNew, setShowNew] = useState(false);

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Lab portal · challenges"
        title="University challenges"
        description="Issue or accept university-to-university challenges. Set the rules, we run the bracket."
        actions={
          <Button variant="primary" size="sm" onClick={() => setShowNew(true)}>
            <Plus className="h-4 w-4" /> Issue a challenge
          </Button>
        }
      />

      {/* How it works strip */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {[
          {
            icon: Swords,
            step: "01",
            title: "Issue a challenge",
            body: "Pick a university lab, set the topic, deadline, and judging rubric.",
          },
          {
            icon: Flame,
            step: "02",
            title: "Both labs submit",
            body: "Each lab submits their solution or prototype before the deadline.",
          },
          {
            icon: Trophy,
            step: "03",
            title: "Get judged & earn XP",
            body: "technoLOgia judges the rubric. The winner earns XP and a public record.",
          },
        ].map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.step}
              className="flex items-start gap-3 rounded-2xl border border-[color:var(--color-border)] bg-white p-4"
            >
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[color:var(--color-accent-soft)] text-[color:var(--color-accent)]">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[color:var(--color-text-secondary)]">
                  Step {s.step}
                </span>
                <p className="mt-0.5 font-display text-sm font-semibold text-[color:var(--color-primary-dark)]">
                  {s.title}
                </p>
                <p className="mt-0.5 text-xs leading-relaxed text-[color:var(--color-text-secondary)]">
                  {s.body}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* New challenge form (inline) */}
      {showNew && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-[20px] border border-[#0EA5E9]/40 bg-[color:var(--color-accent-soft)] p-6"
        >
          <div className="mb-5 flex items-center justify-between">
            <h3 className="font-display text-lg font-semibold text-[color:var(--color-primary-dark)]">
              New challenge
            </h3>
            <button
              onClick={() => setShowNew(false)}
              className="text-[color:var(--color-text-secondary)] hover:text-[color:var(--color-primary)]"
            >
              <XCircle className="h-5 w-5" />
            </button>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField label="Challenge title" placeholder="Smart Campus IoT Showdown" />
            <FormField label="Target university lab" placeholder="BUET EEE Project Lab" />
            <FormField label="Deadline" type="date" placeholder="" />
            <FormField label="XP prize" placeholder="500" type="number" />
            <div className="sm:col-span-2">
              <label className="block">
                <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[color:var(--color-text-secondary)]">
                  Judging rubric
                </span>
                <textarea
                  rows={3}
                  placeholder="Technical depth, working demo, documentation quality…"
                  className="mt-1.5 w-full rounded-xl border border-[color:var(--color-border)] bg-white px-3 py-2.5 text-sm outline-none transition focus:border-[color:var(--color-accent)] focus:shadow-[0_0_0_4px_rgba(14,165,233,0.15)] resize-none"
                />
              </label>
            </div>
          </div>
          <div className="mt-4 flex gap-2">
            <Button variant="sky" size="sm" glow>
              Send challenge <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" onClick={() => setShowNew(false)}>
              Cancel
            </Button>
          </div>
        </motion.div>
      )}

      {/* Challenge cards */}
      <div className="space-y-4">
        <h3 className="font-display text-base font-semibold text-[color:var(--color-text-primary)]">
          All challenges
        </h3>
        {labChallenges.map((c, i) => {
          const s = statusStyle[c.status];
          const isOwn = c.challenger === "UAP Embedded Systems Lab";
          return (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className={`relative overflow-hidden rounded-2xl border p-5 transition hover:-translate-y-0.5 ${
                c.status === "active"
                  ? "border-[#BAE6FD] bg-white shadow-[0_14px_40px_-18px_rgba(14,165,233,0.35)]"
                  : c.status === "completed"
                  ? "border-[color:var(--color-border)] bg-[color:var(--color-surface)]"
                  : "border-[color:var(--color-border)] bg-white hover:border-[#BAE6FD] hover:shadow-[0_10px_28px_-16px_rgba(14,165,233,0.4)]"
              }`}
            >
              {c.status === "active" && (
                <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#0EA5E9]/15 blur-3xl" />
              )}

              <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-3">
                  <span
                    className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl ${
                      c.status === "active"
                        ? "bg-[#E0F2FE] text-[#0369A1]"
                        : c.status === "completed"
                        ? "bg-[#DCFCE7] text-[#047857]"
                        : "bg-[color:var(--color-accent-soft)] text-[color:var(--color-accent)]"
                    }`}
                  >
                    <Swords className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${s.chip}`}
                      >
                        <span className={`h-1 w-1 rounded-full ${s.dot}`} />
                        {s.label}
                      </span>
                      {isOwn && (
                        <span className="rounded-full border border-[#BAE6FD] bg-[#E0F2FE] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[#075985]">
                          Challenger
                        </span>
                      )}
                    </div>
                    <p className="mt-1.5 font-display text-base font-semibold text-[color:var(--color-primary-dark)]">
                      {c.title}
                    </p>
                    <p className="mt-0.5 text-xs text-[color:var(--color-text-secondary)]">
                      {c.challenger} vs. {c.challenged}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 sm:flex-col sm:items-end sm:gap-2">
                  <div className="flex items-center gap-1.5 text-xs text-[color:var(--color-text-secondary)]">
                    <Clock className="h-3.5 w-3.5" />
                    <span>Due {c.deadline}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[color:var(--color-text-secondary)]">
                    <Medal className="h-3.5 w-3.5" />
                    <span>+{c.xpPrize} XP</span>
                  </div>
                </div>
              </div>

              <div className="relative mt-4 rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-3 text-xs">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[color:var(--color-text-secondary)]">
                  Rubric
                </span>
                <p className="mt-0.5 text-[color:var(--color-text-primary)]">{c.rubric}</p>
              </div>

              {/* Submission status */}
              {c.status !== "open" && (
                <div className="relative mt-3 grid grid-cols-2 gap-2">
                  <SubmissionSlot
                    label={c.challenger}
                    submitted={c.submissions.challenger}
                    isOwn={c.challenger === "UAP Embedded Systems Lab"}
                  />
                  <SubmissionSlot
                    label={c.challenged}
                    submitted={c.submissions.challenged}
                    isOwn={c.challenged === "UAP Embedded Systems Lab"}
                  />
                </div>
              )}

              {c.winner && (
                <div className="relative mt-3 flex items-center gap-2 rounded-xl border border-[#BBF7D0] bg-[#DCFCE7] px-3 py-2">
                  <Trophy className="h-4 w-4 text-[#047857]" />
                  <span className="text-xs font-semibold text-[#047857]">
                    Winner: {c.winner}
                  </span>
                </div>
              )}

              {c.status === "active" && !c.submissions.challenger && isOwn && (
                <div className="relative mt-3">
                  <Button variant="sky" size="sm" glow className="w-full">
                    Submit your solution <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function SubmissionSlot({
  label,
  submitted,
  isOwn,
}: {
  label: string;
  submitted: boolean;
  isOwn: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-2 rounded-xl border p-2.5 text-xs ${
        submitted
          ? "border-[#BBF7D0] bg-[#DCFCE7] text-[#047857]"
          : "border-[color:var(--color-border)] bg-white text-[color:var(--color-text-secondary)]"
      }`}
    >
      {submitted ? (
        <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[#10B981]" />
      ) : (
        <Clock className="h-4 w-4 flex-shrink-0" />
      )}
      <span className="truncate font-semibold">
        {label.split(" ").slice(-2).join(" ")}
        {isOwn && " (you)"}
      </span>
    </div>
  );
}

function FormField({
  label,
  ...rest
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[color:var(--color-text-secondary)]">
        {label}
      </span>
      <input
        {...rest}
        className="mt-1.5 w-full rounded-xl border border-[color:var(--color-border)] bg-white px-3 py-2.5 text-sm outline-none transition focus:border-[color:var(--color-accent)] focus:shadow-[0_0_0_4px_rgba(14,165,233,0.15)]"
      />
    </label>
  );
}
