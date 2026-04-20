"use client";

import { BadgeCheck, FileCheck2, GraduationCap, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const pillars = [
  {
    icon: FileCheck2,
    title: "Every academic report reviewed",
    body: "Not just spellcheck — conceptual review, referencing and methodology are all vetted.",
  },
  {
    icon: ShieldCheck,
    title: "Low AI-detection, humanised",
    body: "We balance speed and originality so your work passes modern AI detectors with confidence.",
  },
  {
    icon: GraduationCap,
    title: "University-grade rubric",
    body: "Measured against EEE, CSE and IEEE-style expectations — not generic writing standards.",
  },
];

export function VerifiedSection() {
  return (
    <section id="verified" className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[32px] border border-[#BBF7D0] bg-gradient-to-br from-[#ECFDF5] via-white to-[#E0F2FE] p-8 sm:p-12"
        >
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#10B981]/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#0EA5E9]/12 blur-3xl" />

          <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#A7F3D0] bg-white/80 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-[#047857]">
                <ShieldCheck className="h-3.5 w-3.5" />
                Quality assurance
              </span>
              <h2 className="mt-5 font-display text-[2rem] font-semibold leading-[1.1] tracking-[-0.02em] text-[color:var(--color-primary-dark)] sm:text-[2.5rem]">
                Every academic report <br />
                <span className="text-[#047857]">carries the verified badge.</span>
              </h2>
              <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-[color:var(--color-text-secondary)]">
                All assignments, reports and research are reviewed by{" "}
                <span className="font-semibold text-[color:var(--color-primary-dark)]">
                  Masum Hawlader
                </span>
                , Assistant Professor, Department of EEE, University of Asia
                Pacific — before they ever reach your inbox.
              </p>

              <div className="mt-7 inline-flex items-center gap-4 rounded-2xl border border-[#BBF7D0] bg-white px-5 py-4 shadow-[0_14px_40px_-20px_rgba(16,185,129,0.45)]">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#10B981] text-white">
                  <BadgeCheck className="h-6 w-6" />
                </span>
                <div className="leading-tight">
                  <p className="font-display text-base font-semibold text-[#065F46]">
                    Verified by Masum Hawlader
                  </p>
                  <p className="text-xs text-[#047857]">
                    Asst. Professor · Dept. of EEE · University of Asia Pacific
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {pillars.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.08 }}
                    className="flex items-start gap-4 rounded-2xl border border-[color:var(--color-border)] bg-white/85 p-5 backdrop-blur transition hover:border-[#BAE6FD] hover:shadow-[0_14px_36px_-18px_rgba(14,165,233,0.35)]"
                  >
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[color:var(--color-accent-soft)] text-[color:var(--color-accent)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-display text-sm font-semibold text-[color:var(--color-primary-dark)]">
                        {p.title}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-[color:var(--color-text-secondary)]">
                        {p.body}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
