"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  BanknoteIcon,
  TrendingUp,
  CheckCircle2,
  Clock,
  ArrowDownToLine,
  Star,
  X,
} from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { StatCard } from "@/components/dashboard/stat-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { workerEarningsSeries, assignments } from "@/lib/mock-data";

const completedWork = assignments.filter(
  (a) => a.worker === "Nafis H." && a.status === "completed"
);

type PayoutStatus = "pending" | "approved" | "sent";

const payoutHistory: {
  id: string;
  amount: number;
  assignment: string;
  bkash: string;
  status: PayoutStatus;
  date: string;
}[] = [
  { id: "PO-0041", amount: 7200, assignment: "TL-2036 · EEE lab report", bkash: "017XXXXXXXX", status: "sent", date: "2026-04-14" },
  { id: "PO-0038", amount: 9800, assignment: "TL-2031 · Smart grid IoT", bkash: "017XXXXXXXX", status: "sent", date: "2026-04-06" },
  { id: "PO-0035", amount: 6600, assignment: "TL-2028 · IEEE conference paper", bkash: "017XXXXXXXX", status: "sent", date: "2026-03-28" },
  { id: "PO-0032", amount: 11400, assignment: "TL-2024 · Embedded systems project", bkash: "017XXXXXXXX", status: "sent", date: "2026-03-15" },
];

const PAYOUT_STATUS = {
  sent: { label: "Sent", className: "bg-[#DCFCE7] text-[#065F46]" },
  approved: { label: "Approved", className: "bg-[#DBEAFE] text-[#1E40AF]" },
  pending: { label: "Pending", className: "bg-[#FEF9C3] text-[#92400E]" },
};

function WithdrawModal({ onClose }: { onClose: () => void }) {
  const [bkash, setBkash] = useState("017XXXXXXXX");
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-[#001A3E]/60 backdrop-blur-sm" onClick={onClose} />
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative w-full max-w-sm rounded-2xl bg-white p-8 text-center shadow-2xl"
        >
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#DCFCE7]">
            <CheckCircle2 className="h-8 w-8 text-[#10B981]" />
          </div>
          <h3 className="font-display text-lg font-bold text-[#003A6E]">Withdrawal requested</h3>
          <p className="mt-2 text-sm text-[color:var(--color-text-secondary)]">
            ৳14,200 will be sent to <span className="font-semibold text-[#003A6E]">{bkash}</span> within 24 hours after admin approval.
          </p>
          <Button variant="primary" size="sm" className="mt-5 w-full" onClick={onClose}>
            Done
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#001A3E]/60 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="relative w-full max-w-md rounded-2xl bg-white shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-[#E5E7EB] p-5">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-[color:var(--color-text-secondary)]">Withdraw earnings</p>
            <h3 className="mt-0.5 font-display text-base font-bold text-[#003A6E]">Request bKash payout</h3>
          </div>
          <button onClick={onClose} className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-[#F1F5F9]">
            <X className="h-4 w-4 text-[color:var(--color-text-secondary)]" />
          </button>
        </div>
        <div className="space-y-4 p-5">
          <div className="rounded-xl border border-[#FFD662]/30 bg-[#FFFBEB] p-4">
            <p className="text-xs text-[#92400E]">Available to withdraw</p>
            <p className="mt-1 font-display text-2xl font-bold text-[#003A6E]">৳14,200</p>
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-semibold text-[color:var(--color-text-primary)]">
              bKash number
            </label>
            <input
              value={bkash}
              onChange={(e) => setBkash(e.target.value)}
              className="w-full rounded-xl border border-[#00539C]/20 bg-white py-2.5 px-3 text-sm outline-none transition focus:border-[#00539C] focus:shadow-[0_0_0_4px_rgba(0,83,156,0.12)]"
            />
          </div>
          <p className="text-xs text-[color:var(--color-text-secondary)]">
            Payouts are processed within 24 hours after admin approval. A small platform fee (5%) may apply.
          </p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex-1" onClick={onClose}>Cancel</Button>
            <Button variant="sky" size="sm" glow className="flex-1" onClick={() => setSubmitted(true)}>
              Request withdrawal
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function WorkerEarnings() {
  const [withdrawOpen, setWithdrawOpen] = useState(false);
  const max = Math.max(...workerEarningsSeries.map((e) => e.earned));

  return (
    <>
      {withdrawOpen && <WithdrawModal onClose={() => setWithdrawOpen(false)} />}

      <div className="space-y-7">
        <PageHeader
          eyebrow="Earnings"
          title="Your income overview."
          description="Track monthly earnings, payout history, and withdraw to bKash."
          actions={
            <Button variant="sky" size="sm" glow onClick={() => setWithdrawOpen(true)}>
              <ArrowDownToLine className="h-4 w-4" /> Withdraw ৳14,200
            </Button>
          }
        />

        {/* Stats */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
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
            icon={TrendingUp}
          />
          <StatCard
            label="Pending payout"
            value="৳14,200"
            icon={Clock}
          />
          <StatCard
            label="Rating"
            value="4.9 / 5"
            delta={{ value: "42 reviews", direction: "up" }}
            icon={Star}
          />
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.3fr_1fr]">
          {/* Monthly bar chart */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-[color:var(--color-accent)]" />
                Monthly earnings
              </CardTitle>
              <p className="mt-1 text-sm text-[color:var(--color-text-secondary)]">
                Payouts received each month
              </p>
            </CardHeader>
            <CardContent className="p-5">
              <div className="space-y-3">
                {workerEarningsSeries.map((e) => {
                  const pct = Math.round((e.earned / max) * 100);
                  return (
                    <motion.div
                      key={e.month}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-3"
                    >
                      <span className="w-7 font-mono text-[11px] text-[color:var(--color-text-secondary)]">
                        {e.month}
                      </span>
                      <div className="relative flex-1 overflow-hidden rounded-full bg-[#F1F5F9] h-5">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${pct}%` }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                          className="h-full rounded-full bg-[linear-gradient(90deg,#003A6E_0%,#FFD662_100%)]"
                        />
                        <span className="absolute right-2 top-1/2 -translate-y-1/2 font-mono text-[10px] font-semibold text-[#003A6E] mix-blend-multiply">
                          ৳{(e.earned / 1000).toFixed(1)}k
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-6 rounded-xl border border-[#FFD662]/30 bg-[#FFFBEB] p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-[#92400E]">
                      Pending payout · ready to withdraw
                    </p>
                    <p className="mt-1 font-display text-2xl font-bold text-[#003A6E]">৳14,200</p>
                  </div>
                  <Button variant="sky" size="sm" glow onClick={() => setWithdrawOpen(true)}>
                    Withdraw
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Completed assignments */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#10B981]" />
                Completed work
              </CardTitle>
              <p className="mt-1 text-sm text-[color:var(--color-text-secondary)]">
                Assignments you've delivered
              </p>
            </CardHeader>
            <CardContent className="space-y-3 p-5">
              {completedWork.length > 0 ? completedWork.map((a) => (
                <div key={a.id} className="flex items-center justify-between rounded-xl border border-[#BBF7D0]/50 bg-[#F0FDF4]/60 p-3">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-[color:var(--color-text-primary)]">{a.title}</p>
                    <p className="text-xs text-[color:var(--color-text-secondary)]">
                      {a.clientCountry} · ${a.budget}
                    </p>
                  </div>
                  {a.verified && (
                    <span className="ml-2 flex-shrink-0 rounded-full bg-[#DCFCE7] px-2 py-0.5 font-mono text-[9px] font-semibold text-[#065F46]">
                      ✓ Verified
                    </span>
                  )}
                </div>
              )) : (
                <p className="text-sm text-[color:var(--color-text-secondary)] py-4 text-center">
                  No completed assignments yet.
                </p>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Payout history */}
        <Card>
          <CardHeader className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <BanknoteIcon className="h-4 w-4 text-[color:var(--color-accent)]" />
                Payout history
              </CardTitle>
              <p className="mt-1 text-sm text-[color:var(--color-text-secondary)]">
                All bKash transfers sent to your account
              </p>
            </div>
          </CardHeader>
          <CardContent className="p-5">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#E5E7EB]">
                    <th className="pb-3 text-left font-mono text-[10px] uppercase tracking-wider text-[color:var(--color-text-secondary)]">ID</th>
                    <th className="pb-3 text-left font-mono text-[10px] uppercase tracking-wider text-[color:var(--color-text-secondary)]">Assignment</th>
                    <th className="pb-3 text-left font-mono text-[10px] uppercase tracking-wider text-[color:var(--color-text-secondary)]">bKash</th>
                    <th className="pb-3 text-right font-mono text-[10px] uppercase tracking-wider text-[color:var(--color-text-secondary)]">Amount</th>
                    <th className="pb-3 text-center font-mono text-[10px] uppercase tracking-wider text-[color:var(--color-text-secondary)]">Status</th>
                    <th className="pb-3 text-right font-mono text-[10px] uppercase tracking-wider text-[color:var(--color-text-secondary)]">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F1F5F9]">
                  {payoutHistory.map((p) => {
                    const badge = PAYOUT_STATUS[p.status];
                    return (
                      <tr key={p.id} className="hover:bg-[#F8FAFC]">
                        <td className="py-3 font-mono text-xs text-[color:var(--color-text-secondary)]">{p.id}</td>
                        <td className="py-3 text-[color:var(--color-text-primary)]">{p.assignment}</td>
                        <td className="py-3 font-mono text-xs text-[color:var(--color-text-secondary)]">{p.bkash}</td>
                        <td className="py-3 text-right font-mono font-bold text-[#003A6E]">৳{p.amount.toLocaleString()}</td>
                        <td className="py-3 text-center">
                          <span className={`rounded-full px-2 py-0.5 font-mono text-[10px] font-semibold ${badge.className}`}>
                            {badge.label}
                          </span>
                        </td>
                        <td className="py-3 text-right text-xs text-[color:var(--color-text-secondary)]">{p.date}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
