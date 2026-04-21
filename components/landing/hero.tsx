"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  GraduationCap,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BackgroundCanvas } from "@/components/landing/background-canvas";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="hero-mesh absolute inset-0" />
      <div className="hero-grid absolute inset-0 opacity-90" />
      <BackgroundCanvas />
      <div className="orb h-[520px] w-[520px] bg-[#0EA5E9]/60 left-[-120px] top-[-100px] animate-float-slow" />
      <div className="orb h-[420px] w-[420px] bg-[#2E21A3]/60 right-[-80px] top-[40px] animate-float-slower" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-5 pb-28 pt-20 text-center sm:px-8 md:pt-28">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#38BDF8] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#0EA5E9]" />
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/90">
            Bangladesh&rsquo;s academic + project delivery platform
          </span>
        </motion.div>

        {/* Headline — clarity-first */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 max-w-5xl font-display text-[2.5rem] font-semibold leading-[1.03] tracking-[-0.025em] text-white sm:text-[3.5rem] md:text-[4.5rem]"
        >
          We build the{" "}
          <span className="relative inline-block whitespace-nowrap">
            <span className="bg-gradient-to-r from-[#38BDF8] via-[#7DD3FC] to-white bg-clip-text text-transparent">
              work you need
            </span>
            <svg
              className="absolute -bottom-2 left-0 h-2 w-full"
              viewBox="0 0 200 8"
              fill="none"
            >
              <path
                d="M2 6 Q 50 1, 100 4 T 198 4"
                stroke="#38BDF8"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
          —
          <br />
          so you can ship, win, and graduate.
        </motion.h1>

        {/* Value prop — explicit list of what we deliver */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-7 max-w-3xl text-[15px] leading-relaxed text-white/80 sm:text-[17px]"
        >
          A single platform that delivers{" "}
          <span className="font-semibold text-white">
            assignments, theses, IEEE papers, IoT hardware, content studios
          </span>
          {" "}— and runs a{" "}
          <span className="font-semibold text-white">
            weekly STEM program
          </span>
          {" "}in schools and colleges. Every academic report is verified by a
          university professor before it reaches you.
        </motion.p>

        {/* Audience chips — instantly tells visitors "this is for me" */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28 }}
          className="mt-7 flex flex-wrap items-center justify-center gap-2"
        >
          {[
            { icon: GraduationCap, label: "For students" },
            { icon: Zap, label: "For projects" },
            { icon: Building2, label: "For schools" },
            { icon: Sparkles, label: "For brands" },
          ].map((a) => {
            const Icon = a.icon;
            return (
              <span
                key={a.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur-md transition hover:bg-white/10 hover:text-white"
              >
                <Icon className="h-3.5 w-3.5 text-[#7DD3FC]" />
                {a.label}
              </span>
            );
          })}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.36 }}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Button href="/register" variant="sky" size="lg" glow>
            Start a request
            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
          <Button href="/#what-we-do" variant="ghost" size="lg">
            See what we deliver
          </Button>
        </motion.div>

        {/* Trust line */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.48 }}
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 backdrop-blur-md"
        >
          <ShieldCheck className="h-3.5 w-3.5 text-[#34D399]" />
          <span className="text-xs text-white/80">
            Academic work verified by{" "}
            <span className="font-semibold text-white">Masum Hawlader</span>
            , Asst. Professor, EEE — University of Asia Pacific
          </span>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl sm:grid-cols-4"
        >
          {[
            { k: "2,400+", v: "Orders delivered" },
            { k: "48 hr", v: "Avg. turnaround" },
            { k: "18", v: "Partner schools" },
            { k: "96%", v: "Verified pass rate" },
          ].map((s) => (
            <div
              key={s.v}
              className="bg-[#0A0930]/40 p-5 text-left backdrop-blur-md"
            >
              <p className="font-display text-2xl font-semibold text-white">
                {s.k}
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-wider text-white/60">
                {s.v}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
