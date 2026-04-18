"use client";

import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExpenseChart } from "@/components/charts/expense-chart";
import { StatCard } from "@/components/dashboard/stat-card";
import { Wallet, TrendingDown, PieChart, Receipt } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

const byCategory = [
  { label: "Academic & research", amount: 24500, share: 57, color: "#1B1464" },
  { label: "IoT & IEEE projects", amount: 14000, share: 33, color: "#7C3AED" },
  { label: "Content & creatives", amount: 4200, share: 10, color: "#A78BFA" },
];

export default function ExpensesPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Money"
        title="Expense breakdown"
        description="Everything you've spent with technoLOgia, by month and service line."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard tone="primary" label="Total spent · YTD" value="৳42,700" icon={Wallet} />
        <StatCard label="Active budget" value="৳22,000" icon={Receipt} />
        <StatCard label="Avg. order cost" value="৳5,330" icon={PieChart} />
        <StatCard
          tone="accent"
          label="vs. similar clients"
          value="-8%"
          delta={{ value: "cheaper", direction: "up" }}
          icon={TrendingDown}
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Monthly expenses</CardTitle>
        </CardHeader>
        <CardContent>
          <ExpenseChart height={320} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>By service line</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          {byCategory.map((c) => (
            <div key={c.label}>
              <div className="flex items-center justify-between text-sm">
                <span className="text-[color:var(--color-text-primary)]">
                  {c.label}
                </span>
                <span className="font-mono text-xs text-[color:var(--color-text-secondary)]">
                  {formatCurrency(c.amount)} · {c.share}%
                </span>
              </div>
              <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-[color:var(--color-surface)]">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${c.share}%`, background: c.color }}
                />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
