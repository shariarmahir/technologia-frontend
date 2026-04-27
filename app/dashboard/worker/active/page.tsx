"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ClipboardList,
  UploadCloud,
  Clock,
  Link as LinkIcon,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Search,
} from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/status-badge";
import { assignments } from "@/lib/mock-data";

const myActive = assignments.filter(
  (a) =>
    a.worker === "Nafis H." &&
    ["in_progress", "under_review", "matched", "revision"].includes(a.status)
);

const STAGE_MAP = {
  matched: { step: 1, label: "Matched — start work", color: "#3B82F6" },
  in_progress: { step: 2, label: "In progress", color: "#003A6E" },
  under_review: { step: 3, label: "Under review", color: "#7C3AED" },
  revision: { step: 2, label: "Revision requested", color: "#F59E0B" },
};

function UploadSection({ assignmentId }: { assignmentId: string }) {
  const [driveLink, setDriveLink] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex items-center gap-3 rounded-xl border border-[#BBF7D0] bg-[#F0FDF4] p-4">
        <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-[#10B981]" />
        <div>
          <p className="text-sm font-semibold text-[#065F46]">Work submitted for review</p>
          <p className="text-xs text-[#047857]">The admin will review your submission and notify you.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-[#FFD662]/40 bg-[#FFFBEB]/60 px-4 py-6 text-center transition hover:border-[#FFD662] hover:bg-[#FFFBEB]">
        <UploadCloud className="h-6 w-6 text-[#FFD662]" />
        <p className="mt-2 text-sm font-semibold text-[#003A6E]">Upload your completed work</p>
        <p className="text-[11px] text-[color:var(--color-text-secondary)]">PDF, DOCX, ZIP up to 100 MB</p>
        <input type="file" className="hidden" />
      </label>
      <div className="relative">
        <LinkIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[color:var(--color-text-secondary)]" />
        <input
          value={driveLink}
          onChange={(e) => setDriveLink(e.target.value)}
          placeholder="Or paste Google Drive / Docs link"
          className="w-full rounded-xl border border-[#00539C]/20 bg-white py-2.5 pl-9 pr-3 text-sm outline-none transition placeholder:text-[#94A3B8] focus:border-[#00539C] focus:shadow-[0_0_0_4px_rgba(0,83,156,0.12)]"
        />
      </div>
      <Button
        variant="sky"
        size="sm"
        glow
        className="w-full"
        onClick={() => setSubmitted(true)}
      >
        Submit work for review
      </Button>
    </div>
  );
}

export default function ActiveWork() {
  const [openId, setOpenId] = useState<string | null>(myActive[0]?.id ?? null);

  return (
    <div className="space-y-7">
      <PageHeader
        eyebrow="Active work"
        title="Your active assignments."
        description="Submit completed work, view remarks, and track review status."
      />

      {myActive.length === 0 ? (
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-dashed border-[#E5E7EB] py-20 text-center">
          <ClipboardList className="h-12 w-12 text-[color:var(--color-text-secondary)]" />
          <div>
            <p className="font-display font-semibold text-[color:var(--color-text-primary)]">No active assignments</p>
            <p className="mt-1 text-sm text-[color:var(--color-text-secondary)]">
              Browse available jobs and place a bid to get started.
            </p>
          </div>
          <Button href="/dashboard/worker/browse" variant="sky" size="sm" glow>
            <Search className="h-4 w-4" /> Browse assignments
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_1.3fr]">
          {/* Assignment list */}
          <div className="space-y-3">
            {myActive.map((a) => {
              const stage = STAGE_MAP[a.status as keyof typeof STAGE_MAP] ?? { step: 1, label: a.status, color: "#6B7280" };
              const isOpen = openId === a.id;
              return (
                <motion.div
                  key={a.id}
                  layout
                  onClick={() => setOpenId(isOpen ? null : a.id)}
                  className={`cursor-pointer rounded-2xl border p-4 transition ${
                    isOpen
                      ? "border-[#003A6E]/30 bg-[#EFF6FF] shadow-[0_8px_28px_-8px_rgba(0,58,110,0.18)]"
                      : "border-[#E5E7EB] bg-white hover:border-[#003A6E]/20 hover:bg-[#F8FAFC]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="font-mono text-[10px] uppercase tracking-wider text-[color:var(--color-text-secondary)]">
                        {a.id} · {a.subjectArea}
                      </p>
                      <p className="mt-0.5 truncate font-semibold text-[color:var(--color-text-primary)]">
                        {a.title}
                      </p>
                      <p className="mt-0.5 text-xs text-[color:var(--color-text-secondary)]">
                        ${a.budget} {a.currency} · due {a.deadline}
                      </p>
                    </div>
                    <StatusBadge status={a.status} />
                  </div>

                  {/* Mini progress bar */}
                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex-1 overflow-hidden rounded-full bg-[#E5E7EB] h-1.5">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{
                          width: `${(stage.step / 3) * 100}%`,
                          backgroundColor: stage.color,
                        }}
                      />
                    </div>
                    <span className="text-[10px] text-[color:var(--color-text-secondary)]">
                      {stage.label}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Detail panel */}
          <div>
            {openId ? (() => {
              const a = myActive.find((x) => x.id === openId)!;
              return (
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-wider text-[color:var(--color-text-secondary)]">
                          {a.id} · {a.clientCountry}
                        </p>
                        <CardTitle className="mt-0.5 text-base leading-snug">{a.title}</CardTitle>
                        <p className="mt-1 text-sm text-[color:var(--color-text-secondary)]">
                          Budget: <span className="font-semibold text-[#003A6E]">${a.budget}</span>
                          {" · "}Deadline: <span className="font-semibold">{a.deadline}</span>
                        </p>
                      </div>
                      <StatusBadge status={a.status} />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-5 p-5">
                    {a.status === "under_review" && (
                      <div className="flex items-start gap-3 rounded-xl border border-[#DDD6FE] bg-[#F5F3FF] p-4">
                        <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#7C3AED]" />
                        <div>
                          <p className="text-sm font-semibold text-[#5B21B6]">Under review</p>
                          <p className="mt-0.5 text-xs text-[#7C3AED]">
                            Your submission is being reviewed. You'll be notified of the outcome.
                          </p>
                        </div>
                      </div>
                    )}

                    {a.status === "revision" && (
                      <div className="flex items-start gap-3 rounded-xl border border-[#FED7AA] bg-[#FFF7ED] p-4">
                        <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#F59E0B]" />
                        <div>
                          <p className="text-sm font-semibold text-[#92400E]">Revision requested</p>
                          <p className="mt-0.5 text-xs text-[#B45309]">
                            The client has requested changes. Review remarks below and resubmit.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Remarks */}
                    <div>
                      <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[color:var(--color-text-secondary)]">
                        <MessageSquare className="h-3.5 w-3.5" /> Client remarks
                      </p>
                      <div className="rounded-xl border border-[#E5E7EB] bg-[#F8FAFC] p-4 text-sm text-[color:var(--color-text-secondary)]">
                        {a.status === "revision"
                          ? "Please add more detailed calculations in Section 3 and improve the conclusion. The simulation results need labels."
                          : "No remarks yet."}
                      </div>
                    </div>

                    {/* Upload */}
                    {["in_progress", "matched", "revision"].includes(a.status) && (
                      <div>
                        <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[color:var(--color-text-secondary)]">
                          <UploadCloud className="h-3.5 w-3.5" /> Submit work
                        </p>
                        <UploadSection assignmentId={a.id} />
                      </div>
                    )}

                    {/* Deadline reminder */}
                    <div className="flex items-center gap-3 rounded-xl border border-[#FFD662]/30 bg-[#FFFBEB] px-4 py-3">
                      <Clock className="h-4 w-4 flex-shrink-0 text-[#F59E0B]" />
                      <p className="text-xs text-[#92400E]">
                        Deadline: <span className="font-bold">{a.deadline}</span> — submit before this date to guarantee payment.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })() : (
              <div className="flex h-full min-h-[280px] flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-[#E5E7EB] text-center">
                <ClipboardList className="h-8 w-8 text-[color:var(--color-text-secondary)]" />
                <p className="text-sm text-[color:var(--color-text-secondary)]">Select an assignment to view details</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
