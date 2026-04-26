"use client";

import { motion } from "framer-motion";
import { Trophy, FlaskConical, Swords, TrendingUp } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { labLeaderboard } from "@/lib/mock-data";

const medals = ["#38BDF8", "#CBD5E1", "#C4A86B"];
const medalBg = ["bg-[#E0F2FE] text-[#075985]", "bg-[#F1F5F9] text-[#334155]", "bg-[#FEF3E2] text-[#7C2D12]"];

export default function LeaderboardPage() {
  const top3 = labLeaderboard.slice(0, 3);
  const rest = labLeaderboard.slice(3);

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Lab portal · leaderboard"
        title="National lab rankings"
        description="How university project labs rank — attendance, outputs, challenge wins. Updated weekly."
      />

      {/* Podium */}
      <div className="relative overflow-hidden rounded-[28px] border border-[#1E40AF]/40 bg-[linear-gradient(135deg,#0A0930_0%,#1B1464_55%,#0369A1_120%)] p-8">
        <div className="hero-grid absolute inset-0 opacity-30" />
        <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#0EA5E9]/40 blur-3xl" />
        <div className="absolute -bottom-20 -left-10 h-60 w-60 rounded-full bg-[#38BDF8]/25 blur-3xl" />

        <div className="relative mb-8 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#7DD3FC]">
            Top 3 labs · Spring 2026
          </p>
        </div>

        <div className="relative flex items-end justify-center gap-4">
          {/* 2nd place */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex w-[30%] max-w-[180px] flex-col items-center gap-2"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-[#CBD5E1] bg-white/10 text-xl font-bold text-[#CBD5E1]">
              2
            </span>
            <div className="flex h-24 w-full flex-col items-center justify-end rounded-t-xl bg-[#CBD5E1]/20 pb-3">
              <p className="px-2 text-center font-display text-xs font-semibold text-white">
                {top3[1].lab}
              </p>
              <p className="font-mono text-[10px] text-white/60">{top3[1].university}</p>
              <p className="mt-1 font-mono text-sm font-bold text-[#CBD5E1]">
                {top3[1].xp.toLocaleString()} XP
              </p>
            </div>
          </motion.div>

          {/* 1st place */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex w-[34%] max-w-[200px] flex-col items-center gap-2"
          >
            <Trophy className="h-8 w-8 text-[#38BDF8]" />
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-[#38BDF8] bg-[#38BDF8]/20 text-2xl font-bold text-[#38BDF8]">
              1
            </span>
            <div className="flex h-36 w-full flex-col items-center justify-end rounded-t-xl bg-[#38BDF8]/20 pb-4 shadow-[0_-8px_40px_-10px_rgba(56,189,248,0.4)]">
              <p className="px-2 text-center font-display text-sm font-semibold text-white">
                {top3[0].lab}
              </p>
              <p className="font-mono text-[10px] text-white/60">{top3[0].university}</p>
              <p className="mt-1 font-mono text-base font-bold text-[#38BDF8]">
                {top3[0].xp.toLocaleString()} XP
              </p>
            </div>
          </motion.div>

          {/* 3rd place */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex w-[30%] max-w-[180px] flex-col items-center gap-2"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-[#C4A86B] bg-white/10 text-lg font-bold text-[#C4A86B]">
              3
            </span>
            <div className="flex h-20 w-full flex-col items-center justify-end rounded-t-xl bg-[#C4A86B]/20 pb-3">
              <p className="px-2 text-center font-display text-xs font-semibold text-white">
                {top3[2].lab}
              </p>
              <p className="font-mono text-[10px] text-white/60">{top3[2].university}</p>
              <p className="mt-1 font-mono text-sm font-bold text-[#C4A86B]">
                {top3[2].xp.toLocaleString()} XP
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Full table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-[color:var(--color-accent)]" />
            Full standings
          </CardTitle>
          <p className="mt-1 text-sm text-[color:var(--color-text-secondary)]">
            Ranked by total XP — workshops, challenges, and competition wins
          </p>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[color:var(--color-border)] text-left font-mono text-[10px] uppercase tracking-wider text-[color:var(--color-text-secondary)]">
                  <th className="px-6 py-3">Rank</th>
                  <th className="px-3 py-3">Lab · University</th>
                  <th className="px-3 py-3">XP</th>
                  <th className="hidden px-3 py-3 sm:table-cell">
                    <span className="flex items-center gap-1">
                      <FlaskConical className="h-3 w-3" /> Workshops
                    </span>
                  </th>
                  <th className="hidden px-3 py-3 md:table-cell">
                    <span className="flex items-center gap-1">
                      <Swords className="h-3 w-3" /> Wins
                    </span>
                  </th>
                  <th className="hidden px-6 py-3 lg:table-cell">Progress</th>
                </tr>
              </thead>
              <tbody>
                {labLeaderboard.map((lab, i) => {
                  const maxXp = labLeaderboard[0].xp;
                  const pct = Math.round((lab.xp / maxXp) * 100);
                  return (
                    <motion.tr
                      key={lab.rank}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.35, delay: i * 0.05 }}
                      className={`border-b border-[color:var(--color-border)]/60 last:border-0 transition ${
                        lab.isOwn
                          ? "bg-[color:var(--color-accent-soft)] hover:bg-[#D0EDFB]"
                          : "hover:bg-[color:var(--color-surface)]"
                      }`}
                    >
                      <td className="px-6 py-3.5">
                        <span
                          className={`flex h-7 w-7 items-center justify-center rounded-full font-mono text-xs font-bold ${
                            lab.rank <= 3
                              ? medalBg[lab.rank - 1]
                              : "bg-[color:var(--color-surface)] text-[color:var(--color-text-secondary)]"
                          }`}
                        >
                          {lab.rank}
                        </span>
                      </td>
                      <td className="px-3 py-3.5">
                        <p className="font-display text-sm font-semibold text-[color:var(--color-primary-dark)]">
                          {lab.lab}
                          {lab.isOwn && (
                            <span className="ml-2 rounded-full bg-[#0EA5E9] px-1.5 py-0.5 font-mono text-[9px] text-white">
                              You
                            </span>
                          )}
                        </p>
                        <p className="text-[11px] text-[color:var(--color-text-secondary)]">
                          {lab.university}
                        </p>
                      </td>
                      <td className="px-3 py-3.5 font-mono text-sm font-semibold text-[color:var(--color-accent)]">
                        {lab.xp.toLocaleString()}
                      </td>
                      <td className="hidden px-3 py-3.5 text-[color:var(--color-text-secondary)] sm:table-cell">
                        {lab.workshops}
                      </td>
                      <td className="hidden px-3 py-3.5 text-[color:var(--color-text-secondary)] md:table-cell">
                        {lab.wins}
                      </td>
                      <td className="hidden px-6 py-3.5 lg:table-cell">
                        <div className="flex items-center gap-2">
                          <div className="h-1.5 w-24 overflow-hidden rounded-full bg-[color:var(--color-border)]">
                            <div
                              className="h-full rounded-full bg-[linear-gradient(90deg,#1B1464_0%,#0EA5E9_100%)]"
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                          <span className="font-mono text-[10px] text-[color:var(--color-text-secondary)]">
                            {pct}%
                          </span>
                        </div>
                      </td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
