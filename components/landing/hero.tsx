"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Clock,
  Building2,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BackgroundCanvas } from "@/components/landing/background-canvas";

const statCards = [
  { k: "2,400+", v: "Orders delivered",   icon: TrendingUp },
  { k: "48 hr",  v: "Avg. turnaround",    icon: Clock      },
  { k: "18",     v: "Partner schools",    icon: Building2  },
  { k: "96%",    v: "Verified pass rate", icon: Star       },
];

/* ── Floating glassmorphism card ─────────────────────────────────── */
function FloatCard({
  children,
  pos,
  delay = 0,
  ySign = 1,
  period = 4.5,
}: {
  children: React.ReactNode;
  pos: string;
  delay?: number;
  ySign?: 1 | -1;
  period?: number;
}) {
  return (
    <motion.div
      className={`absolute hidden sm:block ${pos}`}
      initial={{ opacity: 0, scale: 0.72 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        animate={{ y: [0, ySign * 9, 0] }}
        transition={{ repeat: Infinity, duration: period, ease: "easeInOut", delay }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/* ── Holographic orbital core ────────────────────────────────────── */
function HolographicCore() {
  return (
    <div
      className="relative mx-auto flex items-center justify-center"
      style={{ width: "min(540px, 88vw)", height: "min(540px, 88vw)" }}
    >
      {/* Ambient glow */}
      <div className="absolute h-72 w-72 rounded-full bg-[#003A6E] opacity-40 blur-[100px]" />
      <div className="absolute h-52 w-52 rounded-full bg-[#FFD662] opacity-[0.07] blur-[80px]" />

      {/* Blue radar pulses */}
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={`rp${i}`}
          className="absolute rounded-full border border-[#00539C]/18"
          initial={{ width: 72, height: 72, opacity: 0.65 }}
          animate={{ width: 560, height: 560, opacity: 0 }}
          transition={{ repeat: Infinity, duration: 7, delay: i * 1.4, ease: "easeOut" }}
        />
      ))}

      {/* Amber pulses */}
      {[0, 1].map((i) => (
        <motion.div
          key={`ap${i}`}
          className="absolute rounded-full border border-[#FFD662]/16"
          initial={{ width: 52, height: 52, opacity: 0.75 }}
          animate={{ width: 175, height: 175, opacity: 0 }}
          transition={{ repeat: Infinity, duration: 3, delay: i * 1.5, ease: "easeOut" }}
        />
      ))}

      {/* 3-D perspective rings */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ perspective: "720px" }}
      >
        {/* Ring 1 — tight, equatorial */}
        <motion.div
          className="absolute"
          style={{ width: 172, height: 172, rotateX: 76 }}
          animate={{ rotateZ: 360 }}
          transition={{ repeat: Infinity, duration: 9, ease: "linear" }}
        >
          <div className="h-full w-full rounded-full border-[1.5px] border-[#00539C]/65" />
          <div className="absolute -top-[5px] left-1/2 h-[11px] w-[11px] -translate-x-1/2 rounded-full bg-[#FFD662] shadow-[0_0_16px_7px_rgba(255,214,98,0.72)]" />
          <div className="absolute -bottom-[4px] left-1/2 h-[7px] w-[7px] -translate-x-1/2 rounded-full bg-white/50" />
        </motion.div>

        {/* Ring 2 — mid, tilted, dashed, blue node */}
        <motion.div
          className="absolute"
          style={{ width: 272, height: 272, rotateX: 66, rotateY: -22 }}
          animate={{ rotateZ: -360 }}
          transition={{ repeat: Infinity, duration: 17, ease: "linear" }}
        >
          <div className="h-full w-full rounded-full border border-dashed border-[#0EA5E9]/32" />
          <div className="absolute -top-[5px] left-1/2 h-[9px] w-[9px] -translate-x-1/2 rounded-full bg-[#0EA5E9] shadow-[0_0_13px_5px_rgba(14,165,233,0.68)]" />
          <div className="absolute -bottom-[4px] right-[11%] h-[6px] w-[6px] rounded-full bg-[#38BDF8]/55" />
        </motion.div>

        {/* Ring 3 — outer, near-flat, green node */}
        <motion.div
          className="absolute"
          style={{ width: 372, height: 372, rotateX: 83, rotateY: 12 }}
          animate={{ rotateZ: 360 }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          <div className="h-full w-full rounded-full border border-[#10B981]/20" />
          <div className="absolute top-[1px] left-1/2 h-[8px] w-[8px] -translate-x-1/2 rounded-full bg-[#10B981] shadow-[0_0_13px_5px_rgba(16,185,129,0.58)]" />
          <div className="absolute bottom-[2px] left-[28%] h-[5px] w-[5px] rounded-full bg-[#10B981]/45" />
        </motion.div>

        {/* Ring 4 — outermost, very flat, white node */}
        <motion.div
          className="absolute"
          style={{ width: 480, height: 480, rotateX: 87, rotateY: -14 }}
          animate={{ rotateZ: -360 }}
          transition={{ repeat: Infinity, duration: 46, ease: "linear" }}
        >
          <div className="h-full w-full rounded-full border border-white/6" />
          <div className="absolute -top-[3px] left-[42%] h-[5px] w-[5px] rounded-full bg-white/38" />
        </motion.div>
      </div>

      {/* Central sphere */}
      <motion.div
        className="relative z-10 h-36 w-36 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 32% 28%, #56CCF2 0%, #0066B8 35%, #001330 100%)",
          boxShadow:
            "0 0 84px 32px rgba(0,83,156,0.55), 0 0 170px 85px rgba(0,83,156,0.18), inset 0 0 34px rgba(255,255,255,0.07)",
        }}
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
      >
        <div className="absolute top-4 left-6 h-6 w-6 rounded-full bg-white opacity-[0.18] blur-md" />
        <div className="absolute top-7 left-9 h-2 w-2 rounded-full bg-white opacity-[0.55] blur-[2px]" />
        <div className="absolute bottom-6 right-5 h-3 w-3 rounded-full bg-[#FFD662] opacity-[0.12] blur-sm" />
        <motion.div
          className="absolute inset-x-0 top-0 h-px rounded-full bg-gradient-to-r from-transparent via-white/50 to-transparent"
          animate={{ y: [0, 144] }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear", repeatDelay: 1.2 }}
        />
      </motion.div>

      {/* ── Floating cards ── */}

      {/* Top-right — new order */}
      <FloatCard pos="-right-2 top-[6%] sm:-right-6 lg:-right-12" delay={0.9} ySign={-1} period={4.8}>
        <div className="w-[164px] rounded-2xl border border-white/12 bg-[#001830]/90 px-3.5 py-3 shadow-[0_24px_56px_rgba(0,0,0,0.6)] backdrop-blur-xl">
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#34D399]" />
            <p className="font-mono text-[8px] uppercase tracking-widest text-[#34D399]">New order</p>
          </div>
          <p className="mt-1.5 text-[12px] font-semibold text-white leading-snug">EEE Lab · Circuit Sim</p>
          <p className="mt-0.5 text-[10px] text-white/45">48 hrs · $35</p>
        </div>
      </FloatCard>

      {/* Left — earnings */}
      <FloatCard pos="-left-2 top-[26%] sm:-left-6 lg:-left-12" delay={1.1} ySign={1} period={5.2}>
        <div className="w-[150px] rounded-2xl border border-[#FFD662]/22 bg-[#FFD662]/10 px-3.5 py-3 shadow-[0_24px_56px_rgba(255,214,98,0.14)] backdrop-blur-xl">
          <p className="font-mono text-[8px] uppercase tracking-widest text-[#FFE48A]">Top earner</p>
          <p className="mt-1 font-display text-[22px] font-bold text-white">৳45,200</p>
          <p className="mt-0.5 text-[10px] text-white/45">This month</p>
        </div>
      </FloatCard>

      {/* Bottom-right — professor verified */}
      <FloatCard pos="bottom-[8%] -right-2 sm:-right-6 lg:-right-12" delay={1.3} ySign={1} period={4.3}>
        <div className="flex w-[158px] items-center gap-2.5 rounded-2xl border border-[#10B981]/24 bg-[#10B981]/10 px-3.5 py-3 shadow-[0_24px_56px_rgba(16,185,129,0.12)] backdrop-blur-xl">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-[#10B981]/20">
            <ShieldCheck className="h-4 w-4 text-[#34D399]" />
          </div>
          <div>
            <p className="text-[11px] font-semibold text-white">Prof. verified</p>
            <p className="text-[9px] text-white/45">UAP · EEE dept</p>
          </div>
        </div>
      </FloatCard>

      {/* Bottom-left — online workers */}
      <FloatCard pos="bottom-[28%] -left-2 sm:-left-6 lg:-left-12" delay={1.5} ySign={-1} period={5.8}>
        <div className="w-[148px] rounded-2xl border border-[#0EA5E9]/20 bg-[#0EA5E9]/10 px-3.5 py-3 shadow-[0_24px_56px_rgba(14,165,233,0.1)] backdrop-blur-xl">
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#38BDF8]" />
            <p className="font-mono text-[8px] uppercase tracking-widest text-[#7DD3FC]">Online now</p>
          </div>
          <p className="mt-1 font-display text-[20px] font-bold text-white">247</p>
          <p className="mt-0.5 text-[10px] text-white/45">Active workers</p>
        </div>
      </FloatCard>
    </div>
  );
}

/* ── Hero section ────────────────────────────────────────────────── */
export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#00091F]">

      {/* Particle canvas */}
      <BackgroundCanvas />

      {/* Aurora gradient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-[3%] top-[-22%] h-[750px] w-[750px] rounded-full bg-[#00539C] opacity-[0.13] blur-[150px]"
          animate={{ x: [0, 60, 0], y: [0, 55, 0] }}
          transition={{ repeat: Infinity, duration: 22, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[-8%] top-[-12%] h-[650px] w-[650px] rounded-full bg-[#003A6E] opacity-[0.16] blur-[140px]"
          animate={{ x: [0, -50, 0], y: [0, 72, 0] }}
          transition={{ repeat: Infinity, duration: 28, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-18%] left-[28%] h-[600px] w-[600px] rounded-full bg-[#FFD662] opacity-[0.042] blur-[130px]"
          animate={{ x: [0, 42, 0], y: [0, -40, 0] }}
          transition={{ repeat: Infinity, duration: 19, ease: "easeInOut" }}
        />
      </div>

      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.13]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,83,156,0.6) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Horizontal shimmer line near top */}
      <div className="pointer-events-none absolute top-[56px] inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

      {/* Content — centered column */}
      <div className="relative flex min-h-screen flex-col items-center justify-center px-5 pb-12 pt-28 sm:pt-32">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="inline-flex items-center gap-2.5 rounded-full border border-white/14 bg-white/[0.05] px-4 py-1.5 backdrop-blur-lg"
        >
          <span className="relative flex h-2 w-2 flex-shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FFD662] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FFD662]" />
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/70 sm:text-[11px]">
            Bangladesh&rsquo;s academic delivery platform
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, delay: 0.1 }}
          className="mt-7 max-w-4xl text-center font-display text-[3rem] font-black leading-[1.01] tracking-[-0.04em] text-white sm:text-[4.2rem] lg:text-[5.6rem] xl:text-[6.2rem]"
        >
          We build the work{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-[#FFD662] via-[#FFE48A] to-[#FFF5C2] bg-clip-text text-transparent">
              you need
            </span>
            <svg
              className="absolute -bottom-2 left-0 h-[5px] w-full"
              viewBox="0 0 300 6"
              fill="none"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M0 5 Q75 1 150 4 T300 4"
                stroke="url(#heroU2)"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.9 }}
              />
              <defs>
                <linearGradient id="heroU2" x1="0" x2="300" y1="0" y2="0" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFD662" />
                  <stop offset="1" stopColor="#FFE48A" stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          {" "}so you can{" "}
          <span className="bg-gradient-to-br from-white/95 to-white/42 bg-clip-text text-transparent">
            ship &amp; win.
          </span>
        </motion.h1>

        {/* Sub-copy */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="mt-6 max-w-xl text-center text-[14px] leading-relaxed text-white/48 sm:text-[16px]"
        >
          Assignments, theses, IEEE papers, IoT hardware —{" "}
          <span className="font-medium text-white/75">every report verified by a university professor.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <Button href="/register" variant="sky" size="lg" glow>
            Start a request
            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
          <Button href="/#what-we-do" variant="ghost" size="lg">
            See what we deliver
          </Button>
        </motion.div>

        {/* Trust pill */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.44 }}
          className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 backdrop-blur-md"
        >
          <ShieldCheck className="h-3.5 w-3.5 flex-shrink-0 text-[#34D399]" />
          <span className="text-[11px] text-white/55 sm:text-[12px]">
            Verified by{" "}
            <span className="font-semibold text-white">Masum Hawlader</span>
            , Asst. Prof. EEE — UAP
          </span>
        </motion.div>

        {/* Holographic visual */}
        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.88 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.25, delay: 0.36, ease: "easeOut" }}
          className="mt-14 w-full px-6 sm:px-16 lg:px-28 xl:px-36"
        >
          <HolographicCore />
        </motion.div>
      </div>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.68 }}
        className="relative border-t border-white/8"
      >
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-2 divide-x divide-y divide-white/8 sm:grid-cols-4 sm:divide-y-0">
          {statCards.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.v} className="flex items-center gap-3 px-5 py-4 sm:px-6 sm:py-5 lg:px-8">
                <Icon className="h-4 w-4 flex-shrink-0 text-[#FFD662]/70" />
                <div>
                  <p className="font-display text-lg font-semibold text-white sm:text-xl">{s.k}</p>
                  <p className="text-[9px] uppercase tracking-wider text-white/40 sm:text-[10px]">{s.v}</p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
