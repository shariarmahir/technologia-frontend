"use client";

import { LayoutDashboard, FileText, Wallet, MessagesSquare } from "lucide-react";
import { DashboardShell, type NavItem } from "@/components/layout/dashboard-shell";

const nav: NavItem[] = [
  { label: "Overview", href: "/dashboard/client", icon: LayoutDashboard },
  { label: "My orders", href: "/dashboard/client/orders", icon: FileText, badge: "3" },
  { label: "Expenses", href: "/dashboard/client/expenses", icon: Wallet },
  { label: "Remarks", href: "/dashboard/client/remarks", icon: MessagesSquare },
];

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardShell
      nav={nav}
      role="client"
      userName="Ishrat Rahman"
      userMeta="MSc · Manchester · Client"
    >
      {children}
    </DashboardShell>
  );
}
