"use client";

import { motion } from "framer-motion";
import { Users2, Plus, Mail, Star, BookOpen } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const members = [
  {
    id: "m1",
    name: "Dr. Mehedi Hassan",
    role: "Faculty Advisor",
    dept: "EEE",
    level: "Advisor",
    xp: 0,
    badges: ["IoT", "Embedded", "ML"],
    joined: "2025-09-01",
  },
  {
    id: "m2",
    name: "Raisa Hossain",
    role: "Lab Captain",
    dept: "EEE · Final yr",
    level: "Lead",
    xp: 1840,
    badges: ["IoT", "PCB", "Leadership"],
    joined: "2025-09-15",
  },
  {
    id: "m3",
    name: "Adib Rahman",
    role: "IoT Lead",
    dept: "EEE · 3rd yr",
    level: "Core",
    xp: 1420,
    badges: ["IoT", "Arduino", "MQTT"],
    joined: "2025-09-15",
  },
  {
    id: "m4",
    name: "Tashfia K.",
    role: "ML Lead",
    dept: "CSE · 3rd yr",
    level: "Core",
    xp: 1280,
    badges: ["ML", "Python", "TF Lite"],
    joined: "2025-09-20",
  },
  {
    id: "m5",
    name: "Nafis H.",
    role: "Hardware Engineer",
    dept: "EEE · 2nd yr",
    level: "Core",
    xp: 980,
    badges: ["PCB", "KiCad", "Soldering"],
    joined: "2025-10-01",
  },
  {
    id: "m6",
    name: "Sara Ahmed",
    role: "Researcher",
    dept: "EEE · 2nd yr",
    level: "Member",
    xp: 620,
    badges: ["IEEE", "Research"],
    joined: "2025-10-10",
  },
  {
    id: "m7",
    name: "Rafi Khan",
    role: "Software Engineer",
    dept: "CSE · 2nd yr",
    level: "Member",
    xp: 540,
    badges: ["Python", "React", "Firebase"],
    joined: "2025-10-10",
  },
  {
    id: "m8",
    name: "Mushfiq A.",
    role: "Member",
    dept: "CSE · 1st yr",
    level: "Member",
    xp: 220,
    badges: ["C++"],
    joined: "2026-01-15",
  },
];

const levelStyle: Record<string, string> = {
  Advisor: "border-[#FCD34D]/60 bg-[#FEF9C3] text-[#78350F]",
  Lead: "border-[#BAE6FD] bg-[#E0F2FE] text-[#075985]",
  Core: "border-[color:var(--color-border)] bg-[color:var(--color-surface-alt)] text-[color:var(--color-primary-dark)]",
  Member: "border-[color:var(--color-border)] bg-white text-[color:var(--color-text-secondary)]",
};

export default function MembersPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Lab portal · members"
        title="Lab members"
        description="Advisors, leads, core members, and mentors in UAP Embedded Systems Lab."
        actions={
          <Button variant="primary" size="sm">
            <Plus className="h-4 w-4" /> Invite member
          </Button>
        }
      />

      {/* Stats row */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { label: "Total members", value: String(members.length), icon: Users2 },
          { label: "Faculty advisors", value: "1", icon: BookOpen },
          { label: "Active leads", value: "2", icon: Star },
          { label: "Advisor-endorsed badges", value: "12", icon: Star },
        ].map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.label}
              className="flex items-center gap-3 rounded-2xl border border-[color:var(--color-border)] bg-white p-4 transition hover:border-[#BAE6FD] hover:shadow-[0_8px_24px_-14px_rgba(14,165,233,0.45)]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--color-accent-soft)] text-[color:var(--color-accent)]">
                <Icon className="h-4 w-4" />
              </span>
              <div>
                <p className="font-display text-xl font-semibold text-[color:var(--color-primary-dark)]">
                  {s.value}
                </p>
                <p className="text-[11px] text-[color:var(--color-text-secondary)]">
                  {s.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Member grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {members.map((m, i) => {
          const initials = m.name
            .split(" ")
            .map((w) => w[0])
            .slice(0, 2)
            .join("");
          return (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group flex flex-col gap-4 rounded-2xl border border-[color:var(--color-border)] bg-white p-5 transition hover:-translate-y-0.5 hover:border-[#BAE6FD] hover:shadow-[0_14px_36px_-18px_rgba(14,165,233,0.4)]"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#1B1464_0%,#0EA5E9_100%)] font-display text-sm font-bold text-white shadow-[0_8px_24px_-8px_rgba(14,165,233,0.5)]">
                    {initials}
                    <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-[#10B981]" />
                  </span>
                  <div>
                    <p className="font-display text-sm font-semibold text-[color:var(--color-primary-dark)]">
                      {m.name}
                    </p>
                    <p className="text-xs text-[color:var(--color-text-secondary)]">
                      {m.role}
                    </p>
                  </div>
                </div>
                <span
                  className={`inline-flex rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${levelStyle[m.level]}`}
                >
                  {m.level}
                </span>
              </div>

              <div className="text-xs text-[color:var(--color-text-secondary)]">
                <span className="font-mono uppercase tracking-wider">
                  {m.dept}
                </span>
                {m.xp > 0 && (
                  <span className="ml-2 font-mono font-semibold text-[color:var(--color-accent)]">
                    · {m.xp} XP
                  </span>
                )}
              </div>

              <div className="flex flex-wrap gap-1">
                {m.badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-2 py-0.5 font-mono text-[10px] text-[color:var(--color-text-secondary)] transition group-hover:border-[#BAE6FD] group-hover:bg-[color:var(--color-accent-soft)] group-hover:text-[#075985]"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <div className="flex gap-2 pt-1">
                <button className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-[color:var(--color-border)] py-2 text-xs font-semibold text-[color:var(--color-primary)] transition hover:border-[#BAE6FD] hover:bg-[color:var(--color-accent-soft)]">
                  <Mail className="h-3.5 w-3.5" /> Message
                </button>
                <button className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-[color:var(--color-border)] py-2 text-xs font-semibold text-[color:var(--color-text-secondary)] transition hover:border-[color:var(--color-border)] hover:bg-[color:var(--color-surface)]">
                  <Star className="h-3.5 w-3.5" /> Badge
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
