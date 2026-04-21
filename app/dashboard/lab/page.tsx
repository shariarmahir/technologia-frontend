"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FlaskConical,
  Swords,
  Trophy,
  Users2,
  ArrowRight,
  CheckCircle2,
  Clock,
  Zap,
  Medal,
  TrendingUp,
} from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { StatCard } from "@/components/dashboard/stat-card";
import { LevelCard } from "@/components/dashboard/level-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  labWorkshops,
  labChallenges,
  labLeaderboard,
} from "@/lib/mock-data";

const upcoming = labWorkshops.filter((w) => w.status === "scheduled").slice(0, 2);
const activeChallenge = labChallenges.find((c) => c.status === "active");
const topFive = labLeaderboard.slice(0, 5);

const challengeStatus: Record<string, { label: string; color: string; bg: string }> = {
  open: { label: "Open", color: "#075985", bg: "#E0F2FE" },
  active: { label: "Active", color: "#B45309", bg: "#FEF3C7" },
  judging: { label: "Judging", color: "#9D174D", bg: "#FCE7F3" },
  completed: { label: "Completed", color: "#047857", bg: "#DCFCE7" },
};

export default function LabOverview() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="University lab portal"
        title="UAP Embedded Systems Lab"
        description="Track workshops, issue challenges, run competitions — your full lab dashboard."
        actions={
          <div className="flex gap-2">
            <Button href="/dashboard/lab/workshops" variant="primary" size="sm">
              <FlaskConical className="h-4 w-4" /> Log workshop
            </Button>
            <Button href="/dashboard/lab/challenges" variant="outline" size="sm">
              <Swords className="h-4 w-4" /> New challenge
            </Button>
          </div>
        }
      />

      {/* Stats row */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          tone="primary"
          label="Lab XP"
          value="3,960"
          delta={{ value: "+320", direction: "up" }}
          icon={Zap}
          hint="National rank #2"
        />
        <StatCard
          label="Workshops done"
          value="7 / 12"
          icon={FlaskConical}
          delta={{ value: "+2", direction: "up" }}
        />
        <StatCard
          label="Active challenges"
          value="1"
          icon={Swords}
        />
        <StatCard
          tone="accent"
          label="Competition wins"
          value="5"
          delta={{ value: "+2", direction: "up" }}
          icon={Trophy}
        />
      </div>

      {/* Level card + quick actions */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_1fr]">
        <LevelCard
          level={5}
          title="Research Hub"
          xp={3960}
          xpMax={5000}
          nextRank="Innovation Centre"
        />

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-[color:var(--color-accent)]" />
              National leaderboard
            </CardTitle>
            <p className="mt-1 text-sm text-[color:var(--color-text-secondary)]">
              Top university project labs by XP
            </p>
          </CardHeader>
          <CardContent className="space-y-2.5 p-5">
            {topFive.map((lab) => (
              <div
                key={lab.rank}
                className={`flex items-center gap-3 rounded-xl p-3 transition ${
                  lab.isOwn
                    ? "border border-[#BAE6FD] bg-[color:var(--color-accent-soft)]"
                    : "bg-[color:var(--color-surface)] hover:bg-white"
                }`}
              >
                <span
                  className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full font-mono text-xs font-bold ${
                    lab.rank === 1
                      ? "bg-[#FCD34D] text-[#78350F]"
                      : lab.rank === 2
                      ? "bg-[#CBD5E1] text-[#334155]"
                      : lab.rank === 3
                      ? "bg-[#C4A86B] text-white"
                      : "bg-[color:var(--color-border)] text-[color:var(--color-text-secondary)]"
                  }`}
                >
                  {lab.rank}
                </span>
                <div className="min-w-0 flex-1">
                  <p
                    className={`truncate text-[13px] font-semibold ${
                      lab.isOwn
                        ? "text-[#075985]"
                        : "text-[color:var(--color-primary-dark)]"
                    }`}
                  >
                    {lab.lab}
                    {lab.isOwn && (
                      <span className="ml-1.5 font-mono text-[9px] uppercase tracking-wider text-[#0EA5E9]">
                        you
                      </span>
                    )}
                  </p>
                  <p className="text-[11px] text-[color:var(--color-text-secondary)]">
                    {lab.university} · {lab.workshops} workshops
                  </p>
                </div>
                <span className="font-mono text-xs font-semibold text-[color:var(--color-accent)]">
                  {lab.xp.toLocaleString()} XP
                </span>
              </div>
            ))}
            <Link
              href="/dashboard/lab/leaderboard"
              className="flex items-center justify-center gap-1 pt-1 text-xs font-semibold text-[color:var(--color-primary)] transition hover:text-[color:var(--color-accent)]"
            >
              Full leaderboard <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming workshops + active challenge */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.2fr_1fr]">
        <Card>
          <CardHeader className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <FlaskConical className="h-4 w-4 text-[color:var(--color-accent)]" />
                Upcoming workshops
              </CardTitle>
              <p className="mt-1 text-sm text-[color:var(--color-text-secondary)]">
                Next scheduled sessions for your lab
              </p>
            </div>
            <Link
              href="/dashboard/lab/workshops"
              className="text-sm font-semibold text-[color:var(--color-primary)] hover:text-[color:var(--color-accent)]"
            >
              All workshops →
            </Link>
          </CardHeader>
          <CardContent className="space-y-4 p-5">
            {upcoming.map((w) => {
              const pct = Math.round((w.session / w.totalSessions) * 100);
              return (
                <motion.div
                  key={w.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="group rounded-2xl border border-[color:var(--color-border)] bg-white p-4 transition hover:border-[#BAE6FD] hover:shadow-[0_10px_28px_-16px_rgba(14,165,233,0.4)]"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-[color:var(--color-accent)]">
                          Session {w.session}/{w.totalSessions} · {w.day}
                        </span>
                        {!w.materials && (
                          <span className="rounded-full bg-[#FEF3C7] px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-[#B45309]">
                            Materials pending
                          </span>
                        )}
                      </div>
                      <p className="mt-1 font-display text-[15px] font-semibold text-[color:var(--color-primary-dark)]">
                        {w.topic}
                      </p>
                      <p className="mt-0.5 text-xs text-[color:var(--color-text-secondary)]">
                        {w.date} · {w.time} · Led by {w.lead}
                      </p>
                    </div>
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-[color:var(--color-accent-soft)] text-[color:var(--color-accent)]">
                      <FlaskConical className="h-4 w-4" />
                    </span>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[color:var(--color-surface)]">
                      <div
                        className="h-full rounded-full bg-[linear-gradient(90deg,#1B1464_0%,#0EA5E9_100%)]"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="font-mono text-[10px] text-[color:var(--color-text-secondary)]">
                      {pct}% done
                    </span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {w.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-2 py-0.5 font-mono text-[10px] text-[color:var(--color-text-secondary)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Swords className="h-4 w-4 text-[color:var(--color-accent)]" />
              Active challenge
            </CardTitle>
            <p className="mt-1 text-sm text-[color:var(--color-text-secondary)]">
              University-to-university live contest
            </p>
          </CardHeader>
          <CardContent className="p-5">
            {activeChallenge ? (
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-2xl border border-[#0EA5E9]/40 bg-[linear-gradient(135deg,#EFF9FF_0%,#E0F2FE_100%)] p-5">
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#0EA5E9]/20 blur-2xl" />
                  <div className="relative">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#BAE6FD] bg-white px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-[#075985]">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0EA5E9] opacity-75" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#0EA5E9]" />
                      </span>
                      {challengeStatus[activeChallenge.status].label}
                    </span>
                    <p className="mt-3 font-display text-base font-semibold text-[color:var(--color-primary-dark)]">
                      {activeChallenge.title}
                    </p>
                    <p className="mt-1 text-xs text-[color:var(--color-text-secondary)]">
                      vs. {activeChallenge.challenged}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <InfoTile
                    icon={<Clock className="h-3.5 w-3.5" />}
                    label="Deadline"
                    value={activeChallenge.deadline}
                  />
                  <InfoTile
                    icon={<Medal className="h-3.5 w-3.5" />}
                    label="XP prize"
                    value={`+${activeChallenge.xpPrize} XP`}
                  />
                </div>

                <div className="rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-3">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-[color:var(--color-text-secondary)]">
                    Judging rubric
                  </p>
                  <p className="mt-1 text-xs text-[color:var(--color-text-primary)]">
                    {activeChallenge.rubric}
                  </p>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-[color:var(--color-border)] bg-white p-3">
                  <div className="flex items-center gap-2">
                    {activeChallenge.submissions.challenger ? (
                      <CheckCircle2 className="h-4 w-4 text-[#10B981]" />
                    ) : (
                      <Clock className="h-4 w-4 text-[#F59E0B]" />
                    )}
                    <span className="text-xs text-[color:var(--color-text-secondary)]">
                      Your submission
                    </span>
                  </div>
                  <Button href="/dashboard/lab/challenges" variant="primary" size="sm">
                    Submit now
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-4 py-6 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[color:var(--color-accent-soft)] text-[color:var(--color-accent)]">
                  <Swords className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-semibold text-[color:var(--color-primary-dark)]">
                    No active challenges
                  </p>
                  <p className="mt-1 text-sm text-[color:var(--color-text-secondary)]">
                    Issue a challenge to another university lab.
                  </p>
                </div>
                <Button href="/dashboard/lab/challenges" variant="sky" size="sm" glow>
                  Issue a challenge
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Members quick view */}
      <Card>
        <CardHeader className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Users2 className="h-4 w-4 text-[color:var(--color-accent)]" />
              Lab members
            </CardTitle>
            <p className="mt-1 text-sm text-[color:var(--color-text-secondary)]">
              Active members & advisors in UAP Embedded Systems Lab
            </p>
          </div>
          <Link
            href="/dashboard/lab/members"
            className="text-sm font-semibold text-[color:var(--color-primary)] hover:text-[color:var(--color-accent)]"
          >
            Manage →
          </Link>
        </CardHeader>
        <CardContent className="p-5">
          <div className="flex flex-wrap gap-3">
            {[
              { name: "Dr. Mehedi Hassan", role: "Faculty Advisor", level: "Advisor" },
              { name: "Raisa Hossain", role: "Lab Captain", level: "Lead" },
              { name: "Adib Rahman", role: "EEE · IoT Lead", level: "Core" },
              { name: "Tashfia K.", role: "CSE · ML Lead", level: "Core" },
              { name: "Nafis H.", role: "Hardware", level: "Core" },
              { name: "Sara Ahmed", role: "Researcher", level: "Member" },
              { name: "Rafi Khan", role: "Software", level: "Member" },
              { name: "+18 more", role: "", level: "Member" },
            ].map((m, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 rounded-xl border border-[color:var(--color-border)] bg-white px-3 py-2 transition hover:border-[#BAE6FD] hover:shadow-[0_6px_18px_-12px_rgba(14,165,233,0.5)]"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[linear-gradient(135deg,#1B1464_0%,#0EA5E9_100%)] text-[11px] font-semibold text-white">
                  {m.name[0]}
                </span>
                <div className="leading-tight">
                  <p className="text-xs font-semibold text-[color:var(--color-primary-dark)]">
                    {m.name}
                  </p>
                  {m.role && (
                    <p className="text-[10px] text-[color:var(--color-text-secondary)]">
                      {m.role}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function InfoTile({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col gap-1 rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-3">
      <div className="flex items-center gap-1.5 text-[color:var(--color-text-secondary)]">
        {icon}
        <span className="font-mono text-[10px] uppercase tracking-wider">{label}</span>
      </div>
      <p className="font-display text-sm font-semibold text-[color:var(--color-primary-dark)]">
        {value}
      </p>
    </div>
  );
}
