"use client";

import { motion } from "framer-motion";
import {
  BookOpenText,
  Cpu,
  PenTool,
  ArrowUpRight,
  type LucideIcon,
  CheckCircle2,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import Link from "next/link";

type Service = {
  icon: LucideIcon;
  tag: string;
  title: string;
  description: string;
  bullets: string[];
  pricing: string;
  tone: "light" | "yellow" | "dark";
};

const services: Service[] = [
  {
    icon: BookOpenText,
    tag: "Service line 01",
    title: "Academic & research",
    description:
      "Assignments, theses, lab reports, IEEE publications, and research — humanised, low AI-detection, professor-verified.",
    bullets: [
      "Assignments, reports, theses",
      "IEEE paper prep & submission",
      "Research methodology review",
    ],
    pricing: "From ৳1,200 / assignment",
    tone: "light",
  },
  {
    icon: Cpu,
    tag: "Service line 02",
    title: "IoT & engineering projects",
    description:
      "End-to-end IoT builds and science-fair projects — hardware, firmware, documentation, demo videos.",
    bullets: [
      "IoT hardware + firmware",
      "Science-fair / competition kits",
      "Prototype + full documentation",
    ],
    pricing: "From ৳8,000 / project",
    tone: "yellow",
  },
  {
    icon: PenTool,
    tag: "Service line 03",
    title: "Content & creative studio",
    description:
      "Marketing content, brand systems, and AI-powered video — writers, designers and editors in-house.",
    bullets: [
      "Content & AI video scripts",
      "Corporate + marketing creatives",
      "Brand systems & identity",
    ],
    pricing: "From ৳2,500 / piece",
    tone: "dark",
  },
];

const toneStyles = {
  light: {
    card: "bg-white border-[color:var(--color-border)]",
    icon: "bg-[color:var(--color-primary)] text-white",
    tag: "text-[color:var(--color-primary)]",
    cta: "text-[color:var(--color-primary)] hover:text-[color:var(--color-primary-light)]",
    check: "text-[color:var(--color-primary)]",
    title: "text-[color:var(--color-primary-dark)]",
    body: "text-[color:var(--color-text-secondary)]",
    list: "text-[color:var(--color-text-primary)]",
    price:
      "border-[color:var(--color-border)] bg-[color:var(--color-surface)] text-[color:var(--color-primary)]",
  },
  yellow: {
    card:
      "bg-gradient-to-br from-[#FFFBEB] to-white border-[#FFD662]/60",
    icon: "bg-[#FFD662] text-[#001A3E]",
    tag: "text-[#003A6E]",
    cta: "text-[#003A6E] hover:text-[color:var(--color-primary)]",
    check: "text-[#FFD662]",
    title: "text-[color:var(--color-primary-dark)]",
    body: "text-[#003A6E]/80",
    list: "text-[#003A6E]",
    price: "border-[#FFD662]/50 bg-white text-[#003A6E]",
  },
  dark: {
    card:
      "bg-[linear-gradient(135deg,#00539C_0%,#0066B8_55%,#003A6E_110%)] border-[#00539C]/50",
    icon: "bg-white/20 text-white border border-white/30",
    tag: "text-white/80",
    cta: "text-white hover:text-white/80",
    check: "text-[#FFD662]",
    title: "text-white",
    body: "text-white/80",
    list: "text-white/85",
    price: "border-white/25 bg-white/15 text-white",
  },
} as const;

export function Services() {
  return (
    <section id="services" className="relative bg-[color:var(--color-surface)] py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Pick a service line"
          title={
            <>
              Three service lines.
              <br />
              <span className="gradient-text">One standard of craft.</span>
            </>
          }
          description="International students, professionals and brands trust technoLOgia across three tightly-run verticals — all tracked in a single dashboard."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {services.map((s, i) => {
            const t = toneStyles[s.tone];
            const Icon = s.icon;
            const dark = s.tone === "dark";
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className={`group relative flex flex-col overflow-hidden rounded-[24px] border p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-20px_rgba(0,58,110,0.28)] ${t.card}`}
              >
                {dark && (
                  <>
                    <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#FFD662]/25 blur-3xl" />
                    <div className="absolute -bottom-24 -left-10 h-60 w-60 rounded-full bg-[#FFE48A]/15 blur-3xl" />
                  </>
                )}

                <div className="relative flex items-center justify-between">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${t.icon}`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span
                    className={`font-mono text-[10px] uppercase tracking-[0.2em] ${t.tag}`}
                  >
                    {s.tag}
                  </span>
                </div>

                <h3
                  className={`relative mt-6 font-display text-xl font-semibold tracking-tight ${t.title}`}
                >
                  {s.title}
                </h3>
                <p
                  className={`relative mt-2 text-sm leading-relaxed ${t.body}`}
                >
                  {s.description}
                </p>

                <ul className={`relative mt-5 space-y-2 text-sm ${t.list}`}>
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <CheckCircle2
                        className={`mt-0.5 h-4 w-4 flex-shrink-0 ${t.check}`}
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className={`relative mt-6 inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em] ${t.price}`}
                >
                  {s.pricing}
                </div>

                <Link
                  href="/register"
                  className={`relative mt-5 inline-flex items-center gap-1.5 text-sm font-semibold ${t.cta}`}
                >
                  Request this service
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
