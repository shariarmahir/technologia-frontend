import { Plus, Filter } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Card } from "@/components/ui/card";
import { GlassButton } from "@/components/ui/glass-button";
import { StatusBadge } from "@/components/ui/status-badge";
import { VerifiedBadge } from "@/components/ui/verified-badge";
import { orders } from "@/lib/mock-data";
import { formatCurrency } from "@/lib/utils";

export default function ClientOrdersPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Your work"
        title="My orders"
        description="Every request, its live status, and a verified badge when reviewed by Masum sir."
        actions={
          <>
            <button className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--color-border)] bg-white px-3 py-2 text-xs font-semibold text-[color:var(--color-primary)]">
              <Filter className="h-3.5 w-3.5" /> Filters
            </button>
            <GlassButton variant="primary" size="sm">
              <Plus className="h-4 w-4" /> New request
            </GlassButton>
          </>
        }
      />

      <Card className="overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[color:var(--color-border)] text-left font-mono text-[10px] uppercase tracking-wider text-[color:var(--color-text-secondary)]">
              <th className="px-6 py-3">Order</th>
              <th className="px-3 py-3">Category</th>
              <th className="px-3 py-3">Budget</th>
              <th className="px-3 py-3">Deadline</th>
              <th className="px-3 py-3">Status</th>
              <th className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr
                key={o.id}
                className="border-b border-[color:var(--color-border)]/60 last:border-0 hover:bg-[color:var(--color-surface)]"
              >
                <td className="px-6 py-3.5">
                  <p className="font-mono text-[11px] text-[color:var(--color-text-secondary)]">
                    {o.id}
                  </p>
                  <div className="mt-0.5 flex items-center gap-2">
                    <p className="font-semibold text-[color:var(--color-text-primary)]">
                      {o.title}
                    </p>
                    {o.verified && <VerifiedBadge compact />}
                  </div>
                </td>
                <td className="px-3 py-3.5 capitalize text-[color:var(--color-text-secondary)]">
                  {o.category}
                </td>
                <td className="px-3 py-3.5 font-mono">
                  {formatCurrency(o.budget)}
                </td>
                <td className="px-3 py-3.5 text-[color:var(--color-text-secondary)]">
                  {o.deadline}
                </td>
                <td className="px-3 py-3.5">
                  <StatusBadge status={o.status} />
                </td>
                <td className="px-6 py-3.5 text-right">
                  <button className="rounded-full border border-[color:var(--color-border)] px-3 py-1.5 text-xs font-semibold text-[color:var(--color-primary)] hover:bg-[color:var(--color-surface)]">
                    Open
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
