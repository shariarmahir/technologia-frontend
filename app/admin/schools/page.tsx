"use client";

import { Plus, MapPin, Trophy, Users2 } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { GlassButton } from "@/components/ui/glass-button";
import { Card, CardContent } from "@/components/ui/card";
import { partnerSchools } from "@/lib/mock-data";

export default function AdminSchoolsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Schools & colleges"
        title="Partner institutions"
        description="Schools enrolled in the technoLOgia STEM program — Level Up, teams and trophies."
        actions={
          <GlassButton variant="primary" size="sm">
            <Plus className="h-4 w-4" /> Onboard school
          </GlassButton>
        }
      />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {partnerSchools.map((s) => {
          const pct = Math.round((s.xp / s.xpMax) * 100);
          return (
            <Card key={s.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex items-start justify-between bg-gradient-to-r from-[#0F0B3D] to-[#1B1464] p-5 text-white">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-[color:var(--color-accent-light)]">
                      Partner school
                    </p>
                    <p className="mt-1 font-display text-lg font-semibold">
                      {s.name}
                    </p>
                    <p className="mt-0.5 inline-flex items-center gap-1 text-xs text-white/70">
                      <MapPin className="h-3 w-3" />
                      {s.location}
                    </p>
                  </div>
                  <span className="rounded-full border border-[#A78BFA]/40 bg-[#7C3AED]/30 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em]">
                    Level {s.level.toString().padStart(2, "0")}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[color:var(--color-text-secondary)]">
                      XP progress
                    </span>
                    <span className="font-mono text-[color:var(--color-text-primary)]">
                      {s.xp} / {s.xpMax}
                    </span>
                  </div>
                  <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-[color:var(--color-surface)]">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#7C3AED] to-[#A78BFA]"
                      style={{ width: `${pct}%` }}
                    />
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <Stat icon={Users2} label="Teams" value={s.teams} />
                    <Stat icon={Trophy} label="Trophies" value={s.trophies} />
                  </div>

                  <div className="mt-5 flex gap-2">
                    <button className="flex-1 rounded-full border border-[color:var(--color-border)] px-3 py-2 text-xs font-semibold text-[color:var(--color-primary)]">
                      View workshops
                    </button>
                    <button className="flex-1 rounded-full bg-[color:var(--color-primary)] px-3 py-2 text-xs font-semibold text-white">
                      Open profile
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: number;
}) {
  return (
    <div className="rounded-xl bg-[color:var(--color-surface)] p-3">
      <Icon className="h-4 w-4 text-[color:var(--color-accent)]" />
      <p className="mt-2 font-display text-xl font-semibold text-[color:var(--color-primary-dark)]">
        {value}
      </p>
      <p className="text-[10px] uppercase tracking-wider text-[color:var(--color-text-secondary)]">
        {label}
      </p>
    </div>
  );
}
