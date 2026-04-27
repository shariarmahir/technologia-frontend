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
  { k: "2,400+", v: "Orders delivered", icon: TrendingUp },
  { k: "48 hr",  v: "Avg. turnaround",  icon: Clock      },
  { k: "18",     v: "Partner schools",  icon: Building2  },
  { k: "96%",    v: "Verified pass rate", icon: Star     },
];

/* ── 3-D animated tech orb ─────────────────────────────────────────── */
function TechOrb() {
  return (
    <div className="relative flex h-[360px] w-full items-center justify-center sm:h-[420px]">

      {/* Ambient glow blobs */}
      <div className="absolute h-60 w-60 rounded-full bg-[#003A6E] opacity-55 blur-3xl" />
      <div className="absolute h-44 w-44 rounded-full bg-[#FFD662] opacity-[0.08] blur-3xl" />

      {/* Blue radar pulses — slow, wide */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={`bp${i}`}
          className="absolute rounded-full border border-[#00539C]/28"
          initial={{ width: 56,  height: 56,  opacity: 0.8 }}
          animate={{ width: 460, height: 460, opacity: 0   }}
          transition={{ repeat: Infinity, duration: 5.2, delay: i * 1.3, ease: "easeOut" }}
        />
      ))}

      {/* Amber pulses — fast, tight */}
      {[0, 1].map((i) => (
        <motion.div
          key={`ap${i}`}
          className="absolute rounded-full border border-[#FFD662]/22"
          initial={{ width: 36,  height: 36,  opacity: 0.9 }}
          animate={{ width: 140, height: 140, opacity: 0   }}
          transition={{ repeat: Infinity, duration: 2.6, delay: i * 1.3, ease: "easeOut" }}
        />
      ))}

      {/* 3-D orbital rings — perspectice wrapper */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ perspective: "580px" }}
      >
        {/* Ring 1 — tight equatorial, yellow node */}
        <motion.div
          className="absolute"
          style={{ width: 200, height: 200, rotateX: 74 }}
          animate={{ rotateZ: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          <div className="h-full w-full rounded-full border border-[#00539C]/55" />
          <div className="absolute -top-[5px] left-1/2 h-[10px] w-[10px] -translate-x-1/2 rounded-full bg-[#FFD662] shadow-[0_0_14px_6px_rgba(255,214,98,0.65)]" />
          <div className="absolute -bottom-[4px] left-1/2 h-[7px] w-[7px] -translate-x-1/2 rounded-full bg-white/40" />
        </motion.div>

        {/* Ring 2 — wide, tilted, blue node */}
        <motion.div
          className="absolute"
          style={{ width: 278, height: 278, rotateX: 62, rotateY: 28 }}
          animate={{ rotateZ: -360 }}
          transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
        >
          <div className="h-full w-full rounded-full border border-dashed border-[#FFD662]/18" />
          <div className="absolute -top-[4px] left-1/2 h-[8px] w-[8px] -translate-x-1/2 rounded-full bg-[#0EA5E9] shadow-[0_0_10px_5px_rgba(14,165,233,0.6)]" />
        </motion.div>

        {/* Ring 3 — outer, near-flat, green node */}
        <motion.div
          className="absolute"
          style={{ width: 348, height: 348, rotateX: 82 }}
          animate={{ rotateZ: 360 }}
          transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
        >
          <div className="h-full w-full rounded-full border border-[#00539C]/15" />
          <div className="absolute top-0 left-1/2 h-[7px] w-[7px] -translate-x-1/2 rounded-full bg-[#10B981] shadow-[0_0_10px_5px_rgba(16,185,129,0.55)]" />
        </motion.div>
      </div>

      {/* Central sphere */}
      <motion.div
        className="relative z-10 h-32 w-32 rounded-full"
        style={{
          background: "radial-gradient(circle at 30% 28%, #38BDF8 0%, #0066B8 38%, #001A3E 100%)",
          boxShadow: "0 0 72px 28px rgba(0,83,156,0.48), 0 0 140px 70px rgba(0,83,156,0.16), inset 0 0 28px rgba(255,255,255,0.06)",
        }}
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        {/* Specular highlights */}
        <div className="absolute top-4 left-5 h-5 w-5 rounded-full bg-white opacity-[0.14] blur-md" />
        <div className="absolute bottom-5 right-5 h-3 w-3 rounded-full bg-[#FFD662] opacity-[0.1] blur-sm" />
      </motion.div>

      {/* Floating data tags */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute right-4 top-12 sm:right-8"
      >
        <motion.div
          animate={{ y: [0, -7, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="rounded-2xl border border-white/12 bg-[#001A3E]/80 px-3.5 py-2.5 backdrop-blur-xl shadow-[0_12px_32px_rgba(0,0,0,0.45)]"
        >
          <p className="font-mono text-[9px] uppercase tracking-widest text-[#34D399]">Professor verified</p>
          <p className="mt-0.5 font-display text-[12px] font-semibold text-white">Masum Hawlader · UAP</p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-12 left-4 sm:left-8"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
          className="rounded-2xl border border-[#FFD662]/28 bg-[#FFD662]/10 px-3.5 py-2.5 backdrop-blur-xl shadow-[0_12px_32px_rgba(255,214,98,0.2)]"
        >
          <p className="font-mono text-[9px] uppercase tracking-widest text-[#FFE48A]">Delivered</p>
          <p className="mt-0.5 font-display text-xl font-bold text-white">2,400+</p>
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ── Hero section ───────────────────────────────────────────────────── */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#001A3E]">
      {/* Background */}
      <div className="hero-mesh absolute inset-0" />
      <div className="hero-grid absolute inset-0 opacity-40" />
      <BackgroundCanvas />

      {/* Main content */}
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 py-16 sm:px-8 sm:py-20 lg:flex-row lg:items-center lg:gap-16 lg:py-24 xl:gap-24">

        {/* LEFT — copy */}
        <div className="flex flex-1 flex-col items-start">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/[0.06] px-4 py-1.5 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FFD662] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FFD662]" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/80 sm:text-[11px]">
              Bangladesh&rsquo;s academic delivery platform
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="mt-6 font-display text-[2.5rem] font-black leading-[1.03] tracking-[-0.03em] text-white sm:text-[3.2rem] lg:text-[3.4rem] xl:text-[4rem]"
          >
            We build the{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#FFD662] via-[#FFE48A] to-white bg-clip-text text-transparent">
                work you need
              </span>
              <svg
                className="absolute -bottom-1 left-0 h-[3px] w-full"
                viewBox="0 0 200 4"
                fill="none"
                preserveAspectRatio="none"
              >
                <path d="M0 3 Q50 0 100 2 T200 2" stroke="url(#heroU)" strokeWidth="2.5" strokeLinecap="round" />
                <defs>
                  <linearGradient id="heroU" x1="0" x2="200" y1="0" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFD662" />
                    <stop offset="1" stopColor="#FFE48A" stopOpacity=".4" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <br />
            so you can{" "}
            <span className="bg-gradient-to-r from-white/90 to-white/50 bg-clip-text text-transparent">
              ship &amp; win.
            </span>
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-lg text-[14px] leading-relaxed text-white/55 sm:text-[15px] lg:text-[16px]"
          >
            Assignments, theses, IEEE papers, IoT hardware — every report{" "}
            <span className="font-medium text-white/80">verified by a university professor.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-3"
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
            transition={{ duration: 0.6, delay: 0.42 }}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-1.5 backdrop-blur-md"
          >
            <ShieldCheck className="h-3.5 w-3.5 flex-shrink-0 text-[#34D399]" />
            <span className="text-[11px] text-white/60 sm:text-[12px]">
              Verified by{" "}
              <span className="font-semibold text-white">Masum Hawlader</span>
              , Asst. Prof. EEE — UAP
            </span>
          </motion.div>
        </div>

        {/* RIGHT — 3-D tech orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.25, ease: "easeOut" }}
          className="w-full flex-shrink-0 lg:w-[460px] xl:w-[520px]"
        >
          <TechOrb />
        </motion.div>
      </div>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.55 }}
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
