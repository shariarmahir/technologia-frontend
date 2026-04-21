"use client";

import Link from "next/link";
import {
  Users2,
  Trophy,
  GraduationCap,
  Bell,
  Rocket,
  CalendarDays,
  ArrowRight,
  Zap,
} from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { StatCard } from "@/components/dashboard/stat-card";
import { LevelCard } from "@/components/dashboard/level-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { schoolTeams, upcomingEvents, weeklyWorkshops } from "@/lib/mock-data";

const alerts = [
  {
    title: "Zilla Science Fair registration opens",
    body: "Deadline · 2026-05-18. 4 slots confirmed for DRMC.",
    tone: "accent" as const,
  },
  {
    title: "Workshop 7 · IoT Networking — materials ready",
    body: "Download the new MQTT tutorial from materials.",
    tone: "primary" as const,
  },
  {
    title: "Startup idea contest — 3 teams have submitted",
    body: "Review submissions before Thursday's session.",
    tone: "warning" as const,
  },
];

const toneMap = {
  accent: "border-[#BAE6FD] bg-[#E0F2FE]",
  primary: "border-[color:var(--color-primary)]/20 bg-[color:var(--color-surface)]",
  warning: "border-[#FDE68A] bg-[#FEF3C7]",
};

const toneTitle = {
  accent: "text-[#075985]",
  primary: "text-[color:var(--color-primary-dark)]",
  warning: "text-[#92400E]",
};

export default function SchoolOverview() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="School portal"
        title="Dhaka Residential Model College"
        description="Your STEM program at a glance — teams, workshops, events and Level Up progress."
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_1fr]">
        <LevelCard
          level={7}
          title="Innovation Hub"
          xp={2840}
          xpMax={4000}
          nextRank="Tech Leader"
        />

        <div className="grid grid-cols-2 gap-4">
          <StatCard label="Active teams" value="4" icon={Users2} />
          <StatCard
            tone="accent"
            label="Total trophies"
            value="14"
            delta={{ value: "+3", direction: "up" }}
            icon={Trophy}
          />
          <StatCard
            label="Workshops done"
            value="9 / 12"
            icon={GraduationCap}
          />
          <StatCard
            tone="primary"
            label="Students reached"
            value="124"
            icon={Rocket}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.2fr_1fr]">
        <Card>
          <CardHeader className="flex items-center justify-between">
            <div>
              <CardTitle>Teams on the ground</CardTitle>
              <p className="mt-1 text-sm text-[color:var(--color-text-secondary)]">
                3 technoLOgia-built teams — each with a leader, EEE and CSE
                member.
              </p>
            </div>
            <Link
              href="/dashboard/school/teams"
              className="text-sm font-semibold text-[color:var(--color-primary)] transition hover:text-[color:var(--color-accent)]"
            >
              Manage →
            </Link>
          </CardHeader>
          <CardContent className="space-y-3 p-5">
            {schoolTeams.map((t) => (
              <div
                key={t.id}
                className="flex items-center justify-between rounded-2xl border border-[color:var(--color-border)] bg-white p-4 transition hover:-translate-y-0.5 hover:border-[#BAE6FD] hover:shadow-[0_10px_28px_-16px_rgba(14,165,233,0.4)]"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#1B1464_0%,#0EA5E9_100%)] font-display text-sm font-bold text-white shadow-[0_8px_20px_-8px_rgba(14,165,233,0.5)]">
                    {t.name.split("-")[0].slice(0, 2)}
                  </span>
                  <div className="leading-tight">
                    <p className="font-display text-sm font-semibold text-[color:var(--color-primary-dark)]">
                      {t.name}
                    </p>
                    <p className="text-[11px] text-[color:var(--color-text-secondary)]">
                      Leader · {t.leader.split(" (")[0]}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <span className="flex items-center gap-1 rounded-full border border-[#BAE6FD] bg-[color:var(--color-accent-soft)] px-2.5 py-1 font-mono font-semibold text-[#075985]">
                    <Zap className="h-3 w-3" /> {t.xp} XP
                  </span>
                  <span className="inline-flex items-center gap-1 text-[color:var(--color-text-secondary)]">
                    <Trophy className="h-3.5 w-3.5 text-[#FCD34D]" /> {t.wins}
                  </span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-4 w-4 text-[color:var(--color-accent)]" />
              Alerts & updates
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 p-5">
            {alerts.map((a, i) => (
              <div
                key={i}
                className={`rounded-2xl border p-4 transition hover:-translate-y-0.5 ${toneMap[a.tone]}`}
              >
                <p
                  className={`font-display text-sm font-semibold ${toneTitle[a.tone]}`}
                >
                  {a.title}
                </p>
                <p className="mt-1 text-xs text-[color:var(--color-text-secondary)]">
                  {a.body}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-[color:var(--color-accent)]" />
              This week&rsquo;s workshops
            </CardTitle>
            <Link
              href="/dashboard/school/workshops"
              className="text-sm font-semibold text-[color:var(--color-primary)] transition hover:text-[color:var(--color-accent)]"
            >
              View schedule →
            </Link>
          </CardHeader>
          <CardContent className="space-y-3 p-5">
            {weeklyWorkshops.map((w) => (
              <div
                key={w.id}
                className="rounded-2xl border border-[color:var(--color-border)] bg-white p-4 transition hover:border-[#BAE6FD]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[color:var(--color-accent)]">
                    {w.day} · {w.time}
                  </span>
                  <span className="text-[11px] text-[color:var(--color-text-secondary)]">
                    Week {w.week}/{w.total}
                  </span>
                </div>
                <p className="mt-1.5 font-display text-base font-semibold text-[color:var(--color-primary-dark)]">
                  {w.topic}
                </p>
                <p className="mt-0.5 text-xs text-[color:var(--color-text-secondary)]">
                  Led by {w.lead}
                </p>
                <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-[color:var(--color-surface)]">
                  <div
                    className="h-full rounded-full bg-[linear-gradient(90deg,#1B1464_0%,#0EA5E9_100%)] shadow-[0_0_10px_rgba(14,165,233,0.4)]"
                    style={{ width: `${(w.week / w.total) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-[color:var(--color-accent)]" />
              Upcoming events
            </CardTitle>
            <Link
              href="/dashboard/school/events"
              className="text-sm font-semibold text-[color:var(--color-primary)] transition hover:text-[color:var(--color-accent)]"
            >
              All events →
            </Link>
          </CardHeader>
          <CardContent className="space-y-3 p-5">
            {upcomingEvents.slice(0, 3).map((e) => (
              <div
                key={e.id}
                className="flex items-center justify-between rounded-2xl border border-[color:var(--color-border)] bg-white p-4 transition hover:-translate-y-0.5 hover:border-[#BAE6FD] hover:shadow-[0_8px_22px_-16px_rgba(14,165,233,0.4)]"
              >
                <div>
                  <span className="inline-flex items-center gap-1 rounded-full border border-[#BAE6FD] bg-[color:var(--color-accent-soft)] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[#075985]">
                    {e.scope}
                  </span>
                  <p className="mt-1.5 font-display text-sm font-semibold text-[color:var(--color-primary-dark)]">
                    {e.title}
                  </p>
                  <p className="text-[11px] text-[color:var(--color-text-secondary)]">
                    {e.date} · {e.location}
                  </p>
                </div>
                <Link
                  href={e.registrationLink}
                  className="inline-flex items-center gap-1 rounded-full border border-[color:var(--color-border)] px-3 py-1.5 text-xs font-semibold text-[color:var(--color-primary)] transition hover:border-[#BAE6FD] hover:bg-[color:var(--color-accent-soft)] hover:text-[#075985]"
                >
                  Register <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
