"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  CalendarDays,
  Users,
  ArrowRight,
  Flame,
  CheckCircle2,
  Tag,
} from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { labCompetitions } from "@/lib/mock-data";

const statusStyle: Record<string, { label: string; chip: string; dot: string }> = {
  upcoming: { label: "Upcoming", chip: "border-[#BAE6FD] bg-[#E0F2FE] text-[#075985]", dot: "bg-[#0EA5E9]" },
  registration: { label: "Registration open", chip: "border-[#BAE6FD] bg-[#E0F2FE] text-[#0369A1]", dot: "bg-[#0EA5E9] animate-pulse" },
  active: { label: "Active", chip: "border-[#FBCFE8] bg-[#FCE7F3] text-[#9D174D]", dot: "bg-[#DB2777] animate-pulse" },
  completed: { label: "Completed", chip: "border-[#BBF7D0] bg-[#DCFCE7] text-[#047857]", dot: "bg-[#10B981]" },
};

export default function CompetitionsPage() {
  const live = labCompetitions.filter((c) => c.status === "registration" || c.status === "active");
  const upcoming = labCompetitions.filter((c) => c.status === "upcoming");
  const past = labCompetitions.filter((c) => c.status === "completed");

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Lab portal · competitions"
        title="Workshop competitions"
        description="Run intra-lab competitions or join inter-university tournaments. Prizes, certificates, live leaderboards."
      />

      {/* Active/registration banners */}
      {live.map((comp, i) => {
        const s = statusStyle[comp.status];
        const filled = Math.round((comp.registeredLabs / comp.maxLabs) * 100);
        return (
          <motion.div
            key={comp.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative overflow-hidden rounded-[24px] border border-[#1E40AF]/50 bg-[linear-gradient(135deg,#0A0930_0%,#1B1464_55%,#0369A1_120%)] p-6 text-white shadow-[0_30px_80px_-20px_rgba(14,20,70,0.5)]"
          >
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#0EA5E9]/40 blur-3xl" />
            <div className="absolute -bottom-20 -left-10 h-60 w-60 rounded-full bg-[#38BDF8]/25 blur-3xl" />
            <div className="hero-grid absolute inset-0 opacity-30" />

            <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider ${s.chip}`}
                >
                  <span className={`h-1 w-1 rounded-full ${s.dot}`} />
                  {s.label}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold leading-snug sm:text-2xl">
                  {comp.title}
                </h3>
                <p className="mt-1.5 text-sm text-white/70">
                  Registration deadline · {comp.registrationDeadline} · Event · {comp.eventDate}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {comp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/20 bg-white/10 px-2.5 py-0.5 font-mono text-[10px] text-white/75"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:items-end sm:text-right">
                <div className="text-right">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-white/55">
                    Registered labs
                  </p>
                  <p className="mt-0.5 font-display text-2xl font-semibold">
                    {comp.registeredLabs}{" "}
                    <span className="text-white/55">/ {comp.maxLabs}</span>
                  </p>
                </div>
                <div className="w-full sm:w-40">
                  <div className="h-2 overflow-hidden rounded-full bg-white/15">
                    <div
                      className="h-full rounded-full bg-[linear-gradient(90deg,#38BDF8_0%,#0EA5E9_100%)] shadow-[0_0_12px_rgba(56,189,248,0.6)]"
                      style={{ width: `${filled}%` }}
                    />
                  </div>
                  <p className="mt-1 font-mono text-[10px] text-white/55 sm:text-right">
                    {filled}% filled
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {comp.prizes.map((prize, pi) => (
                    <span
                      key={pi}
                      className="flex items-center gap-1 rounded-full bg-[#0EA5E9]/15 px-2.5 py-1 font-mono text-[11px] text-[#0369A1]"
                    >
                      <Trophy className="h-3 w-3" />
                      {pi === 0 ? "1st" : pi === 1 ? "2nd" : "3rd"} · {prize}
                    </span>
                  ))}
                </div>
                <Button variant="sky" size="sm" glow>
                  Register your lab <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        );
      })}

      {/* Upcoming competitions */}
      {upcoming.length > 0 && (
        <section>
          <h3 className="mb-4 font-display text-base font-semibold text-[color:var(--color-text-primary)]">
            Upcoming
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {upcoming.map((comp, i) => {
              const s = statusStyle[comp.status];
              return (
                <motion.div
                  key={comp.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex flex-col gap-4 rounded-2xl border border-[color:var(--color-border)] bg-white p-5 transition hover:-translate-y-0.5 hover:border-[#BAE6FD] hover:shadow-[0_14px_36px_-18px_rgba(14,165,233,0.4)]"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span
                        className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${s.chip}`}
                      >
                        <span className={`h-1 w-1 rounded-full ${s.dot}`} />
                        {s.label}
                      </span>
                      <p className="mt-2 font-display text-base font-semibold text-[color:var(--color-primary-dark)]">
                        {comp.title}
                      </p>
                    </div>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--color-accent-soft)] text-[color:var(--color-accent)]">
                      <Flame className="h-5 w-5" />
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-[color:var(--color-text-secondary)]">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays className="h-3.5 w-3.5" /> {comp.eventDate}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users className="h-3.5 w-3.5" /> {comp.registeredLabs}/{comp.maxLabs} labs
                    </span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    View details <ArrowRight className="h-4 w-4" />
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </section>
      )}

      {/* Past competitions */}
      {past.length > 0 && (
        <section>
          <h3 className="mb-4 font-display text-base font-semibold text-[color:var(--color-text-primary)]">
            Past competitions
          </h3>
          <div className="space-y-3">
            {past.map((comp) => {
              const s = statusStyle[comp.status];
              return (
                <div
                  key={comp.id}
                  className="flex flex-col gap-3 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#DCFCE7] text-[#10B981]">
                      <CheckCircle2 className="h-5 w-5" />
                    </span>
                    <div>
                      <span
                        className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${s.chip}`}
                      >
                        <span className={`h-1 w-1 rounded-full ${s.dot}`} />
                        {s.label}
                      </span>
                      <p className="mt-0.5 font-display text-sm font-semibold text-[color:var(--color-primary-dark)]">
                        {comp.title}
                      </p>
                      <p className="text-xs text-[color:var(--color-text-secondary)]">
                        {comp.eventDate} · {comp.registeredLabs} labs
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {comp.prizes.map((prize, pi) => (
                      <span
                        key={pi}
                        className="flex items-center gap-1 rounded-full bg-[#E0F2FE] px-2.5 py-1 font-mono text-[11px] text-[#0369A1]"
                      >
                        <Tag className="h-3 w-3" /> {prize}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
