import { Plus, Trophy, UserCircle2 } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { GlassButton } from "@/components/ui/glass-button";
import { Card, CardContent } from "@/components/ui/card";
import { schoolTeams } from "@/lib/mock-data";

export default function SchoolTeamsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Teams"
        title="Student team roster"
        description="3+ ready-built teams — Leader (Final yr) · EEE (3rd yr, IoT) · CSE (3rd yr, Software)."
        actions={
          <GlassButton variant="primary" size="sm">
            <Plus className="h-4 w-4" /> Build new team
          </GlassButton>
        }
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {schoolTeams.map((t) => (
          <Card key={t.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative bg-gradient-to-br from-[#0F0B3D] to-[#1B1464] p-5 text-white">
                <div className="absolute right-4 top-4 rounded-full border border-[#A78BFA]/30 bg-[#7C3AED]/25 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider">
                  {t.wins} wins
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 font-display text-base font-bold">
                    {t.name.split("-")[0].slice(0, 2).toUpperCase()}
                  </span>
                  <div>
                    <p className="font-display text-lg font-semibold">
                      {t.name}
                    </p>
                    <p className="text-xs text-white/60 font-mono">
                      {t.xp} XP
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 p-5">
                <Member role="Team leader" value={t.leader} />
                <Member role="EEE · IoT" value={t.eee} />
                <Member role="CSE · AI/Software" value={t.cse} />

                <div className="flex gap-2 pt-2">
                  <button className="flex-1 rounded-full border border-[color:var(--color-border)] px-3 py-2 text-xs font-semibold text-[color:var(--color-primary)]">
                    View projects
                  </button>
                  <button className="flex-1 rounded-full bg-[color:var(--color-primary)] px-3 py-2 text-xs font-semibold text-white">
                    <Trophy className="mr-1 inline h-3.5 w-3.5" />
                    Log achievement
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function Member({ role, value }: { role: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[color:var(--color-surface-alt)] text-[color:var(--color-primary)]">
        <UserCircle2 className="h-4 w-4" />
      </span>
      <div className="leading-tight">
        <p className="font-mono text-[10px] uppercase tracking-wider text-[color:var(--color-accent)]">
          {role}
        </p>
        <p className="mt-0.5 text-sm font-semibold text-[color:var(--color-primary-dark)]">
          {value}
        </p>
      </div>
    </div>
  );
}
