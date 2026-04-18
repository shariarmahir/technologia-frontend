"use client";

import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RevenueChart } from "@/components/charts/revenue-chart";
import { revenueSeries } from "@/lib/mock-data";
import { StatCard } from "@/components/dashboard/stat-card";
import { Wallet, Receipt, BarChart3, Target } from "lucide-react";

export default function AnalyticsPage() {
  const last = revenueSeries[revenueSeries.length - 1];
  const totalYTD = revenueSeries.reduce((a, b) => a + b.revenue, 0);
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Analytics"
        title="Revenue & operations"
        description="How technoLOgia is performing — track revenue growth, pipeline throughput and verified rate."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          tone="primary"
          label="Revenue (YTD)"
          value={`৳${(totalYTD / 100000).toFixed(1)}L`}
          delta={{ value: "+38%", direction: "up" }}
          icon={Wallet}
        />
        <StatCard
          label="Orders this month"
          value={String(last.orders)}
          delta={{ value: "+13%", direction: "up" }}
          icon={Receipt}
        />
        <StatCard
          label="Avg. order value"
          value={`৳${Math.round(last.revenue / last.orders).toLocaleString()}`}
          delta={{ value: "+4%", direction: "up" }}
          icon={BarChart3}
        />
        <StatCard
          tone="accent"
          label="Verified rate"
          value="96%"
          delta={{ value: "+2%", direction: "up" }}
          icon={Target}
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Monthly revenue</CardTitle>
          <p className="mt-1 text-sm text-[color:var(--color-text-secondary)]">
            The last 7 months of gross revenue in BDT.
          </p>
        </CardHeader>
        <CardContent>
          <RevenueChart height={360} />
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Revenue by service line</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { label: "Student services", share: 52, color: "#1B1464" },
              { label: "Projects (IoT + IEEE)", share: 31, color: "#7C3AED" },
              { label: "Content & creatives", share: 17, color: "#A78BFA" },
            ].map((r) => (
              <div key={r.label}>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[color:var(--color-text-primary)]">
                    {r.label}
                  </span>
                  <span className="font-mono text-xs text-[color:var(--color-text-secondary)]">
                    {r.share}%
                  </span>
                </div>
                <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-[color:var(--color-surface)]">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${r.share}%`, background: r.color }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pipeline health</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            {[
              { label: "Avg. turnaround", value: "48 hr" },
              { label: "On-time delivery", value: "94%" },
              { label: "Revision rate", value: "11%" },
              { label: "Cancellations", value: "3%" },
            ].map((k) => (
              <div
                key={k.label}
                className="rounded-xl border border-[color:var(--color-border)] bg-white p-4"
              >
                <p className="text-[11px] uppercase tracking-wider text-[color:var(--color-text-secondary)]">
                  {k.label}
                </p>
                <p className="mt-1 font-display text-xl font-semibold text-[color:var(--color-primary-dark)]">
                  {k.value}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
