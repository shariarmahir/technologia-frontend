"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BanknoteIcon,
  ClipboardList,
  Star,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Clock,
  Search,
  ShieldCheck,
} from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { StatCard } from "@/components/dashboard/stat-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/status-badge";
import { assignments, workerEarningsSeries } from "@/lib/mock-data";

const myActive = assignments.filter((a) => a.worker === "Nafis H." && ["in_progress", "under_review", "matched"].includes(a.status));
const recentCompleted = assignments.filter((a) => a.worker === "Nafis H." && a.status === "completed");

export default function WorkerOverview() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Worker dashboard"
        title="Good work, Nafis."
        description="You have 2 active assignments and ৳22,100 earned this month."
        actions={
          <Button href="/dashboard/worker/browse" variant="sky" size="sm" glow>
            <Search className="h-4 w-4" /> Browse assignments
          </Button>
        }
      />

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          tone="primary"
          label="Total earned"
          value="৳87,400"
          delta={{ value: "+18%", direction: "up" }}
          icon={BanknoteIcon}
          hint="All time"
        />
        <StatCard
          tone="accent"
          label="This month"
          value="৳22,100"
          delta={{ value: "+৳3,200", direction: "up" }}
          icon={TrendingUp}
        />
        <StatCard label="Active assignments" value="2" icon={ClipboardList} />
        <StatCard
          label="Rating"
          value="4.9 / 5"
          delta={{ value: "42 reviews", direction: "up" }}
          icon={Star}
        />
      </div>

      {/* Verification badge */}
      <div className="flex items-center gap-3 rounded-2xl border border-[#BBF7D0] bg-[#F0FDF4] px-4 py-3">
        <ShieldCheck className="h-5 w-5 flex-shrink-0 text-[#10B981]" />
        <div>
          <p className="text-sm font-semibold text-[#065F46]">Verified Worker · UAP · EEE</p>
          <p className="text-xs text-[#047857]">University ID approved — you can accept paid assignments</p>
        </div>
        <span className="ml-auto rounded-full bg-[#DCFCE7] px-2.5 py-1 font-mono text-[10px] font-semibold text-[#065F46]">
          Verified
        </span>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.2fr_1fr]">
        {/* Active assignments */}
        <Card>
          <CardHeader className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <ClipboardList className="h-4 w-4 text-[color:var(--color-accent)]" />
                Active assignments
              </CardTitle>
              <p className="mt-1 text-sm text-[color:var(--color-text-secondary)]">
                Assignments you&rsquo;re currently working on
              </p>
            </div>
            <Link href="/dashboard/worker/active" className="text-sm font-semibold text-[color:var(--color-primary)] hover:text-[color:var(--color-accent)]">
              All active →
            </Link>
          </CardHeader>
          <CardContent className="space-y-3 p-5">
            {myActive.length > 0 ? myActive.map((a) => (
              <motion.div
                key={a.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl border border-[#FFD662]/30 bg-white p-4 transition hover:-translate-y-0.5 hover:border-[#FFD662]/60 hover:shadow-[0_10px_28px_-8px_rgba(255,214,98,0.2)]"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-[color:var(--color-text-secondary)]">
                      {a.id} · {a.subjectArea} · {a.clientCountry}
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
                <div className="mt-3 flex gap-2">
                  <Button variant="primary" size="sm">
                    Submit work
                  </Button>
                  <Button variant="outline" size="sm">
                    <Clock className="h-3.5 w-3.5" /> Deadline
                  </Button>
                </div>
              </motion.div>
            )) : (
              <div className="flex flex-col items-center gap-3 py-8 text-center">
                <ClipboardList className="h-8 w-8 text-[color:var(--color-text-secondary)]" />
                <p className="text-sm text-[color:var(--color-text-secondary)]">No active assignments</p>
                <Button href="/dashboard/worker/browse" variant="sky" size="sm" glow>Browse open assignments</Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Earnings snapshot */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-[color:var(--color-accent)]" />
              Earnings this month
            </CardTitle>
            <p className="mt-1 text-sm text-[color:var(--color-text-secondary)]">
              Monthly breakdown of your payouts
            </p>
          </CardHeader>
          <CardContent className="p-5">
            <div className="space-y-2">
              {workerEarningsSeries.slice(-4).map((e) => {
                const max = Math.max(...workerEarningsSeries.map((x) => x.earned));
                const pct = Math.round((e.earned / max) * 100);
                return (
                  <div key={e.month} className="flex items-center gap-3">
                    <span className="w-7 font-mono text-[11px] text-[color:var(--color-text-secondary)]">{e.month}</span>
                    <div className="flex-1 overflow-hidden rounded-full bg-[#F1F5F9] h-2">
                      <div
                        className="h-full rounded-full bg-[linear-gradient(90deg,#003A6E_0%,#FFD662_100%)]"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="w-16 text-right font-mono text-[11px] font-semibold text-[color:var(--color-primary-dark)]">
                      ৳{(e.earned / 1000).toFixed(1)}k
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-[#FFD662]/30 bg-[#FFFBEB] p-3 text-center">
                <p className="font-mono text-[10px] uppercase tracking-wider text-[#92400E]">Pending payout</p>
                <p className="mt-1 font-display text-lg font-bold text-[#003A6E]">৳14,200</p>
              </div>
              <div className="rounded-xl border border-[#BBF7D0] bg-[#F0FDF4] p-3 text-center">
                <p className="font-mono text-[10px] uppercase tracking-wider text-[#065F46]">Total earned</p>
                <p className="mt-1 font-display text-lg font-bold text-[#003A6E]">৳87,400</p>
              </div>
            </div>
            <Button href="/dashboard/worker/earnings" variant="outline" size="sm" className="mt-4 w-full">
              Full earnings breakdown <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Completed work */}
      {recentCompleted.length > 0 && (
        <Card>
          <CardHeader className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#10B981]" />
                Recently completed
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-3 p-5">
            {recentCompleted.map((a) => (
              <div key={a.id} className="flex items-center justify-between rounded-xl border border-[#BBF7D0]/50 bg-white p-3">
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-[color:var(--color-text-primary)]">{a.title}</p>
                  <p className="text-xs text-[color:var(--color-text-secondary)]">{a.clientCountry} · ${a.budget}</p>
                </div>
                <div className="flex items-center gap-2">
                  {a.verified && (
                    <span className="rounded-full bg-[#DCFCE7] px-2 py-0.5 font-mono text-[9px] font-semibold text-[#065F46]">
                      ✓ Verified
                    </span>
                  )}
                  <StatusBadge status={a.status} />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
