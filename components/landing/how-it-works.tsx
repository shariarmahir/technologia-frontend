"use client";

import { motion } from "framer-motion";
import { UserPlus, FileEdit, LineChart, PackageCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  {
    icon: UserPlus,
    title: "Sign up",
    body: "Pick your role — student, school, or brand — and spin up your dashboard in seconds.",
  },
  {
    icon: FileEdit,
    title: "Submit request",
    body: "Describe the work, upload files or drive links, and set your budget. We respond within an hour.",
  },
  {
    icon: LineChart,
    title: "Track progress",
    body: "Watch your order move through Requested → Assigned → In Progress → Review in real time.",
  },
  {
    icon: PackageCheck,
    title: "Get delivered",
    body: "Download verified work, leave remarks, and schedule a Google Meet if you need a walkthrough.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-white py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="How it works"
          align="center"
          title={
            <>
              From idea to delivered —{" "}
              <span className="gradient-text">in four steps.</span>
            </>
          }
          description="Every order runs through a transparent pipeline. You always know what stage you're in and who's working on it."
          className="mx-auto"
        />

        <div className="relative mt-16 grid grid-cols-1 gap-5 md:grid-cols-4">
          {/* connector line */}
          <div className="absolute inset-x-8 top-10 hidden h-px bg-gradient-to-r from-transparent via-[color:var(--color-border)] to-transparent md:block" />

          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative flex flex-col items-start"
              >
                <span className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-[0_8px_24px_rgba(15,11,61,0.08)] ring-1 ring-[color:var(--color-border)]">
                  <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-[color:var(--color-primary)] font-mono text-[11px] font-semibold text-white">
                    0{i + 1}
                  </span>
                  <Icon className="h-6 w-6 text-[color:var(--color-accent)]" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-[color:var(--color-primary-dark)]">
                  {s.title}
                </h3>
                <p className="mt-1.5 max-w-[240px] text-sm leading-relaxed text-[color:var(--color-text-secondary)]">
                  {s.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
