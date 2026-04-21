"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="relative py-20">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[32px] border border-[#0EA5E9]/50 bg-[linear-gradient(135deg,#0EA5E9_0%,#38BDF8_55%,#7DD3FC_110%)] px-6 py-16 text-center sm:px-12"
        >
          <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#0EA5E9]/40 blur-3xl" />
          <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#7DD3FC]/30 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-white/90 backdrop-blur">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
              </span>
              Ready when you are
            </span>
            <h2 className="mt-5 font-display text-[2.25rem] font-semibold leading-[1.08] tracking-[-0.02em] text-white sm:text-[3rem]">
              Start shipping your best work{" "}
              <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                — today.
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-white/75 sm:text-base">
              Whether you&rsquo;re a student racing a deadline, a school hungry
              for tech-forward students, or a brand chasing better content —
              this is the time to jump.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/register" variant="primary" size="lg" glow>
                Create your account
                <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
              <Button href="/login" variant="outline" size="lg">
                I already have one
              </Button>
            </div>
            <p className="mt-6 text-xs text-white/55">
              bKash &amp; SSLCommerz supported · Verified by UAP faculty ·
              Built in Dhaka
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
