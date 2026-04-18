"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Bell,
  ChevronRight,
  LogOut,
  Menu,
  Search,
  Settings,
  X,
  type LucideIcon,
} from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { cn, initials } from "@/lib/utils";

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  badge?: string;
};

export function DashboardShell({
  nav,
  role,
  userName,
  userMeta,
  children,
}: {
  nav: NavItem[];
  role: "admin" | "client" | "school";
  userName: string;
  userMeta: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const roleLabel = {
    admin: "Admin Console",
    client: "Student Dashboard",
    school: "School Portal",
  }[role];

  return (
    <div className="flex min-h-screen w-full bg-[color:var(--color-surface)]">
      {/* Sidebar desktop */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-[260px] border-r border-[color:var(--color-border)] bg-gradient-to-b from-[#0F0B3D] via-[#141060] to-[#1B1464] text-white lg:block">
        <SidebarInner nav={nav} pathname={pathname} roleLabel={roleLabel} />
      </aside>

      {/* Sidebar mobile */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        <div
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-[#0F0B3D]/60 backdrop-blur-sm transition-opacity",
            open ? "opacity-100" : "opacity-0"
          )}
        />
        <aside
          className={cn(
            "absolute inset-y-0 left-0 w-[280px] bg-gradient-to-b from-[#0F0B3D] via-[#141060] to-[#1B1464] text-white shadow-2xl transition-transform",
            open ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex items-center justify-between px-5 pt-5">
            <Logo variant="light" />
            <button
              onClick={() => setOpen(false)}
              className="rounded-full p-2 text-white/70 hover:bg-white/10"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <SidebarInner
            nav={nav}
            pathname={pathname}
            roleLabel={roleLabel}
            onNavigate={() => setOpen(false)}
            hideLogo
          />
        </aside>
      </div>

      {/* Main */}
      <div className="flex min-h-screen flex-1 flex-col lg:pl-[260px]">
        <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-[color:var(--color-border)] bg-white/80 px-5 backdrop-blur-xl sm:px-8">
          <button
            onClick={() => setOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-border)] text-[color:var(--color-primary)] lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>

          <div className="relative hidden w-full max-w-md md:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[color:var(--color-text-secondary)]" />
            <input
              placeholder="Search orders, teams, events…"
              className="w-full rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface)] py-2 pl-9 pr-3 text-sm outline-none transition focus:border-[color:var(--color-accent)] focus:bg-white"
            />
          </div>

          <div className="ml-auto flex items-center gap-2">
            <button className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-border)] text-[color:var(--color-primary)] transition hover:bg-[color:var(--color-surface)]">
              <Bell className="h-4 w-4" />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[color:var(--color-accent)]" />
            </button>
            <button className="hidden h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-border)] text-[color:var(--color-primary)] transition hover:bg-[color:var(--color-surface)] sm:inline-flex">
              <Settings className="h-4 w-4" />
            </button>
            <div className="ml-1 flex items-center gap-2.5 rounded-full border border-[color:var(--color-border)] bg-white py-1 pl-1 pr-3.5 shadow-sm">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#1B1464] to-[#7C3AED] text-xs font-semibold text-white">
                {initials(userName)}
              </span>
              <div className="hidden text-left leading-tight sm:block">
                <p className="text-xs font-semibold text-[color:var(--color-text-primary)]">
                  {userName}
                </p>
                <p className="text-[10px] text-[color:var(--color-text-secondary)]">
                  {userMeta}
                </p>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 px-5 py-6 sm:px-8 sm:py-8">{children}</main>
      </div>
    </div>
  );
}

function SidebarInner({
  nav,
  pathname,
  roleLabel,
  onNavigate,
  hideLogo = false,
}: {
  nav: NavItem[];
  pathname: string;
  roleLabel: string;
  onNavigate?: () => void;
  hideLogo?: boolean;
}) {
  return (
    <div className="flex h-full flex-col">
      {!hideLogo && (
        <div className="px-6 pt-7">
          <Logo variant="light" />
        </div>
      )}
      <div className="mt-6 px-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-accent-light)]">
          <span className="h-1 w-1 rounded-full bg-[color:var(--color-accent-light)]" />
          {roleLabel}
        </span>
      </div>

      <nav className="mt-6 flex-1 space-y-1 px-3">
        {nav.map((item) => {
          const active =
            pathname === item.href ||
            (item.href !== "/" && pathname.startsWith(item.href + "/"));
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={cn(
                "group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition",
                active
                  ? "bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
                  : "text-white/65 hover:bg-white/5 hover:text-white"
              )}
            >
              {active && (
                <span className="absolute -left-3 top-1/2 h-7 w-1 -translate-y-1/2 rounded-r-full bg-[color:var(--color-accent-light)] shadow-[0_0_18px_rgba(167,139,250,0.7)]" />
              )}
              <Icon className="h-4 w-4" />
              <span className="flex-1">{item.label}</span>
              {item.badge && (
                <span className="rounded-full bg-[color:var(--color-accent)]/90 px-1.5 py-0.5 text-[10px] font-semibold text-white">
                  {item.badge}
                </span>
              )}
              {active && (
                <ChevronRight className="h-3.5 w-3.5 text-white/60" />
              )}
            </Link>
          );
        })}
      </nav>

      <div className="m-4 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-4 text-white">
        <p className="font-display text-sm font-semibold">Need support?</p>
        <p className="mt-1 text-xs text-white/65">
          Chat with our team any time — we reply within an hour.
        </p>
        <button className="mt-3 w-full rounded-full bg-[color:var(--color-accent)] py-2 text-xs font-semibold shadow-lg shadow-purple-500/30 transition hover:bg-[color:var(--color-accent-light)]">
          Contact support
        </button>
      </div>

      <Link
        href="/"
        className="mx-3 mb-4 flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm text-white/60 transition hover:bg-white/5 hover:text-white"
      >
        <LogOut className="h-4 w-4" /> Sign out
      </Link>
    </div>
  );
}
