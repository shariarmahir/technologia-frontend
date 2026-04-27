"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Star,
  BanknoteIcon,
  ClipboardList,
  CheckCircle2,
  BookOpen,
  Eye,
  EyeOff,
  Edit3,
  Plus,
  X,
  GraduationCap,
  Wallet,
  MapPin,
  Zap,
} from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/dashboard/stat-card";
import { StatusBadge } from "@/components/ui/status-badge";
import { assignments, workers } from "@/lib/mock-data";

const me = workers.find((w) => w.name === "Nafis Hossain")!;
const myCompleted = assignments.filter(
  (a) => a.worker === "Nafis H." && a.status === "completed"
);

const reviews = [
  { client: "Emily Chen", country: "Australia", rating: 5, date: "Apr 12", text: "Excellent work — well-structured lab report with detailed calculations. Submitted ahead of deadline." },
  { client: "James Harrington", country: "UK", rating: 5, date: "Mar 28", text: "Nafis clearly knows power systems. The IEEE paper was formatted perfectly and the references were spot-on." },
  { client: "Liam O'Brien", country: "Ireland", rating: 5, date: "Mar 10", text: "Great communicator. Delivered the IoT firmware exactly as specified, with full documentation." },
  { client: "Sophie Müller", country: "Germany", rating: 4, date: "Feb 18", text: "Good work overall. Minor formatting issues were fixed quickly after feedback. Would use again." },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${
            i <= rating ? "fill-[#FFD662] text-[#FFD662]" : "text-[#E2E8F0]"
          }`}
        />
      ))}
    </div>
  );
}

export default function WorkerProfilePage() {
  const [skills, setSkills] = useState(me.skills);
  const [newSkill, setNewSkill] = useState("");
  const [addingSkill, setAddingSkill] = useState(false);
  const [publicPortfolio, setPublicPortfolio] = useState(
    myCompleted.reduce<Record<string, boolean>>((acc, a) => {
      acc[a.id] = a.verified;
      return acc;
    }, {})
  );
  const [bkash, setBkash] = useState("01712-345678");
  const [editingBkash, setEditingBkash] = useState(false);
  const [bkashDraft, setBkashDraft] = useState(bkash);

  function addSkill() {
    const trimmed = newSkill.trim();
    if (trimmed && !skills.includes(trimmed)) {
      setSkills([...skills, trimmed]);
    }
    setNewSkill("");
    setAddingSkill(false);
  }

  function removeSkill(s: string) {
    setSkills(skills.filter((x) => x !== s));
  }

  function togglePortfolio(id: string) {
    setPublicPortfolio((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function saveBkash() {
    setBkash(bkashDraft);
    setEditingBkash(false);
  }

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="My profile"
        title="Worker profile"
        description="Your public-facing identity on technoLOgia — skills, portfolio, and payout settings."
      />

      {/* ── Profile hero card ─────────────────────────────────────────── */}
      <div className="overflow-hidden rounded-3xl border border-[#00539C]/20 shadow-[0_40px_80px_-20px_rgba(0,26,62,0.55)]">

        {/* ── Banner ── */}
        <div className="relative h-64 w-full overflow-hidden bg-[#000C1F]">

          {/* Deep radial base — light source from bottom-center */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_100%_at_50%_115%,#003A6E_0%,#000C1F_68%)]" />

          {/* Amber corner glow */}
          <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[#FFD662] opacity-[0.13] blur-3xl" />

          {/* 3-D perspective grid floor */}
          <div
            className="absolute inset-x-0 bottom-0 h-48 opacity-[0.28]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,83,156,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(0,83,156,0.7) 1px, transparent 1px)",
              backgroundSize: "38px 38px",
              transform: "perspective(200px) rotateX(52deg)",
              transformOrigin: "bottom center",
            }}
          />
          {/* Fade grid at the top edge */}
          <div className="absolute inset-x-0 bottom-0 h-48 bg-[linear-gradient(to_bottom,#000C1F_0%,transparent_38%)]" />

          {/* ── Radar rings — blue (slow) ── */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={`br${i}`}
              className="absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#00539C]/50"
              initial={{ width: 0, height: 0, opacity: 0.7 }}
              animate={{ width: 300, height: 300, opacity: 0 }}
              transition={{ repeat: Infinity, duration: 3.8, delay: i * 1.27, ease: "easeOut" }}
            />
          ))}

          {/* ── Radar rings — amber (fast inner) ── */}
          {[0, 1].map((i) => (
            <motion.div
              key={`ar${i}`}
              className="absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FFD662]/35"
              initial={{ width: 0, height: 0, opacity: 1 }}
              animate={{ width: 100, height: 100, opacity: 0 }}
              transition={{ repeat: Infinity, duration: 2.2, delay: i * 1.1, ease: "easeOut" }}
            />
          ))}

          {/* Outer slow dashed orbit */}
          <motion.div
            className="absolute left-1/2 top-[44%] h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#00539C]/22"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
          />

          {/* Inner counter-orbit with yellow travelling dot */}
          <motion.div
            className="absolute left-1/2 top-[44%] h-[140px] w-[140px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#FFD662]/22"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
          >
            <div className="absolute -top-[3px] left-1/2 h-[6px] w-[6px] -translate-x-1/2 rounded-full bg-[#FFD662] shadow-[0_0_12px_5px_rgba(255,214,98,0.6)]" />
          </motion.div>

          {/* Blue travelling dot on outer orbit */}
          <motion.div
            className="absolute left-1/2 top-[44%] h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
          >
            <div className="absolute -top-[3px] left-1/2 h-[6px] w-[6px] -translate-x-1/2 rounded-full bg-[#0EA5E9] shadow-[0_0_10px_4px_rgba(14,165,233,0.55)]" />
          </motion.div>

          {/* Pulsing core dot */}
          <motion.div
            className="absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2"
            animate={{ scale: [1, 1.4, 1], opacity: [1, 0.65, 1] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          >
            <div className="h-3 w-3 rounded-full bg-[#FFD662] shadow-[0_0_20px_8px_rgba(255,214,98,0.45)]" />
          </motion.div>

          {/* Horizontal scan line */}
          <motion.div
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00539C]/55 to-transparent"
            animate={{ y: [0, 256] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "linear", repeatDelay: 0.6 }}
          />

          {/* Role chip — top left */}
          <div className="absolute left-5 top-5 z-10">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.08 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 backdrop-blur-md"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FFD662] opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#FFD662]" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#FFD662]">
                Worker · Earn
              </span>
            </motion.div>
          </div>

          {/* Stat pills — bottom right */}
          <div className="absolute bottom-5 right-5 z-10 flex items-center gap-2">
            {[
              { label: "Total earned", value: "৳87.4k", color: "#FFD662" },
              { label: "Rating", value: "4.9 ★", color: "#ffffff" },
              { label: "Completed", value: "42 jobs", color: "#6EE7B7" },
            ].map((pill, i) => (
              <motion.div
                key={pill.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.14 + i * 0.08 }}
                className="hidden sm:flex flex-col items-center rounded-2xl border border-white/10 bg-black/40 px-3.5 py-2 backdrop-blur-md"
              >
                <span className="font-display text-base font-bold leading-none" style={{ color: pill.color }}>
                  {pill.value}
                </span>
                <span className="mt-0.5 font-mono text-[9px] uppercase tracking-widest text-white/35">
                  {pill.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Identity strip ── */}
        <div className="relative bg-white px-6 pb-6 pt-0">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00539C]/20 to-transparent" />

          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            {/* Avatar + identity */}
            <div className="-mt-12 flex items-end gap-5">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.12, type: "spring", stiffness: 280, damping: 22 }}
                className="relative flex-shrink-0"
              >
                {/* Rotating conic-gradient glow ring */}
                <motion.div
                  className="absolute -inset-2 rounded-[22px]"
                  style={{
                    background: "conic-gradient(from 0deg, #FFD662, #00539C, #10B981, #FFD662)",
                    filter: "blur(6px)",
                    opacity: 0.65,
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                />
                <span className="relative flex h-24 w-24 items-center justify-center rounded-[18px] border-[3px] border-white bg-[linear-gradient(135deg,#001A3E_0%,#003A6E_55%,#00539C_100%)] text-3xl font-black tracking-tight text-white shadow-2xl">
                  NH
                </span>
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 400 }}
                  className="absolute -bottom-1.5 -right-1.5 flex h-7 w-7 items-center justify-center rounded-full border-[2.5px] border-white bg-[#10B981] shadow-[0_4px_12px_rgba(16,185,129,0.45)]"
                >
                  <ShieldCheck className="h-3.5 w-3.5 text-white" />
                </motion.span>
              </motion.div>

              {/* Name + meta */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18 }}
                className="mb-1 min-w-0"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="font-display text-2xl font-black text-[#001A3E]">Nafis Hossain</h2>
                  <span className="inline-flex items-center gap-1 rounded-full bg-[linear-gradient(135deg,#DCFCE7,#BBF7D0)] px-2.5 py-0.5 font-mono text-[10px] font-bold text-[#065F46] shadow-[0_0_0_1px_#BBF7D0]">
                    <ShieldCheck className="h-2.5 w-2.5" /> Verified
                  </span>
                </div>
                <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="flex items-center gap-1.5 text-sm font-medium text-[#6B7280]">
                    <GraduationCap className="h-3.5 w-3.5 text-[#00539C]" />
                    EEE · University of Asia Pacific
                  </span>
                  <span className="hidden h-1 w-1 rounded-full bg-[#D1D5DB] sm:block" />
                  <span className="flex items-center gap-1.5 text-sm font-medium text-[#6B7280]">
                    <MapPin className="h-3.5 w-3.5 text-[#00539C]" />
                    Dhaka, Bangladesh
                  </span>
                  <span className="hidden h-1 w-1 rounded-full bg-[#D1D5DB] sm:block" />
                  <span className="flex items-center gap-1.5 text-sm font-medium text-[#6B7280]">
                    <Zap className="h-3.5 w-3.5 text-[#F59E0B]" />
                    Embedded Systems Lab
                  </span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    { label: "Top Earner", bg: "bg-[linear-gradient(135deg,#FEF3C7,#FDE68A)]", text: "text-[#78350F]", border: "border-[#FDE68A]" },
                    { label: "IEEE Specialist", bg: "bg-[linear-gradient(135deg,#EFF6FF,#DBEAFE)]", text: "text-[#1E40AF]", border: "border-[#BFDBFE]" },
                    { label: "IoT Expert", bg: "bg-[linear-gradient(135deg,#F0FDF4,#DCFCE7)]", text: "text-[#14532D]", border: "border-[#BBF7D0]" },
                    { label: "48hr Delivery", bg: "bg-[linear-gradient(135deg,#FDF4FF,#F3E8FF)]", text: "text-[#581C87]", border: "border-[#E9D5FF]" },
                  ].map((chip) => (
                    <span
                      key={chip.label}
                      className={`inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[10px] font-semibold ${chip.bg} ${chip.text} ${chip.border}`}
                    >
                      {chip.label}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="flex items-center gap-2 pb-1"
            >
              <button className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--color-border)] bg-white px-4 py-2 text-xs font-semibold text-[color:var(--color-primary)] shadow-sm transition hover:border-[#00539C]/40 hover:shadow-md">
                <Edit3 className="h-3.5 w-3.5" /> Edit profile
              </button>
              <button className="inline-flex items-center gap-1.5 rounded-full bg-[linear-gradient(135deg,#001A3E_0%,#00539C_100%)] px-4 py-2 text-xs font-semibold text-white shadow-[0_8px_24px_-6px_rgba(0,83,156,0.5)] transition hover:shadow-[0_12px_32px_-6px_rgba(0,83,156,0.65)] hover:-translate-y-0.5">
                <Eye className="h-3.5 w-3.5" /> View public
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Stats row ─────────────────────────────────────────────────── */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <StatCard
          tone="primary"
          label="Total earned"
          value="৳87,400"
          delta={{ value: "+18%", direction: "up" }}
          icon={BanknoteIcon}
          hint="All time"
        />
        <StatCard
          tone="accent"
          label="This month"
          value="৳22,100"
          delta={{ value: "+৳3,200", direction: "up" }}
          icon={Wallet}
        />
        <StatCard
          label="Completed"
          value={String(myCompleted.length + 40)}
          delta={{ value: "all time", direction: "up" }}
          icon={CheckCircle2}
        />
        <StatCard
          label="Active now"
          value={String(me.activeAssignments)}
          icon={ClipboardList}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.4fr_1fr]">
        {/* ── Left column ─────────────────────────────────────────────── */}
        <div className="space-y-6">

          {/* About */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-[color:var(--color-accent)]" />
                About
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 p-5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  { label: "University", value: "University of Asia Pacific (UAP)" },
                  { label: "Department", value: "Electrical & Electronic Engineering (EEE)" },
                  { label: "Year", value: "4th year (Final year)" },
                  { label: "Lab affiliation", value: "UAP Embedded Systems & IoT Lab" },
                  { label: "Student ID", value: "***-***-*** (verified)" },
                  { label: "Member since", value: "January 2026" },
                ].map((f) => (
                  <div key={f.label} className="rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-3">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-[color:var(--color-text-secondary)]">
                      {f.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-[color:var(--color-text-primary)]">
                      {f.value}
                    </p>
                  </div>
                ))}
              </div>
              <div className="rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-3">
                <p className="font-mono text-[10px] uppercase tracking-wider text-[color:var(--color-text-secondary)]">
                  Bio
                </p>
                <p className="mt-1 text-sm leading-relaxed text-[color:var(--color-text-primary)]">
                  Final-year EEE student at UAP with hands-on experience in embedded systems, IoT, power electronics, and IEEE-standard technical writing. I've completed 40+ assignments for international clients across the UK, Australia, UAE, and Ireland — always on time, always clean.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card>
            <CardHeader className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-[color:var(--color-accent)]" />
                Skills & expertise
              </CardTitle>
              <button
                onClick={() => setAddingSkill(true)}
                className="inline-flex items-center gap-1 rounded-full border border-[color:var(--color-border)] px-2.5 py-1 text-xs font-semibold text-[color:var(--color-primary)] hover:bg-[color:var(--color-surface)]"
              >
                <Plus className="h-3 w-3" /> Add
              </button>
            </CardHeader>
            <CardContent className="p-5">
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <motion.span
                    key={s}
                    initial={{ scale: 0.85, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="group inline-flex items-center gap-1.5 rounded-full border border-[#00539C]/25 bg-[#EFF6FF] px-3 py-1.5 text-xs font-semibold text-[#003A6E]"
                  >
                    {s}
                    <button
                      onClick={() => removeSkill(s)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="h-3 w-3 text-[#6B7280] hover:text-[#EF4444]" />
                    </button>
                  </motion.span>
                ))}

                {addingSkill && (
                  <div className="flex items-center gap-1.5">
                    <input
                      autoFocus
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") addSkill();
                        if (e.key === "Escape") setAddingSkill(false);
                      }}
                      placeholder="New skill…"
                      className="w-28 rounded-full border border-[#00539C]/40 bg-white px-3 py-1.5 text-xs outline-none focus:border-[#00539C] focus:shadow-[0_0_0_3px_rgba(0,83,156,0.12)]"
                    />
                    <button
                      onClick={addSkill}
                      className="rounded-full bg-[color:var(--color-primary)] px-2.5 py-1.5 text-xs font-semibold text-white"
                    >
                      Add
                    </button>
                    <button
                      onClick={() => setAddingSkill(false)}
                      className="rounded-full p-1.5 text-[color:var(--color-text-secondary)] hover:bg-[color:var(--color-surface)]"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Portfolio */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#10B981]" />
                Work portfolio
              </CardTitle>
              <p className="mt-1 text-sm text-[color:var(--color-text-secondary)]">
                Toggle visibility — public items appear on your public profile card shown to clients.
              </p>
            </CardHeader>
            <CardContent className="p-5 space-y-3">
              {myCompleted.length === 0 ? (
                <p className="text-sm text-[color:var(--color-text-secondary)]">No completed assignments yet.</p>
              ) : (
                myCompleted.map((a) => (
                  <div
                    key={a.id}
                    className={`flex items-center justify-between gap-3 rounded-xl border p-3 transition ${
                      publicPortfolio[a.id]
                        ? "border-[#BBF7D0] bg-[#F0FDF4]"
                        : "border-[color:var(--color-border)] bg-white"
                    }`}
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="font-mono text-[10px] text-[color:var(--color-text-secondary)]">{a.id}</p>
                        {a.verified && (
                          <span className="rounded-full bg-[#DCFCE7] px-2 py-0.5 font-mono text-[9px] font-semibold text-[#065F46]">
                            ✓ Verified
                          </span>
                        )}
                      </div>
                      <p className="mt-0.5 truncate text-sm font-semibold text-[color:var(--color-text-primary)]">
                        {a.title}
                      </p>
                      <p className="text-xs text-[color:var(--color-text-secondary)]">
                        {a.clientCountry} · ${a.budget} {a.currency} · {a.deadline}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <StatusBadge status={a.status} />
                      <button
                        onClick={() => togglePortfolio(a.id)}
                        className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                          publicPortfolio[a.id]
                            ? "bg-[#10B981] text-white"
                            : "border border-[color:var(--color-border)] text-[color:var(--color-text-secondary)] hover:border-[#00539C]/40 hover:text-[color:var(--color-primary)]"
                        }`}
                      >
                        {publicPortfolio[a.id] ? (
                          <><Eye className="h-3 w-3" /> Public</>
                        ) : (
                          <><EyeOff className="h-3 w-3" /> Private</>
                        )}
                      </button>
                    </div>
                  </div>
                ))
              )}
            </CardContent>
          </Card>
        </div>

        {/* ── Right column ─────────────────────────────────────────────── */}
        <div className="space-y-6">

          {/* bKash payout */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BanknoteIcon className="h-4 w-4 text-[color:var(--color-accent)]" />
                bKash payout
              </CardTitle>
            </CardHeader>
            <CardContent className="p-5 space-y-4">
              <div className="rounded-2xl border border-[#FFD662]/40 bg-[linear-gradient(135deg,#001A3E_0%,#003A6E_100%)] p-4 text-white">
                <p className="font-mono text-[10px] uppercase tracking-wider text-[#FFD662]/80">
                  Registered bKash number
                </p>
                {editingBkash ? (
                  <div className="mt-2 flex items-center gap-2">
                    <input
                      autoFocus
                      value={bkashDraft}
                      onChange={(e) => setBkashDraft(e.target.value)}
                      className="flex-1 rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 font-mono text-sm text-white outline-none placeholder:text-white/40 focus:border-[#FFD662]/60"
                    />
                    <button
                      onClick={saveBkash}
                      className="rounded-lg bg-[#FFD662] px-3 py-1.5 text-xs font-bold text-[#001A3E]"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => { setBkashDraft(bkash); setEditingBkash(false); }}
                      className="rounded-lg border border-white/20 px-3 py-1.5 text-xs text-white/70"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div className="mt-2 flex items-center justify-between">
                    <p className="font-mono text-lg font-bold">{bkash}</p>
                    <button
                      onClick={() => setEditingBkash(true)}
                      className="flex items-center gap-1 rounded-full border border-white/20 px-2.5 py-1 text-[10px] text-white/70 hover:border-[#FFD662]/60 hover:text-[#FFD662]"
                    >
                      <Edit3 className="h-3 w-3" /> Edit
                    </button>
                  </div>
                )}
                <p className="mt-3 text-[11px] text-white/50">
                  Payouts are released within 48 hours of client approval.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-[#FFD662]/30 bg-[#FFFBEB] p-3 text-center">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-[#92400E]">Pending</p>
                  <p className="mt-1 font-display text-xl font-bold text-[#003A6E]">৳14,200</p>
                </div>
                <div className="rounded-xl border border-[#BBF7D0] bg-[#F0FDF4] p-3 text-center">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-[#065F46]">Paid out</p>
                  <p className="mt-1 font-display text-xl font-bold text-[#003A6E]">৳73,200</p>
                </div>
              </div>
              <Button href="/dashboard/worker/earnings" variant="primary" size="sm" className="w-full">
                Withdraw earnings
              </Button>
            </CardContent>
          </Card>

          {/* Reviews */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-4 w-4 fill-[#FFD662] text-[#FFD662]" />
                Client reviews
              </CardTitle>
              <p className="mt-1 text-sm text-[color:var(--color-text-secondary)]">
                {reviews.length} reviews · avg 4.9 / 5
              </p>
            </CardHeader>
            <CardContent className="p-5 space-y-4">
              {reviews.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-xs font-semibold text-[color:var(--color-text-primary)]">
                        {r.client} · {r.country}
                      </p>
                      <div className="mt-0.5 flex items-center gap-2">
                        <Stars rating={r.rating} />
                        <span className="font-mono text-[10px] text-[color:var(--color-text-secondary)]">{r.date}</span>
                      </div>
                    </div>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-[color:var(--color-text-secondary)]">
                    &ldquo;{r.text}&rdquo;
                  </p>
                </motion.div>
              ))}
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}
