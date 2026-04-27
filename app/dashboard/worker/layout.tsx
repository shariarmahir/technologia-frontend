"use client";

import {
  LayoutDashboard,
  Search,
  ClipboardList,
  BanknoteIcon,
  UserCircle,
} from "lucide-react";
import { DashboardShell } from "@/components/layout/dashboard-shell";

const nav = [
  { label: "Overview", href: "/dashboard/worker", icon: LayoutDashboard },
  { label: "Browse assignments", href: "/dashboard/worker/browse", icon: Search },
  { label: "Active work", href: "/dashboard/worker/active", icon: ClipboardList },
  { label: "Earnings", href: "/dashboard/worker/earnings", icon: BanknoteIcon },
  { label: "My profile", href: "/dashboard/worker/profile", icon: UserCircle },
];

export default function WorkerLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardShell
      nav={nav}
      role="worker"
      userName="Nafis Hossain"
      userMeta="EEE · UAP"
    >
      {children}
    </DashboardShell>
  );
}
