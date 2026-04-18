"use client";

import { motion } from "framer-motion";
import { Trophy, Sparkles, ArrowUpRight } from "lucide-react";

export function LevelCard({
  level,
  title,
  xp,
  xpMax,
  nextRank = "Tech Leader",
}: {
  level: number;
  title: string;
  xp: number;
  xpMax: number;
  nextRank?: string;
}) {
  const pct = Math.round((xp / xpMax) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-[28px] border border-[#2E21A3]/50 bg-gradient-to-br from-[#0F0B3D] via-[#1B1464] to-[#2E21A3] p-7 text-white shadow-[0_30px_80px_-20px_rgba(27,20,100,0.5)]"
    >
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#7C3AED]/40 blur-3xl" />
      <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-[#A78BFA]/30 blur-3xl" />

      <div className="relative flex items-start justify-between">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-accent-light)]">
            <Sparkles className="h-3 w-3" /> Current rank
          </span>
          <p className="mt-3 font-display text-[2rem] font-semibold leading-tight">
            Level {level.toString().padStart(2, "0")} · {title}
          </p>
          <p className="mt-1 text-sm text-white/70">
            {xpMax - xp} XP to unlock{" "}
            <span className="text-[color:var(--color-accent-light)]">
              {nextRank}
            </span>
          </p>
        </div>
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md">
          <Trophy className="h-6 w-6 text-[#FCD34D]" />
        </span>
      </div>

      <div className="relative mt-7">
        <div className="flex items-end justify-between text-xs">
          <span className="text-white/65">
            XP · <span className="font-mono text-white">{xp.toLocaleString()}</span> / {xpMax.toLocaleString()}
          </span>
          <span className="font-mono text-white/80">{pct}%</span>
        </div>
        <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-white/10 backdrop-blur-sm">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="h-full rounded-full bg-gradient-to-r from-[#A78BFA] to-[#7C3AED] shadow-[0_0_24px_rgba(167,139,250,0.7)]"
          />
        </div>
      </div>

      <button className="relative mt-7 inline-flex items-center gap-1.5 rounded-full bg-[#7C3AED] px-4 py-2 text-xs font-semibold text-white shadow-[0_10px_30px_-10px_rgba(124,58,237,0.8)] transition hover:bg-[color:var(--color-accent-light)]">
        Trigger Level Up review
        <ArrowUpRight className="h-3.5 w-3.5" />
      </button>
    </motion.div>
  );
}
