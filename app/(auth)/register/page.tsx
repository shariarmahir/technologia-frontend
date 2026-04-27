"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  School,
  ShieldCheck,
  ArrowRight,
  FlaskConical,
  CheckCircle2,
  Mail,
  Lock,
  User,
  Building2,
  FileText,
  Cpu,
  BookOpen,
  Award,
  Eye,
  EyeOff,
  Check,
  Phone,
  BanknoteIcon,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Role = "client" | "worker" | "school" | "lab";

const roles: {
  value: Role;
  title: string;
  description: string;
  icon: typeof GraduationCap;
  destination: string;
  badge?: string;
  features: string[];
}[] = [
  {
    value: "client",
    title: "International Student",
    description: "Post assignments, get matched with expert Bangladeshi students, pay on delivery.",
    icon: GraduationCap,
    destination: "/dashboard/client",
    features: [
      "Post any assignment — lab reports to IEEE papers",
      "Matched with verified university students",
      "Pay only after you approve the work",
      "Work verified by Asst. Prof. Masum Hawlader",
      "Real-time progress tracker & revision requests",
    ],
  },
  {
    value: "worker",
    title: "Bangladeshi University Student",
    description: "Earn real income by completing assignments for international students.",
    icon: Briefcase,
    destination: "/dashboard/worker",
    badge: "Earn ৳",
    features: [
      "Browse assignments matched to your department",
      "Bid or accept at your own price & timeline",
      "Get paid via bKash within 48 hrs of approval",
      "Build a portfolio of completed work",
      "Top earners make ৳45,000+ per month",
    ],
  },
  {
    value: "school",
    title: "School / College",
    description: "Partner for teams, workshops, events & achievements.",
    icon: School,
    destination: "/dashboard/school",
    features: [
      "Weekly STEM workshops (2× per week, 1.5 hrs)",
      "Science fairs & inter-school competitions",
      "Achievement showcase & Level Up XP system",
      "Team management & event calendar",
      "Shareable public school portfolio",
    ],
  },
  {
    value: "lab",
    title: "University Project Lab",
    description: "Run workshops, issue inter-university challenges, host competitions.",
    icon: FlaskConical,
    destination: "/dashboard/lab",
    badge: "New",
    features: [
      "Issue inter-university challenges",
      "Host competitions with live leaderboards",
      "Workshop materials & lesson planning",
      "Lab XP system & achievement tracking",
      "Faculty advisor & member management",
    ],
  },
];

const clientBenefits = [
  { icon: FileText, label: "Lab Reports", sub: "EEE, Chemistry, Physics" },
  { icon: BookOpen, label: "IEEE Papers", sub: "Research & publications" },
  { icon: Cpu, label: "IoT Projects", sub: "Arduino, ESP32, sensors" },
  { icon: Award, label: "Prof. Verified", sub: "UAP · EEE department" },
];

const workerBenefits = [
  { icon: BanknoteIcon, label: "bKash Payouts", sub: "Within 48 hrs" },
  { icon: GraduationCap, label: "Any Dept.", sub: "EEE, CSE, MBA…" },
  { icon: Award, label: "Build Portfolio", sub: "Verified work samples" },
  { icon: Briefcase, label: "Flexible Hours", sub: "Work at your pace" },
];

const steps = ["Choose role", "Your details", "Launch"];

export default function RegisterPage() {
  const [role, setRole] = useState<Role>("client");
  const selected = roles.find((r) => r.value === role)!;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Eyebrow */}
      <span className="inline-flex items-center gap-2 rounded-full border border-[#FFD662]/40 bg-[#FFFBEB] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[#003A6E]">
        <span className="h-1 w-1 rounded-full bg-[#FFD662]" />
        Get started — it&apos;s free
      </span>

      <h1 className="mt-3 font-display text-[2rem] font-semibold leading-tight tracking-[-0.01em] text-[color:var(--color-primary-dark)]">
        Create your{" "}
        <span className="bg-gradient-to-r from-[#003A6E] via-[#00539C] to-[#FFD662] bg-clip-text text-transparent">
          technoLOgia
        </span>{" "}
        account
      </h1>
      <p className="mt-1.5 text-sm text-[color:var(--color-text-secondary)]">
        Pick the role that fits you — your dashboard will be tailored to match.
      </p>

      {/* Step progress */}
      <div className="mt-5 flex items-start">
        {steps.map((step, i) => (
          <div key={step} className="flex flex-1 flex-col items-center">
            <div className="flex w-full items-center">
              <div
                className={cn(
                  "flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-[11px] font-bold transition",
                  i === 0
                    ? "bg-[#FFD662] text-[#001A3E] shadow-[0_4px_12px_-4px_rgba(255,214,98,0.6)]"
                    : "border-2 border-[color:var(--color-border)] text-[color:var(--color-text-secondary)]"
                )}
              >
                {i === 0 ? <Check className="h-3.5 w-3.5" /> : i + 1}
              </div>
              {i < steps.length - 1 && (
                <div
                  className={cn(
                    "h-px flex-1 transition",
                    i === 0 ? "bg-[#FFD662]/40" : "bg-[color:var(--color-border)]"
                  )}
                />
              )}
            </div>
            <span
              className={cn(
                "mt-1.5 font-mono text-[9px] uppercase tracking-wider",
                i === 0
                  ? "font-semibold text-[#003A6E]"
                  : "text-[color:var(--color-text-secondary)]"
              )}
            >
              {step}
            </span>
          </div>
        ))}
      </div>

      {/* Role selector */}
      <div className="mt-6 space-y-2.5">
        {roles.map((r) => {
          const Icon = r.icon;
          const active = r.value === role;
          return (
            <button
              key={r.value}
              type="button"
              onClick={() => setRole(r.value)}
              className={cn(
                "group relative flex w-full items-start gap-4 overflow-hidden rounded-2xl border p-4 text-left transition-all",
                active
                  ? "border-[#FFD662]/60 bg-[#FFFBEB] shadow-[0_12px_32px_-16px_rgba(255,214,98,0.4)]"
                  : "border-[color:var(--color-border)] bg-white hover:-translate-y-0.5 hover:border-[#FFD662]/30 hover:shadow-[0_10px_28px_-18px_rgba(255,214,98,0.25)]"
              )}
            >
              {active && (
                <span className="absolute inset-y-0 left-0 w-1 rounded-l-2xl bg-[linear-gradient(180deg,#FFD662_0%,#FFE48A_100%)]" />
              )}
              <span
                className={cn(
                  "flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl transition",
                  active
                    ? "bg-[linear-gradient(135deg,#003A6E_0%,#00539C_100%)] text-white shadow-[0_8px_20px_-8px_rgba(0,83,156,0.5)]"
                    : "bg-[color:var(--color-surface)] text-[color:var(--color-primary)]"
                )}
              >
                <Icon className="h-5 w-5" />
              </span>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-display text-sm font-semibold text-[color:var(--color-primary-dark)]">
                    {r.title}
                  </p>
                  {r.badge && (
                    <span className="rounded-full bg-[linear-gradient(135deg,#FFD662_0%,#FFE48A_100%)] px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-[#001A3E] shadow-[0_4px_10px_-4px_rgba(255,214,98,0.6)]">
                      {r.badge}
                    </span>
                  )}
                </div>
                <p className="mt-0.5 text-xs leading-relaxed text-[color:var(--color-text-secondary)]">
                  {r.description}
                </p>

                <AnimatePresence>
                  {active && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                      className="mt-2.5 space-y-1 overflow-hidden"
                    >
                      {r.features.map((f) => (
                        <li key={f} className="flex items-center gap-1.5 text-[11px] text-[#003A6E]">
                          <CheckCircle2 className="h-3 w-3 flex-shrink-0 text-[#00539C]" />
                          {f}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>

              <span
                className={cn(
                  "mt-1 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full border-2 transition",
                  active
                    ? "border-[#FFD662] bg-[#FFD662] shadow-[0_0_0_4px_rgba(255,214,98,0.25)]"
                    : "border-[color:var(--color-border)]"
                )}
              >
                {active && <span className="h-1.5 w-1.5 rounded-full bg-[#001A3E]" />}
              </span>
            </button>
          );
        })}
      </div>

      {/* Context panel: client */}
      <AnimatePresence>
        {role === "client" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.32 }}
            className="mt-4 rounded-2xl border border-[#FFD662]/30 bg-[linear-gradient(135deg,#FFFBEB_0%,#FFF8DC_100%)] p-4"
          >
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[#003A6E]">
              What&apos;s included · Client plan
            </p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {clientBenefits.map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex flex-col items-center gap-1.5 rounded-xl border border-[#FFD662]/30 bg-white p-2.5 text-center">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#003A6E,#00539C)] text-white">
                    <Icon className="h-4 w-4" />
                  </span>
                  <p className="text-[11px] font-semibold text-[color:var(--color-primary-dark)]">{label}</p>
                  <p className="text-[10px] text-[color:var(--color-text-secondary)]">{sub}</p>
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-start gap-2 rounded-xl border border-[#BBF7D0] bg-[#F0FDF4] px-3 py-2">
              <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#059669]" />
              <p className="text-[11px] leading-relaxed text-[#065F46]">
                <span className="font-semibold">Quality guarantee</span> — All work verified by{" "}
                <span className="font-semibold">Masum Hawlader</span>, Asst. Prof., EEE, University of Asia Pacific.
              </p>
            </div>
          </motion.div>
        )}

        {role === "worker" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.32 }}
            className="mt-4 rounded-2xl border border-[#FFD662]/40 bg-[linear-gradient(135deg,#001A3E_0%,#003A6E_100%)] p-4"
          >
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[#FFD662]">
              Worker benefits · Start earning today
            </p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {workerBenefits.map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex flex-col items-center gap-1.5 rounded-xl border border-white/10 bg-white/10 p-2.5 text-center">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#FFD662] text-[#001A3E]">
                    <Icon className="h-4 w-4" />
                  </span>
                  <p className="text-[11px] font-semibold text-white">{label}</p>
                  <p className="text-[10px] text-white/60">{sub}</p>
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-2 rounded-xl border border-[#FFD662]/30 bg-white/10 px-3 py-2">
              <BanknoteIcon className="h-4 w-4 flex-shrink-0 text-[#FFD662]" />
              <p className="text-[11px] text-white/80">
                <span className="font-semibold text-[#FFD662]">University ID verification required</span>{" "}
                — you&apos;ll upload your student ID after registration to unlock paid assignments.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Form */}
      <div className="mt-6">
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[color:var(--color-text-secondary)]">
          Your details
        </p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Field label="Full name" icon={<User className="h-4 w-4" />} placeholder="Your full name" />
          <Field label="Email" icon={<Mail className="h-4 w-4" />} type="email" placeholder="you@example.com" />

          {role === "client" && (
            <>
              <Field label="University / Institution" icon={<Building2 className="h-4 w-4" />} placeholder="University name" className="sm:col-span-2" />
              <Field label="Country" icon={<Building2 className="h-4 w-4" />} placeholder="USA, UK, Australia…" />
              <Field label="Phone (optional)" icon={<Phone className="h-4 w-4" />} type="tel" placeholder="+1 XXX XXX XXXX" />
            </>
          )}

          {role === "worker" && (
            <>
              <Field label="University" icon={<Building2 className="h-4 w-4" />} placeholder="BUET, NSU, UAP…" className="sm:col-span-2" />
              <Field label="Department" icon={<GraduationCap className="h-4 w-4" />} placeholder="EEE, CSE, MBA…" />
              <Field label="bKash number" icon={<BanknoteIcon className="h-4 w-4" />} type="tel" placeholder="01XXXXXXXXX" />
            </>
          )}

          {role === "school" && (
            <>
              <Field label="School / College name" icon={<Building2 className="h-4 w-4" />} placeholder="Dhaka Residential Model College" className="sm:col-span-2" />
              <Field label="Location / District" icon={<Building2 className="h-4 w-4" />} placeholder="Dhaka, Bangladesh" />
              <Field label="Contact phone" icon={<Phone className="h-4 w-4" />} type="tel" placeholder="+880 1X XX XXX XXX" />
            </>
          )}

          {role === "lab" && (
            <>
              <Field label="University" icon={<Building2 className="h-4 w-4" />} placeholder="BUET · IEEE Student Branch" className="sm:col-span-2" />
              <Field label="Lab / Program name" icon={<FlaskConical className="h-4 w-4" />} placeholder="Robotics Project Lab" />
              <Field label="Faculty advisor email" icon={<Mail className="h-4 w-4" />} type="email" placeholder="advisor@buet.ac.bd" />
            </>
          )}

          <PasswordField label="Password" placeholder="Min. 8 characters" />
          <PasswordField label="Confirm password" placeholder="Re-enter password" />
        </div>
      </div>

      {/* Terms */}
      <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-3.5 text-xs text-[color:var(--color-text-secondary)]">
        <input type="checkbox" className="mt-0.5 h-4 w-4 cursor-pointer rounded border-[color:var(--color-border)] accent-[#00539C]" defaultChecked />
        <span className="leading-relaxed">
          I agree to the{" "}
          <Link href="#" className="text-[color:var(--color-primary)] underline underline-offset-2">Terms of Service</Link>{" "}
          and{" "}
          <Link href="#" className="text-[color:var(--color-primary)] underline underline-offset-2">Privacy Policy</Link>.
          {role === "worker" && (
            <span className="text-[#003A6E]">{" "}I understand that payout is released only after client approval.</span>
          )}
          {role === "client" && (
            <span className="text-[#003A6E]">{" "}Payment is held in escrow and released to the worker upon my approval.</span>
          )}
        </span>
      </div>

      <Button href={selected.destination} variant="sky" size="lg" glow className="mt-5 w-full">
        Create account · Enter {selected.title}
        <ArrowRight className="h-4 w-4" />
      </Button>

      <p className="mt-5 text-center text-sm text-[color:var(--color-text-secondary)]">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-[color:var(--color-primary)] transition hover:text-[color:var(--color-primary-light)]">
          Sign in →
        </Link>
      </p>
    </motion.div>
  );
}

function Field({ label, icon, className, ...rest }: { label: string; icon: React.ReactNode; className?: string } & Omit<React.InputHTMLAttributes<HTMLInputElement>, "className">) {
  return (
    <label className={cn("block", className)}>
      <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[color:var(--color-text-secondary)]">{label}</span>
      <div className="relative mt-1.5">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[color:var(--color-text-secondary)]">{icon}</span>
        <input {...rest} className="w-full rounded-xl border border-[color:var(--color-border)] bg-white py-3 pl-9 pr-3 text-sm outline-none transition focus:border-[#00539C] focus:bg-[#F7F9FC] focus:shadow-[0_0_0_4px_rgba(0,83,156,0.12)]" />
      </div>
    </label>
  );
}

function PasswordField({ label, placeholder }: { label: string; placeholder?: string }) {
  const [show, setShow] = useState(false);
  return (
    <label className="block">
      <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[color:var(--color-text-secondary)]">{label}</span>
      <div className="relative mt-1.5">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[color:var(--color-text-secondary)]"><Lock className="h-4 w-4" /></span>
        <input type={show ? "text" : "password"} placeholder={placeholder ?? "••••••••"} className="w-full rounded-xl border border-[color:var(--color-border)] bg-white py-3 pl-9 pr-10 text-sm outline-none transition focus:border-[#00539C] focus:bg-[#F7F9FC] focus:shadow-[0_0_0_4px_rgba(0,83,156,0.12)]" />
        <button type="button" onClick={() => setShow((s) => !s)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[color:var(--color-text-secondary)] transition hover:text-[color:var(--color-primary)]" aria-label={show ? "Hide password" : "Show password"}>
          {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </button>
      </div>
    </label>
  );
}
