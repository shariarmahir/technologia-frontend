"use client";

import { motion } from "framer-motion";
import {
  School,
  Trophy,
  Lightbulb,
  Users,
  Rocket,
  CalendarDays,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const bullets = [
  {
    icon: Users,
    title: "3 ready-built teams per school",
    body: "Team leader + EEE (IoT) + CSE (AI/Software) — matched, mentored and competition-ready.",
  },
  {
    icon: CalendarDays,
    title: "2 workshops / week · 90 min each",
    body: "Structured, practical, tech-forward sessions that take students from basics to build-mode.",
  },
  {
    icon: Trophy,
    title: "Competitions & prize pools",
    body: "National, international, Zilla and school competitions — we handle logistics, registration & coaching.",
  },
  {
    icon: Rocket,
    title: "Mandatory 'How to build a startup'",
    body: "Guidance for project-based, web-dev and e-commerce ventures — supported until they run.",
  },
];

export function SchoolProgram() {
  return (
    <section id="school-program" className="relative py-24">
      <div className="absolute inset-0 bg-white" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[color:var(--color-surface)] to-transparent" />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#BAE6FD] bg-[color:var(--color-accent-soft)] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-[#075985]">
            <School className="h-3.5 w-3.5" />
            Unique program — Schools & Colleges
          </span>
          <h2 className="mt-5 font-display text-[2.25rem] font-semibold leading-[1.08] tracking-[-0.02em] text-[color:var(--color-primary-dark)] sm:text-[2.75rem]">
            Running a real{" "}
            <span className="gradient-text">project lab</span>
            <br />
            in every school, every week.
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-[color:var(--color-text-secondary)]">
            We partner with schools and colleges to launch an on-campus STEM
            program — weekly workshops, three competition-ready teams, a full
            event calendar, and a public school profile that levels up as your
            students win.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {bullets.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="group rounded-2xl border border-[color:var(--color-border)] bg-white p-4 shadow-[0_4px_18px_rgba(15,11,61,0.04)] transition-all hover:-translate-y-0.5 hover:border-[#BAE6FD] hover:shadow-[0_14px_36px_-18px_rgba(14,165,233,0.35)]"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[color:var(--color-accent-soft)] text-[color:var(--color-accent)] transition-colors group-hover:bg-[color:var(--color-accent)] group-hover:text-white">
                    <Icon className="h-4 w-4" />
                  </span>
                  <p className="mt-3 font-display text-sm font-semibold text-[color:var(--color-primary-dark)]">
                    {b.title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-[color:var(--color-text-secondary)]">
                    {b.body}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="/register" variant="primary" size="md" glow>
              Partner with us
              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
            <Button href="/dashboard/school/achievements" variant="outline" size="md">
              See achievement showcase
            </Button>
          </div>
        </div>

        {/* Visual — glass achievement card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[28px] border border-[#0EA5E9]/40 bg-[linear-gradient(135deg,#0EA5E9_0%,#38BDF8_55%,#7DD3FC_120%)] p-7 text-white shadow-[0_30px_80px_-20px_rgba(14,165,233,0.45)]">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#0EA5E9]/40 blur-3xl" />
            <div className="absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-[#7DD3FC]/30 blur-3xl" />

            <div className="relative flex items-center justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
                  School Portfolio
                </p>
                <p className="mt-1 font-display text-lg font-semibold">
                  Dhaka Residential Model College
                </p>
                <p className="text-xs text-white/65">
                  Mirpur Cantonment · Est. 1960
                </p>
              </div>
              <span className="rounded-full border border-white/30 bg-white/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white">
                Level 07 · Innovation Hub
              </span>
            </div>

            {/* Level progress */}
            <div className="relative mt-6">
              <div className="flex items-end justify-between text-[11px] text-white/65">
                <span>XP · 2,840 / 4,000</span>
                <span className="font-mono">71%</span>
              </div>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/20">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "71%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
                  className="h-full rounded-full bg-gradient-to-r from-white to-white/70"
                />
              </div>
            </div>

            <div className="relative mt-6 grid grid-cols-3 gap-3">
              {[
                { Icon: Trophy, label: "Trophies", value: 14 },
                { Icon: Lightbulb, label: "Projects", value: 22 },
                { Icon: Rocket, label: "Startups", value: 4 },
              ].map(({ Icon, label, value }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/20 bg-white/15 p-4 backdrop-blur-md transition hover:bg-white/25"
                >
                  <Icon className="h-4 w-4 text-white" />
                  <p className="mt-2 font-display text-xl font-semibold text-white">
                    {value}
                  </p>
                  <p className="text-[10px] uppercase tracking-wider text-white/60">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <div className="relative mt-6 rounded-2xl border border-white/20 bg-white/15 p-4 backdrop-blur-md">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white">
                Team of the Month
              </p>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/30 font-display text-sm font-bold text-white">
                    V3
                  </span>
                  <div className="leading-tight">
                    <p className="font-display text-sm font-semibold text-white">
                      Team Voltaire-3
                    </p>
                    <p className="text-[11px] text-white/60">
                      IoT Smart-Lab Hackathon · 1st place
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-[#10B981] px-2.5 py-1 text-[10px] font-semibold text-white">
                  + 320 XP
                </span>
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute -bottom-6 -left-5 hidden rounded-2xl border border-[color:var(--color-border)] bg-white px-4 py-3 shadow-[0_18px_40px_-14px_rgba(15,11,61,0.35)] sm:block"
          >
            <p className="font-mono text-[10px] uppercase tracking-wider text-[color:var(--color-accent)]">
              Weekly Workshop
            </p>
            <p className="mt-0.5 font-display text-sm font-semibold text-[color:var(--color-primary-dark)]">
              IoT Basics · Tues 4:30 PM
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
