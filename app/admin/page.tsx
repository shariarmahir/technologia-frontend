"use client";

import Link from "next/link";
import {
  TrendingUp,
  ListTodo,
  CheckCircle2,
  Wallet,
  ArrowRight,
} from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { StatCard } from "@/components/dashboard/stat-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RevenueChart } from "@/components/charts/revenue-chart";
import { StatusBadge } from "@/components/ui/status-badge";
import { GlassButton } from "@/components/ui/glass-button";
import { orders, employees } from "@/lib/mock-data";
import { formatCurrency } from "@/lib/utils";

export default function AdminOverview() {
  const recent = orders.slice(0, 5);
  const active = orders.filter(
    (o) => !["completed", "cancelled"].includes(o.status)
  ).length;

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Admin console"
        title="Good afternoon, Mahir."
        description="Here's how the platform is moving today — 7-day revenue is up, pipeline is healthy."
        actions={
          <>
            <GlassButton href="/admin/orders" variant="primary" size="sm">
              Open pipeline <ArrowRight className="h-4 w-4" />
            </GlassButton>
          </>
        }
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          tone="primary"
          label="Revenue · April"
          value="৳3,21,000"
          delta={{ value: "+11%", direction: "up" }}
          icon={Wallet}
        />
        <StatCard
          label="Active orders"
          value={String(active)}
          delta={{ value: "+3", direction: "up" }}
          icon={ListTodo}
        />
        <StatCard
          label="Completed · April"
          value="18"
          delta={{ value: "+22%", direction: "up" }}
          icon={CheckCircle2}
        />
        <StatCard
          tone="accent"
          label="Verified rate"
          value="96%"
          delta={{ value: "+2%", direction: "up" }}
          icon={TrendingUp}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.6fr_1fr]">
        <Card>
          <CardHeader className="flex items-center justify-between">
            <div>
              <CardTitle>Revenue trend</CardTitle>
              <p className="mt-1 text-sm text-[color:var(--color-text-secondary)]">
                Last 7 months · monthly revenue in BDT
              </p>
            </div>
            <div className="hidden gap-1 rounded-full border border-[color:var(--color-border)] bg-white p-1 text-xs sm:flex">
              {["3M", "6M", "12M"].map((r, i) => (
                <button
                  key={r}
                  className={`rounded-full px-3 py-1 font-semibold ${
                    i === 1
                      ? "bg-[color:var(--color-primary)] text-white"
                      : "text-[color:var(--color-text-secondary)] hover:text-[color:var(--color-primary)]"
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </CardHeader>
          <CardContent className="pt-3">
            <RevenueChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Team workload</CardTitle>
            <p className="mt-1 text-sm text-[color:var(--color-text-secondary)]">
              Active assignments per team member
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            {employees.map((e) => {
              const pct = Math.min(
                100,
                Math.round((e.workload / e.capacity) * 100)
              );
              return (
                <div key={e.id}>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#1B1464] to-[#7C3AED] text-xs font-semibold text-white">
                        {e.name[0]}
                      </span>
                      <div className="leading-tight">
                        <p className="text-[13px] font-semibold text-[color:var(--color-text-primary)]">
                          {e.name}
                        </p>
                        <p className="text-[11px] text-[color:var(--color-text-secondary)]">
                          {e.role}
                        </p>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-[color:var(--color-text-secondary)]">
                      {e.workload}/{e.capacity}
                    </span>
                  </div>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[color:var(--color-surface)]">
                    <div
                      className={`h-full rounded-full ${
                        pct >= 85
                          ? "bg-[color:var(--color-danger)]"
                          : pct >= 60
                          ? "bg-[color:var(--color-accent)]"
                          : "bg-[color:var(--color-success)]"
                      }`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex items-center justify-between">
          <div>
            <CardTitle>Recent work requests</CardTitle>
            <p className="mt-1 text-sm text-[color:var(--color-text-secondary)]">
              Latest orders across all categories
            </p>
          </div>
          <Link
            href="/admin/orders"
            className="text-sm font-semibold text-[color:var(--color-primary)] hover:text-[color:var(--color-accent)]"
          >
            View all →
          </Link>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[color:var(--color-border)] text-left font-mono text-[10px] uppercase tracking-wider text-[color:var(--color-text-secondary)]">
                  <th className="px-6 py-3">Order</th>
                  <th className="px-3 py-3">Client</th>
                  <th className="px-3 py-3">Assigned</th>
                  <th className="px-3 py-3">Budget</th>
                  <th className="px-3 py-3">Status</th>
                  <th className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {recent.map((o) => (
                  <tr
                    key={o.id}
                    className="border-b border-[color:var(--color-border)]/60 last:border-0 hover:bg-[color:var(--color-surface)]"
                  >
                    <td className="px-6 py-3.5">
                      <p className="font-mono text-[11px] text-[color:var(--color-text-secondary)]">
                        {o.id}
                      </p>
                      <p className="mt-0.5 font-semibold text-[color:var(--color-text-primary)]">
                        {o.title}
                      </p>
                    </td>
                    <td className="px-3 py-3.5 text-[color:var(--color-text-secondary)]">
                      {o.client}
                    </td>
                    <td className="px-3 py-3.5 text-[color:var(--color-text-secondary)]">
                      {o.assignedTo ?? <span className="italic">Unassigned</span>}
                    </td>
                    <td className="px-3 py-3.5 font-mono text-[color:var(--color-text-primary)]">
                      {formatCurrency(o.budget)}
                    </td>
                    <td className="px-3 py-3.5">
                      <StatusBadge status={o.status} />
                    </td>
                    <td className="px-6 py-3.5 text-right">
                      <button className="text-xs font-semibold text-[color:var(--color-primary)] hover:text-[color:var(--color-accent)]">
                        Manage
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
