"use client";

import {
  LayoutDashboard,
  Users,
  GraduationCap,
  CalendarDays,
  Trophy,
} from "lucide-react";
import { DashboardShell, type NavItem } from "@/components/layout/dashboard-shell";

const nav: NavItem[] = [
  { label: "Overview", href: "/dashboard/school", icon: LayoutDashboard },
  { label: "Teams", href: "/dashboard/school/teams", icon: Users },
  { label: "Workshops", href: "/dashboard/school/workshops", icon: GraduationCap },
  { label: "Events", href: "/dashboard/school/events", icon: CalendarDays, badge: "3" },
  {
    label: "Achievement showcase",
    href: "/dashboard/school/achievements",
    icon: Trophy,
  },
];

export default function SchoolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardShell
      nav={nav}
      role="school"
      userName="DRMC Project Lab"
      userMeta="Level 07 · Innovation Hub"
    >
      {children}
    </DashboardShell>
  );
}
