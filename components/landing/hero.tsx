"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import { GlassButton } from "@/components/ui/glass-button";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="hero-mesh absolute inset-0" />
      <div className="hero-grid absolute inset-0 opacity-90" />
      <div className="orb h-[520px] w-[520px] bg-[#7C3AED]/60 left-[-120px] top-[-100px] animate-float-slow" />
      <div className="orb h-[420px] w-[420px] bg-[#2E21A3]/60 right-[-80px] top-[40px] animate-float-slower" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-5 pb-28 pt-20 text-center sm:px-8 md:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md"
        >
          <Sparkles className="h-3.5 w-3.5 text-[color:var(--color-accent-light)]" />
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/90">
            Fintech × Edtech · Bangladesh
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 max-w-4xl font-display text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.02em] text-white sm:text-[3.5rem] md:text-[4.25rem]"
        >
          If it&rsquo;s not now,{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-[#A78BFA] via-[#C4B5FD] to-white bg-clip-text text-transparent">
              then when?
            </span>
            <svg
              className="absolute -bottom-2 left-0 h-2 w-full"
              viewBox="0 0 200 8"
              fill="none"
            >
              <path
                d="M2 6 Q 50 1, 100 4 T 198 4"
                stroke="#A78BFA"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <br />
          <span className="text-white/90">This is the time to jump.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg"
        >
          Academic services, IoT & IEEE projects, and a weekly STEM program for
          schools and colleges — all verified, tracked, and delivered by a team
          that cares about building the next generation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <GlassButton href="/register" variant="primary" size="lg">
            Get started <ArrowRight className="h-4 w-4" />
          </GlassButton>
          <GlassButton href="/#services" variant="ghost" size="lg">
            Explore services
          </GlassButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 backdrop-blur-md"
        >
          <ShieldCheck className="h-3.5 w-3.5 text-[#34D399]" />
          <span className="text-xs text-white/80">
            Academic work quality-checked by{" "}
            <span className="font-semibold text-white">Masum Hawlader</span>
            , Asst. Professor, EEE — UAP
          </span>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
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
              className="bg-[#0F0B3D]/30 p-5 text-left backdrop-blur-md"
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
