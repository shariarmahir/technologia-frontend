"use client";

import Link from "next/link";
import {
  Wallet,
  ListChecks,
  BadgeCheck,
  UploadCloud,
  Link as LinkIcon,
  Video,
  Eye,
  MessageSquare,
  Plus,
  Sparkles,
  Globe,
} from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { StatCard } from "@/components/dashboard/stat-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExpenseChart } from "@/components/charts/expense-chart";
import { WorkTracker } from "@/components/dashboard/work-tracker";
import { StatusBadge } from "@/components/ui/status-badge";
import { Button } from "@/components/ui/button";
import { VerifiedBadge } from "@/components/ui/verified-badge";
import { assignments } from "@/lib/mock-data";
import { formatCurrency } from "@/lib/utils";

const clientAssignments = assignments.slice(0, 3);
const activeAssignment = clientAssignments[0];

export default function ClientOverview() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Your dashboard"
        title="Welcome back, James."
        description="Track your assignments, review drafts, and chat with your worker."
        actions={
          <Button variant="primary" size="sm">
            <Plus className="h-4 w-4" /> Post assignment
          </Button>
        }
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          tone="primary"
          label="Total spent"
          value="$412"
          delta={{ value: "+12%", direction: "up" }}
          icon={Wallet}
        />
        <StatCard label="Active assignments" value="3" icon={ListChecks} />
        <StatCard
          label="Verified reports"
          value="7"
          delta={{ value: "+2", direction: "up" }}
          icon={BadgeCheck}
        />
        <StatCard
          tone="accent"
          label="Avg. turnaround"
          value="42 hr"
          delta={{ value: "-6h", direction: "up" }}
          icon={Sparkles}
        />
      </div>

      {/* Active assignment tracker */}
      <Card>
        <CardHeader className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-[color:var(--color-accent)]">
              Active assignment · {activeAssignment.id}
            </p>
            <CardTitle className="mt-1">{activeAssignment.title}</CardTitle>
            <p className="mt-1 text-sm text-[color:var(--color-text-secondary)]">
              Deadline · {activeAssignment.deadline} · Budget{" "}
              {activeAssignment.currency === "USD"
                ? `$${activeAssignment.budget}`
                : formatCurrency(activeAssignment.budget)}
            </p>
            {activeAssignment.worker && (
              <p className="mt-0.5 flex items-center gap-1 text-xs text-[color:var(--color-text-secondary)]">
                <Globe className="h-3 w-3" />
                Worker: <span className="font-semibold text-[#003A6E]">{activeAssignment.worker}</span>
                {" · "}{activeAssignment.workerDepartment}
              </p>
            )}
          </div>
          <div className="flex items-center gap-2">
            <StatusBadge status={activeAssignment.status} />
            {activeAssignment.verified && <VerifiedBadge compact />}
          </div>
        </CardHeader>
        <CardContent>
          <WorkTracker current={activeAssignment.status} />
          <div className="mt-8 flex flex-wrap items-center gap-2">
            <Button variant="primary" size="sm">
              <Eye className="h-4 w-4" /> View draft
            </Button>
            <Button variant="outline" size="sm">
              <MessageSquare className="h-4 w-4" /> Leave a remark
            </Button>
            <Button variant="outline" size="sm">
              <Video className="h-4 w-4" /> Google Meet
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.2fr_1fr]">
        {/* Assignment list */}
        <Card>
          <CardHeader className="flex items-center justify-between">
            <div>
              <CardTitle>Recent assignments</CardTitle>
              <p className="mt-1 text-sm text-[color:var(--color-text-secondary)]">
                Full history in{" "}
                <Link
                  href="/dashboard/client/assignments"
                  className="font-semibold text-[color:var(--color-primary)] underline"
                >
                  My assignments
                </Link>
              </p>
            </div>
          </CardHeader>
          <CardContent className="space-y-3 p-5">
            {clientAssignments.map((a) => (
              <div
                key={a.id}
                className="flex items-center justify-between rounded-xl border border-[#BAE6FD]/40 bg-white/90 p-4 transition hover:-translate-y-0.5 hover:border-[#00539C]/30 hover:bg-white hover:shadow-[0_10px_32px_-8px_rgba(0,83,156,0.18)]"
              >
                <div className="min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-[color:var(--color-text-secondary)]">
                    {a.id} · {a.subjectArea}
                  </p>
                  <p className="mt-0.5 truncate font-semibold text-[color:var(--color-text-primary)]">
                    {a.title}
                  </p>
                  <p className="mt-0.5 text-xs text-[color:var(--color-text-secondary)]">
                    {a.currency === "USD" ? `$${a.budget}` : formatCurrency(a.budget)} · due {a.deadline}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <StatusBadge status={a.status} />
                  {a.verified && <VerifiedBadge compact />}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Upload / share */}
        <Card>
          <CardHeader>
            <CardTitle>Share files or a meeting link</CardTitle>
            <p className="mt-1 text-sm text-[color:var(--color-text-secondary)]">
              Upload source material or drop a Drive/Meet link for your worker.
            </p>
          </CardHeader>
          <CardContent className="space-y-3">
            <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#FFD662]/40 bg-[#FFFBEB]/60 px-4 py-8 text-center transition hover:border-[#FFD662] hover:bg-[#FFFBEB] hover:shadow-[0_8px_24px_rgba(255,214,98,0.12)]">
              <UploadCloud className="h-6 w-6 text-[#FFD662]" />
              <p className="mt-2 text-sm font-semibold text-[color:var(--color-primary-dark)]">
                Drag & drop or click to upload
              </p>
              <p className="text-[11px] text-[color:var(--color-text-secondary)]">
                PDF, DOCX, ZIP up to 100 MB
              </p>
              <input type="file" className="hidden" />
            </label>

            <div className="relative">
              <LinkIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[color:var(--color-text-secondary)]" />
              <input
                placeholder="Paste Google Drive link"
                className="w-full rounded-xl border border-[#00539C]/20 bg-white/80 py-2.5 pl-9 pr-3 text-sm outline-none transition focus:border-[#00539C] focus:bg-white focus:shadow-[0_0_0_4px_rgba(0,83,156,0.12)]"
              />
            </div>
            <div className="relative">
              <Video className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[color:var(--color-text-secondary)]" />
              <input
                placeholder="Paste Google Meet link"
                className="w-full rounded-xl border border-[#00539C]/20 bg-white/80 py-2.5 pl-9 pr-3 text-sm outline-none transition focus:border-[#00539C] focus:bg-white focus:shadow-[0_0_0_4px_rgba(0,83,156,0.12)]"
              />
            </div>

            <Button variant="sky" size="sm" glow className="w-full">
              Share with worker
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex items-center justify-between">
          <div>
            <CardTitle>Expense history</CardTitle>
            <p className="mt-1 text-sm text-[color:var(--color-text-secondary)]">
              Your spending across all assignments with technoLOgia.
            </p>
          </div>
          <Link
            href="/dashboard/client/expenses"
            className="text-sm font-semibold text-[color:var(--color-primary)] transition hover:text-[color:var(--color-accent)]"
          >
            Breakdown →
          </Link>
        </CardHeader>
        <CardContent>
          <ExpenseChart />
        </CardContent>
      </Card>
    </div>
  );
}
