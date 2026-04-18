"use client";

import { motion } from "framer-motion";
import {
  BookOpenText,
  Cpu,
  PenTool,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import Link from "next/link";

type Service = {
  icon: LucideIcon;
  tag: string;
  title: string;
  description: string;
  bullets: string[];
  tone: "primary" | "accent" | "dark";
};

const services: Service[] = [
  {
    icon: BookOpenText,
    tag: "Product 01 — Student",
    title: "Academic & research services",
    description:
      "Assignments, reports, theses, lab reports, IEEE publications and research — delivered on time, humanised, and verified.",
    bullets: [
      "Low AI-detection, humanised writing",
      "IEEE paper prep & publication support",
      "Lab reports & deadline-critical work",
    ],
    tone: "primary",
  },
  {
    icon: Cpu,
    tag: "Product 02 — Projects",
    title: "IoT, IEEE & science projects",
    description:
      "From science tournaments to industrial IoT — our university engineers design, build, and document end-to-end.",
    bullets: [
      "IoT project design + hardware build",
      "Science-fair / competition kits",
      "IEEE thesis + publication pipeline",
    ],
    tone: "accent",
  },
  {
    icon: PenTool,
    tag: "Product 03 — Content",
    title: "Content & creative studio",
    description:
      "Corporate content, marketing creatives, and AI-powered video — crafted by a team that balances craft with scale.",
    bullets: [
      "Content & AI video writing",
      "Corporate + marketing creatives",
      "Brand systems & visual identity",
    ],
    tone: "dark",
  },
];

const toneStyles = {
  primary: {
    card: "bg-white border-[color:var(--color-border)]",
    icon: "bg-[color:var(--color-primary)] text-white",
    tag: "text-[color:var(--color-primary)]",
  },
  accent: {
    card: "bg-gradient-to-br from-[#F3F0FF] to-white border-[#E0D8FF]",
    icon: "bg-[color:var(--color-accent)] text-white",
    tag: "text-[color:var(--color-accent)]",
  },
  dark: {
    card:
      "bg-gradient-to-br from-[#0F0B3D] to-[#1B1464] border-[#2E21A3] text-white",
    icon: "bg-white/10 text-white border border-white/20",
    tag: "text-[color:var(--color-accent-light)]",
  },
} as const;

export function Services() {
  return (
    <section id="services" className="relative bg-white py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Service Product 01"
          title={
            <>
              Three service lines.
              <br />
              One standard of craft.
            </>
          }
          description="International students, professionals, and brands trust technoLOgia across three tightly-run verticals."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {services.map((s, i) => {
            const t = toneStyles[s.tone];
            const Icon = s.icon;
            const dark = s.tone === "dark";
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group relative flex flex-col overflow-hidden rounded-[24px] border p-7 shadow-[0_10px_40px_-20px_rgba(15,11,61,0.25)] transition-transform hover:-translate-y-1 ${t.card}`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${t.icon}`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span
                    className={`font-mono text-[10px] uppercase tracking-[0.18em] ${t.tag}`}
                  >
                    {s.tag}
                  </span>
                </div>

                <h3
                  className={`mt-6 font-display text-xl font-semibold tracking-tight ${
                    dark ? "text-white" : "text-[color:var(--color-primary-dark)]"
                  }`}
                >
                  {s.title}
                </h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    dark ? "text-white/70" : "text-[color:var(--color-text-secondary)]"
                  }`}
                >
                  {s.description}
                </p>

                <ul
                  className={`mt-5 space-y-2 text-sm ${
                    dark ? "text-white/80" : "text-[color:var(--color-text-primary)]"
                  }`}
                >
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span
                        className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${
                          dark
                            ? "bg-[color:var(--color-accent-light)]"
                            : "bg-[color:var(--color-accent)]"
                        }`}
                      />
                      {b}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/register"
                  className={`mt-7 inline-flex items-center gap-1.5 text-sm font-semibold ${
                    dark
                      ? "text-[color:var(--color-accent-light)] hover:text-white"
                      : "text-[color:var(--color-primary)] hover:text-[color:var(--color-accent)]"
                  }`}
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
