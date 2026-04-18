import { Plus, Users2 } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { GlassButton } from "@/components/ui/glass-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { employees } from "@/lib/mock-data";

export default function EmployeesPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="People"
        title="Team members"
        description="Assign work, manage capacity, and track specialities across the technoLOgia crew."
        actions={
          <GlassButton variant="primary" size="sm">
            <Plus className="h-4 w-4" /> Invite member
          </GlassButton>
        }
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {employees.map((e) => {
          const pct = Math.min(100, Math.round((e.workload / e.capacity) * 100));
          return (
            <Card key={e.id}>
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1B1464] to-[#7C3AED] font-display text-base font-semibold text-white">
                    {e.name[0]}
                  </span>
                  <div className="flex-1">
                    <p className="font-display text-base font-semibold text-[color:var(--color-primary-dark)]">
                      {e.name}
                    </p>
                    <p className="text-xs text-[color:var(--color-text-secondary)]">
                      {e.role}
                    </p>
                    <p className="mt-1 text-[11px] font-medium text-[color:var(--color-accent)]">
                      {e.speciality}
                    </p>
                  </div>
                </div>
                <div className="mt-5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[color:var(--color-text-secondary)]">
                      Workload
                    </span>
                    <span className="font-mono text-[color:var(--color-text-primary)]">
                      {e.workload}/{e.capacity}
                    </span>
                  </div>
                  <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-[color:var(--color-surface)]">
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
                <div className="mt-5 flex gap-2">
                  <button className="flex-1 rounded-full border border-[color:var(--color-border)] px-3 py-2 text-xs font-semibold text-[color:var(--color-primary)] transition hover:bg-[color:var(--color-surface)]">
                    View orders
                  </button>
                  <button className="flex-1 rounded-full bg-[color:var(--color-primary)] px-3 py-2 text-xs font-semibold text-white transition hover:bg-[color:var(--color-primary-light)]">
                    Assign work
                  </button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users2 className="h-4 w-4 text-[color:var(--color-accent)]" />
            Capacity snapshot
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: "Total capacity", value: 38 },
            { label: "In use", value: 21 },
            { label: "Available", value: 17 },
            { label: "Utilisation", value: "55%" },
          ].map((k) => (
            <div
              key={k.label}
              className="rounded-xl bg-[color:var(--color-surface)] p-4"
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
  );
}
