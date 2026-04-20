"use client";

import { motion } from "framer-motion";
import {
  FlaskConical,
  Swords,
  Trophy,
  CalendarRange,
  Users2,
  GitCompare,
  BookMarked,
  Medal,
  Wrench,
  ArrowRight,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

const coreFeatures = [
  {
    icon: FlaskConical,
    title: "Workshop tracker for every lab",
    body: "Log every session — topic, attendance, materials, outcomes. Each university lab gets a live feed that advisors and students can both follow.",
    accent: "sky",
  },
  {
    icon: Swords,
    title: "University-to-university challenges",
    body: "Issue a challenge to another lab — set the rules, deadline, and judging rubric. We handle the bracket, scoring, and the live leaderboard.",
    accent: "primary",
  },
  {
    icon: Trophy,
    title: "Workshop competitions",
    body: "Run internal comps (intra-lab) or inter-university tournaments. Prizes, certificates, and a public results page — zero admin overhead.",
    accent: "sky",
  },
];

const moreFeatures = [
  {
    icon: CalendarRange,
    title: "Semester roadmap",
    body: "Plan 12 weeks of workshops in minutes — drag-and-drop topics, auto-sync with the academic calendar.",
  },
  {
    icon: Users2,
    title: "Mentor & alumni network",
    body: "Invite senior students, alumni and industry mentors. Assign them to teams by skill.",
  },
  {
    icon: GitCompare,
    title: "Cross-lab benchmarking",
    body: "See how your lab ranks — attendance, outputs, competition wins — against peer universities.",
  },
  {
    icon: BookMarked,
    title: "Research output log",
    body: "Every paper, prototype, and publication tracked to the lab that produced it.",
  },
  {
    icon: Medal,
    title: "Advisor-endorsed badges",
    body: "Faculty can issue verifiable skill badges — IoT, Embedded, ML, Signal — attached to a student's transcript.",
  },
  {
    icon: Wrench,
    title: "Equipment & inventory tracker",
    body: "Book, check-out and audit lab hardware. Get low-stock alerts on consumables.",
  },
];

export function UniversityLabs() {
  return (
    <section id="university-labs" className="relative overflow-hidden py-24">
      {/* Deep-sky backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#F7FBFF_0%,#EEF7FE_50%,#FFFFFF_100%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#BAE6FD] to-transparent" />
      <div className="absolute left-1/2 top-16 h-60 w-[60rem] -translate-x-1/2 rounded-full bg-[#0EA5E9]/12 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="For universities · project labs"
          align="center"
          className="mx-auto"
          title={
            <>
              A dedicated platform for{" "}
              <span className="gradient-text">university project labs.</span>
            </>
          }
          description="Track every workshop, challenge peer universities, and run inter-lab competitions — all from one dashboard built specifically for project labs."
        />

        {/* Core three features — featured cards */}
        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {coreFeatures.map((f, i) => {
            const Icon = f.icon;
            const dark = f.accent === "primary";
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className={`group relative flex flex-col overflow-hidden rounded-[24px] border p-7 transition-all duration-300 hover:-translate-y-1.5 ${
                  dark
                    ? "border-[#1E40AF]/60 bg-[linear-gradient(135deg,#0A0930_0%,#1B1464_55%,#0369A1_120%)] text-white shadow-[0_30px_80px_-20px_rgba(27,20,100,0.45)]"
                    : "border-[#BAE6FD] bg-white/90 shadow-[0_16px_40px_-20px_rgba(14,165,233,0.35)] hover:shadow-[0_24px_60px_-18px_rgba(14,165,233,0.5)]"
                }`}
              >
                {dark && (
                  <>
                    <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#0EA5E9]/40 blur-3xl" />
                    <div className="absolute -bottom-24 -left-10 h-60 w-60 rounded-full bg-[#38BDF8]/25 blur-3xl" />
                  </>
                )}

                <span
                  className={`relative flex h-12 w-12 items-center justify-center rounded-2xl ${
                    dark
                      ? "border border-white/15 bg-white/10 text-[#7DD3FC]"
                      : "bg-[color:var(--color-accent)] text-white"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </span>

                <span
                  className={`relative mt-5 font-mono text-[10px] uppercase tracking-[0.22em] ${
                    dark ? "text-[#7DD3FC]" : "text-[#075985]"
                  }`}
                >
                  Core feature 0{i + 1}
                </span>

                <h3
                  className={`relative mt-2 font-display text-[1.3rem] font-semibold leading-snug tracking-[-0.01em] ${
                    dark ? "text-white" : "text-[color:var(--color-primary-dark)]"
                  }`}
                >
                  {f.title}
                </h3>
                <p
                  className={`relative mt-2.5 text-[14px] leading-relaxed ${
                    dark ? "text-white/75" : "text-[color:var(--color-text-secondary)]"
                  }`}
                >
                  {f.body}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Searching-more-features grid */}
        <div className="mt-16 rounded-[28px] border border-[color:var(--color-border)] bg-white/80 p-6 backdrop-blur sm:p-10">
          <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#BAE6FD] bg-[color:var(--color-accent-soft)] px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#075985]">
                <span className="h-1 w-1 rounded-full bg-[color:var(--color-accent)]" />
                More features in discovery
              </span>
              <h3 className="mt-4 max-w-xl font-display text-2xl font-semibold leading-tight tracking-[-0.01em] text-[color:var(--color-primary-dark)] sm:text-[1.75rem]">
                Shape the lab dashboard with us.
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-[color:var(--color-text-secondary)]">
                We&rsquo;re actively researching features with partner labs.
                Here&rsquo;s what&rsquo;s on the shortlist — tell us which
                matter most to yours.
              </p>
            </div>
            <Button href="/register" variant="outline" size="md">
              Request a pilot lab
              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {moreFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="group flex items-start gap-4 rounded-2xl border border-[color:var(--color-border)] bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-[#BAE6FD] hover:shadow-[0_14px_36px_-18px_rgba(14,165,233,0.4)]"
                >
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[color:var(--color-accent-soft)] text-[color:var(--color-accent)] transition-colors group-hover:bg-[color:var(--color-accent)] group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-display text-sm font-semibold text-[color:var(--color-primary-dark)]">
                      {f.title}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-[color:var(--color-text-secondary)]">
                      {f.body}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
