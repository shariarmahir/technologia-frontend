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
      className="relative overflow-hidden rounded-[28px] border border-[#1E40AF]/50 bg-[linear-gradient(135deg,#0A0930_0%,#1B1464_50%,#0369A1_120%)] p-7 text-white shadow-[0_30px_80px_-20px_rgba(14,20,70,0.55)]"
    >
      <div className="hero-grid absolute inset-0 opacity-40" />
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#0EA5E9]/45 blur-3xl" />
      <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-[#38BDF8]/25 blur-3xl" />

      <div className="relative flex items-start justify-between">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[#7DD3FC]">
            <Sparkles className="h-3 w-3" /> Current rank
          </span>
          <p className="mt-3 font-display text-[2rem] font-semibold leading-tight tracking-[-0.01em]">
            Level {level.toString().padStart(2, "0")} · {title}
          </p>
          <p className="mt-1 text-sm text-white/70">
            {xpMax - xp} XP to unlock{" "}
            <span className="text-[#7DD3FC]">{nextRank}</span>
          </p>
        </div>
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-[0_10px_30px_-10px_rgba(56,189,248,0.35)]">
          <Trophy className="h-6 w-6 text-[#38BDF8]" />
        </span>
      </div>

      <div className="relative mt-7">
        <div className="flex items-end justify-between text-xs">
          <span className="text-white/65">
            XP ·{" "}
            <span className="font-mono text-white">{xp.toLocaleString()}</span> /{" "}
            {xpMax.toLocaleString()}
          </span>
          <span className="font-mono text-white/80">{pct}%</span>
        </div>
        <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-white/10 backdrop-blur-sm">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative h-full rounded-full bg-[linear-gradient(90deg,#38BDF8_0%,#0EA5E9_100%)] shadow-[0_0_24px_rgba(56,189,248,0.75)]"
          >
            <span className="absolute inset-0 rounded-full bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.5)_50%,transparent_100%)] mix-blend-overlay" />
          </motion.div>
        </div>
      </div>

      <button className="group/btn relative mt-7 inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-[linear-gradient(135deg,#0EA5E9_0%,#38BDF8_100%)] px-4 py-2 text-xs font-semibold text-white shadow-[0_10px_30px_-8px_rgba(14,165,233,0.75)] transition hover:brightness-110">
        <span className="pointer-events-none absolute inset-0 -translate-x-full -skew-x-12 bg-white/30 transition-transform duration-700 group-hover/btn:translate-x-[220%]" />
        Trigger Level Up review
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
      </button>
    </motion.div>
  );
}
