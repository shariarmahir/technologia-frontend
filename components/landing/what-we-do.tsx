"use client";

import { motion } from "framer-motion";
import {
  BookOpenText,
  Cpu,
  PenTool,
  School,
  BadgeCheck,
  Gauge,
  FileText,
  Beaker,
  Wrench,
  Video,
  Megaphone,
  Trophy,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

type Pillar = {
  icon: typeof BookOpenText;
  eyebrow: string;
  title: string;
  body: string;
  items: { icon: typeof FileText; label: string }[];
  tone: "light" | "sky" | "dark";
  span: string;
};

const pillars: Pillar[] = [
  {
    icon: BookOpenText,
    eyebrow: "01 · For students",
    title: "Academic work, done right.",
    body: "Assignments, theses, lab reports, research papers and IEEE publications — written by university engineers, reviewed by a professor.",
    items: [
      { icon: FileText, label: "Assignments & reports" },
      { icon: Beaker, label: "Lab reports" },
      { icon: BadgeCheck, label: "IEEE publications" },
    ],
    tone: "light",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    icon: Cpu,
    eyebrow: "02 · For projects",
    title: "IoT + science projects.",
    body: "Hardware builds, documentation, and demos — delivered end-to-end for competitions and theses.",
    items: [
      { icon: Wrench, label: "Hardware build" },
      { icon: Beaker, label: "Science-fair kits" },
    ],
    tone: "sky",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    icon: School,
    eyebrow: "03 · For schools",
    title: "A weekly STEM program for your school.",
    body: "Two workshops a week, three trained teams, competition logistics, and a gamified school profile that students and parents can share.",
    items: [
      { icon: Trophy, label: "Competitions & prizes" },
      { icon: Gauge, label: "Level-up tracking" },
      { icon: Video, label: "Lesson materials" },
    ],
    tone: "dark",
    span: "md:col-span-3 md:row-span-1",
  },
  {
    icon: PenTool,
    eyebrow: "04 · For brands",
    title: "Content & creative studio.",
    body: "Corporate content, marketing creatives, AI-powered video and brand systems — built by writers, designers and editors in-house.",
    items: [
      { icon: Megaphone, label: "Brand & marketing" },
      { icon: Video, label: "AI video & scripts" },
    ],
    tone: "light",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    icon: BadgeCheck,
    eyebrow: "Quality guarantee",
    title: "Every academic report verified.",
    body: "Reviewed by Masum Hawlader, Assistant Professor of EEE at UAP — before it reaches your inbox.",
    items: [],
    tone: "sky",
    span: "md:col-span-1 md:row-span-1",
  },
];

const toneStyles = {
  light: {
    card: "bg-white border-[color:var(--color-border)]",
    iconWrap:
      "bg-[color:var(--color-accent-soft)] text-[color:var(--color-accent)]",
    eyebrow: "text-[color:var(--color-accent)]",
    title: "text-[color:var(--color-primary-dark)]",
    body: "text-[color:var(--color-text-secondary)]",
    chip:
      "border-[color:var(--color-border)] bg-[color:var(--color-surface)] text-[color:var(--color-primary-dark)]",
  },
  sky: {
    card:
      "bg-gradient-to-br from-[#F0F9FF] via-white to-[#E0F2FE] border-[#BAE6FD]",
    iconWrap: "bg-[color:var(--color-accent)] text-white",
    eyebrow: "text-[#075985]",
    title: "text-[color:var(--color-primary-dark)]",
    body: "text-[#0C4A6E]/80",
    chip: "border-[#BAE6FD] bg-white text-[#075985]",
  },
  dark: {
    card:
      "bg-[linear-gradient(135deg,#0EA5E9_0%,#38BDF8_55%,#7DD3FC_110%)] border-[#0EA5E9]/50",
    iconWrap: "bg-white/20 text-white border border-white/30",
    eyebrow: "text-white/80",
    title: "text-white",
    body: "text-white/80",
    chip: "border-white/25 bg-white/15 text-white",
  },
} as const;

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="relative bg-white py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          eyebrow="What we actually do"
          className="mx-auto"
          title={
            <>
              Four services.{" "}
              <span className="gradient-text">One platform.</span>
            </>
          }
          description="technoLOgia delivers academic work, engineering projects, brand content, and runs a weekly STEM program in schools — all tracked, assigned and verified through one dashboard."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {pillars.map((p, i) => {
            const t = toneStyles[p.tone];
            const Icon = p.icon;
            const dark = p.tone === "dark";
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className={`group relative flex flex-col overflow-hidden rounded-[24px] border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-24px_rgba(15,11,61,0.35)] ${t.card} ${p.span}`}
              >
                {dark && (
                  <>
                    <div className="absolute -right-24 -top-20 h-60 w-60 rounded-full bg-white/20 blur-3xl" />
                    <div className="absolute -bottom-24 -left-10 h-60 w-60 rounded-full bg-[#7DD3FC]/30 blur-3xl" />
                  </>
                )}

                <div className="relative flex items-start justify-between">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${t.iconWrap}`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span
                    className={`font-mono text-[10px] uppercase tracking-[0.2em] ${t.eyebrow}`}
                  >
                    {p.eyebrow}
                  </span>
                </div>

                <h3
                  className={`relative mt-6 font-display text-[1.35rem] font-semibold leading-tight tracking-[-0.01em] ${t.title}`}
                >
                  {p.title}
                </h3>
                <p
                  className={`relative mt-2.5 text-[14px] leading-relaxed ${t.body}`}
                >
                  {p.body}
                </p>

                {p.items.length > 0 && (
                  <div className="relative mt-5 flex flex-wrap gap-2">
                    {p.items.map((it) => {
                      const ItIcon = it.icon;
                      return (
                        <span
                          key={it.label}
                          className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11.5px] font-medium ${t.chip}`}
                        >
                          <ItIcon className="h-3 w-3" />
                          {it.label}
                        </span>
                      );
                    })}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
