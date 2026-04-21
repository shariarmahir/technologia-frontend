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
} from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { StatCard } from "@/components/dashboard/stat-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExpenseChart } from "@/components/charts/expense-chart";
import { WorkTracker } from "@/components/dashboard/work-tracker";
import { StatusBadge } from "@/components/ui/status-badge";
import { Button } from "@/components/ui/button";
import { VerifiedBadge } from "@/components/ui/verified-badge";
import { orders } from "@/lib/mock-data";
import { formatCurrency } from "@/lib/utils";

const clientOrders = orders.slice(0, 3);
const activeOrder = clientOrders[0];

export default function ClientOverview() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Your dashboard"
        title="Welcome back, Ishrat."
        description="Here's where your work stands — track progress, review demos, and chat with your team."
        actions={
          <Button variant="primary" size="sm">
            <Plus className="h-4 w-4" /> New request
          </Button>
        }
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          tone="primary"
          label="Total spent"
          value="৳42,700"
          delta={{ value: "+12%", direction: "up" }}
          icon={Wallet}
        />
        <StatCard label="Active orders" value="3" icon={ListChecks} />
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

      {/* Active order tracker */}
      <Card>
        <CardHeader className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-[color:var(--color-accent)]">
              Active order · {activeOrder.id}
            </p>
            <CardTitle className="mt-1">{activeOrder.title}</CardTitle>
            <p className="mt-1 text-sm text-[color:var(--color-text-secondary)]">
              Deadline · {activeOrder.deadline} · Budget{" "}
              {formatCurrency(activeOrder.budget)}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <StatusBadge status={activeOrder.status} />
            {activeOrder.verified && <VerifiedBadge compact />}
          </div>
        </CardHeader>
        <CardContent>
          <WorkTracker current={activeOrder.status} />
          <div className="mt-8 flex flex-wrap items-center gap-2">
            <Button variant="primary" size="sm">
              <Eye className="h-4 w-4" /> View demo
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
        {/* Order list */}
        <Card>
          <CardHeader className="flex items-center justify-between">
            <div>
              <CardTitle>Recent orders</CardTitle>
              <p className="mt-1 text-sm text-[color:var(--color-text-secondary)]">
                Full history in{" "}
                <Link
                  href="/dashboard/client/orders"
                  className="font-semibold text-[color:var(--color-primary)] underline"
                >
                  My orders
                </Link>
              </p>
            </div>
          </CardHeader>
          <CardContent className="space-y-3 p-5">
            {clientOrders.map((o) => (
              <div
                key={o.id}
                className="flex items-center justify-between rounded-xl border border-[color:var(--color-border)] bg-white p-4 transition hover:-translate-y-0.5 hover:border-[#BAE6FD] hover:shadow-[0_8px_24px_-16px_rgba(14,165,233,0.45)]"
              >
                <div className="min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-[color:var(--color-text-secondary)]">
                    {o.id} · {o.category}
                  </p>
                  <p className="mt-0.5 truncate font-semibold text-[color:var(--color-text-primary)]">
                    {o.title}
                  </p>
                  <p className="mt-0.5 text-xs text-[color:var(--color-text-secondary)]">
                    {formatCurrency(o.budget)} · due {o.deadline}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <StatusBadge status={o.status} />
                  {o.verified && <VerifiedBadge compact />}
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
              Upload source material or drop a Drive/Meet link.
            </p>
          </CardHeader>
          <CardContent className="space-y-3">
            <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-4 py-8 text-center transition hover:border-[color:var(--color-accent)] hover:bg-[color:var(--color-accent-soft)]">
              <UploadCloud className="h-6 w-6 text-[color:var(--color-accent)]" />
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
                className="w-full rounded-xl border border-[color:var(--color-border)] bg-white py-2.5 pl-9 pr-3 text-sm outline-none transition focus:border-[color:var(--color-accent)] focus:shadow-[0_0_0_4px_rgba(14,165,233,0.15)]"
              />
            </div>
            <div className="relative">
              <Video className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[color:var(--color-text-secondary)]" />
              <input
                placeholder="Paste Google Meet link"
                className="w-full rounded-xl border border-[color:var(--color-border)] bg-white py-2.5 pl-9 pr-3 text-sm outline-none transition focus:border-[color:var(--color-accent)] focus:shadow-[0_0_0_4px_rgba(14,165,233,0.15)]"
              />
            </div>

            <Button variant="sky" size="sm" glow className="w-full">
              Share with team
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex items-center justify-between">
          <div>
            <CardTitle>Expense history</CardTitle>
            <p className="mt-1 text-sm text-[color:var(--color-text-secondary)]">
              Your spending across every service with technoLOgia.
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
