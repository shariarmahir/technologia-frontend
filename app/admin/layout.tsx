"use client";

import {
  LayoutDashboard,
  Kanban,
  Users,
  School,
  LineChart,
} from "lucide-react";
import { DashboardShell, type NavItem } from "@/components/layout/dashboard-shell";

const nav: NavItem[] = [
  { label: "Overview", href: "/admin", icon: LayoutDashboard },
  { label: "Work pipeline", href: "/admin/orders", icon: Kanban, badge: "8" },
  { label: "Employees", href: "/admin/employees", icon: Users },
  { label: "Partner schools", href: "/admin/schools", icon: School },
  { label: "Analytics", href: "/admin/analytics", icon: LineChart },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardShell
      nav={nav}
      role="admin"
      userName="Mahir Shariar"
      userMeta="Founder & CEO"
    >
      {children}
    </DashboardShell>
  );
}
