"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GlassButton } from "@/components/ui/glass-button";

export function CtaSection() {
  return (
    <section className="relative py-20">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[32px] border border-[#2E21A3]/60 bg-gradient-to-br from-[#0F0B3D] via-[#1B1464] to-[#2E21A3] px-6 py-16 text-center sm:px-12"
        >
          <div className="hero-grid absolute inset-0 opacity-60" />
          <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#7C3AED]/40 blur-3xl" />
          <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#A78BFA]/30 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-white/80 backdrop-blur">
              <span className="h-1 w-1 rounded-full bg-[color:var(--color-accent-light)]" />
              Ready when you are
            </span>
            <h2 className="mt-5 font-display text-[2.25rem] font-semibold leading-[1.08] tracking-tight text-white sm:text-[3rem]">
              Start shipping your best work{" "}
              <span className="bg-gradient-to-r from-[#A78BFA] to-white bg-clip-text text-transparent">
                — today.
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-white/75 sm:text-base">
              Whether you&rsquo;re a student racing a deadline, a school hungry
              for tech-forward students, or a brand chasing better content —
              this is the time to jump.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <GlassButton href="/register" variant="primary" size="lg">
                Create your account <ArrowRight className="h-4 w-4" />
              </GlassButton>
              <GlassButton href="/login" variant="ghost" size="lg">
                I already have one
              </GlassButton>
            </div>
            <p className="mt-6 text-xs text-white/55">
              bKash & SSLCommerz supported · Verified by UAP faculty · Built in
              Dhaka
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
