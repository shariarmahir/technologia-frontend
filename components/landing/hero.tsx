"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  GraduationCap,
  Building2,
  Sparkles,
  CheckCircle2,
  Clock,
  TrendingUp,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BackgroundCanvas } from "@/components/landing/background-canvas";

const statCards = [
  { k: "2,400+", v: "Orders delivered", icon: TrendingUp },
  { k: "48 hr", v: "Avg. turnaround", icon: Clock },
  { k: "18", v: "Partner schools", icon: Building2 },
  { k: "96%", v: "Verified pass rate", icon: Star },
];

const orderItems = [
  { label: "IEEE Paper — RF Circuit Analysis", status: "Verified", hex: "#10B981" },
  { label: "IoT Smart-Home Kit + Firmware", status: "In Progress", hex: "#FFD662" },
  { label: "Brand Deck — TechNova Ltd.", status: "Submitted", hex: "#FFE48A" },
];

function DashboardMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Glow halo */}
      <div className="absolute inset-4 rounded-[32px] bg-[#FFD662]/15 blur-3xl pointer-events-none" />

      {/* Card */}
      <div className="relative overflow-hidden rounded-[24px] border border-white/15 bg-[#001A3E]/85 shadow-[0_32px_80px_-16px_rgba(0,83,156,0.5)] backdrop-blur-2xl">
        {/* macOS chrome */}
        <div className="flex items-center justify-between border-b border-white/8 px-4 py-3 sm:px-5 sm:py-3.5">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28CA41]" />
          </div>
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/35 sm:text-[10px]">
            technologia · live orders
          </span>
          <span className="flex items-center gap-1.5 text-[10px] text-[#34D399]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#34D399]" />
            Live
          </span>
        </div>

        <div className="space-y-3 p-4 sm:space-y-4 sm:p-5">
          {/* Mini stat row */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {[
              { label: "Active", value: "12", color: "text-[#FFD662]" },
              { label: "Verified", value: "8", color: "text-[#34D399]" },
              { label: "This week", value: "৳24k", color: "text-[#FFD662]" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-white/8 bg-white/4 p-2.5 text-center sm:p-3">
                <p className={`font-display text-base font-bold sm:text-lg ${s.color}`}>{s.value}</p>
                <p className="mt-0.5 text-[8px] uppercase tracking-wider text-white/40 sm:text-[9px]">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Order list */}
          <div className="space-y-1.5 sm:space-y-2">
            <p className="px-1 font-mono text-[8px] uppercase tracking-[0.2em] text-white/35 sm:text-[9px]">
              Recent orders
            </p>
            {orderItems.map((o, i) => (
              <motion.div
                key={o.label}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                className="flex items-center justify-between rounded-xl border border-white/8 bg-white/4 px-3 py-2 sm:px-3.5 sm:py-2.5"
              >
                <div className="flex min-w-0 items-center gap-2">
                  <CheckCircle2 className="h-3 w-3 flex-shrink-0 text-white/30 sm:h-3.5 sm:w-3.5" />
                  <span className="truncate text-[10.5px] text-white/70 sm:text-[11.5px]">{o.label}</span>
                </div>
                <span
                  className="ml-2 flex-shrink-0 rounded-full border px-1.5 py-0.5 text-[8.5px] font-medium sm:px-2 sm:text-[9.5px]"
                  style={{ color: o.hex, borderColor: `${o.hex}40`, backgroundColor: `${o.hex}18` }}
                >
                  {o.status}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="rounded-xl border border-white/8 bg-white/4 p-3 sm:p-3.5">
            <div className="flex items-center justify-between text-[9px] sm:text-[10px]">
              <span className="text-white/50">Monthly goal</span>
              <span className="font-mono font-semibold text-[#FFD662]">78%</span>
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/8">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "78%" }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.9 }}
                className="h-full rounded-full bg-gradient-to-r from-[#FFD662] to-[#FFE48A]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floating verified badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.85 }}
        className="absolute -bottom-4 -left-4 rounded-2xl border border-white/15 bg-[#001A3E]/90 px-3.5 py-2.5 shadow-[0_12px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:-bottom-5 sm:-left-8 sm:px-4 sm:py-3"
      >
        <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#34D399] sm:text-[9px]">Professor verified</p>
        <p className="mt-0.5 font-display text-[11px] font-semibold text-white sm:text-[12px]">Masum Hawlader · UAP</p>
      </motion.div>

      {/* Floating stat badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: -8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.0 }}
        className="absolute -right-3 top-6 rounded-2xl border border-[#FFD662]/30 bg-[#FFD662]/12 px-3 py-2.5 shadow-[0_12px_32px_rgba(255,214,98,0.25)] backdrop-blur-xl sm:-right-6 sm:top-10 sm:px-4 sm:py-3"
      >
        <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#FFE48A] sm:text-[9px]">Delivered</p>
        <p className="mt-0.5 font-display text-lg font-bold text-white sm:text-xl">2,400+</p>
      </motion.div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#001A3E]">
      {/* Background layers */}
      <div className="hero-mesh absolute inset-0" />
      <div className="hero-grid absolute inset-0 opacity-60" />
      <BackgroundCanvas />

      {/* Orbs */}
      <div className="orb h-[300px] w-[300px] bg-[#FFD662]/20 left-[-80px] top-[-80px] animate-float-slow sm:h-[450px] sm:w-[450px] lg:h-[600px] lg:w-[600px] lg:left-[-180px] lg:top-[-160px]" />
      <div className="orb h-[260px] w-[260px] bg-[#00539C]/50 right-[-60px] top-[-40px] animate-float-slower sm:h-[380px] sm:w-[380px] lg:h-[500px] lg:w-[500px] lg:right-[-100px]" />
      <div className="orb hidden h-[300px] w-[300px] bg-[#FFD662]/15 left-[30%] bottom-[-80px] animate-float-slow sm:block" />

      {/* Main content */}
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-stretch px-5 sm:px-8 lg:min-h-[37.5vw] lg:max-h-[560px] lg:flex-row lg:items-center lg:gap-12 xl:gap-20">

        {/* LEFT COLUMN */}
        <div className="flex flex-1 flex-col items-start justify-center pt-12 pb-8 sm:pt-16 sm:pb-10 lg:py-14">

          {/* Eyebrow pill */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/20 bg-white/8 px-3.5 py-1.5 backdrop-blur-md sm:px-4"
          >
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FFD662] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FFD662]" />
            </span>
            <span className="truncate font-mono text-[10px] uppercase tracking-[0.15em] text-white/85 sm:text-[11px] sm:tracking-[0.18em]">
              Bangladesh&rsquo;s academic + project delivery platform
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="mt-5 font-display text-[2rem] font-semibold leading-[1.05] tracking-[-0.025em] text-white sm:mt-6 sm:text-[2.9rem] md:text-[3.4rem] lg:text-[3.2rem] xl:text-[3.8rem]"
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
            <br className="hidden sm:block" />
            {" "}so you can{" "}
            <span className="bg-gradient-to-r from-white/90 to-white/55 bg-clip-text text-transparent">
              ship, win &amp; graduate.
            </span>
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="mt-4 max-w-xl text-[14px] leading-relaxed text-white/60 sm:mt-5 sm:text-[15px] lg:text-[15px] xl:text-[16px]"
          >
            Assignments, theses, IEEE papers, IoT hardware, brand content — and a
            weekly{" "}
            <span className="font-medium text-white/85">STEM program in schools.</span>{" "}
            Every academic report verified by a university professor.
          </motion.p>

          {/* Audience chips */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-5 flex flex-wrap gap-2 sm:mt-6"
          >
            {[
              { icon: GraduationCap, label: "Students" },
              { icon: Zap, label: "Projects" },
              { icon: Building2, label: "Schools" },
              { icon: Sparkles, label: "Brands" },
            ].map((a) => {
              const Icon = a.icon;
              return (
                <span
                  key={a.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/6 px-3 py-1.5 text-[11px] font-medium text-white/65 backdrop-blur-md transition hover:bg-white/12 hover:text-white sm:text-[12px]"
                >
                  <Icon className="h-3 w-3 text-[#FFD662] sm:h-3.5 sm:w-3.5" />
                  {a.label}
                </span>
              );
            })}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.36 }}
            className="mt-6 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center"
          >
            <Button href="/register" variant="sky" size="lg" glow>
              Start a request
              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
            <Button href="/#what-we-do" variant="ghost" size="lg">
              See what we deliver
            </Button>
          </motion.div>

          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.46 }}
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1.5 backdrop-blur-md sm:mt-6 sm:px-3.5"
          >
            <ShieldCheck className="h-3.5 w-3.5 flex-shrink-0 text-[#34D399]" />
            <span className="text-[11px] text-white/65 sm:text-[12px]">
              Verified by{" "}
              <span className="font-semibold text-white">Masum Hawlader</span>
              , Asst. Prof. EEE — UAP
            </span>
          </motion.div>
        </div>

        {/* RIGHT COLUMN — Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden pb-10 pt-4 md:block md:w-full md:max-w-[420px] md:pb-12 lg:w-[440px] lg:flex-shrink-0 lg:py-14 xl:w-[480px]"
        >
          <DashboardMockup />
        </motion.div>
      </div>

      {/* Compact mockup on mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="relative mx-auto w-full max-w-sm px-5 pb-10 md:hidden"
      >
        <DashboardMockup />
      </motion.div>

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
