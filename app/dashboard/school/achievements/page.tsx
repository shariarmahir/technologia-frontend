"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Medal,
  Share2,
  Download,
  Sparkles,
  Calendar,
  Flame,
  Award,
  Star,
  Gem,
  Crown,
} from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { GlassButton } from "@/components/ui/glass-button";
import { LevelCard } from "@/components/dashboard/level-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { achievements } from "@/lib/mock-data";

const rankLadder = [
  { level: 1, name: "Starter Lab", icon: Star },
  { level: 3, name: "Rising Lab", icon: Sparkles },
  { level: 5, name: "Explorer", icon: Medal },
  { level: 7, name: "Innovation Hub", icon: Gem, current: true },
  { level: 9, name: "Tech Leader", icon: Award },
  { level: 12, name: "Legacy", icon: Crown },
];

const trophyColors = [
  "from-[#FCD34D] to-[#F59E0B]",
  "from-[#E5E7EB] to-[#94A3B8]",
  "from-[#CD7F32] to-[#92400E]",
  "from-[#A78BFA] to-[#7C3AED]",
  "from-[#60A5FA] to-[#1E40AF]",
  "from-[#34D399] to-[#10B981]",
];

export default function AchievementShowcasePage() {
  const trophies = achievements.filter((a) => a.type === "trophy");
  const badges = achievements.filter((a) => a.type === "badge");
  const memories = achievements.filter(
    (a) => a.type === "event_memory" || a.type === "competition_record"
  );

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Public portfolio"
        title="Achievement Showcase"
        description="A shareable public profile — trophies, badges, memories and your school's Level Up journey."
        actions={
          <>
            <GlassButton size="sm">
              <Download className="h-4 w-4" /> Export as PDF
            </GlassButton>
            <GlassButton variant="primary" size="sm">
              <Share2 className="h-4 w-4" /> Share portfolio
            </GlassButton>
          </>
        }
      />

      {/* Level + Rank ladder */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.2fr]">
        <LevelCard
          level={7}
          title="Innovation Hub"
          xp={2840}
          xpMax={4000}
          nextRank="Tech Leader"
        />

        <Card>
          <CardHeader>
            <CardTitle>Rank ladder</CardTitle>
            <p className="mt-1 text-sm text-[color:var(--color-text-secondary)]">
              Earn XP from competitions, events, workshops and wins.
            </p>
          </CardHeader>
          <CardContent>
            <ol className="relative grid grid-cols-3 gap-3 sm:grid-cols-6">
              {rankLadder.map((r, i) => {
                const Icon = r.icon;
                const passed = r.level <= 7;
                return (
                  <motion.li
                    key={r.level}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className={`flex flex-col items-center gap-2 rounded-2xl border p-3 text-center transition ${
                      r.current
                        ? "border-[color:var(--color-accent)] bg-[color:var(--color-surface-alt)] shadow-[0_8px_24px_-8px_rgba(124,58,237,0.35)]"
                        : passed
                        ? "border-[color:var(--color-border)] bg-white"
                        : "border-dashed border-[color:var(--color-border)] bg-[color:var(--color-surface)]/60"
                    }`}
                  >
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                        passed
                          ? "bg-gradient-to-br from-[#1B1464] to-[#7C3AED] text-white"
                          : "bg-[color:var(--color-surface)] text-[color:var(--color-text-secondary)]"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-[color:var(--color-text-secondary)]">
                      Lv {r.level}
                    </p>
                    <p className="text-[11px] font-semibold leading-tight text-[color:var(--color-primary-dark)]">
                      {r.name}
                    </p>
                  </motion.li>
                );
              })}
            </ol>
          </CardContent>
        </Card>
      </div>

      {/* Trophy shelf */}
      <Card>
        <CardHeader className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-4 w-4 text-[#F59E0B]" />
            Trophy shelf
          </CardTitle>
          <span className="rounded-full bg-[color:var(--color-surface)] px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-[color:var(--color-text-secondary)]">
            {trophies.length} trophies
          </span>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {trophies.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 14, rotate: -3 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col items-center gap-3 rounded-2xl border border-[color:var(--color-border)] bg-gradient-to-b from-white to-[color:var(--color-surface)] p-5 text-center shadow-[0_8px_24px_-12px_rgba(15,11,61,0.18)]"
              >
                <div
                  className={`relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${
                    trophyColors[i % trophyColors.length]
                  } shadow-[0_10px_30px_-8px_rgba(245,158,11,0.5)]`}
                >
                  <div className="absolute inset-1 rounded-full border border-white/40" />
                  <Trophy className="relative h-9 w-9 text-white drop-shadow" />
                </div>
                <p className="font-display text-sm font-semibold leading-tight text-[color:var(--color-primary-dark)]">
                  {t.title}
                </p>
                <p className="text-[11px] text-[color:var(--color-text-secondary)]">
                  {t.date} · {t.team}
                </p>
                <span className="rounded-full bg-[color:var(--color-surface-alt)] px-2 py-0.5 font-mono text-[10px] font-semibold text-[color:var(--color-accent)]">
                  +{t.xp} XP
                </span>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Team of the month + memories */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.2fr]">
        <Card className="overflow-hidden">
          <div className="relative bg-gradient-to-br from-[#0F0B3D] via-[#1B1464] to-[#7C3AED] p-6 text-white">
            <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[#A78BFA]/40 blur-3xl" />
            <div className="absolute -bottom-16 -left-10 h-52 w-52 rounded-full bg-[#7C3AED]/30 blur-3xl" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em]">
                <Flame className="h-3 w-3 text-[#FCD34D]" />
                Team of the Month · April
              </span>
              <p className="mt-4 font-display text-2xl font-semibold">
                Team Voltaire-3
              </p>
              <p className="mt-1 text-sm text-white/70">
                IoT Smart-Lab Hackathon · 1st place · +320 XP
              </p>

              <div className="mt-5 flex items-center gap-3">
                {["R", "A", "T"].map((ch, i) => (
                  <motion.span
                    key={i}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 font-display text-sm font-bold backdrop-blur-md"
                  >
                    {ch}
                  </motion.span>
                ))}
              </div>

              <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-[color:var(--color-accent-light)]">
                Wearable badge — display on school dress
              </p>
              <div className="mt-3 inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-md">
                <Medal className="h-5 w-5 text-[#FCD34D]" />
                <span className="font-display text-sm font-semibold">
                  Winners Patch · DRMC / April
                </span>
              </div>
            </div>
          </div>

          {badges.length > 0 && (
            <CardContent className="space-y-2">
              <p className="font-mono text-[10px] uppercase tracking-wider text-[color:var(--color-accent)]">
                Additional badges
              </p>
              {badges.map((b) => (
                <div
                  key={b.id}
                  className="flex items-center justify-between rounded-xl border border-[color:var(--color-border)] bg-white p-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#A78BFA] to-[#7C3AED] text-white">
                      <Medal className="h-4 w-4" />
                    </span>
                    <div className="leading-tight">
                      <p className="text-sm font-semibold text-[color:var(--color-primary-dark)]">
                        {b.title}
                      </p>
                      <p className="text-[11px] text-[color:var(--color-text-secondary)]">
                        {b.date} · {b.team}
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-semibold text-[color:var(--color-accent)]">
                    +{b.xp} XP
                  </span>
                </div>
              ))}
            </CardContent>
          )}
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-[color:var(--color-accent)]" />
              Memories & records
            </CardTitle>
            <p className="mt-1 text-sm text-[color:var(--color-text-secondary)]">
              Competition history + event notes — the story of the school&rsquo;s journey.
            </p>
          </CardHeader>
          <CardContent>
            <ol className="relative space-y-0">
              {memories.map((m, i) => (
                <motion.li
                  key={m.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="relative pb-6 pl-8 last:pb-0"
                >
                  {i !== memories.length - 1 && (
                    <span className="absolute left-3 top-6 h-full w-px bg-[color:var(--color-border)]" />
                  )}
                  <span
                    className={`absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full ${
                      m.type === "event_memory"
                        ? "bg-[color:var(--color-accent)] text-white"
                        : "bg-[color:var(--color-primary)] text-white"
                    }`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-[color:var(--color-text-secondary)]">
                      {m.date} · {m.type === "event_memory" ? "Event memory" : "Competition"}
                    </p>
                    <p className="mt-0.5 font-display text-sm font-semibold text-[color:var(--color-primary-dark)]">
                      {m.title}
                    </p>
                    <p className="mt-0.5 text-xs text-[color:var(--color-text-secondary)]">
                      {m.team} · +{m.xp} XP
                    </p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </div>

      {/* Share CTA */}
      <Card className="overflow-hidden">
        <div className="relative bg-gradient-to-r from-[#0F0B3D] via-[#1B1464] to-[#2E21A3] p-7 text-white sm:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(167,139,250,0.4),transparent_50%)]" />
          <div className="relative grid grid-cols-1 items-center gap-6 sm:grid-cols-[1fr_auto]">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-accent-light)]">
                Shareable public portfolio
              </p>
              <p className="mt-2 font-display text-2xl font-semibold">
                technologia.app/s/drmc
              </p>
              <p className="mt-1 max-w-lg text-sm text-white/70">
                A verified link students and parents can visit. Use it on admission brochures, school websites, or marketing materials.
              </p>
            </div>
            <div className="flex gap-2">
              <GlassButton variant="ghost" size="sm">
                Copy link
              </GlassButton>
              <GlassButton variant="primary" size="sm">
                <Share2 className="h-4 w-4" /> Share
              </GlassButton>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
