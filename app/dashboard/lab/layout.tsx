"use client";

import {
  LayoutDashboard,
  FlaskConical,
  Swords,
  Trophy,
  Users2,
  BarChart3,
} from "lucide-react";
import { DashboardShell, type NavItem } from "@/components/layout/dashboard-shell";

const nav: NavItem[] = [
  { label: "Overview", href: "/dashboard/lab", icon: LayoutDashboard },
  { label: "Workshops", href: "/dashboard/lab/workshops", icon: FlaskConical, badge: "2" },
  { label: "Challenges", href: "/dashboard/lab/challenges", icon: Swords, badge: "1" },
  { label: "Competitions", href: "/dashboard/lab/competitions", icon: Trophy },
  { label: "Leaderboard", href: "/dashboard/lab/leaderboard", icon: BarChart3 },
  { label: "Members", href: "/dashboard/lab/members", icon: Users2 },
];

export default function LabLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardShell
      nav={nav}
      role="lab"
      userName="UAP Embedded Systems Lab"
      userMeta="Rank #2 · 3,960 XP"
    >
      {children}
    </DashboardShell>
  );
}
