"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Filter,
  Globe,
  Clock,
  DollarSign,
  FileText,
  Users,
  ChevronDown,
  Zap,
  BookOpen,
  Code2,
  FlaskConical,
  Briefcase,
  X,
} from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/status-badge";
import { openAssignments, type OpenAssignment, type SubjectArea } from "@/lib/mock-data";

const SUBJECT_FILTERS: { label: string; value: SubjectArea | "All"; icon: React.ElementType }[] = [
  { label: "All", value: "All", icon: Globe },
  { label: "EEE", value: "EEE", icon: Zap },
  { label: "CSE", value: "CSE", icon: Code2 },
  { label: "Chemistry", value: "Chemistry", icon: FlaskConical },
  { label: "MBA", value: "MBA", icon: Briefcase },
  { label: "Physics", value: "Physics", icon: BookOpen },
  { label: "Other", value: "Other", icon: FileText },
];

const TYPE_LABELS: Record<string, string> = {
  lab_report: "Lab Report",
  thesis: "Thesis",
  ieee_paper: "IEEE Paper",
  research: "Research",
  iot_project: "IoT Project",
  programming: "Programming",
  case_study: "Case Study",
  other: "Other",
};

const URGENCY_MAP = {
  high: { label: "Urgent", className: "bg-red-50 text-red-600 border border-red-200" },
  medium: { label: "Normal", className: "bg-amber-50 text-amber-700 border border-amber-200" },
  low: { label: "Flexible", className: "bg-emerald-50 text-emerald-700 border border-emerald-200" },
};

const FLAG: Record<string, string> = {
  UK: "🇬🇧", France: "🇫🇷", UAE: "🇦🇪", Canada: "🇨🇦",
  Italy: "🇮🇹", Australia: "🇦🇺", USA: "🇺🇸", Germany: "🇩🇪",
  Ireland: "🇮🇪",
};

function BidModal({ assignment, onClose }: { assignment: OpenAssignment; onClose: () => void }) {
  const [price, setPrice] = useState(assignment.budget.toString());
  const [days, setDays] = useState("3");
  const [proposal, setProposal] = useState("");
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
            <span className="text-3xl">✓</span>
          </div>
          <h3 className="font-display text-lg font-bold text-[#003A6E]">Bid submitted!</h3>
          <p className="mt-2 text-sm text-[color:var(--color-text-secondary)]">
            You'll be notified when the admin reviews bids for{" "}
            <span className="font-semibold text-[#003A6E]">{assignment.id}</span>.
          </p>
          <Button variant="primary" size="sm" className="mt-5 w-full" onClick={onClose}>
            Back to browse
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
        className="relative w-full max-w-lg rounded-2xl bg-white shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-[#E5E7EB] p-5">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-[color:var(--color-text-secondary)]">
              Place bid · {assignment.id}
            </p>
            <h3 className="mt-0.5 font-display text-base font-bold text-[#003A6E] leading-snug">
              {assignment.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="ml-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full hover:bg-[#F1F5F9]"
          >
            <X className="h-4 w-4 text-[color:var(--color-text-secondary)]" />
          </button>
        </div>

        <div className="space-y-4 p-5">
          <div className="rounded-xl border border-[#FFD662]/30 bg-[#FFFBEB] px-4 py-3 text-sm">
            <p className="text-[#92400E]">
              Client budget: <span className="font-bold text-[#003A6E]">${assignment.budget}</span>{" "}
              · Deadline: <span className="font-semibold">{assignment.deadline}</span>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-[color:var(--color-text-primary)]">
                Your price (USD)
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[color:var(--color-text-secondary)]" />
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full rounded-xl border border-[#00539C]/20 bg-white py-2.5 pl-9 pr-3 text-sm outline-none transition focus:border-[#00539C] focus:shadow-[0_0_0_4px_rgba(0,83,156,0.12)]"
                />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-[color:var(--color-text-primary)]">
                Delivery (days)
              </label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[color:var(--color-text-secondary)]" />
                <input
                  type="number"
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                  className="w-full rounded-xl border border-[#00539C]/20 bg-white py-2.5 pl-9 pr-3 text-sm outline-none transition focus:border-[#00539C] focus:shadow-[0_0_0_4px_rgba(0,83,156,0.12)]"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-semibold text-[color:var(--color-text-primary)]">
              Proposal <span className="font-normal text-[color:var(--color-text-secondary)]">(why are you the right person?)</span>
            </label>
            <textarea
              rows={4}
              value={proposal}
              onChange={(e) => setProposal(e.target.value)}
              placeholder="Briefly describe your relevant experience, approach, and why you can deliver quality work on time…"
              className="w-full resize-none rounded-xl border border-[#00539C]/20 bg-white p-3 text-sm outline-none transition placeholder:text-[#94A3B8] focus:border-[#00539C] focus:shadow-[0_0_0_4px_rgba(0,83,156,0.12)]"
            />
          </div>

          <div className="flex gap-2 pt-1">
            <Button variant="outline" size="sm" className="flex-1" onClick={onClose}>
              Cancel
            </Button>
            <Button
              variant="sky"
              size="sm"
              glow
              className="flex-1"
              onClick={() => setSubmitted(true)}
            >
              Submit bid
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function AssignmentCard({ assignment, onBid }: { assignment: OpenAssignment; onBid: (a: OpenAssignment) => void }) {
  const [expanded, setExpanded] = useState(false);
  const urgency = URGENCY_MAP[assignment.urgency];
  const flag = FLAG[assignment.clientCountry] ?? "🌐";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border border-[#E5E7EB] bg-white transition hover:border-[#00539C]/25 hover:shadow-[0_10px_32px_-8px_rgba(0,83,156,0.12)]"
    >
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[color:var(--color-text-secondary)]">
                {assignment.id}
              </span>
              <span className="rounded-full border border-[#00539C]/20 bg-[#EFF6FF] px-2 py-0.5 font-mono text-[10px] font-semibold text-[#003A6E]">
                {assignment.subjectArea}
              </span>
              <span className="rounded-full border border-[#E5E7EB] bg-[#F8FAFC] px-2 py-0.5 font-mono text-[10px] text-[color:var(--color-text-secondary)]">
                {TYPE_LABELS[assignment.assignmentType]}
              </span>
              <span className={`rounded-full px-2 py-0.5 font-mono text-[10px] font-semibold ${urgency.className}`}>
                {urgency.label}
              </span>
            </div>
            <p className="mt-2 font-display text-[0.95rem] font-semibold leading-snug text-[color:var(--color-text-primary)]">
              {assignment.title}
            </p>
          </div>
          <StatusBadge status={assignment.status} />
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-[color:var(--color-text-secondary)]">
          <span className="flex items-center gap-1">
            {flag} {assignment.clientCountry}
          </span>
          <span className="flex items-center gap-1">
            <DollarSign className="h-3.5 w-3.5" />
            <span className="font-semibold text-[#003A6E]">${assignment.budget}</span>
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            Due {assignment.deadline}
          </span>
          {assignment.pages && (
            <span className="flex items-center gap-1">
              <FileText className="h-3.5 w-3.5" />
              {assignment.pages} pages
            </span>
          )}
          {assignment.bids > 0 && (
            <span className="flex items-center gap-1">
              <Users className="h-3.5 w-3.5" />
              {assignment.bids} bid{assignment.bids !== 1 ? "s" : ""}
            </span>
          )}
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="mt-4 rounded-xl border border-[#E5E7EB] bg-[#F8FAFC] p-4">
                <p className="text-sm leading-relaxed text-[color:var(--color-text-secondary)]">
                  {assignment.description}
                </p>
              </div>

              {assignment.bidEntries && assignment.bidEntries.length > 0 && (
                <div className="mt-3">
                  <p className="mb-2 text-xs font-semibold text-[color:var(--color-text-secondary)] uppercase tracking-wider">
                    Current bids
                  </p>
                  <div className="space-y-2">
                    {assignment.bidEntries.map((bid) => (
                      <div key={bid.id} className="flex items-center justify-between rounded-xl border border-[#E5E7EB] bg-white px-4 py-2.5">
                        <div>
                          <p className="text-sm font-semibold text-[#003A6E]">{bid.workerName}</p>
                          <p className="text-xs text-[color:var(--color-text-secondary)]">
                            {bid.department} · {bid.university} · {bid.rating}★
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-mono text-sm font-bold text-[#003A6E]">${bid.proposedPrice}</p>
                          <p className="text-xs text-[color:var(--color-text-secondary)]">{bid.estimatedDays}d delivery</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-4 flex items-center gap-2">
          <Button variant="sky" size="sm" glow onClick={() => onBid(assignment)}>
            Place bid
          </Button>
          <button
            onClick={() => setExpanded((v) => !v)}
            className="inline-flex items-center gap-1 rounded-[10px] border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-semibold text-[color:var(--color-text-secondary)] transition hover:border-[#00539C]/30 hover:text-[#003A6E]"
          >
            {expanded ? "Less" : "Details"}
            <ChevronDown className={`h-3.5 w-3.5 transition-transform ${expanded ? "rotate-180" : ""}`} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function BrowseAssignments() {
  const [search, setSearch] = useState("");
  const [subject, setSubject] = useState<SubjectArea | "All">("All");
  const [sortBy, setSortBy] = useState<"newest" | "budget_high" | "deadline">("newest");
  const [biddingFor, setBiddingFor] = useState<OpenAssignment | null>(null);

  const filtered = openAssignments
    .filter((a) => {
      const matchSubject = subject === "All" || a.subjectArea === subject;
      const matchSearch =
        !search ||
        a.title.toLowerCase().includes(search.toLowerCase()) ||
        a.subjectArea.toLowerCase().includes(search.toLowerCase()) ||
        a.clientCountry.toLowerCase().includes(search.toLowerCase());
      return matchSubject && matchSearch;
    })
    .sort((a, b) => {
      if (sortBy === "budget_high") return b.budget - a.budget;
      if (sortBy === "deadline") return a.deadline.localeCompare(b.deadline);
      return b.id.localeCompare(a.id);
    });

  const postedCount = openAssignments.filter((a) => a.status === "posted").length;
  const biddingCount = openAssignments.filter((a) => a.status === "bidding").length;

  return (
    <>
      {biddingFor && (
        <BidModal assignment={biddingFor} onClose={() => setBiddingFor(null)} />
      )}

      <div className="space-y-7">
        <PageHeader
          eyebrow="Browse assignments"
          title="Find your next job."
          description="Open assignments from international students — filter by subject, place a bid, and start earning."
        />

        {/* Summary pills */}
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2 rounded-full border border-[#BAE6FD]/50 bg-[#EFF6FF] px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#003A6E]" />
            <span className="text-sm font-semibold text-[#003A6E]">{postedCount} newly posted</span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-[#FFD662]/40 bg-[#FFFBEB] px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#F59E0B]" />
            <span className="text-sm font-semibold text-[#92400E]">{biddingCount} accepting bids</span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-4 py-2">
            <span className="text-sm text-[color:var(--color-text-secondary)]">Your department: <span className="font-semibold text-[#003A6E]">EEE</span></span>
          </div>
        </div>

        {/* Filters row */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[color:var(--color-text-secondary)]" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by title, subject, country…"
              className="w-full rounded-xl border border-[#00539C]/20 bg-white py-2.5 pl-10 pr-4 text-sm outline-none transition placeholder:text-[#94A3B8] focus:border-[#00539C] focus:shadow-[0_0_0_4px_rgba(0,83,156,0.10)]"
            />
          </div>
          <div className="relative flex items-center">
            <Filter className="absolute left-3 h-4 w-4 text-[color:var(--color-text-secondary)]" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="appearance-none rounded-xl border border-[#00539C]/20 bg-white py-2.5 pl-9 pr-8 text-sm outline-none transition focus:border-[#00539C] cursor-pointer"
            >
              <option value="newest">Newest first</option>
              <option value="budget_high">Highest budget</option>
              <option value="deadline">Deadline soonest</option>
            </select>
          </div>
        </div>

        {/* Subject tabs */}
        <div className="flex flex-wrap gap-2">
          {SUBJECT_FILTERS.map(({ label, value, icon: Icon }) => (
            <button
              key={value}
              onClick={() => setSubject(value)}
              className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition ${
                subject === value
                  ? "border-[#003A6E] bg-[#003A6E] text-white shadow-[0_4px_14px_-4px_rgba(0,58,110,0.4)]"
                  : "border-[#E5E7EB] bg-white text-[color:var(--color-text-secondary)] hover:border-[#00539C]/30 hover:text-[#003A6E]"
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              {label}
            </button>
          ))}
        </div>

        {/* Results */}
        {filtered.length > 0 ? (
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-text-secondary)]">
              {filtered.length} assignment{filtered.length !== 1 ? "s" : ""} found
            </p>
            {filtered.map((a) => (
              <AssignmentCard key={a.id} assignment={a} onBid={setBiddingFor} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-[#E5E7EB] py-16 text-center">
            <Search className="h-10 w-10 text-[color:var(--color-text-secondary)]" />
            <p className="font-display font-semibold text-[color:var(--color-text-primary)]">No assignments found</p>
            <p className="text-sm text-[color:var(--color-text-secondary)]">Try clearing the search or changing the subject filter.</p>
            <Button variant="outline" size="sm" onClick={() => { setSearch(""); setSubject("All"); }}>
              Clear filters
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
